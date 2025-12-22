"use client";

import { useRouter } from "next/navigation";
import BlogDetails, { BlogPost } from "./BlogDetails";
import BlogCategories from "./BlogCategories";
import BlogContactForm from "./BlogContactForm";
import BlogTrendingPosts from "./BlogTrendingPosts";
import type { Category } from "./BlogCategories";
import type { TrendingPost } from "./BlogTrendingPosts";

type BlogDetailsLayoutClientProps = {
  post: BlogPost;
  categories: Category[];
  trendingPosts: TrendingPost[];
};

export default function BlogDetailsLayoutClient({
  post,
  categories,
  trendingPosts,
}: BlogDetailsLayoutClientProps) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/blogs");
  };

  return (
    <main className="min-h-screen bg-white text-[#0f172a]">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#162C45] to-[#1e3a5f] text-white py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-2">
              {post.categories?.map((cat) => (
                <span
                  key={cat.slug?.current || cat.title}
                  className="px-3 py-1 bg-[#84C9E2]/20 text-[#84C9E2] rounded-md text-sm font-medium"
                >
                  {cat.title}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-300">
              {post.author && (
                <div className="flex items-center gap-2">
                  <span className="text-sm">By {post.author}</span>
                </div>
              )}
              {post.publishedAt && (
                <div className="flex items-center gap-2">
                  <span className="text-sm">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 mb-8 px-3 py-2 rounded-md bg-primary/10 hover:bg-primary/15 transition text-sm font-medium"
          aria-label="Back to blogs"
        >
          <span aria-hidden>←</span>
          Back to Home
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side: Blog Details */}
          <div className="lg:col-span-2">
            <BlogDetails post={post} />
          </div>

          {/* Right Side: Sidebar */}
          <div className="space-y-8 bg-[#f9fafb] p-4 rounded-md">
            {/* <BlogCategories categories={categories} /> */}
            <BlogContactForm />
            <BlogTrendingPosts posts={trendingPosts} />
          </div>
        </div>
      </div>
    </main>
  );
}
