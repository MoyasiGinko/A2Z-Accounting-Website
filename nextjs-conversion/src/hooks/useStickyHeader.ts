"use client";

import { useEffect, useRef, useState } from "react";

export const useStickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const header = document.querySelector(
      ".vamtam-sticky-header"
    ) as HTMLElement;
    if (!header) return;

    headerRef.current = header;
    const headerHeight = header.offsetHeight;
    const isTransparent = header.classList.contains(
      "vamtam-sticky-header--transparent-header"
    );
    const isMobile = header.classList.contains("vamtam-sticky-header--mobile");

    // Handle admin bar for mobile sticky headers
    const adminBar = document.getElementById("wpadminbar");
    if (adminBar && isMobile) {
      adminBar.classList.add("vamtam-sticky-mobile-header");
    }

    // Set CSS custom properties for sticky margins
    const bodyPaddingLeft = window.getComputedStyle(document.body).paddingLeft;
    const bodyPaddingRight = window.getComputedStyle(
      document.body
    ).paddingRight;
    const headerContainer = header.closest(
      '[data-elementor-type="header"]'
    ) as HTMLElement;

    if (headerContainer) {
      if (parseInt(bodyPaddingLeft)) {
        headerContainer.style.setProperty(
          "--vamtam-sticky-mleft",
          `-${bodyPaddingLeft}`
        );
      }
      if (parseInt(bodyPaddingRight)) {
        headerContainer.style.setProperty(
          "--vamtam-sticky-mright",
          `-${bodyPaddingRight}`
        );
      }
    }

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

        // Don't animate if scrolling very little
        if (currentScrollY > headerHeight && scrollDelta < 20) {
          ticking.current = false;
          return;
        }

        // Determine if header should be sticky
        const shouldBeSticky = currentScrollY >= 10;
        setIsSticky(shouldBeSticky);

        // Handle visibility based on scroll direction
        if (shouldBeSticky || isTransparent) {
          if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            setIsVisible(false);
          } else {
            // Scrolling up
            setIsVisible(true);
          }
        } else {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    // Initial state
    const initStickyState = () => {
      if (window.scrollY >= 10) {
        setIsSticky(true);
        setIsVisible(false);
      }
    };

    initStickyState();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update header classes based on state
  useEffect(() => {
    if (!headerRef.current) return;

    const header = headerRef.current;

    if (isSticky) {
      header.classList.remove("vamtam-sticky-header--fixed-hidden");
      header.classList.add("vamtam-sticky-header--fixed-shown");
    } else {
      header.classList.remove(
        "vamtam-sticky-header--fixed-shown",
        "vamtam-sticky-header--fixed-hidden"
      );
    }

    if (!isVisible && isSticky) {
      header.classList.remove("vamtam-sticky-header--fixed-shown");
      header.classList.add("vamtam-sticky-header--fixed-hidden");
    }
  }, [isSticky, isVisible]);

  return {
    isSticky,
    isVisible,
    headerRef,
  };
};
