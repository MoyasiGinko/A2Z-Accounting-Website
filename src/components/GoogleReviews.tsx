"use client";

import React, { useEffect } from "react";

const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";
const ELFSIGHT_CONTAINER_CLASS =
  "elfsight-app-2b75ce4f-42ba-4a7f-837e-ee3e1471e9e0";

const GoogleReviews = () => {
  useEffect(() => {
    const scriptId = "elfsight-platform-script";

    const existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = ELFSIGHT_SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if ((window as any).Eapps?.Apps) {
      // Re-initialize widget if script already loaded.
      (window as any).Eapps.Apps.initialize();
    }
  }, []);

  return (
    <section className="bg-[#f9fafb] py-16 md:py-20 mt-20 mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#0F6FBE] font-semibold">
            Google Reviews
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl text-[#162C45] font-forum">
            Trusted by businesses across the UAE
          </h2>
          <p className="mt-3 text-base text-[#4A5B6D] font-dm-sans max-w-2xl mx-auto">
            Hear directly from our clients about the impact A2Z Accounting has
            on their financial clarity and growth.
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8">
          <div
            className={`${ELFSIGHT_CONTAINER_CLASS}`}
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
