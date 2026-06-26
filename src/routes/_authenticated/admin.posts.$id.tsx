import { createFileRoute, Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  getPostById,
  upsertPost,
  deletePost,
  type AdminBlogPost,
} from "@/lib/blog-admin.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Markdown } from "@/components/markdown";
import { toast } from "sonner";
import { ArrowLeft, Upload, X } from "lucide-react";

const TAG_OPTIONS = [
  "AI Agents",
  "Agentic AI",
  "Enterprise AI",
  "Operations",
  "Finance",
  "Scaling",
  "Process Automation",
  "Automation",
  "Procurement",
  "Order-to-Cash",
  "Risk Management",
  "Compliance",
  "Audit",
  "Implementation",
  "IT Operations",
  "Strategy",
  "Business Transformation",
  "Execution Excellence",
  "ROI",
];

const SIGNED_URL_TTL_SECONDS = 60 * 60 * 24 * 365 * 10; // ~10 years

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export const Route = createFileRoute("/_authenticated/admin/posts/$id")({
  component: PostEditor,
});

interface FormState {
  title: string;
  slug: string;
  slugTouched: boolean;
  excerpt: string;
  body: string;
  featured_image: string;
  author: string;
  read_time: string;
  meta_title: string;
  meta_keywords: string;
  tags: string[];
  status: "draft" | "published";
  published_at: string | null;
}

const EMPTY: FormState = {
  title: "",
  slug: "",
  slugTouched: false,
  excerpt: "",
  body: "",
  featured_image: "",
  author: "",
  read_time: "",
  meta_title: "",
  meta_keywords: "",
  tags: [],
  status: "draft",
  published_at: null,
};

function fromPost(p: AdminBlogPost): FormState {
  return {
    title: p.title,
    slug: p.slug,
    slugTouched: true,
    excerpt: p.excerpt ?? "",
    body: p.body ?? "",
    featured_image: p.featured_image ?? "",
    author: p.author ?? "",
    read_time: p.read_time != null ? String(p.read_time) : "",
    meta_title: p.meta_title ?? "",
    meta_keywords: p.meta_keywords ?? "",
    tags: p.tags ?? [],
    status: p.status,
    published_at: p.published_at,
  };
}

function PostEditor() {
  const { id } = useParams({ from: "/_authenticated/admin/posts/$id" });
  const navigate = useNavigate();
  const isNew = id === "new";

  const getFn = useServerFn(getPostById);
  const saveFn = useServerFn(upsertPost);
  const deleteFn = useServerFn(deletePost);

  const { data: post, isLoading } = useQuery({
    queryKey: ["admin-post", id],
    queryFn: () => getFn({ data: { id } }),
    enabled: !isNew,
  });

  const [form, setForm] = useState<FormState>(EMPTY);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (post) setForm(fromPost(post));
  }, [post]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onTitleChange(value: string) {
    setForm((f) => ({
      ...f,
      title: value,
      slug: f.slugTouched ? f.slug : slugify(value),
    }));
  }

  function toggleTag(tag: string) {
    setForm((f) => ({
      ...f,
      tags: f.tags.includes(tag) ? f.tags.filter((t) => t !== tag) : [...f.tags, tag],
    }));
  }

  async function handleUpload(file: File) {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "bin";
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage
        .from("blog-images")
        .upload(path, file, { upsert: false, contentType: file.type });
      if (error) throw error;
      const { data, error: urlErr } = await supabase.storage
        .from("blog-images")
        .createSignedUrl(path, SIGNED_URL_TTL_SECONDS);
      if (urlErr) throw urlErr;
      update("featured_image", data.signedUrl);
      toast.success("Image uploaded");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function save(opts: { publish?: boolean; unpublish?: boolean } = {}) {
    setSaving(true);
    try {
      const status: "draft" | "published" = opts.publish
        ? "published"
        : opts.unpublish
          ? "draft"
          : form.status;

      const payload = {
        ...(isNew ? {} : { id }),
        title: form.title.trim(),
        slug: form.slug.trim(),
        excerpt: form.excerpt.trim() || null,
        body: form.body,
        featured_image: form.featured_image.trim() || null,
        author: form.author.trim() || null,
        read_time: form.read_time ? Number(form.read_time) : null,
        meta_title: form.meta_title.trim() || null,
        meta_keywords: form.meta_keywords.trim() || null,
        tags: form.tags,
        status,
        published_at: form.published_at,
      };

      const saved = await saveFn({ data: payload });
      toast.success(
        opts.publish ? "Published" : opts.unpublish ? "Unpublished" : "Saved",
      );
      if (isNew) {
        navigate({ to: "/admin/posts/$id", params: { id: saved.id }, replace: true });
      } else {
        setForm(fromPost(saved));
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  async function onDelete() {
    if (isNew) return;
    try {
      await deleteFn({ data: { id } });
      toast.success("Post deleted");
      navigate({ to: "/admin" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to delete");
    }
  }

  if (!isNew && isLoading) {
    return <div className="py-12 text-center text-sm text-muted-foreground">Loading…</div>;
  }
  if (!isNew && !post) {
    return (
      <div className="py-12 text-center">
        <p className="text-sm text-muted-foreground">Post not found.</p>
        <Link to="/admin" className="mt-4 inline-block text-sm underline">Back to posts</Link>
      </div>
    );
  }

  const isPublished = form.status === "published";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link to="/admin" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to posts
        </Link>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" disabled={saving} onClick={() => save()}>
            Save {form.status === "draft" ? "draft" : ""}
          </Button>
          {isPublished ? (
            <Button variant="secondary" disabled={saving} onClick={() => save({ unpublish: true })}>
              Unpublish
            </Button>
          ) : (
            <Button disabled={saving} onClick={() => save({ publish: true })}>
              Publish
            </Button>
          )}
          {!isNew && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" className="text-destructive hover:text-destructive">
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete this post?</AlertDialogTitle>
                  <AlertDialogDescription>
                    "{form.title || "Untitled"}" will be permanently removed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Field label="Title">
            <Input
              value={form.title}
              onChange={(e) => onTitleChange(e.target.value)}
              placeholder="Post title"
            />
          </Field>

          <Field label="Slug" hint="Lowercase letters, numbers, and hyphens.">
            <Input
              value={form.slug}
              onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value, slugTouched: true }))}
              placeholder="my-post-slug"
            />
          </Field>

          <Field label="Excerpt">
            <Textarea
              rows={3}
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              placeholder="Short summary shown on cards and meta description."
            />
          </Field>

          <Field label="Body (Markdown)">
            <Tabs defaultValue="write">
              <TabsList>
                <TabsTrigger value="write">Write</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="split">Split</TabsTrigger>
              </TabsList>
              <TabsContent value="write">
                <Textarea
                  rows={20}
                  value={form.body}
                  onChange={(e) => update("body", e.target.value)}
                  className="font-mono text-sm"
                  placeholder="# Write your post in Markdown"
                />
              </TabsContent>
              <TabsContent value="preview">
                <div className="min-h-[480px] rounded-md border border-border bg-background p-6">
                  {form.body ? <Markdown>{form.body}</Markdown> : (
                    <p className="text-sm text-muted-foreground">Nothing to preview yet.</p>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="split">
                <div className="grid gap-3 md:grid-cols-2">
                  <Textarea
                    rows={20}
                    value={form.body}
                    onChange={(e) => update("body", e.target.value)}
                    className="font-mono text-sm"
                  />
                  <div className="min-h-[480px] overflow-auto rounded-md border border-border bg-background p-4">
                    {form.body ? <Markdown>{form.body}</Markdown> : (
                      <p className="text-sm text-muted-foreground">Nothing to preview yet.</p>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Field>
        </div>

        <aside className="space-y-6">
          <Card title="Status">
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">State</span>
                <span className="font-medium capitalize text-foreground">{form.status}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Published</span>
                <span className="font-medium text-foreground">
                  {form.published_at ? new Date(form.published_at).toLocaleString() : "—"}
                </span>
              </div>
            </div>
          </Card>

          <Card title="Featured image">
            {form.featured_image ? (
              <div className="space-y-3">
                <img
                  src={form.featured_image}
                  alt="Featured"
                  className="w-full rounded-md border border-border object-cover"
                />
                <Button size="sm" variant="outline" onClick={() => update("featured_image", "")}>
                  <X className="mr-1 h-4 w-4" /> Remove
                </Button>
              </div>
            ) : (
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-border bg-background px-4 py-6 text-sm text-muted-foreground hover:bg-accent">
                <Upload className="h-4 w-4" />
                {uploading ? "Uploading…" : "Upload image"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleUpload(f);
                  }}
                />
              </label>
            )}
            <Input
              className="mt-3"
              value={form.featured_image}
              onChange={(e) => update("featured_image", e.target.value)}
              placeholder="Or paste image URL"
            />
          </Card>

          <Card title="Tags">
            <div className="space-y-2">
              {TAG_OPTIONS.map((tag) => (
                <label key={tag} className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={form.tags.includes(tag)}
                    onCheckedChange={() => toggleTag(tag)}
                  />
                  <span>{tag}</span>
                </label>
              ))}
            </div>
          </Card>

          <Card title="Details">
            <div className="space-y-3">
              <Field label="Author">
                <Input value={form.author} onChange={(e) => update("author", e.target.value)} />
              </Field>
              <Field label="Read time (minutes)">
                <Input
                  type="number"
                  min={0}
                  value={form.read_time}
                  onChange={(e) => update("read_time", e.target.value)}
                />
              </Field>
              <Field label="Status">
                <Select value={form.status} onValueChange={(v) => update("status", v as "draft" | "published")}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Published at" hint="Auto-set on first publish. Override if needed.">
                <Input
                  type="datetime-local"
                  value={
                    form.published_at
                      ? new Date(form.published_at).toISOString().slice(0, 16)
                      : ""
                  }
                  onChange={(e) =>
                    update(
                      "published_at",
                      e.target.value ? new Date(e.target.value).toISOString() : null,
                    )
                  }
                />
              </Field>
            </div>
          </Card>

          <Card title="SEO">
            <div className="space-y-3">
              <Field label="Meta title">
                <Input value={form.meta_title} onChange={(e) => update("meta_title", e.target.value)} />
              </Field>
              <Field label="Meta keywords">
                <Input
                  value={form.meta_keywords}
                  onChange={(e) => update("meta_keywords", e.target.value)}
                  placeholder="comma, separated, keywords"
                />
              </Field>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <h3 className="mb-3 text-sm font-semibold text-foreground">{title}</h3>
      {children}
    </div>
  );
}
