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
      <section
        className="relative overflow-hidden text-white pt-32 pb-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(22,44,69,0.35), rgba(30,58,95,0.55)), url("https://cf.bstatic.com/xdata/images/hotel/max1024x768/578679517.jpg?k=8a8c9c18ed2f6228c7ac2ee83c900e03269d75aa71e4568f9844ddfdb858b3fb&o=")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xs pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl ">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-serif">
              {post.categories?.map((cat) => (
                <span key={cat.slug?.current || cat.title}>{cat.title}</span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-sans">
              Insights, updates, and expert guides from the A2Z Accounting team
              to help you navigate the world of business and finance.
            </p>
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
