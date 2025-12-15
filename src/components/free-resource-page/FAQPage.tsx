"use client";

import React, { useState } from "react";

const faqData = [
  {
    category: "general",
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of digital services including web design, brand strategy, digital marketing, SEO optimization, content creation, and custom web development. Each service is tailored to meet your specific business needs and goals.",
  },
  {
    category: "general",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website typically takes 4-6 weeks, while comprehensive brand strategies or custom applications may take 8-12 weeks or longer. We provide detailed timelines during the initial consultation.",
  },
  {
    category: "pricing",
    question: "What are your pricing models?",
    answer:
      "We offer flexible pricing options including project-based fees, monthly retainers, and hourly rates depending on the service. Each project receives a custom quote after our initial consultation where we assess your specific requirements and objectives.",
  },
  {
    category: "pricing",
    question: "Do you offer payment plans?",
    answer:
      "Yes, we understand that budget flexibility is important. We offer payment plans split into milestones for larger projects, typically structured as: 30% deposit, 40% at midpoint, and 30% upon completion. Custom arrangements can be discussed.",
  },
  {
    category: "pricing",
    question: "Are there any hidden fees?",
    answer:
      "Absolutely not. We believe in complete transparency. All costs are outlined in your project proposal, including any third-party services like hosting, stock images, or premium plugins. Any additional work outside the original scope requires approval.",
  },
  {
    category: "technical",
    question: "What technologies do you work with?",
    answer:
      "We work with modern, industry-standard technologies including HTML5, CSS3, JavaScript, React, Vue.js, Node.js, WordPress, and various CMS platforms. We choose the best technology stack based on your project requirements and long-term goals.",
  },
  {
    category: "technical",
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. All our websites are built with a mobile-first approach, ensuring optimal performance and user experience across all devices including smartphones, tablets, and desktops. We test thoroughly on multiple devices and browsers.",
  },
  {
    category: "technical",
    question: "Do you provide website hosting?",
    answer:
      "While we don't provide hosting directly, we partner with premium hosting providers and can manage the setup and maintenance for you. We'll recommend the best hosting solution based on your website's requirements and expected traffic.",
  },
  {
    category: "support",
    question: "What kind of support do you offer after launch?",
    answer:
      "We offer various support packages including maintenance plans, technical support, content updates, and performance monitoring. All projects include a 30-day post-launch support period for bug fixes and minor adjustments.",
  },
  {
    category: "support",
    question: "Can I update the website content myself?",
    answer:
      "Yes! We build websites with user-friendly content management systems (CMS) that allow you to easily update text, images, and other content. We also provide comprehensive training and documentation to help you manage your site confidently.",
  },
  {
    category: "support",
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply reach out through our contact form, email, or phone. We'll schedule a free consultation to discuss your project goals, timeline, and budget. From there, we'll create a tailored proposal for your review.",
  },
  {
    category: "general",
    question: "Do you work with clients remotely?",
    answer:
      "Yes, we work with clients worldwide. Through video calls, project management tools, and regular communication, we ensure seamless collaboration regardless of location. Many of our most successful projects have been completed entirely remotely.",
  },
];

const categories = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General" },
  { id: "pricing", label: "Pricing" },
  { id: "technical", label: "Technical" },
  { id: "support", label: "Support" },
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;

    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      !lowerSearch ||
      faq.question.toLowerCase().includes(lowerSearch) ||
      faq.answer.toLowerCase().includes(lowerSearch);

    return matchesCategory && matchesSearch;
  });

  const handleToggle = (question: string) => {
    setOpenQuestion((prev) => (prev === question ? null : question));
  };

  return (
    <main className="min-h-screen mt-10 bg-gradient-to-br from-[#f7f8fa] to-[#e8f4f8] text-[#0f172a]">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 py-16">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#84C9E2] bg-opacity-10 text-[#162C45] text-sm font-medium !font-sans pulse-badge">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Got Questions? We&apos;ve Got Answers
            </span>
          </div>

          <h1
            className="!font-serif !mt-0 !text-[#162C45] mb-4"
            style={{
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-[#334155] text-lg md:text-xl max-w-2xl mx-auto font-inter font-medium leading-relaxed">
            Find answers to the most common questions about our services,
            processes, and policies.
          </p>
        </header>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              id="faq-search"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-[#84C9E2] border-opacity-20 bg-white shadow-sm focus:outline-none focus:border-[#84C9E2] focus:ring-4 focus:ring-[#84C9E2] focus:ring-opacity-10 transition-all duration-300 font-inter"
            />
            <svg
              className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-[#84C9E2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* FAQ Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`category-tab px-6 py-2.5 rounded-full !font-sans font-semibold text-sm transition-all duration-300 transform ${
                  isActive
                    ? "bg-[#162C45] !text-white scale-105"
                    : "bg-[rgba(132,201,226,0.1)] text-[#162C45]"
                }`}
                data-category={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenQuestion(null);
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion / No Results */}
        {filteredFaqs.length === 0 ? (
          <div id="no-results" className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#84C9E2]  bg-opacity-10 mb-6">
              <svg
                className="w-10 h-10 text-[#84C9E2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl !font-sans !mt-0 !font-semibold !text-[#162C45] mb-2">
              No matching questions found
            </h3>
            <p className="text-[#334155] font-inter">
              Try adjusting your search or browse all categories
            </p>
          </div>
        ) : (
          <div id="faq-container" className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openQuestion === faq.question;
              return (
                <div
                  key={faq.question}
                  className="faq-item bg-white rounded-2xl border border-[#84C9E2] border-opacity-20 shadow-sm hover:shadow-md transition-all duration-300"
                  data-category={faq.category}
                >
                  <div
                    className="faq-trigger w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left group"
                    onClick={() => handleToggle(faq.question)}
                  >
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-[#84C9E2] bg-opacity-10 text-[#162C45] text-xs !font-sans font-semibold uppercase mb-3 tracking-wide">
                        {faq.category}
                      </div>
                      <h3 className="!font-sans !mt-0 !font-semibold !text-[#162C45] !text-lg md:!text-xl leading-snug group-hover:text-[#84C9E2] transition-colors duration-200">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#84C9E2] bg-opacity-10 flex items-center justify-center group-hover:bg-[#84C9E2] transition-all duration-300">
                      <svg
                        className={`w-5 h-5 text-[#162C45] rotate-icon group-hover:text-white transition-colors duration-300 ${
                          isOpen ? "active" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`accordion-content px-6 md:px-8 ${
                      isOpen ? "active" : ""
                    }`}
                    style={{
                      maxHeight: isOpen ? "500px" : "0px",
                      overflow: "hidden",
                      transition:
                        "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div className="pb-6 border-t border-[#84C9E2] border-opacity-10 pt-4">
                      <p className="font-inter text-[#334155] leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#162C45] to-[#1B3756] rounded-md p-8 md:p-12 shadow-xl">
            <h2 className="!font-sans !mt-0 font-bold !text-white !text-2xl md:!text-3xl mb-4">
              Still have questions?
            </h2>
            <p className="text-white text-opacity-90 font-inter text-lg mb-6 leading-relaxed">
              Can&apos;t find the answer you&apos;re looking for? Our support
              team is here to help you.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#84C9E2] text-[#162C45] !font-sans font-bold text-base transition-all duration-300 hover:bg-white hover:shadow-lg transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-opacity-50"
            >
              Contact Support
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQPage;
