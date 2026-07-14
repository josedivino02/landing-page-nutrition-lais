import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routing.locales.flatMap((locale) => [
    {
      url: `${SITE.url}/${locale}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${SITE.url}/${locale}#sobre`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE.url}/${locale}#servicos`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE.url}/${locale}#planos`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE.url}/${locale}#faq`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]);
}