import BlogCarousel from "./BlogCarousel";
import { fetchLatestPosts } from "@/lib/sanityApi";

export default async function BlogCarouselServer() {
  const posts = await fetchLatestPosts();
  return <BlogCarousel posts={posts} />;
}
