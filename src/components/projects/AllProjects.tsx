'use client';

import { Card, Carousel } from '@/components/projects/apple-cards-carousel';
import { getProjectCards } from '@/components/projects/Data';
import type { PortfolioLanguage } from '@/data/portfolio';
import { useEffect, useMemo, useState } from 'react';

const LANGUAGE_STORAGE_KEY = 'ibbo-ai-language';

function getStoredLanguage(): PortfolioLanguage {
  if (typeof window === 'undefined') return 'sv';
  return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'en' ? 'en' : 'sv';
}

export default function AllProjects() {
  const [language, setLanguage] = useState<PortfolioLanguage>('sv');

  useEffect(() => {
    setLanguage(getStoredLanguage());
  }, []);

  const data = useMemo(() => getProjectCards(language), [language]);
  const cards = data.map((card, index) => (
    <Card key={`${language}-${card.title}`} card={card} index={index} layout />
  ));

  return (
    <div className="h-full w-full pt-8">
      <div className="mx-auto max-w-7xl px-1 sm:px-2">
        <h2 className="font-sans text-2xl font-bold text-neutral-800 md:text-3xl dark:text-neutral-200">
          {language === 'sv' ? 'Utvalda projekt & tekniska case' : 'Selected Projects & Technical Cases'}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-500 md:text-base dark:text-neutral-400">
          {language === 'sv'
            ? 'Aktuella exempel från robotik, PLC, maskinvision, fältservice och egna digitala projekt. Kundkänsliga detaljer är medvetet anonymiserade.'
            : 'Current examples from robotics, PLC, machine vision, field service, and personal digital projects. Customer-sensitive details are intentionally anonymized.'}
        </p>
      </div>
      <Carousel items={cards} />
    </div>
  );
}
