"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { urlFor } from "@/lib/imageBuilder";
import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";
import BlogCategories from "./BlogCategories";
import BlogContactForm from "./BlogContactForm";
import BlogTrendingPosts from "./BlogTrendingPosts";
import BlogCard, { type BlogListPost } from "./BlogCard";
import type { Category } from "./BlogCategories";
import type { TrendingPost } from "./BlogTrendingPosts";

type BlogLayoutClientProps = {
  posts: BlogListPost[];
  categories: Category[];
  trendingPosts: TrendingPost[];
};

export default function BlogLayoutClient({
  posts,
  categories,
  trendingPosts,
}: BlogLayoutClientProps) {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const activeCategory = useMemo(() => {
    const raw = searchParams?.get("category");
    const trimmed = raw?.trim();
    return trimmed ? trimmed : undefined;
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    if (activeCategory) {
      const normalizedActive = activeCategory.trim().toLowerCase();
      filtered = filtered.filter((post) => {
        const postCategories = post.categories ?? [];
        return postCategories.some((cat) => {
          const slug = cat.slug?.current?.trim().toLowerCase();
          const title = cat.title?.trim().toLowerCase();
          return slug === normalizedActive || title === normalizedActive;
        });
      });
    }

    if (searchTerm.trim()) {
      const normalizedSearch = searchTerm.trim().toLowerCase();
      filtered = filtered.filter((post) => {
        const title = post.title?.toLowerCase() || "";
        const excerpt = post.excerpt?.toLowerCase() || "";
        return (
          title.includes(normalizedSearch) || excerpt.includes(normalizedSearch)
        );
      });
    }

    return filtered;
  }, [activeCategory, posts, searchTerm]);

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#0f172a]">
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
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-sans">
              Insights, updates, and expert guides from the A2Z Accounting team
              to help you navigate the world of business and finance.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side: Blogs Grid */}
          <div className="lg:col-span-2">
            {!filteredPosts.length ? (
              <div className="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
                <p className="text-[#334155]">
                  No posts found{activeCategory ? " for this category" : ""}.
                </p>
              </div>
            ) : null}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </div>

          {/* Right Side: Sidebar */}
          <div className="space-y-8 bg-[#f9fafb] p-4 rounded-md">
            <BlogCategories
              categories={categories}
              activeCategory={activeCategory}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            {/* <BlogContactForm /> */}
            <BlogTrendingPosts posts={trendingPosts} />
          </div>
        </div>
      </div>
    </main>
  );
}
