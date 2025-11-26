import React, { useCallback, useState } from "react";
import type { KeyboardEvent } from "react";

type Testimonial = {
  id: number;
  image: string;
  imageAlt: string;
  imageClass: string;
  srcSet: string;
  sizes: string;
  name: string;
  title: string;
  quote: string;
  metricValue: string;
  metricLabel: string;
};

const LOOP_TEMPLATE_STYLES = `.elementor-1545
  .elementor-element.elementor-element-eb2223c {
  --display: flex;
  --flex-direction: row;
  --container-widget-width: initial;
  --container-widget-height: 100%;
  --container-widget-flex-grow: 1;
  --container-widget-align-self: stretch;
  --flex-wrap-mobile: wrap;
  --gap: 0px 0px;
  --row-gap: 0px;
  --column-gap: 0px;
}

.elementor-1545
  .elementor-element.elementor-element-9f2cad6 {
  --display: flex;
  --flex-direction: column;
  --container-widget-width: 100%;
  --container-widget-height: initial;
  --container-widget-flex-grow: 0;
  --container-widget-align-self: initial;
  --flex-wrap-mobile: wrap;
  --gap: 10px 10px;
  --row-gap: 10px;
  --column-gap: 10px;
  --padding-top: 25px;
  --padding-bottom: 0px;
  --padding-left: 0px;
  --padding-right: 0px;
}

.elementor-1545
  .elementor-element.elementor-element-c0a0c31.elementor-element {
  --align-self: flex-start;
}

.elementor-1545
  .elementor-element.elementor-element-c0a0c31
  img {
  width: 100%;
  max-width: 70px;
  height: 70px;
  object-fit: cover;
  object-position: center center;
  border-radius: 100px 100px 100px 100px;
}

.elementor-1545
  .elementor-element.elementor-element-f2aaecf {
  --display: flex;
  --gap: 10px 10px;
  --row-gap: 10px;
  --column-gap: 10px;
  --padding-top: 0px;
  --padding-bottom: 0px;
  --padding-left: 0px;
  --padding-right: 0px;
}

.elementor-1545
  .elementor-element.elementor-element-d8017ee
  > .elementor-widget-container {
  background-color: var(
    --e-global-color-0e53263
  );
  margin: 2px 0px 0px 0px;
  padding: 2px 8px 2px 8px;
  border-radius: 4px 4px 4px 4px;
}

elementor-1545
  .elementor-element.elementor-element-d8017ee.elementor-element {
  --align-self: flex-start;
}

.elementor-1545
  .elementor-element.elementor-element-d8017ee
  .elementor-heading-title {
  font-family: var(
      --e-global-typography-798d94d-font-family
    ),
    Sans-serif;
  font-size: var(
    --e-global-typography-798d94d-font-size
  );
  font-weight: var(
    --e-global-typography-798d94d-font-weight
  );
  line-height: var(
    --e-global-typography-798d94d-line-height
  );
  color: var(
    --e-global-color-vamtam_accent_1
  );
}

.elementor-1545
  .elementor-element.elementor-element-022eb2e {
  --display: flex;
  --flex-direction: row;
  --container-widget-width: initial;
  --container-widget-height: 100%;
  --container-widget-flex-grow: 1;
  --container-widget-align-self: stretch;
  --flex-wrap-mobile: wrap;
  --justify-content: space-between;
  --gap: 5% 5%;
  --row-gap: 5%;
  --column-gap: 5%;
  --padding-top: 0px;
  --padding-bottom: 0px;
  --padding-left: 0px;
  --padding-right: 0px;
}

.elementor-1545
  .elementor-element.elementor-element-f3895bd.elementor-element {
  --align-self: flex-start;
}

.elementor-1545
  .elementor-element.elementor-element-f3895bd
  .elementor-icon-wrapper {
  text-align: left;
}

.elementor-1545
  .elementor-element.elementor-element-f3895bd.elementor-view-stacked
  .elementor-icon {
  background-color: var(
    --e-global-color-vamtam_accent_1
  );
}

.elementor-1545
  .elementor-element.elementor-element-f3895bd.elementor-view-framed
  .elementor-icon,
.elementor-1545
  .elementor-element.elementor-element-f3895bd.elementor-view-default
  .elementor-icon {
  color: var(
    --e-global-color-vamtam_accent_1
  );
  border-color: var(
    --e-global-color-vamtam_accent_1
  );
}

.elementor-1545
  .elementor-element.elementor-element-f3895bd.elementor-view-framed
  .elementor-icon,
.elementor-1545
  .elementor-element.elementor-element-f3895bd.elementor-view-default
  .elementor-icon
  svg {
  fill: var(
    --e-global-color-vamtam_accent_1
  );
}

.elementor-1545
  .elementor-element.elementor-element-f3895bd
  .elementor-icon {
  font-size: 32px;
}

.elementor-1545
  .elementor-element.elementor-element-f3895bd
  .elementor-icon
  svg {
  height: 32px;
}

.elementor-1545
  .elementor-element.elementor-element-8fcbf3a {
  --display: flex;
  --justify-content: space-between;
  --gap: 0px 0px;
  --row-gap: 0px;
  --column-gap: 0px;
  --padding-top: 20px;
  --padding-bottom: 0px;
  --padding-left: 0px;
  --padding-right: 0px;
}

.elementor-1545
  .elementor-element.elementor-element-c0ef23f
  .elementor-widget-container {
  font-family: var(
      --e-global-typography-aa3d2ee-font-family
    ),
    Sans-serif;
  font-size: var(
    --e-global-typography-aa3d2ee-font-size
  );
  font-weight: var(
    --e-global-typography-aa3d2ee-font-weight
  );
  line-height: var(
    --e-global-typography-aa3d2ee-line-height
  );
  color: var(--e-global-color-597ed21);
}

.elementor-1545
  .elementor-element.elementor-element-a468575 {
  --spacer-size: 5vh;
}

.elementor-1545
  .elementor-element.elementor-element-7ac31c4 {
  --display: flex;
  --flex-direction: row;
  --container-widget-width: calc(
    (1 - var(--container-widget-flex-grow)) *
      100%
  );
  --container-widget-height: 100%;
  --container-widget-flex-grow: 1;
  --container-widget-align-self: stretch;
  --flex-wrap-mobile: wrap;
  --justify-content: flex-start;
  --align-items: center;
  --flex-wrap: wrap;
  border-style: solid;
  --border-style: solid;
  border-width: 0.5px 0px 0px 0px;
  --border-top-width: 0.5px;
  --border-right-width: 0px;
  --border-bottom-width: 0px;
  --border-left-width: 0px;
  border-color: var(
    --e-global-color-vamtam_accent_7
  );
  --border-color: var(
    --e-global-color-vamtam_accent_7
  );
  --padding-top: 30px;
  --padding-bottom: 0px;
  --padding-left: 0px;
  --padding-right: 0px;
}

.elementor-1545
  .elementor-element.elementor-element-017ffee {
  width: auto;
  max-width: auto;
}

.elementor-1545
  .elementor-element.elementor-element-017ffee
  .elementor-heading-title {
  font-family: var(
      --e-global-typography-1c16242-font-family
    ),
    Sans-serif;
  font-size: var(
    --e-global-typography-1c16242-font-size
  );
  font-weight: var(
    --e-global-typography-1c16242-font-weight
  );
  line-height: var(
    --e-global-typography-1c16242-line-height
  );
  color: var(
    --e-global-color-vamtam_accent_1
  );
}

.elementor-1545
  .elementor-element.elementor-element-f25691c {
  --divider-border-style: solid;
  --divider-color: var(
    --e-global-color-vamtam_accent_7
  );
  --divider-border-width: 0.5px;
  width: var(
    --container-widget-width,
    40px
  );
  max-width: 40px;
  --container-widget-width: 40px;
  --container-widget-flex-grow: 0;
}

.elementor-1545
  .elementor-element.elementor-element-f25691c.elementor-element {
  --flex-grow: 0;
  --flex-shrink: 0;
}

.elementor-1545
  .elementor-element.elementor-element-f25691c
  .elementor-divider-separator {
  width: 100%;
}

.elementor-1545
  .elementor-element.elementor-element-f25691c
  .elementor-divider {
  padding-block-start: 15px;
  padding-block-end: 15px;
}

.elementor-1545
  .elementor-element.elementor-element-8964dc8 {
  width: var(--container-widget-width, 50%);
  max-width: 50%;
  --container-widget-width: 50%;
  --container-widget-flex-grow: 0;
}

.elementor-1545
  .elementor-element.elementor-element-8964dc8.elementor-element {
  --flex-grow: 1;
  --flex-shrink: 0;
}

.elementor-1545
  .elementor-element.elementor-element-8964dc8
  .elementor-heading-title {
  font-family: var(
      --e-global-typography-vamtam_primary_font-font-family
    ),
    Sans-serif;
  font-size: var(
    --e-global-typography-vamtam_primary_font-font-size
  );
  font-weight: var(
    --e-global-typography-vamtam_primary_font-font-weight
  );
  line-height: var(
    --e-global-typography-vamtam_primary_font-line-height
  );
}

.elementor-1545
  .elementor-element.elementor-element-0e72921
  > .elementor-widget-container {
  margin: 0px 10px 0px 0px;
}

.elementor-1545
  .elementor-element.elementor-element-0e72921.elementor-element {
  --align-self: flex-end;
}

.elementor-1545
  .elementor-element.elementor-element-0e72921
  .elementor-icon-wrapper {
  text-align: left;
}

.elementor-1545
  .elementor-element.elementor-element-0e72921.elementor-view-stacked
  .elementor-icon {
  background-color: var(
    --e-global-color-vamtam_accent_1
  );
}

.elementor-1545
  .elementor-element.elementor-element-0e72921.elementor-view-framed
  .elementor-icon,
.elementor-1545
  .elementor-element.elementor-element-0e72921.elementor-view-default
  .elementor-icon {
  color: var(
    --e-global-color-vamtam_accent_1
  );
  border-color: var(
    --e-global-color-vamtam_accent_1
  );
}

.elementor-1545
  .elementor-element.elementor-element-0e72921.elementor-view-framed
  .elementor-icon,
.elementor-1545
  .elementor-element.elementor-element-0e72921.elementor-view-default
  .elementor-icon
  svg {
  fill: var(
    --e-global-color-vamtam_accent_1
  );
}

.elementor-1545
  .elementor-element.elementor-element-0e72921
  .elementor-icon {
  font-size: 32px;
}

.elementor-1545
  .elementor-element.elementor-element-0e72921
  .elementor-icon
  svg {
  height: 32px;
}

@media (max-width: 1024px) {
  .elementor-1545
    .elementor-element.elementor-element-eb2223c {
    --padding-top: 0px;
    --padding-bottom: 0px;
    --padding-left: 0px;
    --padding-right: 0px;
  }
  .elementor-1545
    .elementor-element.elementor-element-9f2cad6 {
    --padding-top: 0px;
    --padding-bottom: 0px;
    --padding-left: 0px;
    --padding-right: 0px;
  }
  .elementor-1545
    .elementor-element.elementor-element-d8017ee
    .elementor-heading-title {
    font-size: var(
      --e-global-typography-798d94d-font-size
    );
    line-height: var(
      --e-global-typography-798d94d-line-height
    );
  }
  .elementor-1545
    .elementor-element.elementor-element-022eb2e {
    --justify-content: space-between;
    --gap: 20px 20px;
    --row-gap: 20px;
    --column-gap: 20px;
  }
  .elementor-1545
    .elementor-element.elementor-element-022eb2e.e-con {
    --flex-grow: 1;
    --flex-shrink: 0;
  }
  .elementor-1545
    .elementor-element.elementor-element-c0ef23f
    .elementor-widget-container {
    font-size: var(
      --e-global-typography-aa3d2ee-font-size
    );
    line-height: var(
      --e-global-typography-aa3d2ee-line-height
    );
  }
  .elementor-1545
    .elementor-element.elementor-element-a468575 {
    --spacer-size: 30px;
  }
  .elementor-1545
    .elementor-element.elementor-element-7ac31c4 {
    --gap: 10px 10px;
    --row-gap: 10px;
    --column-gap: 10px;
    --padding-top: 20px;
    --padding-bottom: 0px;
    --padding-left: 0px;
    --padding-right: 0px;
  }
  .elementor-1545
    .elementor-element.elementor-element-017ffee
    .elementor-heading-title {
    font-size: var(
      --e-global-typography-1c16242-font-size
    );
    line-height: var(
      --e-global-typography-1c16242-line-height
    );
  }
  .elementor-1545
    .elementor-element.elementor-element-f25691c {
    --container-widget-width: 30px;
    --container-widget-flex-grow: 0;
    width: var(
      --container-widget-width,
      30px
    );
    max-width: 30px;
  }
  .elementor-1545
    .elementor-element.elementor-element-8964dc8
    .elementor-heading-title {
    font-size: var(
      --e-global-typography-vamtam_primary_font-font-size
    );
    line-height: var(
      --e-global-typography-vamtam_primary_font-line-height
    );
  }
  .elementor-1545
    .elementor-element.elementor-element-0e72921.elementor-element {
    --align-self: flex-end;
  }
}

@media (max-width: 767px) {
  .elementor-1545
    .elementor-element.elementor-element-eb2223c {
    --justify-content: space-between;
    --align-items: stretch;
    --container-widget-width: calc(
      (
          1 -
            var(
              --container-widget-flex-grow
            )
        ) * 100%
    );
    --gap: 30px 30px;
    --row-gap: 30px;
    --column-gap: 30px;
  }
  .elementor-1545
    .elementor-element.elementor-element-9f2cad6 {
    --flex-direction: row;
    --container-widget-width: calc(
      (
          1 -
            var(
              --container-widget-flex-grow
            )
        ) * 100%
    );
    --container-widget-height: 100%;
    --container-widget-flex-grow: 1;
    --container-widget-align-self: stretch;
    --flex-wrap-mobile: wrap;
    --align-items: flex-start;
    --gap: 15px 15px;
    --row-gap: 15px;
    --column-gap: 15px;
  }
  .elementor-1545
    .elementor-element.elementor-element-c0a0c31 {
    width: auto;
    max-width: auto;
  }
  .elementor-1545
    .elementor-element.elementor-element-f2aaecf {
    --width: 60%;
    --justify-content: center;
    --gap: 0px 0px;
    --row-gap: 0px;
    --column-gap: 0px;
    --margin-top: 5px;
    --margin-bottom: 0px;
    --margin-left: 0px;
    --margin-right: 0px;
  }
  .elementor-1545
    .elementor-element.elementor-element-f2aaecf.e-con {
    --flex-grow: 1;
    --flex-shrink: 0;
  }
  .elementor-1545
    .elementor-element.elementor-element-d8017ee
    .elementor-heading-title {
    font-size: var(
      --e-global-typography-798d94d-font-size
    );
    line-height: var(
      --e-global-typography-798d94d-line-height
    );
  }
  .elementor-1545
    .elementor-element.elementor-element-022eb2e {
    --flex-direction: column;
    --container-widget-width: 100%;
    --container-widget-height: initial;
    --container-widget-flex-grow: 0;
    --container-widget-align-self: initial;
    --flex-wrap-mobile: wrap;
    --gap: 5px 5px;
    --row-gap: 5px;
    --column-gap: 5px;
  }
  .elementor-1545
    .elementor-element.elementor-element-8fcbf3a {
    --margin-top: 0px;
    --margin-bottom: 20px;
    --margin-left: 0px;
    --margin-right: 0px;
    --padding-top: 0px;
    --padding-bottom: 0px;
    --padding-left: 0px;
    --padding-right: 0px;
  }
  .elementor-1545
    .elementor-element.elementor-element-c0ef23f
    .elementor-widget-container {
    font-size: var(
      --e-global-typography-aa3d2ee-font-size
    );
    line-height: var(
      --e-global-typography-aa3d2ee-line-height
    );
  }
  .elementor-1545
    .elementor-element.elementor-element-7ac31c4 {
    --flex-direction: column;
    --container-widget-width: calc(
      (
          1 -
            var(
              --container-widget-flex-grow
            )
        ) * 100%
    );
    --container-widget-height: initial;
    --container-widget-flex-grow: 0;
    --container-widget-align-self: initial;
    --flex-wrap-mobile: wrap;
    --align-items: flex-start;
    --gap: 0px 20px;
    --row-gap: 0px;
    --column-gap: 20px;
  }
  .elementor-1545
    .elementor-element.elementor-element-017ffee
    .elementor-heading-title {
    font-size: var(
      --e-global-typography-1c16242-font-size
    );
    line-height: var(
      --e-global-typography-1c16242-line-height
    );
  }
  .elementor-1545
    .elementor-element.elementor-element-8964dc8
    .elementor-heading-title {
    font-size: var(
      --e-global-typography-vamtam_primary_font-font-size
    );
    line-height: var(
      --e-global-typography-vamtam_primary_font-line-height
    );
  }
  .elementor-1545
    .elementor-element.elementor-element-0e72921
    > .elementor-widget-container {
    margin: 0px 0px 0px 0px;
  }
}

@media (min-width: 768px) {
  .elementor-1545
    .elementor-element.elementor-element-9f2cad6 {
    --width: 50%;
  }
  .elementor-1545
    .elementor-element.elementor-element-022eb2e {
    --width: 50%;
  }
}

@media (max-width: 1024px) and (min-width: 768px) {
  .elementor-1545
    .elementor-element.elementor-element-9f2cad6 {
    --width: 200px;
  }
  .elementor-1545
    .elementor-element.elementor-element-022eb2e {
    --width: 70%;
  }
}`;

const testimonials: Testimonial[] = [
  {
    id: 1528,
    image: "/wp-content/uploads/2025/03/GettyImages-1198446248.jpg",
    imageAlt: "Daniel Foster headshot",
    imageClass: "wp-image-1530",
    srcSet:
      "/wp-content/uploads/2025/03/GettyImages-1198446248.jpg 180w, /wp-content/uploads/2025/03/GettyImages-1198446248-150x150.jpg 150w",
    sizes: "(max-width: 180px) 100vw, 180px",
    name: "Daniel Foster",
    title: "COO, Horizon Retail Group",
    quote:
      "Scaling our business felt overwhelming until we partnered with this team. They conducted a thorough market analysis, identified growth opportunities, and helped us expand into three new markets without disrupting our operations. Their structured, step-by-step approach made the entire process seamless, and their insights continue to shape our long-term success.",
    metricValue: "45%",
    metricLabel: "Revenue Growth After Expansion",
  },
  {
    id: 1570,
    image: "/wp-content/uploads/2025/03/pexels-august-de-richelieu-4428045.jpg",
    imageAlt: "Maria Sanchez headshot",
    imageClass: "wp-image-1532",
    srcSet:
      "/wp-content/uploads/2025/03/pexels-august-de-richelieu-4428045.jpg 180w, /wp-content/uploads/2025/03/pexels-august-de-richelieu-4428045-150x150.jpg 150w",
    sizes: "(max-width: 180px) 100vw, 180px",
    name: "Maria Sanchez",
    title: "CEO, TAX Com",
    quote:
      "We were struggling to streamline our operations and keep up with demand. Working with this team changed everything. They assessed our workflow, pinpointed bottlenecks, and implemented smart systems that saved us hours every week. Their strategic guidance didn’t just fix problems—it empowered our team to perform at a whole new level. We’re now more efficient, responsive, and ready to scale.",
    metricValue: "30%",
    metricLabel: "Cost Reduction Through Process Optimization",
  },
  {
    id: 1573,
    image: "/wp-content/uploads/2025/03/pexels-alaxmatias-28513051.jpg",
    imageAlt: "John Wolfar headshot",
    imageClass: "wp-image-1531",
    srcSet:
      "/wp-content/uploads/2025/03/pexels-alaxmatias-28513051.jpg 180w, /wp-content/uploads/2025/03/pexels-alaxmatias-28513051-150x150.jpg 150w",
    sizes: "(max-width: 180px) 100vw, 180px",
    name: "John Wolfar",
    title: "CEO, Credi Goo",
    quote:
      "Before we connected with them, our digital presence was inconsistent and lacked direction. Their team took the time to understand our brand, refined our messaging, and rolled out a cohesive strategy that elevated our online visibility. The results were almost immediate. Engagement grew, conversions followed, and we finally feel aligned with our audience.",
    metricValue: "3x",
    metricLabel: "Faster Market Expansion with Our Growth Strategy",
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = testimonials.length;

  const gotoRelativeSlide = useCallback(
    (delta: number) => {
      setActiveIndex((prev) => {
        const next = (prev + delta + totalSlides) % totalSlides;
        return next;
      });
    },
    [totalSlides]
  );

  const handleNavKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>, delta: number) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        gotoRelativeSlide(delta);
      }
    },
    [gotoRelativeSlide]
  );

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
                    <style id="loop-1545">{LOOP_TEMPLATE_STYLES}</style>
                    {testimonials.map((testimonial, index) => {
                      const isActive = index === activeIndex;
                      const slideClasses = [
                        "elementor",
                        "elementor-1545",
                        "swiper-slide",
                        "e-loop-item",
                        `e-loop-item-${testimonial.id}`,
                        `post-${testimonial.id}`,
                        "page",
                        "type-page",
                        "status-publish",
                        "has-post-thumbnail",
                        "hentry",
                        isActive ? "swiper-slide-active" : undefined,
                      ]
                        .filter(Boolean)
                        .join(" ");

                      return (
                        <div
                          key={testimonial.id}
                          data-elementor-type="loop-item"
                          data-elementor-id="1545"
                          className={slideClasses}
                          data-elementor-post-type="elementor_library"
                          role="group"
                          aria-roledescription="slide"
                          aria-hidden={!isActive}
                          hidden={!isActive}
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
                                    width={180}
                                    height={180}
                                    src={testimonial.image}
                                    className={`attachment-medium size-medium ${testimonial.imageClass}`}
                                    alt={testimonial.imageAlt}
                                    srcSet={testimonial.srcSet}
                                    sizes={testimonial.sizes}
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
                                  className="elementor-element elementor-element-d8017ee elementor-widget elementor-widget-heading"
                                  data-id="d8017ee"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <span className="elementor-heading-title elementor-size-default">
                                      {testimonial.title}
                                    </span>
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
                                className="vamtam-has-theme-widget-styles elementor-element elementor-element-f3895bd elementor-invisible animated-fast elementor-view-default elementor-widget elementor-widget-icon"
                                data-id="f3895bd"
                                data-element_type="widget"
                                data-settings='{"_animation":"zoomIn"}'
                                data-widget_type="icon.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-icon-wrapper">
                                    <div className="elementor-icon">
                                      <i
                                        aria-hidden="true"
                                        className="vamtamtheme- vamtam-theme-quote-left"
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-8fcbf3a elementor-invisible e-con-full animated-fast e-flex e-con e-child"
                                data-id="8fcbf3a"
                                data-element_type="container"
                                data-settings='{"animation":"fadeIn","animation_delay":50}'
                              >
                                <div
                                  className="elementor-element elementor-element-c0ef23f elementor-widget elementor-widget-theme-post-excerpt"
                                  data-id="c0ef23f"
                                  data-element_type="widget"
                                  data-widget_type="theme-post-excerpt.default"
                                >
                                  <div className="elementor-widget-container">
                                    {testimonial.quote}
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-a468575 elementor-widget elementor-widget-spacer"
                                  data-id="a468575"
                                  data-element_type="widget"
                                  data-widget_type="spacer.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-spacer">
                                      <div className="elementor-spacer-inner"></div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-7ac31c4 e-con-full e-flex e-con e-child"
                                  data-id="7ac31c4"
                                  data-element_type="container"
                                >
                                  <div
                                    className="elementor-element elementor-element-017ffee elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                    data-id="017ffee"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <span className="elementor-heading-title elementor-size-default">
                                        {testimonial.metricValue}
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-f25691c elementor-widget__width-initial elementor-hidden-mobile elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                    data-id="f25691c"
                                    data-element_type="widget"
                                    data-widget_type="divider.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-divider">
                                        <span className="elementor-divider-separator"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-8964dc8 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                                    data-id="8964dc8"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <span className="elementor-heading-title elementor-size-default">
                                        {testimonial.metricLabel}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vamtam-has-theme-widget-styles elementor-element elementor-element-0e72921 elementor-invisible animated-fast elementor-view-default elementor-widget elementor-widget-icon"
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
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="elementor-swiper-button elementor-swiper-button-prev"
                  role="button"
                  tabIndex={0}
                  aria-label="Previous"
                  onClick={() => gotoRelativeSlide(-1)}
                  onKeyDown={(event) => handleNavKeyDown(event, -1)}
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
                  onClick={() => gotoRelativeSlide(1)}
                  onKeyDown={(event) => handleNavKeyDown(event, 1)}
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
                          Read All Testimonials
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
