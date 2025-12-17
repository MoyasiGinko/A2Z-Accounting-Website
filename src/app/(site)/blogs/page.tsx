import { groq } from "next-sanity";
import BlogLayoutClient from "@/components/blogs-page/BlogLayoutClient";
import { BlogListPost } from "@/components/blogs-page/BlogsPage";
import { sanityFetch } from "@/lib/sanity.client";

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

export default async function BlogsRoute() {
  const posts = await sanityFetch<BlogListPost[]>(postsQuery);
  return <BlogLayoutClient posts={posts} />;
}
