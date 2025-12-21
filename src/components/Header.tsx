"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface SubMenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href?: string;
  subMenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Why Dubai",
    href: "/why-dubai",
  },
  {
    label: "Who We Serve",
    href: "/who-we-serve",
  },
  {
    label: "Services",
    subMenu: [
      {
        label: "Company Formation & Corporate Setup",
        href: "/services/company-formation",
      },
      {
        label: "Accounting & Bookkeeping",
        href: "/services/accounting-bookkeeping",
      },
      {
        label: "Tax & Regulatory Compliance",
        href: "/services/tax-compliance",
      },
      {
        label: "Payroll & PRO Services",
        href: "/services/payroll-hr-pro",
      },
      {
        label: "Business Advisory & Structuring",
        href: "/services/business-advisory",
      },
    ],
  },
  {
    label: "Free Resources",
    subMenu: [
      { label: "Free Materials", href: "/free-materials" },
      { label: "Blogs", href: "/blogs" },
      { label: "FAQ", href: "/faq" },
      { label: "Tax Calculators", href: "/tax-calculators" },
    ],
  },
  {
    label: "A2Z Accounting UK",
    href: "https://a2zaccounting.co.uk/",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or at top of page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isClient]);

  // Determine background style based on scroll position and visibility
  const getHeaderClasses = () => {
    const baseClasses =
      "fixed top-0 left-0 right-0 z-50 shadow-xl transition-all duration-300 ease-in-out backdrop-blur-sm";

    if (!isVisible) {
      return `${baseClasses} -translate-y-full`;
    }

    // When visible, check if we're at the top (only on client side)
    const isAtTop = isClient ? window.scrollY < 50 : true;

    if (isAtTop) {
      return `${baseClasses} translate-y-0 bg-[#162C45]/70`;
    } else {
      return `${baseClasses} translate-y-0 bg-[#162C45]`;
    }
  };

  return (
    <header className={getHeaderClasses()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="flex items-center group transition-transform duration-200 hover:scale-105"
            >
              <div className="relative">
                <Image
                  src="/wp-content/uploads/2025/03/Logo-white.svg"
                  alt="A2Z Accounting Logo"
                  width={44}
                  height={44}
                  className="h-16 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-sm font-semibold text-white hover:text-primary-100 transition-all duration-200 rounded-lg hover:bg-white/30 hover:bg-opacity-10 group flex items-center"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-200"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-200 group-hover:w-full transition-all duration-300"></div>
                    </Link>
                  ) : (
                    <Link
                      className="relative px-4 py-2 text-sm font-semibold text-white hover:text-primary-100 transition-all duration-200 rounded-lg hover:bg-white/30 hover:bg-opacity-10 group flex items-center"
                      onClick={() => toggleSubMenu(item.label)}
                      href="#!"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-200"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-200 group-hover:w-full transition-all duration-300"></div>
                      <svg
                        className={`ml-2 h-4 w-4 transition-all duration-300 group-hover:rotate-180 ${
                          openSubMenu === item.label
                            ? "rotate-180 text-primary-200"
                            : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>
                  )}

                  {/* Desktop Sub-menu */}
                  {item.subMenu && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                        <div className="relative bg-linear-to-b from-gray-50 to-white p-2">
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="group/sub flex items-center px-4 py-3 text-sm text-gray-700 hover:text-primary-700 hover:bg-secondary/30 rounded-lg transition-all duration-200"
                            >
                              <div className="w-2 h-2 bg-primary-400 rounded-md mr-3 opacity-0 group-hover/sub:opacity-100 transition-opacity duration-200"></div>
                              <span className="font-medium">
                                {subItem.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Contact Now Button */}
          <div className="hidden md:flex shrink-0">
            <Link
              href="/contact-us"
              className="group relative bg-white text-[#162C45] px-6 py-2.5 rounded-md text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg overflow-hidden flex items-center"
            >
              <span className="relative z-10">Enquire Today</span>
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              {/* <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              {/* <div className="absolute inset-0 bg-white opacity-90 group-hover:opacity-0 transition-opacity duration-300"></div> */}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <span
              onClick={toggleMobileMenu}
              className="relative p-2 text-white hover:text-primary-100 transition-all duration-200 rounded-lg  hover:bg-opacity-10 group"
              aria-label="Toggle mobile menu"
            >
              {/* <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-200"></div> */}
              <svg
                className="relative z-10 h-6 w-6 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
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
            </span>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden  border-t border-[#162C45]/50 backdrop-blur-sm">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {menuItems.map((item, index) => (
                <div
                  key={item.label}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="group flex items-center px-4 py-3 text-base font-semibold text-white hover:text-primary-100 hover:bg-white hover:bg-opacity-10 rounded-xl transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-2 h-2 bg-primary-300 rounded-md mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <div>
                      <span
                        className="w-full text-left px-4 py-3 text-base font-semibold text-white hover:text-primary-100 hover:bg-white hover:bg-opacity-10 rounded-xl transition-all duration-200 flex items-center justify-between group"
                        onClick={() => toggleSubMenu(item.label)}
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary-300 rounded-md mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                          <span>{item.label}</span>
                        </div>
                        <svg
                          className={`h-5 w-5 transition-all duration-300 ${
                            openSubMenu === item.label
                              ? "rotate-180 text-primary-200"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>

                      {/* Mobile Sub-menu */}
                      {item.subMenu && openSubMenu === item.label && (
                        <div className="ml-8 mt-2 space-y-1 bg-[#1B3756] rounded-lg p-3 border border-[#84C9E2]/30 animate-slide-down">
                          {item.subMenu.map((subItem, subIndex) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="group/sub flex items-center px-3 py-2 text-sm text-primary-100 hover:text-white hover:bg-[#84C9E2]/50 rounded-lg transition-all duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                              style={{ animationDelay: `${subIndex * 30}ms` }}
                            >
                              {/* <div className="w-1.5 h-1.5 bg-primary-400 rounded-md mr-3 opacity-0 group-hover/sub:opacity-100 transition-opacity duration-200"></div> */}
                              <span className="font-medium">
                                {subItem.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Now Button */}
              <div className="pt-6 border-t border-primary-500/30 mt-6">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative w-full bg-white text-primary-600 hover:bg-gray-50 px-6 py-3 rounded-md text-center font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg flex items-center justify-center overflow-hidden"
                >
                  <span className="relative z-10">Contact Now</span>
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                  {/* <div className="absolute inset-0 bg-white opacity-90 group-hover:opacity-0 transition-opacity duration-300"></div> */}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
