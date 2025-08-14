import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "./Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chicago Intellectual Salon | Pantheon - Join Systems Thinkers",
    template: "%s | Pantheon"
  },
  description: "Join Chicago's first intellectual salon for systems thinkers. Monthly meetings focused on rigorous analysis, collaborative solutions, and conscious human evolution. Apply now for founding membership.",
  keywords: [
    "intellectual salon chicago",
    "systems thinking",
    "critical thinking community",
    "philosophical discussion group",
    "conscious evolution",
    "collaborative problem solving",
    "intellectual community chicago",
    "rigorous analysis",
    "founding members",
    "human potential"
  ],
  authors: [{ name: "Pantheon Project" }],
  creator: "Pantheon Project",
  publisher: "Pantheon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.thepantheon.club',
    siteName: 'Pantheon',
    title: 'Chicago Intellectual Salon | Pantheon - Join Systems Thinkers',
    description: 'Join Chicago\'s first intellectual salon for systems thinkers. Monthly meetings focused on rigorous analysis, collaborative solutions, and conscious human evolution.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pantheon - Chicago Intellectual Salon for Systems Thinkers',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chicago Intellectual Salon | Pantheon - Join Systems Thinkers',
    description: 'Join Chicago\'s first intellectual salon for systems thinkers. Monthly meetings focused on rigorous analysis and collaborative solutions.',
    images: ['/twitter-image.jpg'],
    creator: '@pantheon_project',
  },
  alternates: {
    canonical: 'https://www.thepantheon.club',
  },
  category: 'Education',
  classification: 'Intellectual Community',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      }
    ]
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://www.thepantheon.club'),
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

  return (
    <html lang="en">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://formspree.io" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pantheon",
              "description": "Chicago's first intellectual salon for systems thinkers focused on conscious human evolution",
              "url": "https://www.thepantheon.club",
              "logo": "https://www.thepantheon.club/logo.png",
              "sameAs": [
                "https://twitter.com/pantheon_project"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "addressCountry": "US"
              }
            })
          }}
        />
        
        {/* Structured Data - Educational Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Pantheon Intellectual Salon",
              "description": "Intellectual salon fostering critical thinking, systems analysis, and collaborative problem-solving",
              "url": "https://www.thepantheon.club",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "addressCountry": "US"
              },
              "offers": {
                "@type": "Offer",
                "name": "Founding Membership",
                "description": "6-month intellectual salon program for systems thinkers",
                "category": "Educational Program"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Analytics - only load in production */}
        {GA_MEASUREMENT_ID && (
          <Analytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}