import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export interface AdminBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  body: string;
  featured_image: string | null;
  author: string | null;
  read_time: number | null;
  meta_title: string | null;
  meta_keywords: string | null;
  tags: string[];
  status: "draft" | "published";
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

const ALL_COLUMNS =
  "id, title, slug, excerpt, body, featured_image, author, read_time, meta_title, meta_keywords, tags, status, published_at, created_at, updated_at";

export const listAllPosts = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("blog_posts")
      .select(ALL_COLUMNS)
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (data ?? []) as AdminBlogPost[];
  });

export const getPostById = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("blog_posts")
      .select(ALL_COLUMNS)
      .eq("id", data.id)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return (row ?? null) as AdminBlogPost | null;
  });

const PostInput = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase letters, numbers, and hyphens"),
  excerpt: z.string().nullable().optional(),
  body: z.string().default(""),
  featured_image: z.string().nullable().optional(),
  author: z.string().nullable().optional(),
  read_time: z.number().int().nonnegative().nullable().optional(),
  meta_title: z.string().nullable().optional(),
  meta_keywords: z.string().nullable().optional(),
  tags: z.array(z.string()).default([]),
  status: z.enum(["draft", "published"]),
  published_at: z.string().nullable().optional(),
});

export const upsertPost = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => PostInput.parse(input))
  .handler(async ({ data, context }) => {
    const isNew = !data.id;

    let publishedAt = data.published_at ?? null;
    if (data.status === "published" && !publishedAt) {
      publishedAt = new Date().toISOString();
    }

    const payload = {
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt ?? null,
      body: data.body ?? "",
      featured_image: data.featured_image ?? null,
      author: data.author ?? null,
      read_time: data.read_time ?? null,
      meta_title: data.meta_title ?? null,
      meta_keywords: data.meta_keywords ?? null,
      tags: data.tags ?? [],
      status: data.status,
      published_at: publishedAt,
    };

    if (isNew) {
      const { data: row, error } = await context.supabase
        .from("blog_posts")
        .insert(payload)
        .select(ALL_COLUMNS)
        .single();
      if (error) throw new Error(error.message);
      return row as AdminBlogPost;
    }

    const { data: row, error } = await context.supabase
      .from("blog_posts")
      .update(payload)
      .eq("id", data.id!)
      .select(ALL_COLUMNS)
      .single();
    if (error) throw new Error(error.message);
    return row as AdminBlogPost;
  });

export const deletePost = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("blog_posts").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
