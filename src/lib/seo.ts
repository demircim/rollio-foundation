// Per-route SEO helpers built on top of TanStack Router's head() option.
// Canonical host for the marketing site:
export const SITE_URL = "https://www.rollio.ai";
export const SITE_NAME = "Rollio";

type MetaEntry = Record<string, string>;
type LinkEntry = Record<string, string>;
type ScriptEntry = { type: string; children: string };

export interface SeoInput {
  /** Path-only, e.g. "/solutions/finance". Combined with SITE_URL for canonical + og:url. */
  path: string;
  title: string;
  description: string;
  /** "website" for marketing pages, "article" for blog posts, etc. */
  ogType?: "website" | "article" | "product";
  /** Absolute or root-relative image URL. */
  image?: string;
  /** Set true for /admin and other private routes. */
  noindex?: boolean;
  /** Extra JSON-LD blocks (Organization, BlogPosting, BreadcrumbList, FAQPage, …). */
  jsonLd?: Record<string, unknown>[];
}

export interface SeoHead {
  meta: MetaEntry[];
  links: LinkEntry[];
  scripts: ScriptEntry[];
}

function toAbsolute(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

/** Build the head() payload for a route. Title/description override the root defaults. */
export function buildSeo(input: SeoInput): SeoHead {
  const url = toAbsolute(input.path);
  const ogType = input.ogType ?? "website";

  const meta: MetaEntry[] = [
    { title: input.title },
    { name: "description", content: input.description },
    { property: "og:title", content: input.title },
    { property: "og:description", content: input.description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:title", content: input.title },
    { name: "twitter:description", content: input.description },
    { name: "twitter:card", content: input.image ? "summary_large_image" : "summary" },
  ];

  if (input.image) {
    const img = toAbsolute(input.image);
    meta.push(
      { property: "og:image", content: img },
      { name: "twitter:image", content: img },
    );
  }

  if (input.noindex) {
    meta.push({ name: "robots", content: "noindex,nofollow" });
  }

  const links: LinkEntry[] = [{ rel: "canonical", href: url }];

  const scripts: ScriptEntry[] = (input.jsonLd ?? []).map((data) => ({
    type: "application/ld+json",
    children: JSON.stringify(data),
  }));

  return { meta, links, scripts };
}

// ---------- JSON-LD helpers ----------

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [] as string[],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export interface BlogPostingInput {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}

export function blogPostingLd(post: BlogPostingInput) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: url,
    url,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: { "@type": "Organization", name: post.authorName ?? SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    ...(post.image ? { image: toAbsolute(post.image) } : {}),
  };
}

export function breadcrumbListLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: toAbsolute(c.path),
    })),
  };
}

export function faqPageLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}
