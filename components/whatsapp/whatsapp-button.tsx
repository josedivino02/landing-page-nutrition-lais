'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT } from '@/lib/constants';
import { formatWhatsAppLink } from '@/lib/utils';

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const dismissedFlag = sessionStorage.getItem('wa-tooltip-dismissed');
    if (dismissedFlag) {
      setDismissed(true);
      return;
    }
    const timer = setTimeout(() => setShowTooltip(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismissTooltip = () => {
    setShowTooltip(false);
    setDismissed(true);
    sessionStorage.setItem('wa-tooltip-dismissed', '1');
  };

  const whatsappLink = formatWhatsAppLink(
    CONTACT.whatsapp,
    'Olá Laís, gostaria de agendar uma consulta.',
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[260px] rounded-2xl bg-white shadow-elevated border border-ink-100 p-4 pr-8"
          >
            <button
              type="button"
              onClick={handleDismissTooltip}
              className="absolute top-2 right-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-ink-500 hover:bg-ink-100 transition-colors"
              aria-label="Fechar mensagem"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="text-sm font-medium text-ink-900 leading-relaxed">
              👋 Olá! Posso te ajudar a agendar sua consulta?
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700"
            >
              Falar agora →
            </a>
            <span
              className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 bg-white border-r border-b border-ink-100"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated hover:bg-[#1da851] transition-colors"
      >
        <span className="sr-only">Falar no WhatsApp</span>
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
          aria-hidden="true"
        />
        <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
      </motion.a>
    </div>
  );
}