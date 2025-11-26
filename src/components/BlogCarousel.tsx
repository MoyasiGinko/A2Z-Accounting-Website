import React from "react";

interface BlogCategory {
  label: string;
  href: string;
}

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  srcSet?: string;
  sizes?: string;
  categories: BlogCategory[];
  date: {
    display: string;
    machine: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: 1959,
    slug: "5-key-market-trends-every-business-should-watch-in-2024",
    title: "5 Key Market Trends Every Business Should Watch in 2024",
    excerpt:
      "Stay ahead of the curve with emerging trends that are reshaping industries and customer expectations.",
    image: "/wp-content/uploads/2025/03/GettyImages-1931487241-750x1024.jpg",
    srcSet:
      "/wp-content/uploads/2025/03/GettyImages-1931487241-220x300.jpg 220w, /wp-content/uploads/2025/03/GettyImages-1931487241-750x1024.jpg 750w, /wp-content/uploads/2025/03/GettyImages-1931487241-1125x1536.jpg 1125w, /wp-content/uploads/2025/03/GettyImages-1931487241.jpg 1916w",
    sizes: "(max-width: 750px) 100vw, 750px",
    imageAlt: "Consultants reviewing market charts",
    categories: [
      {
        label: "Industry Insights",
        href: "https://execor.vamtam.com/category/industry-insights/",
      },
    ],
    date: { display: "March 29, 2025", machine: "2025-03-29" },
  },
  {
    id: 1955,
    slug: "how-we-helped-a-retail-brand-increase-sales-by-45",
    title: "How We Helped a Retail Brand Increase Sales by 45%",
    excerpt:
      "AI, automation, and shifting consumer behavior are shaping industries. Stay ahead with these key trends for 2025.",
    image:
      "/wp-content/uploads/2025/03/declan-sun-CxRVGdnhATs-unsplash-750x1024.jpg",
    srcSet:
      "/wp-content/uploads/2025/03/declan-sun-CxRVGdnhATs-unsplash-220x300.jpg 220w, /wp-content/uploads/2025/03/declan-sun-CxRVGdnhATs-unsplash-750x1024.jpg 750w, /wp-content/uploads/2025/03/declan-sun-CxRVGdnhATs-unsplash-1125x1536.jpg 1125w, /wp-content/uploads/2025/03/declan-sun-CxRVGdnhATs-unsplash.jpg 1916w",
    sizes: "(max-width: 750px) 100vw, 750px",
    imageAlt: "Retail leader celebrating results",
    categories: [
      {
        label: "Success Story",
        href: "https://execor.vamtam.com/category/success-story/",
      },
    ],
    date: { display: "March 29, 2025", machine: "2025-03-29" },
  },
  {
    id: 1953,
    slug: "from-startup-to-scale-a-tech-companys-growth-journey",
    title: "From Startup to Scale: A Tech Company’s Growth Journey",
    excerpt:
      "Discover how one team navigated rapid growth, scaled operations, and stayed true to its product vision.",
    image: "/wp-content/uploads/2025/03/GettyImages-1456192869-750x1024.jpg",
    srcSet:
      "/wp-content/uploads/2025/03/GettyImages-1456192869-220x300.jpg 220w, /wp-content/uploads/2025/03/GettyImages-1456192869-750x1024.jpg 750w, /wp-content/uploads/2025/03/GettyImages-1456192869-1125x1536.jpg 1125w, /wp-content/uploads/2025/03/GettyImages-1456192869.jpg 1916w",
    sizes: "(max-width: 750px) 100vw, 750px",
    imageAlt: "Tech founders planning scale up",
    categories: [
      {
        label: "Success Story",
        href: "https://execor.vamtam.com/category/success-story/",
      },
    ],
    date: { display: "March 29, 2025", machine: "2025-03-29" },
  },
  {
    id: 1945,
    slug: "why-most-business-strategies-fail-and-how-to-avoid-it",
    title: "Why Most Business Strategies Fail – And How to Avoid It",
    excerpt:
      "Learn the common pitfalls that derail business plans—and the smart moves that lead to lasting success.",
    image: "/wp-content/uploads/2025/03/GettyImages-1408994869-750x1024.jpg",
    srcSet:
      "/wp-content/uploads/2025/03/GettyImages-1408994869-220x300.jpg 220w, /wp-content/uploads/2025/03/GettyImages-1408994869-750x1024.jpg 750w, /wp-content/uploads/2025/03/GettyImages-1408994869-1125x1536.jpg 1125w, /wp-content/uploads/2025/03/GettyImages-1408994869.jpg 1916w",
    sizes: "(max-width: 750px) 100vw, 750px",
    imageAlt: "Executive reviewing strategy documents",
    categories: [
      {
        label: "Expert Advice",
        href: "https://execor.vamtam.com/category/expert-advice/",
      },
    ],
    date: { display: "March 29, 2025", machine: "2025-03-29" },
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

  .elementor-element-9a8edf1 .swiper:not(.swiper-initialized) {
    overflow: visible;
  }

  .elementor-element-9a8edf1 .swiper:not(.swiper-initialized) .swiper-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    transform: none !important;
  }

  .elementor-element-9a8edf1 .swiper:not(.swiper-initialized) .swiper-slide {
    width: auto !important;
    height: auto;
    margin: 0 !important;
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
              {blogPosts.length ? (
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
                        className={`elementor elementor-1961 swiper-slide e-loop-item e-loop-item-${post.id} post-${post.id}`}
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
                                    srcSet={post.srcSet}
                                    sizes={post.sizes}
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
                                        <span className="elementor-post-info__terms-list">
                                          {post.categories.map(
                                            (category, catIdx) => (
                                              <React.Fragment
                                                key={`${post.id}-${category.label}`}
                                              >
                                                <a
                                                  href={category.href}
                                                  className="elementor-post-info__terms-list-item"
                                                >
                                                  {category.label}
                                                </a>
                                                {catIdx <
                                                  post.categories.length -
                                                    1 && (
                                                  <span className="elementor-post-info__separator">
                                                    ,{" "}
                                                  </span>
                                                )}
                                              </React.Fragment>
                                            )
                                          )}
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
                                      className="elementor-icon-list-item elementor-inline-item"
                                      itemProp="datePublished"
                                    >
                                      <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
                                        <time dateTime={post.date.machine}>
                                          {post.date.display}
                                        </time>
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
              ) : (
                <div className="elementor-empty-state">
                  <p>
                    No posts available yet—please add an entry in the CMS feed.
                  </p>
                </div>
              )}
              <div
                className="swiper-pagination"
                aria-hidden={!blogPosts.length}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCarousel;
