import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/solutions/finance")({
  head: () => ({
    meta: [
      { title: "Finance Automation — Rollio" },
      { name: "description", content: "Automate finance workflows with Rollio." },
    ],
  }),
  component: () => (
    <PageStub
      eyebrow="Solution"
      title="Finance"
      description="Close faster, control spend, and free your finance team for strategic work."
    />
  ),
});
