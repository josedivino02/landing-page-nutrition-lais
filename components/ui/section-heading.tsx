import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={cn('max-w-2xl mb-12 sm:mb-16', alignment, className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 text-balance leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-ink-500 leading-relaxed text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  );
}