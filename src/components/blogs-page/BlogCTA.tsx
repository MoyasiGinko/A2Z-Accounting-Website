import React from "react";

const BlogCTA: React.FC = () => {
  return (
    <section
      className="bg-primary text-white py-12 px-4 text-center
    max-w-7xl mx-auto my-16 rounded-lg shadow-lg"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated with Our Latest Blogs
        </h2>
        <p className="text-lg mb-6">
          Find expert tips on accounting, finance, and business growth. Get in
          touch with us for working together on your accounting needs.
        </p>
        <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default BlogCTA;
