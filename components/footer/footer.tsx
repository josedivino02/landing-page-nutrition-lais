'use client';

import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, Leaf } from 'lucide-react';
import { CONTACT, ADDRESS, SITE } from '@/lib/constants';
import { formatPhoneDisplay } from '@/lib/utils';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tServices = useTranslations('footer-services');

  const quickLinks = [
    { href: '#sobre', label: tNav('sobre') },
    { href: '#beneficios', label: tNav('beneficios') },
    { href: '#servicos', label: tNav('servicos') },
    { href: '#como-funciona', label: tNav('como-funciona') },
    { href: '#depoimentos', label: tNav('depoimentos') },
    { href: '#planos', label: tNav('planos') },
  ];

  return (
    <footer className="bg-ink-950 text-white relative overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-brand-500 via-gold-500 to-brand-500" />

      <div className="container-wide py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-4">
            <a href="#topo" className="flex items-center gap-2 group" aria-label="Voltar ao topo">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600">
                <Leaf className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold">{SITE.name}</span>
            </a>

            <p className="mt-4 text-sm text-ink-300 leading-relaxed text-pretty max-w-sm">
              {t('tagline')}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {CONTACT.instagram && (
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-brand-500 transition-colors"
                  aria-label={t('instagram')}
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {CONTACT.facebook && (
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-brand-500 transition-colors"
                  aria-label={t('facebook')}
                >
                  <Facebook className="h-4 w-4" />
                </a>
              )}
              {CONTACT.linkedin && (
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-brand-500 transition-colors"
                  aria-label={t('linkedin')}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <nav className="lg:col-span-3" aria-label={t('quick-links')}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t('quick-links')}
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-300 hover:text-brand-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t('services-title')}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-300">
              <li>{tServices('clinical')}</li>
              <li>{tServices('weight')}</li>
              <li>{tServices('muscle')}</li>
              <li>{tServices('pregnant')}</li>
              <li>{tServices('online')}</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t('contact-title')}
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
                  className="text-ink-300 hover:text-white transition-colors"
                >
                  {formatPhoneDisplay(CONTACT.phone)}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-ink-300 hover:text-white transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                <span className="text-ink-300">
                  {ADDRESS.street}, {ADDRESS.city}/{ADDRESS.state}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                <span className="text-ink-300">{t('schedule-label')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 aspect-[16/5] sm:aspect-[21/6]">
          <iframe
            title={t('map-title')}
            className="h-full w-full grayscale-[20%]"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.state}`,
            )}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-ink-400">
          <p>{t('copyright', { year: new Date().getFullYear(), siteName: SITE.name })}</p>
          <nav aria-label={t('contact-link')} className="flex items-center gap-5">
            <a href="#politica-privacidade" className="hover:text-brand-300 transition-colors">
              {t('privacy')}
            </a>
            <a href="#termos" className="hover:text-brand-300 transition-colors">
              {t('terms')}
            </a>
            <a href="#contato" className="hover:text-brand-300 transition-colors">
              {t('contact-link')}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}