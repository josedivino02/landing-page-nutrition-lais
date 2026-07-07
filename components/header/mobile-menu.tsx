'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/lib/constants';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink-950/40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            id="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl lg:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <div className="flex items-center justify-between p-6 border-b border-ink-100">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white">
                  <Leaf className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-display text-base font-bold text-ink-900">Nutrição Laís</span>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto p-6" aria-label="Navegação mobile">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-brand-50 hover:text-brand-700"
                    >
                      <span>{link.label}</span>
                      <span className="text-ink-400">→</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="p-6 border-t border-ink-100 space-y-3">
              <Button asChild variant="default" size="lg" className="w-full">
                <a href="#contato" onClick={onClose}>Agendar consulta</a>
              </Button>
              <Button asChild variant="whatsapp" size="lg" className="w-full">
                <a href="#contato" onClick={onClose}>Falar no WhatsApp</a>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}