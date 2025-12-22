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
    <article>
      <p className="text-sm uppercase tracking-wide text-primary/70 font-sans">
        {post.categories
          ?.map((c) => c?.title)
          .filter(Boolean)
          .join(" • ")}
      </p>
      <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-primary font-serif">
        {post.title}
      </h1>
      {post.author ? (
        <p className="mt-2 text-sm text-primary/70 font-sans">
          By {post.author}
        </p>
      ) : null}
      {post.publishedAt ? (
        <p className="mt-1 text-sm text-primary/70 font-sans">
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
            className="w-full h-auto rounded-md object-cover"
            priority
          />
        </div>
      ) : null}
      {post.excerpt ? (
        <p className="mt-4 text-lg text-primary font-sans">{post.excerpt}</p>
      ) : null}
      <div className="mt-8 prose prose-lg max-w-none font-sans">
        <PortableText
          value={post.content || []}
          components={portableTextComponents}
        />
      </div>
    </article>
  );
}
