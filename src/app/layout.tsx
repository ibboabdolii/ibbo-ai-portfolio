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
    url: 'https://ai.ibboabdoli.com',              // ✅ درست شد
    title: 'Ibbo Abdoli – AI Portfolio',           // ✅ متن preview
    description:
      'AI-powered portfolio showcasing real-world experience in industrial automation, PLC systems, ABB robots and electrical installations.',
    siteName: 'Ibbo AI',
    images: [
      {
        url: '/ai-preview.jpg',                    // ✅ باید داخل public باشد
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
    images: ['/ai-preview.jpg'],                   // ✅ اضافه شد
    creator: '@ibboabdoli',
  },

  icons: {
    icon: [{ url: '/favicon.svg', sizes: 'any' }],
    shortcut: '/favicon.svg?v=2',
    apple: '/apple-touch-icon.svg?v=2',
  },
};
