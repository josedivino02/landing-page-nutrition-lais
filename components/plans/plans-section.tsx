'use client';

import { Check, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { PLANS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { cn } from '@/lib/utils';

export function PlansSection() {
  const t = useTranslations('plans');

  return (
    <section id="planos" className="section gradient-bg" aria-label="Planos e preços">
      <div className="container-wide">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan, idx) => (
            <FadeIn key={plan.key} delay={idx * 0.1} className={cn('relative', plan.highlight && 'lg:-mt-4')}>
              <article
                className={cn(
                  'relative h-full rounded-3xl p-6 sm:p-8 flex flex-col',
                  'border transition-all duration-300 hover:-translate-y-1',
                  plan.highlight
                    ? 'bg-gradient-to-br from-brand-500 to-brand-700 text-white border-transparent shadow-elevated hover:shadow-2xl'
                    : 'bg-white dark:bg-ink-800 border-ink-100 dark:border-ink-700 shadow-soft hover:shadow-elevated',
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-white shadow-soft">
                    <Sparkles className="h-3 w-3" aria-hidden="true" />
                    {t(`items.${plan.key}.badge`)}
                  </div>
                )}

                <header className="text-center">
                  <h3
                    className={cn(
                      'font-display text-2xl font-bold',
                      plan.highlight ? 'text-white' : 'text-ink-900',
                    )}
                  >
                    {t(`items.${plan.key}.name`)}
                  </h3>
                  <p
                    className={cn(
                      'mt-2 text-sm',
                      plan.highlight ? 'text-brand-100' : 'text-ink-500',
                    )}
                  >
                    {t(`items.${plan.key}.description`)}
                  </p>

                  <div className="mt-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span
                        className={cn(
                          'font-display text-4xl sm:text-5xl font-bold',
                          plan.highlight ? 'text-white' : 'text-ink-900',
                        )}
                      >
                        {plan.price}
                      </span>
                    </div>
                    <div
                      className={cn(
                        'text-sm font-medium',
                        plan.highlight ? 'text-brand-100' : 'text-ink-500',
                      )}
                    >
                      {t(plan.period === 'mensal' ? 'per-month' : 'per-consult')}
                    </div>
                  </div>
                </header>

                <ul className="mt-8 space-y-3 flex-1">
                  {Array.from({ length: plan.featureCount }, (_, i) => i + 1).map((num) => {
                    const feature = t(`items.${plan.key}.features.${num}`);
                    return (
                      <li key={num} className="flex items-start gap-3">
                        <span
                          className={cn(
                            'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                            plan.highlight ? 'bg-white/20 text-white' : 'bg-brand-500 text-white',
                          )}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span
                          className={cn(
                            'text-sm leading-relaxed',
                            plan.highlight ? 'text-brand-50' : 'text-ink-700',
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    variant={plan.highlight ? 'gold' : 'default'}
                    className="w-full"
                  >
                    <a href="#contato">{t(`items.${plan.key}.cta`)}</a>
                  </Button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-ink-500">{t('footer')}</p>
      </div>
    </section>
  );
}