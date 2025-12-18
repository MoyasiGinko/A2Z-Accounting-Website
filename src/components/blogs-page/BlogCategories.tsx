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
  const normalizedActive = activeCategory?.trim().toLowerCase();

  return (
    <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-[#162C45]">Categories</h3>

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
                className={`transition ${
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
