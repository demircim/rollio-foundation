import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, Download, TrendingUp } from "lucide-react";
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
      "Rollio reads the full context — the PO, the receipt, the invoice, and the email thread around them — to resolve the exception on its own when it can: missing references, unit-of-measure mismatches, price tolerances, duplicate detection, and tax differences. When an exception falls outside the rules you set (unusual amount, new vendor, contract gap), Rollio routes it to the right person with everything they need to decide in one place, and learns from the outcome.",
  },
  {
    question: "Will this change our vendor relationships?",
    answer:
      "Yes — for the better. Vendors get faster, more predictable communication, on-time payments, and early-discount capture where it makes sense. Rollio handles vendor outreach in your tone and on your schedule, escalates issues before they become disputes, and gives your team time back for strategic vendor management instead of chasing paperwork.",
  },
  {
    question: "Does Rollio work with our procurement system (SAP, Ariba, Coupa)?",
    answer:
      "Yes. Ready-made connections to SAP S/4HANA and ECC, Ariba, Coupa, Oracle, NetSuite, and the major e-invoicing networks. Typical integration: 2–3 weeks. Rollio reads and writes through the connections you already use, without changing your source of truth.",
  },
  {
    question: "What about contract edge cases — discounts, rebates, special terms?",
    answer:
      "Rollio reads the contract alongside the transaction, so volume rebates, tiered pricing, payment-term variations, and special clauses are applied automatically. Edge cases that aren't clearly covered by a rule are routed to a person for a one-time decision, and the pattern is captured so the next similar case is handled cleanly.",
  },
];

export const Route = createFileRoute("/solutions/order-to-cash")({
  head: () =>
    buildSeo({
      path: "/solutions/order-to-cash",
      title: "Order-to-Cash & Procurement Automation — Rollio",
      description:
        "Hands-free order-to-cash: Rollio's AI agents handle PO creation, invoice checks, payment timing, and vendor management — around the clock.",
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
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Solutions · Order-to-Cash &amp; Procurement
          </span>
          <h1 className="mt-6 text-balance">
            From order to cash in days,{" "}
            <span className="text-accent">not weeks.</span>
          </h1>
          <p className="mt-6 text-lg text-surface-light/80 md:text-xl">
            Rollio handles your full procure-to-pay and order-to-cash work — purchase
            orders, invoice checks, payment timing, vendor management — around the clock.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Schedule Consultation <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <a href="#" aria-label="Download O2C Guide (placeholder)">
                <Download /> Download O2C Guide
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* ---------- Problem ---------- */}
      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="max-w-2xl">
            <CardEyebrow>The Problem</CardEyebrow>
            <h2>Your O2C process is a black hole.</h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                POs scattered across email, systems, and spreadsheets. Invoices arriving
                unchecked. Payment terms ignored. Frustrated vendors. Unpredictable cash
                flow.
              </p>
              <p>
                Teams spend 40% of their time reconciling POs to invoices, 30% on payment
                exceptions, and 20% chasing vendors. The result: a 45–60 day O2C cycle,
                2–5% of invoices needing correction, and $50–100 of labor per
                transaction.
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
          <h2>Hands-free order-to-cash.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Rollio's AI agents read the complete picture — your ERP plus the email,
            spreadsheet, and contract context around it — and do the work end-to-end.
          </p>
        </div>

        <Grid cols={2} gap="lg" className="mt-12">
          {[
            {
              title: "PO creation",
              body: "Read approvals, pull details, check budget and contract, create the PO, and confirm to the vendor.",
            },
            {
              title: "Invoice checking",
              body: "Three-way match against PO and receipt, catch duplicates, flag exceptions, and approve within policy.",
            },
            {
              title: "Payment timing",
              body: "Weigh discounts against cash flow and schedule payments at the optimal moment — automatically.",
            },
            {
              title: "Collections & follow-up",
              body: "Send reminders in your tone, track aged receivables, and escalate to a person only when needed.",
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
            <strong className="text-primary">The result:</strong> O2C cycle down to 15–20
            days, error rate under 0.5%, and cost per transaction at $10–15 — 80% lower.
          </p>
        </Card>
      </Section>

      {/* ---------- Workflow examples ---------- */}
      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Workflow Examples</CardEyebrow>
          <h2>What Rollio actually does, step by step.</h2>
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
              Ready to close the loop on order-to-cash?
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
            <Button variant="outline-light" size="lg" asChild>
              <a href="#" aria-label="Download O2C Guide (placeholder)">
                <Download /> Download Guide
              </a>
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
