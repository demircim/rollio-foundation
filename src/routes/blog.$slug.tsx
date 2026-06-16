import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/page-stub";
import { buildSeo, blogPostingLd, breadcrumbListLd } from "@/lib/seo";
import { getPostMeta } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPostMeta(params.slug);
    const title = post?.title ?? params.slug.replace(/-/g, " ");
    const description =
      post?.description ?? "Article from the Rollio blog.";

    return buildSeo({
      path: `/blog/${params.slug}`,
      title: `${title} — Rollio Blog`,
      description,
      ogType: "article",
      jsonLd: [
        breadcrumbListLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: title, path: `/blog/${params.slug}` },
        ]),
        ...(post
          ? [
              blogPostingLd({
                slug: post.slug,
                title: post.title,
                description: post.description,
                datePublished: post.datePublished,
                dateModified: post.dateModified,
              }),
            ]
          : []),
      ],
    });
  },
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  return (
    <PageStub
      eyebrow="Blog"
      title={slug.replace(/-/g, " ")}
      description="This article is coming soon."
    />
  );
}
