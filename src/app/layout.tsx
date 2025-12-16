import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
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
  // ... بقیه metadata همون قبلی
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

        {/* مثل اورجینال: بیرون ThemeProvider */}
        <Analytics />
      </body>
    </html>
  );
}
