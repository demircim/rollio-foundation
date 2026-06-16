import * as React from "react";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  label: string;
  title: string;
  description?: string;
}

interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  items: TimelineItem[];
}

/**
 * Horizontal timeline on desktop, vertical on mobile.
 */
export const Timeline: React.FC<TimelineProps> = ({ items, className, ...props }) => {
  return (
    <ol
      className={cn(
        "relative flex flex-col gap-8 md:flex-row md:gap-0",
        className,
      )}
      {...props}
    >
      {/* connector line */}
      <div
        aria-hidden
        className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-0 md:right-0 md:top-4 md:h-px md:w-auto md:bottom-auto"
      />
      {items.map((item, i) => (
        <li
          key={i}
          className="relative flex gap-4 md:flex-1 md:flex-col md:gap-0 md:pr-6 md:last:pr-0"
        >
          <span
            aria-hidden
            className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground ring-4 ring-background"
          >
            {i + 1}
          </span>
          <div className="min-w-0 md:mt-6">
            <span className="block text-xs font-semibold uppercase tracking-wider text-accent">
              {item.label}
            </span>
            <h3 className="mt-1 text-lg">{item.title}</h3>
            {item.description && (
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};
