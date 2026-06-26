import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardEyebrow, CardTitle, CardBody } from "@/components/card";
import { Grid } from "@/components/grid";
import { Timeline } from "@/components/timeline";
import { Button } from "@/components/ui/button";
import { VideoEmbed } from "@/components/video-embed";
import {
  SITE_URL,
  SITE_NAME,
  buildSeo,
  breadcrumbListLd,
} from "@/lib/seo";

// ---------- Page constants ----------

const PUBLISHED_AT = "2025-06-01";
const VIDEO_URL = "https://www.youtube.com/embed/msXUD4HzDoE?start=7";
const PAGE_PATH = "/case-studies/campari";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

// ---------- Local JSON-LD helpers (page-scoped) ----------

function articleLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How Campari Improved Cash Conversion Cycle by 24% with Hands-Free Finance",
    description:
      "Campari Group deployed Rollio's Contextual Data Engine and Autonomous AI Agents to bridge SAP and unstructured communications, cutting its cash conversion cycle by 24%, freeing $2.1M in working capital, and reducing manual AR/AP work by 60%.",
    mainEntityOfPage: PAGE_URL,
    url: PAGE_URL,
    datePublished: PUBLISHED_AT,
    dateModified: PUBLISHED_AT,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    about: { "@type": "Organization", name: "Campari Group" },
  };
}

function videoObjectLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "How Campari works with Rollio — Laura Buseghin",
    description:
      "Laura Buseghin, Global Director Process Optimization & Automation at Campari, on how Rollio's finance AI agents improved cash conversion by 24% and freed $2.1M in working capital.",
    uploadDate: PUBLISHED_AT,
    contentUrl: VIDEO_URL,
    embedUrl: VIDEO_URL,
    thumbnailUrl: [`${SITE_URL}/og-image.png`],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };
}

// ---------- Content ----------

const agents = [
  {
    title: "Context-Aware Accounts Receivable",
    body: "Reads unstructured email correspondence and SAP data to resolve payment disputes, issue context-aware reminders, and predict payment timing.",
  },
  {
    title: "Autonomous AP Processing",
    body: "Performs 3-way matching by extracting context from invoices, POs, and emails. Resolves discrepancies autonomously or escalates to a Human Supervisor.",
  },
  {
    title: "Contextual Payment Optimization",
    body: "Analyzes dynamic vendor terms buried in contracts and emails against current cash positions to execute optimal payment scheduling.",
  },
  {
    title: "Intelligent Vendor Management",
    body: "Proactively handles routine vendor inquiries via email using natural language, escalating only complex compliance issues.",
  },
];

const timelineSteps = [
  {
    label: "Week 1–2",
    title: "Discovery & Setup",
    description:
      "Map the AR/AP process, find bottlenecks, set rules and limits, and connect SAP plus the email context around it.",
  },
  {
    label: "Week 3–4",
    title: "Pilot — AP",
    description:
      "Rollio handles ~20% of invoices end-to-end. Refine rules, measure baseline, and validate decisions side-by-side with the team.",
  },
  {
    label: "Week 5–8",
    title: "Scaling — AR, Collections, Payments",
    description:
      "Expand to AR and Collections, connect Payments Optimization to the banking system, and run team training across regions.",
  },
  {
    label: "Week 9–12",
    title: "Optimization",
    description:
      "Full speed across AR/AP/Collections. Continuous improvement, process refinements, and complete audit trail in place.",
  },
];

const primaryResults = [
  { value: "24%", label: "Cash conversion cycle improvement (45+ → ~35 days)" },
  { value: "$2.1M", label: "Working capital freed (10 days × $X/yr volume)" },
];

const secondaryResults = [
  { metric: "Manual AR/AP work", from: "60%", to: "20%", delta: "67% less" },
  { metric: "Approval cycle", from: "2–3 days", to: "2–4 hrs", delta: "95% faster" },
  { metric: "Payment errors", from: "3–5%", to: "<0.5%", delta: "90% fewer" },
  { metric: "Invoice processing cost", from: "$50–100", to: "$5–10", delta: "80% lower" },
];

const howWeDidIt = [
  {
    title: "Contextual Ingestion",
    body: "Integrated SAP S/4HANA with email servers and document portals to create a single, contextualized data layer—without altering the system of record.",
  },
  {
    title: "Human-in-the-Loop Guardrails",
    body: "Configured strict parameters. Standard matches execute autonomously; edge cases and high-value payments route to Human Supervisors with a full contextual summary.",
  },
  {
    title: "Continuous Agent Learning",
    body: "Agents observe human approvals on edge cases, continuously updating their understanding of Campari's vendor behaviors and internal policies.",
  },
  {
    title: "Secure Autonomous Execution",
    body: "Deployed via a 30-day pilot with strict read-only phases before enabling autonomous write-back to SAP, backed by a 100% transparent audit trail.",
  },
];

const lessons = [
  "Standard RPA breaks without context. AI Agents require a Contextual Data Engine to handle real-world exceptions.",
  "The real bottleneck isn't the ERP; it's the unstructured data hidden in employee inboxes.",
  "Trust is built through transparency. The Human-in-the-Loop model allowed Campari to scale autonomy safely.",
  "The team's role shifted from manual data entry and detective work to strategic financial management.",
  "The financial impact is real: $2.1M working capital, captured vendor discounts, and rapid ROI.",
];

const roadmap = [
  {
    phase: "Phase 2",
    body: "Journal-entry automation, Treasury, Tax, and FP&A, plus planning-tool connections.",
  },
  {
    phase: "Phase 3",
    body: "Full month-end close with auto-triggered pre-close checks.",
  },
  {
    phase: "Expected",
    body: "Cash conversion target <20 days; close from 5 → 2 days; finance team spending 30% of time on strategy.",
  },
];

// ---------- Route ----------

export const Route = createFileRoute("/case-studies/campari")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});

function CampariCaseStudy() {
  return (
    <>
      {/* ---------- Hero (DARK) ---------- */}
      <Section
        as="header"
        tone="dark"
        data-hero-dark
        className="relative overflow-hidden !py-20 md:!py-28"
        style={{ backgroundImage: "linear-gradient(180deg, #0B1220 0%, #0C2D5E 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 40% 40%, rgba(0,185,166,0.32) 0%, rgba(0,185,166,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(124,111,240,0.28) 0%, rgba(124,111,240,0) 60%)",
          }}
        />
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-surface-light/85">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Case Study · Finance &amp; Operations
            </span>
            <h1 className="mt-6 text-balance text-surface-light">
              How Campari Group Improves Cash Conversion Cycle with{" "}
              <span className="text-accent">AI-Driven Collaboration.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-surface-light/80">
              Campari's finance data was trapped in a disconnect between rigid SAP records and unstructured email threads. Rollio's Contextual Data Engine bridged the gap, empowering AI Agents to execute AR and AP workflows autonomously.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" asChild>
                <Link to="/consultation-booking">
                  Schedule Consultation <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero metric callout */}
          <div
            className="rounded-2xl border border-accent/30 bg-white/5 p-8 backdrop-blur-sm"
            style={{ boxShadow: "0 0 80px -30px rgba(0,185,166,0.5)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Headline Result
            </p>
            <p className="mt-4 font-display text-6xl font-bold tracking-tight text-surface-light md:text-7xl">
              24%
            </p>
            <p className="mt-3 text-base font-medium text-surface-light">
              Faster cash conversion cycle
            </p>
            <p className="mt-1 text-sm text-surface-light/70">
              From 45+ days to ~35 days
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-2xl font-display font-bold text-accent">$2.1M</p>
              <p className="mt-1 text-sm text-surface-light/70">
                Working capital freed (estimated)
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------- Executive summary ---------- */}
      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Executive Summary</CardEyebrow>
          <h2>At a glance.</h2>
        </div>

        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Company", "Campari Group"],
            ["Industry", "Beverages"],
            ["Challenge", "Fragmented AR/AP/Collections, slow cash conversion"],
            ["Solution", "Finance AI agents reading SAP plus email context and doing the work"],
            ["Result", "24% cash-conversion improvement, 60% less manual AR/AP"],
            ["Time to results", "60 days (30-day pilot + 30-day scaling)"],
            ["ROI", "~$2.1M working capital freed (estimated)"],
          ].map(([term, desc]) => (
            <Card key={term} variant="elevated" className="p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                {term}
              </dt>
              <dd className="mt-2 text-sm text-foreground">{desc}</dd>
            </Card>
          ))}
        </dl>
      </Section>

      {/* ---------- About Campari ---------- */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <CardEyebrow>About Campari</CardEyebrow>
            <h2>A global beverages leader operating in 190 countries.</h2>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Global beverages company present across 190 countries",
              "Multiple currencies and regulatory environments",
              "50+ subsidiaries requiring inter-company reconciliation",
              "AR/AP operations spanning 50+ countries",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ---------- The Challenge ---------- */}
      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="max-w-2xl">
            <CardEyebrow>The Context Gap</CardEyebrow>
            <h2>Fragmented data and manual workarounds.</h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                Campari's AR lived in SAP, but the context—disputes, missing POs, vendor questions—lived unstructured in emails. Approvals routed through manual email chains lacked ERP visibility, adding 2–3 days of delay per invoice.
              </p>
              <p>
                The impact: Managers were flying blind. Standard automation couldn't read the context, leaving the finance team to spend 60% of their time acting as manual routers between SAP and Outlook. This drove the cash conversion cycle up to 45+ days and caused a 3–5% payment error rate.
              </p>
            </div>
          </div>

          <Grid cols={2} gap="sm">
            <StatTile value="45+ days" label="Cash conversion cycle" />
            <StatTile value="60%" label="Time on manual work" />
            <StatTile value="2–3 days" label="Approval delay" />
            <StatTile value="3–5%" label="Payment errors" />
          </Grid>
        </div>
      </Section>

      {/* ---------- The Solution — 4 finance AI agents ---------- */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>The Solution</CardEyebrow>
          <h2>Contextual Data Engine & Autonomous Execution.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Rollio deployed specialized AI Agents that bridge the gap between SAP and unstructured communications. By contextualizing the data, the agents execute end-to-end workflows within Campari's exact guardrails.
          </p>
        </div>

        <Grid cols={2} gap="lg" className="mt-12">
          {agents.map((a) => (
            <Card key={a.title} variant="elevated">
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                <CheckCircle2 className="h-5 w-5" aria-hidden />
              </span>
              <CardTitle>{a.title}</CardTitle>
              <CardBody>{a.body}</CardBody>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* ---------- Implementation timeline ---------- */}
      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Implementation Timeline</CardEyebrow>
          <h2>From pilot to full speed in 12 weeks.</h2>
        </div>
        <div className="mt-12">
          <Timeline items={timelineSteps} />
        </div>
      </Section>

      {/* ---------- Results ---------- */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>Results</CardEyebrow>
          <h2>Measured outcomes.</h2>
        </div>

        <p className="mt-8 max-w-3xl text-lg text-muted-foreground">
          Campari achieved a meaningful improvement in their cash conversion cycle, reduced manual AR/AP workload significantly, and freed up working capital that had been locked in process delays.
        </p>

        {/* Qualitative */}
        <div className="mt-10 max-w-3xl">
          <h3>Qualitative impact.</h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {[
              "Strategic refocus across the finance team",
              "Fewer audit findings, with a complete audit trail",
              "Better cash visibility for treasury",
              "Around-the-clock operation across time zones",
              "Faster vendor payments and captured early-payment discounts",
            ].map((q) => (
              <li key={q} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ---------- Quote + Video ---------- */}
      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <figure className="relative">
            <Quote
              aria-hidden
              className="absolute -left-2 -top-4 h-10 w-10 text-accent/20"
            />
            <blockquote className="relative pl-6 text-xl leading-relaxed text-foreground md:text-2xl">
              "Collaboration Agent will enhance our operational efficiency and improve transparency. It also lets us expose process intelligence to the wider organization."
            </blockquote>
            <figcaption className="mt-6 pl-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Laura Buseghin</span> ·
              Global Director Process Optimization &amp; Automation, Campari Group
            </figcaption>
          </figure>

          <VideoPlaceholder label="Laura Buseghin, Campari (3–5 min)" />
        </div>
      </Section>

      {/* ---------- How we did it ---------- */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>How we did it</CardEyebrow>
          <h2>The mechanics behind the result.</h2>
        </div>

        <Grid cols={2} gap="lg" className="mt-12">
          {howWeDidIt.map((h) => (
            <Card key={h.title} variant="elevated">
              <CardTitle>{h.title}</CardTitle>
              <CardBody>{h.body}</CardBody>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* ---------- Lessons learned ---------- */}
      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <CardEyebrow>Lessons learned</CardEyebrow>
            <h2>Five takeaways from Campari's deployment.</h2>
          </div>
          <ol className="space-y-4">
            {lessons.map((l, i) => (
              <li key={l} className="flex gap-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {i + 1}
                </span>
                <p className="pt-1 text-muted-foreground">{l}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ---------- Future roadmap ---------- */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>Future roadmap</CardEyebrow>
          <h2>What's next for Campari and Rollio.</h2>
        </div>

        <Grid cols={3} gap="lg" className="mt-12">
          {roadmap.map((r) => (
            <Card key={r.phase} variant="elevated">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                {r.phase}
              </span>
              <CardBody className="mt-3">{r.body}</CardBody>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* ---------- Closing CTA (DARK) ---------- */}
      <Section
        tone="dark"
        className="relative overflow-hidden"
        style={{ backgroundImage: "linear-gradient(180deg, #0B1220 0%, #0C2D5E 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/2 -z-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 40%, rgba(0,185,166,0.30) 0%, rgba(0,185,166,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(124,111,240,0.28) 0%, rgba(124,111,240,0) 60%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-surface-light">
              Could a result like Campari's work in your finance team?
            </h2>
            <p className="mt-3 text-surface-light/75">
              30 minutes, no obligation — let's scope the outcomes for your business.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Schedule Consultation <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

// ---------- Local helpers ----------

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <Card variant="elevated" className="p-5">
      <p className="font-display text-2xl font-bold text-primary md:text-3xl">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </Card>
  );
}

function VideoPlaceholder({ label }: { label: string }) {
  return <VideoEmbed src={VIDEO_URL} title={label} />;
}
