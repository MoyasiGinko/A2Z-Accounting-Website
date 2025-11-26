"use client";

import { useEffect } from "react";

export const useElementReveals = () => {
  useEffect(() => {
    const revealElement = (el: Element) => {
      if (el.classList.contains("elementor-invisible")) {
        el.classList.remove("elementor-invisible");
        el.classList.add("standalone-animated");
      }
    };

    const isInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      const viewHeight =
        window.innerHeight || document.documentElement.clientHeight;
      return rect.top <= viewHeight && rect.bottom >= 0;
    };

    const initReveals = () => {
      const elements = Array.from(
        document.querySelectorAll(".elementor-invisible")
      );

      // Fallback for browsers without IntersectionObserver
      if (!("IntersectionObserver" in window)) {
        elements.forEach(revealElement);
        return;
      }

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealElement(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -20% 0px",
          threshold: 0.2,
        }
      );

      elements.forEach((el) => {
        if (isInViewport(el)) {
          revealElement(el);
        } else {
          observer.observe(el);
        }
      });
    };

    // Initialize reveals after a short delay to ensure DOM is ready
    const timer = setTimeout(initReveals, 100);

    return () => clearTimeout(timer);
  }, []);
};
