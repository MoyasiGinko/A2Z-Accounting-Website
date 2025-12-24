"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

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
            <p className="!text-[#CFE9FB] !text-sm !mt-2 !font-dm-sans">
              Address:{" "}
              <a
                className="!text-white"
                href="https://maps.app.goo.gl/UPNTXrUDenHVAsy28"
                target="_blank"
                rel="noopener noreferrer"
              >
                First Floor, 499 Union Street, Aberdeen, AB11 6DB
              </a>
            </p>
            <p className="!text-[#CFE9FB] !text-sm !font-dm-sans">
              Email:{" "}
              <a className="!text-white" href="mailto:info@a2zaccounting.co.uk">
                info@a2zaccounting.co.uk
              </a>
            </p>
            <p className="!text-[#CFE9FB] !text-sm !mt-2 !font-dm-sans">
              Phone:{" "}
              <a className="!text-white" href="tel:+01224042961">
                +01 224 042 961
              </a>
            </p>

            <div className="!mt-4">
              <div className="!flex !gap-3">
                <a
                  href="https://api.whatsapp.com/send/?phone=00447446844226&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="!text-[#BBDFF6] hover:!text-white"
                >
                  <FaWhatsapp className="!w-6 !h-6" aria-hidden />
                </a>

                <a
                  href="https://www.linkedin.com/company/a2z-accounting-solutions-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="!text-[#BBDFF6] hover:!text-white"
                >
                  <FaLinkedin className="!w-6 !h-6" aria-hidden />
                </a>

                <a
                  href="https://www.facebook.com/a2zaccounting.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="!text-[#BBDFF6] hover:!text-white"
                >
                  <FaFacebook className="!w-6 !h-6" aria-hidden />
                </a>

                <a
                  href="https://www.instagram.com/a2z_accountingsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="!text-[#BBDFF6] hover:!text-white"
                >
                  <FaInstagram className="!w-6 !h-6" aria-hidden />
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
