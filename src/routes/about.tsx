import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeo({
      path: "/about",
      title: "About Rollio — Making AI a Natural Extension of How We Work",
      description:
        "Rollio deploys autonomous AI agents that handle complex, repetitive enterprise work — so human teams focus on strategy, innovation, and growth.",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="dark" className="!py-20 md:!py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            About Rollio
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Making AI a Natural Extension of How We Work
          </h1>
          <p className="mt-6 text-lg text-surface-light/80 md:text-xl">
            We're on a mission to free enterprise teams from repetitive work and let them
            focus on strategy, innovation, and growth.
          </p>
        </div>
      </Section>

      {/* Mission */}
      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Our Mission
          </h2>
          <div className="mt-6 space-y-5 text-lg text-muted-foreground">
            <p>
              Every enterprise has world-class talent spending countless hours on manual
              processes that could be automated. We believe these teams deserve better.
            </p>
            <p className="font-medium text-foreground">
              Rollio exists to deploy autonomous AI agents that handle the complex,
              repetitive work — so human teams can focus on strategic initiatives that
              drive real business value.
            </p>
            <p>
              Our agents don't replace people. They free people. Your best talent should
              spend their time on what humans do best: strategy, innovation, and growth.
              Not on repetitive, manual tasks.
            </p>
          </div>
        </div>
      </Section>

      {/* Origin */}
      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Our Origin Story
          </h2>
          <div className="mt-6 space-y-5 text-lg text-muted-foreground">
            <p>
              Rollio was founded with a simple observation: process mining tools show
              enterprises what's broken. But they don't fix anything. They sit on
              dashboards. Actionable intelligence gets lost in reports that nobody reads.
            </p>
            <p className="font-medium text-foreground">
              Meanwhile, your team is still doing the work manually.
            </p>
            <p>
              We built Rollio to bridge that gap. Our agents read your complete business
              context — not just structured data, but the 80% that lives in emails,
              tickets, and conversations. Then they act autonomously in real-time to
              execute what your business needs.
            </p>
            <p>
              We're not another reporting tool. We're not another RPA platform that
              breaks when reality changes. We're outcome-focused partners that execute
              the outcomes your business needs.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Our Values
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Discover What Matters",
                body:
                  "Complete business context matters. Your agents should understand the whole picture before deciding — not just what's in your ERP, but what's in emails, tickets, and conversations. That's where the real intelligence lives.",
              },
              {
                title: "Execute What Works",
                body:
                  "Understanding is just the start. Real impact comes from execution. Our agents execute autonomously, 24/7, within guardrails you set. Your business doesn't wait for humans. Neither should your agents.",
              },
              {
                title: "Learn Continuously",
                body:
                  "The world changes. Your processes change. Traditional automation breaks. Our agents learn from execution and adapt when your business evolves. Value compounds over time — not degrades.",
              },
              {
                title: "Outcome-Based Partnership",
                body:
                  "We don't believe in feature counting or seat licenses. We believe in outcomes. We succeed when you succeed. Your outcomes drive our revenue. That's how partnerships should work.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border bg-card p-6 md:p-8"
              >
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Meet Our Leadership
          </h2>

          <figure className="mt-10 rounded-2xl border bg-card p-8 md:p-10">
            <blockquote className="font-display text-xl italic leading-relaxed text-foreground md:text-2xl">
              "We at Rollio have always envisioned that one day AI will become a
              natural extension of who we are — allowing us to focus on what we want
              to do, instead of how to get there. That is our goal with every agent we
              build."
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-semibold">Markus Demirci</p>
              <p className="text-sm text-muted-foreground">CEO &amp; Co-Founder</p>
            </figcaption>
            <p className="mt-6 text-muted-foreground">
              Markus leads Rollio's vision and strategy. Before founding Rollio, he
              spent years observing enterprise teams trapped in manual processes — and
              wondering why process mining tools never actually automated anything.
              That frustration became Rollio's founding thesis.
            </p>
          </figure>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { role: "Chief Product Officer", note: "Building autonomous agents that execute" },
              { role: "Chief Technology Officer", note: "Semantic understanding + execution architecture" },
              { role: "Chief Commercial Officer", note: "Customer success & outcomes" },
            ].map((m) => (
              <div key={m.role} className="rounded-xl border bg-card p-5">
                <p className="font-semibold">{m.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.note}</p>
                <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground/70">
                  Coming soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Traction */}
      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Our Traction
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { metric: "Enterprise customers", value: "Fortune 500", note: "Finance, Operations, Claims, ITSM" },
              { metric: "Working capital freed", value: "$2.1M+", note: "Campari alone — across customers, growing" },
              { metric: "Autonomous executions", value: "Millions / yr", note: "Across customer workflows daily" },
              { metric: "Outcome-based pricing", value: "100%", note: "We only win when you win" },
              { metric: "Compliance", value: "SOC 2 Type II", note: "GDPR · HIPAA-ready · FedRAMP path" },
              { metric: "Time to value", value: "90 days", note: "From kickoff to production agents" },
            ].map((t) => (
              <div key={t.metric} className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {t.metric}
                </p>
                <p className="mt-2 font-display text-3xl font-bold tracking-tight">
                  {t.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Where based */}
      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Where We're Based
            </h2>
            <p className="mt-6 text-muted-foreground">
              We're based in Brooklyn — at the center of enterprise technology
              innovation. But our customers span the globe. Our agents work 24/7 across
              multiple time zones, executing autonomously for enterprises everywhere.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-accent" />
              <div>
                <p className="font-semibold">Headquarters — Brooklyn, NY</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  41 Flatbush Ave, Suite 232
                  <br />
                  Brooklyn, NY 11217
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-accent" />
              <a
                href="mailto:hello@rollio.ai"
                className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                hello@rollio.ai
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Commitment */}
      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Our Commitment to You
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["Complete Transparency", "We tell you how we work, what we're building, and where we're headed."],
              ["Outcome-Based Approach", "We measure success by your outcomes, not our features."],
              ["Enterprise-Grade Security", "SOC 2 Type II compliance, zero-trust architecture, your data never stored on our systems."],
              ["Continuous Learning", "Your feedback shapes our product. Your outcomes drive our innovation."],
            ].map(([t, b]) => (
              <div key={t} className="rounded-2xl border bg-card p-6">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Join + Press */}
      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-8">
            <h3 className="font-display text-2xl font-bold tracking-tight">
              Join Our Mission
            </h3>
            <p className="mt-3 text-muted-foreground">
              If you believe enterprise teams deserve better than manual drudgery, that
              AI should execute not just analyze, and that outcomes matter more than
              features — join us. We're building autonomous agents that work.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Careers page coming soon —{" "}
              <a
                href="mailto:hello@rollio.ai"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                hello@rollio.ai
              </a>
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-8">
            <h3 className="font-display text-2xl font-bold tracking-tight">
              Press &amp; Media
            </h3>
            <p className="mt-3 text-muted-foreground">
              Featured in Salesforce AppExchange, Celonis Innovation Blog, Wealth
              &amp; Finance, and more.
            </p>
            <p className="mt-4 text-sm">
              Press contact:{" "}
              <a
                href="mailto:media@rollio.ai"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                media@rollio.ai
              </a>
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="dark" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Ready to meet our team?
          </h2>
          <p className="mt-4 text-lg text-surface-light/80">
            We'd love to show you how Rollio agents can transform your enterprise
            operations.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Schedule a consultation <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
