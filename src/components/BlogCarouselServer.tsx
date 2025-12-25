"use client";

import { useState, useEffect } from "react";
import BlogCarousel from "./BlogCarousel";
import { fetchLatestPosts, type SanityPost } from "@/lib/sanityApi";

const BlogCarouselServer = () => {
  const [posts, setPosts] = useState<SanityPost[]>([]);

  useEffect(() => {
    let isMounted = true;
    fetchLatestPosts().then((fetched) => {
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
