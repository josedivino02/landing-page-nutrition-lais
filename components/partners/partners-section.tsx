'use client';

import { useTranslations } from 'next-intl';
import { PARTNERS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';

export function PartnersSection() {
  const t = useTranslations('partners');

  return (
    <section
      aria-label="Empresas e academias parceiras"
      className="border-y border-ink-100 bg-ink-50/50 py-12 sm:py-16"
    >
      <div className="container-tight">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {PARTNERS.map((partner) => (
            <div
              key={partner}
              className="aspect-[3/2] rounded-xl bg-white border border-ink-100 flex items-center justify-center px-4 text-center text-sm font-medium text-ink-500 shadow-soft hover:text-brand-600 hover:border-brand-200 hover:shadow-elevated transition-all duration-300"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}