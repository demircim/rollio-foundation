import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPostCard as BlogPostCardData } from "@/lib/blog.functions";

interface BlogCardProps {
  post: BlogPostCardData;
}

export function BlogCard({ post }: BlogCardProps) {
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {post.featured_image ? (
          <img
            src={post.featured_image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <span className="font-display text-2xl text-muted-foreground/40">
              Rollio
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {post.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <h3 className="font-display text-lg font-semibold text-primary group-hover:text-accent">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
            {post.excerpt}
          </p>
        )}
        <div className="mt-4 flex flex-1 items-end justify-between gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-3">
            {date && <span>{date}</span>}
            {post.read_time ? (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.read_time} min read
              </span>
            ) : null}
          </span>
          <ArrowRight className="h-4 w-4 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  );
}
