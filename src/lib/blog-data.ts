// Stub blog index. Replace with a CMS / database fetch once content is wired up.
// The sitemap reads from listPublishedSlugs() so it stays in sync automatically.

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  published: boolean;
}

const POSTS: BlogPostMeta[] = [
  // Example placeholders — leave empty array `[]` here once real CMS data is wired in.
];

export function listPublishedSlugs(): { slug: string; lastmod?: string }[] {
  return POSTS.filter((p) => p.published).map((p) => ({
    slug: p.slug,
    lastmod: p.dateModified ?? p.datePublished,
  }));
}

export function getPostMeta(slug: string): BlogPostMeta | undefined {
  return POSTS.find((p) => p.slug === slug && p.published);
}
