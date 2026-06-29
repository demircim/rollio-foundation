import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { CardEyebrow } from "@/components/card";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    buildSeo({
      path: "/blog",
      title: "Insights & Resources — Rollio Blog",
      description:
        "Articles on enterprise AI automation, Order-to-Cash, agentic workflows, and the Contextual Data Engine. From the Rollio team.",
    }),
  component: BlogLayout,
});

function BlogLayout() {
  return (
    <>
      <Section
        as="header"
        tone="dark"
        className="relative overflow-hidden !py-20 md:!py-28"
        style={{ backgroundImage: "linear-gradient(180deg, #08081A 0%, #0D0D24 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 40% 40%, rgba(99,102,241,0.32) 0%, rgba(99,102,241,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(139,92,246,0.28) 0%, rgba(139,92,246,0) 60%)",
          }}
        />
        <div className="relative z-10 max-w-2xl">
          <CardEyebrow>Insights &amp; Resources</CardEyebrow>
          <h1 className="mt-4 text-balance text-surface-light">
            Enterprise AI. In Practice.
          </h1>
          <p className="mt-6 text-lg text-surface-light/80">
            Articles on agentic workflows, Order-to-Cash automation, the Contextual Data Engine, and what it really takes to deploy AI at enterprise scale.
          </p>
        </div>
      </Section>

      <Outlet />
    </>
  );
}
