"use client";

import Link from "next/link";

export type Category = {
  title?: string;
  slug?: { current?: string };
};

type BlogCategoriesProps = {
  categories?: Category[];
};

export default function BlogCategories({
  categories = [],
}: BlogCategoriesProps) {
  return (
    <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-[#162C45] mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.length ? (
          categories.map((cat) => (
            <li key={cat.slug?.current || cat.title}>
              <Link
                href={`/blogs?category=${cat.slug?.current || cat.title}`}
                className="text-[#334155] hover:text-[#162C45] transition"
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
