import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Mail, Sparkles, Workflow, ShieldCheck, Zap } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardEyebrow, CardTitle, CardBody } from "@/components/card";
import { Grid } from "@/components/grid";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/timeline";
import { FAQ } from "@/components/faq";
import { VideoEmbed } from "@/components/video-embed";
import { buildSeo, organizationLd, websiteLd, faqPageLd } from "@/lib/seo";

// ---------- FAQ content (Appendix A, plain-business voice) ----------

const HOME_FAQS: { question: string; answer: string }[] = [
  {
    question: "How long does deployment actually take?",
    answer:
      "Typically 30–90 days, depending on scope. Week 1–2 is Discovery: we read your information across systems, find the highest-impact opportunities, and define a 30-day pilot. Week 3–6 is[...]",
  },
  {
    question: "Is this the same as process mining (like Celonis)?",
    answer:
      "Process mining is a great foundation — it shows you what happened historically. Rollio goes two steps further. First, it reads everything: not just your structured data, but the messy context[...]",
  },
  {
    question: "Will Rollio replace our existing systems?",
    answer:
      "No. Rollio works on top of the systems you already have. It reads without changing your source of truth, coordinates work across systems, and keeps your data where it lives. It works with Sales[...]",
  },
  {
    question: "How secure is Rollio with our data?",
    answer:
      "Security is foundational. Certifications and compliance: SOC 2 Type II, zero-trust architecture, GDPR compliant, HIPAA-ready, FedRAMP ready. Data handling: read-only access, encryption in trans[...]",
  },
  {
    question: "How does outcome-based pricing work?",
    answer:
      "You pay based on the results your business achieves — not features or seats. Instead of a fixed subscription, pricing tracks measurable outcomes: faster payment cycles (shared savings from ac[...]",
  },
  {
    question: "What's the investment range?",
    answer:
      "It's outcome-based and varies with (1) the outcomes you're targeting, (2) how many processes are in scope, and (3) integration complexity. For reference only: a small pilot (1 process) $X–$Y [...]",
  },
  {
    question: "What if we don't see the outcomes we're targeting?",
    answer:
      "That's the point of outcome-based pricing — we're aligned with your success. If the targeted outcomes aren't reached, pricing adjusts accordingly. Whether the goal is a cash-conversion improv[...]",
  },
  {
    question: "What systems does Rollio work with?",
    answer:
      "Ready-made connections for Salesforce (Sales/Service/Platform), Celonis, Microsoft (Dynamics 365, Teams, 365), ServiceNow (ITSM, CMDB), SAP (S/4HANA, ECC, SuccessFactors), and your other system[...]",
  },
  {
    question: "What's the difference between Rollio and RPA (like UiPath)?",
    answer:
      "Both automate, but very differently. RPA is rules-based ('if X, then Y') — it breaks when reality is more complex, reads only structured data, and needs reprogramming when your process change[...]",
  },
  {
    question: "Can we start small and expand?",
    answer:
      "Yes — it's what we recommend. Month 1–2: a 30-day pilot on one high-impact process (~10% of volume), low risk. Month 3–4: validate and expand to 2–3 related processes (~50%). Month 5–[...]",
  },
  {
    question: "What happens when our processes change?",
    answer:
      "Rollio adapts on its own. Old-style automation needs manual rule updates and breaks until they're done. Rollio keeps running within the rules you set, learns the new pattern, updates its unders[...]",
  },
  {
    question: "Who should we talk to first?",
    answer:
      "Schedule a 30-minute consultation with our outcomes team. We'll talk through your top business challenges, the outcomes that matter most, which processes to prioritize, your timeline, and how R[...]",
  },
];

// ---------- Static content ----------

const timelineSteps = [
  {
    label: "Week 1–2",
    title: "Discovery",
    description:
      "Rollio reads your information — systems plus emails, tickets, and notes — and finds the highest-impact opportunities. Data mapping, opportunity analysis, and a 30-day pilot scope.",
  },
  {
    label: "Week 3–6",
    title: "Pilot",
    description:
      "Rollio starts doing the work on 1–2 core processes; first results show quickly. Setup, the rules and limits you set, real execution, and measurement begin.",
  },
  {
    label: "Month 2–3",
    title: "Scaling",
    description:
      "Expand to 3–5 processes; the system keeps getting sharper. Performance tuning and team training on how to manage it.",
  },
  {
    label: "Month 4+",
    title: "Full Speed",
    description:
      "Runs with minimal oversight; your team focuses on strategy. Continuous improvement, new processes, and ongoing ROI tracking.",
  },
];

const useCases = [
  {
    title: "Order-to-Cash & Procurement",
    body: "Manages purchase orders, checks invoices, optimizes payment timing, and keeps vendors compliant — handling the work from order to cash, around the clock.",
    href: "/solutions/order-to-cash" as const,
  },
  {
    title: "Finance & Accounting Operations",
    body: "Handles reconciliation, collections, journal entries, and close — cutting month-end close time in half.",
    href: "/solutions/finance" as const,
  },
  {
    title: "Claims Processing & Compliance",
    body: "Reviews claims, checks compliance, and manages audits with high accuracy.",
    href: "/solutions/claims" as const,
  },
  {
    title: "IT Service Management & Ticketing",
    body: "Resolves tickets, manages incidents, and onboards users — cutting resolution time dramatically.",
    href: "/solutions/itsm" as const,
  },
];

const whyChoose = [
  {
    icon: Sparkles,
    eyebrow: "Complete Context",
    title: "Understands 100% of your business — including the 80% everyone misses.",
    body: "Most tools read only your structured data. Your real intelligence — customer intent, context, exceptions — lives in emails, tickets, and notes. Rollio reads both, so the work gets done [...]
    cta: "See how complete context works",
  },
  {
    icon: Zap,
    eyebrow: "Real Execution",
    title: "It acts, it doesn't just report.",
    body: "Analytics tools tell you what's wrong. Rollio tells you and fixes it in real time, around the clock, within the rules you set. No approval delays, no manual steps.",
    cta: "See execution in action",
  },
  {
    icon: Workflow,
    eyebrow: "Keeps Getting Smarter",
    title: "Automation that improves every day.",
    body: "Old-style automation breaks the moment your process changes and becomes a maintenance burden. Rollio learns continuously and adapts on its own. No retraining, no brittle rules.",
    cta: "Learn how it keeps improving",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Live in 90 Days",
    title: "No rip-and-replace.",
    body: "Rollio works on top of the systems you already have — Salesforce, Celonis, Microsoft, ServiceNow, SAP — reading without disrupting. Measurable results in 90 days.",
    cta: "View implementation timeline",
  },
];

const proofLogos = ["Campari", "More customer stories coming soon"];

// ---------- Route ----------

export const Route = createFileRoute("/")({
  head: () =>
    buildSeo({
      path: "/",
      title: "Rollio — Discovers What Matters. Executes What Works.",
      description:
        "Rollio reads your whole business — structured data and the messy 80% in emails, tickets, and notes — then its AI agents do the work, around the clock.",
      ogType: "website",
      jsonLd: [organizationLd(), websiteLd(), faqPageLd(HOME_FAQS)],
    }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ---------- Section 1 — Hero (DARK) ---------- */}
      <Section
        as="header"
        tone="dark"
        data-hero-dark
        className="relative overflow-hidden !py-20 md:!py-32"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0B1220 0%, #0C2D5E 100%)",
        }}
      >
        {/* Subtle teal→violet glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 40% 40%, rgba(0,185,166,0.35) 0%, rgba(0,185,166,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(124,111,240,0.30) 0%, rgba(124,111,240,0) 60%)",
          }}
        />
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Enterprise AI Agents for ERP & CRM
            </span>
            <h1 className="mt-6 text-balance text-surface-light">
              No AI Autonomy Without Context. <span className="text-accent">We Give Agents the Full Picture.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-surface-light/80 md:text-xl">
              Most enterprise AI projects fail because models lack business context. Rollio bridges the gap between rigid data silos (like SAP or ServiceNow) and true AI capability. We contextualize 100% of your data—from structured fields to messy emails—empowering AI agents to execute complex back-office workflows autonomously or with Human-in-the-Loop control.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" asChild>
                <Link to="/consultation-booking">
                  Book a Use-Case Assessment <ArrowRight />
                </Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/consultation-booking">Talk to an AI Architect</Link>
              </Button>
            </div>
          </div>
          <HeroVisual />
        </div>
      </Section>

      {/* ---------- Section 2 — Proof (Campari) ---------- */}
      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Proof</CardEyebrow>
          <h2>Results that speak for themselves.</h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="font-display text-5xl font-bold tracking-tight text-primary md:text-6xl">
              24%
            </p>
            <p className="mt-2 text-lg font-medium text-foreground">
              Improvement in Cash Conversion Cycle
            </p>
            <p className="mt-1 text-muted-foreground italic">
              "From insight to action, automatically."
            </p>
            <blockquote className="mt-8 border-l-2 border-accent pl-4 text-foreground">
              "Collaboration has enhanced our operational efficiency significantly."
              <footer className="mt-2 text-sm text-muted-foreground not-italic">
                — Laura Buseghin, Global Director Process Optimization &amp; Automation,
                Campari
              </footer>
            </blockquote>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button variant="primary" asChild>
                <Link to="/case-studies/campari">
                  Watch Full Case Study <ArrowRight />
                </Link>
              </Button>
              <span className="text-sm text-muted-foreground">
                More customer stories coming soon.
              </span>
            </div>
          </div>

          <VideoPlaceholder label="Campari customer story (3–5 min)" />
        </div>

        {/* Logo strip placeholder */}
        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Trusted by
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-3 text-muted-foreground/80">
            {proofLogos.map((logo) => (
              <span key={logo} className="font-display text-base font-semibold">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- Section 3 — Problem ---------- */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="max-w-2xl">
            <CardEyebrow>The Core Problem</CardEyebrow>
            <h2>
              Why 80% of Enterprise AI projects fail at the data layer.
            </h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                You have structured data in SAP, Salesforce, and ServiceNow. You have unconstructed data in emails, claims, and service tickets. But your systems cannot connect the dots.
              </p>
              <p>
                Standard AI models and RPA bots break when reality gets complex because they lack contextual understanding. Your team spends hundreds of hours manually bridging the gap: reading an email, checking the ERP, validating a claim, and updating a ticket.
              </p>
              <p>
                <strong>Without contextual data, you cannot build autonomous AI agents.</strong> You are stuck paying for expensive workarounds while your back-office processes hit a scaling wall.
              </p>
            </div>
          </div>
          <BeforeAfterVisual />
        </div>
      </Section>

      {/* ---------- Section 4 — Solution ---------- */}
      <Section tone="default">
        <div className="max-w-3xl">
          <CardEyebrow>The Solution</CardEyebrow>
          <h2>From discovering what matters to executing what works.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Rollio brings together two things most tools miss:
          </p>
        </div>

        <Grid cols={3} className="mt-12">
          <Card variant="elevated">
            <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
              <Sparkles className="h-5 w-5" aria-hidden />
            </span>
            <CardTitle>1. Contextual Data Engine</CardTitle>
            <CardBody>
              We ingest structured ERP data and unstructured text (emails, tickets), translating it into rich, contextual datasets that LLMs and AI agents can actually understand.
            </CardBody>
          </Card>
          <Card variant="elevated">
            <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
              <Zap className="h-5 w-5" aria-hidden />
            </span>
            <CardTitle>2. Autonomous AI Agents</CardTitle>
            <CardBody>
              Deploy specialized agents for Order-to-Cash, ITSM, or Procurement. They don't just recommend actions; they execute end-to-end workflows directly within your systems.
            </CardBody>
          </Card>
          <Card variant="elevated">
            <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
              <ShieldCheck className="h-5 w-5" aria-hidden />
            </span>
            <CardTitle>3. Human-in-the-Loop</CardTitle>
            <CardBody>
              You retain total control. Choose between full autonomy for standard processes, or set up Human Supervisors to approve edge cases and complex escalation management.
            </CardBody>
          </Card>
        </Grid>
      </Section>

      {/* ---------- Section 5 — How It Works (Timeline) ---------- */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>How It Works</CardEyebrow>
          <h2>Your path to hands-free execution: 90 days.</h2>
        </div>
        <div className="mt-12">
          <Timeline items={timelineSteps} />
        </div>

        <Card variant="elevated" className="mt-12 max-w-3xl border-accent/30 bg-accent/5">
          <p className="text-base text-foreground">
            <strong className="text-primary">Most customers see measurable results
            within 30 days of piloting.</strong>{" "}
            Faster approvals, less manual work, better cash flow, fewer errors, happier
            customers.
          </p>
        </Card>
      </Section>

      {/* ---------- Section 6 — Use Cases (2x2) ---------- */}
      <Section tone="default" id="use-cases">
        <div className="max-w-2xl">
          <CardEyebrow>Use Cases</CardEyebrow>
          <h2>Specialized AI agents for every business function.</h2>
        </div>

        <Grid cols={2} gap="lg" className="mt-12">
          {useCases.map((u) => (
            <Card key={u.title} variant="elevated" interactive>
              <CardTitle>{u.title}</CardTitle>
              <CardBody className="mt-2">{u.body}</CardBody>
              <Link
                to={u.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                Explore <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* ---------- Section 7 — Why Choose (2x2) ---------- */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>Why Rollio</CardEyebrow>
          <h2>Why customers choose Rollio.</h2>
        </div>

        <Grid cols={2} gap="lg" className="mt-12">
          {whyChoose.map(({ icon: Icon, eyebrow, title, body, cta }) => (
            <Card key={eyebrow} variant="elevated">
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                {eyebrow}
              </span>
              <CardTitle className="mt-2">{title}</CardTitle>
              <CardBody>{body}</CardBody>
              <Link
                to="/consultation-booking"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                {cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* ---------- Section 8 — Campari story ---------- */}
      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Finance &amp; Operations
            </span>
            <h2 className="mt-4">How Campari works with Rollio.</h2>

            <dl className="mt-8 space-y-6">
              <StoryRow
                term="Challenge"
                desc="Manual AR/AP/Collections scattered across systems; unpredictable cash flow; hundreds of hours a month of manual work; SAP plus email-based approvals; a cash conversion cycle stre[...]
              />
              <StoryRow
                term="Solution"
                desc="Rollio's finance AI agents read the complete picture (SAP plus emails, spreadsheets, notes) and do the AR/AP/Collections work — approval routing, payment timing, vendor managem[...]
              />
              <StoryRow
                term="Result"
                desc="24% improvement in cash conversion cycle. Plus 60% less manual AR/AP work, eliminated payment delays, and better vendor on-time payment."
              />
            </dl>

            <blockquote className="mt-8 border-l-2 border-accent pl-4 text-foreground">
              "Collaboration has enhanced our operational efficiency significantly."
              <footer className="mt-2 text-sm text-muted-foreground not-italic">
                — Laura Buseghin, Campari
              </footer>
            </blockquote>

            <Button variant="primary" className="mt-8" asChild>
              <Link to="/case-studies/campari">
                Read Full Case Study <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            <Grid cols={3} gap="sm">
              <MetricTile value="24%" label="Cash conversion improvement" />
              <MetricTile value="60%" label="Less manual AR/AP" />
              <MetricTile value="[X] days" label="Faster payment cycle" />
            </Grid>
            <VideoPlaceholder label="Laura Buseghin, Campari (3–5 min)" />
          </div>
        </div>
      </Section>

      {/* ---------- Section 9 — FAQ ---------- */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>FAQ</CardEyebrow>
          <h2>Frequently asked questions.</h2>
        </div>
        <div className="mt-10 max-w-3xl">
          <FAQ items={HOME_FAQS} />
        </div>
      </Section>

      {/* ---------- Section 10 — Closing CTA (DARK) ---------- */}
      <Section
        tone="dark"
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0B1220 0%, #0C2D5E 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/2 -z-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 40%, rgba(0,185,166,0.30) 0%, rgba(0,185,166,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(124,111,240,0.28) 0%, rgba(124,111,240,0) 60%)",
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-surface-light">
            Ready to discover what matters &amp; execute what works?
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Schedule Consultation (Free) <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <Link to="/case-studies/campari">Watch Campari Case Study</Link>
            </Button>
          </div>
          <p className="mt-6 max-w-xl text-surface-light/75">
            Let's talk about the outcomes you want and how Rollio can deliver them. 30
            minutes, no obligation.
          </p>
          <p className="mt-6 text-sm text-surface-light/60">
            Trusted by Campari and enterprise teams worldwide. Our outcome-based model
            means we only succeed when you succeed. Questions?{" "}
            <a
              href="mailto:hello@rollio.ai"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              <Mail className="h-3.5 w-3.5" /> hello@rollio.ai
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}

// ---------- Local presentation helpers ----------

function HeroVisual() {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        {/* Before */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-surface-light/60">
            Before
          </p>
          <p className="mt-2 text-sm font-medium text-surface-light">
            Raw Data (No Context)
          </p>
          <div className="mt-4 space-y-2">
            {[
              "Email · approval needed",
              "Ticket #4821 · pending",
              "Spreadsheet · v12 final",
              "Slack thread · 14 replies",
              "PO #88-19 · unmatched",
            ].map((t, i) => (
              <div
                key={t}
                className="rounded-md bg-white/5 px-3 py-2 text-xs text-surface-light/70"
                style={{ transform: `translateX(${(i % 2) * 8}px)` }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* After */}
        <div
          className="rounded-xl border border-accent/30 bg-white/5 p-5 backdrop-blur-sm"
          style={{ boxShadow: "0 0 60px -20px rgba(0,185,166,0.5)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            After
          </p>
          <p className="mt-2 text-sm font-medium text-surface-light">
            Contextualized AI Execution
          </p>
          <div className="mt-4 space-y-2">
            {[
              "Context mapped from email & SAP",
              "AI Agent resolved exception",
              "Human Supervisor approved",
              "Payment scheduled (early-discount)",
              "Audit trail logged in ERP",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-2 rounded-md bg-accent/10 px-3 py-2 text-xs text-surface-light"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BeforeAfterVisual() {
  return (
    <div className="grid gap-4">
      <div className="rounded-xl border border-border bg-card p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Today
        </p>
        <p className="mt-1 text-sm font-medium text-foreground">
          Information scattered everywhere
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-8 rounded-md bg-muted"
              style={{
                transform: `rotate(${(i % 3) - 1}deg) translateY(${(i % 2) * 4}px)`,
                opacity: 0.5 + (i % 4) * 0.1,
              }}
            />
          ))}
        </div>
      </div>
      <div
        className="rounded-xl border border-accent/30 bg-card p-6"
        style={{ boxShadow: "0 0 60px -28px rgba(0,185,166,0.5)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          With Rollio
        </p>
        <p className="mt-1 text-sm font-medium text-foreground">
          One organized, connected flow
        </p>
        <div className="mt-4 space-y-2">
          {['Read', 'Decide', 'Execute', 'Verify'].map((s) => (
            <div
              key={s}
              className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm"
            >
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span className="font-medium text-foreground">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoPlaceholder({ label }: { label: string }) {
  // Visible placeholder — swap `src` once a real URL exists.
  const placeholderSrc = "[INSERT VIDEO URL]";
  const isReal = /^https?:\/\//.test(placeholderSrc);
  if (isReal) {
    return <VideoEmbed src={placeholderSrc} title={label} />;
  }
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-muted text-center">
      <div className="px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          [INSERT VIDEO URL]
        </p>
        <p className="mt-2 text-sm text-foreground">{label}</p>
      </div>
    </div>
  );
}

function StoryRow({ term, desc }: { term: string; desc: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
        {term}
      </dt>
      <dd className="mt-1 text-muted-foreground">{desc}</dd>
    </div>
  );
}

function MetricTile({ value, label }: { value: string; label: string }) {
  return (
    <Card variant="elevated" className="p-5 text-center">
      <p className="font-display text-2xl font-bold text-primary md:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </Card>
  );
}
