import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";
import { buildSeo, breadcrumbListLd } from "@/lib/seo";

export const Route = createFileRoute("/solutions/claims")({
  head: () =>
    buildSeo({
      path: "/solutions/claims",
      title: "Claims Automation — Rollio",
      description:
        "Process claims faster with intelligent routing, fraud detection, and end-to-end automation.",
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/" },
          { name: "Claims", path: "/solutions/claims" },
        ]),
      ],
    }),
  component: () => (
    <PageStub
      eyebrow="Solution"
      title="Claims"
      description="Process claims faster with intelligent routing, fraud detection, and end-to-end automation."
    />
  ),
});
