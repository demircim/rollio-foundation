import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [{ title: "Article — Rollio Blog" }],
  }),
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  return (
    <PageStub
      eyebrow="Blog"
      title={slug.replace(/-/g, " ")}
      description="This article is coming soon."
    />
  );
}
