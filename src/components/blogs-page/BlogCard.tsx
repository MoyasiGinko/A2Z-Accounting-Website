import Link from "next/link";
import { urlFor } from "@/lib/imageBuilder";

export type BlogListPost = {
  _id: string;
  title: string;
  slug?: { current?: string };
  excerpt?: string;
  publishedAt?: string;
  categories?: { title?: string; slug?: { current?: string } }[];
  mainImage?: unknown;
};

type BlogCardProps = {
  post: BlogListPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  const href = post.slug?.current ? `/blogs/${post.slug.current}` : "#";
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(800).height(450).url()
    : null;

  return (
    <article className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition">
      {imageUrl ? (
        <Link href={href} aria-label={`Read more: ${post.title}`}>
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        </Link>
      ) : null}

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex flex-wrap gap-1">
            {post.categories?.map((cat) => (
              <span
                key={cat.slug?.current || cat.title}
                className="px-2 py-1 bg-[#84C9E2]/20 text-[#84C9E2] rounded-md"
              >
                {cat.title}
              </span>
            ))}
          </div>
          {post.publishedAt ? (
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          ) : null}
        </div>

        <h2 className="text-lg font-semibold text-[#162C45]">
          <Link href={href} className="hover:text-[#0f172a] transition">
            {post.title}
          </Link>
        </h2>

        {post.excerpt ? (
          <p className="text-sm text-[#334155] line-clamp-2">{post.excerpt}</p>
        ) : null}

        <Link
          href={href}
          className="inline-flex items-center text-sm text-[#162C45] font-medium hover:text-[#0f172a] transition"
        >
          Read more
          <span className="ml-1">→</span>
        </Link>
      </div>
    </article>
  );
}
