import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Rollio" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: () => (
    <PageStub
      eyebrow="Internal"
      title="Admin"
      description="Authenticated administration tools will live here."
    />
  ),
});
