'use client';

import { useTranslations } from 'next-intl';
import { FAQ_KEYS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FadeIn } from '@/components/animations/fade-in';

export function FaqSection() {
  const t = useTranslations('faq');

  return (
    <section id="faq" className="section bg-white dark:bg-ink-950" aria-label="Perguntas frequentes">
      <div className="container-tight max-w-3xl">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <FadeIn>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_KEYS.map((key, idx) => (
              <AccordionItem key={key} value={`item-${idx}`}>
                <AccordionTrigger>{t(`items.${key}.question`)}</AccordionTrigger>
                <AccordionContent>{t(`items.${key}.answer`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}