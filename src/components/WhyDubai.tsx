import React from "react";

const WhyDubai: React.FC = () => {
  const keyBenefits = [
    "Low Corporate Tax (0% For Eligble Businesses) ",
    "0% Personal Income Tax",
    "0% Dividend Tax",
    "0% Capital Gains Tax",
    "100% Foreign Ownership",
    "Tax Efficient Global Banking",
    "World Class Safety & Lifestyle",
    "Gateway to Global Markets",
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#162C45 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CENTERED HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162C45]/5 border border-[#162C45]/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#162C45]"></span>
            <span className="text-[#162C45] text-xs font-bold uppercase tracking-widest font-sans">
              Global Strategy
            </span>
          </div>

          <h2 className="text-4xl !mt-0 md:text-5xl !font-serif text-[#162C45] mb-6">
            Why High Revenue Entrepreneurs <br />
            <span className="italic text-[#84C9E2]">Choose Dubai</span>
          </h2>
          <div className="w-24 h-1 bg-[#84C9E2] mx-auto rounded-full"></div>
        </div>

        {/* MAIN CONTENT SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: NARRATIVE & VISUAL QUOTE CARD */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-600 font-light font-sans">
              <p className="text-xl leading-relaxed">
                Dubai offers one of the world&apos;s most attractive tax and
                business environments — perfect for founders earning{" "}
                <strong className="text-[#162C45]">£150K+ annual profit</strong>{" "}
                who want to scale up globally while protecting their wealth.
              </p>
            </div>

            {/* UPGRADED VISUAL QUOTE CARD (Option 1) */}
            <div className="relative rounded-2xl shadow-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-500 min-h-[400px] flex flex-col justify-end">
              {/* 1. Background Image */}
              <img
                src="https://spidubai.ae/wp-content/uploads/2024/04/shutterstock_1757555312.jpg"
                alt="Dubai Skyline"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
              />

              {/* 2. Dark Gradient Overlay (Ensures Text Readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#162C45] via-[#162C45]/90 to-transparent z-10 opacity-95"></div>

              {/* 3. Content sitting on top */}
              <div className="relative z-20 p-10">
                <svg
                  className="w-10 h-10 text-[#84C9E2] mb-6 opacity-100 drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00001 13.134 11.3333 11 13.5 11V8C10.5 8 6 10.5 6 15V21H14.017ZM21.017 21L21.017 18C21.017 16.8954 20.1216 16 19.017 16H16C16 13.134 18.3333 11 20.5 11V8C17.5 8 13 10.5 13 15V21H21.017Z" />
                </svg>

                <blockquote className="font-serif text-2xl text-white italic leading-relaxed mb-6 drop-shadow-md">
                  &ldquo;It&apos;s not just a tax benefit — it&apos;s a
                  strategic base for global expansion and long-term wealth
                  protection.&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                  <div className="text-sm font-bold uppercase tracking-wider text-[#84C9E2] font-sans">
                    The A2Z Advantage
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/why-dubai"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 bg-[#84C9E2] hover:bg-[#73b2c9] text-primary text-base font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-[#84C9E2]/20 group font-serif"
            >
              Discover Dubai Opportunities
            </a>
          </div>

          {/* RIGHT: BENEFITS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-[#f8f9fa] hover:bg-white p-6 rounded-xl border border-transparent hover:border-[#84C9E2]/30 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#162C45]/5 flex items-center justify-center shrink-0 group-hover:bg-[#84C9E2] transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-[#162C45] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-[#162C45] font-medium pt-1 group-hover:text-[#162C45] font-sans">
                  {benefit}
                </span>
              </div>
            ))}

            {/* Mobile CTA (Visible only on small screens) */}
            <div className="sm:col-span-2 mt-8 lg:hidden">
              <button className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#84C9E2] text-[#162C45] font-bold rounded-lg shadow-lg font-sans">
                Discover Dubai Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDubai;
