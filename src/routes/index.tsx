import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles, Workflow, ShieldCheck, Zap, Mail, MessageSquare, Database, AlertCircle } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardEyebrow, CardTitle, CardBody } from "@/components/card";
import { Grid } from "@/components/grid";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/faq";
import { buildSeo, organizationLd, websiteLd, faqPageLd } from "@/lib/seo";



// ---------- FAQ content (Appendix A, plain-business voice) ----------

const HOME_FAQS: { question: string; answer: string }[] = [
  {
    question: "How long does deployment actually take?",
    answer:
      "Typically 30–90 days, depending on scope. Week 1–2 is Discovery: we read your information across systems, find the highest-impact opportunities, and define a 30-day pilot. Week 3–6 is Pilot: Rollio starts doing the work on a focused process slice while your team sets rules, reviews exceptions, and measures early impact. Month 2–3 is Scaling: expand to adjacent processes and broader volume once outcomes are proven.",
  },
  {
    question: "Is this the same as process mining (like Celonis)?",
    answer:
      "Process mining is a great foundation — it shows you what happened historically. Rollio goes two steps further. First, it reads everything: not just your structured data, but the messy context in emails, tickets, notes, and documents. Second, it acts on those insights by coordinating work across systems instead of only reporting bottlenecks.",
  },
  {
    question: "Will Rollio replace our existing systems?",
    answer:
      "No. Rollio works on top of the systems you already have. It reads without changing your source of truth, coordinates work across systems, and keeps your data where it lives. It works with Salesforce, ServiceNow, Microsoft, SAP, Celonis, and the tools your teams already rely on.",
  },
  {
    question: "How secure is Rollio with our data?",
    answer:
      "Security is foundational. Rollio is SOC 2 Type II certified with zero-trust architecture and inherited permissions from your own systems. Data handling: read-only access where possible, encryption in transit and at rest, audit logs on every agent action, and no unnecessary data duplication.",
  },
  {
    question: "How does outcome-based pricing work?",
    answer:
      "You pay based on the results your business achieves — not features or seats. Instead of a fixed subscription, pricing tracks measurable outcomes: faster payment cycles, reduced manual work, fewer exceptions, captured savings, faster approvals, or other business metrics agreed before launch.",
  },
  {
    question: "What's the investment range?",
    answer:
      "It's outcome-based and varies with the outcomes you're targeting, how many processes are in scope, and integration complexity. A small pilot usually starts with one process and a narrow success metric; broader deployments expand pricing as measurable value is proven.",
  },
  {
    question: "What if we don't see the outcomes we're targeting?",
    answer:
      "That's the point of outcome-based pricing — we're aligned with your success. If the targeted outcomes aren't reached, pricing adjusts accordingly. Whether the goal is a cash-conversion improvement, shorter approval cycle, lower exception rate, or fewer manual hours, the commercial model follows the business result.",
  },
  {
    question: "What systems does Rollio work with?",
    answer:
      "Ready-made connections cover Salesforce, Celonis, Microsoft Dynamics 365, Teams, Microsoft 365, ServiceNow, SAP S/4HANA, SAP ECC, SuccessFactors, and other systems through APIs, secure exports, and approved integration patterns.",
  },
  {
    question: "What's the difference between Rollio and RPA (like UiPath)?",
    answer:
      "Both automate, but very differently. RPA is rules-based ('if X, then Y') — it breaks when reality is more complex, reads only structured data, and needs reprogramming when your process changes. Rollio understands context, works across structured and unstructured information, and adapts within the business rules you set.",
  },
  {
    question: "Can we start small and expand?",
    answer:
      "Yes — it's what we recommend. Month 1–2: run a 30-day pilot on one high-impact process at a limited share of volume. Month 3–4: validate outcomes and expand to two or three related processes. Month 5 and beyond: scale to broader volume once the operating model is proven.",
  },
  {
    question: "What happens when our processes change?",
    answer:
      "Rollio adapts on its own. Old-style automation needs manual rule updates and breaks until they're done. Rollio keeps running within the rules you set, learns the new pattern, updates its understanding, and escalates only when a change requires human approval.",
  },
  {
    question: "Who should we talk to first?",
    answer:
      "Schedule a 30-minute consultation with our outcomes team. We'll talk through your top business challenges, the outcomes that matter most, which processes to prioritize, your timeline, and how Rollio can prove value quickly without disrupting the systems you already use.",
  },
];

// ---------- Static content ----------

const howTabs = [
  {
    key: "bridge",
    label: "Bridge",
    title: "Connects everything your AI needs.",
    body: "Rollio reads structured data from SAP, Celonis, and ServiceNow — and the unstructured context in emails, Teams messages, documents, and approvals. It translates both into a single, AI-executable picture of your business. No data scientists required.",
  },
  {
    key: "execute",
    label: "Execute",
    title: "Agents that act, not just recommend.",
    body: "AI Agents execute end-to-end: resolving invoice exceptions, clearing approval bottlenecks, triaging tickets, running compliance checks. Routine tasks run fully autonomous. Complex ones involve a human supervisor with full context already attached.",
  },
  {
    key: "scale",
    label: "Scale",
    title: "More volume. Same team.",
    body: "Transaction volume goes up. Exceptions multiply. Your team doesn't grow. Rollio handles the scale — processing more, faster, with fewer errors — while your people focus on the decisions that need them.",
  },
];


const whyChoose = [
  {
    icon: Workflow,
    eyebrow: "The Missing Bridge",
    title: "Works with Celonis, ServiceNow, AND your ERP — simultaneously.",
    body: "Most tools pick one system. Rollio connects all three: process intelligence from Celonis, workflows from ServiceNow, and real-time data from SAP or your ERP for business-critical decisions. The bridge your AI stack was missing.",
    cta: "See the architecture",
  },
  {
    icon: Sparkles,
    eyebrow: "No Data Scientists",
    title: "AI that learns your business. Not the other way around.",
    body: "No ML engineers, no data science team, no months of model training. The Contextual Data Engine understands your specific processes, business rules, and terminology — then automates accordingly. Your team deploys, controls, and governs everything.",
    cta: "See how it works",
  },
  {
    icon: Zap,
    eyebrow: "Three Levels of Autonomy",
    title: "From routine commands to complex human + AI decisions.",
    body: "Rollio operates at three levels: fully autonomous for routine processes, end-to-end orchestration for complex multi-step workflows, and — for true exceptions — brings the right people together with full AI context so decisions happen in minutes, not days.",
    cta: "See execution in action",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Non-Linear Scaling",
    title: "Scale revenue without scaling your back-office team.",
    body: "More sales volume shouldn't mean more Finance or Ops headcount. Rollio removes the human bottleneck — handling more transactions, more exceptions, more coordination — at constant team size. Your business scales; your team stays focused on strategy.",
    cta: "View implementation timeline",
  },
];


const proofLogos = ["Celonis", "Campari", "W&S Financial Group", "Capital One", "Manroland Goss", "Macquarie", "Waters Corp."];

// ---------- Route ----------

export const Route = createFileRoute("/")({
  head: () =>
    buildSeo({
      path: "/",
      title: "Rollio — Autonomous AI Agents for Enterprise Operations | Scale Without Headcount",
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
        className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center !py-16 md:!py-20"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #08081A 0%, #0D0D24 100%)",
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
        <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Enterprise AI Agents
            </span>
            <h1 className="mt-6 text-balance text-surface-light">
              Scale Your Business <span className="text-accent">Without Scaling Your Team.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-surface-light/75 md:text-xl">
              Bridges your ERP, your processes, and the unstructured context between them — so AI agents can execute real work, end-to-end.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" asChild>
                <Link to="/consultation-booking">
                  Book a Use-Case Assessment <ArrowRight />
                </Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>


          </div>
          <HeroVisual />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-surface-light">Scroll</span>
          <svg className="h-4 w-4 animate-bounce text-surface-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </Section>


      {/* ---------- Logo strip (standalone) ---------- */}
      <section className="border-b border-border bg-background py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Trusted by global leaders in critical operations
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-muted-foreground/80">
            {proofLogos.map((logo) => {
              if (logo === "W&S Financial Group") {
                return (
                  <span key={logo} className="group inline-flex flex-col items-center">
                    <span className="font-display text-base font-semibold">{logo}</span>
                    <Link
                      to="/case-studies/western-southern"
                      className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
                    >
                      Read story →
                    </Link>
                  </span>
                );
              }
              return (
                <span key={logo} className="font-display text-base font-semibold">
                  {logo}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Customer Stories ---------- */}
      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Customer Stories</CardEyebrow>
          <h2>Global enterprises. Real results.</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Campari */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-8">
            <span className="inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
              Finance &amp; Operations
            </span>
            <p className="mt-6 text-xl font-medium leading-snug text-foreground md:text-2xl">
              "Collaboration Agent will enhance our operational efficiency and improve transparency."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Laura Buseghin · Global Director Process Optimization &amp; Automation, Campari Group
            </p>
            <div className="mt-auto pt-8">
              <a
                href="https://www.youtube.com/watch?v=msXUD4HzDoE&t=7s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                ▶ Watch the story <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* W&S */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-8">
            <span className="inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
              Financial Services
            </span>
            <p className="mt-6 text-xl font-medium leading-snug text-foreground md:text-2xl">
              "Now we are experiencing more productivity while servicing customers. Our agents are trained significantly quicker."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Joe Lynch · VP Client Relationship Center, Western &amp; Southern Financial Group
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
              <Link
                to="/case-studies/western-southern"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                Read the story <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-500">
                🏆 Stevie Award Winner
              </span>
            </div>
          </div>
        </div>
      </Section>





      {/* ---------- Section 4 — Solution ---------- */}
      <Section tone="default">
        <div className="max-w-3xl">
          <CardEyebrow>The Solution</CardEyebrow>
          <h2>From discovering what matters to executing what works.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Three capabilities. One platform.
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

      {/* ---------- Section 5 — How It Works (Tabs) ---------- */}
      <Section tone="muted" id="how-it-works">

        <div className="max-w-2xl">
          <CardEyebrow>How It Works</CardEyebrow>
          <h2>Bridge. Execute. Scale.</h2>
        </div>
        <div className="mt-12">
          <HowItWorksTabs />
        </div>
      </Section>





      {/* ---------- Section 7 — Why Choose (2x2) ---------- */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <h2>Why Rollio.</h2>
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

      {/* ---------- Section 8 — Built for every enterprise function ---------- */}
      <Section tone="default">
        <div className="max-w-2xl">
          <h2>Built for every enterprise function.</h2>
        </div>

        <Grid cols={2} gap="lg" className="mt-12">
          <Card variant="elevated">
            <CardTitle>CFO &amp; Finance</CardTitle>
            <CardBody>
              Accelerate cash collections, reduce DSO, and automate last-mile AR/AP coordination. Scale transaction volume without adding Finance headcount.
            </CardBody>
          </Card>
          <Card variant="elevated">
            <CardTitle>CIO &amp; IT</CardTitle>
            <CardBody>
              Deploy AI automation without data scientists. Works on top of SAP, Celonis, or ServiceNow. SOC 2 Type II, zero-trust, and compliant out of the box.
            </CardBody>
          </Card>
          <Card variant="elevated">
            <CardTitle>COO &amp; Operations</CardTitle>
            <CardBody>
              Remove the coordination bottleneck between systems and people. Agents execute complex multi-step workflows end-to-end, escalating only true exceptions.
            </CardBody>
          </Card>
          <Card variant="elevated">
            <CardTitle>AI &amp; Automation CoE</CardTitle>
            <CardBody>
              Your Center of Excellence finally has an execution layer. Rollio connects your process intelligence tools to real ERP action — turning insights into outcomes without custom development.
            </CardBody>
          </Card>
        </Grid>

        <div className="mt-12 flex justify-center">
          <Button variant="primary" asChild>
            <Link to="/consultation-booking">Book a Use-Case Assessment</Link>
          </Button>
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
            "linear-gradient(180deg, #08081A 0%, #0D0D24 100%)",
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
                Book a Use-Case Assessment <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <a href="https://www.youtube.com/watch?v=msXUD4HzDoE&t=7s" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
            </Button>
          </div>
          <p className="mt-6 max-w-xl text-surface-light/75">
            30 minutes. No obligation. Let's find your highest-impact automation opportunity.
          </p>

        </div>
      </Section>
    </>
  );
}

// ---------- Local presentation helpers ----------

function HeroVisual() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const sources = [
    { label: "Invoice dispute", sub: "Email · Accounts Receivable", Icon: Mail },
    { label: "Approval request", sub: "Teams · Finance workflow", Icon: MessageSquare },
    { label: "Open PO #4821", sub: "SAP · Unmatched line item", Icon: Database },
    { label: "SLA at risk", sub: "ServiceNow · Ticket #8832", Icon: AlertCircle },
  ];

  const actions = [
    "Invoice exception resolved autonomously",
    "Approval routed with full context",
    "PO matched · payment scheduled",
    "Ticket triaged & escalated",
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
      <div className="grid grid-cols-[1fr_80px_1fr] items-center gap-2">

        {/* Left — Sources */}
        <div className="space-y-3">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-surface-light/35">
            Your data
          </p>
          {sources.map(({ label, sub, Icon }, i) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/5 px-4 py-3 transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-12px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-surface-light/40" />
              <div>
                <p className="text-xs font-semibold text-surface-light/90">{label}</p>
                <p className="text-[10px] text-surface-light/40">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center — Engine */}
        <div className="flex flex-col items-center gap-3">
          {/* Connecting arrow left */}
          <div
            className="mb-1 flex flex-col items-center gap-1 transition-opacity duration-700"
            style={{ opacity: visible ? 0.25 : 0, transitionDelay: "350ms" }}
            aria-hidden
          >
            <div className="h-px w-8 bg-accent" />
            <ArrowRight className="h-3.5 w-3.5 text-accent" />
          </div>

          {/* Engine orb */}
          <div
            className="relative flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transitionDelay: "380ms" }}
          >
            <div className="absolute inset-0 animate-ping rounded-full border border-accent/15" />
            <div className="absolute inset-[-6px] rounded-full border border-accent/10" />
            <Sparkles className="h-6 w-6 text-accent" />
          </div>

          <p
            className="text-center text-[9px] font-bold uppercase tracking-[0.12em] text-accent transition-opacity duration-500"
            style={{ opacity: visible ? 1 : 0, transitionDelay: "480ms" }}
          >
            Contextual
            <br />
            Data Engine
          </p>

          {/* Connecting arrow right */}
          <div
            className="mt-1 flex flex-col items-center gap-1 transition-opacity duration-700"
            style={{ opacity: visible ? 0.25 : 0, transitionDelay: "550ms" }}
            aria-hidden
          >
            <ArrowRight className="h-3.5 w-3.5 text-accent" />
            <div className="h-px w-8 bg-accent" />
          </div>
        </div>

        {/* Right — Actions */}
        <div className="space-y-3">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-surface-light/35">
            AI actions
          </p>
          {actions.map((a, i) => (
            <div
              key={a}
              className="flex items-start gap-3 rounded-xl border border-accent/15 bg-accent/10 px-4 py-3 transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(12px)",
                transitionDelay: `${600 + i * 100}ms`,
              }}
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p className="text-xs font-medium text-surface-light/85">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



function HowItWorksTabs() {
  const [active, setActive] = useState(howTabs[0].key);
  const current = howTabs.find((t) => t.key === active) ?? howTabs[0];
  return (
    <div>
      <div role="tablist" aria-label="How Rollio works" className="flex flex-wrap gap-x-8 gap-y-2 border-b border-border">
        {howTabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(tab.key)}
              className={`relative -mb-px py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              <span
                aria-hidden
                className={`absolute inset-x-0 -bottom-px h-0.5 transition-opacity ${
                  isActive ? "bg-accent opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>
      <div className="mt-8 max-w-3xl">
        <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
          {current.title}
        </h3>
        <p className="mt-4 text-lg text-muted-foreground">{current.body}</p>
      </div>
    </div>
  );
}

