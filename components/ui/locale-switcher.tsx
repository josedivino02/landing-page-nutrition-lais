'use client';

import { useTransition } from 'react';
import { Languages, Check, ChevronDown } from 'lucide-react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from '@/i18n/routing';
import { LOCALE_LABELS, routing, type Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LocaleSwitcher({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  const handleSelect = (next: Locale) => {
    if (next === currentLocale) {
      setOpen(false);
      return;
    }
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
    setOpen(false);
  };

  const current = LOCALE_LABELS[currentLocale];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Trocar idioma"
        aria-expanded={open}
        aria-haspopup="menu"
        disabled={isPending}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full text-sm font-medium transition-colors',
          compact
            ? 'h-9 px-3 text-white/90 hover:bg-white/10 hover:text-white'
            : 'h-10 px-3 text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 hover:text-ink-900 dark:hover:text-white border border-ink-200 dark:border-ink-700',
        )}
      >
        {compact ? (
          <Languages className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <span className="text-base leading-none" aria-hidden="true">
            {current.flag}
          </span>
        )}
        {!compact && <span className="hidden md:inline text-xs uppercase tracking-wider">{currentLocale}</span>}
        <ChevronDown className="h-3 w-3 opacity-70" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            role="menu"
            aria-label="Idiomas disponíveis"
            className="absolute right-0 top-full mt-2 w-48 rounded-2xl bg-white dark:bg-ink-800 shadow-elevated border border-ink-100 dark:border-ink-700 p-2 z-50"
          >
            <ul className="flex flex-col">
              {routing.locales.map((loc) => {
                const meta = LOCALE_LABELS[loc];
                const active = loc === currentLocale;
                return (
                  <li key={loc} role="none">
                    <button
                      type="button"
                      role="menuitemradio"
                      aria-checked={active}
                      onClick={() => handleSelect(loc)}
                      className={cn(
                        'flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors',
                        active ? 'bg-brand-50 dark:bg-brand-900/30' : 'hover:bg-ink-50 dark:hover:bg-ink-700',
                      )}
                    >
                      <span className="text-base" aria-hidden="true">
                        {meta.flag}
                      </span>
                      <span
                        className={cn(
                          'flex-1 text-sm font-medium',
                          active ? 'text-brand-700 dark:text-brand-300' : 'text-ink-800 dark:text-ink-200',
                        )}
                      >
                        {meta.label}
                      </span>
                      {active && (
                        <Check className="h-4 w-4 text-brand-600" aria-hidden="true" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}