'use client';

import { FAQ } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FadeIn } from '@/components/animations/fade-in';

export function FaqSection() {
  return (
    <section
      id="faq"
      className="section bg-white"
      aria-label="Perguntas frequentes"
    >
      <div className="container-tight max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes"
          subtitle="Reunimos as dúvidas mais comuns. Se ainda tiver perguntas, é só falar comigo."
        />

        <FadeIn>
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((item, idx) => (
              <AccordionItem key={item.question} value={`item-${idx}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}