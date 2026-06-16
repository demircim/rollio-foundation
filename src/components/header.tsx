import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  {
    label: "Solutions",
    children: [
      { to: "/solutions/order-to-cash", label: "Order to Cash" },
      { to: "/solutions/finance", label: "Finance" },
      { to: "/solutions/claims", label: "Claims" },
      { to: "/solutions/itsm", label: "ITSM" },
    ],
  },
  { to: "/case-studies/campari", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:h-20 md:px-8">
        <Link
          to="/"
          aria-label="Rollio — home"
          className="font-display text-xl font-bold tracking-tight text-primary"
        >
          Rollio
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-8">
          {nav.map((item) =>
            "children" in item ? (
              <div key={item.label} className="group relative">
                <button
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent"
                  aria-haspopup="true"
                >
                  {item.label}
                </button>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="min-w-[220px] rounded-xl border border-border bg-popover p-2 shadow-lg">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <Link
                          to={c.to}
                          className="block rounded-md px-3 py-2 text-sm text-popover-foreground hover:bg-muted hover:text-accent"
                          activeProps={{ className: "text-accent" }}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-foreground hover:text-accent"
                activeProps={{ className: "text-accent" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Button variant="primary" size="default">
            Request a Demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground md:hidden"
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
          "md:hidden overflow-hidden border-t border-border transition-[max-height] duration-300",
          open ? "max-h-[640px]" : "max-h-0",
        )}
      >
        <nav aria-label="Mobile" className="px-6 py-4">
          <ul className="space-y-1">
            <li className="pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Solutions
            </li>
            {nav[0].children!.map((c) => (
              <li key={c.to}>
                <Link
                  to={c.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-accent"
                >
                  {c.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                to="/case-studies/campari"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-accent"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-accent"
              >
                Blog
              </Link>
            </li>
            <li className="pt-3">
              <Button variant="primary" className="w-full">
                Request a Demo
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
