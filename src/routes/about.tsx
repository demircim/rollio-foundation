import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeo({
      path: "/about",
      title: "About — Rollio",
      description:
        "Rollio builds AI agents that run the work behind enterprise operations — built by an outcomes-first team.",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Section className="!py-20 md:!py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          About Rollio
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
          We build AI agents for the work that runs your business.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Rollio is an enterprise-grade AI platform that reads your whole business and
          gets work done across Order-to-Cash, Finance, Claims, and IT Service Management.
          Outcome-based pricing, security-first architecture, and live in 90 days.
        </p>
        <div className="mt-10">
          <Button variant="primary" size="lg" asChild>
            <Link to="/consultation-booking">
              Schedule a consultation <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
