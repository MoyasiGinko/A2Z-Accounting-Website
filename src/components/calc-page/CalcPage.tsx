"use client";
import React, { useState } from "react";

const CalculatorPage: React.FC = () => {
  const [annualTurnover, setAnnualTurnover] = useState<number>(500000);
  const [annualExpense, setAnnualExpense] = useState<number>(50000);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleCalculate = () => {
    setShowResults(true);
  };

  // Calculate gross profit
  const grossProfit = annualTurnover - annualExpense;

  // UK Calculations
  const ukCorporateTax = grossProfit * 0.25;
  const ukNetProfit = grossProfit - ukCorporateTax;
  const ukEffectiveRate =
    grossProfit > 0 ? (ukCorporateTax / grossProfit) * 100 : 0;

  // UAE Calculations (9% corporate tax rate)
  const uaeCorporateTax = grossProfit * 0.09;
  const uaeNetProfit = grossProfit - uaeCorporateTax;
  const uaeEffectiveRate =
    grossProfit > 0 ? (uaeCorporateTax / grossProfit) * 100 : 0;

  // Tax savings
  const taxSavings = ukCorporateTax - uaeCorporateTax;

  const keyPoints = [
    "Experts in UAE Company Setup & Corporate Structure (Free Zone & Mainland)",
    "HMRC-compliant relocation strategies",
    "Smart Business Structure for Running Business In UAE while Residing in UK",
    "End-to-end service — Company Setup, Tax Optimisation, Banking & Residency to Accounting, Book Keeping & Financial Reporting",
    "Tax & Regulatory Compliance",
    "Transparent fees with no hidden mark-ups",
  ];

  return (
    <section className="py-20 bg-gradient-to-br mt-10 from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-300 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout: Content Left, Calculator Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side: Key Points in Single Card */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-100/50">
              <div className="absolute inset-4 bg-gradient-to-r from-primary-400/30 to-primary-600/30 rounded-2xl opacity-30 blur-3xl  pointer-events-none"></div>

              <div className="space-y-6">
                {keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300"
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
                    <p className="text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300 flex-1">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button aligned with left content */}
            <div className="flex justify-start">
              <div className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                <span className="mr-3">Get Started Today</span>
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

          {/* Right Side: Tax Calculator in Card */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-100/50 h-fit">
            {/* Glowing Rounded Rectangle Background */}
            <div className="absolute inset-4 bg-gradient-to-r from-primary-400/30 to-primary-600/30 rounded-2xl opacity-30 blur-3xl animate-pulse pointer-events-none"></div>

            {/* Calculator Header */}
            <div className="relative z-10 text-left mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Tax Savings Calculator
              </h4>
              <p className="text-gray-600">
                Compare corporate tax rates between UK and UAE
              </p>
            </div>

            {/* Tax Savings Banner - Only show after calculation */}
            {showResults && (
              <div className="relative z-10 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white mb-8 flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium mb-1">Tax Savings in UAE</p>
                  <p className="text-base">
                    Setting up in the UAE could qualify you for small business
                    relief and save you up to
                  </p>
                </div>
                <p className="text-3xl font-bold">
                  £{taxSavings.toLocaleString()}
                </p>
              </div>
            )}

            {/* Input Fields */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Turnover (£)
                </label>
                <input
                  type="number"
                  value={annualTurnover}
                  onChange={(e) => {
                    setAnnualTurnover(Number(e.target.value) || 0);
                    setShowResults(false); // Hide results when input changes
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="500000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Expenses (£)
                </label>
                <input
                  type="number"
                  value={annualExpense}
                  onChange={(e) => {
                    setAnnualExpense(Number(e.target.value) || 0);
                    setShowResults(false); // Hide results when input changes
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="50000"
                />
              </div>
            </div>

            {/* Calculate Button */}
            <div className="relative z-10 text-left mb-8">
              <button
                onClick={handleCalculate}
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
              >
                Calculate Tax Savings
              </button>
            </div>

            {/* Comparison Cards - Only show after calculation */}
            {showResults && (
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
                {/* UK Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-red-600 text-white p-4">
                    <h5 className="font-bold text-lg">UK Corporation</h5>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gross profit</span>
                      <span className="font-semibold">
                        £{grossProfit.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Corporate Tax</span>
                      <span className="font-semibold text-red-600">
                        £{ukCorporateTax.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Effective Tax Rate</span>
                      <span className="font-semibold">
                        {ukEffectiveRate.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Actual Tax Rate</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-900">
                        NET profit
                      </span>
                      <span className="font-bold text-green-600">
                        £{ukNetProfit.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* UAE Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-green-600 text-white p-4">
                    <h5 className="font-bold text-lg">UAE Corporation</h5>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gross profit</span>
                      <span className="font-semibold">
                        £{grossProfit.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Corporate Tax</span>
                      <span className="font-semibold text-green-600">
                        £{uaeCorporateTax.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Effective Tax Rate</span>
                      <span className="font-semibold">
                        {uaeEffectiveRate.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Actual Tax Rate</span>
                      <span className="font-semibold">9%</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-900">
                        NET profit
                      </span>
                      <span className="font-bold text-green-600">
                        £{uaeNetProfit.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorPage;
