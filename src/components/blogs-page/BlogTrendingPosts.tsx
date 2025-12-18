"use client";

import Link from "next/link";
import { urlFor } from "@/lib/imageBuilder";
import type { PortableTextBlock } from "@portabletext/types";

export type TrendingPost = {
  _id: string;
  title: string;
  slug?: { current?: string };
  excerpt?: string;
  publishedAt?: string;
  categories?: { title?: string; slug?: { current?: string } }[];
  mainImage?: unknown;
  content?: PortableTextBlock[];
};

type BlogTrendingPostsProps = {
  posts?: TrendingPost[];
};

export default function BlogTrendingPosts({
  posts = [],
}: BlogTrendingPostsProps) {
  return (
    <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-[#162C45] mb-4">
        Trending Posts
      </h3>
      <ul className="space-y-4">
        {posts.length ? (
          posts.map((post) => (
            <li key={post._id}>
              <Link
                href={`/blogs/${post.slug?.current}`}
                className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded transition"
              >
                {post.mainImage ? (
                  <img
                    src={urlFor(post.mainImage).width(80).height(60).url()}
                    alt={post.title}
                    className="w-20 h-16 object-cover rounded"
                  />
                ) : null}
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-[#162C45] line-clamp-2">
                    {post.title}
                  </h4>
                  {post.publishedAt ? (
                    <p className="text-xs text-[#94a3b8]">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                  ) : null}
                </div>
              </Link>
            </li>
          ))
        ) : (
          <li className="text-sm text-[#94a3b8]">No trending posts yet.</li>
        )}
      </ul>
    </div>
  );
}
