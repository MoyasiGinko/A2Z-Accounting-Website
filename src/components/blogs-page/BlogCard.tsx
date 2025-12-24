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
    <article className="group rounded-md bg-transparent overflow-hidden transition w-full aspect-[305/580] lg:w-[250px] md:w-[200px] sm:w-[150px] flex flex-col">
      {imageUrl ? (
        <Link href={href} aria-label={`Read more: ${post.title}`}>
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-74 rounded-md object-cover"
          />
        </Link>
      ) : null}

      <div className="p-2 space-y-1 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-xs text-gray-500 font-sans">
          <div className="flex flex-wrap gap-1">
            {post.categories?.map((cat) => (
              <span
                key={cat.slug?.current || cat.title}
                className="px-2 py-1 bg-[#84C9E2]/20 text-[#84C9E2] rounded-md font-sans"
              >
                {cat.title}
              </span>
            ))}
          </div>
          {post.publishedAt ? (
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          ) : null}
        </div>

        <h2 className="text-2xl font-medium text-primary/90  font-serif line-clamp-2 overflow-hidden">
          <Link href={href} className="hover:text-primary transition">
            {post.title}
          </Link>
        </h2>

        {post.excerpt ? (
          <p className="text-sm text-primary/50 group-hover:text-primary/70 line-clamp-2 overflow-hidden font-sans">
            {post.excerpt}
          </p>
        ) : null}

        <div className="mt-auto text-left">
          <Link
            href={href}
            className="inline-flex items-center text-sm text-[#162C45] font-medium hover:text-secondary transition font-sans"
          >
            Read more
            <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
