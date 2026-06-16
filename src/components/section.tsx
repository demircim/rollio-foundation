import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article" | "header" | "footer";
  bleed?: boolean; // when true, removes max-width container
  tone?: "default" | "muted" | "dark" | "navy";
}

/**
 * Section: consistent vertical rhythm (60px desktop / 40px mobile) and
 * centered max-width 1280px container.
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, as: Tag = "section", bleed, tone = "default", ...props }, ref) => {
    const toneClass = {
      default: "bg-background text-foreground",
      muted: "bg-muted text-foreground",
      dark: "bg-surface-dark text-surface-light",
      navy: "bg-primary text-primary-foreground",
    }[tone];

    return (
      <Tag
        ref={ref as never}
        className={cn("py-10 md:py-[60px]", toneClass, className)}
        {...props}
      >
        {bleed ? (
          children
        ) : (
          <div className="mx-auto w-full max-w-content px-6 md:px-8">{children}</div>
        )}
      </Tag>
    );
  },
);
Section.displayName = "Section";
