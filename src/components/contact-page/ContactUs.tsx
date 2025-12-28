"use client";

import React, { useState } from "react";
import { DM_Sans, Forum } from "next/font/google";

// 1. Font Configuration
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const forum = Forum({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-forum",
  display: "swap",
});

export default function ContactSection() {
  // 2. Form Logic
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate API call
    setTimeout(() => {
      setFormStatus("sent");
      // Reset after 2 seconds
      setTimeout(() => {
        setFormStatus("idle");
        (e.target as HTMLFormElement).reset();
      }, 2000);
    }, 1500);
  };

  return (
    <div
      className={`${dmSans.variable} ${forum.variable} font-sans bg-[#f7f8fa] text-[#162C45] antialiased selection:bg-[#84C9E2] selection:text-white`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* --- Header --- */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl !font-serif text-[#162C45] mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 !font-sans">
            We Look Forward to Connecting With You
          </p>
        </header>

        {/* --- Contact Info Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* Card 1: Visit */}
          <div className="bg-[#F2F4F6] p-8 rounded flex items-start justify-between group hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="mt-1 text-gray-400 group-hover:text-[#84C9E2] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="!font-serif text-xl mb-2 text-[#162C45]">
                  Visit us at:
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm !font-sans">
                  First Floor, 499 Union Street
                  <br />
                  Aberdeen, AB11 6DB
                </p>
              </div>
            </div>
            <div className="text-gray-400 group-hover:translate-x-1 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>

          {/* Card 2: Call */}
          <div className="bg-[#F2F4F6] p-8 rounded flex items-start justify-between group hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="mt-1 text-gray-400 group-hover:text-[#84C9E2] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="!font-serif text-xl mb-2 text-[#162C45]">
                  Call us at:
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm font-medium !font-sans">
                  +44 7832 921562
                </p>
              </div>
            </div>
            <div className="text-gray-400 group-hover:translate-x-1 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-[#F2F4F6] p-8 rounded flex items-start justify-between group hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="mt-1 text-gray-400 group-hover:text-[#84C9E2] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h3 className="!font-serif text-xl mb-2 text-[#162C45]">
                  Email us at:
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm font-medium !font-sans">
                  info@a2zaccounting-dubai.co.uk
                </p>
              </div>
            </div>
            <div className="text-gray-400 group-hover:translate-x-1 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* --- Main Section: Text + Form --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Information */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <span className="bg-gray-200 text-[#162C45] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-6 !font-sans">
                Contact Us Form
              </span>
              <h2 className="text-5xl lg:text-[3.5rem] leading-[1.1] !font-serif text-[#162C45] mb-8">
                Our Experts Always Ready to Work With You
              </h2>
              <p className="text-gray-600 text-lg mb-4 !font-sans">
                Ask about general information. Please send us a message.
              </p>
            </div>

            <div className="space-y-4">
              {/* Career Link */}
              <a
                href="#"
                className="bg-[#F2F4F6] p-6 rounded flex items-center justify-between group hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-gray-400 group-hover:text-[#84C9E2] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-[#162C45] !font-sans">
                    <span className="block text-gray-800">
                      For career inquires, please email
                    </span>
                    <span className="font-bold">info@a2zaccounting-dubai.co.uk</span>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>

              {/* General Inquiries Link */}
              <a
                href="#"
                className="bg-[#F2F4F6] p-6 rounded flex items-center justify-between group hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-gray-400 group-hover:text-[#84C9E2] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-[#162C45] !font-sans">
                    <span className="block text-gray-800">
                      For any other inquires, please email
                    </span>
                    <span className="font-bold">info@a2zaccounting-dubai.co.uk</span>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>

              {/* Team Link */}
              <a
                href="/about-us"
                className="bg-[#F2F4F6] p-6 rounded flex items-center justify-between group hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-gray-400 group-hover:text-[#84C9E2] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-[#162C45] !font-sans">
                    <span className="block text-gray-800">
                      To know more about our team,
                    </span>
                    <span className="block">Please see our About Us page</span>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <div className="bg-white rounded-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="bg-[#162C45] px-8 py-6 flex justify-between items-center text-white">
                <h3 className="!font-serif text-xl !text-white font-medium">
                  Contact Form
                </h3>
                <div className="text-[#84C9E2]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 transform -rotate-45"
                  >
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 lg:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fname"
                      className="block text-[0.95rem] text-gray-600 mb-2 !font-sans"
                    >
                      First name
                    </label>
                    <input
                      id="fname"
                      type="text"
                      className="w-full px-5 py-4 border border-gray-200 rounded outline-none text-[#1B3756] transition-all focus:border-[#84C9E2] focus:ring-4 focus:ring-[#84C9E2]/10 font-sans"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lname"
                      className="block text-[0.95rem] text-gray-600 mb-2 !font-sans"
                    >
                      Last name
                    </label>
                    <input
                      id="lname"
                      type="text"
                      className="w-full px-5 py-4 border border-gray-200 rounded outline-none text-[#1B3756] transition-all focus:border-[#84C9E2] focus:ring-4 focus:ring-[#84C9E2]/10 font-sans"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[0.95rem] text-gray-600 mb-2 !font-sans"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-5 py-4 border border-gray-200 rounded outline-none text-[#1B3756] transition-all focus:border-[#84C9E2] focus:ring-4 focus:ring-[#84C9E2]/10 font-sans"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[0.95rem] text-gray-600 mb-2 !font-sans"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-5 py-4 border border-gray-200 rounded outline-none text-[#1B3756] transition-all focus:border-[#84C9E2] focus:ring-4 focus:ring-[#84C9E2]/10 font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[0.95rem] text-gray-600 mb-2 !font-sans"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-5 py-4 border border-gray-200 rounded outline-none text-[#1B3756] transition-all focus:border-[#84C9E2] focus:ring-4 focus:ring-[#84C9E2]/10 font-sans resize-y"
                    placeholder="To better assist you, please describe how we can help..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus !== "idle"}
                    className={`
                      py-4 px-10 rounded-md flex items-center gap-2 transition-all duration-300 font-bold cursor-pointer
                      ${
                        formStatus === "sent"
                          ? "bg-green-500 text-white"
                          : "bg-[#84C9E2] hover:bg-[#73b2c9] text-[#162C45]"
                      }
                      ${formStatus === "sending" ? "opacity-80" : "opacity-100"}
                    `}
                  >
                    {formStatus === "idle" && (
                      <>
                        Submit
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </>
                    )}
                    {formStatus === "sending" && "Sending..."}
                    {formStatus === "sent" && "Message Sent!"}
                  </button>
                </div>

                <div className="border-t border-gray-100 pt-6 mt-6 flex items-start gap-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="privacy-consent"
                      name="privacy-consent"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-[#84C9E2] focus:ring-[#84C9E2] cursor-pointer"
                    />
                  </div>
                  <div className="text-xs text-gray-400 leading-relaxed !font-sans">
                    <label
                      htmlFor="privacy-consent"
                      className="font-medium text-gray-500 select-none cursor-pointer !font-sans"
                    >
                      By submitting this form you agree to our{" "}
                      <a
                        href="#"
                        className="font-bold text-gray-600 hover:text-[#84C9E2]"
                      >
                        Privacy Policy
                      </a>
                      . Optimum may contact you via email or phone for
                      scheduling or marketing purposes.
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
