'use client';

import { portfolioContact, portfolioProfile } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { usePortfolioLanguage } from '@/hooks/use-portfolio-language';
import { CalendarDays, Globe, Wrench } from 'lucide-react';

export default function ExperienceCard() {
  const language = usePortfolioLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-14 md:py-10"
    >
      <h2 className="text-foreground text-2xl font-semibold">
        {language === 'sv' ? 'Yrkeserfarenhet & servicefokus' : 'Professional Experience & Service Focus'}
      </h2>
      <p className="text-muted-foreground mt-2 text-sm">{portfolioProfile.employer}</p>

      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <Wrench className="mt-1 h-5 w-5 text-blue-500" />
          <p className="text-muted-foreground text-sm">{language === 'sv' ? 'PLC/I/O, robot, vision och el-felsökning i produktion' : 'PLC/I/O, robot, vision, and electrical troubleshooting in production'}</p>
        </div>
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-violet-500" />
          <p className="text-muted-foreground text-sm">{language === 'sv' ? 'Service, verifiering, backup, dokumentation och kontrollerad återstart' : 'Service, verification, backup, documentation, and controlled restart'}</p>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <p className="text-muted-foreground text-sm">{language === 'sv' ? 'Södertälje / Stockholm med arbete på kundsite' : 'Södertälje / Stockholm with onsite customer work'}</p>
        </div>
      </div>

      <button
        onClick={() => { window.location.href = `mailto:${portfolioContact.email}`; }}
        className="mt-8 cursor-pointer rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
      >
        {language === 'sv' ? 'Kontakta mig' : 'Contact me'}
      </button>
    </motion.div>
  );
}
