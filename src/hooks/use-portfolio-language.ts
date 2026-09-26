'use client';

import { useEffect, useState } from 'react';
import type { PortfolioLanguage } from '@/data/portfolio';

export const PORTFOLIO_LANGUAGE_STORAGE_KEY = 'ibbo-ai-language';
export const PORTFOLIO_LANGUAGE_EVENT = 'ibbo-ai-language-change';

export function getPortfolioLanguage(): PortfolioLanguage {
  if (typeof window === 'undefined') return 'sv';
  return window.localStorage.getItem(PORTFOLIO_LANGUAGE_STORAGE_KEY) === 'en'
    ? 'en'
    : 'sv';
}

export function announcePortfolioLanguage(language: PortfolioLanguage) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(PORTFOLIO_LANGUAGE_STORAGE_KEY, language);
  window.dispatchEvent(
    new CustomEvent<PortfolioLanguage>(PORTFOLIO_LANGUAGE_EVENT, {
      detail: language,
    })
  );
}

export function usePortfolioLanguage(): PortfolioLanguage {
  const [language, setLanguage] = useState<PortfolioLanguage>('sv');

  useEffect(() => {
    const sync = () => setLanguage(getPortfolioLanguage());
    const onCustom = (event: Event) => {
      const detail = (event as CustomEvent<PortfolioLanguage>).detail;
      setLanguage(detail === 'en' ? 'en' : 'sv');
    };

    sync();
    window.addEventListener('storage', sync);
    window.addEventListener(PORTFOLIO_LANGUAGE_EVENT, onCustom);

    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener(PORTFOLIO_LANGUAGE_EVENT, onCustom);
    };
  }, []);

  return language;
}
