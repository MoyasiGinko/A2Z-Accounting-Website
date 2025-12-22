import React from "react";

const BlogCTA: React.FC = () => {
  return (
    <section
      className="bg-transparent text-primary py-12 px-4 text-center
    max-w-7xl mx-auto my-16"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-medium mb-4 font-serif">
          Stay Updated with Our Latest Blogs
        </h2>
        <p className="text-lg text-primary/70 mb-6 font-sans">
          Find expert tips on accounting, finance, and business growth. Get in
          touch with us for working together on your accounting needs.
        </p>
        <button className="bg-secondary text-primary/90 px-6 py-3 rounded-lg font-medium hover:text-white hover:bg-primary transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default BlogCTA;
