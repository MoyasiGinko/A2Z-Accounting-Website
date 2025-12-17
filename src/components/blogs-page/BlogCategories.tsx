"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sanityFetch } from "@/lib/sanity.client";
import { groq } from "next-sanity";

type Category = {
  title?: string;
  slug?: { current?: string };
};

export default function BlogCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const categoriesQuery = groq`*[_type == "category"]{title, slug}`;
    sanityFetch<Category[]>(categoriesQuery).then(setCategories);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-[#162C45] mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.slug?.current || cat.title}>
            <Link
              href={`/blogs?category=${cat.slug?.current || cat.title}`}
              className="text-[#334155] hover:text-[#162C45] transition"
            >
              {cat.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
