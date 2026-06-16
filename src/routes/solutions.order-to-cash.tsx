import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";
import { buildSeo, breadcrumbListLd } from "@/lib/seo";

export const Route = createFileRoute("/solutions/order-to-cash")({
  head: () =>
    buildSeo({
      path: "/solutions/order-to-cash",
      title: "Order to Cash Automation — Rollio",
      description:
        "Accelerate the full revenue cycle — quote, order, fulfill, invoice, collect — on one enterprise automation platform.",
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/" },
          { name: "Order to Cash", path: "/solutions/order-to-cash" },
        ]),
      ],
    }),
  component: () => (
    <PageStub
      eyebrow="Solution"
      title="Order to Cash"
      description="Accelerate the full revenue cycle — quote, order, fulfill, invoice, collect — on one platform."
    />
  ),
});
