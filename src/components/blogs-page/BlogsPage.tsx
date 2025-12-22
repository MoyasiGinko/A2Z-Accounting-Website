import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { portableTextComponents } from "@/lib/portableTextComponents";
import { urlFor } from "@/lib/imageBuilder";
import BlogCard, { type BlogListPost } from "./BlogCard";

type BlogsPageProps = {
  posts: BlogListPost[];
};

export default function BlogsPage({ posts }: BlogsPageProps) {
  if (!posts.length) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-[#f7f8fa] text-[#0f172a]">
        <p className="text-lg text-[#334155]">
          No posts available yet. Check back soon.
        </p>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
