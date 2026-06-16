import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, ShieldCheck, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
      { href: "/blog", label: "Blog & Resources", typed: true },
      { href: "/case-studies/campari", label: "Case Studies", typed: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/security", label: "Security & Compliance" },
      { href: "/integrations", label: "Integrations" },
      { href: "/documentation", label: "Documentation" },
      { href: "/help", label: "Help Center" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/security-datasheet", label: "Security Datasheet" },
      { href: "/cookies", label: "Cookie Policy" },
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
              Enterprise automation for the work that runs your business — built for
              Order-to-Cash, Finance, Claims, and IT Service Management.
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
              Trust & Compliance
            </h4>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrustBadge icon={ShieldCheck} label="SOC 2 Type II" />
              <TrustBadge icon={BadgeCheck} label="ISO 27001" />
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-surface-light/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Rollio, Inc.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/"
              aria-label="Rollio on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-surface-light/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com/"
              aria-label="Rollio on Twitter"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-surface-light/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Twitter className="h-4 w-4" />
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

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !consent) return;
    // Wire to backend later.
    setSubmitted(true);
    setEmail("");
    setConsent(false);
  }

  return (
    <div>
      <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-surface-light">
        Stay in the loop
      </h4>
      <p className="mt-2 max-w-md text-sm text-surface-light/70">
        Product updates, customer stories, and the occasional deep dive. No spam.
      </p>
      <form onSubmit={onSubmit} className="mt-4 max-w-md space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Work email
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 flex-1 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-surface-light placeholder:text-surface-light/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
          <Button type="submit" variant="primary" className="h-11">
            Subscribe
          </Button>
        </div>
        <label className="flex items-start gap-2 text-xs text-surface-light/65">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 text-accent focus:ring-2 focus:ring-accent/40"
          />
          <span>
            I agree to receive marketing emails from Rollio and accept the{" "}
            <a href="/privacy" className="underline hover:text-accent">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {submitted && (
          <p role="status" className="text-xs text-accent">
            Thanks — you're on the list.
          </p>
        )}
      </form>
    </div>
  );
}
