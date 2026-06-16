import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/pilot-consultation")({
  head: () =>
    buildSeo({
      path: "/pilot-consultation",
      title: "Pilot Consultation — Rollio",
      description: "Scope a Rollio pilot tailored to your operations.",
    }),
  component: () => (
    <PageStub
      eyebrow="Pilot"
      title="Scope your pilot"
      description="A focused engagement to prove value on a real workflow in weeks, not quarters."
    />
  ),
});
