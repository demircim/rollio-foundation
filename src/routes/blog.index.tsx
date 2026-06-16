import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Section } from "@/components/section";
import { CardEyebrow } from "@/components/card";
import { BlogCard } from "@/components/blog-card";
import { buildSeo } from "@/lib/seo";
import { listPublishedPosts } from "@/lib/blog.functions";
import { cn } from "@/lib/utils";

const postsQuery = queryOptions({
  queryKey: ["blog", "published"],
  queryFn: () => listPublishedPosts({ data: {} }),
});

export const Route = createFileRoute("/blog/")({
  head: () =>
    buildSeo({
      path: "/blog",
      title: "Blog & Resources — Rollio",
      description:
        "Insights on enterprise AI agents and automation across Order-to-Cash, Finance, Claims, and ITSM.",
    }),
  loader: ({ context }) => context.queryClient.ensureQueryData(postsQuery),
  component: BlogIndex,
  errorComponent: BlogError,
});

function BlogIndex() {
  const { data: posts } = useSuspenseQuery(postsQuery);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [posts]);

  const visible = useMemo(
    () => (activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts),
    [posts, activeTag],
  );

  return (
    <>
      {/* Hero (DARK) */}
      <Section
        as="header"
        tone="dark"
        data-hero-dark
        className="relative overflow-hidden !py-20 md:!py-28"
        style={{
          backgroundImage: "linear-gradient(180deg, #0B1220 0%, #0C2D5E 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 40% 40%, rgba(0,185,166,0.32) 0%, rgba(0,185,166,0) 60%), radial-gradient(60% 60% at 70% 60%, rgba(124,111,240,0.28) 0%, rgba(124,111,240,0) 60%)",
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Blog &amp; Resources
          </span>
          <h1 className="mt-6 text-balance">
            Field notes on enterprise{" "}
            <span className="text-accent">AI agents.</span>
          </h1>
          <p className="mt-6 text-lg text-surface-light/80 md:text-xl">
            Deep dives, customer stories, and practical guides for automating the work
            that runs your business.
          </p>
        </div>
      </Section>

      {/* Archive */}
      <Section tone="default">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <CardEyebrow>Latest posts</CardEyebrow>
            <h2>From the Rollio team.</h2>
          </div>

          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <TagChip
                active={activeTag === null}
                onClick={() => setActiveTag(null)}
              >
                All
              </TagChip>
              {allTags.map((t) => (
                <TagChip
                  key={t}
                  active={activeTag === t}
                  onClick={() => setActiveTag(t)}
                >
                  {t}
                </TagChip>
              ))}
            </div>
          )}
        </div>

        {visible.length === 0 ? (
          <EmptyState hasFilter={activeTag !== null} />
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

function TagChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
        active
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border bg-background text-muted-foreground hover:border-accent hover:text-accent",
      )}
    >
      {children}
    </button>
  );
}

function EmptyState({ hasFilter }: { hasFilter: boolean }) {
  return (
    <div className="mt-12 rounded-xl border border-dashed border-border bg-muted/50 p-12 text-center">
      <p className="font-display text-lg font-semibold text-primary">
        {hasFilter ? "No posts in this category yet." : "No posts published yet."}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        {hasFilter
          ? "Try another tag or view all posts."
          : "Check back soon — new posts are coming."}
      </p>
    </div>
  );
}

function BlogError() {
  return (
    <Section tone="default">
      <div className="max-w-xl">
        <CardEyebrow>Something went wrong</CardEyebrow>
        <h2>We couldn't load the blog right now.</h2>
        <p className="mt-4 text-muted-foreground">
          Please refresh the page in a moment. If the problem persists, email{" "}
          <a href="mailto:hello@rollio.ai" className="text-accent hover:underline">
            hello@rollio.ai
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
