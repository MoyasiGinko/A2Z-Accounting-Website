import React from "react";
import { urlFor } from "@/lib/imageBuilder";

type SanityCategory = {
  title?: string;
  slug?: string;
};

type SanityPost = {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: unknown;
  mainImageAlt?: string;
  categories?: SanityCategory[];
};

const sizesAttr = "(max-width: 750px) 100vw, 415px";

const formatDate = (value?: string) => {
  if (!value) return { machine: "", display: "" };
  const date = new Date(value);
  return {
    machine: date.toISOString().split("T")[0] || value,
    display: new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date),
  };
};

const buildImage = (image: unknown) => {
  if (!image) return { src: "", srcSet: undefined };
  const widths = [305, 415, 520, 640, 830];
  const src = urlFor(image).width(415).auto("format").url();
  const srcSet = widths
    .map((w) => `${urlFor(image).width(w).auto("format").url()} ${w}w`)
    .join(", ");
  return { src, srcSet };
};

const FALLBACK_POSTS = [
  {
    id: "fallback-1",
    slug: "sample-strategy-success",
    title: "Sample Strategy Success Story",
    excerpt:
      "A concise case study placeholder to keep the carousel layout consistent until real posts are published.",
    image: "/wp-content/uploads/2025/03/GettyImages-1931487241-750x1024.jpg",
    srcSet: undefined,
    sizes: sizesAttr,
    imageAlt: "Sample strategy success",
    categories: [{ label: "Success Story", href: "#" }],
    date: { machine: "", display: "" },
  },
  {
    id: "fallback-2",
    slug: "sample-growth-journey",
    title: "Sample Growth Journey",
    excerpt:
      "A sample narrative showing how businesses can navigate growth phases effectively.",
    image:
      "/wp-content/uploads/2025/03/declan-sun-CxRVGdnhATs-unsplash-750x1024.jpg",
    srcSet: undefined,
    sizes: sizesAttr,
    imageAlt: "Sample growth journey",
    categories: [{ label: "Industry Insights", href: "#" }],
    date: { machine: "", display: "" },
  },
  {
    id: "fallback-3",
    slug: "sample-market-trends",
    title: "Sample Market Trends",
    excerpt:
      "Placeholder post covering emerging market themes to illustrate the carousel layout.",
    image: "/wp-content/uploads/2025/03/GettyImages-1456192869-750x1024.jpg",
    srcSet: undefined,
    sizes: sizesAttr,
    imageAlt: "Sample market trends",
    categories: [{ label: "Expert Advice", href: "#" }],
    date: { machine: "", display: "" },
  },
  {
    id: "fallback-4",
    slug: "sample-operations-playbook",
    title: "Sample Operations Playbook",
    excerpt:
      "An operations-focused placeholder to complete the four-card carousel when content is limited.",
    image: "/wp-content/uploads/2025/03/GettyImages-1408994869-750x1024.jpg",
    srcSet: undefined,
    sizes: sizesAttr,
    imageAlt: "Sample operations playbook",
    categories: [{ label: "Playbook", href: "#" }],
    date: { machine: "", display: "" },
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

type BlogCarouselProps = {
  posts: SanityPost[];
};

const BlogCarousel: React.FC<BlogCarouselProps> = ({ posts }) => {
  const normalizedPosts = (posts || []).map((post) => {
    const { src, srcSet } = buildImage(post.mainImage);
    const date = formatDate(post.publishedAt);
    const categories = (post.categories || []).map((category) => ({
      label: category.title || "Uncategorized",
      href: category.slug ? `/blogs/category/${category.slug}` : "#",
    }));

    return {
      id: post._id,
      slug: post.slug || "",
      title: post.title || "Untitled",
      excerpt: post.excerpt || "",
      image: src,
      srcSet,
      sizes: sizesAttr,
      imageAlt: post.mainImageAlt || post.title || "Post image",
      categories,
      date,
    };
  });

  const displayPosts =
    normalizedPosts.length >= 4
      ? normalizedPosts.slice(0, 4)
      : [
          ...normalizedPosts,
          ...FALLBACK_POSTS.slice(0, 4 - normalizedPosts.length),
        ];

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
              <div className="elementor-widget-container bg-primary">
                <span className="elementor-heading-title elementor-size-default text-white">
                  Our Blogs
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
              <div className="elementor-widget-container ">
                <h2 className="elementor-heading-title elementor-size-default">
                  Latest Insights &amp; Success Stories
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
                and industry trends.
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
              {displayPosts.length ? (
                <div
                  className="swiper elementor-loop-container elementor-grid"
                  role="list"
                  dir="ltr"
                >
                  <div className="swiper-wrapper" aria-live="polite">
                    <style dangerouslySetInnerHTML={{ __html: loopStyles }} />
                    {displayPosts.map((post, index) => (
                      <div
                        key={post.id}
                        data-elementor-type="loop-item"
                        data-elementor-id="1961"
                        className={`elementor elementor-1961 swiper-slide e-loop-item e-loop-item-${post.id} post-${post.id}`}
                        data-elementor-post-type="elementor_library"
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`Slide ${index + 1} of ${displayPosts.length}`}
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
                                <a href={`/blogs/${post.slug}`}>
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width={305}
                                    height={415}
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
                                        <span className="elementor-post-info__terms-list font-sans">
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
                                <h5
                                  className="elementor-heading-title elementor-size-default font-serif"
                                  style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  <a href={`/blogs/${post.slug}`}>
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
                                <p
                                  style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  {post.excerpt}
                                </p>
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
                aria-hidden={!displayPosts.length}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-20">
        <a
          href="/blogs"
          className="px-6 py-3 rounded-md bg-secondary text-primary hover:bg-primary hover:text-white font-semibold font-sans shadow hover:shadow-md transition-transform duration-200 "
        >
          View More Blogs
        </a>
      </div>
    </>
  );
};

export default BlogCarousel;
