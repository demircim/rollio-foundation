import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardEyebrow, CardTitle, CardBody } from "@/components/card";
import { Grid } from "@/components/grid";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/timeline";
import { FAQ } from "@/components/faq";
import { buildSeo, organizationLd, websiteLd, faqPageLd } from "@/lib/seo";

const HOME_FAQS = [
  {
    question: "How long does deployment take?",
    answer:
      "Most enterprise customers go live with their first workflow in 4 to 8 weeks.",
  },
  {
    question: "Is Rollio secure for regulated industries?",
    answer:
      "Yes. Rollio is SOC 2 Type II certified and supports GDPR, HIPAA, and regional data residency.",
  },
  {
    question: "Can Rollio integrate with our existing ERP?",
    answer:
      "Rollio ships native connectors for SAP, Oracle, NetSuite, Workday, and 200+ enterprise systems.",
  },
];

export const Route = createFileRoute("/")({
  head: () =>
    buildSeo({
      path: "/",
      title: "Rollio — Enterprise Automation that Scales",
      description:
        "Rollio automates Order to Cash, Finance, Claims, and ITSM for the enterprise.",
      ogType: "website",
      jsonLd: [organizationLd(), websiteLd(), faqPageLd(HOME_FAQS)],
    }),
  component: Home,
});

const valueProps = [
  {
    icon: Zap,
    title: "Run faster",
    body: "Cut cycle times from days to hours with automation built for enterprise scale.",
  },
  {
    icon: ShieldCheck,
    title: "Stay compliant",
    body: "SOC 2, GDPR, and audit-ready controls baked into every workflow.",
  },
  {
    icon: Sparkles,
    title: "Scale anywhere",
    body: "Deploy across regions and entities without rebuilding your stack.",
  },
];

const steps = [
  { label: "Step 01", title: "Discover", description: "Map your highest-leverage processes." },
  { label: "Step 02", title: "Design", description: "Compose workflows with Rollio primitives." },
  { label: "Step 03", title: "Deploy", description: "Go live in weeks, not quarters." },
  { label: "Step 04", title: "Scale", description: "Expand across teams and geographies." },
];

const faqs = HOME_FAQS;

function Home() {
  return (
    <>
      <Section
        as="header"
        tone="dark"
        data-hero-dark
        className="!py-16 md:!py-28"
      >
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Enterprise automation
          </span>
          <h1 className="mt-6">Automation that moves at the speed of your business.</h1>
          <p className="mt-6 text-lg text-surface-light/80 md:text-xl">
            Rollio unifies Order to Cash, Finance, Claims, and ITSM into one
            composable platform — designed for the scale and rigor of the modern enterprise.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="primary" size="lg">
              Request a Demo <ArrowRight />
            </Button>
            <Button variant="secondary-outline" size="lg" asChild>
              <Link to="/solutions/order-to-cash">Explore solutions</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <h2>Built for outcomes that matter.</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Three principles guide every workflow we ship.
        </p>
        <Grid cols={3} className="mt-12">
          {valueProps.map(({ icon: Icon, title, body }) => (
            <Card key={title} variant="elevated" interactive>
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <CardTitle>{title}</CardTitle>
              <CardBody>{body}</CardBody>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <CardEyebrow>How it works</CardEyebrow>
          <h2>From discovery to scale in four steps.</h2>
        </div>
        <div className="mt-12">
          <Timeline items={steps} />
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-2xl">
          <h2>Frequently asked.</h2>
          <p className="mt-4 text-muted-foreground">
            The short answers. For everything else, talk to our team.
          </p>
        </div>
        <div className="mt-10 max-w-3xl">
          <FAQ items={faqs} />
        </div>
      </Section>

      <Section tone="dark">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-surface-light">See Rollio in your stack.</h2>
            <p className="mt-3 text-surface-light/75">
              A 30-minute walkthrough tailored to your processes.
            </p>
          </div>
          <Button variant="primary" size="lg">
            Request a Demo <ArrowRight />
          </Button>
        </div>
      </Section>
    </>
  );
}
