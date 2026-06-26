import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-co-workers")({
  beforeLoad: () => { throw redirect({ to: "/" }); },
});
