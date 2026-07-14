'use client';

import { Camera, ImageIcon, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

type Variant = 'portrait' | 'square' | 'wide';
type Theme = 'primary' | 'gold';

interface ImagePlaceholderProps {
  variant?: Variant;
  theme?: Theme;
  className?: string;
  label?: string;
}

const variantClasses: Record<Variant, string> = {
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
};

const themeClasses: Record<Theme, string> = {
  primary:
    'bg-gradient-to-br from-brand-200 via-brand-100 to-brand-50 text-brand-700',
  gold: 'bg-gradient-to-br from-gold-200 via-gold-100 to-gold-50 text-gold-700',
};

export function ImagePlaceholder({
  variant = 'portrait',
  theme = 'primary',
  className,
  label,
}: ImagePlaceholderProps) {
  const Icon = variant === 'portrait' ? Camera : ImageIcon;

  return (
    <div
      role="img"
      aria-label={label ?? 'Espaço reservado para imagem'}
      className={cn(
        'relative w-full overflow-hidden rounded-[1.75rem] flex items-center justify-center',
        'border border-dashed border-current/20',
        variantClasses[variant],
        themeClasses[theme],
        className,
      )}
    >
      {/* Decorative blurred blobs */}
      <div
        className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-current/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-current/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Center icon + label */}
      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm shadow-soft">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        {label && (
          <span className="text-xs font-medium uppercase tracking-wider opacity-80">
            {label}
          </span>
        )}
      </div>

      {/* Corner sparkle */}
      <Sparkles
        className="absolute top-4 right-4 h-4 w-4 opacity-30"
        aria-hidden="true"
      />
    </div>
  );
}