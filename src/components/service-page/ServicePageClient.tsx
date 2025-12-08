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
  "rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm backdrop-blur";

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
                    <Callout content={content} />
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

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
    {children}
  </p>
);

const ServiceHero = ({ content }: { content: ServicePageContent }) => (
  <Section className="pt-12">
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {content.breadcrumb.map((crumb, index) => (
          <li key={crumb.label} className="flex items-center gap-2">
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="transition hover:text-primary-600"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-slate-700">{crumb.label}</span>
            )}
            {index < content.breadcrumb.length - 1 && (
              <span aria-hidden="true" className="text-slate-400">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
    <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg ring-1 ring-slate-100">
      <Eyebrow>{content.hero.eyebrow}</Eyebrow>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
          {content.hero.title}
        </h1>
        <p className="text-lg text-slate-600">{content.hero.summary}</p>
        <p className="text-base text-slate-500">{content.hero.description}</p>
      </div>
      <div className="flex flex-wrap gap-4">
        {content.hero.ctas.map((cta) => (
          <Link
            key={cta.label}
            href={cta.href}
            className="inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
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
    <div
      className={`${cardBase} items-start gap-6 border-dashed border-primary-200 lg:flex`}
    >
      <div className="space-y-2">
        <Eyebrow>{content.membershipsLabel}</Eyebrow>
        <p className="text-base text-slate-600">
          Independent bodies keep us sharp and accountable to measurable
          standards.
        </p>
      </div>
      <div className="flex flex-1 flex-wrap gap-3">
        {content.memberships.map((membership) => (
          <span
            key={membership}
            className="inline-flex rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-800"
          >
            {membership}
          </span>
        ))}
      </div>
    </div>
  </Section>
);

const ServiceOverview = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="grid gap-10 rounded-[32px] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 p-10 text-white lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-5">
        <Eyebrow>{content.overview.eyebrow}</Eyebrow>
        <h2 className="text-3xl font-semibold">{content.overview.heading}</h2>
        <div className="space-y-4 text-base text-white/80">
          {content.overview.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div
        className={`space-y-4 ${cardBase} border-white/10 bg-white/10 text-white`}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-white/80">
          How we engage
        </p>
        <p className="text-lg text-white/90">
          Workshops, in-person deep dives, remote standups, and async updates
          keep momentum without burning your team.
        </p>
        <p className="text-sm text-white/70">
          We own the project cadence so you can stay focused on serving
          customers.
        </p>
      </div>
    </div>
  </Section>
);

const ServiceGrid = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="space-y-4">
      <Eyebrow>{content.servicesIntro.eyebrow}</Eyebrow>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl font-semibold text-slate-900">
          {content.servicesIntro.heading}
        </h2>
        <p className="max-w-2xl text-base text-slate-500">
          {content.servicesIntro.supporting}
        </p>
      </div>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      {content.services.map((service) => (
        <div
          key={service.title}
          className={`${cardBase} flex h-full flex-col transition hover:-translate-y-1`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
            <span aria-hidden className="text-lg">
              •
            </span>
          </div>
          <h3 className="mt-5 text-xl font-semibold text-slate-900">
            {service.title}
          </h3>
          <p className="mt-3 text-sm text-slate-600">{service.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Callout = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="rounded-[32px] bg-gradient-to-r from-primary-800 to-primary-500 p-10 text-white shadow-2xl">
      <h3 className="text-2xl font-semibold">{content.callout.heading}</h3>
      {content.callout.subheading && (
        <p className="mt-2 text-base text-white/80">
          {content.callout.subheading}
        </p>
      )}
      <div className="mt-6">
        <Link
          href={content.callout.cta.href}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-800 transition hover:bg-primary-50"
        >
          {content.callout.cta.label}
        </Link>
      </div>
    </div>
  </Section>
);

const ProcessTimeline = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="space-y-4">
      <Eyebrow>{content.process.eyebrow}</Eyebrow>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">
            {content.process.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-base text-slate-600">
            {content.process.description}
          </p>
        </div>
      </div>
    </div>
    <ol className="grid gap-6 md:grid-cols-2">
      {content.process.steps.map((step, index) => (
        <li
          key={step.title}
          className={`${cardBase} relative border-primary-50`}
        >
          <span className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-base font-semibold text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="pt-6">
            <h3 className="text-lg font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

const ExpertiseSpotlight = ({ content }: { content: ServicePageContent }) => (
  <Section>
    <div className="grid gap-6 rounded-[32px] border border-slate-200 bg-slate-50/60 p-8 lg:grid-cols-[0.6fr_1.4fr]">
      <div className="space-y-2">
        <Eyebrow>{content.expertise.eyebrow}</Eyebrow>
        <h3 className="text-2xl font-semibold text-slate-900">
          {content.expertise.heading}
        </h3>
      </div>
      <div className="space-y-4">
        <p className="text-base text-slate-600">{content.expertise.body}</p>
        <Link
          href={content.expertise.cta.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition hover:text-primary-500"
        >
          {content.expertise.cta.label}
          <span aria-hidden>→</span>
        </Link>
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
      <div className="space-y-4">
        <Eyebrow>More Services</Eyebrow>
        <div className="grid gap-4 md:grid-cols-3">
          {content.relatedServices.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className={`${cardBase} flex items-center justify-between text-base font-semibold text-slate-800 transition hover:border-primary-200`}
            >
              {service.label}
              <span aria-hidden className="text-xl text-primary-600">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

const NewsletterPanel = ({ content }: { content: ServicePageContent }) => (
  <Section className="pb-24">
    <div className="rounded-[32px] border border-slate-100 bg-gradient-to-br from-white via-primary-50/40 to-white p-8 shadow-xl">
      <div className="space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">
          {content.newsletter.heading}
        </p>
        <h3 className="text-3xl font-semibold text-slate-900">
          {content.newsletter.subheading}
        </h3>
        <p className="text-base text-slate-600">
          {content.newsletter.description}
        </p>
      </div>
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
          className="flex-1 rounded-full border border-slate-200 bg-white px-5 py-3 text-base text-slate-700 focus:border-primary-400 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
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
