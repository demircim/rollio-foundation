import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

export interface BlogPostCard {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  featured_image: string | null;
  author: string | null;
  read_time: number | null;
  tags: string[];
  published_at: string | null;
}

export interface BlogPostFull extends BlogPostCard {
  body: string;
  meta_title: string | null;
  meta_keywords: string | null;
  updated_at: string;
}

const CARD_COLUMNS =
  "id, slug, title, excerpt, featured_image, author, read_time, tags, published_at";
const FULL_COLUMNS = `${CARD_COLUMNS}, body, meta_title, meta_keywords, updated_at`;

function getPublicClient() {
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY!,
    {
      auth: {
        storage: undefined,
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );
}

/** List published posts, newest first. Optional tag filter. Uses RPC to bypass PostgREST row limit. */
export const listPublishedPosts = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) =>
    z
      .object({ tag: z.string().optional(), limit: z.number().int().positive().max(200).optional() })
      .parse(input ?? {}),
  )
  .handler(async ({ data }) => {
    const supabase = getPublicClient();
    const now = new Date().toISOString();
    const tag = data.tag;

    const fetchPage = (from: number, to: number) => {
      let q = supabase
        .from("blog_posts")
        .select(CARD_COLUMNS)
        .eq("status", "published")
        .lte("published_at", now)
        .order("published_at", { ascending: false })
        .range(from, to);
      if (tag) q = q.contains("tags", [tag]);
      return q;
    };

    const [r1, r2, r3] = await Promise.all([
      fetchPage(0, 9),
      fetchPage(10, 19),
      fetchPage(20, 35),
    ]);

    if (r1.error) throw new Error(r1.error.message);
    if (r2.error) throw new Error(r2.error.message);
    if (r3.error) throw new Error(r3.error.message);

    return [...(r1.data ?? []), ...(r2.data ?? []), ...(r3.data ?? [])] as BlogPostCard[];

  });



/** Get a single published post by slug. Returns null if not found. */
export const getPublishedPostBySlug = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) =>
    z.object({ slug: z.string().min(1) }).parse(input),
  )
  .handler(async ({ data }) => {
    const supabase = getPublicClient();
    const now = new Date().toISOString();
    const { data: row, error } = await supabase
      .from("blog_posts")
      .select(FULL_COLUMNS)
      .eq("status", "published")
      .lte("published_at", now)
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return (row ?? null) as BlogPostFull | null;
  });

/** Up to N related published posts sharing any tag, excluding the current slug. */
export const getRelatedPosts = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) =>
    z
      .object({
        slug: z.string().min(1),
        tags: z.array(z.string()).default([]),
        limit: z.number().int().positive().max(12).optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const supabase = getPublicClient();
    const now = new Date().toISOString();
    const limit = data.limit ?? 3;

    let query = supabase
      .from("blog_posts")
      .select(CARD_COLUMNS)
      .eq("status", "published")
      .lte("published_at", now)
      .neq("slug", data.slug)
      .order("published_at", { ascending: false })
      .limit(limit);

    if (data.tags.length > 0) query = query.overlaps("tags", data.tags);

    const { data: rows, error } = await query;
    if (error) throw new Error(error.message);
    return (rows ?? []) as BlogPostCard[];
  });
