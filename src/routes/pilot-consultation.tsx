import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { HubSpotForm } from "@/components/hubspot-form";
import { buildSeo } from "@/lib/seo";

const CONSULTATION_FORM_ID = "c60f028a-0356-455f-abf7-ffa477e6c2bc";

export const Route = createFileRoute("/pilot-consultation")({
  head: () =>
    buildSeo({
      path: "/pilot-consultation",
      title: "Pilot Consultation — Rollio",
      description:
        "Scope a Rollio pilot tailored to your operations. A focused engagement to prove value in weeks, not quarters.",
    }),
  component: PilotConsultationPage,
});

function PilotConsultationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1220] text-surface-light">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(20,184,166,0.18), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(139,92,246,0.18), transparent 60%), linear-gradient(135deg, #0B1220 0%, #0C2D5E 100%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-content px-6 py-20 md:px-8 md:py-28">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-accent">
            See How It Works in 90 Days
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Scope your pilot
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-surface-light/80">
            A focused engagement to prove value on a real workflow in weeks, not quarters.
            Tell us about your top processes and we'll come back with a tailored pilot plan.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto max-w-2xl">
          <HubSpotForm formId={CONSULTATION_FORM_ID} formName="pilot_consultation" />
        </div>
      </Section>
    </>
  );
}
