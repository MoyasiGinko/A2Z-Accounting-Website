import BlogCarousel from "./BlogCarousel";
import { fetchLatestPostsFresh } from "@/lib/sanityApi";

export default async function BlogCarouselServer() {
  const posts = await fetchLatestPostsFresh();
  return <BlogCarousel posts={posts} />;
}
