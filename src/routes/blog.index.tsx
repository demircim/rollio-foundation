import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Rollio" },
      { name: "description", content: "Insights on enterprise automation." },
    ],
  }),
  component: () => (
    <PageStub
      eyebrow="Blog"
      title="Insights for the modern enterprise"
      description="Perspectives on automation, operations, and scale. Posts coming soon."
    />
  ),
});
