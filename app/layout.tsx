import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SITE } from '@/lib/constants';
import {
  buildLocalBusinessJsonLd,
  buildNutritionistJsonLd,
  buildBreadcrumbJsonLd,
} from '@/lib/seo';

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Nutricionista | Emagrecimento e Saúde`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'nutricionista',
    'nutrição clínica',
    'emagrecimento saudável',
    'hipertrofia',
    'reeducação alimentar',
    'consulta nutricional',
    'plano alimentar',
    'nutrição esportiva',
    'nutricionista online',
    `${SITE.name}`,
  ],
  authors: [{ name: SITE.author }],
  creator: SITE.author,
  publisher: SITE.author,
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
    locale: 'pt_BR',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Nutricionista | Emagrecimento e Saúde`,
    description: SITE.description,
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
    title: `${SITE.name} — Nutricionista`,
    description: SITE.description,
    images: ['/og-image.jpg'],
    creator: '@nutricaolais',
  },
  alternates: {
    canonical: SITE.url,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = JSON.stringify(buildLocalBusinessJsonLd());
  const nutritionistJsonLd = JSON.stringify(buildNutritionistJsonLd());
  const breadcrumbJsonLd = JSON.stringify(
    buildBreadcrumbJsonLd([{ name: 'Início', url: SITE.url }]),
  );

  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
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
      </body>
    </html>
  );
}