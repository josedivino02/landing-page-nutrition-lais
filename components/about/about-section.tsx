'use client';

import { useTranslations } from 'next-intl';
import { GraduationCap, Award, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { PROFESSIONAL } from '@/lib/constants';
import { FadeIn } from '@/components/animations/fade-in';
import { Counter } from '@/components/animations/counter';

const highlights = [
  { icon: GraduationCap, key: 'postgrad' },
  { icon: Award, key: 'sports' },
  { icon: Stethoscope, key: 'service' },
] as const;

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="sobre" className="section gradient-bg" aria-label="Sobre a nutricionista">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        <FadeIn className="lg:col-span-2 order-1">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-200 to-gold-200/40 -z-10" />
            <div className="relative h-full w-full shadow-elevated rounded-[1.75rem]">
              <ImagePlaceholder variant="portrait" theme="gold" label="Foto profissional" />
            </div>

            <div className="absolute -right-4 -bottom-4 sm:-right-6 sm:-bottom-6 bg-white rounded-2xl shadow-elevated p-4 sm:p-5 border border-ink-100 max-w-[220px]">
              <div className="font-display text-2xl font-bold text-brand-600">
                <Counter value={PROFESSIONAL.rating} suffix="/5" decimals={1} />
              </div>
              <div className="text-xs text-ink-500 mt-1">
                {t('rating-label', { count: PROFESSIONAL.ratingCount })}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="lg:col-span-3 order-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {t('eyebrow')}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 text-balance leading-tight">
            {t('title')} <span className="gradient-text">{t('name')}</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-ink-600 leading-relaxed text-pretty">
            {t('p1', { crn: PROFESSIONAL.crn })}
          </p>

          <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed text-pretty">
            {t('p2', { patients: '2.000' })}
          </p>

          <ul className="mt-8 grid sm:grid-cols-1 gap-3">
            {highlights.map((item) => (
              <li
                key={item.key}
                className="flex items-center gap-3 rounded-xl bg-white border border-ink-100 px-4 py-3 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-ink-800">{t(`highlights.${item.key}`)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" variant="default">
              <a href="#contato">{t('cta-schedule')}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#servicos">{t('cta-services')}</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}