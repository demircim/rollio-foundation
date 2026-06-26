import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Mail, Quote } from "lucide-react";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeo({
      path: "/about",
      title: "About Rollio — Building Autonomous Enterprise AI Agents",
      description:
        "Rollio was founded to close the gap between rigid ERP systems and the unstructured reality of enterprise work. Meet the team building Enterprise AI Agents that execute real work, end-to-end.",
    }),
  component: AboutPage,
});

const values = [
  {
    title: "Context is the Missing Link",
    body: "SAP has the transaction. Celonis has the process. ServiceNow has the ticket. But none of them alone gives an AI agent what it needs to act. Rollio connects the dots — structured data, unstructured communications, and business rules — into one coherent picture.",
  },
  {
    title: "Execution over Analysis",
    body: "Dashboards don't save time; action does. We build agents that execute end-to-end workflows safely within your exact guardrails — not another reporting layer.",
  },
  {
    title: "Human-in-the-Loop Trust",
    body: "Trust is earned through transparency. Our agents keep you in control, escalating edge cases seamlessly to human supervisors — never acting beyond the boundaries you set.",
  },
  {
    title: "Outcome-Based Partnership",
    body: "We align our success entirely with yours. We measure impact by reductions in cycle times, manual effort, and exception backlogs — not by seats sold.",
  },
];

const pressLogos = [
  {
    name: "Salesforce",
    src: "https://www.rollio.ai/wp-content/uploads/2024/03/Salesforce-Logo.png",
    href: "https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FMkrnUAD",
  },
  {
    name: "Celonis",
    src: "https://www.rollio.ai/wp-content/uploads/2024/03/PrimaryLogo-RGB-mono-black-1-300x150.png",
    href: "https://www.celonis.com/blog/what-ai-tools-do-businesses-use-today/",
  },
  {
    name: "IBM",
    src: "https://www.rollio.ai/wp-content/uploads/2024/03/IBM.png",
    href: "https://www.salesforce.com/video/2520429/",
  },
  {
    name: "TechCrunch",
    src: "https://www.rollio.ai/wp-content/uploads/2024/03/techcrunch-logo-B444826970-seeklogo-1.png",
    href: "https://techcrunch.com/2016/10/13/the-ai-disruption-wave/",
  },
  {
    name: "Wealth & Finance",
    src: "https://www.rollio.ai/wp-content/uploads/2024/03/wealth-and-finance-logo-e1562611348703-1.png",
    href: "https://www.wealthandfinance-news.com/winners/rollio-2/",
  },
];

function AboutPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <Section
        as="header"
        tone="dark"
        className="relative overflow-hidden !py-20 md:!py-28"
        style={{ backgroundImage: "linear-gradient(180deg, #08081A 0%, #0D0D24 100%)" }}
      >
        {/* glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/3 -z-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 40% 40%, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(139,92,246,0.28) 0%, rgba(139,92,246,0) 60%)",
          }}
        />
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-surface-light/80">
              About Rollio
            </span>
            <h1 className="mt-6 text-balance text-surface-light">
              We Build the Engine for{" "}
              <span className="text-accent">Autonomous Enterprise Work.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-surface-light/75">
              We are on a mission to close the gap between rigid data silos and true AI autonomy — freeing enterprise teams to focus on strategy, innovation, and growth.
            </p>
            <div className="mt-10">
              <Button variant="primary" size="lg" asChild>
                <Link to="/consultation-booking">
                  Schedule Consultation <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          {/* Founder / team photo */}
          <div className="relative hidden lg:block">
            <div
              className="absolute inset-0 -m-4 rounded-3xl opacity-30 blur-2xl"
              style={{ background: "radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)" }}
              aria-hidden
            />
            <img
              src="https://www.rollio.ai/wp-content/uploads/2025/07/IMG_5650-1.jpeg"
              alt="Markus Demirci, CEO & Co-Founder of Rollio"
              className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
              style={{ aspectRatio: "4/5", maxHeight: "540px", objectPosition: "center top" }}
            />
          </div>
        </div>
      </Section>

      {/* ─── Mission + Story ──────────────────────────────────── */}
      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Our Mission</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Why we built Rollio.
          </h2>
          <div className="mt-6 space-y-5 text-lg text-muted-foreground">
            <p>
              AI agents are only as good as the data they can understand. And most enterprise data isn't understandable to them — even when it's technically accessible.
            </p>
            <p className="font-medium text-foreground">
              What AI agents see today are tables. Rows of orders, line items, account numbers — without clear relationships, without ownership, without context. A purchase order without the email thread behind it. A credit block without the approval history. Data that exists, but means nothing on its own.
            </p>
            <p>
              And that's only the 20% that's structured. The other 80% of enterprise business — the decisions, the approvals, the exceptions, the context — lives in emails, contracts, and chat threads. AI agents currently cannot see any of it.
            </p>
            <p>
              Without both layers, agents can report on what happened. But they can't understand why, who needs to act, or what the right next step is.
            </p>
            <p>
              We built the Contextual Data Engine to change this. It doesn't just pass raw tables to an agent — it translates structured systems and unstructured communications into relational, contextual data that AI agents can actually understand and act on. That's the missing layer. That's Rollio.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── CEO Quote ─────────────────────────────────────────── */}
      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 md:grid-cols-[200px_1fr]">
            <div className="hidden md:block">
              <img
                src="https://www.rollio.ai/wp-content/uploads/2025/07/IMG_5650-1.jpeg"
                alt="Markus Demirci"
                className="h-[200px] w-[200px] rounded-2xl object-cover object-top shadow-lg"
              />
            </div>
            <figure>
              <Quote aria-hidden className="h-8 w-8 text-accent/30" />
              <blockquote className="mt-3 font-display text-xl italic leading-relaxed text-foreground md:text-2xl">
                "We founded Rollio because we saw enterprise teams trapped acting as human APIs. We knew that if we could build an engine to contextualize the messy reality of business, we could unlock true AI autonomy."
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold">Markus Demirci</p>
                <p className="text-sm text-muted-foreground">CEO &amp; Co-Founder, Rollio</p>
              </figcaption>
              <p className="mt-5 text-muted-foreground">
                Markus leads Rollio's vision and strategy. Before founding Rollio, he spent years working with global enterprises watching teams spend their days acting as human bridges between SAP, Celonis, ServiceNow, and the emails, spreadsheets, and approvals surrounding them. That frustration became Rollio's founding thesis.
              </p>
            </figure>
          </div>
        </div>
      </Section>

      {/* ─── Values ───────────────────────────────────────────── */}
      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Our Values</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            What we believe.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border bg-card p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold tracking-tight">{v.title}</h3>
                <p className="mt-3 text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── As Seen In ───────────────────────────────────────── */}
      <Section tone="muted" className="!py-14 md:!py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            As seen in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {pressLogos.map((logo) =>
              logo.href ? (
                <a
                  key={logo.name}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.name}
                  className="opacity-50 transition-opacity hover:opacity-80"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-7 w-auto max-w-[120px] object-contain grayscale"
                  />
                </a>
              ) : (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 w-auto max-w-[120px] object-contain grayscale opacity-50"
                />
              )
            )}
          </div>
        </div>
      </Section>

      {/* ─── Where We're Based ───────────────────────────────── */}
      <Section className="!py-16 md:!py-24">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Location</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Where We're Based
            </h2>
            <p className="mt-6 text-muted-foreground">
              We're based in Brooklyn — at the center of enterprise technology innovation. But our customers span the globe. Our agents work 24/7 across multiple time zones, executing autonomously for enterprises everywhere.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-accent" />
              <div>
                <p className="font-semibold">Headquarters — Brooklyn, NY</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  41 Flatbush Ave, Suite 232
                  <br />
                  Brooklyn, NY 11217
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-accent" />
              <a
                href="mailto:hello@rollio.ai"
                className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                hello@rollio.ai
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Join + Press ────────────────────────────────────── */}
      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-8">
            <h3 className="font-display text-2xl font-bold tracking-tight">Join Our Mission</h3>
            <p className="mt-3 text-muted-foreground">
              If you believe enterprise teams deserve better than manual drudgery, that AI should execute not just analyze, and that outcomes matter more than features — join us. We're building autonomous agents that work.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We're building a small, exceptional team. See open roles or reach out directly.
            </p>
            <div className="mt-6">
              <Button variant="primary" asChild>
                <Link to="/careers">
                  View Open Roles <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-8">
            <h3 className="font-display text-2xl font-bold tracking-tight">Press &amp; Media</h3>
            <p className="mt-3 text-muted-foreground">
              Featured on Salesforce AppExchange, recognised in the Celonis Innovation community, and covered in enterprise AI automation publications. Rollio is a certified Celonis integration partner.
            </p>
            <p className="mt-4 text-sm">
              Press contact:{" "}
              <a
                href="mailto:media@rollio.ai"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                media@rollio.ai
              </a>
            </p>
          </div>
        </div>
      </Section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <Section
        tone="dark"
        className="relative overflow-hidden !py-16 md:!py-24"
        style={{ backgroundImage: "linear-gradient(180deg, #08081A 0%, #0D0D24 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/2 -z-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 40%, rgba(99,102,241,0.30) 0%, rgba(99,102,241,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0) 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-surface-light md:text-4xl">
            Ready to discuss your enterprise architecture?
          </h2>
          <p className="mt-4 text-lg text-surface-light/75">
            30 minutes, no obligation — let's scope the outcomes for your specific workflows.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Schedule Consultation <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
