import Link from "next/link";
import React from "react";
import type { LucideIcon } from "lucide-react";
import {
  DollarSign,
  Globe,
  Home,
  MapPin,
  Flag,
  TrendingUp,
} from "lucide-react";

type WhyDubaiPillar = {
  title: string;
  summary: string;
  bullets?: string[];
  image: string;
  icon: LucideIcon;
  highlight?: {
    title: string;
    body: string;
  };
};

const pillars: WhyDubaiPillar[] = [
  {
    title: "Minimal Tax, Maximum Freedom",
    summary:
      "Dubai offers one of the most favourable tax environments in the world:",
    bullets: [
      "0% personal income tax",
      "0% tax on dividends",
      "0% capital gains tax",
      "0% tax on worldwide income",
      "Business-friendly corporate tax rules",
      "Full ownership of your company (no local sponsor required)",
    ],
    image:
      "https://execor.vamtam.com/wp-content/uploads/2025/04/pexels-cottonbro-5989928.jpg",
    icon: DollarSign,
  },
  {
    title: "A Global Hub for High-Profit Entrepreneurs",
    summary: "Dubai is built for business owners who think globally:",
    bullets: [
      "Fast and modern business incorporation",
      "Access to international banking",
      "No currency restrictions",
      "Government systems that are digital, smooth, and efficient",
      "Established Free Zones designed for SMEs and high-earning individuals",
    ],
    image:
      "https://execor.vamtam.com/wp-content/uploads/2025/04/pexels-cottonbro-5989928.jpg",
    icon: Globe,
  },
  {
    title: "A Lifestyle Upgrade That Actually Saves You Money",
    summary:
      "Beyond business, Dubai is one of the world’s safest, cleanest, and most forward-thinking cities:",
    bullets: [
      "Ultra-modern residential communities",
      "Safe for families (one of the lowest crime rates globally)",
      "Luxury living at lower cost than the UK’s major cities",
      "Stunning beaches, dining, entertainment",
      "Year-round sunshine",
      "World-class healthcare and education options",
    ],
    image:
      "https://execor.vamtam.com/wp-content/uploads/2025/04/pexels-cottonbro-5989928.jpg",
    icon: Home,
  },
  {
    title: "Easy Residency & Seamless Global Mobility",
    summary: "Setting up a company gives you the ability to obtain:",
    bullets: [
      "A UAE Residency Visa",
      "Emirates ID",
      "Family sponsorship options",
      "Full access to UAE banking",
    ],
    image:
      "https://execor.vamtam.com/wp-content/uploads/2025/04/pexels-cottonbro-5989928.jpg",
    icon: MapPin,
  },
  {
    title:
      "Perfect for UK Entrepreneurs (Especially Those Still Living in the UK)",
    summary: "Dubai is especially powerful for UK-based business owners who:",
    bullets: [
      "Are earning £150K+ profit",
      "Want to reduce tax exposure",
      "Want to create a holding company",
      "Want to secure a second residency",
      "Want to run operations internationally",
      "Want a structure that is compliant in both the UK and UAE",
    ],
    image:
      "https://execor.vamtam.com/wp-content/uploads/2025/04/pexels-cottonbro-5989928.jpg",
    icon: Flag,
    highlight: {
      title: "UK-focused support",
      body: "We specialise in helping UK entrepreneurs build Dubai structures the right way, with full cross-border compliance, protection, and tax efficiency.",
    },
  },
  {
    title: "A Future-Proof Place to Build Your Business",
    summary: "Dubai continues to invest heavily in:",
    bullets: [
      "Digital infrastructure",
      "AI and tech ecosystems",
      "International talent",
      "Business-friendly laws",
      "Visa reforms",
      "World-leading Free Zone innovation",
    ],
    image:
      "https://execor.vamtam.com/wp-content/uploads/2025/04/pexels-cottonbro-5989928.jpg",
    icon: TrendingUp,
  },
];

export default function WhyDubaiPage() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Why Dubai?
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          Dubai has become the preferred home for ambitious entrepreneurs,
          high-performing professionals, and global business owners — especially
          those earning £150K+ in profit who want to legally reduce taxes while
          enjoying a higher standard of living. Dubai is more than just a
          tax-friendly location. It’s a global business hub, lifestyle upgrade,
          and strategic base for building long-term financial freedom.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full bg-primary-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-800"
          >
            Enquire Today
          </Link>
          <Link
            href="/services/company-formation"
            className="inline-flex items-center justify-center rounded-full border border-primary-900 bg-white px-6 py-3 text-sm font-semibold text-primary-900 transition hover:bg-primary-50"
          >
            Explore Services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="relative">
            <img
              src="https://gmz.ae/wp-content/uploads/2025/02/Burj-Al-Arab-851x851.png"
              alt="Dubai skyline"
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-900">
              Overview
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Built for freedom, designed for growth
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              For entrepreneurs wasting large portions of their profit in UK
              taxes, Dubai provides a legally compliant route to keep
              significantly more of what you earn — while operating from a
              business-first environment.
            </p>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                The bottom line
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Dubai gives you more freedom, more opportunity, more profit —
                and far less stress.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                For entrepreneurs who want to elevate both their income and
                lifestyle, no other country offers such a powerful combination
                of tax efficiency, safety, and long-term stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f5f1] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-900">
              Key reasons
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Why Dubai works for high-earning founders
            </h2>
          </div>

          <div className="mt-10 space-y-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={pillar.title}
                  className={`grid gap-6 rounded-3xl  bg-transparent p-8 min-h-[200px] ${
                    isEven
                      ? "grid-cols-[1.1fr_0.9fr]"
                      : "grid-cols-[0.9fr_1.1fr]"
                  }`}
                >
                  {isEven ? (
                    <>
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-auto object-cover rounded-3xl"
                      />
                      <div className="flex flex-col justify-center space-y-4">
                        <div className="flex items-center gap-4">
                          <Icon className="w-10 h-10 text-primary-900" />
                          <h3 className="text-2xl font-semibold text-slate-900 leading-tight">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="text-base leading-relaxed text-slate-600">
                          {pillar.summary}
                        </p>
                        {pillar.bullets?.length ? (
                          <ul className="space-y-2">
                            {pillar.bullets.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span
                                  aria-hidden
                                  className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary-900"
                                />
                                <p className="text-sm leading-relaxed text-slate-700">
                                  {item}
                                </p>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {pillar.highlight ? (
                          <div className="rounded-2xl border border-primary-900/10 bg-primary-50/60 p-4">
                            <p className="text-sm font-semibold text-slate-900">
                              {pillar.highlight.title}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">
                              {pillar.highlight.body}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col justify-center space-y-4">
                        <div className="flex items-center gap-4">
                          <Icon className="w-10 h-10 text-primary-900" />
                          <h3 className="text-2xl font-semibold text-slate-900 leading-tight">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="text-base leading-relaxed text-slate-600">
                          {pillar.summary}
                        </p>
                        {pillar.bullets?.length ? (
                          <ul className="space-y-2">
                            {pillar.bullets.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span
                                  aria-hidden
                                  className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary-900"
                                />
                                <p className="text-sm leading-relaxed text-slate-700">
                                  {item}
                                </p>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {pillar.highlight ? (
                          <div className="rounded-2xl border border-primary-900/10 bg-primary-50/60 p-4">
                            <p className="text-sm font-semibold text-slate-900">
                              {pillar.highlight.title}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">
                              {pillar.highlight.body}
                            </p>
                          </div>
                        ) : null}
                      </div>
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-auto object-cover rounded-3xl"
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-primary-950 via-primary-900 to-primary-800 p-10 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            The Bottom Line
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            More freedom. More opportunity. Less stress.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90">
            Dubai gives you the structure to protect wealth, scale globally, and
            build long-term stability — with a lifestyle that supports high
            performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-900 transition hover:bg-primary-50"
            >
              Speak to an Advisor
            </Link>
            <Link
              href="/services/company-formation"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              See How We Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
