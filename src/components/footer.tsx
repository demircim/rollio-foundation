import { Link } from "@tanstack/react-router";
import { Linkedin, ShieldCheck } from "lucide-react";
import { HubSpotForm } from "@/components/hubspot-form";

type Col = {
  title: string;
  links: { href: string; label: string; typed?: boolean }[];
};

const columns: Col[] = [
  {
    title: "Solutions",
    links: [
      { href: "/solutions/order-to-cash", label: "Order-to-Cash & Procurement", typed: true },
      { href: "/solutions/finance", label: "Finance & Accounting", typed: true },
      { href: "/solutions/claims", label: "Claims Processing", typed: true },
      { href: "/solutions/itsm", label: "IT Service Management", typed: true },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us", typed: true },
      { href: "/blog", label: "Insights & Resources", typed: true },
      { href: "/case-studies/campari", label: "Case Studies", typed: true },
      { href: "/consultation-booking", label: "Contact", typed: true },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/security", label: "Security & Compliance", typed: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy", typed: true },
      { href: "/terms", label: "Terms of Service", typed: true },
    ],
  },
];

function FooterLink({
  href,
  typed,
  children,
}: {
  href: string;
  typed?: boolean;
  children: React.ReactNode;
}) {
  const className = "text-sm text-surface-light/70 transition-colors hover:text-accent";
  if (typed) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-dark text-surface-light">
      <div className="mx-auto max-w-content px-6 py-14 md:px-8 md:py-20">
        {/* Top: brand + columns */}
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link to="/" className="font-display text-xl font-bold tracking-tight">
              Rollio
            </Link>
            <p className="mt-4 max-w-sm text-sm text-surface-light/70">
              Autonomous AI Agents powered by a Contextual Data Engine. We bridge the gap between rigid ERP silos and unstructured communications for enterprise operations.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-surface-light">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <FooterLink href={l.href} typed={l.typed}>
                      {l.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter + trust badges */}
        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <NewsletterForm />
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-surface-light">
              Security
            </h4>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrustBadge icon={ShieldCheck} label="SOC 2 Type II" />
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-surface-light/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Rollio, Inc.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/5252491/"
              aria-label="Rollio on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-surface-light/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TrustBadge({
  icon: Icon,
  label,
}: {
  icon: typeof ShieldCheck;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-surface-light/85">
      <Icon className="h-4 w-4 text-accent" aria-hidden />
      {label}
    </span>
  );
}

const NEWSLETTER_FORM_ID = "cec9b0a4-8aee-434d-8f88-3b86996ce8e7";

function NewsletterForm() {
  return (
    <div>
      <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-surface-light">
        Stay in the loop
      </h4>
      <p className="mt-2 max-w-md text-sm text-surface-light/70">
        Insights on data contextualization, autonomous agent execution, and enterprise AI transformation. No spam.
      </p>
      <div className="mt-4 max-w-md [&_input]:!bg-white/5 [&_input]:!text-surface-light">
        <HubSpotForm formId={NEWSLETTER_FORM_ID} formName="newsletter_signup" />
      </div>
    </div>
  );
}
