"use client";

import { useEffect } from "react";

type GtagArguments = [string, ...unknown[]];

declare global {
  interface Window {
    gtag?: (...args: GtagArguments) => void;
    dataLayer?: GtagArguments[];
  }
}

interface AnalyticsProps {
  measurementId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ measurementId }) => {
  useEffect(() => {
    if (!measurementId) return;

    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: GtagArguments) {
      window.dataLayer!.push(args);
    }
    gtag("js", new Date());
    gtag("config", measurementId);

    // Track page view
    gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track user interactions
    const trackClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        gtag("event", "click", {
          event_category: "engagement",
          event_label: target.textContent?.trim() || "unknown",
        });
      }
    };

    document.addEventListener("click", trackClick);

    return () => {
      document.removeEventListener("click", trackClick);
    };
  }, [measurementId]);

  return null;
};

export default Analytics;
