import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="max-w-[1320px] mt-6 mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
        <header className="mb-20 fade-in-up">
          <h1 className="text-4xl md:text-6xl !font-serif text-primary mb-6">
            About Us — A2Z Accounting Dubai
          </h1>
          <p className="text-lg text-gray-600 !font-sans max-w-3xl leading-relaxed font-medium">
            From Aberdeen&apos;s #1 Accounting Firm to Dubai&apos;s Leading
            Tax-Efficient Business Setup Partner.
          </p>
          <p className="text-gray-500 mt-4 max-w-4xl leading-relaxed !font-sans">
            A2Z Accounting Dubai is the international expansion of A2Z
            Accounting Solutions — Aberdeen&apos;s highest-rated and most
            trusted accounting firm. We help entrepreneurs worldwide establish
            tax-efficient, compliant, and strategically structured businesses in
            Dubai and across the UAE.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 items-center">
          <div className="relative fade-in-up delay-100">
            <div className="rounded overflow-hidden h-[500px] lg:h-[600px] w-full relative z-0">
              <img
                src="https://a2zaccounting.co.uk/wp-content/uploads/2025/08/Home-Page-photo.webp"
                alt="UK Office Standards"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden md:block absolute bottom-10 -right-12 lg:right-[-40px] lg:bottom-12 bg-secondary p-8 rounded shadow-xl max-w-xs z-10 text-primary">
              <h3 className="!font-serif text-2xl mb-4">
                Aberdeen&apos;s #1 Firm
              </h3>
              <ul className="space-y-3 mb-6 text-sm !font-sans font-medium">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
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
                  Trusted by Hundreds
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
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
                  Fixed-Fee Pricing
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
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
                  5-Star Rated
                </li>
              </ul>
              <div className="text-xs font-bold uppercase tracking-widest text-primary border-t border-primary/20 pt-4 !font-sans">
                UK Standards in Dubai
              </div>
            </div>
          </div>

          <div className="fade-in-up delay-200">
            <span className="bg-gray-200 text-primary text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-6 !font-sans">
              Our Roots
            </span>
            <h2 className="text-4xl lg:text-5xl !mt-0 !font-serif text-primary mb-8 leading-tight">
              Trusted, Proven, Respected
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed !font-sans">
              Our parent company, A2Z Accounting Solutions in Aberdeen, is
              widely recognised as a specialist in tax planning, bookkeeping,
              and compliance.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed !font-sans">
              This reputation for accuracy, trust, and client success is at the
              core of our UAE operations. We bring UK-level accounting standards
              to Dubai — something most UAE firms cannot match.
            </p>

            <h4 className="!font-serif text-2xl text-primary mb-6">
              Our UAE Expertise
            </h4>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary !mt-0 !font-serif font-bold text-lg">
                    UK–UAE Hybrid Models
                  </h4>
                  <p className="text-sm text-gray-500 mt-1 !font-sans">
                    Expert guidance for clients who want to live in the UK while
                    running a UAE company efficiently.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary !mt-0 !font-serif font-bold text-lg">
                    International Tax Planning
                  </h4>
                  <p className="text-sm text-gray-500 mt-1 !font-sans">
                    Perfect for clients earning £150K+ profit who want to reduce
                    tax burden while staying compliant.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary !mt-0 !font-serif font-bold text-lg">
                    UK-Standard Accounting
                  </h4>
                  <p className="text-sm text-gray-500 mt-1 !font-sans">
                    Detailed, accurate, and transparent reporting delivered with
                    the precision of a UK accountancy.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-32 border-t border-gray-200 pt-20 fade-in-up">
          <div className="lg:col-span-4">
            <span className="bg-gray-200 text-primary text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-4 !font-sans">
              Our Purpose
            </span>
            <h2 className="text-4xl !mt-0 !font-serif text-primary leading-tight">
              Smarter, Compliant, Global.
            </h2>
          </div>
          <div className="lg:col-span-8 flex items-center">
            <p className="text-gray-600 text-lg leading-relaxed !font-sans">
              Our purpose is simple: to give ambitious entrepreneurs a smarter,
              compliant way to reduce tax exposure, protect profits, build
              wealth, and enjoy a stress-free global lifestyle. We support
              founders, consultants, and investors generating £150K+ in profit.
            </p>
          </div>
        </section>

        <section className="mb-32 fade-in-up">
          <div className="text-center mb-16">
            <span className="bg-gray-200 text-primary text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-4 !font-sans">
              Client Profile
            </span>
            <h2 className="text-4xl !mt-0 !font-serif text-primary">
              Who We Help
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto !font-sans">
              Our services are designed for entrepreneurs generating £150K+
              annual profit who want to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="group relative bg-white p-8 rounded shadow-soft hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 bg-secondary/60 w-0 group-hover:w-full transition-all duration-300 ease-out"></div>

              <div className="text-4xl text-secondary/30 group-hover:text-secondary transition-colors duration-300 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl !font-serif !font-bold text-primary mb-3">
                Relocate to Dubai
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed !font-sans">
                For entrepreneurs wanting to move to Dubai for a tax-efficient
                lifestyle.
              </p>
            </div>

            <div className="group relative bg-white p-8 rounded shadow-soft hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 bg-secondary/60 w-0 group-hover:w-full transition-all duration-300 ease-out"></div>

              <div className="text-4xl text-secondary/30 group-hover:text-secondary transition-colors duration-300 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl !font-serif !font-bold text-primary mb-3">
                UK Resident & UAE Biz
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed !font-sans">
                Live in the UK while operating a UAE-based company with perfect
                compliance.
              </p>
            </div>

            <div className="group relative bg-white p-8 rounded shadow-soft hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 bg-secondary/60 w-0 group-hover:w-full transition-all duration-300 ease-out"></div>

              <div className="text-4xl text-secondary/30 group-hover:text-secondary transition-colors duration-300 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl !font-serif !font-bold text-primary mb-3">
                Reduce Tax Liability
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed !font-sans">
                Legally reduce personal and business tax burdens through smarter
                structuring.
              </p>
            </div>

            <div className="group relative bg-white p-8 rounded shadow-soft hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 bg-secondary/60 w-0 group-hover:w-full transition-all duration-300 ease-out"></div>

              <div className="text-4xl text-secondary/30 group-hover:text-secondary transition-colors duration-300 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl !font-serif !font-bold text-primary mb-3">
                Global Expansion
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed !font-sans">
                Build a holding company structure designed to facilitate
                international growth.
              </p>
            </div>

            <div className="group relative bg-white p-8 rounded shadow-soft hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 bg-secondary/60 w-0 group-hover:w-full transition-all duration-300 ease-out"></div>

              <div className="text-4xl text-secondary/30 group-hover:text-secondary transition-colors duration-300 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl !font-serif !font-bold text-primary mb-3">
                Protect Wealth
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed !font-sans">
                Secure your assets and structure your business for long-term
                financial freedom.
              </p>
            </div>

            <div className="group relative bg-white p-8 rounded shadow-soft hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 bg-secondary/60 w-0 group-hover:w-full transition-all duration-300 ease-out"></div>

              <div className="text-4xl text-secondary/30 group-hover:text-secondary transition-colors duration-300 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl !font-serif !font-bold text-primary mb-3">
                Zero Admin Stress
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed !font-sans">
                Run a business with zero stress. We handle setup, banking, and
                compliance.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-32 fade-in-up delay-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="pl-6 border-l-2 border-secondary">
              <h3 className="!font-serif text-2xl text-primary mb-3">
                UK-Trained Expertise
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed !font-sans">
                We bring deep UK–UAE tax strategy knowledge and British
                accounting excellence to the UAE.
              </p>
            </div>
            <div className="pl-6 border-l-2 border-secondary">
              <h3 className="!font-serif text-2xl text-primary mb-3">
                Transparent Pricing
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed !font-sans">
                Fixed, all-inclusive pricing with no hidden fees, no delays, and
                no confusion.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[400px] lg:h-[500px] rounded overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
              alt="Dubai Business"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-8 left-8">
              <div className="bg-secondary/90 backdrop-blur text-primary px-6 py-3 rounded flex items-center gap-4 cursor-pointer hover:bg-white transition-colors">
                <span className="!font-serif font-bold text-sm">
                  Start Your UAE Journey
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-40 items-center fade-in-up">
          <div className="relative order-2 lg:order-1">
            <div className="rounded overflow-hidden h-[450px] w-full">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                alt="Partnership"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 lg:right-[-40px] bg-tertiary p-8 lg:p-10 rounded shadow-xl max-w-xs z-10 text-white">
              <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2 block">
                A2Z Promise
              </span>
              <div className="text-3xl !font-serif mb-4 leading-none">
                End-to-End Service
              </div>
              <p className="text-sm text-gray-300 mb-6 !font-sans">
                Setup → Banking → Accounting → Compliance
              </p>
              <a
                href="#"
                className="w-full bg-secondary hover:bg-secondaryHover text-primary !font-sans font-bold py-3 px-6 rounded flex items-center justify-between text-sm transition-colors"
              >
                Book Consultation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="bg-gray-200 text-primary text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-6 !font-sans">
              Our Promise
            </span>
            <h2 className="text-4xl !mt-0 lg:text-5xl !font-serif text-primary mb-8 leading-tight">
              Simplicity & Excellence
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed !font-sans">
              A2Z Accounting Dubai blends British accounting excellence + UAE
              tax efficiency + world-class simplicity.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 !font-sans">
              We handle everything — advisory, setup, compliance, and ongoing
              accounting — so you can focus on scaling your business, building
              wealth, and enjoying the lifestyle you&apos;ve worked hard for.
            </p>
            <p className="!font-serif text-2xl text-primary italic">
              &quot;Because running a global business shouldn&apos;t be
              complicated. With the right structure, it becomes
              effortless.&quot;
            </p>
          </div>
        </section>

        <section className="fade-in-up delay-100">
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left mb-12 gap-8">
            <div className="max-w-xl">
              <span className="bg-gray-200 text-primary text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-4 !font-sans">
                Our Team
              </span>
              <h2 className="text-4xl !mt-0 !font-serif text-primary">
                Meet Our Leaders
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm text-gray-500 leading-relaxed !font-sans">
                Our team is composed of seasoned professionals with diverse
                backgrounds in management, finance, technology, and operations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary rounded p-8 flex flex-col justify-between text-white min-h-[350px]">
              <p className="!font-serif text-lg leading-relaxed mb-6">
                &quot;Legacy of success can power your future!&quot;
              </p>
              <div>
                <div className="text-secondary text-5xl font-signature mb-4">
                  a2z accounting
                </div>
                <a
                  href="#"
                  className="bg-secondary hover:bg-secondaryHover text-primary !font-sans text-xs font-bold uppercase py-3 px-6 rounded flex items-center justify-between transition-colors"
                >
                  Contact us
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="group">
              <div className="rounded overflow-hidden h-[350px] mb-4 bg-gray-200">
                <img
                  src="/images/team/person-1.jpg"
                  alt="Shabbir Rahman"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="!font-serif !mt-0 !mb-0 text-xl text-primary">
                Shabbir Rahman
              </h4>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2 !font-sans">
                Head Accountant
              </p>
              <p className="text-xs text-gray-400 line-clamp-3 !font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                doloremque blanditiis optio eos repellat illum quis reiciendis?
                Dicta, quis incidunt.
              </p>
            </div>

            <div className="group">
              <div className="rounded overflow-hidden h-[350px] mb-4 bg-gray-200">
                <img
                  src="/images/team/person-2.jpg"
                  alt="Shovon Mostofa"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="!font-serif !mt-0 !mb-0 text-xl text-primary">
                Shovon Mostofa
              </h4>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2 !font-sans">
                Director of Operations
              </p>
              <p className="text-xs text-gray-400 line-clamp-3 !font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                vel dolorum. Ullam quaerat nisi nulla minus quae, quis quo
                doloribus?
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-primary w-full text-white py-20 md:py-24 relative overflow-hidden mt-20 md:mt-20">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#84c9e2 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary blur-[120px] opacity-15"></div>

          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary blur-[100px] opacity-10"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] md:w-[800px] md:h-[800px] border border-white/5 rounded-full"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] md:w-[600px] md:h-[600px] border border-white/10 rounded-full"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] md:w-[400px] md:h-[400px] border border-secondary/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 text-center max-w-6xl relative z-10 ">
          <h2 className="text-2xl mt-0 md:text-4xl font-forum mb-6 md:mb-8 text-white relative inline-block">
            Dubai gives you more freedom, more opportunity,
            <br className="hidden md:block" />
            more profit — and far less stress.
          </h2>

          <p className="text-lg md:text-xl font-light font-dm text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            For entrepreneurs who want to elevate both their income and
            lifestyle, no other country offers such a powerful combination of
            tax efficiency, safety, and long-term stability.
          </p>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-lg inline-block mx-auto max-w-2xl shadow-2xl shadow-primary/50 relative group">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full opacity-50 group-hover:animate-ping"></div>

            <p className="text-secondary font-forum text-md md:text-lg italic mb-8 relative z-10">
              &quot;No other country offers such a powerful combination of tax
              efficiency, safety, and long-term stability.&quot;
            </p>

            <button className="bg-secondary hover:bg-secondary/90 text-primary hover:text-[#162C45] font-dm font-bold text-sm md:text-base px-8 py-3 md:px-10 md:py-4 rounded-md transition-all duration-300 hover:scale-105 shadow-lg shadow-secondary/20">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
