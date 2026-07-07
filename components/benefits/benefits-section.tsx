'use client';

import {
  Apple,
  Salad,
  Dumbbell,
  Scale,
  HeartPulse,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react';
import { BENEFITS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import { FadeIn } from '@/components/animations/fade-in';

const iconMap: Record<string, LucideIcon> = {
  Apple,
  Salad,
  Dumbbell,
  Scale,
  HeartPulse,
  Stethoscope,
};

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="section bg-white"
      aria-label="Benefícios do acompanhamento"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Benefícios"
          title="O que você ganha com o acompanhamento"
          subtitle="Plano alimentar, suporte, orientação e tudo que você precisa para alcançar seus objetivos com saúde."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, idx) => {
            const Icon = iconMap[benefit.icon] || Apple;
            return (
              <FadeIn
                key={benefit.title}
                delay={idx * 0.05}
                className="group relative rounded-2xl bg-white border border-ink-100 shadow-soft p-6 sm:p-8 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-100/40 blur-2xl group-hover:bg-brand-200/60 transition-colors"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-soft group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 text-pretty">
                    {benefit.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}