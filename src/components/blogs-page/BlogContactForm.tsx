"use client";

import { useState } from "react";

export default function BlogContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="bg-transparent rounded-md ">
      <h3 className="text-2xl font-medium font-serif text-primary mb-4">
        Get In Touch
      </h3>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleFormChange}
          className="w-full font-sans p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleFormChange}
          className="w-full font-sans p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleFormChange}
          className="w-full font-sans p-2 border border-gray-300 rounded h-24"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full font-sans bg-[#84C9E2] text-white py-2 rounded hover:bg-[#6bb8d6] transition disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
