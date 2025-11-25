import React from "react";

const PromoSection: React.FC = () => {
  return (
    <section
      className="relative flex min-h-[600px] w-full items-center justify-center bg-cover bg-center bg-no-repeat py-16 md:py-24"
      style={{
        backgroundImage:
          'url("/wp-content/uploads/2025/03/GettyImages-2188611296.jpg")',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Your Time is Valuable. <br />
            <span className="text-white">We Make Every Second Count.</span>
          </h2>
        </div>

        {/* Stats and CTA Container */}
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
          {/* Statistics Section with Blur Background */}
          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-8 shadow-2xl md:p-12">
            <div className="text-center">
              <div className="mb-4">
                <span className="text-lg font-medium text-white/90 md:text-xl">
                  Up to
                </span>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                  40%
                </span>
              </div>
              <div>
                <span className="text-lg font-medium text-white/90 md:text-xl">
                  of leaders' time goes to strategy.
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-center">
            <a
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              <span className="text-lg">Let us optimize it for you</span>
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
};

export default PromoSection;
