import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";
import { urlFor } from "@/lib/imageBuilder";

type SanityImageWithAlt = {
  asset?: { _ref?: string };
  alt?: string;
  caption?: string;
  [key: string]: unknown;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug?: { current?: string };
  publishedAt?: string;
  author?: string;
  excerpt?: string;
  categories?: { title?: string; slug?: { current?: string } }[];
  mainImage?: SanityImageWithAlt;
  content?: PortableTextBlock[];
};

type BlogDetailsProps = {
  post: BlogPost;
};

export default function BlogDetails({ post }: BlogDetailsProps) {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(600).url()
    : null;

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0f172a]">
      <article className="max-w-3xl mx-auto px-6 md:px-10 py-16">
        <p className="text-sm uppercase tracking-wide text-[#334155]">
          {post.categories
            ?.map((c) => c?.title)
            .filter(Boolean)
            .join(" • ")}
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-[#162C45]">
          {post.title}
        </h1>
        {post.author ? (
          <p className="mt-2 text-sm text-[#94a3b8]">By {post.author}</p>
        ) : null}
        {post.publishedAt ? (
          <p className="mt-1 text-sm text-[#334155]">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        ) : null}
        {imageUrl ? (
          <div className="mt-6">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </div>
        ) : null}
        {post.excerpt ? (
          <p className="mt-4 text-lg text-[#334155]">{post.excerpt}</p>
        ) : null}
        <div className="mt-8 prose prose-lg max-w-none">
          <PortableText
            value={post.content || []}
            components={portableTextComponents}
          />
        </div>
      </article>
    </main>
  );
}
