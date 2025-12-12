"use client";

import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";
import { ServicePageContent } from "@/data/services";
import { useScrollEffects } from "@/hooks/useScrollEffects";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useOverlayTriggers } from "@/hooks/useOverlayTriggers";
import { useElementReveals } from "@/hooks/useElementReveals";
import { useNavMenus } from "@/hooks/useNavMenus";
import { useCarousels } from "@/hooks/useCarousels";
import { useClientMarquee } from "@/hooks/useClientMarquee";
import { ReactNode } from "react";

interface ServicePageClientProps {
  content: ServicePageContent;
}

const sectionBase = "px-4 py-16 sm:px-6 lg:px-0";
const cardBase =
  "rounded-2xl border border-slate-100 bg-white/80 shadow-sm backdrop-blur";

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
      <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-slate-600">
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
      <div id="top"></div>
      <Header />
      <div id="page" className="main-container">
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
                    <MembershipHighlights content={content} />
                    <ServiceOverview content={content} />
                    <ServiceGrid content={content} />
                    {/* <Callout content={content} /> */}
                    <ProcessTimeline content={content} />
                    <ExpertiseSpotlight content={content} />
                    <RelatedServices content={content} />
                    <NewsletterPanel content={content} />
                  </div>
                </div>
              </article>
            </div>
          </main>
        </div>
      </div>
      <Footer />
      <div id="scroll-to-top" className="vamtam-scroll-to-top">
        <div id="scroll-to-top-text">top</div>
      </div>
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
    className={`text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 ${
      className ?? ""
    }`}
  >
    {children}
  </p>
);

const ServiceHero = ({ content }: { content: ServicePageContent }) => (
  <Section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-700 pt-20 text-white">
    <div className="space-y-6 pt-8">
      <Eyebrow className="text-white">{content.hero.eyebrow}</Eyebrow>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold !text-white sm:text-5xl lg:text-6xl">
          {content.hero.title}
        </h1>
        <p className="text-lg text-white/90">{content.hero.summary}</p>
        <p className="text-base text-white/80">{content.hero.description}</p>
      </div>
      <div className="flex flex-wrap gap-4">
        {content.hero.ctas.map((cta) => (
          <Link
            key={cta.label}
            href={cta.href}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-800 transition hover:bg-primary-100"
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </div>
  </Section>
);

const MembershipHighlights = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-3">
        <Eyebrow>{content.membershipsLabel}</Eyebrow>
        <p className="text-2xl font-semibold text-slate-900">
          Built for compliance, designed for speed.
        </p>
        <p className="max-w-2xl text-base text-slate-600">
          We help you stay on top of requirements with a clear workflow and
          consistent documentation.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
        {content.memberships.slice(0, 4).map((membership) => (
          <div
            key={membership}
            className="rounded-2xl border border-slate-200 bg-white p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Focus
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              {membership}
            </p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const ServiceOverview = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <SectionHeader
          eyebrow={content.overview.eyebrow}
          title={content.overview.heading}
        />
        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
          {content.overview.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-[32px] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 p-8 text-white shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
            At a glance
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                Turnaround
              </p>
              <p className="mt-2 text-lg font-semibold">Fast & structured</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                Coverage
              </p>
              <p className="mt-2 text-lg font-semibold">End-to-end</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                Reporting
              </p>
              <p className="mt-2 text-lg font-semibold">Clear & timely</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                Compliance
              </p>
              <p className="mt-2 text-lg font-semibold">Audit-ready</p>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-slate-50/60 p-8">
          <p className="text-sm font-semibold text-slate-900">How we work</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
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
          className={`${cardBase} h-40 flex flex-col items-start gap-4 p-6 hover:bg-[#84C9E2] group`}
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
          <h4 className="text-lg font-semibold text-slate-900 text-left group-hover:text-white">
            {service.title}
          </h4>
        </div>
      ))}
      <div
        className={`${cardBase} h-46 mt-4 p-6 flex items-center justify-between md:col-span-2 lg:col-span-3 bg-gradient-to-l from-[#84C9E2] to-[#306eb6]`}
      >
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold !text-slate-50">
            {content.callout.heading}
          </h2>
          {content.callout.subheading && (
            <p className="relative  max-w-2xl text-base leading-relaxed text-white/85">
              {content.callout.subheading}
            </p>
          )}
        </div>
        <Link
          href={content.callout.cta.href}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary-700 border border-primary-200 rounded-full hover:bg-primary-50"
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

const Callout = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="relative overflow-hidden rounded-[32px] border border-primary-200 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 p-10 text-white shadow-2xl">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

      <h3 className="relative text-2xl font-semibold sm:text-3xl">
        {content.callout.heading}
      </h3>
      {content.callout.subheading && (
        <p className="relative mt-3 max-w-2xl text-base leading-relaxed text-white/85">
          {content.callout.subheading}
        </p>
      )}
      <div className="relative mt-7">
        <Link
          href={content.callout.cta.href}
          className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary-800 transition hover:bg-primary-100"
        >
          {content.callout.cta.label}
        </Link>
      </div>
    </div>
  </Section>
);

const ProcessTimeline = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <Eyebrow>{content.process.eyebrow}</Eyebrow>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          {content.process.heading}
        </h2>
        <p className="text-base leading-relaxed text-slate-600">
          {content.process.description}
        </p>
        <div className="space-y-6">
          <div className="space-y-4">
            {content.process.steps.map((step, index) => (
              <div key={step.title} className={`${cardBase} px-6 py-4`}>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className="relative mt-2 flex-shrink-0">
                        <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-primary-600 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900">
                        {step.title}
                      </h4>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
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
          className="w-full h-auto rounded-2xl shadow-sm"
        />
      </div>
    </div>
  </Section>
);

const ExpertiseSpotlight = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="grid gap-8 rounded-[32px] bg-gradient-to-br from-[#84C9E2] to-[#1B3756] p-8 shadow-sm text-white lg:grid-cols-2">
      <div className="flex flex-col justify-center">
        {/* <Eyebrow className="text-white">{content.expertise.eyebrow}</Eyebrow> */}
        <h3 className="text-2xl !text-white font-semibold">
          {content.expertise.heading}
        </h3>
        <p className="text-sm mt-2 text-white/80">
          Clear, documented processes—built for UAE operators.
        </p>
      </div>
      <div className="space-y-5 flex flex-col justify-center">
        <p className="text-base leading-relaxed text-white/90">
          {content.expertise.body}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={content.expertise.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1B3756] transition hover:bg-[#84C9E2]"
          >
            {content.expertise.cta.label}
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Request a checklist
          </Link>
        </div>
      </div>
    </div>
  </Section>
);

const RelatedServices = ({ content }: { content: ServicePageContent }) => {
  if (!content.relatedServices.length) {
    return null;
  }

  return (
    <Section>
      <SectionHeader
        eyebrow="Explore"
        title="Related services"
        description="If you need end-to-end support, these services fit well together."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {content.relatedServices.map((service) => (
          <Link
            key={service.label}
            href={service.href}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-base font-semibold text-slate-900">
                {service.label}
              </p>
              <span
                aria-hidden
                className="text-xl text-primary-700 transition group-hover:translate-x-1"
              >
                →
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              See what’s included and how we deliver.
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
};

const NewsletterPanel = ({ content }: { content: ServicePageContent }) => (
  <Section className="pb-24">
    <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
      <SectionHeader
        align="center"
        eyebrow={content.newsletter.heading}
        title={content.newsletter.subheading}
        description={content.newsletter.description}
      />
      <form
        className="mt-8 flex flex-col gap-4 sm:flex-row"
        method="post"
        action={content.newsletter.action ?? "#"}
      >
        <label className="sr-only" htmlFor="newsletter-email">
          {content.newsletter.placeholder}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder={content.newsletter.placeholder}
          required
          className="flex-1 rounded-full border border-slate-300 bg-white px-5 py-3 text-base text-slate-700 shadow-sm focus:border-primary-400 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-primary-700 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-600"
        >
          {content.newsletter.buttonLabel}
        </button>
      </form>
      <p className="mt-4 text-center text-xs text-slate-500">
        {content.newsletter.privacy}
      </p>
    </div>
  </Section>
);

export default ServicePageClient;
