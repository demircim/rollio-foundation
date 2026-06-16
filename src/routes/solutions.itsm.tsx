import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";
import { buildSeo, breadcrumbListLd } from "@/lib/seo";

export const Route = createFileRoute("/solutions/itsm")({
  head: () =>
    buildSeo({
      path: "/solutions/itsm",
      title: "ITSM Automation — Rollio",
      description:
        "Modernize IT service management with automated workflows, intelligent ticketing, and enterprise integrations.",
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/" },
          { name: "ITSM", path: "/solutions/itsm" },
        ]),
      ],
    }),
  component: () => (
    <PageStub
      eyebrow="Solution"
      title="ITSM"
      description="Modernize IT service management with automated workflows and intelligent ticketing."
    />
  ),
});
