"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex min-h-[clamp(300px,100vh,720px)] items-stretch overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-repeat-x"
        style={{
          backgroundImage: `url('/wp-content/uploads/2025/04/GettyImages-1364777011_edit.png')`,
        }}
      />

      {/* Background Color Overlay */}
      <div className="absolute inset-0 bg-[#0F3D3A] mix-blend-overlay opacity-90" />

      {/* Content Container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-end">
        {/* Left Content - Centered */}
        <div className="self-end flex mb-20 flex-col justify-end items-center text-center lg:items-start lg:text-left">
          {/* Main Heading */}
          <h1
            className={`font-['Forum'] text-[clamp(2.5rem,5vw,3.5rem)] font-normal leading-[1em] text-white mb-4 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Transforming Businesses for a{" "}
            <span className="text-[#C8F8A9]">Stronger Future</span>.
          </h1>

          {/* Subtitle */}
          <h5
            className={`font-['DM_Sans'] text-[clamp(1.125rem,2.5vw,1.25rem)] font-normal leading-[1.4em] text-[#F2F5F1] mb-8 transition-all duration-1000 delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Guiding businesses at every stage toward strategic success.
          </h5>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="/free-consultation"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#C8F8A9] px-6 py-4 font-['DM_Sans'] text-[14px] font-medium leading-[1em] text-[#0F3D3A] transition-all duration-300 hover:bg-[#0F3D3A] hover:text-[#F2F5F1] hover:shadow-lg"
            >
              <span>Book A Free Strategy Call</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div
          className={`relative overflow-hidden rounded-t-lg bg-cover bg-center bg-no-repeat w-full max-w-[512px] h-[clamp(320px,70vh,610px)] justify-self-center transition-all duration-1000 delay-300 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
          style={{
            backgroundImage: `url('/wp-content/uploads/2025/03/GettyImages-75546129.jpg')`,
            marginTop: "clamp(2rem, 10vh, 4rem)",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
    </section>
  );
}
