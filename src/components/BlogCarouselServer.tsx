"use client";

import { useState, useEffect } from "react";
import BlogCarousel from "./BlogCarousel";
import { sanityFetch } from "@/lib/sanity.client";

type SanityCategory = {
  title?: string;
  slug?: string;
};

type SanityPost = {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: unknown;
  mainImageAlt?: string;
  categories?: SanityCategory[];
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

let postsCache: SanityPost[] | null = null;
let postsPromise: Promise<SanityPost[]> | null = null;

const loadPostsOnce = async (): Promise<SanityPost[]> => {
  if (postsCache) return postsCache;
  if (!postsPromise) {
    postsPromise = sanityFetch<SanityPost[]>(BLOG_POSTS_QUERY)
      .then((result) => {
        postsCache = result ?? [];
        return postsCache;
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Failed to fetch blog posts:", error);
        postsCache = [];
        return postsCache;
      })
      .finally(() => {
        postsPromise = null;
      });
  }
  return postsPromise;
};

const BlogCarouselServer = () => {
  const [posts, setPosts] = useState<SanityPost[]>([]);

  useEffect(() => {
    let isMounted = true;
    loadPostsOnce().then((fetched) => {
      if (isMounted) {
        setPosts(fetched);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return <BlogCarousel posts={posts} />;
};

export default BlogCarouselServer;
