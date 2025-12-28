"use client";

import { useState } from "react";

const faqData = [
  {
    category: "general-uae-business",
    question: "Do I need to live in Dubai to set up a company in the UAE?",
    answer:
      "No. Many UK entrepreneurs operate UAE companies remotely while continuing to live in the UK. Residency is optional depending on your business and tax planning objectives.",
  },
  {
    category: "general-uae-business",
    question: "How long does it take to set up a UAE company?",
    answer:
      "Most UAE companies can be incorporated within 1–3 weeks, depending on the Free Zone or mainland authority and the activities involved.",
  },
  {
    category: "general-uae-business",
    question: "Can I own 100% of my UAE company as a foreign national?",
    answer:
      "Yes. Most Free Zones and many mainland activities allow 100% foreign ownership.",
  },
  {
    category: "general-uae-business",
    question: "Is a UAE company suitable for UK-based businesses?",
    answer:
      "Yes, provided the structure is set up correctly and aligned with UK tax, residency, and substance rules.",
  },
  {
    category: "company-formation",
    question: "Should I choose a Free Zone or mainland company?",
    answer:
      "It depends on where your clients are, how you operate, and whether you trade within the UAE. Free Zones suit international operations, while mainland companies are better for local UAE trading.",
  },
  {
    category: "company-formation",
    question: "What business activities can I register in the UAE?",
    answer:
      "Most professional, trading, consultancy, and service-based activities are permitted, subject to licensing authority approval.",
  },
  {
    category: "company-formation",
    question: "Do I need a local sponsor?",
    answer:
      "In most cases, no. Many activities allow full foreign ownership without a UAE national sponsor.",
  },
  {
    category: "accounting-bookkeeping",
    question: "Do UAE companies need to maintain accounting records?",
    answer:
      "Yes. All UAE companies are required to maintain proper accounting records, even if they have no tax payable.",
  },
  {
    category: "accounting-bookkeeping",
    question: "How often should bookkeeping be done?",
    answer:
      "Monthly bookkeeping is recommended to maintain compliance, cashflow control, and accurate reporting.",
  },
  {
    category: "accounting-bookkeeping",
    question: "Can I manage UAE accounting from the UK?",
    answer:
      "Yes. Accounting and reporting can be managed remotely using cloud-based systems and secure document sharing.",
  },
  {
    category: "vat-corporate-tax",
    question: "Is VAT applicable in the UAE?",
    answer:
      "Yes. VAT is charged at 5% on most taxable supplies, subject to registration thresholds and exemptions.",
  },
  {
    category: "vat-corporate-tax",
    question: "When does UAE Corporate Tax apply?",
    answer:
      "UAE Corporate Tax applies at 9% on taxable profits above the prescribed threshold, subject to exemptions and reliefs.",
  },
  {
    category: "vat-corporate-tax",
    question: "Do all UAE companies need to register for Corporate Tax?",
    answer:
      "Most UAE entities must register, even if they qualify for exemptions or have no tax payable.",
  },
  {
    category: "payroll-hr",
    question: "Do UAE companies need payroll services?",
    answer:
      "Yes. Companies employing staff must process payroll in line with UAE labour laws and Wage Protection System (WPS) requirements.",
  },
  {
    category: "payroll-hr",
    question: "Can payroll be outsourced in the UAE?",
    answer:
      "Yes. Many businesses outsource payroll and HR administration to ensure accuracy and compliance.",
  },
  {
    category: "payroll-hr",
    question: "What HR records are required in the UAE?",
    answer:
      "Employment contracts, payroll records, leave records, and employee documentation must be properly maintained.",
  },
  {
    category: "uk-tax-cross-border",
    question: "Will a UAE company reduce my UK tax automatically?",
    answer:
      "No. Tax efficiency depends on residency, control, substance, and income source. Proper structuring is essential.",
  },
  {
    category: "uk-tax-cross-border",
    question: "Can HMRC challenge a UAE company?",
    answer:
      "Yes, if the structure lacks commercial substance or management and control remain in the UK.",
  },
  {
    category: "uk-tax-cross-border",
    question: "Do I need both UK and UAE accountants?",
    answer:
      "In many cases, yes. Coordination between UK and UAE advisors ensures compliance in both jurisdictions.",
  },
  {
    category: "banking-operations",
    question: "Is it difficult to open a bank account in the UAE?",
    answer:
      "UAE banking can be detailed, but with proper documentation and compliance preparation, accounts can be opened successfully.",
  },
  {
    category: "banking-operations",
    question: "Can I invoice UK or international clients from a UAE company?",
    answer: "Yes, provided the business structure and activity allow it.",
  },
  {
    category: "who-a2z-is-for",
    question: "Who should consider A2Z Accounting Dubai?",
    answer:
      "UK entrepreneurs, professionals, and growing businesses looking to operate in the UAE with clarity, compliance, and professional support.",
  },
  {
    category: "who-a2z-is-for",
    question: "Do you work with specific industries?",
    answer:
      "No. However, we specialise working with engineering, offshore, healthcare, e-commerce and consultancy based businesses.",
  },
  {
    category: "working-with-a2z",
    question: "Do you offer ongoing support or one-off services?",
    answer:
      "We offer both — from company setup to ongoing accounting, payroll, and compliance support.",
  },
  {
    category: "working-with-a2z",
    question: "Can you support businesses that already have a UAE company?",
    answer:
      "Yes. We regularly onboard existing UAE companies and improve their compliance and reporting structure.",
  },
];

const categories = [
  { id: "all", label: "All Questions" },
  { id: "general-uae-business", label: "General UAE Business" },
  { id: "company-formation", label: "Company Formation" },
  { id: "accounting-bookkeeping", label: "Accounting & Bookkeeping" },
  { id: "vat-corporate-tax", label: "VAT & Corporate Tax" },
  { id: "payroll-hr", label: "Payroll & HR" },
  { id: "uk-tax-cross-border", label: "UK Tax & Cross-Border" },
  { id: "banking-operations", label: "Banking & Operations" },
  { id: "who-a2z-is-for", label: "Who A2Z Accounting Dubai Is For" },
  { id: "working-with-a2z", label: "Working With A2Z Accounting Dubai" },
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
    <main className="min-h-screen mt-10 bg-linear-to-br from-[#f7f8fa] to-[#e8f4f8] text-[#0f172a]">
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
