'use client';

import { localized, portfolioProfile, type PortfolioLanguage } from '@/data/portfolio';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const LANGUAGE_STORAGE_KEY = 'ibbo-ai-language';

function getStoredLanguage(): PortfolioLanguage {
  if (typeof window === 'undefined') return 'sv';
  return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'en' ? 'en' : 'sv';
}

export function Presentation() {
  const [language, setLanguage] = useState<PortfolioLanguage>('sv');
  useEffect(() => setLanguage(getStoredLanguage()), []);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-3xl bg-slate-50">
          <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
            <Image
              src="/profil-ibbo.png"
              alt={language === 'sv' ? 'Ibbo Abdoli - servicetekniker och automationstekniker' : 'Ibbo Abdoli - Service Engineer and Automation Technician'}
              width={900}
              height={700}
              priority
              className="h-auto w-full object-contain object-center"
            />
          </motion.div>
        </div>

        <motion.div className="flex flex-col" initial="hidden" animate="visible" variants={textVariants}>
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-[0.18em]">
            {localized(portfolioProfile.role, language)}
          </p>
          <h1 className="text-foreground mt-2 text-3xl font-bold md:text-4xl">{portfolioProfile.name}</h1>
          <p className="text-muted-foreground mt-2">{localized(portfolioProfile.location, language)}</p>
          <p className="text-foreground mt-6 leading-relaxed">{localized(portfolioProfile.intro, language)}</p>
          <p className="text-muted-foreground mt-4 text-sm">
            {language === 'sv'
              ? `Arbetar på ${portfolioProfile.employer} med produktionsnära service och automation.`
              : `Working at ${portfolioProfile.employer} with production-oriented service and automation.`}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {portfolioProfile.tags[language].map((tag) => (
              <span key={tag} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Presentation;
