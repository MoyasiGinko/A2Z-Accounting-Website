"use client";

import { useEffect, useRef, useState } from "react";

type SubMenuItem = {
  key: string;
  liClass: string;
  linkClass: string;
  href: string;
  label: string;
  ariaCurrent?: "page";
};

type PrimaryMenuItem = {
  key: string;
  liClass: string;
  linkClass: string;
  href: string;
  label: string;
  ariaCurrent?: "page";
  children?: SubMenuItem[];
};

const MENU_ITEMS: PrimaryMenuItem[] = [
  {
    key: "289",
    liClass:
      "menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-289",
    linkClass: "elementor-item elementor-item-anchor",
    href: "#",
    label: "H",
    children: [
      {
        key: "290",
        liClass:
          "menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-17 current_page_item menu-item-290",
        linkClass: "elementor-sub-item elementor-item-active",
        href: "https://execor.vamtam.com/",
        label: "Consulting Company\u00A0",
        ariaCurrent: "page",
      },
      {
        key: "3944",
        liClass:
          "menu-item menu-item-type-post_type menu-item-object-page menu-item-3944",
        linkClass: "elementor-sub-item",
        href: "https://execor.vamtam.com/accounting-tax-audit-cpa/",
        label: "Accounting Tax Audit CPA",
      },
    ],
  },
  {
    key: "6511",
    liClass:
      "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6511",
    linkClass: "elementor-item",
    href: "https://execor.vamtam.com/services/",
    label: "Services",
    children: [
      {
        key: "287",
        liClass:
          "menu-item menu-item-type-post_type menu-item-object-page menu-item-287",
        linkClass: "elementor-sub-item",
        href: "https://execor.vamtam.com/services/business-consulting/",
        label: "Business Consulting",
      },
      {
        key: "286",
        liClass:
          "menu-item menu-item-type-post_type menu-item-object-page menu-item-286",
        linkClass: "elementor-sub-item",
        href: "https://execor.vamtam.com/services/marketing-sales-retention/",
        label: "Marketing, Sales, & Retention",
      },
      {
        key: "285",
        liClass:
          "menu-item menu-item-type-post_type menu-item-object-page menu-item-285",
        linkClass: "elementor-sub-item",
        href: "https://execor.vamtam.com/services/operations-management/",
        label: "Operations Management",
      },
      {
        key: "284",
        liClass:
          "menu-item menu-item-type-post_type menu-item-object-page menu-item-284",
        linkClass: "elementor-sub-item",
        href: "https://execor.vamtam.com/services/talent-acquisition/",
        label: "Talent Acquisition",
      },
    ],
  },
  {
    key: "278",
    liClass:
      "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-278",
    linkClass: "elementor-item",
    href: "https://execor.vamtam.com/about/",
    label: "About",
    children: [
      {
        key: "288",
        liClass:
          "menu-item menu-item-type-post_type menu-item-object-page menu-item-288",
        linkClass: "elementor-sub-item",
        href: "https://execor.vamtam.com/about/",
        label: "Who We Are",
      },
      {
        key: "281",
        liClass:
          "menu-item menu-item-type-post_type menu-item-object-page menu-item-281",
        linkClass: "elementor-sub-item",
        href: "https://execor.vamtam.com/about/team/",
        label: "Our Team",
      },
      {
        key: "282",
        liClass:
          "menu-item menu-item-type-post_type menu-item-object-page menu-item-282",
        linkClass: "elementor-sub-item",
        href: "https://execor.vamtam.com/about/careers/",
        label: "Careers",
      },
      {
        key: "279",
        liClass:
          "menu-item menu-item-type-post_type menu-item-object-page menu-item-279",
        linkClass: "elementor-sub-item",
        href: "https://execor.vamtam.com/about/testimonials/",
        label: "Testimonials",
      },
      {
        key: "280",
        liClass:
          "menu-item menu-item-type-post_type menu-item-object-page menu-item-280",
        linkClass: "elementor-sub-item",
        href: "https://execor.vamtam.com/about/press-release/",
        label: "Press Release",
      },
    ],
  },
  {
    key: "277",
    liClass:
      "menu-item menu-item-type-post_type menu-item-object-page menu-item-277",
    linkClass: "elementor-item",
    href: "https://execor.vamtam.com/case-studies/",
    label: "Case Studies",
  },
  {
    key: "276",
    liClass:
      "menu-item menu-item-type-post_type menu-item-object-page menu-item-276",
    linkClass: "elementor-item",
    href: "https://execor.vamtam.com/blog/",
    label: "Blog",
  },
  {
    key: "275",
    liClass:
      "menu-item menu-item-type-post_type menu-item-object-page menu-item-275",
    linkClass: "elementor-item",
    href: "https://execor.vamtam.com/contact/",
    label: "Contact",
  },
];

type MenuListProps = {
  menuId: string;
  tabIndex?: number;
  onLinkClick?: () => void;
};

const MenuList = ({ menuId, tabIndex, onLinkClick }: MenuListProps) => {
  const computedTabIndex = typeof tabIndex === "number" ? tabIndex : undefined;

  return (
    <ul id={menuId} className="elementor-nav-menu">
      {MENU_ITEMS.map((item) => (
        <li key={`${menuId}-${item.key}`} className={item.liClass}>
          <a
            href={item.href}
            className={item.linkClass}
            aria-current={item.ariaCurrent}
            tabIndex={computedTabIndex}
            onClick={onLinkClick}
          >
            {item.label}
          </a>
          {item.children && (
            <ul className="sub-menu elementor-nav-menu--dropdown">
              {item.children.map((child) => (
                <li key={`${menuId}-${child.key}`} className={child.liClass}>
                  <a
                    href={child.href}
                    className={child.linkClass}
                    aria-current={child.ariaCurrent}
                    tabIndex={computedTabIndex}
                    onClick={onLinkClick}
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

type NavWidgetProps = {
  mainId: string;
  dropdownId: string;
  isMenuOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
};

const NavWidget = ({
  mainId,
  dropdownId,
  isMenuOpen,
  onToggle,
  onLinkClick,
}: NavWidgetProps) => (
  <div
    className="vamtam-has-theme-widget-styles elementor-element elementor-element-1243e1d elementor-nav-menu__align-center elementor-nav-menu--dropdown-mobile elementor-nav-menu--stretch elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
    data-id="1243e1d"
    data-element_type="widget"
    data-settings='{"submenu_icon":{"value":"<i class=\"\"></i>","library":""},"full_width":"stretch","layout":"horizontal","toggle":"burger"}'
    data-widget_type="nav-menu.default"
  >
    <div className="elementor-widget-container">
      <nav
        aria-label="Menu"
        className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-grow"
      >
        <MenuList menuId={mainId} />
      </nav>
      <button
        type="button"
        className={`elementor-menu-toggle${
          isMenuOpen ? " elementor-active" : ""
        }`}
        aria-label="Menu Toggle"
        aria-expanded={isMenuOpen}
        onClick={onToggle}
      >
        <i
          aria-hidden="true"
          role="presentation"
          className="elementor-menu-toggle__icon--open vamtamtheme- vamtam-theme-menu"
        ></i>
        <i
          aria-hidden="true"
          role="presentation"
          className="elementor-menu-toggle__icon--close vamtamtheme- vamtam-theme-close"
        ></i>
      </button>
      <nav
        className="elementor-nav-menu--dropdown elementor-nav-menu__container"
        aria-hidden={!isMenuOpen}
      >
        <MenuList menuId={dropdownId} tabIndex={-1} onLinkClick={onLinkClick} />
      </nav>
    </div>
  </div>
);

type HeaderSectionProps = {
  variant: "primary" | "spacer";
  isMenuOpen: boolean;
  isScrolled: boolean;
  isHidden: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
};

const HeaderSection = ({
  variant,
  isMenuOpen,
  isScrolled,
  isHidden,
  onToggle,
  onLinkClick,
}: HeaderSectionProps) => {
  const sectionClassName = [
    "elementor-element",
    "elementor-element-0fdf1ae",
    "vamtam-sticky-header",
    "vamtam-sticky-header--mobile",
    "vamtam-sticky-header--transparent-header",
    "e-flex",
    "e-con-boxed",
    "e-con",
    "e-parent",
    variant === "spacer" ? "vamtam-sticky-header--spacer" : "",
    isScrolled ? "header-section--scrolled" : "",
    isHidden ? "header-section--hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const mainId = variant === "primary" ? "menu-1-1243e1d" : "menu-3-1243e1d";
  const dropdownId =
    variant === "primary" ? "menu-2-1243e1d" : "menu-4-1243e1d";

  return (
    <div
      className={sectionClassName}
      data-id="0fdf1ae"
      data-element_type="container"
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-72e5739 elementor-widget elementor-widget-image"
          data-id="72e5739"
          data-element_type="widget"
          data-widget_type="image.default"
        >
          <div className="elementor-widget-container">
            <a href="https://execor.vamtam.com">
              <img
                width="92"
                height="20"
                src="/wp-content/uploads/2025/03/Logo-white.svg"
                className="attachment-full size-full wp-image-46"
                alt="Execor"
              />
            </a>
          </div>
        </div>

        <NavWidget
          mainId={mainId}
          dropdownId={dropdownId}
          isMenuOpen={isMenuOpen}
          onToggle={onToggle}
          onLinkClick={onLinkClick}
        />

        <div
          className="vamtam-has-theme-widget-styles elementor-element elementor-element-6e27b2a vamtam-icon-pos-row-reverse elementor-hidden-mobile elementor-widget elementor-widget-button"
          data-id="6e27b2a"
          data-element_type="widget"
          data-widget_type="button.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <a
                className="elementor-button elementor-button-link elementor-size-sm"
                href="https://execor.vamtam.com/contact/"
              >
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-icon">
                    <i
                      aria-hidden="true"
                      className="vamtamtheme- vamtam-theme-arrow-right"
                    ></i>
                  </span>
                  <span className="elementor-button-text">Contact Us</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      setIsScrolled(currentY > 50);

      if (currentY < 50) {
        setIsHidden(false);
      } else if (delta > 8) {
        setIsHidden(true);
      } else if (delta < -8) {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsHidden(false);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const headerClassName = [
    "elementor",
    "elementor-139",
    "elementor-location-header",
    isScrolled ? "header--scrolled" : "",
    isMenuOpen ? "header--menu-open" : "",
    isHidden ? "header--hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const headerStyle = {
    transform: isHidden ? "translate3d(0, -120%, 0)" : "translate3d(0, 0, 0)",
    transition:
      "transform 0.35s ease, box-shadow 0.35s ease, background-color 0.35s ease",
  } as const;

  return (
    <div
      data-elementor-type="header"
      data-elementor-id="139"
      className={headerClassName}
      data-elementor-post-type="elementor_library"
      style={headerStyle}
    >
      <HeaderSection
        variant="primary"
        isMenuOpen={isMenuOpen}
        isScrolled={isScrolled}
        isHidden={isHidden}
        onToggle={toggleMenu}
        onLinkClick={closeMenu}
      />
      <HeaderSection
        variant="spacer"
        isMenuOpen={isMenuOpen}
        isScrolled={isScrolled}
        isHidden={isHidden}
        onToggle={toggleMenu}
        onLinkClick={closeMenu}
      />
    </div>
  );
}
