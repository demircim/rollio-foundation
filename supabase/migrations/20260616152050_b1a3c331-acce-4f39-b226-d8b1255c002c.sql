
-- Status enum
CREATE TYPE public.blog_post_status AS ENUM ('draft', 'published');

-- Blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  body TEXT NOT NULL DEFAULT '',
  featured_image TEXT,
  author TEXT,
  read_time INTEGER,
  meta_title TEXT,
  meta_keywords TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  status public.blog_post_status NOT NULL DEFAULT 'draft',
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX blog_posts_status_published_at_idx
  ON public.blog_posts (status, published_at DESC);

CREATE INDEX blog_posts_tags_gin_idx
  ON public.blog_posts USING GIN (tags);

-- Data API grants
GRANT SELECT ON public.blog_posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.blog_posts TO authenticated;
GRANT ALL ON public.blog_posts TO service_role;

-- RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Anonymous and authenticated visitors can read PUBLISHED posts only.
CREATE POLICY "Public can read published posts"
  ON public.blog_posts
  FOR SELECT
  USING (status = 'published');

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seed a couple of demo posts so the UI isn't empty
INSERT INTO public.blog_posts (title, slug, excerpt, body, featured_image, author, read_time, tags, status, published_at)
VALUES
  (
    'Why business context is the missing piece in automation',
    'business-context-missing-piece-automation',
    'Most automation tools see 20% of your business. Here''s what changes when AI reads the other 80% — the emails, tickets, and notes where the real work happens.',
    E'## The 80% you can''t see\n\nMost dashboards and reports run on **structured data** — what''s in the rows of your ERP, CRM, or ticketing system. But the real story of your business lives somewhere else: in the email threads where approvals get negotiated, the spreadsheet a controller keeps "just in case," the note a CSM left after a vendor call.\n\nWhen automation only sees the structured 20%, it makes brittle decisions and routes exceptions back to humans. When it reads the full picture, it acts.\n\n## What changes\n\n- **Approvals resolve themselves** because the AI sees the context that justifies them.\n- **Exceptions shrink** because most "exceptions" were really missing context.\n- **Audit trails get cleaner** because every decision is logged with the source it was based on.\n\n> "Collaboration has enhanced our operational efficiency significantly." — Laura Buseghin, Campari\n\nThat''s the shift: from describing what happened to **executing what works**.',
    'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1600&q=80',
    'Rollio Team',
    5,
    ARRAY['Finance', 'Automation', 'AI Agents'],
    'published',
    now() - interval '3 days'
  ),
  (
    'A 90-day path from pilot to hands-free finance close',
    '90-day-path-hands-free-finance-close',
    'A look at how enterprise finance teams move from a 30-day pilot to a 3–5 day close, and what to watch out for along the way.',
    E'## The shape of a good rollout\n\nGoing from a 10–15 day close to a 3–5 day close is less about technology and more about **sequence**. Here''s the path we''ve seen work.\n\n### Week 1–2: Discovery\nMap the close. Find the bottlenecks. Set rules and limits. Pick a 30-day pilot scope you can defend.\n\n### Week 3–6: Pilot\nStart with daily reconciliation on a defined slice. Measure baseline. Validate decisions side-by-side with the team.\n\n### Month 2–3: Scaling\nExpand to accruals, inter-company, and close procedures. Tune performance. Train the broader team on managing the system instead of doing the work.\n\n### Month 4+: Full speed\nClose runs in 3–5 days. Finance shifts from processing to analysis.\n\n## What to watch for\n\n- **Don''t over-scope the pilot.** Pick the one process where success is unambiguous.\n- **Set the rules upfront.** What can the system decide on its own? What gets routed to a person?\n- **Track the right metric.** Cycle time + error rate beats raw "hours saved" every time.',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
    'Rollio Team',
    7,
    ARRAY['Finance', 'Implementation'],
    'published',
    now() - interval '10 days'
  ),
  (
    'Order-to-cash, end to end: what hands-free actually means',
    'order-to-cash-end-to-end-hands-free',
    'PO creation, invoice checks, payment timing, vendor management — what changes when AI agents handle the full procure-to-pay cycle.',
    E'## From scattered to seamless\n\nMost O2C teams spend 40% of their time reconciling POs to invoices, 30% on payment exceptions, and 20% chasing vendors. That''s a 90% tax on the people you hired to think strategically.\n\nWhen AI agents handle the work end-to-end — reading the PO, the receipt, the invoice, and the email thread around them — the math changes:\n\n- **O2C cycle:** 45–60 days → 15–20 days\n- **Cost per transaction:** $50–100 → $10–15\n- **Error rate:** 2–5% → <0.5%\n\n## What "hands-free" really means\n\nIt doesn''t mean no humans. It means humans on the **exceptions that matter**: new vendor relationships, contract gaps, unusual amounts. Everything else is handled, with a full audit trail.\n\nThat''s the shift the best procurement and finance teams are making right now.',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80',
    'Rollio Team',
    6,
    ARRAY['Order-to-Cash', 'Procurement', 'Automation'],
    'published',
    now() - interval '20 days'
  );
