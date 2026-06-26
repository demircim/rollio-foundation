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
    question: "How does Rollio stay compliant with HIPAA and regulatory deadlines?",
    answer:
      "Compliance is built in. Rollio honors timely-notice rules, required documentation, and regulatory deadlines for each line of business. PHI is handled per HIPAA: minimum necessary access, encryption in transit and at rest, and full audit logs of every read and write.",
  },
  {
    question: "Will Rollio make adjudication decisions on its own?",
    answer:
      "Within the rules and limits you set — yes, for clear-cut cases that match policy, coverage, and prior patterns. Edge cases, large amounts, and anything outside the rules are routed to a person with full context attached.",
  },
  {
    question: "Does Rollio work with our claims system?",
    answer:
      "Yes. Ready-made connections to Guidewire, Duck Creek, Majesco, FINEOS, and the major healthcare and government platforms, plus document intake from email, portals, and paper (scanned). Rollio reads and writes through the systems you already use.",
  },
  {
    question: "How is the audit trail handled?",
    answer:
      "Every action is logged: what was read, what rule applied, what was decided, and by whom (Rollio or a person). Auditors and regulators get a single, searchable trail per claim — no email archaeology required.",
  },
];


export const Route = createFileRoute("/solutions/claims")({
  head: () =>
    buildSeo({
      path: "/solutions/claims",
      title: "Autonomous AI Agents for Claims & Compliance | Rollio",
      description:
        "Deploy AI Agents that read unstructured claim documents, validate against policy coverage, and autonomously adjudicate claims with full compliance.",
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/" },
          { name: "Claims Processing", path: "/solutions/claims" },
        ]),
        faqPageLd(FAQS),
      ],
    }),
  component: ClaimsPage,
});

const workflows = [
  {
    title: "Claim intake",
    steps: [
      "Receive claim (email, portal, paper)",
      "Extract and normalize fields",
      "Verify member/policy",
      "Check coverage and exclusions",
      "Open case in claims system",
      "Acknowledge to claimant",
    ],
    before: "2–4 hrs",
    after: "15 min",
  },
  {
    title: "Compliance audit",
    steps: [
      "Pull case file and supporting docs",
      "Check timely-notice and deadlines",
      "Verify required documentation",
      "Run regulatory checks",
      "Generate audit-ready report",
      "Flag any gaps for review",
    ],
    before: "2–3 days",
    after: "30 min",
  },
  {
    title: "Adjudication & payment",
    steps: [
      "Apply policy and coverage rules",
      "Calculate eligible amount",
      "Route exceptions to a person",
      "Approve within limits",
      "Issue payment",
      "Notify claimant with rationale",
    ],
    before: "5–10 days",
    after: "1–2 days",
  },
];

const outcomes = [
  { metric: "Processing time", from: "5–10 days", to: "1–2 days" },
  { metric: "Compliance findings at audit", from: "10–15%", to: "0–2%" },
  { metric: "Rework rate", from: "5–8%", to: "<0.5%" },
  { metric: "Cost per claim", from: "$15–25", to: "$6–10 ($500K–$2M/yr)" },
];

const timelineSteps = [
  {
    label: "Week 1–2",
    title: "Discovery",
    description:
      "Map intake channels, claims system, policy and compliance rules, and the email/document context around them. Identify the highest-impact opportunities and define a 30-day pilot.",
  },
  {
    label: "Week 3–6",
    title: "Pilot",
    description:
      "Rollio starts handling intake and compliance checks on a defined slice, within the rules and limits you set. Real-time measurement and team training begin.",
  },
  {
    label: "Month 2–3",
    title: "Scaling",
    description:
      "Expand to adjudication, payment, and appeals. Performance tuning, more lines of business, and broader team enablement.",
  },
  {
    label: "Month 4+",
    title: "Full Speed",
    description:
      "Claims in hours, not days. 100% compliance posture, consistent decisions, and your team focused on complex cases and customer experience.",
  },
];

function ClaimsPage() {
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
            Enterprise AI Solutions · Claims &amp; Compliance
          </span>
          <h1 className="mt-6 text-balance">
            Process complex claims in hours,{" "}
            <span className="text-accent">with zero compliance risk.</span>
          </h1>
          <p className="mt-6 text-lg text-surface-light/80 md:text-xl">
            Claims arrive as messy emails, PDFs, and photos — not clean structured data. Rollio reads the unstructured reality, cross-references it with your policy systems, and empowers AI Agents to intake, validate, and adjudicate claims autonomously or prep them for a Human Supervisor. No data scientists required.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Book a Claims Assessment <ArrowRight />
              </Link>
            </Button>

          </div>
        </div>
      </Section>

      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="max-w-2xl">
            <CardEyebrow>The Core Claims Bottleneck</CardEyebrow>
            <h2>Rigid systems cannot read human context.</h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                Standard claims systems and RPA bots demand perfectly structured data. But the reality of a claim—a dispute, a medical record, a damaged shipment—is inherently unstructured. When your system can't read the context, automation stops.
              </p>
              <p>
                Highly skilled adjusters spend 50% of their day doing manual data entry: reading emails, extracting numbers, checking coverage limits in another system, and verifying compliance. This manual bottleneck results in 5–10 day processing times, compliance gaps at audit, and massive labor costs.
              </p>
            </div>
          </div>

          <Grid cols={2} gap="sm">
            <StatTile value="50%" label="Time on intake & validation" />
            <StatTile value="30%" label="Time on compliance & docs" />
            <StatTile value="5–10d" label="Processing time" />
            <StatTile value="10–15%" label="Findings at audit" />
          </Grid>
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-3xl">
          <CardEyebrow>The Solution</CardEyebrow>
          <h2>Contextual intake, autonomous adjudication.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Rollio bridges the gap. By contextualizing unstructured intake channels with your core claims system, our AI Agents can execute the entire workflow—validating policies, enforcing compliance, and adjudicating standard claims end-to-end.
          </p>
        </div>

        <Grid cols={3} gap="lg" className="mt-12">
          {[
            { title: "Contextual Intake & Extraction", body: "Agents read emails, portals, and scanned paper, extracting and normalizing data to open cases cleanly in your system." },
            { title: "Autonomous Policy Validation", body: "Instantly cross-references the extracted claim data against the member's specific policy, coverage limits, and exclusions." },
            { title: "Continuous Compliance", body: "Enforces timely-notice rules, verifies required documentation, and maintains HIPAA/regulatory compliance automatically." },
            { title: "AI-Driven Adjudication", body: "Applies policy rules to adjudicate clear-cut cases autonomously. Escalates complex edge cases to human adjusters with full context summaries." },
            { title: "Automated Payment & Rationale", body: "Issues approved payments and automatically generates detailed, contextual rationale letters for the claimant." },
            { title: "Audit-Ready Transparency", body: "Every AI decision and extraction is permanently logged. Auditors see exactly how a decision was reached, eliminating compliance risk." },
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
            <strong className="text-primary">The business impact:</strong> Processing time reduced to 1–2 days, compliance findings dropped to near zero, and cost-per-claim reduced by up to 60%.
          </p>
        </Card>
      </Section>

      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Workflow Examples</CardEyebrow>
          <h2>How the Claims Agent operates in reality.</h2>
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
            <h2>Measurable impact on speed, compliance, and cost.</h2>
            <p className="mt-6 text-muted-foreground">
              Baselines and targets are set during your consultation, anchored to your
              current claims volume and lines of business.
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
          <h2>Your 90-day path to hands-free claims.</h2>
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
            <h2 className="text-surface-light">Ready to deploy autonomous Claims Agents?</h2>
            <p className="mt-3 text-surface-light/75">
              Let's map your intake channels and identify the highest-volume claims ready for autonomous adjudication.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Book a Claims Assessment <ArrowRight />
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
