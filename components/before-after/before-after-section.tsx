'use client';

import { Clock, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { BEFORE_AFTER } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { FadeIn } from '@/components/animations/fade-in';

export function BeforeAfterSection() {
  const t = useTranslations('before-after');

  return (
    <section id="antes-e-depois" className="section bg-white dark:bg-ink-950" aria-label="Resultados de antes e depois">
      <div className="container-wide">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BEFORE_AFTER.map((item, idx) => (
            <FadeIn key={item.key} delay={idx * 0.08} className="group">
              <article className="rounded-2xl bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 overflow-hidden shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                <div className="relative">
                  <ImagePlaceholder variant="square" theme="primary" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-ink-800 shadow-soft">
                    <TrendingUp className="h-3 w-3 text-brand-600" aria-hidden="true" />
                    {item.result}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink-900 leading-tight">
                    {t(`items.${item.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed text-pretty">
                    {t(`items.${item.key}.description`)}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand-700">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.duration}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-500 max-w-2xl mx-auto">
          {t('disclaimer')}
        </p>
      </div>
    </section>
  );
}