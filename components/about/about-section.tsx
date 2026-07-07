'use client';

import Image from 'next/image';
import { GraduationCap, Award, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ABOUT_IMAGE, PROFESSIONAL } from '@/lib/constants';
import { FadeIn } from '@/components/animations/fade-in';
import { Counter } from '@/components/animations/counter';

const highlights = [
  { icon: GraduationCap, label: 'Pós-graduada em Nutrição Clínica' },
  { icon: Award, label: 'Especialista em Nutrição Esportiva' },
  { icon: Stethoscope, label: 'Atendimento clínico e esportivo' },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section gradient-bg" aria-label="Sobre a nutricionista">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <FadeIn className="lg:col-span-2 order-1">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-200 to-gold-200/40 -z-10" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] shadow-elevated">
              <Image
                src={ABOUT_IMAGE}
                alt="Nutricionista Laís Silva sorrindo no consultório"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Badge flutuante */}
            <div className="absolute -right-4 -bottom-4 sm:-right-6 sm:-bottom-6 bg-white rounded-2xl shadow-elevated p-4 sm:p-5 border border-ink-100 max-w-[220px]">
              <div className="font-display text-2xl font-bold text-brand-600">
                <Counter value={PROFESSIONAL.rating} suffix="/5" decimals={1} />
              </div>
              <div className="text-xs text-ink-500 mt-1">
                Avaliação de {PROFESSIONAL.ratingCount} pacientes atendidos
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={0.15} className="lg:col-span-3 order-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Sobre mim
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 text-balance leading-tight">
            Olá, eu sou a <span className="gradient-text">Laís Silva</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-ink-600 leading-relaxed text-pretty">
            Nutricionista {PROFESSIONAL.crn}, com mais de 8 anos de experiência ajudando pessoas
            a transformarem sua saúde e qualidade de vida através da alimentação. Acredito que
            comer bem não precisa ser complicado — precisa ser sustentável.
          </p>

          <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed text-pretty">
            Já atendi mais de <strong className="text-ink-900">2.000 pacientes</strong> com
            diferentes objetivos — de emagrecimento e ganho de massa muscular até gestantes,
            idosos e tratamento de doenças metabólicas. Cada plano alimentar é único, ajustado à
            sua rotina, preferências e necessidades.
          </p>

          <ul className="mt-8 grid sm:grid-cols-1 gap-3">
            {highlights.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-xl bg-white border border-ink-100 px-4 py-3 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-ink-800">{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" variant="default">
              <a href="#contato">Agendar consulta</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#servicos">Conheça os serviços</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}