'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, SITE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { MobileMenu } from './mobile-menu';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-soft border-b border-ink-100'
            : 'bg-white border-b border-transparent',
        )}
      >
        <nav
          className="container-wide flex items-center justify-between h-16 lg:h-20"
          aria-label="Navegação principal"
        >
          {/* Logo */}
          <a
            href="#topo"
            className="flex items-center gap-2 group"
            aria-label={`${SITE.name} — Página inicial`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-soft transition-transform group-hover:scale-105">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-lg font-bold text-ink-900">Nutrição Laís</span>
              <span className="text-[10px] uppercase tracking-wider text-brand-600 font-medium">
                Saúde & Bem-estar
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="default"
              size="default"
              className="hidden sm:inline-flex"
            >
              <a href="#contato">Agendar consulta</a>
            </Button>
            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-ink-100 transition-colors"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}