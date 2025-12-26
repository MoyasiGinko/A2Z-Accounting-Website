import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/imageBuilder";
import type { SanityPost, SanityCategory } from "@/lib/sanityApi";

const sizesAttr = "(max-width: 750px) 100vw, 415px";

const formatDate = (value?: string) => {
  if (!value) return { machine: "", display: "" };
  const date = new Date(value);
  return {
    machine: date.toISOString().split("T")[0] || value,
    display: new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date),
  };
};

const buildImage = (image: unknown) => {
  if (!image) return { src: "", srcSet: undefined };
  const widths = [305, 415, 520, 640, 830];
  const src = urlFor(image).width(415).auto("format").url();
  const srcSet = widths
    .map((w) => `${urlFor(image).width(w).auto("format").url()} ${w}w`)
    .join(", ");
  return { src, srcSet };
};

const FALLBACK_POSTS = [
  {
    id: "fallback-1",
    slug: "",
    title: "Sample Strategy Success Story",
    excerpt:
      "A concise case study placeholder to keep the carousel layout consistent until real posts are published.",
    image: "/wp-content/uploads/2025/03/GettyImages-1931487241-750x1024.jpg",
    srcSet: undefined,
    sizes: sizesAttr,
    imageAlt: "Sample strategy success",
    categories: [{ label: "Success Story", href: "#" }],
    date: { machine: "", display: "" },
  },
  {
    id: "fallback-2",
    slug: "",
    title: "Sample Growth Journey",
    excerpt:
      "A sample narrative showing how businesses can navigate growth phases effectively.",
    image:
      "/wp-content/uploads/2025/03/declan-sun-CxRVGdnhATs-unsplash-750x1024.jpg",
    srcSet: undefined,
    sizes: sizesAttr,
    imageAlt: "Sample growth journey",
    categories: [{ label: "Industry Insights", href: "#" }],
    date: { machine: "", display: "" },
  },
  {
    id: "fallback-3",
    slug: "",
    title: "Sample Market Trends",
    excerpt:
      "Placeholder post covering emerging market themes to illustrate the carousel layout.",
    image: "/wp-content/uploads/2025/03/GettyImages-1456192869-750x1024.jpg",
    srcSet: undefined,
    sizes: sizesAttr,
    imageAlt: "Sample market trends",
    categories: [{ label: "Expert Advice", href: "#" }],
    date: { machine: "", display: "" },
  },
  {
    id: "fallback-4",
    slug: "",
    title: "Sample Operations Playbook",
    excerpt:
      "An operations-focused placeholder to complete the four-card carousel when content is limited.",
    image: "/wp-content/uploads/2025/03/GettyImages-1408994869-750x1024.jpg",
    srcSet: undefined,
    sizes: sizesAttr,
    imageAlt: "Sample operations playbook",
    categories: [{ label: "Playbook", href: "#" }],
    date: { machine: "", display: "" },
  },
];

type BlogCarouselProps = {
  posts: SanityPost[];
};

const resolveSlug = (value?: string | { current?: string }) => {
  if (!value) return "";
  return typeof value === "string" ? value : value.current || "";
};

const BlogCarousel: React.FC<BlogCarouselProps> = ({ posts }) => {
  const normalizedPosts = (posts || []).map((post) => {
    const { src, srcSet } = buildImage(post.mainImage);
    const date = formatDate(post.publishedAt);
    const categories = (post.categories || []).map((category) => {
      const slugValue = resolveSlug(category.slug);
      return {
        label: category.title || "Uncategorized",
        href: slugValue ? `/blogs/category/${slugValue}` : "#",
      };
    });

    return {
      id: post._id,
      slug: resolveSlug(post.slug),
      title: post.title || "Untitled",
      excerpt: post.excerpt || "",
      image: src,
      srcSet,
      sizes: sizesAttr,
      imageAlt: post.mainImageAlt || post.title || "Post image",
      categories,
      date,
    };
  });

  const displayPosts =
    normalizedPosts.length >= 4
      ? normalizedPosts.slice(0, 4)
      : [
          ...normalizedPosts,
          ...FALLBACK_POSTS.slice(0, 4 - normalizedPosts.length),
        ];

  return (
    <section className="bg-white py-16" aria-labelledby="blog-carousel-heading">
      <div className="mx-auto max-w-328 px-4 sm:px-4 lg:px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center rounded-md bg-primary px-2 py-1 text-sm font-serif font-medium text-white">
              Our Blogs
            </span>
            <h2
              id="blog-carousel-heading"
              className="mt-4 text-5xl font-serif font-medium text-primary md:text-6xl"
            >
              Latest Insights &amp; Success Stories
            </h2>
          </div>
          <div className="text-sm text-primary/90 ">
            <p className="max-w-2xl text-base text-slate-600">
              Stay ahead with the latest business insights, success stories, and
              industry trends.
            </p>
          </div>
        </div>

        {displayPosts.length ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {displayPosts.map((post) => {
              const postHref = post.slug ? `/blogs/${post.slug}` : "#";
              return (
                <article
                  key={post.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative">
                    <Link
                      href={postHref}
                      aria-label={`Read more: ${post.title}`}
                      className={`block ${post.slug ? "" : "pointer-events-none"}`}
                    >
                      <img
                        src={post.image}
                        srcSet={post.srcSet}
                        sizes={post.sizes}
                        alt={post.imageAlt}
                        className="h-64 w-full object-cover"
                        loading="lazy"
                      />
                    </Link>
                    <div className="pointer-events-none absolute left-4 right-4 -bottom-4 flex flex-wrap gap-2">
                      {post.categories.map((category) => (
                        <span
                          key={`${post.id}-${category.label}`}
                          className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow"
                        >
                          {category.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-8">
                    <time
                      className="text-xs font-semibold uppercase tracking-wide text-secondary"
                      dateTime={post.date.machine}
                    >
                      {post.date.display || "Coming soon"}
                    </time>
                    <h3 className="mt-3 line-clamp-2 font-serif text-2xl text-slate-900">
                      <Link
                        href={postHref}
                        className={`transition hover:text-primary ${post.slug ? "" : "pointer-events-none"}`}
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm text-slate-600">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between text-sm font-semibold text-primary">
                      <Link
                        href={postHref}
                        className={`inline-flex items-center gap-1 ${post.slug ? "" : "pointer-events-none"}`}
                      >
                        Read more
                        <span aria-hidden="true">→</span>
                      </Link>
                      <div className="flex gap-2">
                        {post.categories.slice(0, 2).map((category) => (
                          <Link
                            key={`${post.id}-${category.label}-link`}
                            href={category.href}
                            className={`text-xs text-slate-400 hover:text-secondary ${
                              category.href === "#" ? "pointer-events-none" : ""
                            }`}
                          >
                            {category.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center text-slate-500">
            No posts available yet—please add an entry in the CMS feed.
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center rounded-full bg-secondary px-6 py-3 font-semibold text-primary shadow hover:bg-primary hover:text-white"
          >
            View More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
