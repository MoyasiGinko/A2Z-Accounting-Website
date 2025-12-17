"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sanityFetch } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { urlFor } from "@/lib/imageBuilder";
import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";
import BlogCategories from "./BlogCategories";
import BlogContactForm from "./BlogContactForm";
import BlogTrendingPosts from "./BlogTrendingPosts";

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

type Category = {
  title?: string;
  slug?: { current?: string };
};

type BlogLayoutClientProps = {
  posts: BlogListPost[];
};

export default function BlogLayoutClient({ posts }: BlogLayoutClientProps) {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <header className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#0f172a]/60">
            Insights
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#162C45]">
            Our Blog
          </h1>
          <p className="mt-3 text-[#334155] text-lg">
            Insights, updates, and guides from the A2Z team.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side: Blogs Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => {
                const href = post.slug?.current
                  ? `/blogs/${post.slug.current}`
                  : "#";
                const imageUrl = post.mainImage
                  ? urlFor(post.mainImage).width(800).height(450).url()
                  : null;

                return (
                  <article
                    key={post._id}
                    className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
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
                            className="px-2 py-1 bg-[#84C9E2]/20 rounded-full"
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
            <BlogCategories />
            <BlogContactForm />
            <BlogTrendingPosts />
          </div>
        </div>
      </div>
    </main>
  );
}
