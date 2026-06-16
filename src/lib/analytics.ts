// Lightweight GA4 + CTA tracking helpers.
// Reads measurement ID from VITE_GA4_MEASUREMENT_ID at build time.

export const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID as
  | string
  | undefined;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export function captureUtmParams() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) found[k] = v;
    }
    if (Object.keys(found).length) {
      sessionStorage.setItem("rollio_utm", JSON.stringify(found));
    }
  } catch {
    /* ignore */
  }
}

export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem("rollio_utm");
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

export function trackCtaClick(label: string, location?: string) {
  if (typeof window === "undefined") return;
  const payload = {
    event: "cta_click",
    cta_label: label,
    cta_location: location ?? window.location.pathname,
    ...getUtmParams(),
  };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  window.gtag?.("event", "cta_click", payload);
}
