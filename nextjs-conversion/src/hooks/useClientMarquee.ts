"use client";

import { useEffect } from "react";

export const useClientMarquee = () => {
  useEffect(() => {
    const initClientMarquee = () => {
      const marqueeInner = document.querySelector(
        ".elementor-element-135a09a .e-con-inner"
      ) as HTMLElement;
      if (!marqueeInner || marqueeInner.dataset.marqueeReady === "true") {
        return;
      }

      marqueeInner.dataset.marqueeReady = "true";
      const marqueeWrapper = marqueeInner.parentElement as HTMLElement;
      if (marqueeWrapper) {
        marqueeWrapper.classList.add("standalone-marquee");
      }
      marqueeInner.classList.add("standalone-marquee-track");

      const originals = Array.from(marqueeInner.children) as HTMLElement[];
      if (originals.length > 0) {
        const duration = Math.max(16, originals.length * 3);
        marqueeInner.style.setProperty(
          "--standalone-marquee-duration",
          `${duration}s`
        );
      }

      originals.forEach((node) => {
        const clone = node.cloneNode(true) as HTMLElement;
        clone.classList.remove("elementor-invisible", "standalone-animated");
        clone.removeAttribute("data-id");
        clone.querySelectorAll(".elementor-invisible").forEach((child) => {
          child.classList.remove("elementor-invisible", "standalone-animated");
        });
        marqueeInner.appendChild(clone);
      });
    };

    // Initialize marquee after a short delay
    const timer = setTimeout(initClientMarquee, 100);

    return () => clearTimeout(timer);
  }, []);
};
