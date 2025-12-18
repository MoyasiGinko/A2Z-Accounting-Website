"use client";
import React from "react";
import Calculator from "./calculator";

const CalculatorPage: React.FC = () => {
  return (
    <section className="py-20 bg-linear-to-br mt-10 from-secondary/10 to-primary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-md -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-300 rounded-md translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout: Content Left, Calculator Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side: Marketing Section */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-primary leading-tight">
              Maximize Your Tax Savings with UAE Business Setup
            </h2>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Relocate your business to the UAE and benefit from lower corporate
              tax rates, expert guidance on company setup, and seamless
              compliance. Our end-to-end services ensure a smooth transition,
              helping you optimize your finances while maintaining operations in
              the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md font-sans">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-primary text-primary-600 hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300 font-sans">
                Learn More
              </button>
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

export default CalculatorPage;
