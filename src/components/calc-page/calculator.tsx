import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [annualTurnover, setAnnualTurnover] = useState<number>(500000);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const grossProfit = Math.max(annualTurnover, 0);
  const ukCorporateTax = grossProfit * 0.25;
  const ukNetProfit = grossProfit - ukCorporateTax;
  const ukEffectiveRate =
    grossProfit > 0 ? (ukCorporateTax / grossProfit) * 100 : 0;
  const isUaeTaxApplied = grossProfit > 80000;
  const uaeCorporateTax = isUaeTaxApplied ? grossProfit * 0.09 : 0;
  const uaeNetProfit = grossProfit - uaeCorporateTax;
  const uaeEffectiveRate =
    grossProfit > 0 ? (uaeCorporateTax / grossProfit) * 100 : 0;
  const taxSavings = ukCorporateTax - uaeCorporateTax;

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setShowResults(true);
      setIsCalculating(false);
    }, 1000); // Simulate calculation delay
  };

  return (
    <div className="relative bg-primary backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-100/50 h-fit">
      {/* Glowing Rounded Rectangle Background */}
      <div className="absolute inset-4 bg-linear-to-r from-[#84C9E2]/30 to-[#84C9E2]/30 rounded-2xl opacity-30 blur-3xl animate-pulse pointer-events-none"></div>

      {/* Calculator Header - Hide when results are shown */}
      {!showResults && (
        <div className="relative z-10 text-left mb-8">
          <h4 className="text-2xl font-medium font-serif text-white mb-2">
            Tax Savings Calculator
          </h4>
          <p className="text-white font-normal font-sans">
            Compare corporate tax rates between UK and UAE
          </p>
        </div>
      )}

      {/* Tax Savings Banner - Only show after calculation */}
      {showResults && (
        <div className="relative z-10 bg-linear-to-r from-[#84C9E2] to-[#6bb1d9] rounded-2xl p-6 text-white mb-8 flex justify-between items-center">
          <div>
            <h5 className="text-2xl  text-primary font-serif font-semibold mb-1">
              Tax Savings in UAE
            </h5>
            <p className="text-base  text-primary font-sans">
              Setting up in the UAE could qualify you for small business relief
              and save you up to
            </p>
          </div>
          <p className="text-3xl  text-primary font-bold">
            £{taxSavings.toLocaleString()}
          </p>
        </div>
      )}

      {/* Input Fields */}
      <div className="relative z-10 text-white grid grid-cols-1 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2 font-sans">
            Annual Turnover (£)
          </label>
          <input
            type="number"
            value={annualTurnover}
            onChange={(e) => {
              setAnnualTurnover(Number(e.target.value) || 0);
              setShowResults(false);
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="500000"
          />
        </div>
      </div>

      {/* Calculate Button */}
      <div className="relative z-10 text-left mb-8 flex gap-4">
        <button
          onClick={handleCalculate}
          disabled={isCalculating}
          className="px-4 py-2 text-base bg-primary-600 hover:bg-primary-700 bg-secondary text-primary font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md font-serif disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isCalculating ? "Calculating..." : "Calculate Tax Savings"}
        </button>
        {showResults && (
          <button
            onClick={() => {
              setShowResults(false);
              setAnnualTurnover(500000);
            }}
            className="px-4 py-2 bg-red-300 text-base hover:bg-red-400 text-primary font-semibold rounded-md transition-all duration-300 font-serif"
          >
            Clear
          </button>
        )}
      </div>

      {/* Comparison Cards - Only show after calculation */}
      {showResults && (
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
          {/* UK Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg  overflow-hidden">
            <div className="bg-[#e4572c]  p-4">
              <h5 className="font-medium text-white text-lg font-serif">
                UK Corporation
              </h5>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 font-sans">Gross profit</span>
                <span className="font-semibold">
                  £{grossProfit.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-sans">Corporate Tax</span>
                <span className="font-semibold text-red-600">
                  £{ukCorporateTax.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-sans">
                  Effective Tax Rate
                </span>
                <span className="font-semibold">
                  {ukEffectiveRate.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-sans">Actual Tax Rate</span>
                <span className="font-semibold">25%</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <span className="font-bold text-gray-900 font-sans">
                  NET profit
                </span>
                <span className="font-bold text-green-600">
                  £{ukNetProfit.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* UAE Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg  overflow-hidden">
            <div className="bg-linear-to-r from-green-500 to-emerald-600 p-4">
              <h5 className="font-medium text-white text-lg font-serif">
                UAE Corporation
              </h5>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 font-sans">Gross profit</span>
                <span className="font-semibold">
                  £{grossProfit.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-sans">Corporate Tax</span>
                <span className="font-semibold text-green-600">
                  £{uaeCorporateTax.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-sans">
                  Effective Tax Rate
                </span>
                <span className="font-semibold">
                  {uaeEffectiveRate.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-sans">Applied If</span>
                <span className="font-semibold">
                  {isUaeTaxApplied
                    ? "9% (above £80k)"
                    : "0% (below £80k relief)"}
                </span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <span className="font-bold text-gray-900 font-sans">
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
  );
};

export default Calculator;
