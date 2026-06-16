import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/ai-co-workers")({
  head: () =>
    buildSeo({
      path: "/ai-co-workers",
      title: "Co-Workers — Rollio",
      description: "Meet the Rollio Co-Workers — purpose-built AI agents for enterprise teams.",
    }),
  component: () => (
    <PageStub
      eyebrow="Co-Workers"
      title="Meet the team"
      description="Purpose-built AI agents that work alongside your people across Order-to-Cash, Finance, Claims, and ITSM."
    />
  ),
});
