"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { urlFor } from "@/lib/imageBuilder";
import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";
import BlogCategories from "./BlogCategories";
import BlogContactForm from "./BlogContactForm";
import BlogTrendingPosts from "./BlogTrendingPosts";
import type { Category } from "./BlogCategories";
import type { TrendingPost } from "./BlogTrendingPosts";

export type BlogListPost = {
  _id: string;
  title: string;
  slug?: { current?: string };
  excerpt?: string;
  publishedAt?: string;
  categories?: { title?: string; slug?: { current?: string } }[];
  mainImage?: unknown;
  content?: PortableTextBlock[];
};

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

  const activeCategory = useMemo(() => {
    const raw = searchParams?.get("category");
    const trimmed = raw?.trim();
    return trimmed ? trimmed : undefined;
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    if (!activeCategory) return posts;

    const normalizedActive = activeCategory.trim().toLowerCase();

    return posts.filter((post) => {
      const postCategories = post.categories ?? [];
      return postCategories.some((cat) => {
        const slug = cat.slug?.current?.trim().toLowerCase();
        const title = cat.title?.trim().toLowerCase();
        return slug === normalizedActive || title === normalizedActive;
      });
    });
  }, [activeCategory, posts]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0f172a]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#162C45] to-[#1e3a5f] text-white py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#84C9E2]/20 text-[#84C9E2] rounded-md text-sm font-medium mb-6">
              Insights & Updates
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => {
                const href = post.slug?.current
                  ? `/blogs/${post.slug.current}`
                  : "#";
                const imageUrl = post.mainImage
                  ? urlFor(post.mainImage).width(800).height(450).url()
                  : null;

                return (
                  <article
                    key={post._id}
                    className="rounded-md border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
                  >
                    {imageUrl ? (
                      <Link href={href} aria-label={`Read more: ${post.title}`}>
                        <img
                          src={imageUrl}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                      </Link>
                    ) : null}

                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-[#0f172a]/70">
                        {post.categories?.map((cat) => (
                          <span
                            key={cat.slug?.current || cat.title}
                            className="px-2 py-1 bg-[#84C9E2]/20 rounded-md"
                          >
                            {cat.title}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-[#162C45]">
                          <Link href={href}>{post.title}</Link>
                        </h2>
                        {post.publishedAt ? (
                          <p className="text-sm text-[#94a3b8]">
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </p>
                        ) : null}
                      </div>

                      {post.excerpt ? (
                        <p className="text-[#334155] line-clamp-3">
                          {post.excerpt}
                        </p>
                      ) : null}

                      {post.content?.length ? (
                        <div className="text-sm text-[#475569] line-clamp-4">
                          <PortableText
                            value={post.content}
                            components={portableTextComponents}
                          />
                        </div>
                      ) : null}

                      <Link
                        href={href}
                        className="inline-flex items-center text-[#162C45] font-semibold hover:text-[#0f172a]"
                      >
                        Read more
                        <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right Side: Sidebar */}
          <div className="space-y-8">
            <BlogCategories
              categories={categories}
              activeCategory={activeCategory}
            />
            <BlogContactForm />
            <BlogTrendingPosts posts={trendingPosts} />
          </div>
        </div>
      </div>
    </main>
  );
}
