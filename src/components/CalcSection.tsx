"use client";
import React from "react";
import Calculator from "./calc-page/calculator";

const CalcSection: React.FC = () => {
  const keyPoints = [
    "Experts in UAE Company Setup & Corporate Structure (Free Zone & Mainland).",
    "HMRC-Compliant Relocation Strategies.",
    "Smart Business Structure for Running a Business in the UAE While Residing in the UK.",
    "End-to-End Service—Company Setup, Tax Optimisation, Banking & Residency to Accounting, Bookkeeping & Financial Reporting.",
    "Tax & Regulatory Compliance.",
    "Transparent Fees with No Hidden Mark-Ups.",
  ];

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#84C9E2]/50 rounded-md -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#84C9E2] rounded-md translate-x-48 translate-y-48"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        {/* <div className="flex justify-between items-center mb-2"> */}
        <h2 className="text-4xl md:text-5xl mt-0 font-serif font-medium text-gray-900 leading-tight">
          Why Choose Us?
        </h2>
        <p className="font-medium mb-6 self-end text-[#162C45] leading-tight font-sans">
          Your High-End Partner for International Business Expansion & Tax
          Optimisation
        </p>
        {/* </div> */}
        <div className="w-full h-px bg-gray-200 mb-8"></div>
        {/* Split Layout: Content Left, Calculator Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side: Key Points in Single Card */}
          <div className="space-y-8">
            <div className="bg-linear-to-r from-secondary to-secondary/30 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-100/50">
              {/* <div className="absolute inset-4 bg-linear-to-r from-[#84C9E2]/30 to-[#84C9E2]/30 rounded-2xl opacity-30 blur-3xl  pointer-events-none"></div> */}

              <div className="space-y-6">
                {keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center shrink-0 ">
                      <svg
                        className="w-6 h-6 text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300 flex-1 font-sans">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button aligned with left content */}
            <div className="flex justify-start">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#84C9E2] hover:bg-[#6bb1d9] text-primary font-semibold rounded-md transition-all hover:shadow-xl shadow-lg"
              >
                Get Started Today
              </a>
            </div>
          </div>

          {/* Right Side: Tax Calculator in Card */}
          <div>
            <Calculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalcSection;
