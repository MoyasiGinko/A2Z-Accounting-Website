"use client";

import React, { useEffect } from "react";

export default function WhyDubaiPage() {
  // 2. Animation Logic (Replaces the vanilla JS script)
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
          // Optional: Stop observing once revealed for better performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-up");
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup function
    return () => observer.disconnect();
  }, []);

  return (
    <main
      className={`!font-sans bg-[#f7f8fa] text-[#1B3756] overflow-x-hidden scroll-smooth`}
    >
      {/* 3. Embedded Custom Styles for Glassmorphism & Animations */}
      <style jsx global>{`
        /* Animations */
        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-up.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Glassmorphism Badge */
        .glass-badge {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Darker Glass */
        .glass-dark {
          background: rgba(22, 44, 69, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px -10px rgba(22, 44, 69, 0.3);
        }

        /* Number Transition */
        .number-transition {
          transition: color 0.4s ease-out;
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <header className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#162C45]/40 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#162C45] via-transparent to-transparent z-10 opacity-90"></div>
          <img
            src="https://images.unsplash.com/photo-1564003279498-014aa7d085ed?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite] transform transition-transform duration-[20s] hover:scale-110"
          />
        </div>

        {/* Floating Badge Top Left */}
        <div className="absolute top-[15%] left-[5%] z-20 glass-badge px-4 py-2 md:px-6 md:py-3 rounded-full animate-[bounce_6s_infinite]">
          <span className="text-white font-bold text-[10px] md:text-sm tracking-widest uppercase">
            0% Corporate Tax
          </span>
        </div>

        {/* Floating Badges Bottom Right */}
        <div className="absolute bottom-[18%] right-[5%] z-20 flex flex-col gap-3 md:bottom-16 md:right-10 items-end">
          <div className="glass-badge p-2 md:p-4 rounded-md flex items-start gap-3 w-max transform hover:-translate-x-1 transition-transform duration-300">
            <div className="w-2 h-2 mt-3 rounded-full bg-[#84C9E2]"></div>
            <div className="text-left">
              <p className="text-white !font-serif text-xs md:text-lg leading-none">
                Global Hub
              </p>
              <p className="text-gray-300 !font-sans text-[9px] md:text-xs uppercase tracking-wider">
                Access to Markets
              </p>
            </div>
          </div>
          <div className="glass-badge p-2 md:p-4 rounded-md flex items-start gap-3 w-max transform hover:-translate-x-1 transition-transform duration-300 delay-100">
            <div className="w-2 h-2 mt-3 rounded-full bg-green-400"></div>
            <div className="text-left">
              <p className="text-white !font-serif text-xs md:text-lg leading-none">
                100% Ownership
              </p>
              <p className="text-gray-300 !font-sans text-[9px] md:text-xs uppercase tracking-wider">
                No Local Sponsor
              </p>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 container mx-auto px-4 text-center max-w-4xl mt-[-20px]">
          <p className="text-[#84C9E2] !font-sans font-bold tracking-[0.2em] uppercase mb-4 text-[10px] md:text-sm reveal-up">
            Why Dubai?
          </p>

          <h1 className="!text-4xl !mt-0 sm:!text-6xl md:!text-7xl lg:!text-8xl !font-serif !text-white leading-[1.1] mb-6 md:mb-8 reveal-up delay-100">
            The World’s Most <br />
            <span className="italic text-[#84C9E2]">Tax-Efficient</span> Place
          </h1>

          <p className="text-gray-200 !font-sans text-base md:text-xl font-light max-w-xl md:max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 reveal-up delay-200 px-2">
            Build, protect, and grow your wealth in the preferred home for
            ambitious entrepreneurs.
          </p>

          <a
            href="#content-start"
            className="inline-block bg-[#84C9E2] text-[#162C45] font-bold text-sm md:text-base px-6 py-3 md:px-8 md:py-4 rounded-md hover:bg-[#73b2c9] transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#84C9E2]/20 reveal-up"
          >
            Explore The Benefits
          </a>
        </div>

        {/* Scroll Arrow */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <a
            href="#content-start"
            className="text-white opacity-70 hover:opacity-100 transition-opacity"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </a>
        </div>
      </header>

      {/* --- INTRO SECTION --- */}
      <section
        id="content-start"
        className="py-20 md:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            <div className="lg:col-span-5 relative reveal-up">
              <div className="absolute -top-10 -left-10 w-full h-full bg-[#84C9E2]/10 rounded-full blur-3xl -z-10"></div>

              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[#162C45]/20 mix-blend-multiply z-10"></div>
                <img
                  src="https://images.pexels.com/photos/10585528/pexels-photo-10585528.jpeg"
                  alt="Business Lifestyle"
                  className="w-full h-[400px] md:h-[500px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="absolute -bottom-6 right-0 md:-right-12 bg-white p-6 shadow-xl max-w-[200px] md:max-w-xs z-20 border-l-4 border-[#84C9E2] reveal-up delay-200">
                <p className="!font-serif text-2xl md:text-3xl text-[#162C45] mb-1">
                  £150K+
                </p>
                <p className="!font-sans text-xs md:text-sm text-slate-500 uppercase tracking-wide">
                  Profit Threshold
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-12 reveal-up delay-100 mt-8 lg:mt-0">
              <h2 className="text-3xl md:text-5xl lg:text-6xl !font-serif text-[#162C45] mb-6 md:mb-8 leading-[1.1]">
                More than just a <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#84C9E2] to-[#162C45] pr-2">
                  tax-friendly
                </span>
                location.
              </h2>

              <div className="prose prose-lg !font-sans text-slate-600 font-light text-sm md:text-base">
                <p className="!font-sans mb-6 leading-relaxed">
                  Dubai has become the preferred home for ambitious
                  entrepreneurs, high-performing professionals, and global
                  business owners — especially those earning
                  <span className="font-medium text-[#162C45]">
                    {" "}
                    £150K+ in profit
                  </span>
                  who want to legally reduce taxes while enjoying a higher
                  standard of living.
                </p>
                <p className="!font-sans leading-relaxed border-l-2 border-slate-200 pl-6 italic text-slate-500">
                  It’s a global business hub, lifestyle upgrade, and strategic
                  base for building long-term financial freedom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="pb-32 bg-[#f7f8fa] relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-16 md:mb-24 reveal-up">
            <span className="block w-20 h-1 bg-[#84C9E2] mb-6"></span>
            <h2 className="text-3xl md:text-5xl !font-serif text-[#162C45]">
              Key Advantages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {/* CARD 1 */}
            <div className="group relative bg-white p-8 md:p-10 pt-14 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 reveal-up">
              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#84C9E2] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="!font-serif text-5xl md:text-6xl text-slate-100 absolute right-6 top-6 group-hover:text-[#84C9E2] number-transition">
                01
              </span>
              <h3 className="text-xl md:text-2xl !font-serif text-[#162C45] mb-4 mr-8 relative z-10">
                Minimal Tax, Maximum Freedom
              </h3>
              <ul className="!font-sans space-y-3 mb-6 text-slate-600 text-sm relative z-10">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  0% personal income tax
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  0% tax on dividends
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  0% capital gains tax
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  Full ownership of company
                </li>
              </ul>
              <p className="!font-sans text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4 relative z-10">
                For entrepreneurs wasting large portions of their profit in UK
                taxes, Dubai provides a legally compliant route.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group relative bg-white p-8 md:p-10 pt-14 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 reveal-up delay-100">
              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#84C9E2] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="!font-serif text-5xl md:text-6xl text-slate-100 absolute right-6 top-6 group-hover:text-[#84C9E2] number-transition">
                02
              </span>
              <h3 className="text-xl md:text-2xl !font-serif text-[#162C45] mb-4 mr-10 relative z-10">
                Global Hub for Entrepreneurs
              </h3>
              <ul className="space-y-3 mb-6 text-slate-600 text-sm relative z-10">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  Fast business incorporation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  International banking access
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  No currency restrictions
                </li>
              </ul>
              <p className="!font-sans text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4 relative z-10">
                Whether you run an agency, consultancy, e-commerce brand, or
                tech company.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group relative bg-white p-8 md:p-10 pt-14 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 reveal-up delay-200">
              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#84C9E2] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="!font-serif text-5xl md:text-6xl text-slate-100 absolute right-6 top-6 group-hover:text-[#84C9E2] number-transition">
                03
              </span>
              <h3 className="text-xl md:text-2xl !font-serif text-[#162C45] mb-4 relative z-10">
                Lifestyle Upgrade
              </h3>
              <ul className="!font-sans space-y-3 mb-6 text-slate-600 text-sm relative z-10">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  One of the world&rsquo;s safest cities
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  Luxury living at lower costs
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  Year-round sunshine
                </li>
              </ul>
              <p className="!font-sans text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4 relative z-10">
                Entrepreneurs choose Dubai not only to grow their wealth — but
                to live better.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="group relative bg-white p-8 md:p-10 pt-14 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 reveal-up">
              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#84C9E2] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="!font-serif text-5xl md:text-6xl text-slate-100 absolute right-6 top-6 group-hover:text-[#84C9E2] number-transition">
                04
              </span>
              <h3 className="text-xl md:text-2xl !font-serif text-[#162C45] mb-4 relative z-10">
                Residency & Mobility
              </h3>
              <p className="!font-sans text-slate-600 mb-4 text-sm relative z-10">
                Setting up a company gives you:
              </p>
              <ul className="!font-sans space-y-3 mb-6 text-slate-600 text-sm relative z-10">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  A UAE Residency Visa
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  Emirates ID & Family Sponsorship
                </li>
              </ul>
              <p className="!font-sans text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4 relative z-10">
                This creates a stable hub for global travel, business
                operations, and personal lifestyle planning.
              </p>
            </div>

            {/* CARD 5 (DARK) */}
            <div className="md:col-span-2 group relative glass-dark p-8 md:p-10 pt-12 rounded-sm shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden reveal-up delay-100">
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-[#84C9E2]/20 rounded-full blur-[80px]"></div>
              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#84C9E2] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="!font-serif text-5xl md:text-6xl text-white/5 absolute right-6 top-6 group-hover:text-[#84C9E2] number-transition">
                05
              </span>

              <h3 className="text-2xl md:text-3xl !font-serif text-white mb-2 relative z-10">
                Perfect for UK Entrepreneurs
              </h3>
              <p className="!font-sans text-[#84C9E2] mb-8 text-[10px] md:text-xs uppercase tracking-widest font-bold">
                Especially those still living in the UK
              </p>

              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div>
                  <p className="!font-sans text-gray-300 mb-4 font-light text-sm">
                    Dubai is especially powerful for UK-based business owners
                    who:
                  </p>
                  <ul className="!font-sans space-y-2 text-gray-200 text-sm">
                    <li className="flex items-center gap-3">
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
                      Are earning £150K+ profit
                    </li>
                    <li className="flex items-center gap-3">
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
                      Want to reduce tax exposure
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-end">
                  <p className="!font-serif text-gray-400 text-base md:text-lg italic border-l-2 border-[#84C9E2] pl-4 leading-relaxed">
                    &ldquo;We specialise in helping UK entrepreneurs build Dubai
                    structures the right way.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="group relative bg-white p-8 md:p-10 pt-14 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 reveal-up delay-200">
              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#84C9E2] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="!font-serif text-5xl md:text-6xl text-slate-100 absolute right-6 top-6 group-hover:text-[#84C9E2] number-transition">
                06
              </span>
              <h3 className="text-xl md:text-2xl !font-serif text-[#162C45] mb-4 relative z-10">
                Future-Proof Business
              </h3>
              <ul className="!font-sans space-y-3 mb-6 text-slate-600 text-sm relative z-10">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  Massive investment in AI & Tech
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84C9E2]"></span>
                  Business-friendly laws
                </li>
              </ul>
              <p className="!font-sans text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4 relative z-10">
                Your business not only benefits today — it is positioned to
                thrive for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="bg-[#162C45] text-white py-20 md:py-24 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#84c9e2 1px, transparent 1px)",
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
          <h2 className="text-2xl md:text-4xl !font-serif mb-6 md:mb-8 text-white relative inline-block">
            Dubai gives you more freedom, more opportunity,
            <br className="hidden md:block" />
            more profit — and far less stress.
          </h2>

          <p className="text-lg md:text-xl !font-sans font-light text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            For entrepreneurs who want to elevate both their income and
            lifestyle, no other country offers such a powerful combination of
            tax efficiency, safety, and long-term stability.
          </p>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-lg inline-block mx-auto max-w-2xl shadow-2xl shadow-[#162C45]/50 relative group">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#84C9E2] rounded-full opacity-50 group-hover:animate-ping"></div>

            <p className="!font-serif text-[#84C9E2] text-md md:text-lg italic mb-8 relative z-10">
              &ldquo;No other country offers such a powerful combination of tax
              efficiency, safety, and long-term stability.&rdquo;
            </p>

            <button className="bg-[#84C9E2] text-[#162C45] !font-sans font-bold text-sm md:text-base px-8 py-3 md:px-10 md:py-4 rounded-md hover:bg-[#73b2c9] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#84C9E2]/20">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
