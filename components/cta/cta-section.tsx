'use client';

import { motion } from 'framer-motion';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/lib/constants';
import { formatWhatsAppLink } from '@/lib/utils';

export function CtaSection() {
  return (
    <section
      aria-label="Chamada para ação"
      className="relative overflow-hidden"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 text-center overflow-hidden shadow-elevated"
        >
          {/* Decorative */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(224,154,19,0.4) 0, transparent 40%)',
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Vagas limitadas desta semana
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-balance leading-tight">
              Comece hoje sua transformação.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-brand-50 leading-relaxed max-w-2xl mx-auto text-pretty">
              Dê o primeiro passo para uma vida mais saudável e equilibrada. Agende sua consulta
              e descubra o que a nutrição pode fazer por você.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="xl" variant="gold">
                <a href="#contato">
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  Agendar agora
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
            </div>

            <p className="mt-6 text-sm text-brand-100">
              ✓ Sem compromisso · ✓ Resposta em até 24h · ✓ Primeira consulta com avaliação completa
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}