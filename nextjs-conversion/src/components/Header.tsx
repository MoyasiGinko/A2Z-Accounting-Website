"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img
                src="/wp-content/uploads/2025/03/Logo-white.svg"
                alt="A2Z Accounting"
                className="h-5 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-white hover:text-[#C8F8A9] transition-colors duration-200 font-medium">
                Home
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Consulting Company
                  </a>
                  <a
                    href="/accounting-tax-audit-cpa"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Accounting Tax Audit CPA
                  </a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <a
                href="/services"
                className="text-white hover:text-[#C8F8A9] transition-colors duration-200 font-medium"
              >
                Services
              </a>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <a
                    href="/services/business-consulting"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Business Consulting
                  </a>
                  <a
                    href="/services/marketing-sales-retention"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Marketing, Sales & Retention
                  </a>
                  <a
                    href="/services/operations-management"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Operations Management
                  </a>
                  <a
                    href="/services/talent-acquisition"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Talent Acquisition
                  </a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <a
                href="/about"
                className="text-white hover:text-[#C8F8A9] transition-colors duration-200 font-medium"
              >
                About
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <a
                    href="/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Who We Are
                  </a>
                  <a
                    href="/about/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Team
                  </a>
                  <a
                    href="/about/careers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Careers
                  </a>
                  <a
                    href="/about/testimonials"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Testimonials
                  </a>
                  <a
                    href="/about/press-release"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Press Release
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/case-studies"
              className="text-white hover:text-[#C8F8A9] transition-colors duration-200 font-medium"
            >
              Case Studies
            </a>
            <a
              href="/blog"
              className="text-white hover:text-[#C8F8A9] transition-colors duration-200 font-medium"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="text-white hover:text-[#C8F8A9] transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Contact Button - Hidden on mobile */}
          <div className="hidden lg:block">
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#0F3D3A] bg-[#C8F8A9] hover:bg-[#C8F8A9]/80 transition-colors duration-200"
            >
              <span className="mr-2">→</span>
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#C8F8A9] transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-md mt-2">
              <div className="space-y-1">
                <button className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
                  Home
                </button>
                <div className="pl-4 space-y-1">
                  <a
                    href="/"
                    className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    Consulting Company
                  </a>
                  <a
                    href="/accounting-tax-audit-cpa"
                    className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    Accounting Tax Audit CPA
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <a
                  href="/services"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
                >
                  Services
                </a>
                <div className="pl-4 space-y-1">
                  <a
                    href="/services/business-consulting"
                    className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    Business Consulting
                  </a>
                  <a
                    href="/services/marketing-sales-retention"
                    className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    Marketing, Sales & Retention
                  </a>
                  <a
                    href="/services/operations-management"
                    className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    Operations Management
                  </a>
                  <a
                    href="/services/talent-acquisition"
                    className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    Talent Acquisition
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <a
                  href="/about"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
                >
                  About
                </a>
                <div className="pl-4 space-y-1">
                  <a
                    href="/about"
                    className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    Who We Are
                  </a>
                  <a
                    href="/about/team"
                    className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    Our Team
                  </a>
                  <a
                    href="/about/careers"
                    className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    Careers
                  </a>
                  <a
                    href="/about/testimonials"
                    className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    Testimonials
                  </a>
                  <a
                    href="/about/press-release"
                    className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    Press Release
                  </a>
                </div>
              </div>

              <a
                href="/case-studies"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
              >
                Case Studies
              </a>
              <a
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
              >
                Contact
              </a>

              <div className="pt-2 border-t border-gray-200">
                <a
                  href="/contact"
                  className="block w-full px-3 py-2 text-center bg-[#C8F8A9] text-[#0F3D3A] font-medium rounded-md hover:bg-[#C8F8A9]/80 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
