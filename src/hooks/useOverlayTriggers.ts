"use client";

import { useEffect, useRef } from "react";

interface OverlayTrigger {
  overlayTarget: Element;
  closeTrigger: Element;
  isActive: boolean;
}

export const useOverlayTriggers = () => {
  const overlayTriggers = useRef<OverlayTrigger[]>([]);
  const isBelowMaxDeviceWidth = useRef(false);

  useEffect(() => {
    const initOverlayTriggers = () => {
      const triggers = document.querySelectorAll(".vamtam-overlay-trigger");
      const newTriggers: OverlayTrigger[] = [];
      isBelowMaxDeviceWidth.current = window.innerWidth < 1024; // Assuming max breakpoint is 1024px

      const handleClose = (e: Event) => {
        const target = e.currentTarget as Element;
        const trigger = newTriggers.find((t) => t.closeTrigger === target);
        if (!trigger) return;

        const row =
          target.closest(".elementor-row") ||
          target.closest(".elementor-container");
        if (row) {
          row.classList.remove("vamtam-overlay-trigger--overlay");
        }

        trigger.isActive = false;

        // Check if any overlays are still active
        const activeOverlays = document.querySelectorAll(
          ".vamtam-overlay-trigger--overlay .vamtam-overlay-element:visible"
        );
        if (activeOverlays.length < 2) {
          document.documentElement.classList.remove("vamtam-disable-scroll");
          document.body.classList.remove("vamtam-disable-scroll");
          const scrollToTop = document.getElementById("scroll-to-top");
          if (scrollToTop) scrollToTop.classList.remove("hidden");
        }
      };

      const handleOpen = (e: Event) => {
        const target = e.currentTarget as Element;
        const trigger = newTriggers.find((t) => t.closeTrigger === target);
        if (!trigger) return;

        const row =
          target.closest(".elementor-row") ||
          target.closest(".elementor-container");
        if (!row) return;

        if (row.classList.contains("vamtam-menu-nav-overlay-inside")) {
          // Position overlay
          const rect = row.getBoundingClientRect();
          const overlayElement = row.querySelector(
            ".vamtam-overlay-element"
          ) as HTMLElement;
          if (overlayElement) {
            overlayElement.style.top = `${rect.top + rect.height}px`;
          }
        }

        if (row.classList.contains("vamtam-overlay-trigger--overlay")) return;

        row.classList.add("vamtam-overlay-trigger--overlay");
        trigger.isActive = true;

        // Disable scroll and hide scroll-to-top
        document.documentElement.classList.add("vamtam-disable-scroll");
        document.body.classList.add("vamtam-disable-scroll");
        const scrollToTop = document.getElementById("scroll-to-top");
        if (scrollToTop) scrollToTop.classList.add("hidden");

        // Add close listener
        target.removeEventListener("click", handleClose);
        target.addEventListener("click", handleClose);
      };

      triggers.forEach((trigger) => {
        if (trigger.classList.contains("elementor-widget-nav-menu")) {
          const toggle = trigger.querySelector(
            ".elementor-menu-toggle"
          ) as HTMLElement;
          if (!toggle) return;

          toggle.removeEventListener("click", handleOpen);
          toggle.addEventListener("click", handleOpen);

          newTriggers.push({
            overlayTarget: trigger,
            closeTrigger: toggle,
            isActive: false,
          });

          // Add overlay element
          const row =
            trigger.closest(".elementor-row") ||
            trigger.closest(".elementor-container");
          if (row && !row.querySelector(".vamtam-overlay-element")) {
            const overlay = document.createElement("span");
            overlay.className = "vamtam-overlay-element";
            row.appendChild(overlay);
          }
        }
      });

      overlayTriggers.current = newTriggers;

      // Handle clicks outside overlay
      const handleOutsideClick = (e: MouseEvent) => {
        newTriggers.forEach((trigger) => {
          if (trigger.isActive) {
            const target = e.target as Element;
            if (
              target !== trigger.overlayTarget &&
              !trigger.overlayTarget.contains(target)
            ) {
              (trigger.closeTrigger as HTMLElement).click();
            }
          }
        });
      };

      document.addEventListener("click", handleOutsideClick, true);

      // Handle resize
      const handleResize = () => {
        const wasBelowMaxWidth = isBelowMaxDeviceWidth.current;
        isBelowMaxDeviceWidth.current = window.innerWidth < 1024;

        if (wasBelowMaxWidth !== isBelowMaxDeviceWidth.current) {
          newTriggers.forEach((trigger) => {
            if (trigger.isActive) {
              (trigger.closeTrigger as HTMLElement).click();
            }
          });
        }
      };

      window.addEventListener("resize", handleResize, { passive: true });

      // Cleanup function
      return () => {
        document.removeEventListener("click", handleOutsideClick);
        window.removeEventListener("resize", handleResize);
        newTriggers.forEach((trigger) => {
          (trigger.closeTrigger as HTMLElement).removeEventListener(
            "click",
            handleOpen
          );
          (trigger.closeTrigger as HTMLElement).removeEventListener(
            "click",
            handleClose
          );
        });
      };
    };

    const cleanup = initOverlayTriggers();

    return cleanup;
  }, []);

  return overlayTriggers.current;
};
