export type ServiceSlug =
  | "business-consulting"
  | "accounting"
  | "tax"
  | "audit"
  | "marketing-sales-retention"
  | "operations-management"
  | "talent-acquisition";

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
  services: { title: string; description: string }[];
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
  label: "Book A Free Strategy Call",
  href: "https://execor.vamtam.com/free-consultation/",
};

const sharedMembershipsLabel = "We are a proud member of the:";
const sharedMemberships = [
  "Association of Accredited Small Business Consultants",
  "A+ rated Member with the BBB of Arkansas",
];

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
  "business-consulting": {
    slug: "business-consulting",
    label: "Business Consulting",
    breadcrumb: sharedBreadcrumb("Business Consulting"),
    hero: {
      eyebrow: "Services",
      title: "Business Consulting",
      summary:
        "Business consultants guide companies on overcoming challenges and seizing opportunities to drive growth and efficiency.",
      description:
        "We research and deeply understand every client's business, ask the right questions, and build custom playbooks that balance capacity, budget, competition, and long-term goals.",
      ctas: [sharedCta],
    },
    membershipsLabel: sharedMembershipsLabel,
    memberships: sharedMemberships,
    overview: {
      eyebrow: "What We Do",
      heading: "Comprehensive Consulting Solutions",
      paragraphs: [
        "Business consultants guide and advise organizations on overcoming challenges and capitalizing on opportunities. We invest the time to understand how you operate today, listening before prescribing.",
        "There is no one-size-fits-all answer. We evaluate capacity, budgets, competition, and growth goals to tailor every plan, targeting quick wins first and then building a sustainable scaling roadmap.",
        "Unlike traditional firms, we stay involved through execution so the strategy we craft actually ships and sticks inside your business.",
      ],
    },
    servicesIntro: {
      eyebrow: "Services Offered",
      heading: "Our Consulting and Coaching Services",
      supporting:
        "We help you achieve your goals with customized strategies, practical solutions, and hands-on execution to drive success.",
    },
    services: [
      {
        title: "Maximize Profit & Increase Operational Efficiencies",
        description:
          "Tighten processes, reduce leakage across teams, and surface the metrics that keep margins healthy.",
      },
      {
        title: "Business Planning, Operations, & Revenue Growth",
        description:
          "Translate vision into measurable roadmaps with aligned revenue, product, and operating plans.",
      },
      {
        title: "Marketing, Sales, Retention, & Customer Experience",
        description:
          "Unify full-funnel programs so prospects hear a single story from first touch through renewal.",
      },
      {
        title: "Sales & Customer Service Training",
        description:
          "Enable your frontline teams with playbooks, coaching, and accountability rhythms that stick.",
      },
      {
        title: "Recruiting, Staffing, & Culture",
        description:
          "Build teams faster with structured hiring, onboarding, and culture rituals that attract top talent.",
      },
      {
        title: "Processes & Workflows",
        description:
          "Document, automate, and optimize workflows so work moves faster with fewer escalations.",
      },
    ],
    callout: {
      heading: "Call Us Today to Schedule a Free Consultation",
      subheading: "Let's map your next move together.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Business Consulting Process",
      description:
        "We serve Northwest Arkansas, the entire state, and clients nationwide through a blend of in-person sessions, workshops, video calls, and async check-ins.",
      steps: [
        {
          title: "Intro Consultation & Basic Research",
          description:
            "We learn your story, goals, and constraints while assembling baseline data.",
        },
        {
          title: "Discovery",
          description:
            "Deep competitive analysis plus stakeholder interviews highlight the real opportunities.",
        },
        {
          title: "Build Plan",
          description:
            "We co-create a prioritised roadmap with clear owners, budgets, and milestones.",
        },
        {
          title: "Execute",
          description:
            "Our team stays in the trenches to launch, test, and optimize every initiative.",
        },
      ],
    },
    expertise: {
      eyebrow: "Expertise",
      heading: "Industry-seasoned consultants on your side",
      body: "Our team blends marketing, revenue, and operational leaders with experience across multiple industries. We stay close to platform shifts and best practices so you get pragmatic recommendations, not theory.",
      cta: {
        label: "Meet the Team",
        href: "https://execor.vamtam.com/about/team/",
      },
    },
    relatedServices: [
      {
        label: "Marketing, Sales, & Retention",
        href: "/services/marketing-sales-retention",
      },
      {
        label: "Operations Management",
        href: "/services/operations-management",
      },
      {
        label: "Talent Acquisition",
        href: "/services/talent-acquisition",
      },
    ],
    newsletter: sharedNewsletter,
    meta: {
      title: "Business Consulting Services | A2Z Accounting",
      description:
        "Strategic business consulting that blends planning, operations, revenue growth, and execution support for ambitious teams.",
    },
  },
  accounting: {
    slug: "accounting",
    label: "Accounting Services",
    breadcrumb: sharedBreadcrumb("Accounting Services"),
    hero: {
      eyebrow: "Services",
      title: "Accounting Services",
      summary:
        "Fractional controllers keep your books accurate and close every month without adding headcount.",
      description:
        "From day-to-day bookkeeping to board-ready reporting, our accounting pod plugs into your stack, modernizes workflows, and gives leadership the confidence to make faster decisions.",
      ctas: [sharedCta],
    },
    membershipsLabel: sharedMembershipsLabel,
    memberships: sharedMemberships,
    overview: {
      eyebrow: "What We Do",
      heading: "Hands-on accounting support",
      paragraphs: [
        "We build a durable close process tailored to your systems and team capacity. You get reconciliations, variance analysis, and narratives that finance and operators can both trust.",
        "Whether you run QuickBooks, NetSuite, or spreadsheets, we clean up the chart of accounts, document procedures, and automate the repetitive work.",
        "You stay audit ready year-round while we monitor cash, forecast scenarios, and flag risks before they become emergencies.",
      ],
    },
    servicesIntro: {
      eyebrow: "Services Offered",
      heading: "Accounting capabilities",
      supporting:
        "Mix and match support from daily transaction processing through CFO-level insights.",
    },
    services: [
      {
        title: "Monthly Close & Reporting",
        description:
          "Timely reconciliations, accruals, and commentary that keep leadership in the loop.",
      },
      {
        title: "Accounts Payable Automation",
        description:
          "Digitize approvals, eliminate duplicates, and negotiate better vendor terms.",
      },
      {
        title: "Payroll & Employee Expense Management",
        description:
          "Coordinate payroll runs, tax deposits, and policies across locations.",
      },
      {
        title: "Financial Systems Cleanup",
        description:
          "Optimize your GL, map integrations, and document workflows for scale.",
      },
    ],
    callout: {
      heading: "Handle month-end without stress",
      subheading: "Let our accounting pod own the checklist and deliverables.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Accounting engagement cadence",
      description:
        "We embed alongside your internal team, using secure remote access and recurring reviews to keep data flowing.",
      steps: [
        {
          title: "Discovery & System Walkthrough",
          description:
            "Understand tools, policies, and bottlenecks across finance and operations.",
        },
        {
          title: "Close Blueprint",
          description:
            "Document owners, timelines, and KPIs for each key accounting cycle.",
        },
        {
          title: "Execution",
          description:
            "Run the close, produce reports, and iterate on automations every month.",
        },
        {
          title: "Strategic Reviews",
          description:
            "Quarterly sessions turn insights into budget adjustments and forecasts.",
        },
      ],
    },
    expertise: {
      eyebrow: "Expertise",
      heading: "Controllers, analysts, and systems pros",
      body: "Our accounting bench includes CPAs and industry specialists who have scaled finance teams for SaaS, retail, and professional services firms.",
      cta: {
        label: "Meet the Team",
        href: "https://execor.vamtam.com/about/team/",
      },
    },
    relatedServices: [
      { label: "Tax Consulting", href: "/services/tax" },
      { label: "Audit Services", href: "/services/audit" },
      { label: "Business Consulting", href: "/services/business-consulting" },
    ],
    newsletter: sharedNewsletter,
    meta: {
      title: "Accounting Services | A2Z Accounting",
      description:
        "Outsourced accounting, monthly close support, and reporting for growing companies.",
    },
  },
  tax: {
    slug: "tax",
    label: "Tax Consulting",
    breadcrumb: sharedBreadcrumb("Tax Consulting"),
    hero: {
      eyebrow: "Services",
      title: "Tax Consulting",
      summary:
        "Stay ahead of filings, incentives, and regulatory updates without hiring an internal tax department.",
      description:
        "We orchestrate compliance calendars, model liabilities, and translate complex rules into human language so your team can focus on growth.",
      ctas: [sharedCta],
    },
    membershipsLabel: sharedMembershipsLabel,
    memberships: sharedMemberships,
    overview: {
      eyebrow: "What We Do",
      heading: "Year-round tax intelligence",
      paragraphs: [
        "Proactive planning keeps surprises out of cash flow. We monitor legislative shifts and advise on entity structure, credits, and apportionment.",
        "Our team coordinates with your accounting pod and auditors to ensure documentation is consistent and defensible.",
        "We also build education tracks so founders and department heads know what decisions impact taxes before they act.",
      ],
    },
    servicesIntro: {
      eyebrow: "Services Offered",
      heading: "Tax support built for operators",
      supporting:
        "Compliance meets strategy with research memos, calendar management, and representation.",
    },
    services: [
      {
        title: "Corporate & Pass-through Tax Planning",
        description:
          "Model quarterly estimates, entity elections, and distribution strategies.",
      },
      {
        title: "Sales & Use Tax Monitoring",
        description:
          "Track nexus, file multi-state returns, and document exemption certificates.",
      },
      {
        title: "Credits & Incentives",
        description:
          "Surface R&D, jobs, and investment credits with airtight substantiation.",
      },
      {
        title: "Exam & Notice Response",
        description:
          "Manage correspondence and keep regulators focused on facts, not assumptions.",
      },
    ],
    callout: {
      heading: "Never miss a deadline again",
      subheading: "We run the calendar and keep you compliant.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Tax engagement flow",
      description:
        "We combine recurring reviews with rapid research sprints whenever laws shift.",
      steps: [
        {
          title: "Assessment",
          description:
            "Collect prior filings, ownership info, and open notices to baseline risk.",
        },
        {
          title: "Planning",
          description:
            "Deliver strategy memos with elections, entity tweaks, and cash impact.",
        },
        {
          title: "Compliance",
          description:
            "Prepare and file returns, coordinate signatures, and archive support.",
        },
        {
          title: "Review & Advisory",
          description:
            "Quarterly sessions highlight new legislation and savings opportunities.",
        },
      ],
    },
    expertise: {
      eyebrow: "Expertise",
      heading: "Tax strategists on speed dial",
      body: "Former Big Four managers and seasoned state and local tax specialists translate regulation into practical playbooks.",
      cta: {
        label: "Meet the Team",
        href: "https://execor.vamtam.com/about/team/",
      },
    },
    relatedServices: [
      { label: "Accounting Services", href: "/services/accounting" },
      { label: "Audit Services", href: "/services/audit" },
      { label: "Business Consulting", href: "/services/business-consulting" },
    ],
    newsletter: sharedNewsletter,
    meta: {
      title: "Tax Consulting Services | A2Z Accounting",
      description:
        "Tax planning, multi-state compliance, and audit defense for ambitious companies.",
    },
  },
  audit: {
    slug: "audit",
    label: "Audit Services",
    breadcrumb: sharedBreadcrumb("Audit Services"),
    hero: {
      eyebrow: "Services",
      title: "Audit Services",
      summary:
        "Be audit-ready year-round with documentation, internal controls, and testing handled for you.",
      description:
        "We partner with your external auditors, prep schedules, and run mock walkthroughs so the real engagement moves quickly and confidently.",
      ctas: [sharedCta],
    },
    membershipsLabel: sharedMembershipsLabel,
    memberships: sharedMemberships,
    overview: {
      eyebrow: "What We Do",
      heading: "Controls and compliance",
      paragraphs: [
        "Audit prep shouldn't derail operations. We maintain PBC lists, refresh policies, and keep tie-outs clean.",
        "Whether you need a review, compilation, or full GAAS audit, our team coordinates with auditors so requests arrive organized.",
        "We also coach stakeholders on how to answer auditor questions succinctly and with confidence.",
      ],
    },
    servicesIntro: {
      eyebrow: "Services Offered",
      heading: "Audit readiness stack",
      supporting:
        "Documentation, controls testing, and remediation handled by veterans of public accounting.",
    },
    services: [
      {
        title: "Internal Controls Review",
        description:
          "Map key processes, identify gaps, and draft control narratives and matrices.",
      },
      {
        title: "PBC Coordination",
        description:
          "Own the audit request list, gather evidence, and manage status updates.",
      },
      {
        title: "Technical Accounting Support",
        description:
          "Draft memos for revenue recognition, leases, and other complex areas.",
      },
      {
        title: "Remediation & Training",
        description:
          "Close noted deficiencies with pragmatic SOPs and team workshops.",
      },
    ],
    callout: {
      heading: "Be audit ready before the auditors arrive",
      subheading:
        "We quarterback every request so you stay focused on customers.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Audit support cadence",
      description:
        "Structured sprints keep evidence fresh and communication clear with your external firm.",
      steps: [
        {
          title: "Planning & Risk Assessment",
          description:
            "Review prior findings, key controls, and reporting deadlines.",
        },
        {
          title: "Documentation",
          description:
            "Update narratives, walkthroughs, and schedules aligned to auditor formats.",
        },
        {
          title: "Testing",
          description:
            "Perform sample selections and compile support before auditors request it.",
        },
        {
          title: "Closeout & Lessons Learned",
          description:
            "Summarize adjustments, update SOPs, and plan for the next period.",
        },
      ],
    },
    expertise: {
      eyebrow: "Expertise",
      heading: "Former external auditors on your team",
      body: "We know how firms operate, which keeps engagements efficient and collegial.",
      cta: {
        label: "Meet the Team",
        href: "https://execor.vamtam.com/about/team/",
      },
    },
    relatedServices: [
      { label: "Accounting Services", href: "/services/accounting" },
      { label: "Tax Consulting", href: "/services/tax" },
      {
        label: "Operations Management",
        href: "/services/operations-management",
      },
    ],
    newsletter: sharedNewsletter,
    meta: {
      title: "Audit Support Services | A2Z Accounting",
      description:
        "Internal controls, documentation, and coordination so audits finish faster.",
    },
  },
  "marketing-sales-retention": {
    slug: "marketing-sales-retention",
    label: "Marketing, Sales, & Retention",
    breadcrumb: sharedBreadcrumb("Marketing, Sales, & Retention"),
    hero: {
      eyebrow: "Services",
      title: "Marketing, Sales, & Retention",
      summary:
        "Bring revenue, creative, and customer experience into one operating rhythm.",
      description:
        "We tighten positioning, align handoffs, and stand up retention programs so every stage of the funnel compounds.",
      ctas: [sharedCta],
    },
    membershipsLabel: sharedMembershipsLabel,
    memberships: sharedMemberships,
    overview: {
      eyebrow: "What We Do",
      heading: "Full-funnel GTM leadership",
      paragraphs: [
        "Teams need clarity on ICPs, offers, and measurement. We facilitate workshops, build playbooks, and embed fractional leaders until hiring is right.",
        "Campaigns are launched with clear metrics and enablement for sales and success teams.",
        "Revenue leaders get dashboards that combine marketing spend, pipeline health, and retention signals in one place.",
      ],
    },
    servicesIntro: {
      eyebrow: "Services Offered",
      heading: "Revenue program building",
      supporting:
        "Strategy, execution pods, and analytics to keep pipeline predictable.",
    },
    services: [
      {
        title: "Positioning & Message Architecture",
        description: "Clarify value props across website, decks, and outreach.",
      },
      {
        title: "Campaign & Offer Development",
        description:
          "Launch paid, email, event, and partner plays with creative oversight.",
      },
      {
        title: "Sales Enablement & Playbooks",
        description:
          "Arm reps with stories, talk tracks, and competitive intel.",
      },
      {
        title: "Lifecycle & Retention Programs",
        description:
          "Design onboarding, expansion, and renewal motions with CX.",
      },
    ],
    callout: {
      heading: "Unlock pipeline predictability",
      subheading: "Get a unified revenue plan in weeks, not months.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Revenue acceleration sprints",
      description:
        "Every engagement blends research, collaborative builds, and embedded execution.",
      steps: [
        {
          title: "Discovery",
          description:
            "Interview customers, review data, and map your GTM maturity.",
        },
        {
          title: "Strategy Sprint",
          description:
            "Align leadership on objectives, messaging, and measurement.",
        },
        {
          title: "Execution Pods",
          description:
            "Stand up cross-functional squads to launch and iterate campaigns.",
        },
        {
          title: "Optimization",
          description:
            "Quarterly business reviews highlight learnings and next experiments.",
        },
      ],
    },
    expertise: {
      eyebrow: "Expertise",
      heading: "Operators, not theorists",
      body: "Our marketers, sellers, and retention strategists have shipped programs for venture-backed and family-run companies alike.",
      cta: {
        label: "Meet the Team",
        href: "https://execor.vamtam.com/about/team/",
      },
    },
    relatedServices: [
      { label: "Business Consulting", href: "/services/business-consulting" },
      {
        label: "Operations Management",
        href: "/services/operations-management",
      },
      { label: "Talent Acquisition", href: "/services/talent-acquisition" },
    ],
    newsletter: sharedNewsletter,
    meta: {
      title: "Marketing, Sales & Retention Services | A2Z Accounting",
      description:
        "Fractional marketing and revenue leadership that ships campaigns and improves retention.",
    },
  },
  "operations-management": {
    slug: "operations-management",
    label: "Operations Management",
    breadcrumb: sharedBreadcrumb("Operations Management"),
    hero: {
      eyebrow: "Services",
      title: "Operations Management",
      summary:
        "Turn messy processes into scalable operating systems across every department.",
      description:
        "We diagnose bottlenecks, implement tooling, and coach managers so execution feels calm even when growth spikes.",
      ctas: [sharedCta],
    },
    membershipsLabel: sharedMembershipsLabel,
    memberships: sharedMemberships,
    overview: {
      eyebrow: "What We Do",
      heading: "Operator-first consulting",
      paragraphs: [
        "We map your critical journeys, from lead to cash to service delivery, then design playbooks that keep teams aligned.",
        "Leaders get visibility into KPIs, while ICs know exactly how to win every week.",
        "Change management support ensures new behavior sticks long after we roll off.",
      ],
    },
    servicesIntro: {
      eyebrow: "Services Offered",
      heading: "Operational upgrades",
      supporting:
        "Process design, tooling, and enablement tailored to your stage.",
    },
    services: [
      {
        title: "Workflow Mapping & SOPs",
        description:
          "Visualize every step, identify friction, and codify the best way to work.",
      },
      {
        title: "Systems & Tooling Advisory",
        description:
          "Select, configure, and integrate platforms that teams actually adopt.",
      },
      {
        title: "Capacity & Resource Planning",
        description:
          "Match demand with supply using scenario models and hiring triggers.",
      },
      {
        title: "Change Management Enablement",
        description:
          "Rolling communications, training, and reinforcement loops.",
      },
    ],
    callout: {
      heading: "Turn chaos into clarity",
      subheading: "Give your team the guardrails they crave.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Operational excellence roadmap",
      description:
        "We combine onsite sessions with async documentation so improvements land quickly.",
      steps: [
        {
          title: "Diagnostics",
          description:
            "Shadow teams, pull metrics, and identify the top friction points.",
        },
        {
          title: "Design",
          description:
            "Prototype new workflows, governance, and KPI dashboards.",
        },
        {
          title: "Enable",
          description:
            "Train managers, launch pilots, and collect feedback fast.",
        },
        {
          title: "Scale",
          description:
            "Institutionalize wins with documentation and ownership transfers.",
        },
      ],
    },
    expertise: {
      eyebrow: "Expertise",
      heading: "Operators who have scaled before",
      body: "COO advisors, project managers, and RevOps pros help you execute without the burnout.",
      cta: {
        label: "Meet the Team",
        href: "https://execor.vamtam.com/about/team/",
      },
    },
    relatedServices: [
      { label: "Business Consulting", href: "/services/business-consulting" },
      {
        label: "Marketing, Sales, & Retention",
        href: "/services/marketing-sales-retention",
      },
      { label: "Talent Acquisition", href: "/services/talent-acquisition" },
    ],
    newsletter: sharedNewsletter,
    meta: {
      title: "Operations Management Consulting | A2Z Accounting",
      description:
        "Process design, tooling, and enablement support for growing operators.",
    },
  },
  "talent-acquisition": {
    slug: "talent-acquisition",
    label: "Talent Acquisition",
    breadcrumb: sharedBreadcrumb("Talent Acquisition"),
    hero: {
      eyebrow: "Services",
      title: "Talent Acquisition",
      summary:
        "Recruit with confidence using structured scorecards, sourcing campaigns, and onboarding playbooks.",
      description:
        "We align leadership on hiring plans, write compelling job narratives, and run coordinated candidate experiences that protect your brand.",
      ctas: [sharedCta],
    },
    membershipsLabel: sharedMembershipsLabel,
    memberships: sharedMemberships,
    overview: {
      eyebrow: "What We Do",
      heading: "People programs that scale",
      paragraphs: [
        "We act as your embedded talent team—calibrating roles, building pipelines, and ensuring compensation and benefits stay competitive.",
        "Hiring managers gain clarity on process while candidates enjoy responsive communication.",
        "Once someone signs, we ensure onboarding and early enablement drive retention.",
      ],
    },
    servicesIntro: {
      eyebrow: "Services Offered",
      heading: "Talent acquisition toolkit",
      supporting:
        "Everything from workforce planning to recruiting operations.",
    },
    services: [
      {
        title: "Workforce Planning & Scorecards",
        description:
          "Define roles, success metrics, and interview panels before posting.",
      },
      {
        title: "Sourcing & Employer Branding",
        description:
          "Multi-channel outreach, campaigns, and brand assets that attract the right people.",
      },
      {
        title: "Interview Enablement",
        description:
          "Training, guides, and structured feedback loops that reduce bias.",
      },
      {
        title: "Onboarding & Retention",
        description:
          "Launch cohorts, buddy systems, and 30/60/90 plans to help new hires thrive.",
      },
    ],
    callout: {
      heading: "Recruit with confidence",
      subheading:
        "We fill critical roles while your team keeps serving customers.",
      cta: sharedCta,
    },
    process: {
      eyebrow: "Our Process",
      heading: "Talent acquisition partnership",
      description:
        "Clear stages keep stakeholders aligned from intake to signed offer.",
      steps: [
        {
          title: "Role Calibration",
          description:
            "Align on goals, competencies, and compensation for each search.",
        },
        {
          title: "Sourcing",
          description:
            "Activate networks, campaigns, and referrals with daily status sharing.",
        },
        {
          title: "Selection",
          description:
            "Coordinate interviews, prep panels, and capture decision data.",
        },
        {
          title: "Onboard",
          description:
            "Deliver start-day plans, benefits briefings, and retention checkpoints.",
        },
      ],
    },
    expertise: {
      eyebrow: "Expertise",
      heading: "Recruiters, HR leaders, and coaches",
      body: "We have staffed hyper-growth startups and multi-location service brands, so we know how to balance speed with quality.",
      cta: {
        label: "Meet the Team",
        href: "https://execor.vamtam.com/about/team/",
      },
    },
    relatedServices: [
      {
        label: "Operations Management",
        href: "/services/operations-management",
      },
      { label: "Business Consulting", href: "/services/business-consulting" },
      {
        label: "Marketing, Sales, & Retention",
        href: "/services/marketing-sales-retention",
      },
    ],
    newsletter: sharedNewsletter,
    meta: {
      title: "Talent Acquisition Services | A2Z Accounting",
      description:
        "Recruiting strategy, sourcing, and onboarding support for growing teams.",
    },
  },
};

export const serviceSlugs = Object.keys(servicesContent) as ServiceSlug[];

export const getServiceContent = (
  slug: string
): ServicePageContent | undefined => servicesContent[slug as ServiceSlug];
