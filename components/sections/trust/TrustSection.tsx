import { cn } from "@/lib/utils";

interface TrustSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  noSubtitle?: boolean;
}

export function TrustSection({
  id,
  title,
  subtitle,
  children,
  className,
  noSubtitle,
}: TrustSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("border-b border-border/50 py-16 sm:py-20", className)}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id={`${id}-title`}
          className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          {title}
        </h2>
        {!noSubtitle && subtitle && (
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
