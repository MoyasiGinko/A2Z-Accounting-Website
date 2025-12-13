"use client";

import React from "react";
import { DM_Sans, Forum, Great_Vibes } from "next/font/google";

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

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export default function AboutUs() {
  return (
    <div
      className={`${dmSans.variable} ${forum.variable} ${greatVibes.variable} font-sans bg-[#f7f8fa] text-[#162C45] antialiased selection:bg-[#84C9E2] selection:text-white`}
    >
      {/* 2. Scoped CSS for Animations */}
      <style jsx>{`
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
        {/* --- HEADER --- */}
        <header className="mb-20 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif text-[#162C45] mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-600 font-sans max-w-3xl leading-relaxed">
            We’re a team of strategic masterminds who believe that every
            business has the potential to be a market leader. We don’t just
            consult; we partner with you to unlock value, drive innovation, and
            build a legacy of success.
          </p>
        </header>

        {/* --- HERO / FEATURES SECTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center">
          <div className="relative fade-in-up delay-100">
            <div className="rounded overflow-hidden h-[500px] lg:h-[600px] w-full relative z-0">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
                alt="Strategic Meeting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden md:block absolute bottom-10 -right-12 lg:right-[-40px] lg:bottom-12 bg-[#84C9E2] p-8 rounded shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] max-w-xs z-10 text-[#162C45]">
              <h3 className="font-serif text-2xl mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 mb-6 text-sm font-medium">
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
                  Proven Methodology
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
                  Data-Driven Insights
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
                  Global Expertise
                </li>
              </ul>
              <a
                href="#"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest bg-[#162C45] text-white py-3 px-6 rounded hover:bg-[#1B3756] transition-colors"
              >
                Free Consultation
                <svg
                  className="w-3 h-3 ml-2"
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

          <div className="fade-in-up delay-200">
            <span className="bg-gray-200 text-[#162C45] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-6">
              Who We Are
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#162C45] mb-8 leading-tight">
              We Are A2Z Accounting
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A2Z Accounting is a premier management consulting firm dedicated
              to helping organizations navigate complex challenges and achieve
              sustainable growth. Founded on the principles of integrity,
              excellence, and collaboration, we bring a fresh perspective to
              traditional consulting.
            </p>

            <ul className="space-y-6">
              {[
                {
                  title: "Strategic Planning",
                  desc: "Developing comprehensive roadmaps to guide your business towards its long-term goals.",
                },
                {
                  title: "Market Analysis",
                  desc: "In-depth research to understand market dynamics and identify growth opportunities.",
                },
                {
                  title: "Operational Efficiency",
                  desc: "Streamlining operations to reduce costs and improve productivity.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#162C45]/10 flex items-center justify-center text-[#162C45] flex-shrink-0">
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
                    <h4 className="text-[#162C45] font-bold text-lg">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- MISSION SECTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-32 border-t border-gray-200 pt-20 fade-in-up">
          <div className="lg:col-span-4">
            <span className="bg-gray-200 text-[#162C45] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-4">
              Our Mission
            </span>
            <h2 className="text-4xl font-serif text-[#162C45] leading-tight">
              Driven by Purpose
            </h2>
          </div>
          <div className="lg:col-span-8 flex items-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower businesses with actionable strategies and innovative
              solutions that drive measurable results. We strive to be the
              catalyst for your success, fostering a culture of continuous
              improvement and long-term value creation.
            </p>
          </div>
        </section>

        {/* --- VISION & SOLUTIONS --- */}
        <section className="mb-32 fade-in-up delay-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="pl-6 border-l-2 border-[#84C9E2]">
              <h3 className="font-serif text-2xl text-[#162C45] mb-3">
                Strategic Vision
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We look beyond the horizon to anticipate trends and
                opportunities.
              </p>
            </div>
            <div className="pl-6 border-l-2 border-[#84C9E2]">
              <h3 className="font-serif text-2xl text-[#162C45] mb-3">
                Operational Excellence
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We optimize processes to ensure peak performance and efficiency.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[400px] lg:h-[500px] rounded overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
              alt="Modern Headquarters"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8">
              <div className="bg-[#84C9E2]/90 backdrop-blur text-[#162C45] px-6 py-3 rounded flex items-center gap-4 cursor-pointer hover:bg-white transition-colors">
                <span className="font-bold text-sm">Explore Our Solutions</span>
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

        {/* --- PROCESS SECTION --- */}

        <section className="mb-32 fade-in-up">
          <div className="text-center mb-16">
            <span className="bg-gray-200 text-[#162C45] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-serif text-[#162C45]">
              How We Drive Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "01",
                title: "Discovery",
                text: "We begin by understanding your unique challenges and goals through deep-dive sessions.",
              },
              {
                id: "02",
                title: "Analysis",
                text: "Our team analyzes data and market trends to identify the best course of action.",
              },
              {
                id: "03",
                title: "Strategy",
                text: "We develop a tailored strategy that aligns with your vision and objectives.",
              },
              {
                id: "04",
                title: "Execution",
                text: "We work alongside you to implement the strategy and monitor progress.",
              },
            ].map((step) => (
              <div
                key={step.id}
                className="group bg-white p-8 rounded shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-5xl font-serif text-[#84C9E2]/30 group-hover:text-[#84C9E2] transition-colors duration-300 mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-[#162C45] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- COUNTERS / INNOVATION SECTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center fade-in-up">
          <div className="relative order-2 lg:order-1">
            <div className="rounded overflow-hidden h-[500px] w-full">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2574&auto=format&fit=crop"
                alt="Innovation Hub"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 lg:right-[-40px] bg-[#1B3756] p-8 lg:p-10 rounded shadow-xl max-w-xs z-10 text-white">
              <span className="text-[#84C9E2] text-xs font-bold uppercase tracking-widest mb-2 block">
                A2Z Accounting
              </span>
              <div className="text-5xl font-serif mb-2">10+</div>
              <p className="text-sm text-gray-300 mb-6">
                Years of Accounting Service
              </p>
              <a
                href="#"
                className="w-full bg-[#84C9E2] hover:bg-[#73b2c9] text-[#162C45] font-bold py-3 px-6 rounded flex items-center justify-between text-sm transition-colors"
              >
                Contact Us
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
            <span className="bg-gray-200 text-[#162C45] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-6">
              Forward Thinking
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#162C45] mb-8 leading-tight">
              Innovation at Our Core
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We believe that innovation is the engine of growth. By combining
              data-driven insights with creative problem-solving, we help you
              stay ahead of the curve.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our approach is holistic, considering every aspect of your
              business to deliver solutions that are not only effective but also
              sustainable.
            </p>
          </div>
        </section>

        {/* --- TEAM SECTION --- */}
        <section className="mb-20 fade-in-up delay-100">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-xl">
              <span className="bg-gray-200 text-[#162C45] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block mb-4">
                Our Team
              </span>
              <h2 className="text-4xl font-serif text-[#162C45]">
                Meet Our Leaders
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm text-gray-500 leading-relaxed">
                Our team is composed of seasoned professionals with diverse
                backgrounds in management, finance, technology, and operations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Branding Card */}
            <div className="bg-[#162C45] rounded p-8 flex flex-col justify-between text-white min-h-[350px]">
              <p className="font-serif text-lg leading-relaxed mb-6">
                "Legacy of success can power your future!"
              </p>
              <div>
                <div className="text-[#84C9E2] text-5xl font-signature mb-4 font-[family-name:var(--font-great-vibes)]">
                  a2z accounting
                </div>
                <a
                  href="#"
                  className="bg-[#84C9E2] hover:bg-[#73b2c9] text-[#162C45] text-xs font-bold uppercase py-3 px-6 rounded flex items-center justify-between transition-colors"
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

            {/* Card 2: Team Member 1 */}
            <div className="group">
              <div className="rounded overflow-hidden h-[350px] mb-4 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                  alt="Shabbir Rahman"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl text-[#162C45]">
                Shabbir Rahman
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                Head Accountant
              </p>
              <p className="text-xs text-gray-400 line-clamp-3">
                James brings over 20 years of experience in strategic management
                and corporate restructuring.
              </p>
            </div>

            {/* Card 3: Team Member 2 */}
            <div className="group">
              <div className="rounded overflow-hidden h-[350px] mb-4 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1573496359-0cf84flc5272?q=80&w=1000&auto=format&fit=crop"
                  alt="Shovon Mostofa"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl text-[#162C45]">
                Shovon Mostofa
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                Director of Operations
              </p>
              <p className="text-xs text-gray-400 line-clamp-3">
                Sophia specializes in process optimization and operational
                efficiency, helping clients streamline their workflows.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
