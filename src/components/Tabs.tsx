"use client";
import { FC, useState } from "react";

interface TabStrategy {
  title: string;
  description: string;
}

interface TabMetric {
  label: string;
  value: string;
}

interface TabMedia {
  imageUrl: string;
  alt: string;
  badge: string;
  gradient: string;
}

interface TabConfig {
  key: string;
  label: string;
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  clientWants?: string[];
  strategies: TabStrategy[];
  metrics: TabMetric[];
  cta: {
    label: string;
    href: string;
  };
  media: TabMedia;
}

const tabs: TabConfig[] = [
  {
    key: "dual-presence",
    label: "Dubai Company While UK-Based",
    eyebrow: "Dual-presence setup",
    title:
      "Many high-earning founders want the benefits of a Dubai company but prefer to remain UK residents — and need it done legally and sensibly.",
    summary:
      "We help UK-based entrepreneurs wanting international expansion, founders wanting to reduce exposure through corporate structuring, businesses needing a UAE entity for global operations, payments, or investors, and brands using Dubai as a tax-neutral hub for international trade.",
    description:
      "We set up a UAE company that supports international growth while keeping your UK position compliant.",
    clientWants: [
      "A UAE company while legally maintaining UK residency",
      "Reduced corporate tax exposure through global structuring",
      "International payment processing advantages",
      "UAE banking for borderless operations",
      "A dual-presence business setup that remains fully compliant",
    ],
    strategies: [
      {
        title: "Corporate structuring",
        description:
          "Setting up UAE entities for tax efficiency and global operations.",
      },
      {
        title: "Payment processing",
        description:
          "International banking solutions for borderless transactions.",
      },
      {
        title: "Compliance management",
        description:
          "Maintaining legal compliance across UK and UAE jurisdictions.",
      },
    ],
    metrics: [
      { label: "Tax reduction", value: "Up to 30%" },
      { label: "Setup cost", value: "£5K-£15K" },
      { label: "Processing speed", value: "2-4 weeks" },
    ],
    cta: {
      label: "Set up dual presence",
      href: "/contact-us",
    },
    media: {
      imageUrl: "/images/others/company-2.jpeg",
      alt: "UK and Dubai business setup",
      badge: "Dual Presence Pros",
      gradient: "from-secondary/80 to-primary/70",
    },
  },
  {
    key: "relocate",
    label: "Relocate to Dubai or UAE",
    eyebrow: "Full relocation support",
    title:
      "Perfect for those who want to enjoy Dubai's low corporate tax, 0% personal income tax, 0% dividend tax, 0% capital gains tax, premium lifestyle, and global business environment.",
    summary:
      "We help high-revenue agency owners, consultants & coaches, e-commerce/FBA brands, engineering firms, investors & traders, and contractors with location-independent income.",
    description:
      "We help you relocate cleanly and confidently while setting up the right UAE structure for long-term flexibility.",
    clientWants: [
      "Full relocation support",
      "UAE residency & Emirates ID",
      "HMRC exit strategy",
      "Private banking",
      "Lifestyle and family relocation guidance",
      "A tax-efficient HQ for global operations",
    ],
    strategies: [
      {
        title: "Relocation planning",
        description:
          "Comprehensive support for moving to Dubai including residency, banking, and tax strategies.",
      },
      {
        title: "Business setup",
        description: "Establishing a UAE entity for global operations.",
      },
      {
        title: "Compliance & legal",
        description:
          "Ensuring all moves are clean, legal, and strategically sound.",
      },
    ],
    metrics: [
      { label: "Low corporate tax", value: "Low" },
      { label: "Tax savings", value: "0%" },
      { label: "Dividend tax", value: "0%" },
      { label: "Capital gains tax", value: "0%" },
      { label: "Setup time", value: "4-6 weeks" },
    ],
    cta: {
      label: "Start relocation planning",
      href: "/contact-us",
    },
    media: {
      imageUrl: "/images/others/company-1.jpg",
      alt: "Dubai skyline and business relocation",
      badge: "Relocation Experts",
      gradient: "from-secondary/80 to-primary/70",
    },
  },
];

const tabButtonBase =
  "relative inline-flex w-full items-center justify-center  px-4 py-4 text-center text-lg font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const panelBaseClasses =
  "mt-6 rounded-3xl bg-white/5 p-6 shadow-xl shadow-slate-900/5 ring-1 ring-slate-100 sm:p-8 lg:p-10";

const Tabs: FC = () => {
  const [activeKey, setActiveKey] = useState<string>(tabs[0].key);

  return (
    <section className="bg-slate-50 py-16" aria-label="Growth strategy tabs">
      <div className="mx-auto max-w-328  px-4 sm:px-4 lg:px-4">
        <div className="rounded-t-xl items-center justify-center flex flex-col bg-primary py-8 px-4 text-center text-white">
          <h1 className="text-3xl text-white font-serif max-w-6xl  font-medium sm:text-4xl">
            Entrepreneurs Who Want a Smarter Way to Grow, Whether Moving to
            Dubai or Staying in the UK
          </h1>
          <p className="mt-4 self-center max-w-3xl text-base sm:text-lg font-sans">
            We work with founders and business owners earning £150K+ in Profit
            who want a clean, legal, and strategic way to expand into the UAE,
            regardless of whether they plan to relocate or remain UK-based.
          </p>
        </div>
        <div className="bg-[#f2f5f1]">
          <div
            className="flex font-sans text-slate-600"
            aria-label="Growth scenarios"
          >
            {tabs.map((tab) => {
              const isActive = activeKey === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  className={`${tabButtonBase} rounded-none cursor-pointer bg-transparent hover:text-slate-900 ${
                    isActive
                      ? "border-b-2 border-black text-black"
                      : "border-b-2 border-transparent text-slate-600"
                  }`}
                  onClick={() => setActiveKey(tab.key)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {tabs.map((tab) => (
            <div
              key={`${tab.key}-panel`}
              className={`${panelBaseClasses} ${activeKey === tab.key ? "block" : "hidden"}`}
            >
              <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
                <div>
                  <h5 className="mt-0 font-semibold text-slate-900 font-serif">
                    {tab.title}
                  </h5>
                  {tab.clientWants?.length ? (
                    <div className="mt-8">
                      <h5 className="font-semibold text-slate-900 mb-4 font-serif">
                        What Our Clients Want
                      </h5>
                      <ul className="space-y-3">
                        {tab.clientWants.map((want) => (
                          <li key={want} className="flex items-start gap-3">
                            <span
                              aria-hidden
                              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-800"
                            />
                            <p className="text-base mt-0 text-left font-medium text-slate-700 font-sans">
                              {want}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 text-base text-slate-600 font-sans">
                        {tab.description}
                      </p>
                    </div>
                  ) : (
                    <p className="mt-3 text-base font-sans text-slate-600">
                      {tab.description}
                    </p>
                  )}

                  <div className="mt-10 space-y-4">
                    <h5 className="text-lg font-semibold text-slate-900 font-serif">
                      How We Help
                    </h5>
                    {tab.strategies.map((strategy) => (
                      <div
                        key={`${tab.key}-${strategy.title}`}
                        className="rounded-2xl border border-slate-100 p-5 shadow-sm shadow-slate-900/5"
                      >
                        <div className="border-l-2 border-slate-900">
                          <h5 className="text-base mb-0 ml-3 font-semibold text-slate-900 font-serif">
                            {strategy.title}
                          </h5>
                        </div>
                        <div className="border-l-2 border-slate-300">
                          <p className="mt-0 ml-3 text-sm text-slate-600 font-sans">
                            {strategy.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={tab.cta.href}
                    className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white/90 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 font-sans"
                  >
                    {tab.cta.label}
                  </a>
                </div>

                <div className="flex flex-col gap-6">
                  <div
                    className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl"
                    style={{
                      height: "600px",
                      backgroundImage: `url(${tab.media.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${tab.media.gradient}`}
                    ></div>
                    <div className="relative z-10 flex h-full flex-col justify-end p-8">
                      <span className="inline-flex max-w-max items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest font-sans">
                        {tab.media.badge}
                      </span>
                      <p className="mt-4 text-lg text-white/90 font-sans">
                        &ldquo;{tab.summary}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {tab.metrics.map((metric) => (
                      <div
                        key={`${tab.key}-${metric.label}`}
                        className="rounded-2xl bg-primary p-4"
                      >
                        <p className="text-3xl font-semibold font-serif text-secondary">
                          {metric.value}
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-100 font-sans">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
