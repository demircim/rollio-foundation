import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/security")({
  head: () =>
    buildSeo({
      path: "/security",
      title: "Security & Compliance — Rollio",
      description:
        "SOC 2 Type II, ISO 27001, zero-trust architecture, encryption in transit and at rest. How Rollio keeps your data safe.",
    }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <Section className="!py-20 md:!py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Security & Compliance
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight">
          Built security-first.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          SOC 2 Type II, ISO 27001, GDPR compliant, HIPAA-ready, FedRAMP ready.
          Read-only access by default. Encryption in transit (TLS 1.3) and at rest
          (AES-256). Full audit trail of every action. Role-based access, MFA, IP
          allow-listing, and quarterly reviews.
        </p>
      </div>
    </Section>
  );
}
