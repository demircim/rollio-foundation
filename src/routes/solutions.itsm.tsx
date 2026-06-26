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
    question: "Does Rollio work with our ticketing system?",
    answer:
      "Yes. Ready-made connections to ServiceNow, Jira Service Management, Zendesk, Freshservice, and the major IT platforms. Rollio reads and writes through the connections you already use — your ticketing system stays the system of record.",
  },
  {
    question: "What tickets can Rollio resolve on its own?",
    answer:
      "Within the rules you set: password resets, account create/deactivate, license requests, printer and VPN issues, common network checks, and equipment requests — typically the 60% of routine tickets that follow well-known patterns. Anything outside policy is routed to a human with full context attached.",
  },
  {
    question: "How does Rollio handle incident response and change management?",
    answer:
      "Incidents are triaged, classified, and routed with relevant context from recent changes and prior incidents pulled in automatically. Change requests are checked against policy and prior outcomes; risky changes are escalated to CAB with the full impact assessment attached.",
  },
  {
    question: "What about user onboarding and offboarding?",
    answer:
      "Rollio runs the full checklist: accounts created across systems, licenses assigned, equipment ordered, access provisioned per role, and the new hire notified — by end of Day 1, not Day 3. Offboarding revokes access across all systems within minutes of the trigger.",
  },
];


export const Route = createFileRoute("/solutions/itsm")({
  head: () =>
    buildSeo({
      path: "/solutions/itsm",
      title: "Autonomous AI Agents for ITSM & Ticketing | Rollio",
      description:
        "Deploy AI Agents that read unstructured IT tickets, cross-reference your CMDB, and autonomously resolve L1/L2 requests within ServiceNow or Jira.",
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/" },
          { name: "IT Service Management", path: "/solutions/itsm" },
        ]),
        faqPageLd(FAQS),
      ],
    }),
  component: ITSMPage,
});

const workflows = [
  {
    title: "Password reset",
    steps: [
      "Verify user identity",
      "Check policy and MFA",
      "Trigger reset across systems",
      "Send secure instructions",
      "Confirm successful login",
      "Close ticket with audit log",
    ],
    before: "30 min",
    after: "5 min",
  },
  {
    title: "New-hire onboarding",
    steps: [
      "Read HRIS new-hire record",
      "Create accounts across systems",
      "Assign licenses by role",
      "Order and ship equipment",
      "Provision access permissions",
      "Notify new hire and manager",
    ],
    before: "2–3 days",
    after: "Done by end of Day 1",
  },
  {
    title: "Incident response",
    steps: [
      "Triage and classify",
      "Pull CMDB and recent changes",
      "Match prior incidents",
      "Route with full context",
      "Track resolution",
      "Generate post-incident summary",
    ],
    before: "Hours of context-gathering",
    after: "Routed in minutes",
  },
];

const outcomes = [
  { metric: "Resolution time", from: "5–10 days", to: "2–4 hrs" },
  { metric: "First-contact resolution", from: "30%", to: "75%+" },
  { metric: "User satisfaction", from: "5/10", to: "8–9/10" },
  { metric: "IT labor savings", from: "—", to: "40–50% ($200K–$500K/yr)" },
];

const timelineSteps = [
  {
    label: "Week 1–2",
    title: "Discovery",
    description:
      "Map your ticketing system, common request types, the CMDB, and the email/Slack context around them. Identify the highest-impact routine tickets and define a 30-day pilot.",
  },
  {
    label: "Week 3–6",
    title: "Pilot",
    description:
      "Rollio starts handling triage and high-volume routine tickets (typically password resets and access requests), within the rules and limits you set.",
  },
  {
    label: "Month 2–3",
    title: "Scaling",
    description:
      "Expand to incident response, change management, and onboarding/offboarding. Performance tuning and team training on management.",
  },
  {
    label: "Month 4+",
    title: "Full Speed",
    description:
      "75%+ first-contact resolution, 2–4 hour resolution times, and your IT team on strategic work and complex cases — with 24/7 coverage built in.",
  },
];

function ITSMPage() {
  return (
    <>
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
            Enterprise AI Solutions · ITSM &amp; Ticketing
          </span>
          <h1 className="mt-6 text-balance">
            Autonomously resolve IT tickets with{" "}
            <span className="text-accent">Context-Aware Agents.</span>
          </h1>
          <p className="mt-6 text-lg text-surface-light/80 md:text-xl">
            IT tickets are natural language — and standard RPA can't read them. Rollio's Contextual Data Engine translates unstructured intent into structured actions, bridges ServiceNow with your CMDB and HRIS, and empowers AI Agents to resolve L1/L2 tickets end-to-end. No data scientists required.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Book an ITSM Assessment <ArrowRight />
              </Link>
            </Button>

          </div>
        </div>
      </Section>

      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="max-w-2xl">
            <CardEyebrow>The ITSM Bottleneck</CardEyebrow>
            <h2>Standard IT automation cannot read human context.</h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                Your users don't submit perfectly formatted requests; they write natural language. Because standard workflows and RPA bots cannot understand unstructured text, automation breaks at step one. Your ticketing system becomes an expensive routing tool.
              </p>
              <p>
                Highly paid engineers spend 60% of their day reading tickets, manually checking the CMDB, verifying HRIS data, and executing routine fixes (like password resets or VPN access). Volume outpaces headcount, resulting in bloated MTTR (Mean Time to Resolution) and frustrated users.
              </p>
            </div>
          </div>

          <Grid cols={2} gap="sm">
            <StatTile value="60%" label="Time on routine tickets" />
            <StatTile value="30%" label="First-contact resolution" />
            <StatTile value="5–10d" label="Resolution time" />
            <StatTile value="5/10" label="User satisfaction" />
          </Grid>
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-3xl">
          <CardEyebrow>The Solution</CardEyebrow>
          <h2>Contextual resolution, not just routing.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Rollio bridges the gap. By contextualizing the unstructured intent of a user's ticket with your structured CMDB and identity data, our AI Agents actually solve problems end-to-end, escalating only complex incidents to human engineers.
          </p>
        </div>

        <Grid cols={3} gap="lg" className="mt-12">
          {[
            { title: "Contextual Triage", body: "Every ticket is read, understood, categorized, and prioritized in seconds—with relevant CMDB context automatically attached." },
            { title: "Autonomous L1/L2 Resolution", body: "Password resets, access provisioning, and VPN troubleshooting are executed end-to-end without human touch." },
            { title: "AI-Assisted Incident Response", body: "Agents instantly pull related configuration items, recent changes, and prior incident patterns so engineers can act immediately." },
            { title: "Intelligent Change Management", body: "Change requests are cross-referenced against policies and historical patterns, surfacing risk profiles for Human Supervisors." },
            { title: "Zero-Touch Onboarding", body: "Cross-system account creation, license assignment, and access provisioning are fully executed by Day 1." },
            { title: "Continuous SLA Enforcement", body: "Agents monitor SLA thresholds proactively, resolving imminent breaches or escalating them before they impact users." },
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
            <strong className="text-primary">The business impact:</strong> 75%+ autonomous
            first-contact resolution, MTTR reduced from days to hours, and your engineers finally focused on strategic infrastructure.
          </p>
        </Card>
      </Section>

      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>Workflow Examples</CardEyebrow>
          <h2>How the ITSM Agent operates in reality.</h2>
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
            <h2>Measurable impact on resolution, satisfaction, and capacity.</h2>
            <p className="mt-6 text-muted-foreground">
              Baselines and targets are set during your consultation, anchored to your
              current ticket volume and team structure.
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
          <h2>Your 90-day path to hands-free ITSM.</h2>
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
            <h2 className="text-surface-light">Ready to deploy autonomous ITSM Agents?</h2>
            <p className="mt-3 text-surface-light/75">
              Let's map your highest-volume ticket categories and identify the fastest path to autonomous resolution.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Book an ITSM Assessment <ArrowRight />
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
