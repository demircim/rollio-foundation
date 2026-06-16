import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/consultation-booking")({
  head: () =>
    buildSeo({
      path: "/consultation-booking",
      title: "Request a Demo — Rollio",
      description: "Book a consultation with the Rollio team.",
    }),
  component: () => (
    <PageStub
      eyebrow="Request a Demo"
      title="Talk to our team"
      description="Tell us about your workflows and we'll put together a tailored walkthrough."
    />
  ),
});
