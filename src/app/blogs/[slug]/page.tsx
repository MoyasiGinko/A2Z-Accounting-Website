import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import BlogDetails, { BlogPost } from "@/components/blogs-page/BlogDetails";
import { sanityFetch } from "@/lib/sanity.client";

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
  const post = await sanityFetch<BlogPost | null>(postQuery, { slug });

  if (!post) {
    notFound();
  }

  return <BlogDetails post={post} />;
}
