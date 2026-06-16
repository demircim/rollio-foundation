import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/admin")({
  head: () =>
    buildSeo({
      path: "/admin",
      title: "Admin — Rollio",
      description: "Internal administration tools.",
      noindex: true,
    }),
  component: () => (
    <PageStub
      eyebrow="Internal"
      title="Admin"
      description="Authenticated administration tools will live here."
    />
  ),
});
