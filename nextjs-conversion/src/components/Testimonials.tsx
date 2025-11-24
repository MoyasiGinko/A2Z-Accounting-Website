const Testimonials = () => {
  const testimonials = [
    {
      id: 1528,
      image: "/assets/wp-content/uploads/2025/03/GettyImages-1198446248.jpg",
      name: "Daniel Foster",
      title: "CEO, TechStart Inc.",
      quote: "Faster Market Expansion with Our Growth Strategy",
    },
    {
      id: 1570,
      image: "/assets/wp-content/uploads/2025/03/GettyImages-1198446248.jpg", // Using same image as placeholder
      name: "Sarah Chen",
      title: "Founder, RetailPro",
      quote: "Transforming Operations for Sustainable Growth",
    },
    {
      id: 1573,
      image: "/assets/wp-content/uploads/2025/03/GettyImages-1198446248.jpg", // Using same image as placeholder
      name: "Michael Rodriguez",
      title: "Director, GlobalTech",
      quote: "Strategic Insights That Drive Real Results",
    },
  ];

  return (
    <div
      className="elementor-element elementor-element-40957ff e-flex e-con-boxed e-con e-parent"
      data-id="40957ff"
      data-element_type="container"
      data-settings='{"animation":"none"}'
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-719040a e-con-full e-flex e-con e-child"
          data-id="719040a"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div
            className="elementor-element elementor-element-cd8521f e-con-full animated-fast e-flex e-con e-child"
            data-id="cd8521f"
            data-element_type="container"
            data-settings='{"background_background":"gradient","animation":"none"}'
          >
            <div
              className="vamtam-has-theme-widget-styles elementor-element elementor-element-c99d6f7 elementor-arrows-position-inside elementor-widget elementor-widget-loop-carousel"
              data-id="c99d6f7"
              data-element_type="widget"
              data-settings='{"template_id":1545,"slides_to_show":"1","slides_to_show_tablet":"1","speed":300,"_skin":"post","slides_to_show_mobile":"1","slides_to_scroll":"1","edit_handle_selector":".elementor-loop-container","infinite":"yes","offset_sides":"none","arrows":"yes","image_spacing_custom":{"unit":"px","size":10,"sizes":[]},"image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_mobile":{"unit":"px","size":"","sizes":[]}}'
              data-widget_type="loop-carousel.post"
            >
              <div className="elementor-widget-container">
                <div
                  className="swiper elementor-loop-container elementor-grid"
                  role="list"
                  dir="ltr"
                >
                  <div className="swiper-wrapper" aria-live="polite">
                    {testimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        data-elementor-type="loop-item"
                        data-elementor-id="1545"
                        className={`elementor elementor-1545 swiper-slide e-loop-item e-loop-item-${testimonial.id} post-${testimonial.id} page type-page status-publish has-post-thumbnail hentry`}
                        data-elementor-post-type="elementor_library"
                        role="group"
                        aria-roledescription="slide"
                        data-custom-edit-handle="1"
                      >
                        <div
                          className="elementor-element elementor-element-eb2223c e-con-full e-flex e-con e-parent"
                          data-id="eb2223c"
                          data-element_type="container"
                        >
                          <div
                            className="elementor-element elementor-element-9f2cad6 e-con-full e-flex e-con e-child"
                            data-id="9f2cad6"
                            data-element_type="container"
                          >
                            <div
                              className="elementor-element elementor-element-c0a0c31 elementor-invisible elementor-widget-mobile__width-auto animated-fast elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
                              data-id="c0a0c31"
                              data-element_type="widget"
                              data-settings='{"_animation":"fadeIn"}'
                              data-widget_type="theme-post-featured-image.default"
                            >
                              <div className="elementor-widget-container">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="180"
                                  height="180"
                                  src={testimonial.image}
                                  className="attachment-medium size-medium wp-image-1530"
                                  alt=""
                                  srcSet={`${
                                    testimonial.image
                                  } 180w, ${testimonial.image.replace(
                                    ".jpg",
                                    "-150x150.jpg"
                                  )} 150w`}
                                  sizes="(max-width: 180px) 100vw, 180px"
                                />
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-f2aaecf elementor-invisible e-con-full animated-fast e-flex e-con e-child"
                              data-id="f2aaecf"
                              data-element_type="container"
                              data-settings='{"animation":"fadeIn"}'
                            >
                              <div
                                className="elementor-element elementor-element-202a27a elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
                                data-id="202a27a"
                                data-element_type="widget"
                                data-widget_type="theme-post-title.default"
                              >
                                <div className="elementor-widget-container">
                                  <h5 className="elementor-heading-title elementor-size-default">
                                    {testimonial.name}
                                  </h5>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-022eb2e elementor-widget elementor-widget-theme-post-excerpt"
                                data-id="022eb2e"
                                data-element_type="widget"
                                data-widget_type="theme-post-excerpt.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-heading-title elementor-size-default">
                                    {testimonial.title}
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-0e72921 elementor-invisible animated-fast elementor-view-default elementor-widget elementor-widget-icon"
                                data-id="0e72921"
                                data-element_type="widget"
                                data-settings='{"_animation":"zoomIn"}'
                                data-widget_type="icon.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-icon-wrapper">
                                    <div className="elementor-icon">
                                      <i
                                        aria-hidden="true"
                                        className="vamtamtheme- vamtam-theme-quote-right"
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-022eb2e e-con-full e-flex e-con e-child"
                            data-id="022eb2e"
                            data-element_type="container"
                          >
                            <div
                              className="elementor-element elementor-element-0e72921 elementor-invisible animated-fast elementor-widget elementor-widget-heading"
                              data-id="0e72921"
                              data-element_type="widget"
                              data-settings='{"_animation":"fadeIn"}'
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <span className="elementor-heading-title elementor-size-default">
                                  {testimonial.quote}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="elementor-swiper-button elementor-swiper-button-prev"
                  role="button"
                  tabIndex={0}
                  aria-label="Previous"
                >
                  <i
                    aria-hidden="true"
                    className="vamtamtheme- vamtam-theme-arrow-left"
                  ></i>
                </div>
                <div
                  className="elementor-swiper-button elementor-swiper-button-next"
                  role="button"
                  tabIndex={0}
                  aria-label="Next"
                >
                  <i
                    aria-hidden="true"
                    className="vamtamtheme- vamtam-theme-arrow-right"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-9999006 animated-fast e-flex e-con-boxed e-con e-child"
            data-id="9999006"
            data-element_type="container"
            data-settings='{"sticky":"bottom","sticky_parent":"yes","sticky_on":["desktop"],"animation":"none","animation_delay":100,"sticky_offset":0,"sticky_effects_offset":0,"sticky_anchor_link_offset":0}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-c5793f1 elementor-invisible animated-fast elementor-widget elementor-widget-heading"
                data-id="c5793f1"
                data-element_type="widget"
                data-settings='{"_animation":"slideInUp"}'
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h5 className="elementor-heading-title elementor-size-default">
                    What Our Clients Say
                  </h5>
                </div>
              </div>
              <div
                className="vamtam-has-theme-widget-styles elementor-element elementor-element-ef2dc3d elementor-invisible vamtam-icon-pos-row-reverse animated-fast elementor-widget elementor-widget-button"
                data-id="ef2dc3d"
                data-element_type="widget"
                data-settings='{"_animation":"slideInUp","_animation_delay":100}'
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href="https://execor.vamtam.com/about/testimonials/"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon">
                          <i
                            aria-hidden="true"
                            className="vamtamtheme- vamtam-theme-arrow-right"
                          ></i>
                        </span>
                        <span className="elementor-button-text">
                          View All Testimonials
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
