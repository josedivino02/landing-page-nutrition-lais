'use client';

import { Check, Heart, Microscope, Smartphone, HeartPulse } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { DIFFERENTIAL_LIST } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';

const featureBlocks = [
  { icon: Microscope, key: 'evidence' },
  { icon: Heart, key: 'human' },
  { icon: Smartphone, key: 'whatsapp' },
  { icon: HeartPulse, key: 'bio' },
] as const;

export function DifferentialsSection() {
  const t = useTranslations('differentials');

  return (
    <section
      id="diferenciais"
      className="section bg-gradient-to-b from-white via-brand-50/30 to-white dark:from-ink-950 dark:via-ink-900 dark:to-ink-950"
      aria-label="Diferenciais do atendimento"
    >
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {t('eyebrow')}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 text-balance leading-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed text-pretty">
            {t('subtitle')}
          </p>

          <ul className="mt-8 space-y-3">
            {DIFFERENTIAL_LIST.map((idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-base text-ink-800 leading-relaxed">{t(`list.${idx}`)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button asChild size="lg">
              <a href="#contato">{t('cta')}</a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featureBlocks.map((block) => (
            <div
              key={block.key}
              className="rounded-2xl bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 p-6 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 dark:bg-gold-900/40 text-gold-600 dark:text-gold-400">
                <block.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900 leading-snug">
                {t(`blocks.${block.key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed text-pretty">
                {t(`blocks.${block.key}.description`)}
              </p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}