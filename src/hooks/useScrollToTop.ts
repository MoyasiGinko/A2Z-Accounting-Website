"use client";

import { useEffect, useState } from "react";

export const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const button = document.getElementById("scroll-to-top");
    if (!button) return;

    let pageMiddle = window.innerHeight / 2;

    const handleScroll = (scrollY: number) => {
      if (scrollY > pageMiddle) {
        setIsVisible(true);
        button.style.opacity = "1";
        button.style.transform = "translate3d(0, 0, 0)";
      } else {
        setIsVisible(false);
        button.style.opacity = "";
        button.style.transform = "translate3d(0, 100%, 0)";
      }
    };

    const handleResize = () => {
      pageMiddle = window.innerHeight / 2;
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".vamtam-scroll-to-top")) return;

      e.preventDefault();

      // iOS Safari uses simple animation, others use smooth scrolling
      const isIOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);

      if (isIOS) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth",
        });
      }
    };

    // Add event listeners
    window.addEventListener("resize", handleResize, { passive: true });
    const onScroll = () => handleScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", handleClick, true);

    // Initialize on mount
    onScroll();

    // Use the scroll effects hook to handle scroll events
    // This would be integrated with the main scroll effects hook

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return { isVisible };
};
