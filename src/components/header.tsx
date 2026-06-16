import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavChild = { href: string; label: string; typed?: boolean };
type NavItem =
  | { kind: "link"; href: string; label: string; typed?: boolean }
  | { kind: "menu"; label: string; children: NavChild[] };

const nav: NavItem[] = [
  { kind: "link", label: "Home", href: "/", typed: true },
  { kind: "link", label: "Co-Workers", href: "/#use-cases" },
  {
    kind: "menu",
    label: "Solutions",
    children: [
      { href: "/solutions/order-to-cash", label: "Order-to-Cash", typed: true },
      { href: "/solutions/finance", label: "Finance", typed: true },
      { href: "/solutions/claims", label: "Claims", typed: true },
      { href: "/solutions/itsm", label: "ITSM", typed: true },
    ],
  },
  { kind: "link", label: "Resources", href: "/blog", typed: true },
  {
    kind: "menu",
    label: "Company",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/customers", label: "Customers" },
      { href: "/careers", label: "Careers" },
    ],
  },
];

function NavLink({
  href,
  typed,
  className,
  children,
  onClick,
}: {
  href: string;
  typed?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  if (typed) {
    return (
      <Link
        to={href}
        className={className}
        activeProps={{ className: "text-accent" }}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = document.querySelector("[data-hero-dark]");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setOverDark(entry.isIntersecting);
        });
      },
      { threshold: 0.05, rootMargin: "-64px 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const isDark = overDark;

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur transition-colors duration-300",
        isDark
          ? "border-white/10 bg-surface-dark/80 supports-[backdrop-filter]:bg-surface-dark/60"
          : "border-border bg-background/90 supports-[backdrop-filter]:bg-background/70"
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:h-20 md:px-8">
        <Link
          to="/"
          aria-label="Rollio — home"
          className={cn(
            "font-display text-xl font-bold tracking-tight transition-colors",
            isDark ? "text-surface-light" : "text-primary"
          )}
        >
          Rollio
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-7">
          {nav.map((item) =>
            item.kind === "menu" ? (
              <div key={item.label} className="group relative">
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors",
                    isDark
                      ? "text-surface-light/90 hover:text-accent"
                      : "text-foreground hover:text-accent"
                  )}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </button>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="min-w-[220px] rounded-xl border border-border bg-popover p-2 shadow-lg">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <NavLink
                          href={c.href}
                          typed={c.typed}
                          className="block rounded-md px-3 py-2 text-sm text-popover-foreground hover:bg-muted hover:text-accent"
                        >
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.label}
                href={item.href}
                typed={item.typed}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isDark
                    ? "text-surface-light/90 hover:text-accent"
                    : "text-foreground hover:text-accent"
                )}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Button variant="primary" size="default" asChild>
            <Link to="/consultation-booking">Request a Demo</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-md md:hidden",
            isDark ? "text-surface-light" : "text-foreground"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t transition-[max-height] duration-300",
          isDark ? "border-white/10" : "border-border",
          open ? "max-h-[800px]" : "max-h-0",
        )}
      >
        <nav aria-label="Mobile" className="px-6 py-4">
          <ul className="space-y-1">
            {nav.map((item) =>
              item.kind === "menu" ? (
                <li key={item.label} className="pt-3">
                  <p
                    className={cn(
                      "px-3 pb-1 text-xs font-semibold uppercase tracking-wider",
                      isDark ? "text-surface-light/60" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </p>
                  <ul>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <NavLink
                          href={c.href}
                          typed={c.typed}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block rounded-md px-3 py-3 text-base font-medium transition-colors",
                            isDark
                              ? "text-surface-light hover:bg-white/5 hover:text-accent"
                              : "text-foreground hover:bg-muted hover:text-accent"
                          )}
                        >
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <NavLink
                    href={item.href}
                    typed={item.typed}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-3 text-base font-medium transition-colors",
                      isDark
                        ? "text-surface-light hover:bg-white/5 hover:text-accent"
                        : "text-foreground hover:bg-muted hover:text-accent"
                    )}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
            <li className="pt-4">
              <Button variant="primary" className="w-full" asChild>
                <Link to="/consultation-booking" onClick={() => setOpen(false)}>
                  Request a Demo
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
