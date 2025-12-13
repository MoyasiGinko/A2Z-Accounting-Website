import React from "react";

const WhyDubai: React.FC = () => {
  const keyBenefits = [
    "Low Corporate Tax",
    "0% Personal Income Tax",
    "0% Dividend Tax",
    "0% Capital Gains Tax",
    "100% Foreign Ownership",
    "Tax Efficient Global Banking",
    "World Class Safety, Infrastructure & Lifestyle",
    "Gateway to global markets",
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-4xl md:text-5xl mt-0 font-bold text-gray-900 leading-tight">
            Why Dubai
            <span className="font-medium text-[#84C9E2] ">
              {" "}
              (Designed for High Revenue Earners)
            </span>
          </h2>
          <p className="text-gray-700 max-w-lg self-end leading-tight">
            Why High Revenue Entrepreneurs Choose Dubai
          </p>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mb-8"></div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side: Body Text */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                Dubai offers one of the world&apos;s most attractive tax and
                business environments — perfect for founders earning £1M+ who
                want to scale globally while protecting their wealth.
              </p>
            </div>

            {/* Premium Quote */}
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
              <blockquote className="text-lg md:text-xl text-[#162C45] font-semibold italic leading-relaxed">
                &ldquo;For serious entrepreneurs, Dubai isn&apos;t just a tax
                benefit — it&apos;s a strategic base for global expansion and
                long-term wealth protection.&rdquo;
              </blockquote>
              <div className="w-16 h-1 bg-[#84C9E2] rounded-full mt-4"></div>
            </div>

            {/* Call to Action */}
            <div className="text-left mt-16">
              <div className="inline-flex items-center justify-center px-8 py-4 bg-[#84C9E2] hover:bg-[#6bb1d9] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                <span className="mr-3">Discover Dubai Opportunities</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Key Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-left">
              Key Benefits
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-4 bg-white rounded-xl p-4 hover:bg-primary-50 transition-all duration-300 border border-gray-200 hover:border-primary-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 bg-[#84C9E2]/50 hover:bg-[#84C9E2] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#6bb1d9] transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <span className="text-gray-700 font-medium group-hover:text-[#6bb1d9] transition-colors duration-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDubai;
