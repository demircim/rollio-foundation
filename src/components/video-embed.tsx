import { cn } from "@/lib/utils";

interface VideoEmbedProps {
  src: string;
  title: string;
  className?: string;
}

/**
 * Responsive 16:9 video embed (YouTube, Vimeo, etc.).
 * Pass the full embed src URL.
 */
export const VideoEmbed: React.FC<VideoEmbedProps> = ({ src, title, className }) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border bg-muted aspect-video",
        className,
      )}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
};
