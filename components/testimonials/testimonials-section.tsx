'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import { FadeIn } from '@/components/animations/fade-in';

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="section bg-ink-50/50"
      aria-label="Depoimentos de pacientes"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que dizem meus pacientes"
          subtitle="Mais de 2.000 pessoas já transformaram sua saúde. Conheça algumas histórias."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <FadeIn
              key={testimonial.name}
              delay={idx * 0.06}
              className="h-full"
            >
              <article className="group h-full bg-white rounded-2xl border border-ink-100 p-6 sm:p-8 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <Quote
                  className="absolute -top-2 -right-2 h-20 w-20 text-brand-100/60 group-hover:text-brand-200/60 transition-colors"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold-400 text-gold-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-ink-700 leading-relaxed text-pretty">
                    “{testimonial.text}”
                  </p>

                  <footer className="mt-6 flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-brand-100">
                      <Image
                        src={testimonial.avatar}
                        alt={`Foto de ${testimonial.name}`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-ink-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-ink-500">{testimonial.role}</div>
                    </div>
                  </footer>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}