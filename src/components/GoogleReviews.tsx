"use client";

import React, { useCallback, useEffect } from "react";
import Script from "next/script";

const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";
const ELFSIGHT_CONTAINER_CLASS =
  "elfsight-app-2b75ce4f-42ba-4a7f-837e-ee3e1471e9e0";

const GoogleReviews = () => {
  const initializeWidget = useCallback(() => {
    if (typeof window === "undefined") return;
    const elfsight = (
      window as typeof window & {
        Eapps?: { Apps?: { initialize: () => void } };
      }
    ).Eapps;

    if (elfsight?.Apps) {
      elfsight.Apps.initialize();
    }
  }, []);

  useEffect(() => {
    initializeWidget();
  }, [initializeWidget]);

  return (
    <>
      <Script
        id="elfsight-platform-script"
        src={ELFSIGHT_SCRIPT_SRC}
        strategy="lazyOnload"
        onLoad={initializeWidget}
      />
      <section className="bg-[#f9fafb] py-16 md:py-20 mt-20 mb-20">
        <div className="max-w-328 mx-auto px-4 sm:px-4 lg:px-4">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[#0F6FBE] font-semibold font-sans">
              Google Reviews
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium text-[#162C45] font-serif">
              Trusted by businesses across the UAE
            </h2>
            <p className="mt-3 text-base text-[#4A5B6D] font-sans max-w-2xl mx-auto">
              Hear directly from our clients about the impact A2Z Accounting has
              on their financial clarity and growth.
            </p>
          </div>
          <div className="bg-white/5 rounded-md p-6 md:p-8">
            <div className={ELFSIGHT_CONTAINER_CLASS} data-elfsight-app-lazy />
          </div>
        </div>
      </section>
    </>
  );
};

export default GoogleReviews;
