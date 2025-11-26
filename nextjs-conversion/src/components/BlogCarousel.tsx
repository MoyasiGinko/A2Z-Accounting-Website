import React from "react";

interface BlogPost {
  id: number;
  slug: string;
  category: string;
  categorySlug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1959,
    slug: "market-trends-2024",
    category: "Expert Advice",
    categorySlug: "expert-advice",
    date: "March 29, 2025",
    title: "5 Key Market Trends Every Business Should Watch in 2024",
    excerpt:
      "Stay ahead of the curve with insights into emerging market trends that could impact your business strategy.",
    image: "/wp-content/uploads/2025/03/GettyImages-1931487241-750x1024.jpg",
    imageAlt: "Team reviewing market trends charts",
  },
  {
    id: 1955,
    slug: "retailpro-sales-growth",
    category: "Success Story",
    categorySlug: "success-story",
    date: "March 27, 2025",
    title: "How RetailPro Increased Sales by 150% with Data-Driven Strategies",
    excerpt:
      "Learn how one retail business transformed their operations and achieved remarkable growth.",
    image: "/wp-content/uploads/2025/03/GettyImages-1931487241-750x1024.jpg",
    imageAlt: "Retail team celebrating sales growth",
  },
  {
    id: 1953,
    slug: "property-management-optimization",
    category: "Success Story",
    categorySlug: "success-story",
    date: "March 25, 2025",
    title:
      "Property Management Firm Cuts Costs by 40% Through Process Optimization",
    excerpt:
      "Discover how strategic consulting helped a property management company streamline operations.",
    image: "/wp-content/uploads/2025/03/GettyImages-1931487241-750x1024.jpg",
    imageAlt: "Consultant reviewing optimization plan",
  },
  {
    id: 1945,
    slug: "business-foundations-guide",
    category: "Expert Advice",
    categorySlug: "expert-advice",
    date: "March 23, 2025",
    title: "Building Strong Business Foundations: A Strategic Guide",
    excerpt:
      "Essential strategies for establishing a solid foundation that supports long-term business success.",
    image: "/wp-content/uploads/2025/03/GettyImages-1931487241-750x1024.jpg",
    imageAlt: "Leaders planning long-term business strategy",
  },
];

const loopStyles = `
  .elementor-1961 .elementor-element.elementor-element-8b3458c {
    --display: flex;
    --gap: 15px 15px;
    --row-gap: 15px;
    --column-gap: 15px;
    --padding-top: 0px;
    --padding-bottom: 0px;
    --padding-left: 0px;
    --padding-right: 0px;
  }

  .elementor-1961 .elementor-element.elementor-element-e4b59e9 {
    --display: flex;
    --flex-direction: row;
    --container-widget-width: calc((1 - var(--container-widget-flex-grow)) * 100%);
    --container-widget-height: 100%;
    --container-widget-flex-grow: 1;
    --container-widget-align-self: stretch;
    --flex-wrap-mobile: wrap;
    --align-items: center;
    --gap: 10px 10px;
    --row-gap: 10px;
    --column-gap: 10px;
    --padding-top: 0px;
    --padding-bottom: 0px;
    --padding-left: 0px;
    --padding-right: 0px;
  }

  .elementor-1961 .elementor-element.elementor-element-4e1ffcd > .elementor-widget-container {
    background-color: var(--e-global-color-vamtam_accent_3);
    padding: 8px;
    border-radius: 4px;
  }

  .elementor-1961 .elementor-element.elementor-element-4e1ffcd:hover .elementor-widget-container {
    background-color: var(--e-global-color-vamtam_accent_4);
  }

  .elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-item,
  .elementor-1961 .elementor-element.elementor-element-923a9ab .elementor-icon-list-item {
    font-family: var(--e-global-typography-798d94d-font-family), sans-serif;
    font-size: var(--e-global-typography-798d94d-font-size);
    font-weight: var(--e-global-typography-798d94d-font-weight);
    line-height: var(--e-global-typography-798d94d-line-height);
  }

  .elementor-1961 .elementor-element.elementor-element-74fce07 .elementor-heading-title {
    color: var(--e-global-color-vamtam_accent_6);
  }

  .elementor-1961 .elementor-element.elementor-element-74fce07 .elementor-heading-title a:hover,
  .elementor-1961 .elementor-element.elementor-element-74fce07 .elementor-heading-title a:focus {
    color: var(--e-global-color-vamtam_accent_1);
  }

  .elementor-1961 .elementor-element.elementor-element-abced80 .elementor-widget-container {
    font-size: var(--e-global-typography-d778ca5-font-size);
    line-height: var(--e-global-typography-d778ca5-line-height);
    color: var(--e-global-color-vamtam_accent_8);
  }

  @media (max-width: 1024px) {
    .elementor-1961 .elementor-element.elementor-element-8b3458c {
      --gap: 10px 10px;
      --row-gap: 10px;
      --column-gap: 10px;
    }

    .elementor-1961 .elementor-element.elementor-element-abced80 > .elementor-widget-container {
      margin: -0.3em 0 0 0;
    }
  }
`;

const BlogCarousel: React.FC = () => {
  return (
    <>
      <div
        className="elementor-element elementor-element-c50d7c9 e-flex e-con-boxed e-con e-parent"
        data-id="c50d7c9"
        data-element_type="container"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-9317f8a e-con-full e-flex e-con e-child"
            data-id="9317f8a"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-fc98675 elementor-invisible animated-fast elementor-widget elementor-widget-heading"
              data-id="fc98675"
              data-element_type="widget"
              data-settings='{"_animation":"slideInUp"}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <span className="elementor-heading-title elementor-size-default">
                  Insights &amp; Success Stories
                </span>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-73bb323 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading"
              data-id="73bb323"
              data-element_type="widget"
              data-settings='{"_animation":"slideInUp","_animation_delay":100}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Expert Strategies, Industry Trends &amp; Real Results
                </h2>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-e3649ed elementor-invisible elementor-widget-tablet__width-initial elementor-widget__width-initial animated-fast elementor-widget elementor-widget-heading"
            data-id="e3649ed"
            data-element_type="widget"
            data-settings='{"_animation":"slideInUp","_animation_delay":200}'
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <span className="elementor-heading-title elementor-size-default">
                Stay ahead with the latest business insights, success stories,
                and industry trends. Explore expert advice, real-world case
                studies, and actionable strategies to drive growth and
                innovation in your business.
              </span>
            </div>
          </div>
        </div>
      </div>
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
                  <style dangerouslySetInnerHTML={{ __html: loopStyles }} />
                  {blogPosts.map((post, index) => (
                    <div
                      key={post.id}
                      data-elementor-type="loop-item"
                      data-elementor-id="1961"
                      className={`elementor elementor-1961 swiper-slide e-loop-item e-loop-item-${post.id} post-${post.id} post type-post status-publish format-standard has-post-thumbnail hentry category-${post.categorySlug}`}
                      data-elementor-post-type="elementor_library"
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Slide ${index + 1} of ${blogPosts.length}`}
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
                              <a href={`/insights/${post.slug}`}>
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width={750}
                                  height={1024}
                                  src={post.image}
                                  className="attachment-large size-large"
                                  alt={post.imageAlt}
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
                                    className="elementor-icon-list-item elementor-inline-item"
                                    itemProp="about"
                                  >
                                    <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-terms">
                                      {post.category}
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
                                    className="elementor-icon-list-item elementor-inline-item"
                                    itemProp="datePublished"
                                  >
                                    <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
                                      {post.date}
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
                                <a href={`/insights/${post.slug}`}>
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
              <div className="swiper-pagination" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCarousel;
