import { notFound } from "next/navigation";
import BlogDetailsLayoutClient from "@/components/blogs-page/BlogDetailsLayoutClient";
import type { BlogPost } from "@/components/blogs-page/BlogDetails";
import type { Category } from "@/components/blogs-page/BlogCategories";
import type { TrendingPost } from "@/components/blogs-page/BlogTrendingPosts";
import BlogCTA from "@/components/blogs-page/BlogCTA";
import {
  fetchPostBySlug,
  fetchCategories,
  fetchTrendingPosts,
  fetchAllPostSlugs,
} from "@/lib/sanityApi";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await fetchAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, categories, trendingPosts] = await Promise.all([
    fetchPostBySlug(slug) as Promise<BlogPost | null>,
    fetchCategories() as Promise<Category[]>,
    fetchTrendingPosts() as Promise<TrendingPost[]>,
  ]);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogDetailsLayoutClient
        post={post}
        categories={categories}
        trendingPosts={trendingPosts}
      />
      <BlogCTA />
    </>
  );
}
