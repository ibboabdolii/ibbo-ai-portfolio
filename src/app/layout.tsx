import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const siteUrl = 'https://ai.ibboabdoli.com';
const siteTitle = 'Ibbo AI Portfolio';
const siteDescription =
  'Interaktiv AI-portfolio för Ibbo Abdoli — Servicetekniker och automationstekniker i Sverige med fokus på industriell automation, PLC/I/O, ABB-robotar, maskinvision och teknisk felsökning.';
const socialImage = '/og-image.png';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: siteTitle,
  authors: [{ name: 'Ibbo Abdoli', url: 'https://ibboabdoli.com' }],
  creator: 'Ibbo Abdoli',
  publisher: 'Ibbo Abdoli',
  keywords: [
    'Ibbo Abdoli',
    'AI portfolio',
    'Servicetekniker',
    'Automationstekniker',
    'industriell automation',
    'PLC felsökning',
    'PLC/I/O',
    'ABB robotar',
    'RobotStudio',
    'maskinvision',
    'Cognex VisionPro',
    'EA Vision Studio',
    'teknisk felsökning',
    'Sverige',
    'Service Engineer',
    'Automation Technician',
  ],
  alternates: {
    canonical: '/',
    languages: {
      sv: '/',
      en: '/?lang=en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    alternateLocale: ['en_US'],
    url: '/',
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: 'Ibbo Abdoli – AI Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="min-h-screen">{children}</main>
          <Toaster />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
