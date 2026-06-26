import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Database,
  Lock,
  Cloud,
  Eye,
  Bug,
  AlertTriangle,
  Users,
  FileCheck,
} from "lucide-react";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/security")({
  head: () =>
    buildSeo({
      path: "/security",
      title: "Security & Trust — Rollio",
      description:
        "Zero data-at-rest. Inherited permissions. SOC 2 Type II certified. How Rollio keeps enterprise data safe.",
    }),
  component: SecurityPage,
});

const certs = [
  { name: "SOC 2 Type II", status: "Certified", scope: "All production systems" },
  { name: "GDPR", status: "Compliant", scope: "Data processing & DPA" },
  { name: "HIPAA", status: "Eligible", scope: "Healthcare-ready architecture" },
  { name: "FedRAMP", status: "In progress", scope: "Government cloud certification" },
  { name: "CCPA", status: "Compliant", scope: "California privacy law" },
  { name: "ISO 27001", status: "Planned", scope: "Information security management" },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="dark" className="!py-20 md:!py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Security &amp; Trust
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Enterprise-Grade Security. Built Into Every Layer.
          </h1>
          <p className="mt-6 text-lg text-surface-light/80">
            Your data never touches our servers. Your security policies are our
            security policies.
          </p>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Our Security Philosophy
          </h2>
          <div className="mt-6 space-y-5 text-lg text-muted-foreground">
            <p>
              At Rollio, security isn't a feature — it's our foundation. We've
              architected our platform from day one with one principle:{" "}
              <span className="font-medium text-foreground">
                you maintain control, your data stays yours, your security framework
                is ours.
              </span>
            </p>
            <p>
              We don't ask you to trust us with your data. We've designed our system
              so you never have to.
            </p>
          </div>
        </div>
      </Section>

      {/* Zero data-at-rest */}
      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <Database className="h-6 w-6 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Core Principle
            </p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Zero Data-at-Rest Architecture
          </h2>
          <p className="mt-4 text-muted-foreground">
            Unlike traditional SaaS platforms, Rollio doesn't store your business data.
          </p>

          <pre className="mt-8 overflow-x-auto rounded-2xl border bg-card p-6 text-sm leading-relaxed text-foreground">
{`Your Systems (Salesforce, SAP, Celonis)
    ↓
[Rollio Agent reads data]
    ↓
[Process in-memory, execute decision]
    ↓
[Write results back to YOUR systems]
    ↓
[Data discarded — never written to disk]`}
          </pre>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Your data is never at rest on our servers",
              "No backup databases to compromise",
              "No long-term data liability",
              "Maximum security, minimum risk",
            ].map((p) => (
              <div key={p} className="rounded-xl border bg-card p-4 text-sm">
                {p}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Most breaches involve data at rest in databases. By never storing your
            data, we eliminate the biggest attack surface.
          </p>
        </div>
      </Section>

      {/* Inherited permissions */}
      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Identity &amp; Access
            </p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Inherited Security &amp; Permissions
          </h2>
          <p className="mt-4 text-muted-foreground">
            You've already secured your data in your systems. Rollio respects that.
          </p>

          <ol className="mt-8 space-y-4 text-muted-foreground">
            <li>
              <span className="font-semibold text-foreground">You set permissions.</span>{" "}
              In Salesforce, SAP, or any system, you define who can access what.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Rollio respects your permissions.
              </span>{" "}
              Agents inherit your model — if a user can't access data in Salesforce,
              they can't access it through Rollio.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                No separate security model.
              </span>{" "}
              You don't manage security twice. Your existing framework is your Rollio
              framework.
            </li>
            <li>
              <span className="font-semibold text-foreground">User authentication.</span>{" "}
              Users authenticate through your systems (SAML, OAuth, etc.), not Rollio.
            </li>
          </ol>
        </div>
      </Section>

      {/* Encryption */}
      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <Lock className="h-6 w-6 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Encryption
            </p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Encryption &amp; Data Protection
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "In transit", body: "TLS 1.2+ for all communication. HTTPS for web, TLS for APIs, encrypted webhooks for events." },
              { title: "At rest (when brief)", body: "When data momentarily exists during processing: in-memory only, encrypted temporary caches, secure memory isolation." },
              { title: "In your systems", body: "Your source data remains in your systems with your own encryption standards." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border bg-card p-6">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Infrastructure & Compliance */}
      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <Cloud className="h-6 w-6 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Infrastructure &amp; Compliance
            </p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Built on AWS. Audited Annually.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="font-semibold">Cloud infrastructure: AWS</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>99.99% uptime SLA</li>
                <li>Global data centers with redundancy</li>
                <li>DDoS protection (AWS Shield)</li>
                <li>Physical security (armed guards, biometric access)</li>
                <li>Continuous monitoring and threat detection</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="font-semibold">SOC 2 Type II</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Independently audited annually against AICPA standards for Security,
                Availability, Confidentiality, Processing Integrity, and Privacy.
                Scope: all Rollio production systems, infrastructure, and operations.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border bg-card">
            <table className="w-full text-left text-sm">
              <thead className="border-b bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Certification</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Scope</th>
                </tr>
              </thead>
              <tbody>
                {certs.map((c) => (
                  <tr key={c.name} className="border-b last:border-0">
                    <td className="px-4 py-3 font-medium">{c.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{c.status}</td>
                    <td className="px-4 py-3 text-muted-foreground">{c.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Security Controls */}
      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <Eye className="h-6 w-6 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Controls
            </p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Security Controls
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: "Access controls", items: ["SAML/OAuth via your IdP", "MFA supported", "No passwords stored on Rollio", "RBAC enforced; periodic key rotation", "Least-privilege admin access, fully audited"] },
              { title: "Network security", items: ["AWS WAF + Shield (DDoS)", "Intrusion detection/prevention", "IP whitelisting for enterprise", "OAuth 2.0; HTTPS-only", "Rate limiting and API monitoring"] },
              { title: "Data security", items: ["TLS 1.2+ in transit", "AES-256 for temporary caches", "Zero permanent storage", "Checksums &amp; tamper detection", "Audit logging on all data access"] },
              { title: "Monitoring & detection", items: ["24/7 real-time monitoring", "Log aggregation &amp; analysis", "Threat intelligence integration", "Automated alerting", "Incident Response Team on call"] },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border bg-card p-6">
                <h3 className="font-semibold">{b.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {b.items.map((i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: `· ${i}` }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border bg-card p-6">
            <h3 className="font-semibold">Backup &amp; disaster recovery</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Regular backups of platform code and configurations. RTO &lt; 1 hour. RPO
              &lt; 5 minutes. Disaster recovery tested quarterly.
            </p>
          </div>
        </div>
      </Section>

      {/* Vulnerability mgmt */}
      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <Bug className="h-6 w-6 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Vulnerability Management
            </p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Secure Development &amp; Patch Management
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="font-semibold">Secure development</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>· Secure coding practices</li>
                <li>· Peer + security code reviews</li>
                <li>· SAST on all code</li>
                <li>· Dynamic analysis in staging</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="font-semibold">Dependencies</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>· Regular dependency scanning</li>
                <li>· Automated patching</li>
                <li>· Version pinning</li>
                <li>· SBOM available</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="font-semibold">Penetration testing</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>· Annual 3rd-party pentest</li>
                <li>· Quarterly internal assessments</li>
                <li>· Continuous vulnerability scanning</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border bg-card p-6">
            <h3 className="font-semibold">Patch SLA</h3>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>· Severity 1 — within 24 hours</li>
              <li>· Severity 2 — within 7 days</li>
              <li>· Severity 3 — within 30 days</li>
              <li>· Zero-day — emergency response activated</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Incident response */}
      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Incident Response
            </p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            In Case of a Security Incident
          </h2>
          <ol className="mt-8 space-y-3 text-muted-foreground">
            <li>
              <span className="font-semibold text-foreground">Immediate response.</span>{" "}
              Incident Response Team activated immediately.
            </li>
            <li>
              <span className="font-semibold text-foreground">Containment.</span>{" "}
              Incident isolated to prevent spread.
            </li>
            <li>
              <span className="font-semibold text-foreground">Investigation.</span>{" "}
              Root cause analysis begins.
            </li>
            <li>
              <span className="font-semibold text-foreground">Notification.</span>{" "}
              Affected customers notified promptly (24–72h depending on jurisdiction).
            </li>
            <li>
              <span className="font-semibold text-foreground">Remediation.</span> Fix
              developed and deployed.
            </li>
            <li>
              <span className="font-semibold text-foreground">Post-mortem.</span>{" "}
              Review conducted to prevent recurrence.
            </li>
          </ol>
        </div>
      </Section>

      {/* Vendors & people */}
      <Section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-center gap-3">
                <FileCheck className="h-5 w-5 text-accent" />
                <h3 className="font-semibold">Third-party security</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                All vendors undergo security assessment, sign a DPA, are reviewed
                regularly, and must comply with SOC 2 or equivalent. Current critical
                sub-processor: AWS (SOC 2 Type II, 99.99% SLA).
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-accent" />
                <h3 className="font-semibold">Employee security</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Background checks, identity verification, and reference checks for all
                employees. Annual security awareness training. Secure coding training
                for engineers. Least-privilege access, monitored and revoked
                immediately on termination.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Audit rights + best practices */}
      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Your Audit Rights
          </h2>
          <p className="mt-4 text-muted-foreground">
            You may review our SOC 2 audit report under NDA, request security
            documentation, conduct your own audits upon notice, and ask security
            questions during evaluation. Email{" "}
            <a href="mailto:security@rollio.ai" className="font-medium text-foreground underline-offset-4 hover:underline">
              security@rollio.ai
            </a>{" "}
            with "Audit Request" in the subject.
          </p>

          <h3 className="mt-12 font-display text-2xl font-bold tracking-tight">
            Security Best Practices for Your Team
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>· Use strong passwords and MFA for Rollio console access.</li>
            <li>· Regularly review and revise user permissions in source systems.</li>
            <li>· Monitor Rollio agent activity logs.</li>
            <li>· Keep source systems (Salesforce, SAP, etc.) current.</li>
            <li>· Report any suspected issues to us immediately.</li>
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="dark" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Ready to dig into the details?
          </h2>
          <p className="mt-4 text-lg text-surface-light/80">
            Security team:{" "}
            <a href="mailto:security@rollio.ai" className="font-medium text-surface-light underline-offset-4 hover:underline">
              security@rollio.ai
            </a>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Schedule a consultation <ArrowRight />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/privacy">Read the privacy policy</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

export { SecurityPage };
