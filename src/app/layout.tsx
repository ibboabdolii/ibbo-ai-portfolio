import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ai.ibboabdoli.com'),

  title: 'Ibbo AI Portfolio',
  description:
    'Interactive AI-powered portfolio for Ibbo Abdoli — Service Engineer & Automation Technician based in Sweden.',

  keywords: [
    'Ibbo Abdoli',
    'Ibbo',
    'AI Portfolio',
    'Automation',
    'Service Engineer',
    'PLC',
    'ABB Robots',
    'Industrial Automation',
    'Elektroautomatik',
    'Next.js',
    'AI',
  ],

  authors: [{ name: 'Ibbo Abdoli', url: 'https://ibboabdoli.com' }],
  creator: 'Ibbo Abdoli',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai.ibboabdoli.com',
    title: 'Ibbo Abdoli – AI Portfolio',
    description:
      'AI-powered portfolio showcasing real-world experience in industrial automation, PLC systems, ABB robots and electrical installations.',
    siteName: 'Ibbo AI',
    images: [
      {
        url: '/ai-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Ibbo Abdoli – AI Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ibbo Abdoli – AI Portfolio',
    description:
      'Service Engineer & Automation Technician | Industrial Automation | PLC | ABB Robots',
    images: ['/ai-preview.jpg'],
    creator: '@ibboabdoli',
  },

  icons: {
    icon: [{ url: '/favicon.svg', sizes: 'any' }],
    shortcut: '/favicon.svg?v=2',
    apple: '/apple-touch-icon.svg?v=2',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <main className="flex min-h-screen flex-col">{children}</main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
