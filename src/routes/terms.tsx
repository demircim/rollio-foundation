import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    buildSeo({
      path: "/terms",
      title: "Terms of Service — Rollio",
      description:
        "The terms that govern your use of Rollio's autonomous agent platform, including outcome-based pricing and agent operation terms.",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <Section tone="dark" className="!py-20 md:!py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-lg text-surface-light/80">
            The terms that govern your use of Rollio's products and services.
          </p>
        </div>
      </Section>

      <Section className="!py-16 md:!py-24">
        <article className="mx-auto max-w-3xl space-y-10 text-muted-foreground">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              1–7. Standard Terms
            </h2>
            <p className="mt-3">
              Our standard terms cover account use, acceptable use, intellectual
              property, confidentiality, warranties, limitation of liability, and
              termination. The full executable agreement is provided with your order
              form. For a current copy, contact{" "}
              <a href="mailto:legal@rollio.ai" className="font-medium text-foreground underline-offset-4 hover:underline">
                legal@rollio.ai
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              8A. Outcome-Based Pricing Terms
            </h2>
            <p className="mt-4">
              <span className="font-semibold text-foreground">Outcome definitions.</span>{" "}
              Rollio's pricing is based on business outcomes you achieve through using
              Rollio agents, including (but not limited to) process cycle time
              reduction, cost per transaction reduction, error rate reduction,
              capacity increase, cash flow improvement, and other mutually agreed
              outcomes.
            </p>
            <p className="mt-3">
              <span className="font-semibold text-foreground">Outcome verification.</span>{" "}
              Outcomes are verified through your source systems (Salesforce, SAP,
              Celonis, etc.), third-party audits upon request, and mutually agreed
              measurement methodology.
            </p>
            <p className="mt-3">
              <span className="font-semibold text-foreground">Pricing adjustments.</span>{" "}
              If agreed outcomes are not achieved, pricing adjusts proportionally. We
              share the risk and reward of your results.
            </p>
            <p className="mt-3">
              <span className="font-semibold text-foreground">Renewal terms.</span>{" "}
              Pricing for renewal periods is recalculated based on actual outcomes
              achieved in the prior period.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              8B. Autonomous Agent Terms
            </h2>
            <p className="mt-4">
              <span className="font-semibold text-foreground">Agent authority.</span>{" "}
              Rollio agents operate with the authority and permissions you've granted
              them in your source systems. You maintain complete control over what
              data agents can access, what actions they can execute, the guardrails
              and constraints on agent behavior, and when and how agents operate.
            </p>
            <p className="mt-3">
              <span className="font-semibold text-foreground">Agent accountability.</span>{" "}
              Rollio maintains complete logs of all agent actions for audit trail and
              compliance, troubleshooting and support, performance analysis, and your
              review and approval.
            </p>
            <p className="mt-3">
              <span className="font-semibold text-foreground">
                Agent training &amp; improvement.
              </span>{" "}
              Rollio agents learn from execution patterns. This learning is limited to
              your own data and patterns, never shared with other customers, always
              within the guardrails you've set, and transparent and auditable.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              9–14. Standard Terms (continued)
            </h2>
            <p className="mt-3">
              Remaining sections cover data processing (see also our{" "}
              <Link to="/privacy" className="font-medium text-foreground underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              ), governing law, dispute resolution, and general provisions. Provided
              with your order form.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Contact
            </h2>
            <p className="mt-3">
              Contractual inquiries:{" "}
              <a href="mailto:legal@rollio.ai" className="font-medium text-foreground underline-offset-4 hover:underline">
                legal@rollio.ai
              </a>
            </p>
          </div>
        </article>
      </Section>

      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Questions about outcome-based pricing?
          </h2>
          <div className="mt-6">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Talk to our team <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
