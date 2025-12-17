"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sanityFetch } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { urlFor } from "@/lib/imageBuilder";
import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";
import BlogDetails, { BlogPost } from "./BlogDetails";
import BlogCategories from "./BlogCategories";
import BlogContactForm from "./BlogContactForm";
import BlogTrendingPosts from "./BlogTrendingPosts";

type Category = {
  title?: string;
  slug?: { current?: string };
};

type BlogListPost = {
  _id: string;
  title: string;
  slug?: { current?: string };
  excerpt?: string;
  publishedAt?: string;
  categories?: { title?: string; slug?: { current?: string } }[];
  mainImage?: unknown;
  content?: PortableTextBlock[];
};

type BlogDetailsLayoutClientProps = {
  post: BlogPost;
};

export default function BlogDetailsLayoutClient({
  post,
}: BlogDetailsLayoutClientProps) {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side: Blog Details */}
          <div className="lg:col-span-2">
            <BlogDetails post={post} />
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
