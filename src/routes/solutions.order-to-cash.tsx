import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/solutions/order-to-cash")({
  head: () => ({
    meta: [
      { title: "Order to Cash — Rollio" },
      { name: "description", content: "Automate Order to Cash with Rollio." },
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
