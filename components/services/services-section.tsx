'use client';

import {
  Stethoscope,
  Scale,
  Dumbbell,
  Zap,
  Baby,
  Users,
  BookOpen,
  Video,
  Building2,
  type LucideIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { SERVICES } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Scale,
  Dumbbell,
  Zap,
  Baby,
  Users,
  BookOpen,
  Video,
  Building2,
};

export function ServicesSection() {
  const t = useTranslations('services');

  return (
    <section id="servicos" className="section bg-brand-50/40 dark:bg-ink-900" aria-label="Serviços oferecidos">
      <div className="container-wide">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || Stethoscope;
            return (
              <FadeIn key={service.key} delay={idx * 0.04} className="group relative">
                <article className="h-full rounded-2xl bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 p-6 sm:p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300 group-hover:bg-brand-500 group-hover:text-white dark:group-hover:bg-brand-500 transition-colors">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-ink-900 text-balance">
                        {t(`items.${service.key}.title`)}
                      </h3>
                      <p className="mt-2 text-sm text-ink-600 leading-relaxed text-pretty">
                        {t(`items.${service.key}.description`)}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-12 text-center">
          <Button asChild size="lg" variant="default">
            <a href="#contato">{t('cta')}</a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}