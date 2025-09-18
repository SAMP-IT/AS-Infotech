import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  type LucideIcon,
  BarChart3,
  Globe,
  LineChart,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

type WorkResult = {
  label: string;
  value: string;
};

type WorkItem = {
  title: string;
  client: string;
  description: string;
  highlights: string[];
  results: WorkResult[];
  thumbnail: {
    label: string;
    gradient: string;
  };
  icon: LucideIcon;
  details: {
    summary: string;
    challenge: string;
    approach: string[];
    deliverables: string[];
    stack: string[];
    team: string[];
    timeline: string;
    outcome: string;
  };
};

const categories = [
  { id: "seo", label: "SEO" },
  { id: "website", label: "Website" },
  { id: "mobile", label: "Mobile App" },
] as const;

type Category = (typeof categories)[number]["id"];

type SelectedCase = {
  category: Category;
  work: WorkItem;
};

const worksByCategory: Record<Category, WorkItem[]> = {
  seo: [
    {
      title: "Local Retail Expansion",
      client: "Madras Looms",
      description:
        "Boosted organic visibility for a regional retailer, helping stores dominate location-based searches and drive high-intent foot traffic.",
      highlights: ["Hyperlocal keyword mapping", "Listings refresh", "Reputation playbook"],
      results: [
        { label: "Organic sessions", value: "+120%" },
        { label: "Store visits", value: "+74%" },
        { label: "Keywords on page 1", value: "18" },
      ],
      thumbnail: {
        label: "Retail",
        gradient: "from-consultancy-blue/40 via-sky-500/20 to-transparent",
      },
      icon: TrendingUp,
      details: {
        summary:
          "Modernised local discovery for a heritage textile chain across Chennai and Coimbatore with unified location messaging and faster landing pages.",
        challenge:
          "Neighbourhood stores were slipping off the map pack after competitor chains launched aggressive coupon pushes, cutting weekend walk-ins by 22%.",
        approach: [
          "Conducted on-ground keyword interviews to map colloquial search phrases shoppers actually use.",
          "Rebuilt Google Business Profile content with vernacular highlights and seasonal collections.",
          "Automated review responses and UTM tagging so the team could track offline conversions in Analytics.",
        ],
        deliverables: [
          "Hyperlocal keyword matrix",
          "Location landing templates",
          "Review response library",
          "Looker Studio footfall dashboard",
        ],
        stack: [
          "Google Business Profile",
          "Ahrefs",
          "Google Search Console",
          "Looker Studio",
        ],
        team: ["SEO Strategist", "Copy Partner", "Analytics Lead"],
        timeline: "12 weeks",
        outcome:
          "Madras Looms regained top-3 visibility in every priority locality and doubled festive season walk-ins without discounting margins.",
      },
    },
    {
      title: "SaaS Demand Engine",
      client: "Kovai CRM",
      description:
        "Designed a content-led SEO roadmap that attracted qualified demo requests and shortened the sales cycle for a B2B SaaS platform.",
      highlights: ["Topic clusters", "Product-led stories", "Conversion copy"],
      results: [
        { label: "Demo pipeline", value: "+42%" },
        { label: "Blog engagement", value: "6x" },
        { label: "Lead quality score", value: "+18" },
      ],
      thumbnail: {
        label: "B2B SaaS",
        gradient: "from-purple-500/40 via-consultancy-blue/20 to-transparent",
      },
      icon: LineChart,
      details: {
        summary:
          "Energised inbound demand for a Coimbatore SaaS team by pairing solution stories with conversion-focused nurture assets.",
        challenge:
          "The team relied heavily on SDR outreach while the content hub drew high bounce rates and almost no demo-ready leads.",
        approach: [
          "Clustered bottom-funnel topics around CRM migration pain points collected from the sales desk.",
          "Deployed interactive ROI calculators and in-product tour snippets to shorten evaluation time.",
          "Retooled nurture emails with data-backed social proof from Tamil Nadu customers.",
        ],
        deliverables: [
          "Quarterly content roadmap",
          "Interactive ROI tool",
          "Demo nurture sequence",
          "Sales enablement battlecards",
        ],
        stack: ["Notion", "HubSpot", "Typeform", "Google Data Studio"],
        team: ["Growth Strategist", "Product Marketer", "Lifecycle Marketer"],
        timeline: "16 weeks",
        outcome:
          "Marketing-sourced demos overtook outbound for the first time, giving Kovai CRM the confidence to scale paid pilots across South India.",
      },
    },
    {
      title: "Healthcare Authority Build",
      client: "Kaveri Care Clinics",
      description:
        "Implemented technical fixes and authority building campaigns that elevated trust metrics for a multi-location healthcare provider.",
      highlights: ["CWV overhaul", "Schema expansion", "Backlink velocity"],
      results: [
        { label: "Topical authority", value: "+63%" },
        { label: "Appointment forms", value: "+37%" },
        { label: "Page speed", value: "0.9s" },
      ],
      thumbnail: {
        label: "Healthcare",
        gradient: "from-emerald-400/40 via-teal-500/20 to-transparent",
      },
      icon: ShieldCheck,
      details: {
        summary:
          "Rebuilt trust signals for a women-led clinic network so patients researching procedures felt confident booking consultations online.",
        challenge:
          "Slow pages and thin content meant comparison sites outranked the clinics, while duplicate profiles confused appointment scheduling.",
        approach: [
          "Audited Core Web Vitals and worked with developers to lazy-load diagnostic imagery and scripts.",
          "Structured treatment pages with FAQ schema answering common Tamil-language questions.",
          "Partnered with local health bloggers and OB-GYN associations for credible backlinks and webinar tie-ups.",
        ],
        deliverables: [
          "Technical SEO playbook",
          "Procedure content templates",
          "Schema implementation guide",
          "Backlink outreach kit",
        ],
        stack: ["Screaming Frog", "PageSpeed Insights", "SurferSEO", "Airtable"],
        team: ["Technical SEO", "Medical Writer", "Partnerships Lead"],
        timeline: "14 weeks",
        outcome:
          "Kaveri Care now ranks first for priority procedures in Chennai and sees 2x more insured patients using the digital intake funnel.",
      },
    },
  ],
  website: [
    {
      title: "Fintech Product Launch",
      client: "AruviPay",
      description:
        "Crafted a conversion-focused landing experience with clear user journeys, micro-interactions, and high-trust messaging for a fintech rollout.",
      highlights: ["Design system build", "Figma to React", "Data layer ready"],
      results: [
        { label: "Signup rate", value: "+58%" },
        { label: "Time on page", value: "+2.4x" },
        { label: "Launch timeline", value: "4 weeks" },
      ],
      thumbnail: {
        label: "Fintech",
        gradient: "from-blue-500/40 via-indigo-500/20 to-transparent",
      },
      icon: Globe,
      details: {
        summary:
          "Launched a lending-lite product for MSMEs with a responsive marketing site and onboarding flow that was review-ready for RBI compliance.",
        challenge:
          "The brand needed to explain complex underwriting in plain Tamil and English without overwhelming busy shop owners.",
        approach: [
          "Mapped segmented user journeys for traders, distributors, and gig partners with tailored CTAs.",
          "Prototyped interactions in Figma and validated with 12 merchants before locking UI states.",
          "Set up analytics and consent tracking so product and compliance teams had shared visibility from day one.",
        ],
        deliverables: [
          "Component-driven design system",
          "Responsive marketing site",
          "Onboarding microcopy kit",
          "Analytics instrumentation",
        ],
        stack: ["Figma", "React", "TailwindCSS", "Segment"],
        team: ["Product Designer", "Frontend Lead", "Content Strategist"],
        timeline: "8 weeks",
        outcome:
          "AruviPay opened their waitlist with 3x the target signups and secured lender confidence with transparent risk messaging.",
      },
    },
    {
      title: "Educational Portal Refresh",
      client: "Thulir Learning",
      description:
        "Redesigned a learning hub with accessible components, modular CMS blocks, and a scalable design language for global course updates.",
      highlights: ["WCAG AA", "Headless CMS", "Role-based dashboards"],
      results: [
        { label: "Course completion", value: "+29%" },
        { label: "Bounce rate", value: "-37%" },
        { label: "Reusable modules", value: "26" },
      ],
      thumbnail: {
        label: "EdTech",
        gradient: "from-orange-400/40 via-rose-400/20 to-transparent",
      },
      icon: Rocket,
      details: {
        summary:
          "Thulir Learning’s portal now supports quarterly course launches with reusable blocks and inclusive classroom experiences.",
        challenge:
          "Legacy templates weren’t screen-reader friendly and updating syllabi required developer tickets each semester.",
        approach: [
          "Audited the portal with parents, college students, and differently abled learners to prioritise accessibility fixes.",
          "Moved to a headless CMS with role-based publishing and custom curriculum blocks.",
          "Introduced analytics on lesson drop-off to inform faculty content refresh cycles.",
        ],
        deliverables: [
          "Accessible component library",
          "Curriculum CMS schema",
          "Faculty training handbook",
          "Analytics dashboards",
        ],
        stack: ["Storyblok", "Next.js", "TailwindCSS", "Mixpanel"],
        team: ["UX Researcher", "Frontend Engineer", "Content Ops"],
        timeline: "10 weeks",
        outcome:
          "Thulir administrators publish lesson updates in minutes and have clear insight into which cohorts need intervention.",
      },
    },
    {
      title: "Hospitality Booking Suite",
      client: "Malabar Stays",
      description:
        "Delivered a fast, SEO-friendly website with integrated booking flows, personalized content states, and dynamic pricing modules.",
      highlights: ["SSR ready", "Yield management", "Personalized offers"],
      results: [
        { label: "Direct bookings", value: "+64%" },
        { label: "Page load", value: "1.2s" },
        { label: "Return visitors", value: "+38%" },
      ],
      thumbnail: {
        label: "Hospitality",
        gradient: "from-amber-400/40 via-pink-500/20 to-transparent",
      },
      icon: BarChart3,
      details: {
        summary:
          "Replatformed the boutique stay collective’s website with integrated booking and upsell journeys tuned for coastal getaways.",
        challenge:
          "OTA commissions were eating profitability and guests couldn’t visualise room categories across properties.",
        approach: [
          "Centralised inventory with dynamic pricing hooks tied to weekend demand and monsoon occupancy.",
          "Shot and embedded lightweight 360° room tours that load instantly on mobile connections.",
          "Personalised itineraries based on whether travellers flew into Calicut or drove from Bengaluru.",
        ],
        deliverables: [
          "Booking engine integration",
          "Dynamic rate management",
          "Visual asset library",
          "Experience builder",
        ],
        stack: ["Next.js", "Prismic", "Cloudinary", "RevenueIQ"],
        team: ["UX Lead", "Fullstack Engineer", "Photographer"],
        timeline: "9 weeks",
        outcome:
          "Malabar Stays tripled direct bookings during the Onam quarter and reduced OTA dependence to below 35%.",
      },
    },
  ],
  mobile: [
    {
      title: "On-demand Services App",
      client: "Namma Taskers",
      description:
        "Developed a cross-platform app with streamlined onboarding, real-time tracking, and secure payments for a gig marketplace.",
      highlights: ["Flutter build", "Realtime ops", "Secure wallet"],
      results: [
        { label: "Weekly active users", value: "+87%" },
        { label: "Order completion", value: "+33%" },
        { label: "Release cadence", value: "Bi-weekly" },
      ],
      thumbnail: {
        label: "Marketplace",
        gradient: "from-fuchsia-500/40 via-purple-500/20 to-transparent",
      },
      icon: MonitorSmartphone,
      details: {
        summary:
          "Connected verified service partners across Chennai neighborhoods to homeowners with a lightweight mobile experience.",
        challenge:
          "Paper-based onboarding and manual job coordination limited daily bookings and delayed payouts to partners.",
        approach: [
          "Digitised KYC with Aadhaar OCR and multilingual prompts.",
          "Implemented slot-based scheduling and in-app chat to limit calls to the operations desk.",
          "Built a secure wallet supporting UPI payouts twice a day for top performers.",
        ],
        deliverables: [
          "Cross-platform mobile app",
          "Partner onboarding flow",
          "Dispatch operations console",
          "Wallet and payouts module",
        ],
        stack: ["Flutter", "Firebase", "Node.js", "RazorpayX"],
        team: ["Product Manager", "Mobile Lead", "Ops Analyst"],
        timeline: "12 weeks",
        outcome:
          "Namma Taskers scaled to 2,000 verified pros and hit 96% on-time job completion within the first quarter post-launch.",
      },
    },
    {
      title: "Wellness Companion",
      client: "Sundaram Wellness",
      description:
        "Shipped a habit-forming wellness application with streak analytics, push campaigns, and offline-first journaling for daily mindfulness.",
      highlights: ["Offline sync", "Push automation", "Gamified streaks"],
      results: [
        { label: "Day 30 retention", value: "+46%" },
        { label: "Session frequency", value: "3.8x" },
        { label: "CSAT", value: "4.8/5" },
      ],
      thumbnail: {
        label: "Wellness",
        gradient: "from-emerald-500/40 via-cyan-500/20 to-transparent",
      },
      icon: Sparkles,
      details: {
        summary:
          "A bilingual habit coach helping professionals in Bengaluru and Chennai track wellbeing micro-goals alongside nutritionist guidance.",
        challenge:
          "Users disengaged after onboarding because the previous app offered generic tips and required stable connectivity.",
        approach: [
          "Introduced vernacular audio journeys and daily rituals triggered by calendar context.",
          "Added lightweight offline journaling that syncs automatically when data returns.",
          "Segmented push campaigns by stress indicators captured in weekly check-ins.",
        ],
        deliverables: [
          "Gamified habit loops",
          "Content localisation kit",
          "Offline journal engine",
          "Lifecycle automation",
        ],
        stack: ["React Native", "Redux Toolkit", "SQLite", "OneSignal"],
        team: ["Product Coach", "Mobile Engineer", "Content Therapist"],
        timeline: "14 weeks",
        outcome:
          "Sundaram Wellness now retains half of new cohorts beyond 90 days with glowing app store feedback from metropolitan users.",
      },
    },
    {
      title: "Retail Loyalty Platform",
      client: "Marina Rewards",
      description:
        "Rolled out a loyalty app that syncs with POS systems, serves dynamic offers, and rewards repeat purchases across franchises.",
      highlights: ["POS integration", "Dynamic rewards", "Customer insights"],
      results: [
        { label: "Repeat orders", value: "+51%" },
        { label: "Offer redemptions", value: "+62%" },
        { label: "Avg. order value", value: "+23%" },
      ],
      thumbnail: {
        label: "Retail Tech",
        gradient: "from-sky-500/40 via-consultancy-blue/20 to-transparent",
      },
      icon: ShieldCheck,
      details: {
        summary:
          "Unified loyalty for a chain of quick-service outlets along Chennai’s coastline with dynamic offers tied to tide-time footfall.",
        challenge:
          "Each franchise ran disparate stamp cards with no insight into multi-location customers or menu preferences.",
        approach: [
          "Integrated POS data streams to build a 360° customer view across outlets.",
          "Created geo-fenced offers that trigger when regulars are near Marina Beach promenades.",
          "Enabled franchise managers to launch campaigns in Tamil with guardrails around discount margins.",
        ],
        deliverables: [
          "Unified loyalty platform",
          "Offer recommendation engine",
          "Franchise campaign console",
          "Customer insights lake",
        ],
        stack: ["React Native", "NestJS", "PostgreSQL", "AWS Pinpoint"],
        team: ["Solution Architect", "Mobile Engineer", "Data Analyst"],
        timeline: "15 weeks",
        outcome:
          "Marina Rewards now powers hyperlocal offers that guests actually redeem while giving HQ SKU-level intelligence on repeat buyers.",
      },
    },
  ],
};

const statHighlights = [
  {
    value: "8x",
    label: "Average ROI",
    description: "Across growth engagements in 2024",
  },
  {
    value: "42",
    label: "Launches shipped",
    description: "From discovery sprint to go-live",
  },
  {
    value: "96%",
    label: "Client retention",
    description: "Ongoing partnerships beyond handoff",
  },
];

const testimonial = {
  quote:
    "They bring clarity, pace, and polish. Every launch felt like an in-house team that already knew our product playbook.",
  author: "Meera Subramanian",
  role: "Head of Growth · AruviPay",
};

const partnerLogos = [
  "AruviPay",
  "Thulir Learning",
  "Kaveri Care",
  "Madras Looms",
  "Namma Taskers",
  "Malabar Stays",
];

const WorksShowcaseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<Category>("seo");
  const [selectedCase, setSelectedCase] = React.useState<SelectedCase | null>(null);

  const handleCaseOpen = React.useCallback((category: Category, work: WorkItem) => {
    setSelectedCase({ category, work });
  }, []);

  const handleCaseClose = React.useCallback(() => {
    setSelectedCase(null);
  }, []);

  const activeLabel = React.useMemo(
    () => categories.find((category) => category.id === activeCategory)?.label ?? "",
    [activeCategory]
  );

  const selectedCategoryLabel = React.useMemo(
    () =>
      selectedCase
        ? categories.find((category) => category.id === selectedCase.category)?.label ?? ""
        : "",
    [selectedCase]
  );

  const selectedWork = selectedCase?.work;
  const selectedDetails = selectedWork?.details;

  return (
    <section id="works" className="section-padding bg-consultancy-darkgray/40">
      <div className="container mx-auto">
        <div className="mb-12 space-y-4 text-center md:mb-16">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Selected Work
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">Showcase of Our Work</h2>
          <p className="mx-auto max-w-3xl text-consultancy-lightgray">
            Explore the playbooks we use to launch growth campaigns, ship robust products, and keep teams moving fast with confidence.
          </p>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <div className="glass-card flex flex-col gap-6 p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {statHighlights.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/70">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xs text-white/60">{stat.description}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left">
              <Sparkles className="h-6 w-6 text-consultancy-blue" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                  Growth enablement retainer
                </p>
                <p className="text-sm text-white/60">
                  Managed sprints, co-created playbooks, and handed over repeatable ops to client teams.
                </p>
              </div>
            </div>
          </div>
          <div className="glass-card flex flex-col justify-between gap-4 p-6">
            <Sparkles className="h-8 w-8 text-consultancy-blue" />
            <blockquote className="text-left text-lg leading-relaxed text-white/90">
              “{testimonial.quote}”
            </blockquote>
            <div className="text-sm font-semibold text-white/70">
              {testimonial.author}
              <span className="block text-xs font-normal uppercase tracking-wide text-white/60">
                {testimonial.role}
              </span>
            </div>
          </div>
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={(value) => setActiveCategory(value as Category)}
          className="w-full"
        >
          <TabsList className="!flex w-full flex-wrap justify-center gap-3 bg-transparent p-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10 data-[state=active]:border-consultancy-blue/70 data-[state=active]:bg-consultancy-blue data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-consultancy-blue/40"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/40" aria-live="polite">
            Viewing {activeLabel} projects
          </p>

          {categories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-10 animate-fade-in-up"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {worksByCategory[category.id].map((work) => {
                  const Icon = work.icon;

                  return (
                    <Card
                      key={category.id + "-" + work.title}
                      className="glass-card border-0 flex h-full flex-col overflow-hidden"
                    >
                      <CardHeader className="space-y-4 pb-0">
                        <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                          <span>Client</span>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">
                            {work.client}
                          </span>
                        </div>
                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
                          <div className={cn("absolute inset-0 bg-gradient-to-br blur-0", work.thumbnail.gradient)}></div>
                          <div className="relative flex items-center justify-between px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="rounded-full border border-white/20 bg-white/10 p-3">
                                <Icon className="h-6 w-6 text-white" />
                              </div>
                              <span className="text-sm font-medium text-white/80">
                                {work.thumbnail.label}
                              </span>
                            </div>
                            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                              {category.label}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-xl font-semibold text-white">
                          {work.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-1 flex-col gap-6 p-6 pt-6">
                        <p className="text-sm leading-relaxed text-white/70">
                          {work.description}
                        </p>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {work.results.map((result) => (
                            <div
                              key={result.label}
                              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                            >
                              <p className="text-lg font-semibold text-white">
                                {result.value}
                              </p>
                              <p className="text-xs font-medium uppercase tracking-wide text-white/60">
                                {result.label}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {work.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/70"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="ghost"
                          className="mt-auto w-fit px-0 text-sm font-semibold text-consultancy-lightgray hover:bg-transparent hover:text-white"
                          onClick={() => handleCaseOpen(category.id, work)}
                        >
                          View full story →
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 text-center">
          {partnerLogos.map((logo) => (
            <span
              key={logo}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
      <Dialog
        open={Boolean(selectedCase)}
        onOpenChange={(open) => {
          if (!open) {
            handleCaseClose();
          }
        }}
      >
        <DialogContent className="max-w-3xl overflow-hidden border border-white/10 bg-consultancy-charcoal text-white p-0 sm:rounded-3xl">
          {selectedWork && selectedDetails ? (
            <div className="flex max-h-[80vh] flex-col">
              <div className="relative overflow-hidden border-b border-white/10 bg-white/5">
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-80",
                    selectedWork.thumbnail.gradient
                  )}
                ></div>
                <div className="relative px-6 py-8 sm:px-10">
                  <DialogHeader className="items-start space-y-4 text-left">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-white/80">
                      <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
                        {selectedWork.client}
                      </span>
                      {selectedCategoryLabel ? (
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                          {selectedCategoryLabel}
                        </span>
                      ) : null}
                    </div>
                    <DialogTitle className="text-2xl font-semibold text-white sm:text-3xl">
                      {selectedWork.title}
                    </DialogTitle>
                    <DialogDescription className="text-sm leading-relaxed text-white/80">
                      {selectedWork.description}
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10">
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                      Project Overview
                    </h3>
                    <p className="text-base leading-relaxed text-white/80">
                      {selectedDetails.summary}
                    </p>
                  </section>
                  <section className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                        Challenge
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {selectedDetails.challenge}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                        Outcome
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {selectedDetails.outcome}
                      </p>
                    </div>
                  </section>
                  <section className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                      Key Metrics
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {selectedWork.results.map((result) => (
                        <div
                          key={result.label}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center"
                        >
                          <p className="text-xl font-semibold text-white">{result.value}</p>
                          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-white/60">
                            {result.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                        Approach
                      </h3>
                      <ul className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
                        {selectedDetails.approach.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-consultancy-blue"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                        Deliverables
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedDetails.deliverables.map((deliverable) => (
                          <span
                            key={deliverable}
                            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>
                  <section className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                        Tools & Stack
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedDetails.stack.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                        Team & Timeline
                      </h3>
                      <div className="mt-3 space-y-2 text-sm text-white/70">
                        <p>
                          <span className="font-semibold text-white">Timeline:</span> {selectedDetails.timeline}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedDetails.team.map((member) => (
                            <span
                              key={member}
                              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70"
                            >
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          ) : null
          }
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorksShowcaseSection;
