import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Lightbulb,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardEyebrow, CardTitle, CardBody } from "@/components/card";
import { Grid } from "@/components/grid";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildSeo, breadcrumbListLd } from "@/lib/seo";

const PAGE_PATH = "/careers";
const PAGE_TITLE = "Careers at Rollio | Build the Future of Agentic AI";
const PAGE_DESCRIPTION =
  "Join Rollio's remote-first team to build AI Agents that transform enterprise operations. Open roles in AI engineering, LLM systems, and data infrastructure. Remote · New York HQ.";

const whyCards = [
  {
    title: "Meaningful Problems",
    body: "We tackle some of the toughest challenges in enterprise automation. Your work directly helps people at leading global companies — Campari, W&S Financial Group — work smarter.",
  },
  {
    title: "Cutting-Edge AI",
    body: "Work with the latest in AI — Large Language Models, agentic workflows, RAG, and deep enterprise integration. You'll be building production systems, not toy demos.",
  },
  {
    title: "A Great Team",
    body: "A dedicated, international team that values curiosity, transparency, and quality. We write technical white papers, review each other's code, and push each other to improve.",
  },
];

const cultureCards = [
  {
    icon: MessageSquare,
    title: "Communication",
    body: "Distributed across time zones, we've built strong async habits. Technical white papers before major features, Slack + calls to stay in sync, full respect for maker time.",
  },
  {
    icon: Code2,
    title: "Quality",
    body: "We review each other's code, implement engineering best practices, and hold ourselves to a high bar. Robustness and maintainability matter.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    body: "We experiment with new languages and frameworks, read and discuss the latest AI papers, and encourage everyone to push the boundaries of what's possible.",
  },
];

type Role = {
  id: string;
  title: string;
  badge: string;
  level: string;
  apply: string;
  whatYoullDo: string;
  mustHave: string;
  niceToHave: string;
};

const roles: Role[] = [
  {
    id: "ai-software-engineer",
    title: "AI & Software Engineer (Python / LLM)",
    badge: "Remote · Full-time",
    level: "Junior / Senior",
    apply: "mailto:jobs@rollio.ai?subject=Job%20Application%20AI%20Engineer%20Remote",
    whatYoullDo: "Design, implement, and deploy AI systems using LLMs, RAG, and foundation models. Write unit-tested, maintainable code. Implement and evaluate LLM applications with clear success metrics. Stay current with the latest in AI.",
    mustHave: "2+ years Python (or TypeScript). Understanding of ML concepts. Experience with LLM APIs (OpenAI, Anthropic, etc.). Exposure to RAG and vector databases. Familiarity with agentic frameworks (LlamaIndex, LangChain). Strong problem-solving in a collaborative environment. Degree in CS/Engineering/AI or equivalent.",
    niceToHave: "AWS (Lambda, DynamoDB, Step Functions). FastAPI. Distributed systems. LLM observability/monitoring. Async Python. JavaScript/TypeScript. Production AI systems. Agile.",
  },
  {
    id: "ai-engineer-spain",
    title: "AI Engineer — Spain (Remote)",
    badge: "Remote · Spain-eligible · Full-time",
    level: "Semi-Senior / Senior",
    apply: "mailto:jobs@rollio.ai?subject=Job%20Application%20AI%20Engineer%20Hybrid",
    whatYoullDo: "Design, implement, and deploy AI systems using LLMs, RAG, and foundation models. Write unit-tested, maintainable code. Implement and evaluate LLM applications with clear success metrics. Stay current with the latest in AI.",
    mustHave: "3+ years Python, production apps. Strong ML understanding. LLM API experience. Hands-on RAG and vector DB. Agentic frameworks. Problem-solving. Degree or equivalent. Good English.",
    niceToHave: "AWS, FastAPI, distributed systems, LLM observability, async Python, JS/TS, production AI, agile, mentoring.",
  },
  {
    id: "ai-engineer-remote",
    title: "AI Engineer (Remote)",
    badge: "Remote · Full-time",
    level: "Semi-Senior / Senior",
    apply: "mailto:jobs@rollio.ai?subject=Job%20Application%20AI%20Engineer%20Remote",
    whatYoullDo: "Design, implement, and deploy AI systems using LLMs, RAG, and foundation models. Write unit-tested, maintainable code. Implement and evaluate LLM applications with clear success metrics. Stay current with the latest in AI.",
    mustHave: "3+ years Python, production apps. Strong ML understanding. LLM API experience. Hands-on RAG and vector DB. Agentic frameworks. Problem-solving. Degree or equivalent. Good English.",
    niceToHave: "AWS, FastAPI, distributed systems, LLM observability, async Python, JS/TS, production AI, agile, mentoring.",
  },
  {
    id: "data-engineer",
    title: "Data Engineer (Remote)",
    badge: "Remote · Full-time",
    level: "Junior / Mid-Level",
    apply: "mailto:jobs@rollio.ai?subject=Job%20Application%20Data%20Engineer%20Remote",
    whatYoullDo: "Design and maintain scalable data pipelines and infrastructure. Build data models for PostgreSQL and DynamoDB. Ensure data quality for AI and backend teams. Optimize storage and retrieval. Implement data monitoring.",
    mustHave: "3+ years as Data Engineer, production-grade systems. Python. PostgreSQL + NoSQL (DynamoDB). ETL/ELT pipelines. Data warehousing. Cloud infrastructure (AWS). Degree or equivalent. Good English.",
    niceToHave: "Docker/Kubernetes. Infrastructure-as-code (Terraform, CDK). Redis. Data streaming (Kafka, Kinesis). Startup experience. Agile. MLOps/LLMOps interest.",
  },
];

export const Route = createFileRoute("/careers")({
  head: () =>
    buildSeo({
      path: PAGE_PATH,
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Careers", path: PAGE_PATH },
        ]),
      ],
    }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      {/* Hero (DARK) */}
      <Section
        as="header"
        tone="dark"
        data-hero-dark
        className="relative overflow-hidden !py-20 md:!py-28"
        style={{ backgroundImage: "linear-gradient(180deg, #08081A 0%, #0D0D24 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 40% 40%, rgba(99,102,241,0.32) 0%, rgba(99,102,241,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(139,92,246,0.28) 0%, rgba(139,92,246,0) 60%)",
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-surface-light/85">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> We're hiring
          </span>
          <h1 className="mt-6 text-balance text-surface-light">
            Help Us Build the Future of <span className="text-accent">Work.</span>
          </h1>
          <p className="mt-6 text-lg text-surface-light/80">
            We're on a mission to make AI a natural extension of how people work. We're looking for people who are excited by hard problems, move fast, and want to build technology that makes a real impact inside the world's largest enterprises.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>Remote-first · New York HQ</Chip>
            <Chip>Venture-backed · Team of 10+</Chip>
          </div>
          <div className="mt-10">
            <Button variant="primary" size="lg" asChild>
              <a href="#open-roles">
                See open roles <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Why Rollio (MUTED) */}
      <Section tone="muted">
        <div className="max-w-2xl">
          <CardEyebrow>Why Rollio</CardEyebrow>
          <h2>Small team. Big problems. Serious impact.</h2>
        </div>
        <Grid cols={3} gap="lg" className="mt-12">
          {whyCards.map((c) => (
            <Card key={c.title} variant="elevated">
              <CardTitle>{c.title}</CardTitle>
              <CardBody>{c.body}</CardBody>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Culture (DEFAULT) */}
      <Section tone="default">
        <div className="max-w-2xl">
          <CardEyebrow>How we work</CardEyebrow>
          <h2>Remote-first. Async by default. High-trust.</h2>
        </div>
        <Grid cols={3} gap="lg" className="mt-12">
          {cultureCards.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{body}</p>
            </div>
          ))}
        </Grid>
      </Section>

      {/* Open Roles (MUTED) */}
      <Section tone="muted" id="open-roles">
        <div className="max-w-2xl">
          <CardEyebrow>Open Roles</CardEyebrow>
          <h2>Current openings.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We're a remote-first team. All roles are open to candidates worldwide unless a specific region is noted.
          </p>
        </div>
        <div className="mt-12 rounded-2xl border border-border bg-card">
          <Accordion type="single" collapsible className="w-full">
            {roles.map((role) => (
              <AccordionItem key={role.id} value={role.id} className="border-b last:border-b-0 px-6">
                <AccordionTrigger className="py-6 text-left hover:no-underline">
                  <div className="flex flex-1 flex-col gap-2 pr-4 md:flex-row md:items-center md:justify-between md:gap-6">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground md:text-xl">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{role.level}</p>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.10em] text-accent">
                      <Briefcase className="h-3.5 w-3.5" /> {role.badge}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <div className="space-y-5 text-muted-foreground">
                    <RoleField label="What you'll do" body={role.whatYoullDo} />
                    <RoleField label="Must-have" body={role.mustHave} />
                    <RoleField label="Nice to have" body={role.niceToHave} />
                  </div>
                  <div className="mt-6">
                    <Button variant="primary" asChild>
                      <a href={role.apply}>
                        Apply Now <ArrowRight />
                      </a>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Not seeing your role (DEFAULT) */}
      <Section tone="default">
        <div className="mx-auto max-w-2xl text-center">
          <h2>Not seeing your role?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're always interested in meeting talented people. Send a note about yourself and why you want to build with us.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" size="lg" asChild>
              <a href="mailto:jobs@rollio.ai">
                Get in Touch <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Office (MUTED) */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <CardEyebrow>Where we are</CardEyebrow>
            <h2>Headquarters: Brooklyn, New York.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We're a remote-first team distributed globally, with our HQ in Brooklyn, NY. You don't need to be in New York — but if you are, we'd love to meet.
            </p>
          </div>
          <Card variant="elevated" className="p-8">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
              <MapPin className="h-5 w-5" aria-hidden />
            </span>
            <p className="mt-5 font-display text-lg font-semibold text-foreground">Rollio HQ</p>
            <p className="mt-2 text-muted-foreground">
              41 Flatbush Ave, Ste 232
              <br />
              Brooklyn, NY 11217
            </p>
            <p className="mt-4 text-sm">
              <a href="mailto:hello@rollio.ai" className="font-medium text-accent hover:underline">
                hello@rollio.ai
              </a>
            </p>
          </Card>
        </div>
      </Section>

      {/* Closing CTA (DARK) */}
      <Section
        tone="dark"
        className="relative overflow-hidden"
        style={{ backgroundImage: "linear-gradient(180deg, #08081A 0%, #0D0D24 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/2 -z-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 40%, rgba(99,102,241,0.30) 0%, rgba(99,102,241,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(139,92,246,0.28) 0%, rgba(139,92,246,0) 60%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-surface-light">Ready to build the future of AI?</h2>
            <p className="mt-3 text-surface-light/75">
              Join a small team doing serious work. Apply today or reach out — we'd love to hear from you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="lg" asChild>
              <a href="#open-roles">Browse Open Roles <ArrowRight /></a>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <a href="mailto:jobs@rollio.ai">Get in Touch</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-surface-light/85">
      {children}
    </span>
  );
}

function RoleField({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{label}</p>
      <p className="mt-2 text-foreground/90">{body}</p>
    </div>
  );
}
