"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sanityFetch } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { urlFor } from "@/lib/imageBuilder";
import type { PortableTextBlock } from "@portabletext/types";

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

export default function BlogTrendingPosts() {
  const [trendingPosts, setTrendingPosts] = useState<BlogListPost[]>([]);

  useEffect(() => {
    const trendingQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...6]{
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      categories[]->{title, slug},
      mainImage,
      content[0..2]
    }`;
    sanityFetch<BlogListPost[]>(trendingQuery).then(setTrendingPosts);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-[#162C45] mb-4">
        Trending Posts
      </h3>
      <ul className="space-y-4">
        {trendingPosts.map((post) => (
          <li key={post._id}>
            <Link
              href={`/blogs/${post.slug?.current}`}
              className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded transition"
            >
              {post.mainImage ? (
                <img
                  src={urlFor(post.mainImage).width(80).height(60).url()}
                  alt={post.title}
                  className="w-20 h-15 object-cover rounded"
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
        ))}
      </ul>
    </div>
  );
}
