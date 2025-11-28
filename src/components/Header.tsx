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
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    subMenu: [
      { label: "Accounting Services", href: "/services/accounting" },
      { label: "Tax Consulting", href: "/services/tax" },
      { label: "Business Consulting", href: "/services/consulting" },
      { label: "Audit Services", href: "/services/audit" },
    ],
  },
  {
    label: "About",
    subMenu: [
      { label: "Our Story", href: "/about/story" },
      { label: "Our Team", href: "/about/team" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    label: "Resources",
    subMenu: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  useEffect(() => {
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
  }, [lastScrollY]);

  return (
    <header
      className={`custom-header fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary-600 to-primary-700 shadow-xl transition-all duration-300 ease-in-out backdrop-blur-sm bg-opacity-95 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center group transition-transform duration-200 hover:scale-105"
            >
              <div className="relative">
                <Image
                  src="/wp-content/uploads/2025/03/fav-icon-150x150.png"
                  alt="A2Z Accounting Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
              </div>
              <span className="ml-3 text-xl font-bold text-white tracking-wide group-hover:text-primary-100 transition-colors duration-200">
                A2Z Accounting
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-1 justify-center custom-nav">
            <div className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-sm font-semibold text-white hover:text-primary-100 transition-all duration-200 rounded-lg hover:bg-white hover:bg-opacity-10 group flex items-center"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-200"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-200 group-hover:w-full transition-all duration-300"></div>
                    </Link>
                  ) : (
                    <button
                      className="relative px-4 py-2 text-sm font-semibold text-white hover:text-primary-100 transition-all duration-200 rounded-lg hover:bg-white hover:bg-opacity-10 group flex items-center"
                      onClick={() => toggleSubMenu(item.label)}
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
                    </button>
                  )}

                  {/* Desktop Sub-menu */}
                  {item.subMenu && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                        <div className="relative bg-gradient-to-b from-gray-50 to-white p-2">
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="group/sub flex items-center px-4 py-3 text-sm text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-all duration-200"
                            >
                              <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 group-hover/sub:opacity-100 transition-opacity duration-200"></div>
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
          <div className="hidden md:flex flex-shrink-0">
            <Link
              href="/contact"
              className="group relative bg-white text-primary-600 hover:bg-gray-50 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Contact Now
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
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white opacity-90 group-hover:opacity-0 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative p-2 text-white hover:text-primary-100 transition-all duration-200 rounded-lg hover:bg-white hover:bg-opacity-10 group"
              aria-label="Toggle mobile menu"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-200"></div>
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
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-primary-700 to-primary-800 border-t border-primary-500/50 backdrop-blur-sm">
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
                      <div className="w-2 h-2 bg-primary-300 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <div>
                      <button
                        className="w-full text-left px-4 py-3 text-base font-semibold text-white hover:text-primary-100 hover:bg-white hover:bg-opacity-10 rounded-xl transition-all duration-200 flex items-center justify-between group"
                        onClick={() => toggleSubMenu(item.label)}
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary-300 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
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
                      </button>

                      {/* Mobile Sub-menu */}
                      {item.subMenu && openSubMenu === item.label && (
                        <div className="ml-8 mt-2 space-y-1 bg-primary-800/50 rounded-lg p-3 border border-primary-600/30 animate-slide-down">
                          {item.subMenu.map((subItem, subIndex) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="group/sub flex items-center px-3 py-2 text-sm text-primary-100 hover:text-white hover:bg-primary-600/50 rounded-lg transition-all duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                              style={{ animationDelay: `${subIndex * 30}ms` }}
                            >
                              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 opacity-0 group-hover/sub:opacity-100 transition-opacity duration-200"></div>
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
                  className="group relative w-full bg-white text-primary-600 hover:bg-gray-50 px-6 py-3 rounded-full text-center font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg flex items-center justify-center overflow-hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10 flex items-center">
                    Contact Now
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
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white opacity-90 group-hover:opacity-0 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
