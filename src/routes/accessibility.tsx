import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { CheckCircle, Smartphone } from "lucide-react";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/accessibility")({
  head: () =>
    buildSeo({
      path: "/accessibility",
      title: "Accessibility — Rollio",
      description:
        "Rollio's commitment to inclusive design. WCAG 2.1 AA conformance, iOS VoiceOver and Dynamic Type support, Android TalkBack and Magnification support.",
    }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <>
      <Section tone="dark" className="!py-20 md:!py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Accessibility
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Technology That Works for Everyone
          </h1>
          <p className="mt-6 text-lg text-surface-light/80">
            Accessibility is a core value at Rollio — not an afterthought.
          </p>
        </div>
      </Section>

      <Section className="!py-16 md:!py-24">
        <article className="mx-auto max-w-3xl space-y-12 text-muted-foreground">

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Our Commitment
            </h2>
            <p className="mt-3">
              At Rollio, Inc., we believe technology should be inclusive and usable for everyone — regardless of ability. Our applications are built to work seamlessly with native accessibility features on all platforms. We are committed to conforming to WCAG 2.1 Level AA for our web presence and leveraging platform accessibility frameworks on iOS and Android.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Web Accessibility (WCAG 2.1 AA)
            </h2>
            <p className="mt-3">
              Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { label: "Keyboard navigation", status: "Supported" },
                { label: "Screen reader compatibility", status: "Supported" },
                { label: "Sufficient color contrast (AA)", status: "Supported" },
                { label: "Text resize up to 200%", status: "Supported" },
                { label: "Alt text for images", status: "Supported" },
                { label: "Skip navigation links", status: "In progress" },
              ].map(({ label, status }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl border bg-card p-4">
                  <CheckCircle className={`h-5 w-5 shrink-0 ${status === "Supported" ? "text-green-500" : "text-amber-400"}`} />
                  <div>
                    <p className="font-medium text-foreground text-sm">{label}</p>
                    <p className="text-xs text-muted-foreground">{status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="h-5 w-5 text-accent" />
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                iOS Accessibility
              </h2>
            </div>
            <p className="mt-3">
              Our apps support Apple's robust accessibility framework, including:
            </p>
            <ul className="mt-4 space-y-3">
              <li><span className="font-medium text-foreground">VoiceOver</span> — A screen reader that helps users navigate using gestures and spoken feedback.</li>
              <li><span className="font-medium text-foreground">Dynamic Type</span> — Our interfaces respond to the preferred text size set on your device.</li>
              <li><span className="font-medium text-foreground">Switch Control</span> — For users with limited mobility, our app works with Apple's adaptive input features.</li>
              <li><span className="font-medium text-foreground">Reduce Motion and Contrast</span> — We honor user preferences for reduced animations and increased visual clarity.</li>
            </ul>
            <p className="mt-4 text-sm">
              Learn more at{" "}
              <a href="https://www.apple.com/accessibility/" className="font-medium text-foreground underline-offset-4 hover:underline" rel="noopener noreferrer" target="_blank">
                apple.com/accessibility
              </a>.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="h-5 w-5 text-accent" />
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Android Accessibility
              </h2>
            </div>
            <p className="mt-3">
              Our app is fully compatible with Android's accessibility tools, including:
            </p>
            <ul className="mt-4 space-y-3">
              <li><span className="font-medium text-foreground">TalkBack</span> — A screen reader that provides spoken feedback for users navigating by touch.</li>
              <li><span className="font-medium text-foreground">Magnification and Font Size</span> — We respect your device's font scaling and display preferences.</li>
              <li><span className="font-medium text-foreground">Color and Display Adjustments</span> — Including high-contrast text and color inversion.</li>
              <li><span className="font-medium text-foreground">Voice Access</span> — Hands-free app control using spoken commands.</li>
            </ul>
            <p className="mt-4 text-sm">
              Explore{" "}
              <a href="https://www.android.com/accessibility/" className="font-medium text-foreground underline-offset-4 hover:underline" rel="noopener noreferrer" target="_blank">
                Android accessibility features
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Known Limitations
            </h2>
            <p className="mt-3">We are actively working to address the following:</p>
            <ul className="mt-4 space-y-2">
              <li>Some older embedded video content may not yet include captions.</li>
              <li>Some complex data tables in blog content may have incomplete ARIA markup.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Feedback &amp; Contact
            </h2>
            <p className="mt-3">
              If you encounter a barrier or have suggestions, please contact us:
            </p>
            <ul className="mt-4 space-y-2">
              <li>Email: <a href="mailto:support@rollio.ai" className="font-medium text-foreground underline-offset-4 hover:underline">support@rollio.ai</a></li>
              <li>Subject: "Accessibility Feedback"</li>
              <li>We aim to respond within 5 business days.</li>
            </ul>
          </div>

          <p className="text-xs text-muted-foreground">This statement was last reviewed on May 29, 2025.</p>
        </article>
      </Section>
    </>
  );
}
