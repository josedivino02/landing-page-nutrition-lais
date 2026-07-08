'use client';

import { ShieldCheck, Award, Users, Star, type LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { TRUST_BADGES } from '@/lib/constants';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

const icons: LucideIcon[] = [ShieldCheck, Award, Users, Star];

export function TrustBadges() {
  const t = useTranslations('trust');

  return (
    <section aria-label="Selos de confiança" className="border-y border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900">
      <div className="container-wide py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_BADGES.map((badge, idx) => {
            const Icon = icons[idx] || Award;
            return (
              <ScrollReveal key={badge.labelKey} delay={idx * 0.1} className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-ink-500 font-medium">
                    {t(badge.labelKey)}
                  </span>
                  <span className="font-bold text-ink-900 text-base sm:text-lg">{badge.value}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}