import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/case-studies/campari")({
  head: () => ({
    meta: [
      { title: "Campari Case Study — Rollio" },
      { name: "description", content: "How Campari scaled with Rollio." },
    ],
  }),
  component: () => (
    <PageStub
      eyebrow="Case study"
      title="Campari"
      description="How a global beverage leader unified operations across 20+ markets with Rollio."
    />
  ),
});
