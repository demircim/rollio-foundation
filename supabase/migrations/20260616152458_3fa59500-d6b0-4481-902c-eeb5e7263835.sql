-- Admin write policies on blog_posts (read policy for anon on published already exists)
CREATE POLICY "Authenticated users can insert blog posts"
ON public.blog_posts FOR INSERT TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
ON public.blog_posts FOR UPDATE TO authenticated
USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
ON public.blog_posts FOR DELETE TO authenticated
USING (true);

CREATE POLICY "Authenticated users can read all blog posts"
ON public.blog_posts FOR SELECT TO authenticated
USING (true);

-- updated_at trigger
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON public.blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Storage policies for blog-images bucket
CREATE POLICY "Public can view blog images"
ON storage.objects FOR SELECT TO public
USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can upload blog images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can update blog images"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can delete blog images"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'blog-images');