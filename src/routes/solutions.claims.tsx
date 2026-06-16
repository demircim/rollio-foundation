import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/solutions/claims")({
  head: () => ({
    meta: [
      { title: "Claims Automation — Rollio" },
      { name: "description", content: "Automate claims handling with Rollio." },
    ],
  }),
  component: () => (
    <PageStub
      eyebrow="Solution"
      title="Claims"
      description="End-to-end claims automation — from intake to resolution — with built-in compliance."
    />
  ),
});
