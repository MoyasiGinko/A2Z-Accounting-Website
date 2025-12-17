// ...existing code...
"use client";

import React, { useCallback } from "react";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <footer className="!bg-[#162C45] !text-white !py-8 md:!py-12 relative">
      <div className="!max-w-7xl !mx-auto !px-6 md:!px-8 lg:!px-10">
        <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 !gap-8 !items-start">
          {/* Logo / About */}
          <div>
            <Link
              href="/"
              aria-label="Home"
              className="!inline-flex !items-center !gap-3"
            >
              <img
                src="/wp-content/uploads/2025/03/Logo-white.svg"
                alt="A2Z Accounting"
                className="!w-32 md:!w-36 lg:!w-40 !h-auto"
              />
            </Link>
            <p className="!mt-4 !text-sm md:!text-base !text-[#E6EEF6] !font-dm-sans">
              Strategic Insights. Lasting Impact. Professional accounting &
              advisory for UAE.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="!font-forum !text-white !text-lg !mb-3">Services</h4>
            <nav className="!flex !flex-col !gap-2">
              <Link
                href="/services/company-formation"
                className="!text-[#CFE9FB] hover:!text-white !font-dm-sans !text-sm"
              >
                Company Formation
              </Link>
              <Link
                href="/services/accounting-bookkeeping"
                className="!text-[#CFE9FB] hover:!text-white !font-dm-sans !text-sm"
              >
                Accounting & Bookkeeping
              </Link>
              <Link
                href="/services/tax-compliance"
                className="!text-[#CFE9FB] hover:!text-white !font-dm-sans !text-sm"
              >
                Tax Compliance
              </Link>
              <Link
                href="/services/payroll-hr-pro"
                className="!text-[#CFE9FB] hover:!text-white !font-dm-sans !text-sm"
              >
                Payroll & HR Pro
              </Link>
              <Link
                href="/services/business-advisory"
                className="!text-[#CFE9FB] hover:!text-white !font-dm-sans !text-sm"
              >
                Business Advisory
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="!font-forum !text-white !text-lg !mb-3">Company</h4>
            <nav className="!flex !flex-col !gap-2">
              <a
                href="/about"
                className="!text-[#CFE9FB] hover:!text-white !font-dm-sans !text-sm"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="!text-[#CFE9FB] hover:!text-white !font-dm-sans !text-sm"
              >
                Contact
              </a>
              <Link
                href="/blogs"
                className="!text-[#CFE9FB] hover:!text-white !font-dm-sans !text-sm"
              >
                Blog
              </Link>
              <a
                href="/careers"
                className="!text-[#CFE9FB] hover:!text-white !font-dm-sans !text-sm"
              >
                Careers
              </a>
            </nav>
          </div>

          {/* Contact / Newsletter */}
          <div>
            <h4 className="!font-forum !text-white !text-lg !mb-3">
              Get in touch
            </h4>
            <p className="!text-[#CFE9FB] !text-sm !font-dm-sans">
              Email:{" "}
              <a className="!text-white" href="mailto:hello@a2zaccounting.ae">
                hello@a2zaccounting.ae
              </a>
            </p>
            <p className="!text-[#CFE9FB] !text-sm !mt-2 !font-dm-sans">
              Phone:{" "}
              <a className="!text-white" href="tel:+971500000000">
                +971 50 000 0000
              </a>
            </p>

            <div className="!mt-4">
              <div className="!flex !gap-3">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="!text-[#BBDFF6] hover:!text-white"
                >
                  <svg
                    className="!w-6 !h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.55 8.55 0 0 1-2.7 1.03 4.26 4.26 0 0 0-7.26 3.88A12.1 12.1 0 0 1 3.15 4.6a4.26 4.26 0 0 0 1.32 5.69 4.22 4.22 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.26 4.26 0 0 0 3.98 2.96A8.53 8.53 0 0 1 2 19.54a12.06 12.06 0 0 0 6.54 1.92c7.85 0 12.14-6.5 12.14-12.13l-.01-.55A8.7 8.7 0 0 0 24 5.5a8.43 8.43 0 0 1-2.54.7z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="!text-[#BBDFF6] hover:!text-white"
                >
                  <svg
                    className="!w-6 !h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M4.98 3.5a2.88 2.88 0 1 0 0 5.76 2.88 2.88 0 0 0 0-5.76zM3 9h4v12H3zM9 9h3.84v1.65h.05c.54-1 1.86-2.05 3.83-2.05C20.6 8.6 22 10.5 22 14.2V21h-4v-6c0-1.43-.03-3.26-1.99-3.26-1.99 0-2.29 1.55-2.29 3.15V21H9V9z" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="!text-[#BBDFF6] hover:!text-white"
                >
                  <svg
                    className="!w-6 !h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.5c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.89h-2.3V21.9C18.34 21.12 22 17 22 12z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="!text-[#BBDFF6] hover:!text-white"
                >
                  <svg
                    className="!w-6 !h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zM18.5 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="!mt-8 !pt-6 !border-t !border-[#0f2740]">
          <div className="!flex !flex-col md:!flex-row !items-center md:!justify-between !gap-3">
            <p className="!text-[#BBDFF6] !text-sm !font-dm-sans">
              © {new Date().getFullYear()} A2Z Accounting. All rights reserved.
            </p>
            <div className="!flex !gap-4 !items-center">
              <a
                href="/privacy"
                className="!text-[#CFE9FB] hover:!text-white !text-sm !font-dm-sans"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="!text-[#CFE9FB] hover:!text-white !text-sm !font-dm-sans"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Back to top button placed inside footer flow (shows only with footer) */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute right-6 bottom-6 z-50 inline-flex items-center justify-center rounded-full bg-white text-[#162C45] p-3 shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#84C9E2]"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 4l-8 8h5v8h6v-8h5l-8-8z" />
        </svg>
      </button>
    </footer>
  );
};
export default Footer;
