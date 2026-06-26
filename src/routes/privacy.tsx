import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Database, FileCheck, ArrowRight } from "lucide-react";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    buildSeo({
      path: "/privacy",
      title: "Privacy Policy — Rollio",
      description:
        "Zero data-at-rest architecture. Inherited permissions. SOC 2 Type II certified. How Rollio keeps your enterprise data private and secure.",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Section tone="dark" className="!py-20 md:!py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Privacy
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Privacy by Design. Data That Stays Yours.
          </h1>
          <p className="mt-6 text-lg text-surface-light/80">
            Your data never leaves your infrastructure. We process it — we don't store it.
          </p>
        </div>
      </Section>

      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Our Privacy Philosophy
          </h2>
          <div className="mt-6 space-y-5 text-lg text-muted-foreground">
            <p>
              At Rollio, we believe data privacy is not a checkbox — it's a foundation.
              We've designed our platform from the ground up with one core principle:{" "}
              <span className="font-medium text-foreground">
                your data is yours, and we never store it.
              </span>
            </p>
            <p>
              Unlike traditional SaaS platforms that warehouse your data, Rollio
              processes information in-memory for the duration of a task, then it's
              gone. No backup databases. No long-term storage. No liability.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { icon: Database, title: "Zero data-at-rest", body: "Agents read from your systems, process in-memory, execute, and discard. Nothing is written to disk on our side." },
              { icon: Shield, title: "Inherited permissions", body: "Agents operate using the same permissions you've already set in your source systems. No separate security model." },
              { icon: Lock, title: "End-to-end encryption", body: "TLS 1.2+ in transit between your systems and Rollio. Official, secure APIs and MCP connections — no screen scraping." },
              { icon: FileCheck, title: "Data processor, not controller", body: "You're the data controller. We're the processor. We handle data only as you direct, never for secondary purposes, never to train models." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border bg-card p-6">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Our Certification
          </h2>
          <div className="mt-6 rounded-2xl border bg-card p-8">
            <p className="font-semibold text-foreground text-lg">SOC 2 Type II</p>
            <p className="mt-3 text-muted-foreground">
              Rollio has achieved SOC 2 Type II certification. Our systems, processes, and controls have been independently audited and verified by a third-party auditor against AICPA standards for Security, Availability, Confidentiality, Processing Integrity, and Privacy. The audit covers all Rollio production systems, infrastructure, and operations. We are audited annually.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Enterprise customers may request a copy of the audit report under NDA. Email{" "}
              <a
                href="mailto:security@rollio.ai"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                security@rollio.ai
              </a>{" "}
              with "SOC 2 Report Request" in the subject.
            </p>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Last updated: July 2025
          </p>
        </div>
      </Section>


      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              The Information We Collect
            </h2>

            <h3 className="mt-8 font-semibold">From you (when you contact us)</h3>
            <p className="mt-2 text-muted-foreground">
              Name, email, phone, company, job title, and message details when you
              request a demo, download content, or subscribe to updates. Used to
              respond to inquiries and (with your consent) keep you informed about
              Rollio. Retained until you unsubscribe or request deletion.
            </p>

            <h3 className="mt-6 font-semibold">From your use of our website</h3>
            <p className="mt-2 text-muted-foreground">
              IP address, browser info, pages visited, referrer, device, and cookies.
              Processed by Google Analytics, HubSpot, and CloudFlare to understand and
              improve the site. Typically retained 12–24 months. Opt out of Google
              Analytics at{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="underline-offset-4 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                tools.google.com/dlpage/gaoptout
              </a>
              .
            </p>

            <h3 className="mt-6 font-semibold">From your systems (when agents run)</h3>
            <p className="mt-2 text-muted-foreground">
              Business process data, contextual information from emails/tickets/notes,
              and system metadata used to execute the workflows you configure.{" "}
              <span className="font-medium text-foreground">
                Processed in-memory and never stored by Rollio — 0-day retention.
              </span>{" "}
              Your source systems remain the system of record.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              How We Use Your Information
            </h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>To provide Rollio services — run agents and execute decisions in your systems.</li>
              <li>To improve Rollio — analyze aggregate patterns, never your specific data.</li>
              <li>To communicate with you — support, product updates (with consent), and security notices.</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              <span className="font-semibold text-foreground">We do not</span> train AI
              models on your data, share it with third parties (except sub-processors
              under DPA), or sell or monetize it.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Third-Party Sub-Processors
            </h2>
            <p className="mt-3 text-muted-foreground">
              All sub-processors sign a DPA, implement equivalent security, and may
              never use your data for their own purposes. Current sub-processors
              include Amazon Web Services (infrastructure), Intercom (support), and
              HubSpot (CRM/email). You may object to a new sub-processor before we
              engage them.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Your Privacy Rights
            </h2>
            <p className="mt-3 text-muted-foreground">
              You have the right to access, correct, delete, port, or object to
              processing of your personal information. EU residents have additional
              GDPR rights. California residents have additional CCPA rights — and
              Rollio does not sell or share personal information.
            </p>
            <p className="mt-4 text-muted-foreground">
              To exercise any right, email{" "}
              <a
                href="mailto:support@rollio.ai"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                support@rollio.ai
              </a>{" "}
              with "Privacy Request" in the subject line, or write to Rollio, Inc.,
              41 Flatbush Ave, Suite 232, Brooklyn, NY 11217. We aim to respond within
              30 days.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              International Data Transfers
            </h2>
            <p className="mt-3 text-muted-foreground">
              Rollio is based in the United States. Data from outside the U.S. may be
              processed here under U.S. law with additional safeguards (encryption,
              contracts). EU transfers rely on Standard Contractual Clauses.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Changes to This Policy
            </h2>
            <p className="mt-3 text-muted-foreground">
              We may update this policy from time to time and will post updates here.
              Material changes will be notified by email.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Questions?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Privacy team:{" "}
              <a href="mailto:privacy@rollio.ai" className="font-medium text-foreground underline-offset-4 hover:underline">
                privacy@rollio.ai
              </a>{" "}
              · Support:{" "}
              <a href="mailto:support@rollio.ai" className="font-medium text-foreground underline-offset-4 hover:underline">
                support@rollio.ai
              </a>
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dark" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            See how zero-data-at-rest works in practice.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" asChild>
              <Link to="/security">
                Read our security architecture <ArrowRight />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/consultation-booking">Schedule a consultation</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
