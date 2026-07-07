'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT, ADDRESS } from '@/lib/constants';
import { formatPhoneDisplay, formatWhatsAppLink } from '@/lib/utils';

export function TopBar() {
  const whatsappLink = formatWhatsAppLink(CONTACT.whatsapp);

  return (
    <div className="hidden md:block bg-brand-700 text-white text-xs">
      <div className="container-wide flex items-center justify-between py-2">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-1.5 hover:text-brand-100 transition-colors"
            aria-label={`Ligar para ${formatPhoneDisplay(CONTACT.phone)}`}
          >
            <Phone className="h-3 w-3" aria-hidden="true" />
            <span>{formatPhoneDisplay(CONTACT.phone)}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-1.5 hover:text-brand-100 transition-colors"
            aria-label={`Enviar e-mail para ${CONTACT.email}`}
          >
            <Mail className="h-3 w-3" aria-hidden="true" />
            <span className="hidden lg:inline">{CONTACT.email}</span>
          </a>
          <span className="hidden lg:flex items-center gap-1.5">
            <MapPin className="h-3 w-3" aria-hidden="true" />
            <span>
              {ADDRESS.city}, {ADDRESS.state}
            </span>
          </span>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-brand-100 transition-colors"
          aria-label="Falar no WhatsApp"
        >
          Agende sua consulta →
        </a>
      </div>
    </div>
  );
}