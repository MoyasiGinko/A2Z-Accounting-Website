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

const genericMemoryCache = new Map<string, unknown>();
const genericInFlight = new Map<string, Promise<unknown>>();

// Shared cache for latest posts
let latestPostsCache: SanityPost[] | null = null;

export const fetchLatestPosts = async (): Promise<SanityPost[]> => {
  if (latestPostsCache) {
    return latestPostsCache;
  }
  try {
    const posts = await sanityFetch<SanityPost[]>(BLOG_POSTS_QUERY);
    latestPostsCache = posts ?? [];
    return latestPostsCache;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to fetch latest posts:", error);
    return [];
  }
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
    const safePosts = posts ?? [];
    // Update the shared cache for latest posts
    latestPostsCache = safePosts.slice(0, 4);
    return safePosts;
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
