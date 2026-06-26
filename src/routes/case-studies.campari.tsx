import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Quote, Sparkles } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardEyebrow, CardTitle, CardBody } from "@/components/card";
import { Grid } from "@/components/grid";
import { Button } from "@/components/ui/button";
import { VideoEmbed } from "@/components/video-embed";
import { SITE_URL, SITE_NAME, buildSeo, breadcrumbListLd } from "@/lib/seo";

const PUBLISHED_AT = "2025-03-20";
const VIDEO_URL = "https://www.youtube.com/embed/msXUD4HzDoE?start=7";
const PAGE_PATH = "/case-studies/campari";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

function articleLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Campari Group Accelerated Credit Block Resolution with AI-Powered Collaboration",
    description:
      "Campari Group co-developed the Celonis Process Collaboration Agent with Rollio to automate credit block resolution in Microsoft Teams — bringing the right people together with full process context, faster.",
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
      "Laura Buseghin, Process Optimization & Automation Director at Campari Group, on how the Celonis Process Collaboration Agent powered by Rollio is transforming how Campari manages credit blocks and process exceptions.",
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

const summary: [string, string][] = [
  ["Company", "Campari Group"],
  ["Industry", "Premium Spirits / Consumer Goods"],
  ["HQ", "Milan, Italy · Operations in 190+ countries"],
  ["Use Case", "Credit block resolution — Order-to-Cash"],
  ["Solution", "Celonis Process Collaboration Agent powered by Rollio, running in Microsoft Teams"],
  ["Status", "First customer to deploy the Process Collaboration Agent in production"],
];

const aboutLines = [
  "Global premium spirits company behind Aperol, Campari, Grand Marnier, Wild Turkey, SKYY, and Courvoisier",
  "Operations in 190+ countries with approximately 4,700 employees",
  "Annual revenues exceeding €3 billion",
  "Using Celonis across all markets since 2019 for end-to-end process visibility",
  "Committed to continuous innovation in process automation and AI",
];

const challengePoints = [
  {
    title: "Manual, multi-stakeholder coordination",
    body: "Resolving a credit block required coordinating credit managers, customer service representatives, and key account managers across disconnected systems and communication channels.",
  },
  {
    title: "Information scattered across systems",
    body: "Relevant context — customer credit limits, outstanding AR, order value, delivery dates — lived in Celonis, SAP, and email threads. No single view existed for decision-makers.",
  },
  {
    title: "No auditable decision trail",
    body: "Decisions about whether to release or maintain a credit block were made informally, with no structured record of the reasoning or the parties involved.",
  },
  {
    title: "Volume growing with the business",
    body: "As Campari grows, the volume of credit blocks grows with it. A purely manual process cannot scale without adding headcount.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Exception detected",
    body: "When Celonis identifies a significant credit block in the Order-to-Cash process, the Rollio agent is triggered automatically — no human has to start the process.",
  },
  {
    step: "02",
    title: "Collaboration room created in Teams",
    body: "The agent sets up a Microsoft Teams group chat with the right stakeholders — credit manager, customer service rep, key account manager — and shares the full process context in natural language.",
  },
  {
    step: "03",
    title: "Agent-guided decision",
    body: "Stakeholders ask the agent questions directly in Teams. It pulls additional context from Celonis on demand — AR balances, payment history, credit limit status — and guides the group to a decision.",
  },
  {
    step: "04",
    title: "Decision recorded automatically",
    body: "Once the credit block is released or maintained, the agent summarizes the conversation, records the decision and reasoning, and archives it for audit purposes — back in the underlying systems.",
  },
];

const qualitativeOutcomes = [
  "Faster resolution of credit blocks with fewer manual coordination steps",
  "Stakeholders access full process context within Microsoft Teams — no system-switching required",
  "Higher volume of credit blocks manageable as the business grows, without adding headcount",
  "Every decision is documented with reasoning — full audit trail created automatically",
  "Campari's people freed from time-consuming information gathering to focus on higher-value decisions",
];

export const Route = createFileRoute("/case-studies/campari")({
  head: () =>
    buildSeo({
      path: PAGE_PATH,
      title: "Campari Group × Rollio | AI-Powered Credit Block Resolution",
      description:
        "How Campari Group co-developed the Celonis Process Collaboration Agent with Rollio to resolve credit blocks faster — bringing the right people, and the right context, together in Microsoft Teams.",
      ogType: "article",
      jsonLd: [
        articleLd(),
        videoObjectLd(),
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies/campari" },
          { name: "Campari Group", path: PAGE_PATH },
        ]),
      ],
    }),
  component: CampariCaseStudy,
});

function CampariCaseStudy() {
  return (
    <>
      {/* Hero */}
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
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Case Study · Order-to-Cash
            </span>
            <h1 className="mt-6 text-balance text-surface-light">
              How Campari Group Resolves Credit Blocks Faster with{" "}
              <span className="text-accent">AI-Powered Collaboration.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-surface-light/80">
              Campari Group co-developed the Celonis Process Collaboration Agent with Rollio to automate the coordination behind credit block resolution — bringing the right people together, with the right context, directly in Microsoft Teams.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" asChild>
                <Link to="/consultation-booking">
                  Schedule Consultation <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero callout */}
          <div
            className="rounded-2xl border border-accent/30 bg-white/5 p-8 backdrop-blur-sm"
            style={{ boxShadow: "0 0 80px -30px rgba(99,102,241,0.5)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              What changed
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Credit blocks resolved with fewer manual touchpoints",
                "Full process context surfaced automatically in Microsoft Teams",
                "All decisions recorded with reasoning — audit-ready",
                "Volume scalable without adding headcount",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-surface-light/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Executive Summary */}
      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Executive Summary</CardEyebrow>
          <h2>At a glance.</h2>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {summary.map(([term, desc]) => (
            <Card key={term} variant="elevated" className="p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{term}</dt>
              <dd className="mt-2 text-sm text-foreground">{desc}</dd>
            </Card>
          ))}
        </dl>
      </Section>

      {/* About Campari */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <CardEyebrow>About Campari Group</CardEyebrow>
            <h2>A legendary Italian spirits company — global at scale.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Founded in 1860, Campari Group is one of the world's leading premium spirits companies. Its portfolio spans iconic brands sold in 190+ countries, supported by a complex global supply chain and order management operation.
            </p>
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

      {/* The Challenge */}
      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>The Challenge</CardEyebrow>
          <h2>Credit blocks: a high-stakes, high-friction coordination problem.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Clearing a credit block sounds simple. In practice, it means pulling together multiple teams, finding scattered information across systems, making a fast but informed decision, and logging the outcome — all under time pressure, because every unresolved block risks delayed delivery and customer dissatisfaction.
          </p>
        </div>
        <Grid cols={2} gap="lg" className="mt-12">
          {challengePoints.map((c) => (
            <Card key={c.title} variant="elevated">
              <CardTitle>{c.title}</CardTitle>
              <CardBody>{c.body}</CardBody>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* The Solution */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>The Solution</CardEyebrow>
          <h2>Celonis Process Collaboration Agent — powered by Rollio.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Campari co-designed the Process Collaboration Agent with Celonis and Rollio — becoming the first company to deploy it in production. The agent sits inside Microsoft Teams, monitors the Celonis data model for credit block exceptions, and runs the entire collaboration workflow autonomously.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {howItWorks.map((step) => (
            <div
              key={step.step}
              className="grid grid-cols-[48px_1fr] gap-6 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <span className="text-sm font-bold text-accent">{step.step}</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Quote + Video */}
      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <figure className="relative">
              <Quote aria-hidden className="absolute -left-2 -top-4 h-10 w-10 text-accent/20" />
              <blockquote className="relative pl-6 text-xl leading-relaxed text-foreground md:text-2xl">
                "The Process Collaboration Agent will let us be smarter and faster in managing process exceptions, enabling our people to quickly and consistently access information that they would otherwise have to search for across different systems in a complex, time-consuming manner."
              </blockquote>
              <figcaption className="mt-6 pl-6 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Laura Buseghin</span> ·
                Process Optimization &amp; Automation Director, Campari Group
              </figcaption>
            </figure>
            <figure className="relative">
              <Quote aria-hidden className="absolute -left-2 -top-4 h-10 w-10 text-accent/20" />
              <blockquote className="relative pl-6 text-lg leading-relaxed text-foreground">
                "Every minute we free up for our Camparistas can be the key minute where they have the great idea that will help us to increase our value, to grow faster, or to delight our customers."
              </blockquote>
              <figcaption className="mt-4 pl-6 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Laura Buseghin</span> ·
                Process Optimization &amp; Automation Director, Campari Group
              </figcaption>
            </figure>
          </div>
          <VideoEmbed src={VIDEO_URL} title="Laura Buseghin, Campari Group" />
        </div>
      </Section>

      {/* Outcomes */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>Outcomes</CardEyebrow>
          <h2>Smarter, faster, more scalable operations.</h2>
        </div>
        <ul className="mt-10 max-w-3xl space-y-4">
          {qualitativeOutcomes.map((outcome) => (
            <li key={outcome} className="flex gap-4">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <p className="text-lg text-muted-foreground">{outcome}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 max-w-3xl rounded-2xl border border-border bg-card p-8">
          <p className="text-lg font-medium text-foreground">
            "The Process Collaboration Agent will not only speed up collaboration, but allow us to handle a higher volume of credit blocks as the company grows. When processes work, we can toast to life together."
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            — Laura Buseghin, Process Optimization &amp; Automation Director, Campari Group
          </p>
        </div>
      </Section>

      {/* Context: Celonis partnership */}
      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="max-w-xl">
            <CardEyebrow>Part of a bigger story</CardEyebrow>
            <h2>Built on Celonis. Deployed with Rollio.</h2>
            <p className="mt-6 text-muted-foreground">
              Campari has used Celonis since 2019 to gain end-to-end visibility across its Order-to-Cash, Procurement, and other core processes. The Process Collaboration Agent is the next step: moving from visibility to autonomous execution — using Celonis process intelligence as the foundation for AI agents that act.
            </p>
            <p className="mt-4 text-muted-foreground">
              The agent was co-developed under the Celonis AgentC program, launched at Celosphere 2024, and represents a new class of enterprise AI: not a chatbot, not a dashboard — but an active participant in business operations.
            </p>
          </div>
          <Card variant="elevated" className="p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Technology stack</p>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                "Celonis Process Intelligence — process monitoring and exception detection",
                "Rollio AI Agent — collaboration orchestration and guided decision-making",
                "Microsoft Teams — collaboration interface for all stakeholders",
                "SAP — underlying ERP system of record",
                "Celonis AgentC — partner ecosystem powering enterprise AI agents",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA */}
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
              Ready to resolve your process exceptions faster?
            </h2>
            <p className="mt-3 text-surface-light/75">
              30 minutes, no obligation — let's scope the outcomes for your Order-to-Cash or Procurement operations.
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
