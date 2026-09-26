import HomePage from '@/components/home-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ibbo AI Portfolio – Service Engineer & Automation Technician',
  description:
    'Interactive AI portfolio for Ibbo Abdoli, a Service Engineer and Automation Technician in Sweden focused on industrial automation, PLC/I/O, ABB robots, machine vision, and technical troubleshooting.',
  alternates: {
    canonical: '/en',
    languages: {
      sv: '/',
      en: '/en',
    },
  },
  openGraph: {
    locale: 'en_US',
    url: '/en',
    title: 'Ibbo AI Portfolio – Service Engineer & Automation Technician',
    description:
      'Ask about industrial automation, PLC/I/O troubleshooting, ABB robots, RobotStudio, machine vision, electrical service, and production support.',
  },
};

export default function EnglishPage() {
  return <HomePage initialLanguage="en" />;
}
