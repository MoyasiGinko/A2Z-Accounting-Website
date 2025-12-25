"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const useCarousels = () => {
  useEffect(() => {
    const initCarousels = async () => {
      const swiperNodes = document.querySelectorAll<HTMLElement>(
        ".elementor-widget-loop-carousel .swiper"
      );

      if (!swiperNodes.length) {
        return;
      }

      const markReady = (node: HTMLElement) => {
        node.classList.add("is-ready");
      };

      swiperNodes.forEach((swiperContainer) => {
        if (swiperContainer.dataset.initialised === "true") {
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
          ? (widget.querySelector(
              ".elementor-swiper-button-prev"
            ) as HTMLElement | null)
          : null;
        const next = widget
          ? (widget.querySelector(
              ".elementor-swiper-button-next"
            ) as HTMLElement | null)
          : null;
        const pagination = widget
          ? (widget.querySelector(".swiper-pagination") as HTMLElement | null)
          : null;

        swiperContainer.dataset.initialised = "true";
        markReady(swiperContainer);

        new Swiper(swiperContainer, {
          modules: [Navigation, Pagination, Autoplay],
          loop: settings.infinite === "yes",
          speed: parseInt(settings.speed, 10) || 500,
          slidesPerView: slidesDesktop,
          spaceBetween: spacing,
          navigation:
            prev && next
              ? {
                  prevEl: prev,
                  nextEl: next,
                }
              : undefined,
          pagination: pagination
            ? {
                el: pagination,
                clickable: true,
              }
            : undefined,
          autoplay: autoplayEnabled
            ? {
                delay: autoplayDelay,
                disableOnInteraction: true,
              }
            : false,
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
