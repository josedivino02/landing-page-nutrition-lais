'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MessageCircle, Star, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Counter } from '@/components/animations/counter';
import { HERO_IMAGE, PROFESSIONAL, CONTACT } from '@/lib/constants';
import { formatWhatsAppLink } from '@/lib/utils';

const heroStats = [
  { value: 8, suffix: '+', label: 'Anos de experiência' },
  { value: 2000, suffix: '+', label: 'Pacientes atendidos' },
  { value: 4.9, suffix: '/5', label: 'Avaliação média', decimals: 1 },
];

export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/40 via-white to-white"
      aria-label="Apresentação"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-gold-200/30 blur-3xl" />
      </div>

      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 sm:py-16 lg:py-24">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-200 px-4 py-1.5 mb-6 shadow-soft"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold-500" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Nutrição clínica e esportiva
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-ink-900 text-balance"
          >
            Transforme sua alimentação e{' '}
            <span className="gradient-text">alcance seus objetivos</span>{' '}
            com acompanhamento personalizado.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-ink-600 leading-relaxed max-w-xl text-pretty"
          >
            Emagrecimento • Hipertrofia • Reeducação Alimentar • Nutrição Clínica
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-ink-700"
          >
            {['Plano 100% individual', 'Atendimento humanizado', 'Suporte contínuo'].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-brand-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ),
            )}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Button asChild size="xl" variant="default">
              <a href="#contato">
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Agendar Consulta
              </a>
            </Button>
            <Button asChild size="xl" variant="whatsapp">
              <a
                href={formatWhatsAppLink(
                  CONTACT.whatsapp,
                  'Olá Laís, gostaria de agendar uma consulta.',
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Rating widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-400 text-gold-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="mt-1 text-sm font-medium text-ink-800">
                {PROFESSIONAL.rating}/5{' '}
                <span className="text-ink-500 font-normal">
                  ({PROFESSIONAL.ratingCount} avaliações)
                </span>
              </div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-ink-200" />
            <div className="hidden sm:flex items-center gap-2">
              <Award className="h-5 w-5 text-brand-500" aria-hidden="true" />
              <span className="text-sm text-ink-700">{PROFESSIONAL.crn}</span>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] sm:aspect-[5/6] w-full max-w-md lg:max-w-none mx-auto"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-3 sm:-inset-4 rounded-[2rem] bg-gradient-to-br from-brand-200 via-brand-100 to-gold-200/40 -z-10" />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-32 w-32 sm:h-48 sm:w-48 rounded-full bg-brand-200/50 -z-10 blur-2xl" />

            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] shadow-elevated">
              <Image
                src={HERO_IMAGE}
                alt="Nutricionista Laís Silva atendendo paciente em consultório moderno"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -left-4 sm:-left-8 top-12 bg-white rounded-2xl shadow-elevated p-3 sm:p-4 border border-ink-100"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-brand-600" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-ink-500">Pacientes</div>
                  <div className="font-bold text-ink-900">
                    <Counter value={2000} suffix="+" duration={2.5} />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -right-2 sm:-right-6 bottom-16 bg-white rounded-2xl shadow-elevated p-3 sm:p-4 border border-ink-100"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold-100 flex items-center justify-center">
                  <Star className="h-5 w-5 fill-gold-500 text-gold-500" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-ink-500">Avaliação</div>
                  <div className="font-bold text-ink-900">
                    <Counter value={4.9} suffix="/5" decimals={1} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-ink-100 bg-white">
        <div className="container-wide grid grid-cols-3 divide-x divide-ink-100">
          {heroStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-6 sm:py-8 text-center"
            >
              <div className="font-display text-3xl sm:text-4xl font-bold text-brand-600">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="mt-1 text-xs sm:text-sm text-ink-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}