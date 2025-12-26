import { sanityClient, sanityFetch } from "./sanity.client";

export type SanityCategory = {
  title?: string;
  slug?: string | { current?: string };
};

export type SanityPost = {
  _id: string;
  title?: string;
  slug?: string | { current?: string };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: unknown;
  mainImageAlt?: string;
  categories?: SanityCategory[];
  isTrending?: boolean;
};

export type SanityPostDetailed = SanityPost & {
  author?: string;
  content?: unknown;
};

const BLOG_POSTS_QUERY = `
  *[_type == "post" && defined(slug.current) && defined(publishedAt)]
    | order(publishedAt desc)[0...4] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      mainImage,
      "mainImageAlt": mainImage.alt,
      categories[]->{
        title,
        "slug": slug.current
      }
    }
`;

const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    categories[]->{
      title,
      "slug": slug
    },
    mainImage,
    content[0..2]
  }
`;

const CATEGORIES_QUERY = `
  *[_type == "category"] | order(title asc){
    title,
    "slug": slug
  }
`;

const TRENDING_POSTS_QUERY = `
  *[_type == "post" && defined(slug.current) && isTrending == true]
    | order(publishedAt desc)[0...6]{
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      isTrending
    }
`;

const TRENDING_FALLBACK_QUERY = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...6]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    isTrending
  }
`;

const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    author,
    excerpt,
    categories[]->{title, slug},
    mainImage,
    content
  }
`;

const SLUGS_QUERY = `*[_type == "post" && defined(slug.current)][].slug.current`;

type CacheEntry = {
  data: SanityPost[];
  timestamp: number;
};

const memoryCache = new Map<string, CacheEntry>();
const inFlight = new Map<string, Promise<SanityPost[]>>();
const SESSION_KEY_LATEST = "sanity_latest_posts_v1";

const genericMemoryCache = new Map<string, unknown>();
const genericInFlight = new Map<string, Promise<unknown>>();

const readSession = (): SanityPost[] | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(SESSION_KEY_LATEST);
    if (!raw) return null;
    return JSON.parse(raw) as SanityPost[];
  } catch {
    return null;
  }
};

const writeSession = (posts: SanityPost[]) => {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(SESSION_KEY_LATEST, JSON.stringify(posts));
  } catch {
    // ignore quota / availability errors
  }
};

export const fetchLatestPosts = async (): Promise<SanityPost[]> => {
  const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  const cachedSession = readSession();
  if (cachedSession?.length) {
    memoryCache.set(SESSION_KEY_LATEST, {
      data: cachedSession,
      timestamp: Date.now(),
    });
    return cachedSession;
  }

  const cachedEntry = memoryCache.get(SESSION_KEY_LATEST);
  if (cachedEntry && Date.now() - cachedEntry.timestamp < CACHE_TTL) {
    return cachedEntry.data;
  }

  const pending = inFlight.get(SESSION_KEY_LATEST);
  if (pending) return pending;

  const fetchPromise = sanityFetch<SanityPost[]>(BLOG_POSTS_QUERY)
    .then((posts) => {
      const safePosts = posts ?? [];
      memoryCache.set(SESSION_KEY_LATEST, {
        data: safePosts,
        timestamp: Date.now(),
      });
      writeSession(safePosts);
      return safePosts;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error("Failed to fetch latest posts:", error);
      memoryCache.set(SESSION_KEY_LATEST, { data: [], timestamp: Date.now() });
      return [];
    })
    .finally(() => {
      inFlight.delete(SESSION_KEY_LATEST);
    });

  inFlight.set(SESSION_KEY_LATEST, fetchPromise);
  return fetchPromise;
};

const fetchWithMemory = async <T>(key: string, fn: () => Promise<T>) => {
  if (genericMemoryCache.has(key)) {
    return genericMemoryCache.get(key) as T;
  }

  const pending = genericInFlight.get(key);
  if (pending) return pending as Promise<T>;

  const promise = fn()
    .then((data) => {
      genericMemoryCache.set(key, data);
      return data;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(`Failed to fetch ${key}:`, error);
      return null as T;
    })
    .finally(() => {
      genericInFlight.delete(key);
    });

  genericInFlight.set(key, promise);
  return promise;
};

export const fetchAllPosts = async () => {
  try {
    const posts = await sanityClient.fetch<SanityPost[]>(
      POSTS_QUERY,
      {},
      {
        cache: "force-cache",
        next: { revalidate: 60 },
      }
    );
    return posts ?? [];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to fetch all posts:", error);
    return [];
  }
};

export const fetchCategories = async () => {
  const result = await fetchWithMemory("categories", () =>
    sanityFetch<SanityCategory[]>(CATEGORIES_QUERY)
  );

  return (Array.isArray(result) ? result : []) as SanityCategory[];
};

export const fetchTrendingPosts = async () => {
  try {
    const trending = await sanityClient.fetch<SanityPost[]>(
      TRENDING_POSTS_QUERY,
      {},
      {
        cache: "force-cache",
        next: { revalidate: 60 },
      }
    );

    if (trending?.length) {
      return trending;
    }

    const fallback = await sanityClient.fetch<SanityPost[]>(
      TRENDING_FALLBACK_QUERY,
      {},
      {
        cache: "force-cache",
        next: { revalidate: 60 },
      }
    );

    return fallback ?? [];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to fetch trending posts:", error);
    return [];
  }
};

export const fetchPostBySlug = (slug: string) =>
  fetchWithMemory(`post:${slug}`, () =>
    sanityFetch<SanityPostDetailed | null>(POST_BY_SLUG_QUERY, { slug })
  );

export const fetchAllPostSlugs = () =>
  fetchWithMemory("post-slugs", () => sanityFetch<string[]>(SLUGS_QUERY));
