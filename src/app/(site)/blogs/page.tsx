import { groq } from "next-sanity";
import BlogLayoutClient from "@/components/blogs-page/BlogLayoutClient";
import { BlogListPost } from "@/components/blogs-page/BlogsPage";
import { sanityFetch } from "@/lib/sanity.client";
import type { Category } from "@/components/blogs-page/BlogCategories";
import type { TrendingPost } from "@/components/blogs-page/BlogTrendingPosts";
import BlogCTA from "@/components/blogs-page/BlogCTA";

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

const postsByCategoryQuery = groq`*[_type == "post" && (
  $category in categories[]->slug.current ||
  $category in categories[]->title
)] | order(publishedAt desc){
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

export default async function BlogsRoute({
  searchParams,
}: {
  searchParams?: { category?: string | string[] };
}) {
  const categoryParam = Array.isArray(searchParams?.category)
    ? searchParams?.category[0]
    : searchParams?.category;

  const activeCategory = categoryParam?.trim() || undefined;

  const [posts, categories, trendingPosts] = await Promise.all([
    activeCategory
      ? sanityFetch<BlogListPost[]>(postsByCategoryQuery, {
          category: activeCategory,
        })
      : sanityFetch<BlogListPost[]>(postsQuery),
    sanityFetch<Category[]>(categoriesQuery),
    sanityFetch<TrendingPost[]>(trendingPostsQuery),
  ]);

  return (
    <>
      <BlogLayoutClient
        posts={posts}
        categories={categories}
        trendingPosts={trendingPosts}
        activeCategory={activeCategory}
      />
      <BlogCTA />
    </>
  );
}
