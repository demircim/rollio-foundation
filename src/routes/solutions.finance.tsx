import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";
import { buildSeo, breadcrumbListLd } from "@/lib/seo";

export const Route = createFileRoute("/solutions/finance")({
  head: () =>
    buildSeo({
      path: "/solutions/finance",
      title: "Finance Automation — Rollio",
      description:
        "Close faster, automate reconciliations, and give finance teams enterprise-grade controls with Rollio.",
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/" },
          { name: "Finance", path: "/solutions/finance" },
        ]),
      ],
    }),
  component: () => (
    <PageStub
      eyebrow="Solution"
      title="Finance"
      description="Close faster, automate reconciliations, and give finance teams enterprise-grade controls."
    />
  ),
});
