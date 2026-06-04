import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export type CertificateItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc: string;
  href?: string;
};

type CertificateCarouselProps = {
  items: CertificateItem[];
  className?: string;
};

export function CertificateCarousel({
  items,
  className,
}: CertificateCarouselProps) {
  const [index, setIndex] = useState(0);
  const len = items.length;

  const goTo = useCallback(
    (next: number) => {
      if (!len) return;
      setIndex(((next % len) + len) % len);
    },
    [len],
  );

  if (!len) return null;

  const current = items[index]!;

  return (
    <div className={cn("w-full", className)}>
      <div
        className="relative mx-auto max-w-4xl"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") goTo(index - 1);
          if (e.key === "ArrowRight") goTo(index + 1);
        }}
        aria-roledescription="carousel"
        aria-label="Certificates"
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((item) => (
              <article
                key={item.id}
                className="flex min-w-full  flex-col"
                aria-hidden={item.id !== current.id}
              >
                <div className="flex  w-full items-center justify-center p-4 sm:p-6">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-border bg-background px-5 py-4 text-left">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.description ? (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 shadow-md transition hover:bg-accent"
          aria-label="Previous certificate"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 shadow-md transition hover:bg-accent"
          aria-label="Next certificate"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div className="flex items-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index
                  ? "w-6 bg-foreground"
                  : "w-2 bg-foreground/30 hover:bg-foreground/50",
              )}
              aria-label={`Go to ${item.title}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
        {current.href && current.href !== "#" ? (
          <a
            href={current.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-foreground"
          >
            View on Credly
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>

      <p className="mt-2 text-center text-sm text-muted-foreground">
        {index + 1} of {len}
      </p>
    </div>
  );
}
