import {
  createFileRoute,
  Link,
  notFound,
  useRouter,
} from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Section } from "@/components/section";
import { CardEyebrow } from "@/components/card";
import { Button } from "@/components/ui/button";
import { Markdown } from "@/components/markdown";
import { BlogCard } from "@/components/blog-card";
import { buildSeo, blogPostingLd, breadcrumbListLd } from "@/lib/seo";
import {
  getPublishedPostBySlug,
  getRelatedPosts,
} from "@/lib/blog.functions";

const postQuery = (slug: string) =>
  queryOptions({
    queryKey: ["blog", "post", slug],
    queryFn: () => getPublishedPostBySlug({ data: { slug } }),
  });

const relatedQuery = (slug: string, tags: string[]) =>
  queryOptions({
    queryKey: ["blog", "related", slug, tags],
    queryFn: () => getRelatedPosts({ data: { slug, tags, limit: 3 } }),
  });

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params, context }) => {
    const post = await context.queryClient.ensureQueryData(postQuery(params.slug));
    if (!post) throw notFound();
    // Prefetch related (non-blocking)
    context.queryClient.prefetchQuery(relatedQuery(post.slug, post.tags));
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return buildSeo({
        path: "/blog",
        title: "Post not found — Rollio Blog",
        description: "The post you're looking for isn't available.",
        noindex: true,
      });
    }
    const post = loaderData;
    const title = post.meta_title ?? post.title;
    const description = post.excerpt ?? "Article from the Rollio blog.";
    return buildSeo({
      path: `/blog/${post.slug}`,
      title: `${title} — Rollio Blog`,
      description,
      ogType: "article",
      image: post.featured_image ?? undefined,
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]),
        blogPostingLd({
          slug: post.slug,
          title: post.title,
          description,
          datePublished: post.published_at ?? post.updated_at,
          dateModified: post.updated_at,
          authorName: post.author ?? undefined,
          image: post.featured_image ?? undefined,
        }),
      ],
    });
  },
  component: BlogPostPage,
  errorComponent: BlogPostError,
  notFoundComponent: BlogPostNotFound,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const { data: post } = useSuspenseQuery(postQuery(slug));
  if (!post) return null;
  const { data: related = [] } = useSuspenseQuery(relatedQuery(post.slug, post.tags));

  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <>
      {/* Article header */}
      <Section tone="default" className="!pb-6">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>

          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <h1 className="mt-4 text-balance">{post.title}</h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {post.author && (
              <span>
                By <span className="font-medium text-foreground">{post.author}</span>
              </span>
            )}
            {date && <span>{date}</span>}
            {post.read_time ? (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.read_time} min read
              </span>
            ) : null}
          </div>
        </div>
      </Section>

      {/* Featured image */}
      {post.featured_image && (
        <Section tone="default" className="!py-0">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border">
            <img
              src={post.featured_image}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Section>
      )}

      {/* Body */}
      <Section tone="default">
        <article className="mx-auto max-w-3xl">
          <Markdown>{post.body}</Markdown>
        </article>
      </Section>

      {/* Consultation CTA */}
      <Section tone="muted">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-md">
            <CardEyebrow>Talk to us</CardEyebrow>
            <h3 className="font-display text-2xl font-semibold text-primary">
              See what hands-free could look like in your business.
            </h3>
            <p className="mt-2 text-muted-foreground">
              30 minutes, no obligation — scoped to your processes and outcomes.
            </p>
          </div>
          <Button variant="primary" size="lg" asChild>
            <Link to="/consultation-booking">
              Schedule Consultation <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Related posts */}
      {related.length > 0 && (
        <Section tone="default">
          <div className="max-w-2xl">
            <CardEyebrow>Related reading</CardEyebrow>
            <h2>More from the blog.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

function BlogPostError({ reset }: { reset: () => void }) {
  const router = useRouter();
  return (
    <Section tone="default">
      <div className="mx-auto max-w-xl text-center">
        <CardEyebrow>Something went wrong</CardEyebrow>
        <h2>We couldn't load this post.</h2>
        <p className="mt-4 text-muted-foreground">
          Please try again in a moment.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button
            variant="primary"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </Button>
          <Button variant="secondary-outline" asChild>
            <Link to="/blog">All posts</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

function BlogPostNotFound() {
  const { slug } = Route.useParams();
  return (
    <Section tone="default">
      <div className="mx-auto max-w-xl text-center">
        <CardEyebrow>Not found</CardEyebrow>
        <h2>This post isn't available.</h2>
        <p className="mt-4 text-muted-foreground">
          "{slug}" isn't published, or the URL has changed.
        </p>
        <div className="mt-6">
          <Button variant="primary" asChild>
            <Link to="/blog">Browse all posts</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
