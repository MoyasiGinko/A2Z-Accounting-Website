const BlogCarousel = () => {
  const blogPosts = [
    {
      id: 1959,
      image:
        "/assets/wp-content/uploads/2025/03/GettyImages-1931487241-750x1024.jpg",
      category: "Expert Advice",
      date: "March 29, 2025",
      title: "5 Key Market Trends Every Business Should Watch in 2024",
      excerpt:
        "Stay ahead of the curve with insights into emerging market trends that could impact your business strategy.",
    },
    {
      id: 1955,
      image:
        "/assets/wp-content/uploads/2025/03/GettyImages-1931487241-750x1024.jpg", // Using same image as placeholder
      category: "Success Story",
      date: "March 27, 2025",
      title:
        "How RetailPro Increased Sales by 150% with Data-Driven Strategies",
      excerpt:
        "Learn how one retail business transformed their operations and achieved remarkable growth.",
    },
    {
      id: 1953,
      image:
        "/assets/wp-content/uploads/2025/03/GettyImages-1931487241-750x1024.jpg", // Using same image as placeholder
      category: "Success Story",
      date: "March 25, 2025",
      title:
        "Property Management Firm Cuts Costs by 40% Through Process Optimization",
      excerpt:
        "Discover how strategic consulting helped a property management company streamline operations.",
    },
    {
      id: 1945,
      image:
        "/assets/wp-content/uploads/2025/03/GettyImages-1931487241-750x1024.jpg", // Using same image as placeholder
      category: "Expert Advice",
      date: "March 23, 2025",
      title: "Building Strong Business Foundations: A Strategic Guide",
      excerpt:
        "Essential strategies for establishing a solid foundation that supports long-term business success.",
    },
  ];

  return (
    <div
      className="elementor-element elementor-element-413d07d e-flex e-con-boxed e-con e-parent"
      data-id="413d07d"
      data-element_type="container"
    >
      <div className="e-con-inner">
        <div
          className="vamtam-has-theme-widget-styles elementor-element elementor-element-9a8edf1 elementor-pagination-type-bullets elementor-pagination-position-outside elementor-widget elementor-widget-loop-carousel"
          data-id="9a8edf1"
          data-element_type="widget"
          data-settings='{"template_id":"1961","slides_to_show":"4","image_spacing_custom":{"unit":"px","size":20,"sizes":[]},"_skin":"post","slides_to_show_tablet":"2","slides_to_show_mobile":"1","slides_to_scroll":"1","edit_handle_selector":".elementor-loop-container","speed":500,"pagination":"bullets","image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_mobile":{"unit":"px","size":"","sizes":[]}}'
          data-widget_type="loop-carousel.post"
        >
          <div className="elementor-widget-container">
            <div
              className="swiper elementor-loop-container elementor-grid"
              role="list"
              dir="ltr"
            >
              <div className="swiper-wrapper" aria-live="polite">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    data-elementor-type="loop-item"
                    data-elementor-id="1961"
                    className={`elementor elementor-1961 swiper-slide e-loop-item e-loop-item-${post.id} post-${post.id} post type-post status-publish format-standard has-post-thumbnail hentry category-expert-advice category-industry-insights tag-property tag-taxes`}
                    data-elementor-post-type="elementor_library"
                    role="group"
                    aria-roledescription="slide"
                    data-custom-edit-handle="1"
                  >
                    <div
                      className="elementor-element elementor-element-8b3458c animated-fast e-flex e-con-boxed e-con e-parent"
                      data-id="8b3458c"
                      data-element_type="container"
                      data-settings='{"animation":"none","animation_delay":100}'
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-9b0d8db animated-fast elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
                          data-id="9b0d8db"
                          data-element_type="widget"
                          data-settings='{"_animation":"none"}'
                          data-widget_type="theme-post-featured-image.default"
                        >
                          <div className="elementor-widget-container">
                            <a
                              href={`https://execor.vamtam.com/${post.date
                                .toLowerCase()
                                .replace(/ /g, "-")
                                .replace(",", "")}/${post.title
                                .toLowerCase()
                                .replace(/ /g, "-")
                                .replace(/:/g, "")}/`}
                            >
                              <img
                                loading="lazy"
                                decoding="async"
                                width="750"
                                height="1024"
                                src={post.image}
                                className="attachment-large size-large wp-image-1948"
                                alt=""
                                srcSet={`${
                                  post.image
                                } 750w, ${post.image.replace(
                                  "-750x1024",
                                  "-220x300"
                                )} 220w, ${post.image.replace(
                                  "-750x1024",
                                  "-768x1049"
                                )} 768w, ${post.image.replace(
                                  "-750x1024",
                                  "-1125x1536"
                                )} 1125w, ${post.image.replace(
                                  "-750x1024",
                                  "-1500x2048"
                                )} 1500w, ${post.image.replace(
                                  "-750x1024",
                                  ""
                                )} 1916w`}
                                sizes="(max-width: 750px) 100vw, 750px"
                              />
                            </a>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-e4b59e9 e-con-full e-flex e-con e-child"
                          data-id="e4b59e9"
                          data-element_type="container"
                        >
                          <div
                            className="elementor-element elementor-element-4e1ffcd elementor-widget elementor-widget-post-info"
                            data-id="4e1ffcd"
                            data-element_type="widget"
                            data-widget_type="post-info.default"
                          >
                            <div className="elementor-widget-container">
                              <ul className="elementor-inline-items elementor-icon-list-items elementor-post-info">
                                <li
                                  className="elementor-icon-list-item elementor-repeater-item-fa4f20e elementor-inline-item"
                                  itemProp="about"
                                >
                                  <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-terms">
                                    <span className="elementor-post-info__terms-list">
                                      <a
                                        href={`https://execor.vamtam.com/category/${post.category
                                          .toLowerCase()
                                          .replace(/ /g, "-")}/`}
                                        className="elementor-post-info__terms-list-item"
                                      >
                                        {post.category}
                                      </a>
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-923a9ab elementor-widget elementor-widget-post-info"
                            data-id="923a9ab"
                            data-element_type="widget"
                            data-widget_type="post-info.default"
                          >
                            <div className="elementor-widget-container">
                              <ul className="elementor-inline-items elementor-icon-list-items elementor-post-info">
                                <li
                                  className="elementor-icon-list-item elementor-repeater-item-3c380d1 elementor-inline-item"
                                  itemProp="datePublished"
                                >
                                  <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
                                    <time>{post.date}</time>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-74fce07 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
                          data-id="74fce07"
                          data-element_type="widget"
                          data-widget_type="theme-post-title.default"
                        >
                          <div className="elementor-widget-container">
                            <h5 className="elementor-heading-title elementor-size-default">
                              <a
                                href={`https://execor.vamtam.com/${post.date
                                  .toLowerCase()
                                  .replace(/ /g, "-")
                                  .replace(",", "")}/${post.title
                                  .toLowerCase()
                                  .replace(/ /g, "-")
                                  .replace(/:/g, "")}/`}
                              >
                                {post.title}
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-abced80 vamtam-show-on-hover elementor-widget elementor-widget-theme-post-excerpt"
                          data-id="abced80"
                          data-element_type="widget"
                          data-widget_type="theme-post-excerpt.default"
                        >
                          <div className="elementor-widget-container">
                            {post.excerpt}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
