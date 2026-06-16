import * as React from "react";
import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

/**
 * Responsive grid: mobile-first single column,
 * promotes to 2-col at sm, then to requested cols at lg.
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 3, gap = "md", className, ...props }, ref) => {
    const colsClass = {
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    }[cols];

    const gapClass = { sm: "gap-4", md: "gap-6 md:gap-8", lg: "gap-8 md:gap-12" }[gap];

    return (
      <div ref={ref} className={cn("grid", colsClass, gapClass, className)} {...props} />
    );
  },
);
Grid.displayName = "Grid";
