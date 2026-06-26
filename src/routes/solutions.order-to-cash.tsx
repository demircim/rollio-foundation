import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardEyebrow, CardTitle, CardBody } from "@/components/card";
import { Grid } from "@/components/grid";
import { Timeline } from "@/components/timeline";
import { FAQ } from "@/components/faq";
import { Button } from "@/components/ui/button";
import { buildSeo, breadcrumbListLd, faqPageLd } from "@/lib/seo";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "How does Rollio handle invoice exceptions?",
    answer:
      "Rollio reads the full context — the PO, the receipt, the invoice, and the email thread around them — to resolve the exception on its own when it can: missing references, unit-of-measure mismatches, minor price variances within tolerance, and similar issues. True anomalies are escalated to a human supervisor with full context attached.",
  },
  {
    question: "Will this change our vendor relationships?",
    answer:
      "Yes — for the better. Vendors get faster, more predictable communication, on-time payments, and early-discount capture where it makes sense. Rollio handles vendor outreach in your tone and on your policies, so the experience stays consistent.",
  },
  {
    question: "Does Rollio work with our procurement system (SAP, Ariba, Coupa)?",
    answer:
      "Yes. Ready-made connections to SAP S/4HANA and ECC, Ariba, Coupa, Oracle, NetSuite, and the major e-invoicing networks. Typical integration: 2–3 weeks. Rollio reads and writes through the connectors you already have.",
  },
  {
    question: "What about contract edge cases — discounts, rebates, special terms?",
    answer:
      "Rollio reads the contract alongside the transaction, so volume rebates, tiered pricing, payment-term variations, and special clauses are applied automatically. Edge cases that aren't clearly covered are escalated with the relevant contract excerpts attached.",
  },
];


export const Route = createFileRoute("/solutions/order-to-cash")({
  head: () =>
    buildSeo({
      path: "/solutions/order-to-cash",
      title: "Autonomous AI Agents for Order-to-Cash | Rollio",
      description:
        "Deploy AI Agents that contextualize SAP data with email correspondence to autonomously resolve invoice exceptions and accelerate your cash conversion cycle.",
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/" },
          { name: "Order-to-Cash & Procurement", path: "/solutions/order-to-cash" },
        ]),
        faqPageLd(FAQS),
      ],
    }),
  component: OrderToCashPage,
});

const workflows = [
  {
    title: "PO processing",
    steps: [
      "Read approval email",
      "Pull PO details",
      "Check budget & contract",
      "Create PO in the system",
      "Confirm to vendor",
      "Set delivery reminder",
    ],
    before: "20 min",
    after: "2 min",
  },
  {
    title: "Invoice approval & payment",
    steps: [
      "Check against PO and receipt",
      "Three-way match",
      "Catch duplicates",
      "Flag exceptions",
      "Approve within policy",
      "Schedule best-timed payment",
      "Confirm to vendor",
    ],
    before: "2–3 days",
    after: "5 min",
  },
  {
    title: "Vendor payment timing",
    steps: [
      "Review vendor history",
      "Spot early-payment discounts (2/10 net 30)",
      "Weigh discount vs cash flow",
      "Recommend and act",
    ],
    before: "Missed discounts",
    after: "Capture $X / year",
  },
];

const outcomes = [
  { metric: "O2C cycle", from: "45–60 days", to: "15–20 days" },
  { metric: "Cost per transaction", from: "$50–100", to: "$10–15" },
  { metric: "Error rate", from: "2–5%", to: "<0.5%" },
  { metric: "Working capital freed", from: "—", to: "$0.5M–$2M" },
];

const timelineSteps = [
  {
    label: "Week 1–2",
    title: "Discovery",
    description:
      "Map your O2C and procurement flow across SAP/Ariba/Coupa plus the email and spreadsheet context around them. Identify the highest-impact opportunities and define a 30-day pilot.",
  },
  {
    label: "Week 3–6",
    title: "Pilot",
    description:
      "Rollio starts handling PO processing and invoice approvals on a defined slice (typically ~20% of volume), within the rules and limits you set. Real-time measurement and team training begin.",
  },
  {
    label: "Month 2–3",
    title: "Scaling",
    description:
      "Expand to payment timing and vendor management. Connect banking and AP networks. Performance tuning, more processes, and broader team enablement.",
  },
  {
    label: "Month 4+",
    title: "Full Speed",
    description:
      "Runs around the clock with light oversight. Procurement and finance teams shift from processing to strategy, with ongoing ROI tracking.",
  },
];

function OrderToCashPage() {
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
              "radial-gradient(60% 60% at 40% 40%, rgba(0,185,166,0.32) 0%, rgba(0,185,166,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(124,111,240,0.28) 0%, rgba(124,111,240,0) 60%)",
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Enterprise AI Solutions · Order-to-Cash
          </span>
          <h1 className="mt-6 text-balance">
            Accelerate Cash Flow with{" "}
            <span className="text-accent">Context-Aware AI Agents.</span>
          </h1>
          <p className="mt-6 text-lg text-surface-light/80 md:text-xl">
            Your ERP only sees the transaction. Rollio reads the full context — emails, contracts, PO history — and bridges SAP, Celonis, and ServiceNow so AI Agents can resolve invoice exceptions, manage vendor communications, and close the order-to-cash loop autonomously. No data scientists required.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Book an O2C Assessment <ArrowRight />
              </Link>
            </Button>

          </div>
        </div>
      </Section>

      {/* ---------- Problem ---------- */}
      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="max-w-2xl">
            <CardEyebrow>The Core O2C Bottleneck</CardEyebrow>
            <h2>Your ERP lacks the context to automate.</h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                Standard RPA bots and SAP workflows fail when exceptions occur because they cannot read unstructured data. When a price mismatch or missing PO reference happens, the automation stops.
              </p>
              <p>
                Your finance team spends hours manually digging through email threads to find the context, reconciling it with the ERP, and chasing vendors. The result: bloated DSO (Days Sales Outstanding), missed early-payment discounts, and a scaling wall for your back-office.
              </p>
            </div>
          </div>

          <Grid cols={2} gap="sm">
            <StatTile value="40%" label="Time on PO/invoice reconciliation" />
            <StatTile value="30%" label="Time on payment exceptions" />
            <StatTile value="45–60d" label="O2C cycle" />
            <StatTile value="$50–100" label="Labor per transaction" />
          </Grid>
        </div>
      </Section>

      {/* ---------- Solution ---------- */}
      <Section tone="muted">
        <div className="max-w-3xl">
          <CardEyebrow>The Solution</CardEyebrow>
          <h2>Contextual data meets autonomous execution.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Rollio bridges the gap. By contextualizing your unstructured communications with your structured ERP data, our AI Agents can execute complex O2C workflows end-to-end, escalating only true anomalies to a Human Supervisor.
          </p>
        </div>

        <Grid cols={2} gap="lg" className="mt-12">
          {[
            {
              title: "Contextual PO Processing",
              body: "Agents read approval emails, validate against budget/contracts, create the PO in SAP, and handle vendor confirmation.",
            },
            {
              title: "Autonomous Exception Handling",
              body: "Performs 3-way matching. When an exception occurs, the Agent reads the email history to understand the context and resolves it within policy.",
            },
            {
              title: "Strategic Payment Timing",
              body: "Analyzes vendor history and dynamic discount terms to schedule payments that optimize your working capital.",
            },
            {
              title: "Intelligent Vendor Follow-up",
              body: "Proactively tracks missing documents and sends context-aware reminders in your corporate tone, preventing payment delays.",
            },
          ].map((c) => (
            <Card key={c.title} variant="elevated">
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                <CheckCircle2 className="h-5 w-5" aria-hidden />
              </span>
              <CardTitle>{c.title}</CardTitle>
              <CardBody>{c.body}</CardBody>
            </Card>
          ))}
        </Grid>

        <Card variant="elevated" className="mt-12 max-w-3xl border-accent/30 bg-accent/5">
          <p className="text-base text-foreground">
            <strong className="text-primary">The business impact:</strong> O2C cycle reduced to 15–20 days, error rates under 0.5%, and human touchpoints reduced by up to 80%.
          </p>
        </Card>
      </Section>

      {/* ---------- Workflow examples ---------- */}
      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Workflow Examples</CardEyebrow>
          <h2>How the O2C Agent operates in reality.</h2>
        </div>

        <Grid cols={3} gap="lg" className="mt-12">
          {workflows.map((w) => (
            <Card key={w.title} variant="elevated">
              <CardTitle>{w.title}</CardTitle>
              <ol className="mt-4 space-y-2">
                {w.steps.map((s, i) => (
                  <li
                    key={s}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[11px] font-bold text-accent">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Before
                  </p>
                  <p className="mt-1 font-medium text-foreground">{w.before}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-accent">After</p>
                  <p className="mt-1 font-medium text-primary">{w.after}</p>
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* ---------- Expected outcomes ---------- */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <CardEyebrow>Expected Outcomes</CardEyebrow>
            <h2>Measurable impact on the metrics that matter.</h2>
            <p className="mt-6 text-muted-foreground">
              Baselines and targets are set during your consultation, anchored to your
              current process and volume.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr className="text-left">
                  <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Metric
                  </th>
                  <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Today
                  </th>
                  <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wider text-accent">
                    With Rollio
                  </th>
                </tr>
              </thead>
              <tbody>
                {outcomes.map((o, i) => (
                  <tr
                    key={o.metric}
                    className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}
                  >
                    <td className="px-5 py-4 font-medium text-foreground">{o.metric}</td>
                    <td className="px-5 py-4 text-muted-foreground">{o.from}</td>
                    <td className="px-5 py-4 font-semibold text-primary">{o.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ---------- Implementation Timeline ---------- */}
      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Implementation</CardEyebrow>
          <h2>Your 90-day path to hands-free O2C.</h2>
        </div>
        <div className="mt-12">
          <Timeline items={timelineSteps} />
        </div>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>FAQ</CardEyebrow>
          <h2>Common questions.</h2>
        </div>
        <div className="mt-10 max-w-3xl">
          <FAQ items={FAQS} />
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
              "radial-gradient(60% 60% at 30% 40%, rgba(0,185,166,0.30) 0%, rgba(0,185,166,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(124,111,240,0.28) 0%, rgba(124,111,240,0) 60%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-surface-light">
              Ready to deploy autonomous O2C Agents?
            </h2>
            <p className="mt-3 text-surface-light/75">
              Let's map your current O2C workflows and identify the highest-impact areas for contextual AI automation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Book an O2C Assessment <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <Card variant="elevated" className="p-5">
      <div className="flex items-center gap-2 text-accent">
        {value.includes("%") ? (
          <TrendingUp className="h-4 w-4" />
        ) : (
          <Clock className="h-4 w-4" />
        )}
        <p className="font-display text-2xl font-bold text-primary md:text-3xl">
          {value}
        </p>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </Card>
  );
}
