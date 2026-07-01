import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/msa")({
  head: () =>
    buildSeo({
      path: "/msa",
      title: "Master Service Agreement — Rollio",
      description:
        "Rollio's Master Service Agreement governing enterprise software licensing, agent operations, data processing, and outcome-based pricing.",
    }),
  component: MsaPage,
});

function MsaPage() {
  return (
    <>
      <Section tone="dark" className="!py-20 md:!py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Master Service Agreement
          </h1>
          <p className="mt-6 text-lg text-surface-light/80">
            The enterprise agreement governing your use of Rollio's autonomous agent platform.
          </p>
        </div>
      </Section>

      <Section className="!py-16 md:!py-24">
        <article className="mx-auto max-w-3xl space-y-10 text-muted-foreground">

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              About This Agreement
            </h2>
            <p className="mt-3">
              Rollio's Master Service Agreement (MSA) is a comprehensive enterprise contract governing the licensing, deployment, and operation of Rollio's autonomous agent platform. The MSA covers all aspects of the enterprise relationship: licensing terms, SLAs, data processing, security obligations, and outcome-based pricing mechanics.
            </p>
            <p className="mt-3">
              Enterprise customers receive a fully executed MSA as part of the order process. The document is tailored to your organization's specific deployment scope, agreed outcomes, and regulatory requirements.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              What the MSA Covers
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                { title: "Platform License", body: "Rights to deploy and operate Rollio agents within your enterprise environment, including sub-processor and affiliate rights." },
                { title: "Service Level Agreement", body: "Uptime commitments, incident response times, support tiers, and remedies for service failures." },
                { title: "Data Processing Agreement", body: "Your rights as data controller, our obligations as data processor, sub-processor lists, and DPA terms aligned with GDPR and CCPA." },
                { title: "Security Obligations", body: "Minimum security standards, breach notification timelines, audit rights, and SOC 2 Type II report access." },
                { title: "Outcome-Based Pricing", body: "How outcomes are defined, measured, and verified. Pricing adjustment mechanics when targets aren't met." },
                { title: "Intellectual Property", body: "Ownership of your data, your configurations, and any customizations. Rollio retains IP in its platform and models." },
                { title: "Confidentiality", body: "Mutual NDA terms. Your data, processes, and business information are confidential by default." },
                { title: "Termination & Exit", body: "Notice periods, data portability upon exit, and data deletion timelines post-termination." },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-2xl border bg-card p-5">
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Requesting Your MSA
            </h2>
            <p className="mt-3">
              The current MSA template is available to prospective enterprise customers under NDA. To request a copy or begin negotiations:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                Email{" "}
                <a href="mailto:legal@rollio.ai" className="font-medium text-foreground underline-offset-4 hover:underline">
                  legal@rollio.ai
                </a>{" "}
                with "MSA Request" in the subject line.
              </li>
              <li>Or schedule a consultation — your account executive will initiate the contract process.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Governing Law
            </h2>
            <p className="mt-3">
              The MSA is governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Disputes are resolved through binding arbitration (AAA rules), with the option for either party to seek equitable relief in courts of competent jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Related Documents
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/terms" className="font-medium text-foreground underline-offset-4 hover:underline">Terms of Service</Link>{" "}
                — Platform usage terms including agent operation and outcome pricing.
              </li>
              <li>
                <Link to="/privacy" className="font-medium text-foreground underline-offset-4 hover:underline">Privacy Policy</Link>{" "}
                — How we handle data and our zero-data-at-rest architecture.
              </li>
              <li>
                <Link to="/security" className="font-medium text-foreground underline-offset-4 hover:underline">Security &amp; Compliance</Link>{" "}
                — SOC 2 Type II, GDPR, and security architecture details.
              </li>
            </ul>
          </div>
        </article>
      </Section>

      <Section tone="dark" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Ready to move to contract?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Schedule a consultation <ArrowRight />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:legal@rollio.ai">Email legal@rollio.ai</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
