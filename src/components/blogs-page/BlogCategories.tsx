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
          className="w-full font-medium text-lg font-serif px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84C9E2] focus:border-[#84C9E2]"
        />
      </div>

      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-serif font-medium text-primary">
          Categories
        </h3>

        {activeCategory ? (
          <Link
            href="/blogs"
            className="text-sm font-sans font-semibold text-red-500/70 hover:text-red-500 transition"
          >
            Clear
          </Link>
        ) : null}
      </div>

      <div className="space-y-3">
        {categories.length ? (
          categories.map((cat) => {
            const isActive =
              normalizedActive &&
              (normalizedActive === cat.slug?.current?.trim().toLowerCase() ||
                normalizedActive === cat.title?.trim().toLowerCase());

            return (
              <Link
                key={cat.slug?.current || cat.title}
                href={`/blogs?category=${encodeURIComponent(
                  cat.slug?.current || cat.title || ""
                )}`}
                className={`block rounded-md border bg-white/10 p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                  isActive
                    ? "border-secondary/60 bg-secondary/5 text-secondary"
                    : "border-primary/5 text-[#334155] hover:border-primary/10 hover:text-primary"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{cat.title}</span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive ? "bg-secondary" : "bg-slate-300"
                    }`}
                  />
                </div>
              </Link>
            );
          })
        ) : (
          <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 px-3 py-2 text-sm text-[#94a3b8]">
            No categories yet.
          </div>
        )}
      </div>
    </div>
  );
}
