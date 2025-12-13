import React, { useState } from "react";

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
    key: "relocate",
    label: "Relocate to Dubai or UAE",
    eyebrow: "Full relocation support",
    title:
      "Perfect for those who want to enjoy Dubai's 0% personal tax, premium lifestyle, and global business environment.",
    summary:
      "We help high-revenue agency owners, consultants & coaches, e-commerce/FBA brands, SaaS founders, investors & traders, and contractors with location-independent income.",
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
        description:
          "Establishing a UAE entity for global operations while maintaining UK residency.",
      },
      {
        title: "Compliance & legal",
        description:
          "Ensuring all moves are clean, legal, and strategically sound.",
      },
    ],
    metrics: [
      { label: "Tax savings", value: "0% personal tax" },
      { label: "Setup time", value: "4-6 weeks" },
      { label: "Success rate", value: "98%" },
    ],
    cta: {
      label: "Start relocation planning",
      href: "https://execor.vamtam.com/free-consultation/",
    },
    media: {
      imageUrl:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      alt: "Dubai skyline and business relocation",
      badge: "Relocation Experts",
      gradient: "from-emerald-500/80 via-teal-600/70 to-cyan-900/70",
    },
  },
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
      href: "https://execor.vamtam.com/free-consultation/",
    },
    media: {
      imageUrl:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      alt: "UK and Dubai business setup",
      badge: "Dual Presence Pros",
      gradient: "from-indigo-500/80 via-purple-600/70 to-pink-900/70",
    },
  },
];

const tabButtonBase =
  "relative !w-full inline-flex !flex-row items-center  px-4 py-2 text-lg font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const Tabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>(tabs[0]?.key ?? "");
  const activeTab = tabs.find((tab) => tab.key === activeKey) ?? tabs[0];

  if (!activeTab) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-16" aria-label="Growth strategy tabs">
      <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="rounded-t-xl items-center justify-center flex flex-col bg-gradient-to-r from-[#174758] to-[#1B3756] py-8 px-4 text-center text-white">
          <h1 className="text-3xl !text-white !font-medium sm:text-4xl">
            Entrepreneurs Who Want a Smarter Way to Grow, Whether Moving to
            Dubai or Staying in the UK
          </h1>
          <p className="mt-4 self-center max-w-3xl text-base sm:text-lg">
            We work with founders and business owners earning £150K+ in Profit
            who want a clean, legal, and strategic way to expand into the UAE,
            regardless of whether they plan to relocate or remain UK-based.
          </p>
          {/* <p className="mt-4 text-sm font-medium">
            Our clients come to us for one of two goals:
          </p> */}
        </div>
        <div className="bg-[#f2f5f1]">
          <div className="flex " role="tablist" aria-label="Growth scenarios">
            {tabs.map((tab) => {
              const isActive = tab.key === activeTab.key;
              return (
                <div
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tab-panel-${tab.key}`}
                  tabIndex={0}
                  className={`${tabButtonBase} flex-1 p-2 py-4 justify-center !text-center cursor-pointer ${
                    isActive
                      ? "border-b-2 border-primary-900 text-primary-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setActiveKey(tab.key)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveKey(tab.key);
                    }
                  }}
                >
                  {tab.label}
                </div>
              );
            })}
          </div>

          <div
            id={`tab-panel-${activeTab.key}`}
            role="tabpanel"
            aria-live="polite"
            className="mt-6 rounded-3xl bg-white/5 p-6 shadow-xl shadow-slate-900/5 ring-1 ring-slate-100 sm:p-8 lg:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
              <div>
                {/* <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                  {activeTab.eyebrow}
                </p> */}
                <h5 className="!mt-0 font-semibold text-slate-900">
                  {activeTab.title}
                </h5>
                {/* <p className="mt-4 text-lg text-slate-600">{activeTab.summary}</p> */}
                {activeTab.clientWants?.length ? (
                  <div className="mt-8">
                    <h5 className="font-semibold text-slate-900 mb-4">
                      What Our Clients Want
                    </h5>
                    <ul className="space-y-3">
                      {activeTab.clientWants.map((want) => (
                        <li key={want} className="flex items-start gap-3">
                          <span
                            aria-hidden
                            className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-slate-800"
                          />
                          <p className="text-base !mt-0 text-left font-medium text-slate-700">
                            {want}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-base text-slate-600">
                      {activeTab.description}
                    </p>
                  </div>
                ) : (
                  <p className="mt-3 text-base text-slate-600">
                    {activeTab.description}
                  </p>
                )}

                {/* <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {activeTab.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <p className="text-3xl font-semibold text-slate-900">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div> */}

                <div className="mt-10 space-y-4">
                  <h5 className="text-lg font-semibold text-slate-900">
                    How We Help
                  </h5>
                  {activeTab.strategies.map((strategy) => (
                    <div
                      key={strategy.title}
                      className="rounded-2xl border border-slate-100 p-5 shadow-sm shadow-slate-900/5"
                    >
                      <div className="!border-l-2 !border-slate-900">
                        <p className="text-base !mb-0 ml-3 font-semibold text-slate-900">
                          {strategy.title}
                        </p>
                      </div>
                      <div className="!border-l-2 !border-slate-300">
                        <p className="!mt-0 ml-3 text-sm text-slate-600">
                          {strategy.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={activeTab.cta.href}
                  className="mt-10 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  {activeTab.cta.label}
                </a>
              </div>

              <div className="flex flex-col gap-6">
                <div
                  className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl"
                  style={{
                    height: "600px",
                    backgroundImage: `url(${activeTab.media.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${activeTab.media.gradient}`}
                  ></div>
                  <div className="relative z-10 flex h-full flex-col justify-end p-8">
                    <span className="inline-flex max-w-max items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                      {activeTab.media.badge}
                    </span>
                    <p className="mt-4 text-lg text-white/90">
                      &ldquo;{activeTab.summary}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {activeTab.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <p className="text-3xl font-semibold text-slate-900">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
