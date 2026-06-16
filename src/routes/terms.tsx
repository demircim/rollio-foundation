import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    buildSeo({
      path: "/terms",
      title: "Terms of Service — Rollio",
      description: "The terms that govern your use of Rollio's products and services.",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section className="!py-20 md:!py-28">
      <article className="mx-auto max-w-3xl prose prose-slate">
        <h1>Terms of Service</h1>
        <p className="lead text-muted-foreground">
          This page is a placeholder. The full Rollio Terms of Service will be published
          here. For contractual inquiries in the meantime, contact legal@rollio.ai.
        </p>
      </article>
    </Section>
  );
}
