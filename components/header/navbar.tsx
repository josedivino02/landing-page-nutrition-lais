'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { MobileMenu } from './mobile-menu';

export function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '#sobre', label: t('sobre') },
    { href: '#beneficios', label: t('beneficios') },
    { href: '#servicos', label: t('servicos') },
    { href: '#como-funciona', label: t('como-funciona') },
    { href: '#depoimentos', label: t('depoimentos') },
    { href: '#planos', label: t('planos') },
    { href: '#faq', label: t('faq') },
    { href: '#contato', label: t('contato') },
  ];

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
          aria-label={t('navigation-menu')}
        >
          {/* Logo */}
          <a
            href="#topo"
            className="flex items-center gap-3 group shrink-0"
            aria-label={`${SITE.name} — Home`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-soft transition-transform group-hover:scale-105">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="hidden sm:flex flex-col leading-tight whitespace-nowrap pr-2">
              <span className="font-display text-lg lg:text-xl font-bold text-ink-900">
                {SITE.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-brand-600 font-medium mt-0.5">
                {t('brand-subtitle')}
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
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
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Button
              asChild
              variant="default"
              size="default"
              className="hidden sm:inline-flex"
            >
              <a href="#contato">{t('agendar')}</a>
            </Button>
            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-ink-100 transition-colors"
              aria-label={open ? t('close-menu') : t('open-menu')}
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