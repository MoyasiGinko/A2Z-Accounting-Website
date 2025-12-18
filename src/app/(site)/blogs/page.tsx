import { groq } from "next-sanity";
import BlogLayoutClient from "@/components/blogs-page/BlogLayoutClient";
import { BlogListPost } from "@/components/blogs-page/BlogsPage";
import { sanityFetch } from "@/lib/sanity.client";
import type { Category } from "@/components/blogs-page/BlogCategories";
import type { TrendingPost } from "@/components/blogs-page/BlogTrendingPosts";

export const revalidate = 60;

const postsQuery = groq`*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  categories[]->{title, slug},
  mainImage,
  content[0..2]
}`;

const categoriesQuery = groq`*[_type == "category"] | order(title asc){
  title,
  slug
}`;

const trendingPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...6]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage
}`;

export default async function BlogsRoute() {
  const [posts, categories, trendingPosts] = await Promise.all([
    sanityFetch<BlogListPost[]>(postsQuery),
    sanityFetch<Category[]>(categoriesQuery),
    sanityFetch<TrendingPost[]>(trendingPostsQuery),
  ]);

  return (
    <BlogLayoutClient
      posts={posts}
      categories={categories}
      trendingPosts={trendingPosts}
    />
  );
}
