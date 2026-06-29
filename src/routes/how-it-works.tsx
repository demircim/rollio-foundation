import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Sprout,
  CheckCircle2,
  Mail,
  MessageSquare,
  FileText,
  Database,
  Zap,
  Target,
  ShieldCheck,
  Users,
  Eye,
} from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { buildSeo, breadcrumbListLd } from "@/lib/seo";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    buildSeo({
      path: "/how-it-works",
      title: "How it Works: The Contextual Data Engine | Rollio",
      description:
        "See how Rollio's AI Agents ingest unstructured data, connect it to your ERP, and execute complex business workflows autonomously. Real example inside.",
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ]),
      ],
    }),
  component: HowItWorksPage,
});

/* ---------------- Counter hook ---------------- */
function useCountUp(target: number, start: boolean, duration = 900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

function useInView<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -60px 0px", ...opts },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, opts]);
  return { ref, inView };
}

/* ---------------- Page ---------------- */
function HowItWorksPage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SemanticArchitecture />
      <HowItWorksSteps />
      <RealExample />
      <ResultsMetrics />
      <CtaSection />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <Section
      tone="dark"
      bleed
      className="relative overflow-hidden !py-0"
      data-hero-dark
    >
      <div className="relative bg-gradient-to-br from-[#0D0D24] via-[#1A1A4A] to-[#6366F1]/70">
        {/* floating orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          style={{ animation: "float 11s ease-in-out infinite" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-white/10 blur-3xl"
          style={{ animation: "float 14s ease-in-out infinite reverse" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
          style={{ animation: "float 13s ease-in-out infinite" }}
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-content flex-col items-center justify-center px-6 py-28 text-center md:px-8 md:py-36">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-accent opacity-0"
            style={{ animation: "fadeInUp 0.6s ease-out 0.05s forwards" }}
          >
            How It Works
          </p>
          <h1
            className="mt-5 max-w-4xl font-display text-4xl font-bold tracking-tight text-surface-light opacity-0 md:text-6xl lg:text-7xl"
            style={{ animation: "fadeInUp 0.7s ease-out 0.2s forwards" }}
          >
            The Engine Behind Autonomous Execution
          </h1>
          <div
            className="mt-7 max-w-2xl space-y-1 text-lg text-surface-light/85 opacity-0 md:text-xl"
            style={{ animation: "fadeInUp 0.7s ease-out 0.4s forwards" }}
          >
            <p>Standard automation stops when data gets messy.</p>
            <p>We built a data engine that reads the context.</p>
            <p>So your AI Agents can finally do the work.</p>
          </div>
          <div
            className="mt-10 opacity-0"
            style={{ animation: "fadeInUp 0.7s ease-out 0.6s forwards" }}
          >
            <Button asChild size="lg" variant="primary">
              <a href="#cta-target">
                See How It Works <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-22px) translateX(10px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </Section>
  );
}

/* ---------------- Problem ---------------- */
function ProblemSection() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const sources = [
    { Icon: Database, label: "Business Systems" },
    { Icon: Mail, label: "Emails" },
    { Icon: MessageSquare, label: "Chat Messages" },
    { Icon: FileText, label: "Documents" },
  ];

  return (
    <Section className="!py-20 md:!py-28">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-20"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            The Architecture Gap
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Why standard bots fail at real-world work.
          </h2>
          <p className="mt-4 text-lg font-medium text-foreground">
            Your systems are rigid. But your business is unstructured.
          </p>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Business doesn't happen neatly inside database rows. It happens in email threads, Slack negotiations, PDF contracts, and support tickets.
            </p>
            <p>
              Standard RPA and basic LLM integrations fail because they only see the structured 20% of your business. When they hit an unstructured exception, the automation breaks and a human has to step in.
            </p>
            <p>
              To build truly autonomous AI agents, you need an architecture that understands context—translating human communication into machine-actionable data.
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4">
            {sources.map(({ Icon, label }, i) => (
              <div
                key={label}
                className="group rounded-2xl border bg-card p-6 text-center opacity-0 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-lg"
                style={
                  inView
                    ? {
                        animation: `scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) ${
                          0.15 * (i + 1)
                        }s forwards`,
                      }
                    : undefined
                }
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <p className="mt-4 text-sm font-semibold">{label}</p>
              </div>
            ))}
          </div>

          <div className="my-6 flex justify-center" aria-hidden>
            <div className="h-10 w-0.5 bg-gradient-to-b from-transparent to-accent" />
          </div>

          <div
            className="rounded-2xl border-l-4 border-accent bg-accent/10 p-6 opacity-0"
            style={
              inView
                ? { animation: "scaleIn 0.7s ease-out 0.9s forwards" }
                : undefined
            }
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
              <div>
                <p className="font-display text-lg font-bold">
                  The Contextual Data Engine
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Bridging unstructured human reality with structured ERP systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Semantic Architecture ---------------- */
function SemanticArchitecture() {
  const { ref, inView } = useInView<HTMLDivElement>();

  const layers = [
    {
      n: "01",
      question: "What's relevant?",
      title: "Semantic Index",
      body: "Every ERP field — KUNNR, VBELN, ERDAT — gets a plain-language business description generated automatically. The agent now knows that KUNNR is a customer account number tied to a credit limit, not an opaque key. No manual data dictionaries. No months of documentation work.",
      color: "rgba(99,102,241,0.15)",
      border: "rgba(99,102,241,0.4)",
    },
    {
      n: "02",
      question: "What's related?",
      title: "Knowledge Graph",
      body: "Structural foreign keys tell you where data links. Semantic edges tell you why it matters. The Knowledge Graph connects a credit block to the open invoice, the invoice to the email dispute, and the dispute to the key account manager — relationships no schema can express.",
      color: "rgba(0,185,166,0.12)",
      border: "rgba(0,185,166,0.35)",
    },
    {
      n: "03",
      question: "How to compute?",
      title: "Progressive Skills",
      body: "Instead of stuffing a context window with every schema doc and policy PDF, Progressive Skills inject only the rules, calculations, and business logic the agent needs for this specific task. Precise context, not a data dump — so agents stay fast and accurate at scale.",
      color: "rgba(139,92,246,0.12)",
      border: "rgba(139,92,246,0.35)",
    },
  ];

  return (
    <Section tone="default" className="!py-20 md:!py-28">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            The Semantic Intelligence Layer
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Three questions. One architecture.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Before an agent can act, it needs to answer three questions about your data. The Semantic Intelligence Layer answers all three — automatically.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {layers.map((layer, i) => (
            <div
              key={layer.n}
              className="relative rounded-2xl border p-8 opacity-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                backgroundColor: layer.color,
                borderColor: layer.border,
                ...(inView
                  ? {
                      animation: `scaleIn 0.7s cubic-bezier(0.34,1.56,0.64,1) ${0.15 * (i + 1)}s forwards`,
                    }
                  : {}),
              }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                Layer {layer.n}
              </p>
              <p
                className="mt-1 text-xs font-semibold italic text-muted-foreground"
              >
                "{layer.question}"
              </p>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
                {layer.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {layer.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center">
          <p className="text-base font-medium text-foreground">
            Together, these three layers transform raw enterprise data into something AI agents can actually reason about — and act on.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- How It Works Steps ---------------- */
function HowItWorksSteps() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const steps = [
    {
      n: 1,
      Icon: Brain,
      title: "We Ingest & Map",
      body: "Rollio securely reads your structured systems (SAP, Salesforce) alongside unstructured channels (Email, Slack, PDFs) without altering your source of truth.",
      accent: "var(--navy)",
    },
    {
      n: 2,
      Icon: Sprout,
      title: "We Contextualize",
      body: "Our engine links the raw data. It understands that an angry email from a vendor is directly connected to PO #4821 and a specific delivery delay.",
      accent: "var(--teal)",
    },
    {
      n: 3,
      Icon: CheckCircle2,
      title: "Agents Execute & Log",
      body: "The AI Agent executes the optimal action in your ERP based on your business rules, leaving a permanent, human-readable audit trail.",
      accent: "var(--navy)",
    },
  ];

  return (
    <Section tone="muted" className="!py-20 md:!py-28">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            The Methodology
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            How Rollio Agents execute workflows.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three steps to autonomy: <span className="font-semibold text-foreground">Ingest → Contextualize → Execute</span>
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {/* connector line */}
          <div
            aria-hidden
            className="absolute left-[16%] right-[16%] top-12 hidden h-0.5 origin-left bg-gradient-to-r from-primary via-accent to-primary md:block"
            style={
              inView
                ? { animation: "lineExpand 0.9s ease-out 0.7s forwards", transform: "scaleX(0)" }
                : { transform: "scaleX(0)" }
            }
          />

          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border-t-4 bg-card p-8 opacity-0 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl md:p-10"
              style={{
                borderTopColor: s.accent,
                ...(inView
                  ? {
                      animation: `scaleIn 0.7s cubic-bezier(0.34,1.56,0.64,1) ${
                        0.15 * (i + 1)
                      }s forwards`,
                    }
                  : {}),
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-display text-5xl font-extrabold leading-none"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--navy), var(--teal))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  0{s.n}
                </span>
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent"
                  style={{ animation: `float ${4 + i}s ease-in-out infinite` }}
                >
                  <s.Icon className="h-7 w-7" aria-hidden />
                </div>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Real Example ---------------- */
function RealExample() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [revealed, setRevealed] = useState(false);

  const beforeItems = ["Invoice arrives in SAP", "Price mismatch flagged", "Routed for manual review"];
  const hiddenItems = [
    "Agent reads email history",
    "Finds approved price change via Slack",
    "Matches new price to PO",
  ];

  const impacts = [
    { label: "Bottleneck Found", value: "Manual exception review" },
    { label: "Agent Action", value: "Contextual 3-way match" },
    { label: "84% Faster", value: "7 days → 2 hours" },
    { label: "Result", value: "Zero human touch" },
  ];

  return (
    <Section className="!py-20 md:!py-28">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Real Example
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Exception Handling: From 7 Days to 2 Hours
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            How contextual understanding accelerates complex workflows.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Before */}
          <div
            className="rounded-2xl border bg-card p-8 opacity-0 md:p-10"
            style={
              inView
                ? { animation: "slideInLeft 0.8s ease-out forwards" }
                : undefined
            }
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Before
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
              What Systems Show
            </h3>
            <ul className="mt-6 space-y-4">
              {beforeItems.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl bg-muted px-4 py-3 text-sm font-semibold text-foreground">
              ⏱️ Reported delay: <span className="text-primary">3 days</span>
            </div>
          </div>

          {/* After */}
          <div
            className="rounded-2xl border-2 border-accent/30 bg-card p-8 opacity-0 md:p-10"
            style={
              inView
                ? { animation: "slideInRight 0.8s ease-out 0.2s forwards" }
                : undefined
            }
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              After — With Rollio
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
              The Complete Picture
            </h3>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Invoice arrives in SAP</span>
              </li>

              {hiddenItems.map((t, i) => (
                <li
                  key={t}
                  className={`flex items-start gap-3 transition-all ${
                    revealed ? "opacity-100" : "max-h-0 overflow-hidden opacity-0"
                  }`}
                  style={
                    revealed
                      ? {
                          animation: `fadeInUp 0.5s ease-out ${0.15 * i}s both`,
                        }
                      : undefined
                  }
                >
                  <Eye className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Price mismatch flagged</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Routed for manual review</span>
              </li>
            </ul>

            <div className="mt-8 space-y-2 rounded-xl bg-accent/10 px-4 py-3 text-sm">
              <p className="font-semibold">
                📊 Manual bottleneck: <span className="text-primary">7 days</span>
              </p>
              <p className="font-semibold text-accent-foreground">
                ✨ With Contextual AI Action:{" "}
                <span className="text-teal-text">2 hours</span>
              </p>
            </div>

            <Button
              variant={revealed ? "outline" : "primary"}
              size="default"
              className="mt-6 w-full"
              onClick={() => setRevealed(true)}
              disabled={revealed}
            >
              {revealed ? "Revealed ✓" : "See What We See"}
            </Button>
          </div>
        </div>

        {/* Impact box */}
        <div className="mt-10 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/5 p-8 md:p-10">
          <h3 className="font-display text-xl font-bold tracking-tight">
            Real Business Impact
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impacts.map((it) => (
              <div
                key={it.label}
                className="rounded-xl border bg-card p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {it.label}
                </p>
                <p className="mt-2 font-semibold text-foreground">{it.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Results ---------------- */
function ResultsMetrics() {
  const { ref, inView } = useInView<HTMLDivElement>();

  const metrics: {
    Icon: typeof Zap;
    target: number;
    suffix: string;
    label: string;
    desc: string;
  }[] = [
    {
      Icon: Zap,
      target: 60,
      suffix: "%",
      label: "Faster Processing",
      desc: "Average cycle time reduction",
    },
    {
      Icon: Target,
      target: 99,
      suffix: "%",
      label: "Accuracy",
      desc: "In autonomous decision making",
    },
    {
      Icon: ShieldCheck,
      target: 100,
      suffix: "%",
      label: "Auditability",
      desc: "Every action fully logged",
    },
    {
      Icon: Users,
      target: 4,
      suffix: "h",
      label: "Team Focus",
      desc: "Hours saved per person weekly",
    },
  ];

  return (
    <Section tone="muted" className="!py-20 md:!py-28">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            The Results
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Autonomy you can measure.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The impact of contextual data on enterprise operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} inView={inView} delay={0.15 * i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function MetricCard({
  Icon,
  target,
  suffix,
  label,
  desc,
  inView,
  delay,
}: {
  Icon: typeof Zap;
  target: number;
  suffix: string;
  label: string;
  desc: string;
  inView: boolean;
  delay: number;
}) {
  const count = useCountUp(target, inView, 900);
  return (
    <div
      className="group rounded-2xl border-2 border-border bg-card p-8 opacity-0 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl"
      style={
        inView
          ? {
              animation: `scaleIn 0.7s cubic-bezier(0.34,1.56,0.64,1) ${delay}s forwards`,
            }
          : undefined
      }
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"
        style={{ animation: `float ${4 + delay * 4}s ease-in-out infinite` }}
      >
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <p
        className="mt-6 font-display text-5xl font-extrabold tracking-tight"
        style={{
          background: "linear-gradient(135deg, var(--navy), var(--teal))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {count}
        {suffix}
      </p>
      <p className="mt-3 font-display text-lg font-bold tracking-tight">
        {label}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

/* ---------------- CTA ---------------- */
function CtaSection() {
  return (
    <Section
      tone="dark"
      bleed
      id="cta-target"
      className="relative overflow-hidden !py-0"
    >
      <div className="relative bg-gradient-to-br from-[#0D0D24] via-[#1A1A4A] to-[#3B3BBF]">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          style={{ animation: "float 12s ease-in-out infinite" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          style={{ animation: "float 14s ease-in-out infinite reverse" }}
        />

        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:px-8 md:py-28">
          <h2 className="font-display text-3xl font-bold tracking-tight text-surface-light md:text-5xl">
            See the Engine in Action
          </h2>
          <p className="mt-5 text-lg text-surface-light/85 md:text-xl">
            A 30-minute architectural deep-dive into how we contextualize your data.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="primary">
              <Link to="/consultation-booking">
                Book an Architecture Call <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <a href="https://www.youtube.com/watch?v=msXUD4HzDoE&t=7s" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
