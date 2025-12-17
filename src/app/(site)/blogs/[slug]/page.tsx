import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import BlogDetailsLayoutClient from "@/components/blogs-page/BlogDetailsLayoutClient";
import { sanityFetch } from "@/lib/sanity.client";

interface BlogPostType {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  author: any; // Define more specifically if needed
  excerpt: string;
  categories: { title: string; slug: { current: string } }[];
  mainImage: any; // Define more specifically if needed
  content: any; // Define more specifically if needed
}

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
  const post = await sanityFetch<BlogPostType | null>(postQuery, { slug });

  if (!post) {
    notFound();
  }

  return <BlogDetailsLayoutClient post={post} />;
}
