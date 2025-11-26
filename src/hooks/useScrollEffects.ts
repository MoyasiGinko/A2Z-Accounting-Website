"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollHandler {
  init: () => void;
  measure: (scrollY: number) => void;
  mutate: (scrollY: number) => void;
}

export const useScrollEffects = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const lastScrollY = useRef(0);
  const scrollHandlers = useRef<ScrollHandler[]>([]);
  const ticking = useRef(false);

  // Debounce function
  const debounce = (
    func: Function,
    wait: number = 300,
    immediate: boolean = false
  ) => {
    let timeout: NodeJS.Timeout | undefined;
    return function executedFunction(...args: any[]) {
      const later = () => {
        timeout = undefined;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  };

  // Add scroll handler
  const addScrollHandler = (handler: ScrollHandler) => {
    requestAnimationFrame(() => {
      handler.init();
      scrollHandlers.current.push(handler);
      handler.measure(scrollY);
      handler.mutate(scrollY);
    });
  };

  // Scroll event handler
  const handleScroll = () => {
    const currentScrollY = window.pageYOffset;

    // Update scroll direction
    if (currentScrollY > lastScrollY.current) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection("up");
    }

    setScrollY(currentScrollY);
    lastScrollY.current = currentScrollY;

    if (!ticking.current) {
      requestAnimationFrame(() => {
        // Measure phase
        scrollHandlers.current.forEach((handler) =>
          handler.measure(currentScrollY)
        );
        // Mutate phase
        scrollHandlers.current.forEach((handler) =>
          handler.mutate(currentScrollY)
        );
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  // Resize elements (videos, iframes)
  const resizeElements = () => {
    const mediaElements = document.querySelectorAll(
      "#page .media-inner iframe, #page .media-inner object, #page .media-inner embed, #page .media-inner video, .wp-block-embed-vimeo:not(.wp-has-aspect-ratio) iframe, .wp-block-embed-vimeo:not(.wp-has-aspect-ratio) object, .wp-block-embed-vimeo:not(.wp-has-aspect-ratio) embed, .wp-block-embed-vimeo:not(.wp-has-aspect-ratio) video, :not(.wp-block-embed__wrapper) > .vamtam-video-frame iframe, :not(.wp-block-embed__wrapper) > .vamtam-video-frame object, :not(.wp-block-embed__wrapper) > .vamtam-video-frame embed, :not(.wp-block-embed__wrapper) > .vamtam-video-frame video"
    );

    mediaElements.forEach((element) => {
      const el = element as
        | HTMLIFrameElement
        | HTMLObjectElement
        | HTMLEmbedElement
        | HTMLVideoElement;
      setTimeout(() => {
        requestAnimationFrame(() => {
          const width = el.offsetWidth;
          el.style.width = "100%";
          if (el.width === 0 && el.height === 0) {
            el.style.height = `${(9 * width) / 16}px`;
          } else {
            const elWidth = Number(el.width) || 16;
            const elHeight = Number(el.height) || 9;
            el.style.height = `${(elHeight * width) / elWidth}px`;
          }
          // Trigger custom event
          el.dispatchEvent(new CustomEvent("vamtam-video-resized"));
        });
      }, 50);
    });

    // Adjust media element time rail
    setTimeout(() => {
      requestAnimationFrame(() => {
        const timeRails = document.querySelectorAll(".mejs-time-rail");
        timeRails.forEach((rail) => {
          (rail as HTMLElement).style.width = "calc(100% - 1px)";
        });
      });
    }, 100);
  };

  // Animated page scroll
  const scrollToElement = (element: HTMLElement, callback?: () => void) => {
    const headerContents = document.querySelector(
      "header.main-header .header-contents"
    ) as HTMLElement;
    const headerHeight = headerContents ? headerContents.offsetHeight : 0;
    const adminBarHeight = document.body.classList.contains("admin-bar")
      ? 32
      : 0;
    const targetOffset = element.offsetTop - adminBarHeight - headerHeight;

    window.scrollTo({
      left: 0,
      top: targetOffset,
      behavior: "smooth",
    });

    // Update URL hash
    if (element.id) {
      history.pushState
        ? history.pushState(null, "", `#${element.id}`)
        : (window.location.hash = element.id);
    }

    // Close mobile menus
    const fallbackMenuToggle = document.getElementById(
      "vamtam-fallback-main-menu-toggle"
    );
    const megaMenuToggle = document.querySelector(
      "#main-menu > .mega-menu-wrap > .mega-menu-toggle"
    ) as HTMLElement;

    if (fallbackMenuToggle)
      fallbackMenuToggle.classList.remove("mega-menu-open");
    if (megaMenuToggle) megaMenuToggle.classList.remove("mega-menu-open");

    if (callback) callback();
  };

  // Handle animated page scroll clicks
  const handleAnimatedScrollClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest(
      ".vamtam-animated-page-scroll, .vamtam-animated-page-scroll [href], .vamtam-animated-page-scroll [data-href]"
    ) as HTMLAnchorElement;

    if (!link) return;

    const href = link.href || link.dataset.href;
    if (!href) return;

    const url = new URL(href, window.location.origin);
    if (url.pathname !== window.location.pathname) return;

    const hash = url.hash.substring(1);
    const targetElement = document.getElementById(hash);
    if (!targetElement) return;

    e.preventDefault();
    scrollToElement(targetElement);
  };

  // Initialize scroll effects
  useEffect(() => {
    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Add click listeners for animated scrolling
    document.addEventListener("click", handleAnimatedScrollClick);

    // Handle initial hash scroll
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        // Scroll to top first, then to target
        window.scrollTo(0, 0);
        setTimeout(() => scrollToElement(targetElement), 400);
      }
    }

    // Resize elements on load and resize
    const debouncedResize = debounce(resizeElements, 100);
    window.addEventListener("resize", debouncedResize);
    resizeElements();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleAnimatedScrollClick);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return {
    scrollY,
    scrollDirection,
    addScrollHandler,
    resizeElements,
    scrollToElement,
  };
};
