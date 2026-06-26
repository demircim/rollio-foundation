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
    question: "Will Rollio replace our ERP or accounting system?",
    answer:
      "No. Rollio works on top of SAP, NetSuite, Oracle, Workday, Microsoft Dynamics, and the spreadsheets your team already uses. Your ERP stays the system of record; Rollio reads and writes through the connectors you already have.",
  },
  {
    question: "How does Rollio handle reconciliation exceptions?",
    answer:
      "Rollio reads the full context — the bank feed, the GL, related invoices and emails — and resolves common breaks on its own: timing differences, FX rounding, missing references. Exceptions outside policy are escalated with full context attached.",
  },
  {
    question: "Is this safe for month-end close and audit?",
    answer:
      "Yes. Every action is logged with a complete audit trail — what was read, what was decided, what was posted, and why. Materiality thresholds, approvals, and SoD controls are honored. Auditors get a single, searchable trail.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Most finance teams see measurable impact within 30 days of piloting — typically faster reconciliation and fewer manual entries — and a meaningful close-time reduction by month 2–3.",
  },
];


export const Route = createFileRoute("/solutions/finance")({
  head: () =>
    buildSeo({
      path: "/solutions/finance",
      title: "Autonomous AI Agents for Finance & Accounting | Rollio",
      description:
        "Deploy Finance AI Agents that contextualize unstructured data with your GL, autonomously resolving reconciliations and accelerating your month-end close.",
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/" },
          { name: "Finance & Accounting", path: "/solutions/finance" },
        ]),
        faqPageLd(FAQS),
      ],
    }),
  component: FinancePage,
});

const workflows = [
  {
    title: "Daily bank reconciliation",
    steps: [
      "Pull bank feed",
      "Match transactions to GL",
      "Resolve timing differences",
      "Flag true exceptions",
      "Post reconciled entries",
      "Notify controller by 9:15am",
    ],
    before: "2 hrs/day",
    after: "Done by 9:15am, zero manual",
  },
  {
    title: "Month-end close checklist",
    steps: [
      "Verify all sub-ledgers closed",
      "Run accrual & cutoff checks",
      "Reconcile inter-company balances",
      "Confirm revenue recognition",
      "Generate readiness report",
      "Route exceptions for review",
    ],
    before: "2 days",
    after: "2 hours",
  },
  {
    title: "Journal entries & accruals",
    steps: [
      "Read supporting documents",
      "Calculate accrual amounts",
      "Apply policy rules",
      "Draft journal entry",
      "Route for approval",
      "Post to GL with audit trail",
    ],
    before: "Manual, error-prone",
    after: "Automated, <0.5% errors",
  },
];

const outcomes = [
  { metric: "Close time", from: "10–15 days", to: "3–5 days" },
  { metric: "Error rate", from: "5–10 entries", to: "<0.5%" },
  { metric: "Monthly labor savings", from: "—", to: "$30K–60K ($360K–720K/yr)" },
  { metric: "Audit trail", from: "Scattered", to: "Complete, searchable" },
];

const timelineSteps = [
  {
    label: "Week 1–2",
    title: "Discovery",
    description:
      "Map your close process across ERP, sub-ledgers, and the spreadsheet/email context around them. Identify the highest-impact opportunities and define a 30-day pilot.",
  },
  {
    label: "Week 3–6",
    title: "Pilot",
    description:
      "Rollio starts handling daily reconciliation and routine journal entries on a defined slice, within the rules and limits you set. Real-time measurement and team training begin.",
  },
  {
    label: "Month 2–3",
    title: "Scaling",
    description:
      "Expand to accruals, inter-company reconciliation, and close procedures. Performance tuning and broader team enablement.",
  },
  {
    label: "Month 4+",
    title: "Full Speed",
    description:
      "Close runs in 3–5 days. The finance team shifts from processing to analysis, planning, and strategic work — with a complete audit trail for every action.",
  },
];

function FinancePage() {
  return (
    <>
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
            Enterprise AI Solutions · Finance &amp; Accounting
          </span>
          <h1 className="mt-6 text-balance">
            Accelerate month-end close with{" "}
            <span className="text-accent">Context-Aware AI Agents.</span>
          </h1>
          <p className="mt-6 text-lg text-surface-light/80 md:text-xl">
            The context your ERP is missing lives in emails, PDFs, and spreadsheets. Rollio bridges your GL with the full unstructured picture, empowering Finance AI Agents to autonomously handle reconciliation, accruals, and journal entries — and cut your month-end close to 3–5 days. No data scientists required.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Book a Finance Assessment <ArrowRight />
              </Link>
            </Button>
          </div>

        </div>
      </Section>

      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="max-w-2xl">
            <CardEyebrow>The Core Finance Bottleneck</CardEyebrow>
            <h2>Your ERP cannot read unstructured context.</h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                Standard RPA and ERP automation breaks the moment a transaction doesn't perfectly match. A missing PO reference, an FX rounding difference, or a disputed invoice requires context that your general ledger simply doesn't have.
              </p>
              <p>
                Highly skilled accountants spend 60% of their month doing manual detective work: digging through email chains to verify discrepancies, copy-pasting data into Excel for reconciliation, and drafting manual journal entries. This burns capital, delays the month-end close, and creates compliance risks.
              </p>
            </div>
          </div>

          <Grid cols={2} gap="sm">
            <StatTile value="60%" label="Time on reconciliation" />
            <StatTile value="20%" label="Time on manual entries" />
            <StatTile value="10–15d" label="Close time" />
            <StatTile value="$50–100K" label="Labor per close" />
          </Grid>
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-3xl">
          <CardEyebrow>The Solution</CardEyebrow>
          <h2>Contextual reconciliation, autonomous execution.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Rollio links your rigid ERP data (SAP, NetSuite, Oracle) with your messy, unstructured documents. Our Finance AI Agents understand the business reality behind a transaction, resolve exceptions autonomously, and draft fully compliant journal entries for human review.
          </p>
        </div>

        <Grid cols={3} gap="lg" className="mt-12">
          {[
            { title: "Context-Aware Reconciliation", body: "Agents read bank feeds, GLs, and the related email/invoice context to autonomously resolve timing and FX differences." },
            { title: "Intelligent Accruals", body: "Calculates accrual amounts directly from unstructured supporting documents, applying your specific policy rules." },
            { title: "Autonomous Journal Entries", body: "Drafts and posts journal entries to your ERP automatically, retaining a complete, searchable audit log for every action." },
            { title: "Inter-company Matching", body: "Matches transactions across multiple entities and currencies, flagging true anomalies for Human Supervisors." },
            { title: "Continuous Close Procedures", body: "Validates sub-ledgers and close checklists in real-time throughout the month, eliminating the eleventh-hour scramble." },
            { title: "Audit-Ready Transparency", body: "Every AI decision is logged. Auditors get a clear, traceable path from the unstructured source document to the final ERP posting." },
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
            <strong className="text-primary">The business impact:</strong> Month-end close reduced to 3–5 days, manual journal errors cut to &lt;0.5%, and full audit compliance out-of-the-box.
          </p>
        </Card>
      </Section>

      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Workflow Examples</CardEyebrow>
          <h2>How the Finance Agent operates in reality.</h2>
        </div>

        <Grid cols={3} gap="lg" className="mt-12">
          {workflows.map((w) => (
            <Card key={w.title} variant="elevated">
              <CardTitle>{w.title}</CardTitle>
              <ol className="mt-4 space-y-2">
                {w.steps.map((s, i) => (
                  <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[11px] font-bold text-accent">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Before</p>
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

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <CardEyebrow>Expected Outcomes</CardEyebrow>
            <h2>Measurable impact on close, accuracy, and capacity.</h2>
            <p className="mt-6 text-muted-foreground">
              Baselines and targets are set during your consultation, anchored to your
              current process and volume.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr className="text-left">
                  <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">Metric</th>
                  <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">Today</th>
                  <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wider text-accent">With Rollio</th>
                </tr>
              </thead>
              <tbody>
                {outcomes.map((o, i) => (
                  <tr key={o.metric} className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}>
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

      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Implementation</CardEyebrow>
          <h2>Your 90-day path to hands-free close.</h2>
        </div>
        <div className="mt-12">
          <Timeline items={timelineSteps} />
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>FAQ</CardEyebrow>
          <h2>Common questions.</h2>
        </div>
        <div className="mt-10 max-w-3xl">
          <FAQ items={FAQS} />
        </div>
      </Section>

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
            <h2 className="text-surface-light">Ready to deploy autonomous Finance Agents?</h2>
            <p className="mt-3 text-surface-light/75">
              Let's map your month-end close process and identify the manual bottlenecks slowing down your accounting team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Book a Finance Assessment <ArrowRight />
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
        {value.includes("%") ? <TrendingUp className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
        <p className="font-display text-2xl font-bold text-primary md:text-3xl">{value}</p>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </Card>
  );
}
