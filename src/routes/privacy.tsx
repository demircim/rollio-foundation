import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    buildSeo({
      path: "/privacy",
      title: "Privacy Policy — Rollio",
      description: "How Rollio collects, processes, and protects your information.",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section className="!py-20 md:!py-28">
      <article className="mx-auto max-w-3xl prose prose-slate">
        <h1>Privacy Policy</h1>
        <p className="lead text-muted-foreground">
          This page is a placeholder. The full Rollio Privacy Policy will be published
          here. For privacy inquiries in the meantime, contact privacy@rollio.ai.
        </p>
      </article>
    </Section>
  );
}
