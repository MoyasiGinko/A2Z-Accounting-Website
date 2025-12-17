"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sanityFetch } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { urlFor } from "@/lib/imageBuilder";
import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";
import BlogDetails, { BlogPost } from "./BlogDetails";

type Category = {
  title?: string;
  slug?: { current?: string };
};

type BlogListPost = {
  _id: string;
  title: string;
  slug?: { current?: string };
  excerpt?: string;
  publishedAt?: string;
  categories?: { title?: string; slug?: { current?: string } }[];
  mainImage?: unknown;
  content?: PortableTextBlock[];
};

type BlogDetailsLayoutClientProps = {
  post: BlogPost;
};

export default function BlogDetailsLayoutClient({
  post,
}: BlogDetailsLayoutClientProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [trendingPosts, setTrendingPosts] = useState<BlogListPost[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch categories
    const categoriesQuery = groq`*[_type == "category"]{title, slug}`;
    sanityFetch<Category[]>(categoriesQuery).then(setCategories);

    // Fetch trending posts (latest 6)
    const trendingQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...6]{
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      categories[]->{title, slug},
      mainImage,
      content[0..2]
    }`;
    sanityFetch<BlogListPost[]>(trendingQuery).then(setTrendingPosts);
  }, []);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    console.log("Form submitted:", formData);
    // Here you can add actual submission logic, e.g., send to an API
    setTimeout(() => {
      alert("Thank you for your message!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side: Blog Details */}
          <div className="lg:col-span-2">
            <BlogDetails post={post} />
          </div>

          {/* Right Side: Sidebar */}
          <div className="space-y-8">
            {/* Categories List */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-[#162C45] mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.slug?.current || cat.title}>
                    <Link
                      href={`/blogs?category=${cat.slug?.current || cat.title}`}
                      className="text-[#334155] hover:text-[#162C45] transition"
                    >
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-[#162C45] mb-4">
                Get In Touch
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleFormChange}
                  className="w-full p-2 border border-gray-300 rounded h-24"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#84C9E2] text-white py-2 rounded hover:bg-[#6bb8d6] transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Trending Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-[#162C45] mb-4">
                Trending Posts
              </h3>
              <ul className="space-y-4">
                {trendingPosts.map((post) => (
                  <li key={post._id}>
                    <Link
                      href={`/blogs/${post.slug?.current}`}
                      className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded transition"
                    >
                      {post.mainImage ? (
                        <img
                          src={urlFor(post.mainImage)
                            .width(80)
                            .height(60)
                            .url()}
                          alt={post.title}
                          className="w-20 h-15 object-cover rounded"
                        />
                      ) : null}
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-[#162C45] line-clamp-2">
                          {post.title}
                        </h4>
                        {post.publishedAt ? (
                          <p className="text-xs text-[#94a3b8]">
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </p>
                        ) : null}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
