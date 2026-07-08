'use client';

import { Calendar, ClipboardCheck, ChefHat, TrendingUp, type LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { STEPS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import { FadeIn } from '@/components/animations/fade-in';

const stepIcons: LucideIcon[] = [Calendar, ClipboardCheck, ChefHat, TrendingUp];

export function HowItWorksSection() {
  const t = useTranslations('how-it-works');

  return (
    <section id="como-funciona" className="section bg-white" aria-label="Como funciona o atendimento">
      <div className="container-wide">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="relative">
          <div
            className="hidden lg:block absolute top-14 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || Calendar;
              return (
                <FadeIn key={step.key} delay={idx * 0.1} className="relative text-center lg:text-left">
                  <div className="inline-flex lg:flex items-center lg:items-start gap-4 lg:gap-0 lg:flex-col">
                    <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-soft lg:mb-5">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                      <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gold-500 text-white text-xs font-bold flex items-center justify-center shadow-soft ring-4 ring-white">
                        {idx + 1}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-display text-xs font-bold uppercase tracking-wider text-brand-600">
                        {t('step-prefix')} {step.number}
                      </div>
                      <h3 className="mt-1 font-display text-lg sm:text-xl font-semibold text-ink-900">
                        {t(`steps.${step.key}.title`)}
                      </h3>
                      <p className="mt-2 text-sm text-ink-600 leading-relaxed text-pretty lg:max-w-[220px]">
                        {t(`steps.${step.key}.description`)}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}