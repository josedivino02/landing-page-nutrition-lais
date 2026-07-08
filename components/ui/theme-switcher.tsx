'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Palette, Check } from 'lucide-react';
import { THEMES, type ThemeId } from '@/lib/themes';
import { useTheme } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';

export function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();
  const t = useTranslations('theme-switcher');
  const [open, setOpen] = useState(false);
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

  const current = THEMES.find((th) => th.id === theme) ?? THEMES[0]!;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t('label')}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          'inline-flex items-center gap-2 rounded-full text-sm font-medium transition-colors',
          compact
            ? 'h-9 px-3 text-white/90 hover:bg-white/10 hover:text-white'
            : 'h-10 px-3 text-ink-700 hover:bg-ink-100 hover:text-ink-900 border border-ink-200',
        )}
      >
        <span
          className="inline-block h-4 w-4 rounded-full border-2 border-white shadow-soft"
          style={{ backgroundColor: current.swatch }}
          aria-hidden="true"
        />
        {!compact && <span className="hidden md:inline">{t(`${current.id}-name`)}</span>}
        {compact && <Palette className="h-3.5 w-3.5" aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            role="menu"
            aria-label={t('menu-title')}
            className="absolute right-0 top-full mt-2 w-72 rounded-2xl bg-white shadow-elevated border border-ink-100 p-2 z-50"
          >
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-ink-500">
              {t('menu-title')}
            </div>
            <ul className="flex flex-col">
              {THEMES.map((th) => (
                <li key={th.id} role="none">
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={theme === th.id}
                    onClick={() => {
                      setTheme(th.id as ThemeId);
                      setOpen(false);
                    }}
                    className={cn(
                      'group flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
                      theme === th.id ? 'bg-brand-50' : 'hover:bg-ink-50',
                    )}
                  >
                    <span
                      className="mt-0.5 inline-block h-6 w-6 shrink-0 rounded-full border-2 border-white shadow-soft"
                      style={{ backgroundColor: th.swatch }}
                      aria-hidden="true"
                    />
                    <span className="flex-1 min-w-0">
                      <span
                        className={cn(
                          'block text-sm font-semibold',
                          theme === th.id ? 'text-brand-700' : 'text-ink-900',
                        )}
                      >
                        {t(`${th.id}-name`)}
                      </span>
                      <span className="block text-xs text-ink-500 leading-snug mt-0.5">
                        {t(`${th.id}-desc`)}
                      </span>
                    </span>
                    {theme === th.id && (
                      <Check className="mt-1 h-4 w-4 text-brand-600" aria-hidden="true" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}