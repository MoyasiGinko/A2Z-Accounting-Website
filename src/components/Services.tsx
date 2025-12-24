import React from "react";
import Link from "next/link";

const Services: React.FC = () => {
  return (
    <>
      <div
        className="elementor-element elementor-element-85963b4 e-flex e-con-boxed e-con e-parent"
        data-id="85963b4"
        data-element_type="container"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-04c603a e-con-full e-flex e-con e-child"
            data-id="04c603a"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-118f825 elementor-invisible animated-fast elementor-widget elementor-widget-heading"
              data-id="118f825"
              data-element_type="widget"
              data-settings='{"_animation":"slideInUp"}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container bg-primary">
                <span className="elementor-heading-title elementor-size-default text-white">
                  Our Services
                </span>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-e5cafd1 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading"
              data-id="e5cafd1"
              data-element_type="widget"
              data-settings='{"_animation":"slideInUp","_animation_delay":100}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Expert Advice, Built for You
                </h2>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-eb91688 elementor-invisible elementor-widget-tablet__width-initial elementor-widget__width-initial animated-fast elementor-widget elementor-widget-heading"
            data-id="eb91688"
            data-element_type="widget"
            data-settings='{"_animation":"slideInUp","_animation_delay":200}'
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <span className="elementor-heading-title elementor-size-default">
                With years of experience and a results-focused approach, we
                empower businesses to navigate complexity and achieve their
                goals.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-0a5fdf3 e-flex e-con-boxed e-con e-parent"
        data-id="0a5fdf3"
        data-element_type="container"
      >
        <div className="e-con-inner !flex !justify-center !items-center">
          {/* Service 1: Company Formation & Corporate Setup */}
          <div
            className="elementor-element elementor-element-e99c1cd elementor-invisible e-con-full vamtam-icon-hover-parent animated-fast e-flex e-con e-child bg-primary text-white hover:bg-secondary hover:text-primary"
            data-id="e99c1cd"
            data-element_type="container"
            data-settings='{"background_background":"classic","animation":"slideInUp","animation_delay":0}'
          >
            <div
              className="elementor-element elementor-element-67b2bba e-con-full e-flex e-con e-child"
              data-id="67b2bba"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                className="elementor-element elementor-element-e31725c elementor-widget elementor-widget-image"
                data-id="e31725c"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    decoding="async"
                    width="76"
                    height="76"
                    src="/wp-content/uploads/2025/03/consulting.svg"
                    className="attachment-medium size-medium wp-image-481"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="elementor-element elementor-element-ee0f743 elementor-widget elementor-widget-heading"
                data-id="ee0f743"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default">
                    <Link href="/services/company-formation">
                      Company &amp; Corporate Setup
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-8338fc4 e-con-full e-flex e-con e-child"
              data-id="8338fc4"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-2cb85b3 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="2cb85b3"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        LLC &amp; Free Zone setup
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Business licenses
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Corporate structuring
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="vamtam-has-theme-widget-styles elementor-element elementor-element-4c9e6a9 vamtam-icon-pos-row-reverse elementor-align-justify vamtam-content-align-space-between elementor-widget elementor-widget-button"
                data-id="4c9e6a9"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href="/services/company-formation"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon">
                          <i
                            aria-hidden="true"
                            className="vamtamtheme- vamtam-theme-arrow-right"
                          ></i>
                        </span>
                        <span className="elementor-button-text">
                          Learn More
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Accounting & Bookkeeping */}
          <div
            className="elementor-element elementor-element-667edd7 elementor-invisible e-con-full vamtam-icon-hover-parent animated-fast e-flex e-con e-child bg-primary text-white hover:bg-secondary hover:text-primary"
            data-id="667edd7"
            data-element_type="container"
            data-settings='{"background_background":"classic","animation":"slideInUp","animation_delay":50}'
          >
            <div
              className="elementor-element elementor-element-1f1e3cb e-con-full e-flex e-con e-child"
              data-id="1f1e3cb"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                className="elementor-element elementor-element-99f443c elementor-widget elementor-widget-image"
                data-id="99f443c"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    decoding="async"
                    width="68"
                    height="76"
                    src="/wp-content/uploads/2025/03/marketing.svg"
                    className="attachment-medium size-medium wp-image-334"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="elementor-element elementor-element-cc096c9 elementor-widget elementor-widget-heading"
                data-id="cc096c9"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default">
                    <Link href="/services/accounting-bookkeeping">
                      Accounting &amp; Bookkeeping
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-7aabc05 e-con-full e-flex e-con e-child"
              data-id="7aabc05"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-5d0cfbd elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="5d0cfbd"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Financial records
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Monthly reporting
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Audit prep
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="vamtam-has-theme-widget-styles elementor-element elementor-element-d282ade vamtam-icon-pos-row-reverse elementor-align-justify vamtam-content-align-space-between elementor-widget elementor-widget-button"
                data-id="d282ade"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href="/services/accounting-bookkeeping"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon">
                          <i
                            aria-hidden="true"
                            className="vamtamtheme- vamtam-theme-arrow-right"
                          ></i>
                        </span>
                        <span className="elementor-button-text">
                          Learn More
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Tax & Regulatory Compliance */}
          <div
            className="elementor-element elementor-element-b47eb84 elementor-invisible e-con-full vamtam-icon-hover-parent animated-fast e-flex e-con e-child bg-primary text-white hover:bg-secondary hover:text-primary"
            data-id="b47eb84"
            data-element_type="container"
            data-settings='{"background_background":"classic","animation":"slideInUp","animation_delay":100}'
          >
            <div
              className="elementor-element elementor-element-709e22f e-con-full e-flex e-con e-child"
              data-id="709e22f"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                className="elementor-element elementor-element-ab84c2d elementor-widget elementor-widget-image"
                data-id="ab84c2d"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    loading="lazy"
                    decoding="async"
                    width="76"
                    height="76"
                    src="/wp-content/uploads/2025/03/operations.svg"
                    className="attachment-medium size-medium wp-image-332"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="elementor-element elementor-element-009293b elementor-widget elementor-widget-heading"
                data-id="009293b"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default">
                    <Link href="/services/tax-compliance">
                      Tax &amp; Regulatory Compliance
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-a1560a1 e-con-full e-flex e-con e-child"
              data-id="a1560a1"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-e1ff428 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="e1ff428"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Tax planning &amp; filing
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        VAT &amp; corporate tax
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Regulatory compliance
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="vamtam-has-theme-widget-styles elementor-element elementor-element-9cf0fbb vamtam-icon-pos-row-reverse elementor-align-justify vamtam-content-align-space-between elementor-widget elementor-widget-button"
                data-id="9cf0fbb"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href="/services/tax-compliance"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon">
                          <i
                            aria-hidden="true"
                            className="vamtamtheme- vamtam-theme-arrow-right"
                          ></i>
                        </span>
                        <span className="elementor-button-text">
                          Learn More
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="e-con-inner !mt-4 !flex !justify-center !items-center">
          {/* Service 4: Payroll & HR Pro */}
          <div
            className="elementor-element elementor-element-667edd7 elementor-invisible e-con-full vamtam-icon-hover-parent animated-fast e-flex e-con e-child bg-primary text-white hover:bg-secondary hover:text-primary"
            data-id="667edd7"
            data-element_type="container"
            data-settings='{"background_background":"classic","animation":"slideInUp","animation_delay":50}'
          >
            <div
              className="elementor-element elementor-element-1f1e3cb e-con-full e-flex e-con e-child"
              data-id="1f1e3cb"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                className="elementor-element elementor-element-99f443c elementor-widget elementor-widget-image"
                data-id="99f443c"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    decoding="async"
                    width="68"
                    height="76"
                    src="/wp-content/uploads/2025/03/marketing.svg"
                    className="attachment-medium size-medium wp-image-334"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="elementor-element elementor-element-cc096c9 elementor-widget elementor-widget-heading"
                data-id="cc096c9"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default">
                    <Link href="/services/payroll-hr-pro">
                      Payroll &amp; HR Pro
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-7aabc05 e-con-full e-flex e-con e-child"
              data-id="7aabc05"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-5d0cfbd elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="5d0cfbd"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Employee payroll
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        HR management
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Compliance support
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="vamtam-has-theme-widget-styles elementor-element elementor-element-d282ade vamtam-icon-pos-row-reverse elementor-align-justify vamtam-content-align-space-between elementor-widget elementor-widget-button"
                data-id="d282ade"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href="/services/payroll-hr-pro"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon">
                          <i
                            aria-hidden="true"
                            className="vamtamtheme- vamtam-theme-arrow-right"
                          ></i>
                        </span>
                        <span className="elementor-button-text">
                          Learn More
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 5: Business Advisory */}
          <div
            className="elementor-element elementor-element-b47eb84 elementor-invisible e-con-full vamtam-icon-hover-parent animated-fast e-flex e-con e-child bg-primary text-white hover:bg-secondary hover:text-primary"
            data-id="b47eb84"
            data-element_type="container"
            data-settings='{"background_background":"classic","animation":"slideInUp","animation_delay":100}'
          >
            <div
              className="elementor-element elementor-element-709e22f e-con-full e-flex e-con e-child"
              data-id="709e22f"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                className="elementor-element elementor-element-ab84c2d elementor-widget elementor-widget-image"
                data-id="ab84c2d"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    loading="lazy"
                    decoding="async"
                    width="76"
                    height="76"
                    src="/wp-content/uploads/2025/03/operations.svg"
                    className="attachment-medium size-medium wp-image-332"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="elementor-element elementor-element-009293b elementor-widget elementor-widget-heading"
                data-id="009293b"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default">
                    <Link href="/services/business-advisory">
                      Business Advisory
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-a1560a1 e-con-full e-flex e-con e-child"
              data-id="a1560a1"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-e1ff428 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="e1ff428"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Business strategy
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Financial planning
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="vamtamtheme- vamtam-theme-chack"
                        ></i>
                      </span>
                      <span className="elementor-icon-list-text">
                        Market analysis
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="vamtam-has-theme-widget-styles elementor-element elementor-element-9cf0fbb vamtam-icon-pos-row-reverse elementor-align-justify vamtam-content-align-space-between elementor-widget elementor-widget-button"
                data-id="9cf0fbb"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href="/services/business-advisory"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon">
                          <i
                            aria-hidden="true"
                            className="vamtamtheme- vamtam-theme-arrow-right"
                          ></i>
                        </span>
                        <span className="elementor-button-text">
                          Learn More
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
