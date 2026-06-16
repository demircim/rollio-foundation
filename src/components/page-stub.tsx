import * as React from "react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PageStubProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageStub({ eyebrow, title, description, children }: PageStubProps) {
  return (
    <>
      <Section className="!py-16 md:!py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6">{title}</h1>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">{description}</p>
          )}
          <div className="mt-10">
            <Button variant="primary" size="lg">
              Request a Demo <ArrowRight />
            </Button>
          </div>
        </div>
        {children && <div className="mt-16">{children}</div>}
      </Section>
    </>
  );
}
