'use client';

import { portfolioContact } from '@/data/portfolio';
import { usePortfolioLanguage } from '@/hooks/use-portfolio-language';
import { ChevronRight, Copy, Mail } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const language = usePortfolioLanguage();

  const openLink = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');
  const openDefaultEmailApp = () => { window.location.href = `mailto:${portfolioContact.email}`; };
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioContact.email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = portfolioContact.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const socials = [
    { name: 'LinkedIn', url: portfolioContact.linkedin },
    { name: language === 'sv' ? 'Webbplats' : 'Website', url: portfolioContact.website },
    { name: 'GitHub', url: portfolioContact.github },
    { name: language === 'sv' ? 'Boka 15 min' : 'Book 15 min', url: portfolioContact.booking15 },
    { name: language === 'sv' ? 'Boka 30 min' : 'Book 30 min', url: portfolioContact.booking30 },
  ];

  return (
    <div className="mx-auto mt-8 w-full">
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12">
        <div className="mb-7">
          <h2 className="text-foreground text-3xl font-semibold md:text-4xl">{language === 'sv' ? 'Kontakt' : 'Contact'}</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed">
            {language === 'sv'
              ? 'För frågor om automation, service, robot/vision-felsökning eller tekniskt samarbete.'
              : 'For automation, service, robot/vision troubleshooting, or technical collaboration.'}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button type="button" onClick={openDefaultEmailApp} className="group inline-flex cursor-pointer items-center gap-2 text-left">
              <Mail className="h-4 w-4 text-blue-500" />
              <span className="text-base font-medium text-blue-500 hover:underline sm:text-lg">{portfolioContact.email}</span>
              <ChevronRight className="h-5 w-5 text-blue-500 transition-transform group-hover:translate-x-1" />
            </button>
            <button type="button" onClick={copyEmail} className="inline-flex w-fit items-center gap-2 rounded-xl bg-black/10 px-3 py-2 text-sm hover:bg-black/15">
              <Copy className="h-4 w-4" />
              {language === 'sv' ? 'Kopiera e-post' : 'Copy email'}
            </button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-4 pt-2">
            {socials.map((social) => (
              <button key={social.url} type="button" className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors" onClick={() => openLink(social.url)}>
                {social.name}
              </button>
            ))}
          </div>

          {copied && (
            <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-black px-4 py-2 text-sm text-white shadow-lg">
              {language === 'sv' ? 'E-post kopierad ✓' : 'Email copied ✓'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
