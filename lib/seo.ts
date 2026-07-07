import { ADDRESS, CONTACT, PROFESSIONAL, SITE } from './constants';

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
    '@id': `${SITE.url}#organization`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    image: `${SITE.url}/og-image.jpg`,
    logo: `${SITE.url}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: ADDRESS.country,
    },
    sameAs: [CONTACT.instagram, CONTACT.facebook, CONTACT.linkedin].filter(Boolean),
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
  };
}

export function buildNutritionistJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Nutritionist',
    name: PROFESSIONAL.name,
    identifier: PROFESSIONAL.crn,
    description:
      'Nutricionista clínica especializada em emagrecimento, hipertrofia, reeducação alimentar e nutrição clínica.',
    knowsAbout: [
      'Nutrição Clínica',
      'Emagrecimento Saudável',
      'Hipertrofia',
      'Reeducação Alimentar',
      'Nutrição Esportiva',
      'Nutrição Materno-Infantil',
    ],
    affiliation: {
      '@type': 'Organization',
      name: 'Conselho Regional de Nutricionistas — 3ª Região',
    },
    worksFor: {
      '@id': `${SITE.url}#organization`,
    },
    url: SITE.url,
    image: `${SITE.url}/og-image.jpg`,
  };
}

export function buildFaqJsonLd(
  faqs: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(items: ReadonlyArray<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}