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

const BlogCarouselServer = () => {
  const [posts, setPosts] = useState<SanityPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await sanityFetch<SanityPost[]>(BLOG_POSTS_QUERY);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
        // posts remains empty, will use fallbacks
      }
    };

    fetchPosts();
  }, []);

  return <BlogCarousel posts={posts} />;
};

export default BlogCarouselServer;
