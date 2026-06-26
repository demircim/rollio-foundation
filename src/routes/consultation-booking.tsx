import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { HubSpotForm } from "@/components/hubspot-form";
import { buildSeo } from "@/lib/seo";

const CONSULTATION_FORM_ID = "c60f028a-0356-455f-abf7-ffa477e6c2bc";

export const Route = createFileRoute("/consultation-booking")({
  head: () =>
    buildSeo({
      path: "/consultation-booking",
      title: "Schedule a Consultation — Rollio",
      description:
        "Book a 30-minute consultation with the Rollio team. We'll talk through your business challenges, the outcomes that matter, and how Rollio fits.",
    }),
  component: ConsultationBookingPage,
});

function ConsultationBookingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#08081A] text-surface-light">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(139,92,246,0.18), transparent 60%), linear-gradient(135deg, #08081A 0%, #0D0D24 100%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-content px-6 py-20 md:px-8 md:py-28">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-accent">
            Schedule a Consultation
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Talk to our outcomes team
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-surface-light/80">
            A 30-minute conversation about the business outcomes you want, which processes
            to prioritize, your timeline, and how Rollio connects to your systems. No
            pressure — just a conversation.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto max-w-2xl">
          <HubSpotForm formId={CONSULTATION_FORM_ID} formName="consultation_request" />
        </div>
      </Section>
    </>
  );
}
