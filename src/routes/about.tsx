import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeo({
      path: "/about",
      title: "About Rollio — The Architects of Contextual AI Agents",
      description:
        "Rollio was founded to bridge the gap between rigid enterprise systems and unstructured reality. Meet the team building the Contextual Data Engine.",
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
            We Build the Engine for Autonomous Enterprise Work
          </h1>
          <p className="mt-6 text-lg text-surface-light/80 md:text-xl">
            We are on a mission to bridge the gap between rigid data silos and true AI autonomy, freeing enterprise teams to focus on strategy, innovation, and growth.
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
              Every enterprise has world-class talent spending countless hours acting as human bridges between unstructured emails and rigid ERP systems. We believe these teams deserve better.
            </p>
            <p className="font-medium text-foreground">
              Rollio exists to deploy Autonomous AI Agents powered by a Contextual Data Engine. We handle the complex, unstructured workflows so human teams can focus on strategic initiatives.
            </p>
            <p>
              Our agents don't replace people; they augment them. By executing the mundane, we unlock your talent to do what humans do best: strategic problem solving and relationship building.
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
              Rollio was founded on a hard truth: Billions are spent on RPA and process mining, yet the actual work remains manual. Why? Because existing tools only understand structured data.
            </p>
            <p className="font-medium text-foreground">
              But 80% of enterprise business happens in unstructured context — emails, contracts, approvals, and chat. And existing tools — whether Celonis, ServiceNow, or basic RPA — lack the translation layer that converts this unstructured reality into data AI agents can actually act on.
            </p>
            <p>
              We built Rollio to close this gap. The Contextual Data Engine is that missing translation layer — bridging your ERP, your process intelligence tools, and your unstructured communications into a unified, AI-executable context. Without it, true AI autonomy is impossible. With it, your agents can do real work.
            </p>

            <p>
              We are not another dashboard. We are not another brittle bot. We are the execution layer for the modern enterprise.
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
                title: "Context is the Missing Link",
                body:
                  "SAP has the transaction. Celonis has the process. ServiceNow has the ticket. But none of them alone gives an AI agent what it needs to act. Rollio connects the dots — structured data, unstructured communications, and business rules — into one coherent picture.",
              },

              {
                title: "Execution over Analysis",
                body:
                  "Dashboards don't save time; action does. We build agents that execute end-to-end workflows safely within your exact guardrails.",
              },
              {
                title: "Human-in-the-Loop Trust",
                body:
                  "Trust is earned through transparency. We design our systems to keep you in control, escalating edge cases seamlessly to Human Supervisors.",
              },
              {
                title: "Outcome-Based Partnership",
                body:
                  "We align our success entirely with yours. We don't sell seats; we sell measurable reductions in cycle times and manual effort.",
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
              "We founded Rollio because we saw enterprise teams trapped acting as human APIs. We knew that if we could build an engine to contextualize the messy reality of business, we could unlock true AI autonomy."
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-semibold">Markus Demirci</p>
              <p className="text-sm text-muted-foreground">CEO &amp; Co-Founder</p>
            </figcaption>
            <p className="mt-6 text-muted-foreground">
              Markus leads Rollio's vision and strategy. Before founding Rollio, he spent years working with global enterprises watching teams spend their days acting as human bridges between SAP, Celonis, ServiceNow, and the emails, spreadsheets, and approvals surrounding them. That frustration became Rollio's founding thesis: without a translation layer, AI agents will always hit a ceiling.
            </p>
          </figure>
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
              { metric: "Enterprise customers", value: "Global Enterprise", note: "FS/Insurance · Manufacturing · ITSM · Tech" },
              { metric: "Outcome-based pricing", value: "100%", note: "We only win when you win" },
              { metric: "Compliance", value: "SOC 2 Type II", note: "GDPR · HIPAA-ready · FedRAMP path" },
              { metric: "Time to first value", value: "30 days", note: "Pilot results within the first month" },
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
              Featured on Salesforce AppExchange, recognised in the Celonis Innovation community, and covered in enterprise AI automation publications. Rollio is a certified Celonis integration partner.

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
            Ready to discuss your enterprise architecture?
          </h2>
          <p className="mt-4 text-lg text-surface-light/80">
            We'd love to show you how our Contextual Data Engine can transform your specific workflows.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Book an Architecture Call <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
