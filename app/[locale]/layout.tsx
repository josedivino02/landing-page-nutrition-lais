import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import './globals.css';
import { SITE } from '@/lib/constants';
import { routing } from '@/i18n/routing';
import {
  buildLocalBusinessJsonLd,
  buildNutritionistJsonLd,
  buildBreadcrumbJsonLd,
} from '@/lib/seo';
import { ThemeProvider, THEME_INIT_SCRIPT } from '@/components/providers/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0c2415' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const baseUrl = SITE.url;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: `%s | ${SITE.name}`,
    },
    description: t('description'),
    keywords: [
      'nutricionista',
      'nutritionist',
      'nutrição clínica',
      'clinical nutrition',
      'emagrecimento saudável',
      'weight loss',
      'hipertrofia',
      'hypertrophy',
      'reeducação alimentar',
      'food re-education',
      'consulta nutricional',
      'meal plan',
      'plano alimentar',
      'nutrição esportiva',
      'sports nutrition',
      'nutricionista online',
      'online nutritionist',
      SITE.name,
    ],
    authors: [{ name: SITE.author }],
    creator: SITE.author,
    publisher: SITE.author,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR`,
        en: `${baseUrl}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'pt-BR' ? 'pt_BR' : 'en_US',
      url: `${baseUrl}/${locale}`,
      siteName: SITE.name,
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og-image.jpg'],
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
    manifest: '/manifest.json',
    category: 'health',
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const localBusinessJsonLd = JSON.stringify(buildLocalBusinessJsonLd());
  const nutritionistJsonLd = JSON.stringify(buildNutritionistJsonLd());
  const breadcrumbJsonLd = JSON.stringify(
    buildBreadcrumbJsonLd([{ name: 'Início', url: `${SITE.url}/${locale}` }]),
  );

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent FOUC by applying theme before paint */}
        <script
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            {/* Structured Data */}
            <Script
              id="ld-local-business"
              type="application/ld+json"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{ __html: localBusinessJsonLd }}
            />
            <Script
              id="ld-nutritionist"
              type="application/ld+json"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{ __html: nutritionistJsonLd }}
            />
            <Script
              id="ld-breadcrumb"
              type="application/ld+json"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
            />

            {/* Google Analytics — descomente e preencha NEXT_PUBLIC_GA_ID */}
            {/* {process.env.NEXT_PUBLIC_GA_ID && (
              <>
                <Script
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                  strategy="afterInteractive"
                />
                <Script id="ga-init" strategy="afterInteractive">
                  {`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
                </Script>
              </>
            )} */}

            {/* Meta Pixel — descomente e preencha NEXT_PUBLIC_META_PIXEL */}
            {/* {process.env.NEXT_PUBLIC_META_PIXEL && (
              <Script id="meta-pixel" strategy="afterInteractive">
                {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${process.env.NEXT_PUBLIC_META_PIXEL}');fbq('track','PageView');`}
              </Script>
            )} */}

            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}