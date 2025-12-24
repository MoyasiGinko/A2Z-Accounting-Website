import React from "react";

const Vision = () => {
  const visionItems = [
    {
      containerId: "ffb023a",
      iconBoxId: "69c379a",
      textWidgetId: "82a910c",
      title: "Sector-Led Expertise",
      description:
        "We specialise in complex, regulated, high-value sectors such as engineering, offshore contracting, hospitality, and healthcare for advice matched to real operations.",
      animationDelay: 0,
    },
    {
      containerId: "ba74473",
      iconBoxId: "234de0a",
      textWidgetId: "3dc1e54",
      title: "Compliance-First Structuring",
      description:
        "Every structure we design is built for UK and UAE compliance, delivering tax efficiency without shortcuts so audits, penalties, or forced restructures never surprise you.",
      animationDelay: 50,
    },
    {
      containerId: "6725fc0",
      iconBoxId: "13b708f",
      textWidgetId: "c4183f6",
      title: "UK-Rooted. Dubai-Ready.",
      description:
        "Powered by Aberdeen's top accounting firm, we blend UK standards with UAE market fluency to give founders clarity, credibility, and confidence across both jurisdictions.",
      animationDelay: 100,
    },
  ];

  const renderIconSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="34"
      viewBox="0 0 37 34"
    >
      <g fill="none" fillRule="evenodd">
        <circle fill="#F2F5F1" cx="17" cy="17" r="11.33"></circle>
        <g fill="#84c9e2">
          <path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z"></path>
          <path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z"></path>
        </g>
      </g>
    </svg>
  );

  return (
    <>
      <div
        className="elementor-element elementor-element-8098fc0 e-flex e-con-boxed e-con e-parent"
        data-id="8098fc0"
        data-element_type="container"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-9e6338e e-con-full e-flex e-con e-child"
            data-id="9e6338e"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-05ebd63 elementor-invisible animated-fast elementor-widget elementor-widget-heading"
              data-id="05ebd63"
              data-element_type="widget"
              data-settings='{"_animation":"slideInUp"}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container bg-primary">
                <span className="elementor-heading-title elementor-size-default text-white">
                  Who We Help
                </span>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-913f441 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
              data-id="913f441"
              data-element_type="widget"
              data-widget_type="divider.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"> </span>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-5a99c78 elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading"
              data-id="5a99c78"
              data-element_type="widget"
              data-settings='{"_animation":"slideInUp","_animation_delay":100}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Built for £150K+ Profit Businesses & High-Net-Worth Founders
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="elementor-element elementor-element-f077fc7 e-flex e-con-boxed e-con e-parent"
        data-id="f077fc7"
        data-element_type="container"
      >
        <div className="e-con-inner">
          {visionItems.map((item) => (
            <div
              key={item.containerId}
              className={`elementor-element elementor-element-${item.containerId} elementor-invisible e-con-full animated-fast e-flex e-con e-child`}
              data-id={item.containerId}
              data-element_type="container"
              data-settings={`{"animation":"slideInUp","animation_delay":${item.animationDelay}}`}
            >
              <div
                className={`elementor-element elementor-element-${item.iconBoxId} elementor-position-left elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box`}
                data-id={item.iconBoxId}
                data-element_type="widget"
                data-widget_type="icon-box.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon">{renderIconSvg()}</span>
                    </div>
                    <div className="elementor-icon-box-content">
                      <h5 className="elementor-icon-box-title">
                        <span>{item.title}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`elementor-element elementor-element-${item.textWidgetId} elementor-widget elementor-widget-text-editor`}
                data-id={item.textWidgetId}
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vision;
