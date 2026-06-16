import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/solutions/itsm")({
  head: () => ({
    meta: [
      { title: "ITSM Automation — Rollio" },
      { name: "description", content: "Automate IT service management with Rollio." },
    ],
  }),
  component: () => (
    <PageStub
      eyebrow="Solution"
      title="ITSM"
      description="Modern IT service management — intelligent routing, instant resolution, measurable SLAs."
    />
  ),
});
