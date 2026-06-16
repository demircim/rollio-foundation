import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy route — Co-Workers no longer has a dedicated page.
// Redirect to the homepage use-cases section (preserves SEO equity).
export const Route = createFileRoute("/ai-co-workers")({
  server: {
    handlers: {
      GET: () =>
        new Response(null, {
          status: 301,
          headers: { Location: "/#use-cases" },
        }),
    },
  },
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "use-cases" });
  },
  component: () => null,
});
