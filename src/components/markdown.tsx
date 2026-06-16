import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

interface MarkdownProps {
  children: string;
  className?: string;
}

/**
 * Renders markdown into typography-aware HTML using the design-system tokens.
 * Used for blog post bodies.
 */
export function Markdown({ children, className }: MarkdownProps) {
  return (
    <div
      className={cn(
        "max-w-none space-y-5 text-base leading-relaxed text-foreground",
        "[&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:mt-12 [&_h2]:mb-4",
        "[&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mt-8 [&_h3]:mb-3",
        "[&_p]:text-muted-foreground",
        "[&_strong]:text-foreground [&_strong]:font-semibold",
        "[&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline",
        "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-muted-foreground",
        "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:text-muted-foreground",
        "[&_li]:marker:text-accent",
        "[&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-foreground",
        "[&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono",
        "[&_pre]:rounded-lg [&_pre]:bg-surface-dark [&_pre]:p-4 [&_pre]:text-surface-light [&_pre]:overflow-x-auto",
        "[&_pre_code]:bg-transparent [&_pre_code]:px-0 [&_pre_code]:text-surface-light",
        "[&_hr]:border-border [&_hr]:my-10",
        "[&_img]:rounded-xl [&_img]:border [&_img]:border-border [&_img]:my-6",
        className,
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
