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
    ctas: { label: string; href: string }[];
  };
  whatWeDo: {
    eyebrow: string;
    heading: string;
    description: string;
    image: string;
  };
  overview: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  atAGlance: { label: string; value: string }[];
  howWeWork: {
    heading: string;
    description: string;
  };
  servicesIntro: {
    eyebrow: string;
    heading: string;
    supporting: string;
  };
  services: { title: string }[];
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
    image: string;
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
  href: "/contact-us",
};

const sharedWhatWeDoEyebrow = "What we do";
const sharedWhatWeDoImage =
  "https://assets.entrepreneur.com/content/3x2/2000/1742193731-Shutterstock-2483595635.jpg";

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

      ctas: [sharedCta],
    },
    whatWeDo: {
      eyebrow: sharedWhatWeDoEyebrow,
      heading: "Set up the right UAE entity—end to end.",
      description:
        "At A2Z Accounting Dubai, we help UK business owners and professionals establish compliant UAE companies that support international operations, tax planning, and future growth — whether you plan to relocate or continue operating from the UK. Whether you're establishing a mainland company, a free zone entity, or an offshore setup, we tailor the process to your specific business needs, providing expert advice on activity selection, shareholder structures, and regulatory requirements. With our end-to-end support, you can focus on growing your business while we manage the complexities of UAE company formation, ensuring a smooth and compliant launch that sets the foundation for long-term success.",
      image:
        "https://media.istockphoto.com/id/473016474/photo/emirati-doing-business.jpg?s=612x612&w=0&k=20&c=iQS3v20_p5zRkBROQMDNmGg7r9TPBmzfUbzqrmLvZ7E=",
    },
    overview: {
      eyebrow: "Overview",
      heading: "A clean, compliant setup—without the guesswork",
      paragraphs: [
        "Company formation is more than a licence. The right structure impacts banking, visas, tax registration, and long-term flexibility.",
        "We start with your operating model, ownership needs, and growth plans—then recommend the best-fit jurisdiction and activity selection.",
        "From paperwork to approvals, we keep the process moving while keeping you compliant with ongoing renewal and filing requirements.",
      ],
    },
    atAGlance: [
      { label: "Turnaround", value: "1-3 weeks" },
      { label: "Coverage", value: "End-to-end" },
      { label: "Reporting", value: "Clear & timely" },
      { label: "Compliance", value: "Audit-ready" },
    ],
    howWeWork: {
      heading: "How we work",
      description:
        "Clear milestones, shared checklists, and proactive updates—so you always know what's next.",
    },
    servicesIntro: {
      eyebrow: "Sub-services",
      heading: "What’s included",
      supporting:
        "Everything you need to establish and maintain a legal entity in the UAE.",
    },
    services: [
      { title: "Jurisdiction and structure advisory" },
      { title: "Trade licence application and renewals" },
      { title: "Business activity classification" },
      { title: "Shareholding and ownership structuring" },
      { title: "MOA and incorporation documentation" },
      { title: "UAE bank account support" },
      { title: "Visa eligibility planning" },
      { title: "Ongoing compliance and advisory support" },
    ],
    callout: {
      heading: "Start your UAE setup with clarity",
      subheading: "Tell us your business model—we’ll map the best route.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Formation process",
      image: "https://www.grovy.ae/wp-content/uploads/2025/02/2151328531.jpg",
      description:
        "A structured workflow that keeps approvals moving and paperwork correct.",
      steps: [
        {
          title: "Initial Consultation",
          description:
            "Understand your existing UK business, profit profile, residency intentions, and long-term objectives.",
        },
        {
          title: "Structure & Jurisdiction Advice",
          description:
            "Choose mainland/free zone/offshore and confirm permitted activities.",
        },
        {
          title: "Documentation & Incorporation",
          description:
            "Prepare and submit all required documents and liaise with relevant authorities.",
        },
        {
          title: "Licence Issuance & Next Steps",
          description:
            "Assist with banking, visas, and ongoing accounting and compliance requirements.",
        },
      ],
    },
    expertise: {
      eyebrow: "Why A2Z",
      heading: "Structured setup, clean documentation",
      body: "We prioritise correctness and speed—so your entity is set up for banking, tax registration, and operational scale.",
      cta: {
        label: "Speak to an Advisor",
        href: "/contact-us",
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
      ctas: [sharedCta],
    },
    whatWeDo: {
      eyebrow: sharedWhatWeDoEyebrow,
      heading: "Clean books. Clear reporting. Complete confidence.",
      description:
        "We provide precise, UK-standard accounting and bookkeeping services that keep your Dubai company compliant, transparent, and ready for growth. Whether you run a Free Zone entity, a mainland company, or a hybrid UK–UAE structure, our team ensures your numbers are accurate, up-to-date, and audit-ready — so you can make confident decisions without administrative burden.",
      image:
        "https://www.shutterstock.com/image-photo/luxurious-balcony-overlooking-dubai-downtown-600nw-2645925131.jpg",
    },
    overview: {
      eyebrow: "Overview",
      heading: "Financial clarity for operators",
      paragraphs: [
        "In the UAE, accurate accounting is more than just record-keeping — it’s the foundation of compliance, tax planning, and business performance.",
        "We help business owners, professionals, and contractors earning £150K+ in profit maintain clean, compliant financial records that support regulatory requirements (UAE and international standards), bank account management, corporate tax and VAT planning, and financial clarity for strategic decisions.",
        "Our bookkeeping and accounting services are designed to support both UK-based business owners operating through a UAE entity, and those living or relocating to Dubai.",
      ],
    },
    atAGlance: [
      { label: "Turnaround", value: "Monthly" },
      { label: "Coverage", value: "End-to-end" },
      { label: "Reporting", value: "Clear & timely" },
      { label: "Compliance", value: "Audit-ready" },
    ],
    howWeWork: {
      heading: "How we work",
      description:
        "A methodical, audit-ready accounting process designed to meet UAE requirements while giving you complete financial visibility.",
    },
    servicesIntro: {
      eyebrow: "Sub-services",
      heading: "Core accounting support",
      supporting:
        "Flexible coverage from day-to-day bookkeeping to management reporting.",
    },
    services: [
      { title: "Monthly bookkeeping & reconciliations" },
      { title: "Management accounts & reporting" },
      { title: "VAT & corporate tax-ready records" },
      { title: "Ongoing support & review" },
    ],
    callout: {
      heading: "Know your numbers—without chasing spreadsheets",
      subheading: "We’ll keep your books clean and your reporting on time.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "A reliable monthly rhythm",
      image:
        "https://m.thepeninsulaqatar.com/get/maximage/20250117_1737102017-197.JPG?1737102017",
      description:
        "We follow a structured, straightforward process so your accounts are always organised and transparent.",
      steps: [
        {
          title: "Onboarding & System Setup",
          description:
            "We connect your bank feeds and configure your accounting system.",
        },
        {
          title: "Monthly Bookkeeping",
          description:
            "Transactions are recorded, categorised, and reconciled.",
        },
        {
          title: "Management Reports",
          description:
            "Monthly or quarterly insights into performance, cashflow, and financial health.",
        },
        {
          title: "Periodic Review & Compliance",
          description:
            "We ensure your records are compliant with UAE requirements and ready for tax filings if needed.",
        },
      ],
    },
    expertise: {
      eyebrow: "Why A2Z",
      heading: "Bookkeeping that stays tax-ready",
      body: "We build compliant VAT and Corporate Tax records that remain clear, practical, and decision-ready for business owners.",
      cta: {
        label: "Get Started",
        href: "/contact-us",
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
      ctas: [sharedCta],
    },
    whatWeDo: {
      eyebrow: sharedWhatWeDoEyebrow,
      heading: "Stay compliant with VAT and Corporate Tax—without surprises.",
      description:
        "We support registrations, filings, and documentation standards so submissions are on time, accurate, and backed by audit-ready records. Our expert team navigates the complexities of UAE tax laws, ensuring you meet all VAT and Corporate Tax obligations seamlessly. From initial registrations to periodic filings, we provide proactive guidance, helping you maintain impeccable documentation that withstands scrutiny. We also assist with regulatory requirements like Economic Substance and UBO filings, minimizing risks and penalties. With our comprehensive compliance support, you can focus on your core business activities, confident that your tax affairs are handled professionally and efficiently, adapting to changes in regulations as your business evolves.",
      image: sharedWhatWeDoImage,
    },
    overview: {
      eyebrow: "Overview",
      heading: "Compliance support that protects your business",
      paragraphs: [
        "Compliance is ongoing: registrations, periodic filings, documentation standards, and audit readiness.",
        "We help you implement the right process so compliance becomes predictable—not disruptive.",
        "If your business grows or changes, we adapt registrations and filing approaches accordingly.",
      ],
    },
    atAGlance: [
      { label: "Turnaround", value: "On-time" },
      { label: "Coverage", value: "End-to-end" },
      { label: "Reporting", value: "Clear & timely" },
      { label: "Compliance", value: "Audit-ready" },
    ],
    howWeWork: {
      heading: "How we work",
      description:
        "Clear milestones, shared checklists, and proactive updates—so you always know what's next.",
    },
    servicesIntro: {
      eyebrow: "Sub-services",
      heading: "What we handle",
      supporting:
        "Practical support for registrations, filings, and regulatory requirements.",
    },
    services: [
      { title: "VAT Compliance" },
      { title: "Corporate Tax" },
      { title: "Regulatory Filings & Advisory" },
      { title: "Audit-Ready Accounting" },
    ],
    callout: {
      heading: "Build a compliance calendar that runs itself",
      subheading: "We’ll keep you on-track and organised.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Compliance workflow",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2022/11/30/Dubai.jpg",
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
        href: "/contact-us",
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
      ctas: [sharedCta],
    },
    whatWeDo: {
      eyebrow: sharedWhatWeDoEyebrow,
      heading: "Run payroll and HR/PRO workflows with confidence.",
      description:
        "We help you manage WPS payroll and essential HR/PRO processes with clear checklists and consistent documentation—so your team operations stay compliant and smooth. Our streamlined approach covers everything from payroll calculations and tax withholdings to visa processing and government filings, ensuring accuracy and timeliness. We handle the intricacies of UAE labor laws, providing support for employee visas, residency permits, and renewals, while maintaining detailed records for audits and compliance checks. By outsourcing these critical functions to us, you reduce administrative burdens, minimize errors, and allow your HR team to focus on strategic initiatives, fostering a productive and compliant workforce that drives your business forward.",
      image: sharedWhatWeDoImage,
    },
    overview: {
      eyebrow: "Overview",
      heading: "Workforce support built for UAE operations",
      paragraphs: [
        "Payroll and visa processes create operational risk when they’re inconsistent or delayed.",
        "We help you set up a repeatable payroll workflow and manage key documentation requirements.",
        "For visas and renewals, we keep the admin burden off your team with clear checklists and timelines.",
      ],
    },
    atAGlance: [
      { label: "Turnaround", value: "Monthly" },
      { label: "Coverage", value: "End-to-end" },
      { label: "Reporting", value: "Clear & timely" },
      { label: "Compliance", value: "Audit-ready" },
    ],
    howWeWork: {
      heading: "How we work",
      description:
        "Clear milestones, shared checklists, and proactive updates—so you always know what's next.",
    },
    servicesIntro: {
      eyebrow: "Sub-services",
      heading: "What we support",
      supporting:
        "Payroll, visa workflows, and government liaison with structured follow-through.",
    },
    services: [
      { title: "Payroll Processing" },
      { title: "Visa Processing" },
      { title: "Government Liaison & PRO" },
    ],
    callout: {
      heading: "Reduce workforce admin load",
      subheading: "Keep payroll and renewals on schedule.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Operational support cadence",
      image:
        "https://media.istockphoto.com/id/473016474/photo/emirati-doing-business.jpg?s=612x612&w=0&k=20&c=iQS3v20_p5zRkBROQMDNmGg7r9TPBmzfUbzqrmLvZ7E=",
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
        href: "/contact-us",
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
      ctas: [sharedCta],
    },
    whatWeDo: {
      eyebrow: sharedWhatWeDoEyebrow,
      heading: "Turn financial data into a practical growth plan.",
      description:
        "We provide operator-focused advisory—budgeting, KPIs, and performance insights—so you can make confident decisions and prioritise what moves the business forward. Our advisory services delve deep into your financials, offering tailored strategies for corporate structuring that optimize tax efficiency and compliance across jurisdictions. We assist with forecasting and budgeting to predict cash flows, manage expenses, and plan for expansion, while providing governance support to ensure audit readiness and internal controls. For cross-border operations, we navigate complex international regulations, helping you align your UAE entity with global standards. With our expert guidance, you gain actionable insights that drive profitability, mitigate risks, and position your business for sustainable growth in a competitive landscape.",
      image: sharedWhatWeDoImage,
    },
    overview: {
      eyebrow: "Overview",
      heading: "Advisory that stays practical",
      paragraphs: [
        "When revenue grows, the cost of a weak structure grows too—banking, tax, compliance, and operational complexity all compound.",
        "We support entity planning, forecasting, and budget controls so decisions are backed by numbers.",
        "For cross-border operations, we help you understand how choices impact compliance and reporting.",
      ],
    },
    atAGlance: [
      { label: "Turnaround", value: "As needed" },
      { label: "Coverage", value: "End-to-end" },
      { label: "Reporting", value: "Clear & timely" },
      { label: "Compliance", value: "Audit-ready" },
    ],
    howWeWork: {
      heading: "How we work",
      description:
        "Clear milestones, shared checklists, and proactive updates—so you always know what's next.",
    },
    servicesIntro: {
      eyebrow: "Sub-services",
      heading: "Advisory capabilities",
      supporting:
        "Planning, modelling, and governance support for growing teams.",
    },
    services: [
      { title: "Corporate Structuring" },
      { title: "Forecasting & Budgeting" },
      { title: "Cross-border Advisory" },
      { title: "Governance & Audit Preparation" },
    ],
    callout: {
      heading: "Make decisions with confidence",
      subheading: "Turn numbers into an actionable plan.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Advisory engagement",
      image: "https://www.grovy.ae/wp-content/uploads/2025/02/2151328531.jpg",
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
        href: "/contact-us",
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
