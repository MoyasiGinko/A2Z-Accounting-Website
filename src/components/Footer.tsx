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
                  aria-label="Twitter"
                  className="!text-[#BBDFF6] hover:!text-white"
                >
                  <svg
                    className="w-6! h-6!"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.029-.967-.273-.101-.472-.149-.67.149-.197.297-.769.966-.943 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.58-.487-.502-.67-.512-.173-.009-.372-.011-.571-.011-.198 0-.52.074-.792.372-.272.297-1.043 1.019-1.043 2.479 0 1.46 1.068 2.876 1.217 3.074.149.198 2.104 3.213 5.1 4.509.713.308 1.269.492 1.703.63.715.228 1.366.196 1.88.119.573-.085 1.758-.719 2.006-1.413.248-.695.248-1.291.173-1.413-.074-.123-.272-.198-.57-.347m-5.421 3.453h-.003a8.888 8.888 0 01-4.533-1.234l-.325-.193-3.366.879.898-3.283-.211-.336a8.86 8.86 0 01-1.362-4.722c.003-4.903 3.993-8.89 8.899-8.89 2.379.001 4.611.93 6.289 2.609a8.824 8.824 0 012.602 6.285c-.002 4.903-3.993 8.889-8.888 8.889m7.613-16.502A10.924 10.924 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.944L0 24l6.305-1.654a11.86 11.86 0 005.737 1.459h.005c6.554 0 11.889-5.335 11.892-11.893 0-3.177-1.237-6.166-3.488-8.413" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/a2z-accounting-solutions-limited/"
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
                  href="https://www.facebook.com/a2zaccounting.co.uk"
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
                  href="https://www.instagram.com/a2z_accountingsolutions/"
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
