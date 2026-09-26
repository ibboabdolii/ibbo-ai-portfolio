'use client';

import type { PortfolioLanguage } from '@/data/portfolio';
import { useEffect, useState } from 'react';

const LANGUAGE_STORAGE_KEY = 'ibbo-ai-language';

export default function Sports() {
  const [language, setLanguage] = useState<PortfolioLanguage>('sv');

  useEffect(() => {
    setLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'en' ? 'en' : 'sv');
  }, []);

  return (
    <div className="mx-auto w-full">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          {language === 'sv' ? 'Balans & fokus' : 'Balance & Focus'}
        </h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          {language === 'sv'
            ? 'Utanför jobbet gillar jag att vara aktiv, resa och laga mat med vänner. Balans och en stabil rutin hjälper mig att hålla fokus när servicejobb kräver tålamod och noggrann felsökning.'
            : 'Outside work I enjoy staying active, travelling, and cooking with friends. Balance and a stable routine help me stay focused when service work requires patience and careful troubleshooting.'}
        </p>
      </div>
    </div>
  );
}
