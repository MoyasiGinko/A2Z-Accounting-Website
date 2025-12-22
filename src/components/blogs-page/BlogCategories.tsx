"use client";

import { useState } from "react";
import Link from "next/link";

export type Category = {
  title?: string;
  slug?: { current?: string };
};

type BlogCategoriesProps = {
  categories?: Category[];
  activeCategory?: string;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export default function BlogCategories({
  categories = [],
  activeCategory,
  searchTerm,
  setSearchTerm,
}: BlogCategoriesProps) {
  const normalizedActive = activeCategory?.trim().toLowerCase();

  return (
    <div className="bg-transparent rounded-md ">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84C9E2] focus:border-[#84C9E2] font-sans"
        />
      </div>

      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-serif font-medium text-primary">
          Categories
        </h3>

        {activeCategory ? (
          <Link
            href="/blogs"
            className="text-sm font-semibold text-[#162C45] hover:text-[#0f172a] transition"
          >
            Clear
          </Link>
        ) : null}
      </div>

      <ul className="space-y-2">
        {categories.length ? (
          categories.map((cat) => (
            <li key={cat.slug?.current || cat.title}>
              <Link
                href={`/blogs?category=${encodeURIComponent(
                  cat.slug?.current || cat.title || ""
                )}`}
                className={`transition  ${
                  normalizedActive &&
                  (normalizedActive ===
                    cat.slug?.current?.trim().toLowerCase() ||
                    normalizedActive === cat.title?.trim().toLowerCase())
                    ? "text-secondary font-semibold"
                    : "text-[#334155] hover:text-[#162C45]"
                }`}
              >
                {cat.title}
              </Link>
            </li>
          ))
        ) : (
          <li className="text-sm text-[#94a3b8]">No categories yet.</li>
        )}
      </ul>
    </div>
  );
}
