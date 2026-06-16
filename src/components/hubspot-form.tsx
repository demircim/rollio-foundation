import { useEffect, useRef } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: {
          portalId: string;
          formId: string;
          region?: string;
          target: string;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const HUBSPOT_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/v2.js";
const HUBSPOT_PORTAL_ID = "1787265";
const HUBSPOT_REGION = "na1";

let scriptPromise: Promise<void> | null = null;

function loadHubSpotScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.hbspt) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${HUBSPOT_SCRIPT_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("HubSpot script failed")));
      if (window.hbspt) resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = HUBSPOT_SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("HubSpot script failed"));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

export interface HubSpotFormProps {
  formId: string;
  /** Used for analytics labeling */
  formName?: string;
  className?: string;
}

let counter = 0;

export function HubSpotForm({ formId, formName, className }: HubSpotFormProps) {
  const targetIdRef = useRef<string>(`hs-form-${++counter}-${formId.slice(0, 8)}`);

  useEffect(() => {
    let cancelled = false;
    loadHubSpotScript()
      .then(() => {
        if (cancelled || !window.hbspt) return;
        window.hbspt.forms.create({
          portalId: HUBSPOT_PORTAL_ID,
          formId,
          region: HUBSPOT_REGION,
          target: `#${targetIdRef.current}`,
          onFormSubmitted: () => {
            window.dataLayer?.push({
              event: "form_submit",
              form_id: formId,
              form_name: formName ?? formId,
            });
            window.gtag?.("event", "form_submit", {
              form_id: formId,
              form_name: formName ?? formId,
            });
          },
        });
      })
      .catch((err) => console.error(err));
    return () => {
      cancelled = true;
    };
  }, [formId, formName]);

  return <div id={targetIdRef.current} className={className} />;
}
