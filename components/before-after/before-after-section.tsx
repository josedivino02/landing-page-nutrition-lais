'use client';

import { Clock, TrendingUp } from 'lucide-react';
import { BEFORE_AFTER } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import { FadeIn } from '@/components/animations/fade-in';

const placeholders = [
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=600&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop&q=80',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=600&fit=crop&q=80',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&q=80',
];

export function BeforeAfterSection() {
  return (
    <section
      id="antes-e-depois"
      className="section bg-white"
      aria-label="Resultados de antes e depois"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Resultados"
          title="Antes e depois reais"
          subtitle="Cada resultado é fruto de um plano personalizado e de um acompanhamento próximo. Inspire-se."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BEFORE_AFTER.map((item, idx) => (
            <FadeIn
              key={item.title}
              delay={idx * 0.08}
              className="group"
            >
              <article className="rounded-2xl bg-white border border-ink-100 overflow-hidden shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden bg-ink-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${placeholders[idx % placeholders.length]})`,
                    }}
                    aria-label={`Resultado de ${item.title}`}
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-ink-800 shadow-soft">
                    <TrendingUp className="h-3 w-3 text-brand-600" aria-hidden="true" />
                    {item.result}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed text-pretty">
                    {item.description}
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
          * Resultados podem variar de pessoa para pessoa, dependendo da adesão ao plano e
          fatores individuais.
        </p>
      </div>
    </section>
  );
}