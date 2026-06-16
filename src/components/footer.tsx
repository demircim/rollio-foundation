import { Link } from "@tanstack/react-router";

const cols = [
  {
    title: "Solutions",
    links: [
      { to: "/solutions/order-to-cash", label: "Order to Cash" },
      { to: "/solutions/finance", label: "Finance" },
      { to: "/solutions/claims", label: "Claims" },
      { to: "/solutions/itsm", label: "ITSM" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/case-studies/campari", label: "Case Studies" },
      { to: "/blog", label: "Blog" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-dark text-surface-light">
      <div className="mx-auto max-w-content px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-xl font-bold tracking-tight">
              Rollio
            </Link>
            <p className="mt-4 max-w-sm text-sm text-surface-light/70">
              Enterprise automation that scales — Order to Cash, Finance, Claims, and ITSM.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-surface-light">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-surface-light/70 hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-surface-light/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Rollio. All rights reserved.</p>
          <p>Enterprise B2B automation</p>
        </div>
      </div>
    </footer>
  );
}
