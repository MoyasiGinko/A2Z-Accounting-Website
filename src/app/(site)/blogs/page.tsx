import BlogLayoutClient from "@/components/blogs-page/BlogLayoutClient";
import {
  fetchAllPosts,
  fetchCategories,
  fetchTrendingPosts,
} from "@/lib/sanityApi";
import type { BlogListPost } from "@/components/blogs-page/BlogCard";
import type { Category } from "@/components/blogs-page/BlogCategories";
import type { TrendingPost } from "@/components/blogs-page/BlogTrendingPosts";
import BlogCTA from "@/components/blogs-page/BlogCTA";

export const revalidate = 60;

export default async function BlogsRoute() {
  const [posts, categories, trendingPosts] = await Promise.all([
    fetchAllPosts() as Promise<BlogListPost[]>,
    fetchCategories() as Promise<Category[]>,
    fetchTrendingPosts() as Promise<TrendingPost[]>,
  ]);

  return (
    <>
      <BlogLayoutClient
        posts={posts}
        categories={categories}
        trendingPosts={trendingPosts}
      />
      <BlogCTA />
    </>
  );
}
