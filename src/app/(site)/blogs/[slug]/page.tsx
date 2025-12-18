import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import BlogDetailsLayoutClient from "@/components/blogs-page/BlogDetailsLayoutClient";
import { sanityFetch } from "@/lib/sanity.client";
import type { BlogPost } from "@/components/blogs-page/BlogDetails";
import type { Category } from "@/components/blogs-page/BlogCategories";
import type { TrendingPost } from "@/components/blogs-page/BlogTrendingPosts";

export const revalidate = 60;

const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  author,
  excerpt,
  categories[]->{title, slug},
  mainImage,
  content
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

const slugQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(slugQuery);
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, categories, trendingPosts] = await Promise.all([
    sanityFetch<BlogPost | null>(postQuery, { slug }),
    sanityFetch<Category[]>(categoriesQuery),
    sanityFetch<TrendingPost[]>(trendingPostsQuery),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <BlogDetailsLayoutClient
      post={post}
      categories={categories}
      trendingPosts={trendingPosts}
    />
  );
}
