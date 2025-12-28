"use client";

import Link from "next/link";
import {
  ServicePageContent,
  serviceSlugs,
  servicesContent,
} from "@/data/services";
import { useScrollEffects } from "@/hooks/useScrollEffects";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useOverlayTriggers } from "@/hooks/useOverlayTriggers";
import { useElementReveals } from "@/hooks/useElementReveals";
import { useNavMenus } from "@/hooks/useNavMenus";
import { useCarousels } from "@/hooks/useCarousels";
import { useClientMarquee } from "@/hooks/useClientMarquee";
import { ReactNode } from "react";
import ContactSection from "../contact-page/ContactUs";

interface ServicePageClientProps {
  content: ServicePageContent;
}

const sectionBase = "px-4 py-16 sm:px-6 lg:px-0";
const cardBase =
  "rounded-md border border-slate-100 bg-white/80 shadow-sm backdrop-blur";

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) => (
  <div className={align === "center" ? "text-center" : ""}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <div
      className={
        align === "center" ? "mx-auto mt-3 max-w-3xl" : "mt-3 max-w-3xl"
      }
    >
      <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl !font-serif">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-slate-600 !font-sans">
          {description}
        </p>
      )}
    </div>
  </div>
);

const ServicePageClient = ({ content }: ServicePageClientProps) => {
  useScrollEffects();
  useStickyHeader();
  useScrollToTop();
  useOverlayTriggers();
  useElementReveals();
  useNavMenus();
  useCarousels();
  useClientMarquee();

  return (
    <>
      {/* <div id="top"></div> */}
      {/* <Header /> */}
      {/* <div id="page" className="main-container"> */}
      <div id="main-content">
        <div id="sub-header" className="layout-full elementor-page-title">
          <div className="meta-header" />
        </div>
        <main id="main" role="main" className="vamtam-main layout-full">
          <div className="page-wrapper">
            <article className="full">
              <div className="page-content clearfix the-content-parent">
                <div className="elementor elementor-17">
                  <ServiceHero content={content} />
                  <WhatWeDo content={content} />
                  <ServiceOverview content={content} />
                  <ServiceGrid content={content} />
                  {/* <Callout content={content} /> */}
                  <ProcessTimeline content={content} />
                  <ExpertiseSpotlight content={content} />
                  <RelatedServices content={content} />
                  {/* <NewsletterPanel content={content} /> */}
                  {/* <div className="mb-40">
                    <GetInTouch />
                  </div> */}
                  <ContactSection />
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
      {/* </div> */}
      {/* <Footer />
      <div id="scroll-to-top" className="vamtam-scroll-to-top">
        <div id="scroll-to-top-text">top</div>
      </div> */}
    </>
  );
};

const Section = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section className={`${sectionBase} ${className ?? ""}`}>
    <div className="mx-auto flex max-w-6xl flex-col gap-10">{children}</div>
  </section>
);

const Eyebrow = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={`text-sm font-semibold uppercase tracking-[0.2em] text-[#1B3756] !font-serif ${
      className ?? ""
    }`}
  >
    {children}
  </p>
);

const ServiceHero = ({ content }: { content: ServicePageContent }) => (
  <Section className="relative overflow-hidden bg-[#1B3756] pt-20 text-white">
    <div className="space-y-6 pt-8">
      <Eyebrow className="text-white">{content.hero.eyebrow}</Eyebrow>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold !text-white sm:text-5xl lg:text-6xl !font-serif">
          {content.hero.title}
        </h1>
        <p className="text-lg text-white/90 !font-sans">
          {content.hero.summary}
        </p>
        {/* <p className="text-base text-white/80">{content.hero.description}</p> */}
      </div>
      <div className="flex flex-wrap gap-4">
        {content.hero.ctas.map((cta) => (
          <Link
            key={cta.label}
            href={cta.href}
            className="inline-flex items-center text-black justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-800 transition hover:text-[#162C45] hover:bg-[#84C9E2]"
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </div>
  </Section>
);

const WhatWeDo = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="flex items-center justify-center">
        <img
          src={content.whatWeDo.image}
          alt="What we do"
          className="w-full h-auto rounded-md shadow-sm"
        />
      </div>
      <div className="space-y-4 px-4">
        <Eyebrow>{content.whatWeDo.eyebrow}</Eyebrow>
        <p className="text-2xl font-semibold text-slate-900 !font-serif">
          {content.whatWeDo.heading}
        </p>
        <p className="max-w-2xl text-base text-slate-600 !font-sans">
          {content.whatWeDo.description}
        </p>
      </div>
    </div>
  </Section>
);

const ServiceOverview = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-md border border-slate-200 bg-white p-8 shadow-sm">
        <SectionHeader
          eyebrow={content.overview.eyebrow}
          title={content.overview.heading}
        />
        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 !font-sans">
          {content.overview.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-md bg-[#1B3756] p-8 text-white shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80 !font-serif">
            At a glance
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {content.atAGlance.map((item) => (
              <div
                key={item.label}
                className="rounded-md bg-white/10 p-4 ring-1 ring-white/10"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/70 !font-sans">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold !font-serif">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-slate-200 bg-slate-50/60 p-8">
          <p className="text-sm font-semibold text-slate-900 !font-serif">
            How we work
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 !font-sans">
            Clear milestones, shared checklists, and proactive updates—so you
            always know what’s next.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

const ServiceGrid = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <SectionHeader
      eyebrow={content.servicesIntro.eyebrow}
      title={content.servicesIntro.heading}
      description={content.servicesIntro.supporting}
    />

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {content.services.map((service) => (
        <div
          key={service.title}
          className={`${cardBase}  border-[#84C9E2] flex flex-col items-start gap-4 p-6 hover:bg-[#84C9E2] group`}
        >
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="34"
              viewBox="0 0 37 34"
              className="w-9 h-8 text-[#84C9E2] group-hover:text-white"
            >
              <g fill="none" fillRule="evenodd">
                <circle
                  className="fill-[#F2F5F1] group-hover:fill-[#6cb1ff]"
                  cx="17"
                  cy="17"
                  r="11.33"
                />
                <g fill="currentColor">
                  <path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" />
                  <path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" />
                </g>
              </g>
            </svg>
          </div>
          <h4 className="text-lg  font-semibold text-slate-900 text-left group-hover:text-white !font-serif">
            {service.title}
          </h4>
        </div>
      ))}
      <div
        className={`rounded-md border border-slate-100  shadow-sm backdrop-blur mt-4 p-6 py-8 flex items-center justify-between md:col-span-2 lg:col-span-3 bg-[#1B3756]`}
      >
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl !font-medium !text-slate-50 !font-serif">
            {content.callout.heading}
          </h2>
          {content.callout.subheading && (
            <p className="relative  max-w-2xl text-base leading-relaxed text-white/85 !font-sans">
              {content.callout.subheading}
            </p>
          )}
        </div>
        <Link
          href={content.callout.cta.href}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white border border-primary-200 rounded-md hover:bg-[#84C9E2] transition"
        >
          <span>{content.callout.cta.label}</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  </Section>
);

const ProcessTimeline = ({ content }: { content: ServicePageContent }) => (
  <Section className="bg-[#f2f5f1]">
    <div className="grid gap-8 lg:grid-cols-2 ">
      <div className="space-y-4">
        <Eyebrow>{content.process.eyebrow}</Eyebrow>
        <h2 className=" font-semibold text-slate-900 sm:text-4xl font-serif">
          {content.process.heading}
        </h2>
        <p className="text-base leading-relaxed text-slate-600 font-sans">
          {content.process.description}
        </p>
        <div className="space-y-6">
          <div className="space-y-4">
            {content.process.steps.map((step, index) => (
              <div
                key={step.title}
                className={`${cardBase} bg-white/50 px-6 py-4`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className="relative shrink-0 w-3 h-3">
                        <div
                          className="absolute inset-0 border border-[#84C9E2] rounded-full opacity-75"
                          style={{
                            animation: "ping 2s infinite alternate",
                            animationDelay: `${index * 1}s`,
                          }}
                        ></div>
                        <div
                          className="absolute inset-0 border-2 border-[#84C9E2] rounded-full opacity-50"
                          style={{
                            animation: "ping 2s infinite alternate",
                            animationDelay: `${index * 1 + 0.1}s`,
                          }}
                        ></div>
                        <div
                          className="absolute inset-0 border-3 border-[#84C9E2] rounded-full opacity-25"
                          style={{
                            animation: "ping 2s infinite alternate",
                            animationDelay: `${index * 1 + 0.2}s`,
                          }}
                        ></div>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 font-serif">
                        {step.title}
                      </h4>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 font-sans">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={content.process.image}
          alt="Process Timeline"
          className="w-full h-auto rounded-md shadow-sm"
        />
      </div>
    </div>
  </Section>
);

const ExpertiseSpotlight = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="grid gap-8 rounded-md bg-[#1B3756] p-8 shadow-sm text-white lg:grid-cols-2">
      <div className="flex flex-col justify-center">
        {/* <Eyebrow className="text-white">{content.expertise.eyebrow}</Eyebrow> */}
        <h2 className="text-3xl md:text-4xl text-white font-medium font-serif">
          {content.expertise.heading}
        </h2>
        <p className="text-sm mt-2 text-white/80 font-sans">
          Clear, documented processes—built for UAE operators.
        </p>
      </div>
      <div className="space-y-5 flex flex-col justify-center">
        <p className="text-base leading-relaxed text-white/90 font-sans">
          {content.expertise.body}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={content.expertise.cta.href}
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#1B3756] hover:text-[#162C45] transition hover:bg-[#84C9E2]"
          >
            {content.expertise.cta.label}
          </Link>
        </div>
      </div>
    </div>
  </Section>
);

const RelatedServices = ({ content }: { content: ServicePageContent }) => {
  const otherServices = serviceSlugs
    .filter((slug) => slug !== content.slug)
    .map((slug) => ({
      label: servicesContent[slug].label,
      href: `/services/${slug}`,
    }))
    .slice(0, 4);

  if (!otherServices.length) {
    return null;
  }

  return (
    <Section>
      <SectionHeader
        eyebrow="Explore"
        title="Related services"
        description="If you need end-to-end support, these services fit well together."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {otherServices.map((service) => (
          <Link
            key={service.label}
            href={service.href}
            className="group rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:bg-primary-50 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-base font-semibold text-slate-900 !font-serif">
                  {service.label}
                </p>
                <p className="mt-2 text-sm text-slate-600 !font-sans">
                  See scope, deliverables, and process.
                </p>
              </div>
              <span
                aria-hidden
                className="text-xl font-semibold text-primary-700 transition group-hover:translate-x-1"
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default ServicePageClient;
