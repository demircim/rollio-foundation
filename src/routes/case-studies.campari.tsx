import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";
import { buildSeo, breadcrumbListLd } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/campari")({
  head: () =>
    buildSeo({
      path: "/case-studies/campari",
      title: "Campari Group Case Study — Rollio",
      description:
        "How Campari Group standardized enterprise automation across regions with Rollio.",
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/" },
          { name: "Campari Group", path: "/case-studies/campari" },
        ]),
      ],
    }),
  component: () => (
    <PageStub
      eyebrow="Case Study"
      title="Campari Group"
      description="How Campari Group standardized enterprise automation across regions with Rollio."
    />
  ),
});
