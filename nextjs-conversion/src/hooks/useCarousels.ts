"use client";

import { useEffect } from "react";

export const useCarousels = () => {
  useEffect(() => {
    const initCarousels = async () => {
      // Dynamic import to avoid SSR issues
      const Swiper = (await import("swiper")).default;
      const { Navigation, Pagination, Autoplay } = await import(
        "swiper/modules"
      );

      const widgets = document.querySelectorAll(
        ".elementor-widget-loop-carousel .swiper"
      );
      widgets.forEach((swiperContainer) => {
        if ((swiperContainer as any).dataset.initialised === "true") {
          return;
        }

        const widget = swiperContainer.closest(
          ".elementor-widget-loop-carousel"
        );
        const settings = widget
          ? JSON.parse(widget.getAttribute("data-settings") || "{}")
          : {};

        const slidesDesktop = parseInt(settings.slides_to_show, 10) || 1;
        const slidesTablet =
          parseInt(settings.slides_to_show_tablet, 10) || slidesDesktop;
        const slidesMobile =
          parseInt(settings.slides_to_show_mobile, 10) || slidesTablet;
        const spacing = settings.image_spacing_custom
          ? parseInt(settings.image_spacing_custom.size, 10) || 0
          : 0;
        const autoplayEnabled = settings.autoplay === "yes";
        const autoplayDelay = parseInt(settings.autoplay_speed, 10) || 5000;
        const prev = widget
          ? widget.querySelector(".elementor-swiper-button-prev")
          : null;
        const next = widget
          ? widget.querySelector(".elementor-swiper-button-next")
          : null;
        const pagination = widget
          ? widget.querySelector(".swiper-pagination")
          : null;

        (swiperContainer as any).dataset.initialised = "true";
        swiperContainer.classList.add("is-ready");

        new Swiper(swiperContainer as any, {
          modules: [Navigation, Pagination, Autoplay],
          loop: settings.infinite === "yes",
          speed: parseInt(settings.speed, 10) || 500,
          slidesPerView: slidesDesktop,
          spaceBetween: spacing,
          navigation:
            prev && next
              ? {
                  prevEl: prev as HTMLElement,
                  nextEl: next as HTMLElement,
                }
              : undefined,
          pagination: pagination
            ? {
                el: pagination as HTMLElement,
                clickable: true,
              }
            : undefined,
          autoplay: autoplayEnabled
            ? {
                delay: autoplayDelay,
                disableOnInteraction: true,
              }
            : undefined,
          breakpoints: {
            0: {
              slidesPerView: slidesMobile,
            },
            768: {
              slidesPerView: slidesTablet,
            },
            1025: {
              slidesPerView: slidesDesktop,
            },
          },
        });
      });
    };

    // Initialize carousels after a short delay to ensure DOM is ready
    const timer = setTimeout(initCarousels, 100);

    return () => clearTimeout(timer);
  }, []);
};
