'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('not-found');

  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-50/40 via-white to-white dark:from-ink-950 dark:via-ink-950 dark:to-ink-950 px-4">
        <div className="max-w-md w-full text-center">
          <p className="font-display text-7xl sm:text-8xl font-bold gradient-text">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white text-balance">
            {t('title')}
          </h1>
          <p className="mt-3 text-base text-ink-600 dark:text-ink-300 text-pretty">
            {t('description')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="default">
              <Link href="/pt-BR">
                <Home className="h-4 w-4" aria-hidden="true" />
                {t('cta')}
              </Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}