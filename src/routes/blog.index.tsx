import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    buildSeo({
      path: "/blog",
      title: "Blog — Rollio",
      description:
        "Insights on enterprise automation across Order to Cash, Finance, Claims, and ITSM.",
    }),
  component: () => (
    <PageStub
      eyebrow="Blog"
      title="Insights from the Rollio team"
      description="Articles, deep dives, and customer stories. New posts coming soon."
    />
  ),
});
