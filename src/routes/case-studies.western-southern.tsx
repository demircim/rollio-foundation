import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Quote, Sparkles, Trophy } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardEyebrow, CardTitle, CardBody } from "@/components/card";
import { Grid } from "@/components/grid";
import { Button } from "@/components/ui/button";
import {
  SITE_URL,
  SITE_NAME,
  buildSeo,
  breadcrumbListLd,
} from "@/lib/seo";

// ---------- Page constants ----------

const PUBLISHED_AT = "2025-06-01";
const VIDEO_URL =
  "https://www.rollio.ai/wp-content/uploads/2024/03/rollio_with_western_and_southern_life.mp4-1080p.mp4";
const PAGE_PATH = "/case-studies/western-southern";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Western & Southern Financial Group × Rollio | Stevie Award-Winning Customer Service AI";
const PAGE_DESCRIPTION =
  "How Western & Southern Financial Group's Client Relationship Center boosted agent productivity, cut training costs by 50%, and won a Stevie Award for Customer Service — powered by Rollio.";

// ---------- JSON-LD ----------

function articleLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How Western & Southern's Contact Center Gained 5.5 Hours Per Agent Per Week",
    description: PAGE_DESCRIPTION,
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
    about: { "@type": "Organization", name: "Western & Southern Financial Group" },
  };
}

function videoObjectLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Rollio at Western & Southern Financial Group",
    description:
      "Joe Lynch, VP Client Relationship Center at Western & Southern Financial Group, on how Rollio improved agent productivity and accelerated new-hire ramp.",
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

const summary: [string, string][] = [
  ["Company", "Western & Southern Financial Group"],
  ["Industry", "Financial Services / Life Insurance"],
  ["Function", "Client Relationship Center"],
  [
    "Challenge",
    "Agents manually searching multiple systems — slow service, inconsistent accuracy, long training ramp",
  ],
  [
    "Solution",
    "Rollio AI surfacing real-time customer context at the point of need — for every agent, on every call",
  ],
  ["Award", "Stevie Award Winner for Customer Service"],
];

const aboutLines = [
  "Major US-based life insurance and financial services group",
  "Large-scale Client Relationship Center handling high volumes of customer service calls",
  "Complex product portfolio requiring agents to navigate multiple systems simultaneously",
  "Stringent accuracy requirements — wrong information erodes customer trust",
];

const challengeTiles = [
  { value: "Manual", label: "Slow lookup across multiple systems" },
  { value: "Inconsistent", label: "Information quality between agents" },
  { value: "Months", label: "To full new-hire productivity" },
  { value: "Variable", label: "Customer experience by agent tenure" },
];

const solutionCards = [
  {
    title: "Real-Time Customer Context",
    body: "Rollio reads customer data across systems and surfaces relevant information at the point of need — without agents needing to search or toggle between screens.",
  },
  {
    title: "Accelerated Agent Ramp",
    body: "New hires reach full productivity significantly faster because Rollio gives them the same information access as experienced agents from their very first call.",
  },
  {
    title: "Accuracy at Scale",
    body: "Every agent, every call — accurate, up-to-date information. Customer service quality no longer depends on how long an agent has been on the team.",
  },
];

const headlineResults = [
  { value: "5.5", label: "Hours gained per agent per week" },
  { value: "1.5–2×", label: "More data collected per interaction" },
  { value: "50%", label: "Reduction in training costs" },
];

const qualitative = [
  "More productivity while servicing customers",
  "New agents trained and productive significantly quicker",
  "Agents consistently deliver accurate, up-to-date information",
  "External validation: Stevie Award Winner for Customer Service",
];

// ---------- Route ----------

export const Route = createFileRoute("/case-studies/western-southern")({
  head: () =>
    buildSeo({
      path: PAGE_PATH,
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      ogType: "article",
      jsonLd: [
        articleLd(),
        videoObjectLd(),
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies/western-southern" },
          { name: "Western & Southern", path: PAGE_PATH },
        ]),
      ],
    }),
  component: WesternSouthernCaseStudy,
});

function WesternSouthernCaseStudy() {
  return (
    <>
      {/* ---------- Hero (DARK) ---------- */}
      <Section
        as="header"
        tone="dark"
        data-hero-dark
        className="relative overflow-hidden !py-20 md:!py-28"
        style={{ backgroundImage: "linear-gradient(180deg, #08081A 0%, #0D0D24 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 40% 40%, rgba(99,102,241,0.32) 0%, rgba(99,102,241,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(139,92,246,0.28) 0%, rgba(139,92,246,0) 60%)",
          }}
        />
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-surface-light/85">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Case Study · Financial Services
            </span>
            <h1 className="mt-6 text-balance text-surface-light">
              How Western &amp; Southern's Contact Center Gained{" "}
              <span className="text-accent">5.5 Hours Per Agent Per Week.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-surface-light/80">
              W&amp;S Financial Group deployed Rollio in their Client Relationship Center so every agent — from day one — has accurate, real-time customer context at their fingertips. The result: measurable productivity gains, faster new-hire ramp, and a Stevie Award for Customer Service.
            </p>
            <div className="mt-6">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]"
                style={{ color: "#F59E0B" }}
              >
                <Trophy className="h-3.5 w-3.5" /> Stevie Award Winner · Customer Service
              </span>
            </div>
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
            style={{ boxShadow: "0 0 80px -30px rgba(99,102,241,0.5)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Headline Result
            </p>
            <p className="mt-4 font-display text-6xl font-bold tracking-tight text-surface-light md:text-7xl">
              5.5 Hours
            </p>
            <p className="mt-3 text-base font-medium text-surface-light">
              Gained per agent per week
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-2xl font-display font-bold text-accent">50%</p>
              <p className="mt-1 text-sm text-surface-light/70">
                Reduction in training costs
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
          {summary.map(([term, desc]) => (
            <Card key={term} variant="elevated" className="p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                {term}
              </dt>
              <dd className="mt-2 text-sm text-foreground">{desc}</dd>
            </Card>
          ))}
        </dl>
      </Section>

      {/* ---------- About W&S ---------- */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <CardEyebrow>About Western &amp; Southern</CardEyebrow>
            <h2>A leading US financial services group — insuring millions of families.</h2>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            {aboutLines.map((line) => (
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
            <h2>Agents hunting for answers instead of serving customers.</h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                Every inbound call to W&amp;S's Client Relationship Center required agents to manually pull customer records across multiple systems before they could help. Time spent searching was time not spent serving — and inconsistent or outdated information made matters worse.
              </p>
              <p>
                New agents faced the steepest climb: without accumulated institutional knowledge, training took months before they reached the quality of experienced staff. The customer experience depended on which agent happened to pick up the phone.
              </p>
            </div>
          </div>

          <Grid cols={2} gap="sm">
            {challengeTiles.map((t) => (
              <StatTile key={t.label} value={t.value} label={t.label} />
            ))}
          </Grid>
        </div>
      </Section>

      {/* ---------- The Solution ---------- */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>The Solution</CardEyebrow>
          <h2>Real-time context for every agent, on every call.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Rollio's Contextual Data Engine bridges W&amp;S's systems of record and the live customer conversation. Agents stop searching — the right information surfaces automatically, in context, the moment they need it. New agents have the same data access as veterans from day one.
          </p>
        </div>

        <Grid cols={3} gap="lg" className="mt-12">
          {solutionCards.map((s) => (
            <Card key={s.title} variant="elevated">
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                <CheckCircle2 className="h-5 w-5" aria-hidden />
              </span>
              <CardTitle>{s.title}</CardTitle>
              <CardBody>{s.body}</CardBody>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* ---------- Results ---------- */}
      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Results</CardEyebrow>
          <h2>Measurable impact. Industry recognition.</h2>
        </div>

        <Grid cols={3} gap="lg" className="mt-10">
          {headlineResults.map((r) => (
            <Card key={r.label} variant="elevated" className="p-8">
              <p className="font-display text-5xl font-bold tracking-tight text-primary md:text-6xl">
                {r.value}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{r.label}</p>
            </Card>
          ))}
        </Grid>

        <div className="mt-10 max-w-3xl">
          <h3>Qualitative impact.</h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {qualitative.map((q) => (
              <li key={q} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ---------- Quotes + Video ---------- */}
      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <figure className="relative">
              <Quote
                aria-hidden
                className="absolute -left-2 -top-4 h-10 w-10 text-accent/20"
              />
              <blockquote className="relative pl-6 text-xl leading-relaxed text-foreground md:text-2xl">
                "Now we are experiencing more productivity while servicing customers. We also are able to get our new agents trained and productive significantly quicker."
              </blockquote>
            </figure>
            <figure className="relative">
              <Quote
                aria-hidden
                className="absolute -left-2 -top-4 h-10 w-10 text-accent/20"
              />
              <blockquote className="relative pl-6 text-xl leading-relaxed text-foreground md:text-2xl">
                "Our agents are able to service our customers with accurate up-to-date information."
              </blockquote>
            </figure>
            <figcaption className="pl-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Joe Lynch</span> ·
              Vice President Client Relationship Center, Western &amp; Southern Financial Group
            </figcaption>
          </div>

          <video
            controls
            className="w-full rounded-xl border border-border shadow-lg"
            preload="metadata"
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        </div>
      </Section>

      {/* ---------- Closing CTA (DARK) ---------- */}
      <Section
        tone="dark"
        className="relative overflow-hidden"
        style={{ backgroundImage: "linear-gradient(180deg, #08081A 0%, #0D0D24 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/2 -z-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 40%, rgba(99,102,241,0.30) 0%, rgba(99,102,241,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(139,92,246,0.28) 0%, rgba(139,92,246,0) 60%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-surface-light">
              Could your contact center run like this?
            </h2>
            <p className="mt-3 text-surface-light/75">
              30 minutes, no obligation — let's scope the outcomes for your customer operations.
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
