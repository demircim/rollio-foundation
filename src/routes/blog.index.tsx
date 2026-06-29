import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Section } from "@/components/section";
import { CardEyebrow } from "@/components/card";
import { BlogCard } from "@/components/blog-card";
import { buildSeo, breadcrumbListLd } from "@/lib/seo";
import { listPublishedPosts } from "@/lib/blog.functions";

const postsQuery = queryOptions({
  queryKey: ["blog", "posts"],
  queryFn: () => listPublishedPosts({ data: {} }),
});

export const Route = createFileRoute("/blog/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(postsQuery),
  head: () =>
    buildSeo({
      path: "/blog",
      title: "Insights & Resources — Rollio Blog",
      description:
        "Articles on enterprise AI automation, Order-to-Cash, agentic workflows, and the Contextual Data Engine. From the Rollio team.",
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
        ]),
      ],
    }),
  component: BlogIndexPage,
  errorComponent: BlogIndexError,
  notFoundComponent: BlogIndexNotFound,
});

function BlogIndexPage() {
  const posts = useSuspenseQuery(postsQuery).data;

  return (
    <Section tone="default">
      <div className="max-w-2xl">
        <CardEyebrow>Latest Insights</CardEyebrow>
        <h2>Engineering notes &amp; case studies.</h2>
      </div>
      {posts.length === 0 ? (
        <p className="mt-8 text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </Section>
  );
}

function BlogIndexError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <Section tone="default">
      <div className="max-w-xl">
        <CardEyebrow>Something went wrong</CardEyebrow>
        <h2>We couldn't load the blog right now.</h2>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
        <div className="mt-6">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
          >
            Try again
          </button>
        </div>
      </div>
    </Section>
  );
}

function BlogIndexNotFound() {
  return (
    <Section tone="default">
      <div className="max-w-xl">
        <CardEyebrow>Not found</CardEyebrow>
        <h2>The blog page isn't available.</h2>
      </div>
    </Section>
  );
}
