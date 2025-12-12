export type ServiceSlug =
  | "company-formation"
  | "accounting-bookkeeping"
  | "tax-compliance"
  | "payroll-hr-pro"
  | "business-advisory";

export interface ServicePageContent {
  slug: ServiceSlug;
  label: string;
  breadcrumb: { label: string; href?: string }[];
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    description: string;
    ctas: { label: string; href: string }[];
  };
  membershipsLabel: string;
  memberships: string[];
  overview: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  servicesIntro: {
    eyebrow: string;
    heading: string;
    supporting: string;
  };
  services: { title: string; description: string; bullets?: string[] }[];
  callout: {
    heading: string;
    subheading?: string;
    cta: { label: string; href: string };
  };
  process: {
    eyebrow: string;
    heading: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  expertise: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: { label: string; href: string };
  };
  relatedServices: { label: string; href: string }[];
  newsletter: {
    heading: string;
    subheading: string;
    description: string;
    privacy: string;
    placeholder: string;
    buttonLabel: string;
    action?: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

const sharedBreadcrumb = (label: string): ServicePageContent["breadcrumb"] => [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label },
];

const sharedCta = {
  label: "Book a Free Consultation",
  href: "#",
};

const sharedMembershipsLabel = "Compliance areas we cover:";
const sharedMemberships = ["VAT", "Corporate Tax", "UBO / AML", "WPS Payroll"];

const sharedNewsletter: ServicePageContent["newsletter"] = {
  heading: "Stay Ahead.",
  subheading: "Subscribe for Expert Insights.",
  description:
    "Monthly operator playbooks, KPIs to watch, and invites to community briefings straight to your inbox.",
  privacy:
    "You can unsubscribe at any time using the link in the footer of our emails. View our Privacy Policy.",
  placeholder: "Email",
  buttonLabel: "Subscribe",
  action: "#subscribe",
};

export const servicesContent: Record<ServiceSlug, ServicePageContent> = {
  "company-formation": {
    slug: "company-formation",
    label: "Company Formation & Corporate Setup",
    breadcrumb: sharedBreadcrumb("Company Formation & Corporate Setup"),
    hero: {
      eyebrow: "Services",
      title: "Company Formation & Corporate Setup",
      summary:
        "Set up the right UAE entity—mainland, free zone, or offshore—with a clear plan from day one.",
      description:
        "We help you choose the correct business activity, handle documentation, coordinate licensing, and guide you through the setup steps so you can start operating with confidence.",
      ctas: [sharedCta],
    },
    membershipsLabel: sharedMembershipsLabel,
    memberships: sharedMemberships,
    overview: {
      eyebrow: "Overview",
      heading: "A clean, compliant setup—without the guesswork",
      paragraphs: [
        "Company formation is more than a licence. The right structure impacts banking, visas, tax registration, and long-term flexibility.",
        "We start with your operating model, ownership needs, and growth plans—then recommend the best-fit jurisdiction and activity selection.",
        "From paperwork to approvals, we keep the process moving while keeping you compliant with ongoing renewal and filing requirements.",
      ],
    },
    servicesIntro: {
      eyebrow: "Sub-services",
      heading: "What’s included",
      supporting:
        "Everything you need to establish and maintain a legal entity in the UAE.",
    },
    services: [
      {
        title: "Registration & Licensing",
        description:
          "Get incorporated with the right licence and renewals handled.",
        bullets: [
          "Mainland company registration (DED)",
          "Free-zone company registration",
          "Offshore company registration (where applicable)",
          "Trade licence application & renewal",
        ],
      },
      {
        title: "Corporate Documentation",
        description:
          "Align shareholder structure and required legal documents.",
        bullets: [
          "MOA / AOA and corporate agreements",
          "Shareholder structure advisory",
          "Corporate nominee arrangements (if required)",
        ],
      },
      {
        title: "Business Activity & Compliance",
        description:
          "Choose permitted activities correctly and stay aligned with regulations.",
        bullets: [
          "Business-activity advisory (permitted activity selection)",
          "Compliance guidance for ongoing requirements",
        ],
      },
      {
        title: "Banking Setup Support",
        description:
          "Set up corporate banking with the documentation banks expect.",
        bullets: [
          "Corporate bank account opening assistance",
          "KYC/documentation preparation",
          "Corporate banking & payment processing advisory",
        ],
      },
      {
        title: "Liquidation / Deregistration",
        description:
          "If you need to exit, we guide the closure process end-to-end.",
        bullets: ["Company liquidation", "Deregistration support"],
      },
    ],
    callout: {
      heading: "Start your UAE setup with clarity",
      subheading: "Tell us your business model—we’ll map the best route.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Formation process",
      description:
        "A structured workflow that keeps approvals moving and paperwork correct.",
      steps: [
        {
          title: "Consultation",
          description:
            "Understand your goals, ownership plan, and intended activities.",
        },
        {
          title: "Jurisdiction & Activity Selection",
          description:
            "Choose mainland/free zone/offshore and confirm permitted activities.",
        },
        {
          title: "Documentation & Submission",
          description:
            "Prepare filings and coordinate with relevant authorities.",
        },
        {
          title: "Licence Issuance & Next Steps",
          description:
            "Guide banking setup, renewals, and compliance milestones.",
        },
      ],
    },
    expertise: {
      eyebrow: "Why A2Z",
      heading: "Structured setup, clean documentation",
      body: "We prioritise correctness and speed—so your entity is set up for banking, tax registration, and operational scale.",
      cta: {
        label: "Speak to an Advisor",
        href: "#",
      },
    },
    relatedServices: [
      {
        label: "Accounting & Bookkeeping",
        href: "/services/accounting-bookkeeping",
      },
      {
        label: "Tax & Regulatory Compliance",
        href: "/services/tax-compliance",
      },
      { label: "Payroll & PRO Services", href: "/services/payroll-hr-pro" },
    ],
    newsletter: sharedNewsletter,
    meta: {
      title: "Company Formation & Corporate Setup | A2Z Accounting",
      description:
        "UAE company formation for mainland, free zone, and offshore setups, plus licensing and banking support.",
    },
  },
  "accounting-bookkeeping": {
    slug: "accounting-bookkeeping",
    label: "Accounting, Bookkeeping & Financial Reporting",
    breadcrumb: sharedBreadcrumb(
      "Accounting, Bookkeeping & Financial Reporting"
    ),
    hero: {
      eyebrow: "Services",
      title: "Accounting, Bookkeeping & Financial Reporting",
      summary:
        "Accurate books, clean reconciliations, and reporting you can trust—month after month.",
      description:
        "We keep your financial records organised and compliant, giving you timely visibility through structured reporting and modern cloud accounting workflows.",
      ctas: [sharedCta],
    },
    membershipsLabel: sharedMembershipsLabel,
    memberships: sharedMemberships,
    overview: {
      eyebrow: "Overview",
      heading: "Financial clarity for operators",
      paragraphs: [
        "Good bookkeeping is the foundation for VAT returns, Corporate Tax filings, and decision-making.",
        "We set up and maintain a consistent process for reconciliations, payables/receivables tracking, and month-end closes.",
        "You get reliable financial statements (P&L, Balance Sheet, Cashflow) that are ready for lenders, stakeholders, and auditors if needed.",
      ],
    },
    servicesIntro: {
      eyebrow: "Sub-services",
      heading: "Core accounting support",
      supporting:
        "Flexible coverage from day-to-day bookkeeping to management reporting.",
    },
    services: [
      {
        title: "Bookkeeping",
        description: "Keep records current and categorised correctly.",
        bullets: ["Monthly / quarterly / annual bookkeeping"],
      },
      {
        title: "Cloud Accounting Setup",
        description: "Build a clean system and workflow that scales.",
        bullets: [
          "QuickBooks / Xero / Zoho setup",
          "Chart of accounts configuration",
        ],
      },
      {
        title: "Reconciliations & Tracking",
        description: "Maintain control of cash and outstanding items.",
        bullets: [
          "Bank reconciliations",
          "Accounts payable / receivable tracking",
        ],
      },
      {
        title: "Financial Statements",
        description: "Timely reporting for better decisions.",
        bullets: [
          "Profit & Loss (P&L)",
          "Balance Sheet",
          "Cashflow statements",
        ],
      },
      {
        title: "Asset & Inventory Accounting",
        description:
          "If relevant to your business model, keep registers accurate.",
        bullets: ["Fixed asset register", "Inventory accounting"],
      },
    ],
    callout: {
      heading: "Know your numbers—without chasing spreadsheets",
      subheading: "We’ll keep your books clean and your reporting on time.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "A reliable monthly rhythm",
      description:
        "We set the cadence and checkpoints so your reporting arrives consistently.",
      steps: [
        {
          title: "Onboarding",
          description:
            "Collect access, documents, and define your reporting requirements.",
        },
        {
          title: "System Setup",
          description:
            "Configure cloud accounting tools and establish a clean workflow.",
        },
        {
          title: "Monthly Close",
          description:
            "Reconcile accounts, post adjustments, and finalise statements.",
        },
        {
          title: "Review & Improve",
          description:
            "Spot anomalies, improve categorisation, and refine processes.",
        },
      ],
    },
    expertise: {
      eyebrow: "Why A2Z",
      heading: "Bookkeeping that stays tax-ready",
      body: "We structure records to support VAT and Corporate Tax compliance while keeping reporting readable for founders.",
      cta: {
        label: "Get Started",
        href: "#",
      },
    },
    relatedServices: [
      {
        label: "Tax & Regulatory Compliance",
        href: "/services/tax-compliance",
      },
      { label: "Company Formation", href: "/services/company-formation" },
      { label: "Business Advisory", href: "/services/business-advisory" },
    ],
    newsletter: sharedNewsletter,
    meta: {
      title: "Accounting & Bookkeeping Services | A2Z Accounting",
      description:
        "Bookkeeping, cloud accounting setup, reconciliations, and financial reporting for UAE businesses.",
    },
  },
  "tax-compliance": {
    slug: "tax-compliance",
    label: "Tax & Regulatory Compliance",
    breadcrumb: sharedBreadcrumb("Tax & Regulatory Compliance"),
    hero: {
      eyebrow: "Services",
      title: "Tax & Regulatory Compliance",
      summary:
        "Stay compliant with UAE requirements—without last-minute panic or penalty risk.",
      description:
        "From VAT registration to Corporate Tax filing and regulatory submissions, we help you meet requirements on time and with clean supporting documentation.",
      ctas: [sharedCta],
    },
    membershipsLabel: sharedMembershipsLabel,
    memberships: sharedMemberships,
    overview: {
      eyebrow: "Overview",
      heading: "Compliance support that protects your business",
      paragraphs: [
        "Compliance is ongoing: registrations, periodic filings, documentation standards, and audit readiness.",
        "We help you implement the right process so compliance becomes predictable—not disruptive.",
        "If your business grows or changes, we adapt registrations and filing approaches accordingly.",
      ],
    },
    servicesIntro: {
      eyebrow: "Sub-services",
      heading: "What we handle",
      supporting:
        "Practical support for registrations, filings, and regulatory requirements.",
    },
    services: [
      {
        title: "VAT Compliance",
        description:
          "Get registered and file returns with clean documentation.",
        bullets: [
          "VAT registration",
          "VAT return filing and compliance support",
        ],
      },
      {
        title: "Corporate Tax",
        description:
          "Support with registration and periodic/annual filing requirements.",
        bullets: ["Corporate Tax registration", "Corporate Tax filing support"],
      },
      {
        title: "Regulatory Filings & Advisory",
        description: "Help with common UAE compliance requirements.",
        bullets: [
          "Economic Substance (if required)",
          "UBO filings (if required)",
          "AML compliance guidance (if required)",
        ],
      },
      {
        title: "Audit-Ready Accounting",
        description:
          "Support coordination and preparation when audited financials are needed.",
        bullets: [
          "Compliance audits support",
          "Statutory audit coordination",
          "Audit-ready bookkeeping and documentation",
        ],
      },
    ],
    callout: {
      heading: "Build a compliance calendar that runs itself",
      subheading: "We’ll keep you on-track and organised.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Compliance workflow",
      description:
        "A clear sequence that keeps filings timely and documentation consistent.",
      steps: [
        {
          title: "Assessment",
          description:
            "Review your entity, activities, and current registrations and records.",
        },
        {
          title: "Registration",
          description:
            "Register for VAT/Corporate Tax where applicable and set requirements.",
        },
        {
          title: "Filing & Documentation",
          description:
            "Prepare filings and ensure supporting records are organised.",
        },
        {
          title: "Ongoing Monitoring",
          description:
            "Maintain schedules, updates, and advisory for regulatory changes.",
        },
      ],
    },
    expertise: {
      eyebrow: "Why A2Z",
      heading: "Simple, defensible documentation",
      body: "We focus on clean records and consistent workflows so compliance stays manageable as you scale.",
      cta: {
        label: "Talk to Us",
        href: "#",
      },
    },
    relatedServices: [
      {
        label: "Accounting & Bookkeeping",
        href: "/services/accounting-bookkeeping",
      },
      { label: "Company Formation", href: "/services/company-formation" },
      { label: "Payroll & PRO Services", href: "/services/payroll-hr-pro" },
    ],
    newsletter: sharedNewsletter,
    meta: {
      title: "UAE Tax & Compliance Services | A2Z Accounting",
      description:
        "VAT and Corporate Tax support plus regulatory compliance workflows for UAE businesses.",
    },
  },
  "payroll-hr-pro": {
    slug: "payroll-hr-pro",
    label: "Payroll & HR / PRO Services",
    breadcrumb: sharedBreadcrumb("Payroll & HR / PRO Services"),
    hero: {
      eyebrow: "Services",
      title: "Payroll & HR / PRO Services",
      summary:
        "Payroll processing, visa support, and government liaison—handled end-to-end.",
      description:
        "If you employ staff or sponsor visas, you need payroll and compliance done correctly. We support payroll runs, renewals, document clearing, and ongoing liaison so operations stay smooth.",
      ctas: [sharedCta],
    },
    membershipsLabel: sharedMembershipsLabel,
    memberships: sharedMemberships,
    overview: {
      eyebrow: "Overview",
      heading: "Workforce support built for UAE operations",
      paragraphs: [
        "Payroll and visa processes create operational risk when they’re inconsistent or delayed.",
        "We help you set up a repeatable payroll workflow and manage key documentation requirements.",
        "For visas and renewals, we keep the admin burden off your team with clear checklists and timelines.",
      ],
    },
    servicesIntro: {
      eyebrow: "Sub-services",
      heading: "What we support",
      supporting:
        "Payroll, visa workflows, and government liaison with structured follow-through.",
    },
    services: [
      {
        title: "Payroll Processing",
        description: "Reliable payroll with compliance in mind.",
        bullets: ["Payroll processing", "Wage Protection (WPS) compliance"],
      },
      {
        title: "Visa Processing",
        description:
          "Support for common visa and residency workflows as your team grows.",
        bullets: [
          "Investor / Partner / Employee visas",
          "Residency permits",
          "Labour cards & renewal support",
        ],
      },
      {
        title: "Government Liaison & PRO",
        description: "Document clearing and ongoing admin handling.",
        bullets: [
          "Visa/immigration handling",
          "Licence renewals",
          "Compliance filings support",
        ],
      },
    ],
    callout: {
      heading: "Reduce workforce admin load",
      subheading: "Keep payroll and renewals on schedule.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Operational support cadence",
      description:
        "We implement checklists and timelines so payroll and renewals stay predictable.",
      steps: [
        {
          title: "Setup",
          description:
            "Confirm workforce needs, required documents, and a compliance timeline.",
        },
        {
          title: "Implementation",
          description:
            "Configure payroll workflow and align required documentation.",
        },
        {
          title: "Processing",
          description:
            "Run payroll cycles and manage visa/renewal submissions as required.",
        },
        {
          title: "Ongoing Support",
          description:
            "Track renewals and keep your compliance checklist current.",
        },
      ],
    },
    expertise: {
      eyebrow: "Why A2Z",
      heading: "Consistent paperwork. Fewer delays.",
      body: "We keep processes simple and documented so your team can focus on delivery while compliance stays organised.",
      cta: {
        label: "Enquire Now",
        href: "#",
      },
    },
    relatedServices: [
      { label: "Company Formation", href: "/services/company-formation" },
      {
        label: "Tax & Regulatory Compliance",
        href: "/services/tax-compliance",
      },
      {
        label: "Accounting & Bookkeeping",
        href: "/services/accounting-bookkeeping",
      },
    ],
    newsletter: sharedNewsletter,
    meta: {
      title: "Payroll & PRO Services | A2Z Accounting",
      description:
        "Payroll processing, WPS compliance, visa workflows, and PRO support for UAE businesses.",
    },
  },
  "business-advisory": {
    slug: "business-advisory",
    label: "Business Advisory & Corporate Structuring",
    breadcrumb: sharedBreadcrumb("Business Advisory & Corporate Structuring"),
    hero: {
      eyebrow: "Services",
      title: "Business Advisory & Corporate Structuring",
      summary:
        "Plan confidently with structuring, forecasting, and governance support as you scale.",
      description:
        "We help founders and finance leads build tax-efficient structures, forecast cashflow, and set up internal controls—especially for cross-border operations.",
      ctas: [sharedCta],
    },
    membershipsLabel: sharedMembershipsLabel,
    memberships: sharedMemberships,
    overview: {
      eyebrow: "Overview",
      heading: "Advisory that stays practical",
      paragraphs: [
        "When revenue grows, the cost of a weak structure grows too—banking, tax, compliance, and operational complexity all compound.",
        "We support entity planning, forecasting, and budget controls so decisions are backed by numbers.",
        "For cross-border operations, we help you understand how choices impact compliance and reporting.",
      ],
    },
    servicesIntro: {
      eyebrow: "Sub-services",
      heading: "Advisory capabilities",
      supporting:
        "Planning, modelling, and governance support for growing teams.",
    },
    services: [
      {
        title: "Corporate Structuring",
        description: "Design a structure that supports growth and compliance.",
        bullets: [
          "Tax-efficient entity planning (UAE + abroad)",
          "Corporate structuring advisory",
        ],
      },
      {
        title: "Forecasting & Budgeting",
        description: "Plan cashflow, hiring, and runway with clarity.",
        bullets: ["Financial modelling", "Forecasting", "Budget planning"],
      },
      {
        title: "Cross-border Advisory",
        description:
          "Support for international founders operating via a UAE entity.",
        bullets: [
          "Entity selection and compliance planning",
          "Residency / tax strategy considerations",
        ],
      },
      {
        title: "Governance & Audit Preparation",
        description:
          "Controls and documentation that keep your business audit-ready.",
        bullets: [
          "Audit preparation support",
          "Internal controls setup",
          "Governance advisory",
        ],
      },
    ],
    callout: {
      heading: "Make decisions with confidence",
      subheading: "Turn numbers into an actionable plan.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Advisory engagement",
      description:
        "A tight loop: assess, model, decide, and implement with documentation.",
      steps: [
        {
          title: "Discovery",
          description:
            "Understand goals, constraints, and your current structure and records.",
        },
        {
          title: "Analysis",
          description:
            "Model scenarios and map compliance and operational implications.",
        },
        {
          title: "Recommendations",
          description:
            "Deliver a clear plan with next actions and required documentation.",
        },
        {
          title: "Implementation Support",
          description:
            "Coordinate follow-through across accounting, tax, and operations.",
        },
      ],
    },
    expertise: {
      eyebrow: "Why A2Z",
      heading: "Operator-friendly advisory",
      body: "We keep it pragmatic—clear decisions, documented steps, and a plan your team can execute.",
      cta: {
        label: "Book a Call",
        href: "#",
      },
    },
    relatedServices: [
      { label: "Company Formation", href: "/services/company-formation" },
      {
        label: "Accounting & Bookkeeping",
        href: "/services/accounting-bookkeeping",
      },
      {
        label: "Tax & Regulatory Compliance",
        href: "/services/tax-compliance",
      },
    ],
    newsletter: sharedNewsletter,
    meta: {
      title: "Business Advisory & Structuring | A2Z Accounting",
      description:
        "Corporate structuring, forecasting, and governance advisory for UAE and cross-border operations.",
    },
  },
};

export const serviceSlugs = Object.keys(servicesContent) as ServiceSlug[];

export const getServiceContent = (
  slug: string
): ServicePageContent | undefined => servicesContent[slug as ServiceSlug];
