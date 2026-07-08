'use client';

import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT, ADDRESS } from '@/lib/constants';
import { formatPhoneDisplay, formatWhatsAppLink } from '@/lib/utils';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { LocaleSwitcher } from '@/components/ui/locale-switcher';
import { ModeToggle } from '@/components/ui/mode-toggle';

export function TopBar() {
  const t = useTranslations('nav');
  const whatsappLink = formatWhatsAppLink(CONTACT.whatsapp, t('agende-cta'));

  return (
    <div className="bg-brand-700 text-white text-xs">
      <div className="container-wide flex items-center justify-between py-1.5 sm:py-2 gap-3">
        {/* Left: contact info (desktop only) */}
        <div className="hidden md:flex items-center gap-6 min-w-0">
          <a
            href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-1.5 hover:text-brand-100 transition-colors"
            aria-label={`${t('phone')}: ${formatPhoneDisplay(CONTACT.phone)}`}
          >
            <Phone className="h-3 w-3 shrink-0" aria-hidden="true" />
            <span>{formatPhoneDisplay(CONTACT.phone)}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden lg:flex items-center gap-1.5 hover:text-brand-100 transition-colors"
            aria-label={`${t('email')}: ${CONTACT.email}`}
          >
            <Mail className="h-3 w-3 shrink-0" aria-hidden="true" />
            <span className="truncate">{CONTACT.email}</span>
          </a>
          <span className="hidden lg:flex items-center gap-1.5">
            <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
            <span>
              {ADDRESS.city}, {ADDRESS.state}
            </span>
          </span>
        </div>

        {/* Mobile: tiny brand hint */}
        <div className="flex md:hidden items-center gap-1.5 min-w-0">
          <Phone className="h-3 w-3 shrink-0" aria-hidden="true" />
          <a
            href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
            className="hover:text-brand-100 transition-colors truncate"
          >
            {formatPhoneDisplay(CONTACT.phone)}
          </a>
        </div>

        {/* Right: switchers + CTA */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 ml-auto">
          <ModeToggle compact />
          <ThemeSwitcher compact />
          <LocaleSwitcher compact />
          <span className="hidden sm:block h-3 w-px bg-white/20" aria-hidden="true" />
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-brand-100 transition-colors hidden sm:inline"
            aria-label="WhatsApp"
          >
            {t('agende-cta')} →
          </a>
        </div>
      </div>
    </div>
  );
}