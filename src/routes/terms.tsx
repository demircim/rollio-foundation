import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    buildSeo({
      path: "/terms",
      title: "Terms of Service — Rollio",
      description:
        "The terms governing your use of Rollio's autonomous agent platform, including community guidelines, intellectual property, binding arbitration, and outcome-based pricing.",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <Section tone="dark" className="!py-20 md:!py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-lg text-surface-light/80">
            Effective March 20, 2024 · Last updated May 29, 2025.
          </p>
        </div>
      </Section>

      <Section className="!py-16 md:!py-24">
        <article className="mx-auto max-w-3xl space-y-10 text-muted-foreground">

          <div>
            <p>
              Rollio, Inc. ("Rollio," "we," "us," or "our") provides access to our website at https://www.rollio.ai/ (the "Site") and autonomous agent platform subject to these Terms of Service. By accessing the Site, you agree to be legally bound by these Terms and our{" "}
              <Link to="/privacy" className="font-medium text-foreground underline-offset-4 hover:underline">Privacy Policy</Link>
              {" "}(collectively, this "Agreement"). If you do not agree, do not use the Site.
            </p>
            <p className="mt-4 text-sm font-semibold text-foreground">
              THE SECTIONS TITLED "BINDING ARBITRATION" AND "CLASS ACTION WAIVER" CONTAIN A BINDING ARBITRATION AGREEMENT AND CLASS ACTION WAIVER THAT AFFECT YOUR LEGAL RIGHTS. PLEASE READ THEM.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              1. Community Guidelines
            </h2>
            <p className="mt-3">By accessing the Site and platform, you agree to:</p>
            <ul className="mt-4 space-y-2">
              <li>Comply with all applicable laws and not use the Site for any unlawful purpose.</li>
              <li>Not collect market research for a competing business.</li>
              <li>Not upload or transmit content that infringes intellectual property, is defamatory, obscene, or invades another person's privacy.</li>
              <li>Not impersonate any person or entity or falsely state your affiliation.</li>
              <li>Not decompile, reverse engineer, or disassemble any software or processes accessible through the Site.</li>
              <li>Not circumvent, degrade, or remove any of the Site's security protections.</li>
              <li>Not use automated means (spiders, crawlers, scraping tools) to download data from the Site without our express written consent.</li>
              <li>Not use Rollio trademarks or framing techniques without prior written consent.</li>
              <li>Not impose an unreasonable or disproportionately large load on our technical infrastructure.</li>
              <li>Not interfere with the proper operation of the Site through any virus, malware, or unauthorized access attempt.</li>
            </ul>
            <p className="mt-4">We reserve the right to deny access to the Site, or any portion of it, without notice for violation of these guidelines.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              2. Intellectual Property
            </h2>
            <p className="mt-3">
              The Site contains materials ("Content") including software, text, graphics, images, and audiovisual works provided by or on behalf of Rollio. Content is protected under U.S. and foreign laws. You have no rights in or to the Content beyond what is permitted under this Agreement.
            </p>
            <p className="mt-3">
              You may not sell, transfer, license, or modify the Content, or reproduce, display, distribute, or use it for any public or commercial purpose without prior written consent. Rollio Trademarks may not be used in connection with any product or service, or as part of any link, without prior written permission. All goodwill generated from use of Rollio Trademarks inures to our benefit.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              3A. Outcome-Based Pricing Terms
            </h2>
            <p className="mt-4">
              <span className="font-semibold text-foreground">Outcome definitions.</span>{" "}
              Rollio's pricing is based on business outcomes including process cycle time reduction, cost per transaction reduction, error rate reduction, capacity increase, cash flow improvement, and other mutually agreed outcomes.
            </p>
            <p className="mt-3">
              <span className="font-semibold text-foreground">Outcome verification.</span>{" "}
              Outcomes are verified through your source systems (Salesforce, SAP, Celonis, etc.), third-party audits upon request, and mutually agreed measurement methodology.
            </p>
            <p className="mt-3">
              <span className="font-semibold text-foreground">Pricing adjustments.</span>{" "}
              If agreed outcomes are not achieved, pricing adjusts proportionally. We share the risk and reward of your results.
            </p>
            <p className="mt-3">
              <span className="font-semibold text-foreground">Renewal terms.</span>{" "}
              Pricing for renewal periods is recalculated based on actual outcomes achieved in the prior period.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              3B. Autonomous Agent Terms
            </h2>
            <p className="mt-4">
              <span className="font-semibold text-foreground">Agent authority.</span>{" "}
              Rollio agents operate with the authority and permissions you've granted them in your source systems. You maintain complete control over what data agents can access, what actions they can execute, and the guardrails on agent behavior.
            </p>
            <p className="mt-3">
              <span className="font-semibold text-foreground">Agent accountability.</span>{" "}
              Rollio maintains complete logs of all agent actions for audit trail and compliance, troubleshooting, and your review.
            </p>
            <p className="mt-3">
              <span className="font-semibold text-foreground">Agent training &amp; improvement.</span>{" "}
              Agent learning is limited to your own data and patterns, never shared with other customers, and always within the guardrails you've set.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              4. No Warranties; Limitation of Liability
            </h2>
            <p className="mt-3 text-sm font-semibold text-foreground">
              THE SITE AND CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, INCLUDING WARRANTIES OF TITLE, MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES' RIGHTS, AND FITNESS FOR A PARTICULAR PURPOSE.
            </p>
            <p className="mt-3">
              IN NO EVENT WILL ROLLIO OR ITS LICENSORS BE LIABLE FOR ANY INCIDENTAL, CONSEQUENTIAL, OR INDIRECT DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS INTERRUPTION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ANY DIRECT DAMAGES ARE LIMITED TO ONE HUNDRED DOLLARS ($100).
            </p>
            <p className="mt-3 text-sm">Some jurisdictions do not allow the exclusion of certain warranties. These limitations may not apply to you to the extent prohibited by applicable law.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              5. Indemnification
            </h2>
            <p className="mt-3">
              You agree to defend, indemnify, and hold Rollio and its officers, directors, employees, successors, licensees, and assigns harmless from any claims, actions, or demands, including reasonable legal and accounting fees, arising from: (i) your breach of this Agreement; (ii) your misuse of Content or the Site; or (iii) your violation of any third-party right, including any copyright, trademark, property, or privacy right.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              6. Digital Millennium Copyright Act (DMCA)
            </h2>
            <p className="mt-3">
              To report copyright infringement, please send a notice to our DMCA designated agent:
            </p>
            <div className="mt-4 rounded-2xl border bg-card p-5 text-sm">
              <p className="font-semibold text-foreground">DMCA Designated Agent — Rollio, Inc.</p>
              <p className="mt-2 text-muted-foreground">
                41 Flatbush Ave, STE 232<br />Brooklyn, NY 11217
              </p>
              <p className="mt-2">
                <a href="mailto:legal@rollio.ai" className="font-medium text-foreground underline-offset-4 hover:underline">
                  legal@rollio.ai
                </a>
              </p>
            </div>
            <p className="mt-4 text-sm">
              Your notice must include: (i) identification of the copyrighted work; (ii) location on the Site; (iii) your contact information; (iv) a good faith belief statement; (v) a statement under penalty of perjury of accuracy; and (vi) your signature.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              7. Binding Arbitration
            </h2>
            <p className="mt-3 text-sm font-semibold text-foreground">
              IF EITHER PARTY CHOOSES ARBITRATION, NEITHER PARTY SHALL HAVE THE RIGHT TO LITIGATE SUCH CLAIM IN COURT OR TO HAVE A JURY TRIAL.
            </p>
            <p className="mt-3">
              Any dispute arising under or relating to this Agreement shall be finally and exclusively resolved by binding arbitration governed by the Federal Arbitration Act. Arbitration shall be conducted by JAMS pursuant to its then-current Comprehensive Arbitration Rules and Procedures. Each party is responsible for its applicable JAMS fees. Judgment on the award may be entered in any court with jurisdiction. Nothing in this Agreement prevents either party from seeking provisional equitable relief in a court of competent jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              8. Class Action Waiver
            </h2>
            <p className="mt-3">
              All disputes shall be resolved individually. No arbitration or proceeding shall be joined with another; there is no right to arbitrate on a class basis; and no dispute may be brought in a representative capacity on behalf of the general public.{" "}
              <span className="font-semibold text-foreground">YOU MAY BRING CLAIMS AGAINST ROLLIO ONLY IN YOUR INDIVIDUAL CAPACITY.</span>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              9. Governing Law &amp; Miscellaneous
            </h2>
            <p className="mt-3">
              This Agreement is governed by the laws of the State of New York, without regard to conflict of law provisions. Our failure to enforce any provision shall not constitute a waiver. You may not assign this Agreement. This Agreement constitutes the entire agreement between you and Rollio with respect to the subject matter and supersedes all prior agreements.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              10. Related Documents
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/privacy" className="font-medium text-foreground underline-offset-4 hover:underline">Privacy Policy</Link>{" "}
                — How we collect, use, and protect your information.
              </li>
              <li>
                <Link to="/msa" className="font-medium text-foreground underline-offset-4 hover:underline">Master Service Agreement</Link>{" "}
                — Enterprise platform licensing agreement.
              </li>
              <li>
                <Link to="/security" className="font-medium text-foreground underline-offset-4 hover:underline">Security &amp; Compliance</Link>{" "}
                — SOC 2 Type II, zero data-at-rest, and security architecture.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Contact
            </h2>
            <p className="mt-3">
              Legal inquiries:{" "}
              <a href="mailto:legal@rollio.ai" className="font-medium text-foreground underline-offset-4 hover:underline">
                legal@rollio.ai
              </a>
            </p>
          </div>
        </article>
      </Section>

      <Section tone="muted" className="!py-16 md:!py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Enterprise agreement questions?
          </h2>
          <div className="mt-6">
            <Button variant="primary" size="lg" asChild>
              <Link to="/consultation-booking">
                Talk to our team <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
