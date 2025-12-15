"use client";

import React, { useEffect } from "react";

export default function WhoWeServe() {
  // 2. Animation Logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-up");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={` bg-[#f7f8fa] text-[#162c45] overflow-x-hidden`}>
      {/* 3. Global CSS for Animations & Glass Effects */}
      <style jsx global>{`
        /* Smooth Scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Reveal Animation Classes */
        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-up.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Delay Utilities */
        .delay-100 {
          transition-delay: 100ms;
        }
        .delay-200 {
          transition-delay: 200ms;
        }
        .delay-300 {
          transition-delay: 300ms;
        }

        /* Floating Animations */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite 2s;
        }

        /* Glassmorphism */
        .glass-badge {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Text Glow */
        @keyframes text-glow {
          0%,
          100% {
            color: #ffffff;
            text-shadow: 0 0 0px rgba(132, 201, 226, 0);
          }
          50% {
            color: #84c9e2;
            text-shadow: 0 0 25px rgba(132, 201, 226, 0.6);
          }
        }
        .animate-text-glow {
          animation: text-glow 4s ease-in-out infinite;
        }

        /* Custom Shadows */
        .shadow-premium {
          box-shadow: 0 20px 40px -5px rgba(22, 44, 69, 0.1);
        }
        .shadow-float {
          box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* --- HEADER SECTION --- */}
      <header className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Abstract Business Architecture"
            className="w-full h-full object-cover filter brightness-[0.6] grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#162C45]/80 via-[#162C45]/60 to-[#162C45]/90"></div>
        </div>

        {/* Floating Badges */}
        <div className="absolute top-[20%] left-[10%] glass-badge px-6 py-3 rounded-full text-white/90 text-sm !font-dans tracking-wide animate-float hidden lg:block z-10">
          <span className="text-[#84C9E2] font-bold mr-2">0%</span> Corporate
          Tax Optimization
        </div>

        <div className="absolute bottom-[7%] right-[5%] glass-badge p-3 md:p-6 rounded-lg text-white max-w-xs animate-float-delayed hidden lg:block z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="!font-serif text-lg">Global Compliance</span>
          </div>
          <p className="!font-dans text-xs text-white/70">
            Fully aligned structures for UK & UAE operations.
          </p>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-10">
          <span className="reveal-up inline-block text-[#84C9E2] !font-dans font-bold tracking-[0.2em] uppercase !text-sm mb-6">
            Who We Serve
          </span>
          <h1 className="reveal-up delay-100 !mt-0 !font-serif !text-5xl md:!text-7xl lg:!text-8xl !text-white leading-[1.1] mb-8">
            Smart Entrepreneurs <br />
            <span className="italic animate-text-glow"> Global Ambitions </span>
          </h1>
          <p className="reveal-up delay-200 !font-dans text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            For those who want tax efficiency, global flexibility, and a
            stress-free business life. We structure your success legally and
            compliantly.
          </p>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#intro"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white transition-colors cursor-pointer group"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs !font-dans tracking-widest uppercase">
              Explore
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 animate-bounce group-hover:stroke-[#84C9E2]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </a>
      </header>

      {/* --- INTRO SECTION --- */}
      <section id="intro" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Left Sticky Col */}
            <div className="reveal-up !sticky top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#84C9E2]/10 border border-[#84C9E2]/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#84C9E2]"></span>
                <span className="text-[#84C9E2] !font-dans font-bold text-xs uppercase tracking-widest">
                  Our Ideal Client
                </span>
              </div>

              <h1 className="!font-serif !mt-0 text-4xl md:text-5xl text-[#162C45] mb-8 leading-[1.15]">
                We serve entrepreneurs generating
                <span className="text-[#84C9E2] italic px-2">£150K+</span>
                in annual profit.
              </h1>

              <div className="border-l-2 border-gray-200 pl-6 py-2">
                <p className="!font-dans text-lg text-[#162C45] font-medium opacity-80">
                  Smart Entrepreneurs who value clarity, compliance, and
                  long-term financial optimisation.
                </p>
              </div>
            </div>

            {/* Right Scroll Col */}
            <div className="reveal-up delay-100 relative">
              <div className="bg-[#f7f8fa] p-8 md:p-10 rounded-2xl relative border-t-4 border-[#84C9E2]">
                <p className="!font-dans text-lg text-gray-600 leading-loose mb-8 font-light">
                  A2Z Accounting Dubai supports ambitious individuals and
                  businesses who want to build smarter, compliant, and
                  tax-efficient structures that protect their profits and
                  elevate their lifestyle.
                </p>

                <p className="!font-dans text-md md:text-lg text-gray-600 leading-loose font-light mb-8">
                  Whether you want to relocate to Dubai or keep living in the UK
                  while building a UAE-based company, we structure everything
                  the right way:
                </p>

                <ul className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#84C9E2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="!font-serif text-xl text-[#162C45]">
                      Fully Legally
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#84C9E2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="!font-serif text-xl text-[#162C45]">
                      Fully Compliant
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#84C9E2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="!font-serif text-xl text-[#162C45]">
                      Fully Aligned with Goals
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20 -z-10"
                style={{
                  backgroundImage: `radial-gradient(#162c45 1px, transparent 1px)`,
                  backgroundSize: "12px 12px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAILS SECTION --- */}
      <section className="py-10 pb-32 px-6 bg-[#f7f8fa] relative overflow-hidden">
        <div className="absolute left-[10%] top-0 w-px h-full bg-gray-200 hidden xl:block"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Item 1 */}
          <div className="reveal-up flex flex-col md:flex-row items-stretch gap-0 md:gap-12 mb-24 group">
            <div className="md:w-5/12 relative">
              <div className="w-full h-64 md:h-full min-h-[300px] bg-gray-200 rounded-md overflow-hidden shadow-lg relative">
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop"
                  alt="London Office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#162C45]/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="absolute -top-6 -left-6 bg-[#84C9E2] text-[#162C45] !font-serif text-4xl w-20 h-20 flex items-center justify-center rounded-br-3xl shadow-float z-20">
                01
              </div>
            </div>
            <div className="md:w-7/12 pt-10 md:pt-0 flex flex-col justify-center">
              <h2 className="!font-serif !mt-0 text-3xl md:text-4xl text-[#162C45] mb-4">
                UK Entrepreneurs
                <span className="italic text-gray-400 block text-2xl mt-1">
                  Reducing Tax While Staying in the UK
                </span>
              </h2>
              <p className="!font-dans text-gray-600 mb-6 leading-relaxed">
                Many of our clients continue to live and operate in the UK but
                use Dubai as a base for holding companies, consulting, or global
                expansion. We specialise in UK–UAE hybrid structures.
              </p>
              <ul className="grid grid-cols-2 gap-y-2 !font-dans text-sm text-[#162C45] font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#84C9E2] rounded-full"></span>
                  Consultants
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#84C9E2] rounded-full"></span>
                  Agencies
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#84C9E2] rounded-full"></span>
                  Contractors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#84C9E2] rounded-full"></span>
                  E-commerce
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 */}
          <div className="reveal-up flex flex-col md:flex-row-reverse items-stretch gap-0 md:gap-12 mb-24 group">
            <div className="md:w-5/12 relative">
              <div className="w-full h-64 md:h-full min-h-[300px] bg-gray-200 rounded-md overflow-hidden shadow-lg relative">
                <img
                  src="https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=2012&auto=format&fit=crop"
                  alt="Dubai Lifestyle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white text-[#162C45] !font-serif text-4xl w-20 h-20 flex items-center justify-center rounded-tl-3xl shadow-float z-20 border border-gray-100">
                02
              </div>
            </div>
            <div className="md:w-7/12 pt-10 md:pt-0 flex flex-col justify-center md:text-right">
              <h2 className="!font-serif !mt-0 text-3xl md:text-4xl text-[#162C45] mb-4">
                Relocating to Dubai
                <span className="italic text-gray-400 block text-2xl mt-1">
                  For a Tax-Efficient Lifestyle
                </span>
              </h2>
              <p className="!font-dans text-gray-600 mb-6 leading-relaxed">
                Company setup, residency visas, and Emirates ID—we manage the
                entire process. Enjoy 0% income tax, safety, and global
                opportunities while we handle the strategy.
              </p>
              <div className="flex flex-wrap justify-end gap-3 !font-dans text-sm text-[#162C45]">
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  Solo Founders
                </span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  High-Profit Service Providers
                </span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  Digital Entrepreneurs
                </span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="reveal-up flex flex-col md:flex-row items-stretch gap-0 md:gap-12 mb-24 md:mb-40 group">
            <div className="md:w-5/12 relative">
              <div className="w-full h-64 md:h-full min-h-[300px] bg-gray-200 rounded-md overflow-hidden shadow-lg relative">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                  alt="Global Business"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-[#1B3756] text-white !font-serif text-4xl w-20 h-20 flex items-center justify-center rounded-br-3xl shadow-float z-20">
                03
              </div>
            </div>
            <div className="md:w-7/12 pt-10 md:pt-0 flex flex-col justify-center">
              <h2 className="!font-serif !mt-0 text-3xl md:text-4xl text-[#162C45] mb-4">
                Growing Businesses
                <span className="italic text-gray-400 block text-2xl mt-1">
                  Wanting a UAE Base
                </span>
              </h2>
              <p className="!font-dans text-gray-600 mb-6 leading-relaxed">
                For companies expanding internationally, Dubai provides a
                tax-efficient headquarters with zero currency restrictions. We
                help build a future-proof entity.
              </p>
              <ul className="space-y-2 !font-dans text-sm text-gray-500">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#84C9E2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  UK companies expanding abroad
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#84C9E2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Tech & digital brands
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#84C9E2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Global subsidiaries
                </li>
              </ul>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Dark Card */}
            <div className="reveal-up relative bg-[#162C45] p-10 md:p-12 rounded-2xl shadow-premium overflow-hidden group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#84C9E2]/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#84C9E2]/20 transition-colors duration-700"></div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="px-3 py-1 rounded-full border border-[#84C9E2]/30 bg-[#84C9E2]/10">
                  <span className="!font-dans text-xs font-bold tracking-widest text-[#84C9E2] uppercase">
                    Wealth & Assets
                  </span>
                </div>
                <span className="!font-serif !mt-0 text-5xl text-white/10 group-hover:text-[#84C9E2] transition-colors duration-500">
                  04
                </span>
              </div>

              <h2 className="!font-serif !mt-0 text-3xl !text-white mb-2 relative z-10">
                High-Performing Individuals
              </h2>
              <p className="!font-dans text-white/60 text-sm mb-4 relative z-10 italic">
                For those earning £150K+ profit
              </p>

              <ul className="space-y-3 mb-6 relative z-10 flex-grow">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-[#84C9E2] rounded-full"></span>
                  <span className="!font-dans font-light">
                    Protect assets & reduce tax exposure
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-[#84C9E2] rounded-full"></span>
                  <span className="!font-dans font-light">
                    Build long-term wealth
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-[#84C9E2] rounded-full"></span>
                  <span className="!font-dans font-light">
                    Secure residency for family
                  </span>
                </li>
              </ul>

              <div className="relative z-10 pt-6 border-t border-white/10">
                <p className="!font-dans text-white text-sm">
                  Dubai provides the ideal environment for long-term financial
                  planning.
                </p>
              </div>
            </div>

            {/* Light Card */}
            <div className="reveal-up delay-100 relative bg-white p-10 md:p-12 rounded-2xl shadow-premium border border-gray-100 overflow-hidden group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
              <div
                className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
                style={{
                  backgroundImage: `radial-gradient(#162c45 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="px-3 py-1 rounded-full bg-gray-100">
                  <span className="!font-dans text-xs font-bold tracking-widest text-[#162C45]/70 uppercase">
                    Strategic Structure
                  </span>
                </div>
                <span className="!font-serif text-5xl text-gray-100 group-hover:text-[#84C9E2] transition-colors duration-500">
                  05
                </span>
              </div>

              <h2 className="!font-serif !mt-0 text-3xl text-[#162C45] mb-2 relative z-10">
                Investors & Consultants
              </h2>
              <p className="!font-dans text-gray-400 text-sm mb-4 relative z-10 italic">
                Optimised for global income
              </p>

              <ul className="space-y-3 mb-6 relative z-10 flex-grow">
                <li className="flex items-center gap-3 text-gray-600">
                  <svg
                    className="w-4 h-4 text-[#84C9E2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="!font-dans font-light">
                    Private consulting & contracting
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <svg
                    className="w-4 h-4 text-[#84C9E2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="!font-dans font-light">
                    Dividends & distributions
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <svg
                    className="w-4 h-4 text-[#84C9E2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="!font-dans font-light">
                    Multi-country income streams
                  </span>
                </li>
              </ul>

              <div className="relative z-10 pt-6 border-t border-gray-100">
                <p className="!font-dans text-[#162C45] text-sm font-medium">
                  We ensure your structure is compliant, efficient, and
                  future-proof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="bg-[#162C45] text-white py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(#84c9e2 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#84C9E2] blur-[120px] opacity-15"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#84C9E2] blur-[100px] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] md:w-[800px] md:h-[800px] border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] md:w-[600px] md:h-[600px] border border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] md:w-[400px] md:h-[400px] border border-[#84C9E2]/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 text-center max-w-6xl relative z-10 reveal-up">
          <h2 className="!text-2xl md:!text-4xl !font-serif mb-6 md:mb-8 !text-white relative inline-block">
            If You Want More Profit, Less Tax & Zero Stress Dubai gives you more
            freedom, more opportunity, more profit — and far less stress.
          </h2>

          <p className="text-lg md:text-xl font-light !font-dans text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            For entrepreneurs who want to elevate both their income and
            lifestyle, no other country offers such a powerful combination of
            tax efficiency, safety, and long-term stability.
          </p>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-lg inline-block mx-auto max-w-2xl shadow-2xl shadow-[#162C45]/50 relative group">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#84C9E2] rounded-full opacity-50 group-hover:animate-ping"></div>
            <p className="text-[#84C9E2] !font-serif text-md md:text-lg italic mb-8 relative z-10">
              &ldquo;No other country offers such a powerful combination of tax
              efficiency, safety, and long-term stability.&rdquo;
            </p>
            <button className="bg-[#84C9E2] text-[#162C45] !font-dans font-bold text-sm md:text-base px-8 py-3 md:px-10 md:py-4 rounded-md hover:!bg-[#73b2c9] hover:!text-[#162C45] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#84C9E2]/20">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
