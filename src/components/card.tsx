import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "elevated";
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", interactive, ...props }, ref) => {
    const variantClass = {
      default: "bg-card border border-border",
      outline: "bg-transparent border-2 border-border",
      elevated: "bg-card border border-border shadow-sm",
    }[variant];

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl p-6 md:p-8 transition-all",
          variantClass,
          interactive &&
            "hover:border-accent hover:shadow-md hover:-translate-y-0.5 cursor-pointer focus-within:border-accent",
          className,
        )}
        {...props}
      />
    );
  },
);
Card.displayName = "Card";

export const CardTitle = ({ className, ...p }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("mb-3", className)} {...p} />
);

export const CardBody = ({ className, ...p }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-muted-foreground", className)} {...p} />
);

export const CardEyebrow = ({ className, ...p }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "inline-block mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent",
      className,
    )}
    {...p}
  />
);
