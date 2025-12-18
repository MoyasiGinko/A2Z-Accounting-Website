"use client";

import Link from "next/link";

export type Category = {
  title?: string;
  slug?: { current?: string };
};

type BlogCategoriesProps = {
  categories?: Category[];
  activeCategory?: string;
};

export default function BlogCategories({
  categories = [],
  activeCategory,
}: BlogCategoriesProps) {
  return (
    <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-[#162C45] mb-4">Categories</h3>

      {activeCategory ? (
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[#334155]">
            Filter: <span className="font-semibold">{activeCategory}</span>
          </p>
          <Link
            href="/blogs"
            className="text-sm font-semibold text-[#162C45] hover:text-[#0f172a] transition"
          >
            Clear
          </Link>
        </div>
      ) : null}

      <ul className="space-y-2">
        {categories.length ? (
          categories.map((cat) => (
            <li key={cat.slug?.current || cat.title}>
              <Link
                href={`/blogs?category=${encodeURIComponent(
                  cat.slug?.current || cat.title || ""
                )}`}
                className={`transition ${
                  activeCategory &&
                  (activeCategory === cat.slug?.current ||
                    activeCategory === cat.title)
                    ? "text-[#162C45] font-semibold"
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
