
CREATE OR REPLACE FUNCTION public.get_published_posts(p_tag text DEFAULT NULL, p_limit int DEFAULT 100)
RETURNS TABLE (
  id uuid,
  slug text,
  title text,
  excerpt text,
  featured_image text,
  author text,
  read_time int,
  tags text[],
  published_at timestamptz
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT id, slug, title, excerpt, featured_image, author, read_time, tags, published_at
  FROM public.blog_posts
  WHERE status = 'published'
    AND published_at <= now()
    AND (p_tag IS NULL OR tags @> ARRAY[p_tag])
  ORDER BY published_at DESC
  LIMIT p_limit;
$$;

GRANT EXECUTE ON FUNCTION public.get_published_posts(text, int) TO anon, authenticated, service_role;
