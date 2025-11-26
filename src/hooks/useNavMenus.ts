"use client";

import { useEffect } from "react";

export const useNavMenus = () => {
  useEffect(() => {
    const initNavMenus = () => {
      const widgets = document.querySelectorAll(".elementor-widget-nav-menu");

      widgets.forEach((widget) => {
        const toggle = widget.querySelector(
          ".elementor-menu-toggle"
        ) as HTMLElement;
        const container = widget.querySelector(
          ".elementor-nav-menu__container"
        ) as HTMLElement;

        if (!toggle || !container) return;

        const closeMenu = () => {
          toggle.classList.remove("elementor-menu-toggle--active");
          toggle.setAttribute("aria-expanded", "false");
          container.classList.remove("is-open");
        };

        const openMenu = () => {
          toggle.classList.add("elementor-menu-toggle--active");
          toggle.setAttribute("aria-expanded", "true");
          container.classList.add("is-open");
        };

        const handleToggleClick = (event: Event) => {
          event.preventDefault();
          const expanded = toggle.getAttribute("aria-expanded") === "true";
          if (expanded) {
            closeMenu();
          } else {
            openMenu();
          }
        };

        const handleOutsideClick = (event: Event) => {
          if (!widget.contains(event.target as Node)) {
            closeMenu();
          }
        };

        toggle.addEventListener("click", handleToggleClick);
        document.addEventListener("click", handleOutsideClick);

        // Cleanup function for this widget
        return () => {
          toggle.removeEventListener("click", handleToggleClick);
          document.removeEventListener("click", handleOutsideClick);
        };
      });
    };

    initNavMenus();
  }, []);
};
