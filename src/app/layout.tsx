import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
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
  authors: [
    {
      name: 'Ibbo Abdoli',
      url: 'https://ibboabdoli.com',
    },
  ],
  creator: 'Ibbo Abdoli',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ibboabdoli.com',
    title: 'Ibbo AI Portfolio',
    description:
      'AI-powered interactive portfolio for Ibbo Abdoli — Service Engineer & Automation Technician.',
    siteName: 'Ibbo AI Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibbo AI Portfolio',
    description:
      'AI-powered interactive portfolio for Ibbo Abdoli — Service Engineer & Automation Technician.',
    creator: '@ibboabdoli',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        sizes: 'any',
      },
    ],
    shortcut: '/favicon.svg?v=2',
    apple: '/apple-touch-icon.svg?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        {/* Fastfolio tracking script removed */}
      </head>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">{children}</main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
