"use client";

import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import Footer from "./Footer";
import Analytics from "./Analytics";

type AppShellProps = {
  children: ReactNode;
  gaMeasurementId?: string;
};

export default function AppShell({ children, gaMeasurementId }: AppShellProps) {
  const pathname = usePathname();
  const hideChrome = useMemo(
    () => pathname?.startsWith("/studio") ?? false,
    [pathname]
  );
  const pageClassName = hideChrome
    ? "min-h-screen"
    : "main-container min-h-screen";

  return (
    <ErrorBoundary>
      <div id="top"></div>
      {!hideChrome ? <Header /> : null}
      <div id="page" className={pageClassName}>
        {children}
      </div>
      {!hideChrome ? (
        <>
          <Footer />
          <div id="scroll-to-top" className="vamtam-scroll-to-top">
            <div id="scroll-to-top-text">top</div>
          </div>
        </>
      ) : null}
      <Analytics measurementId={gaMeasurementId} />
    </ErrorBoundary>
  );
}
