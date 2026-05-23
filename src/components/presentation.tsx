'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Language = 'sv' | 'en';

const LANGUAGE_STORAGE_KEY = 'ibbo-ai-language';

const content = {
  sv: {
    location: 'Södertälje / Stockholm, Sverige',
    description:
      'Hej 👋\nJag är Ibbo, servicetekniker och automationstekniker i Sverige. Jag arbetar praktiskt med industriell automation, el-felsökning, PLC/I/O, ABB-robotar och maskinvision.\n\nMitt fokus är att minska driftstopp genom att hitta den verkliga tekniska rotorsaken steg för steg. En stor del av mitt arbete sker ute i produktion med produktionslinjer, robotceller och elskåp.',
    tags: [
      'Servicetekniker',
      'Automationstekniker',
      'PLC & ABB Robotar',
      'Industriell el',
      'Felsökning',
      'Sverige',
    ],
    imageAlt: 'Ibbo Abdoli - Servicetekniker och automationstekniker',
  },
  en: {
    location: 'Södertälje / Stockholm, Sweden',
    description:
      "Hey 👋\nI'm Ibbo, a Service Engineer and Automation Technician based in Sweden. I work hands-on with industrial automation, electrical troubleshooting, PLC/I/O, ABB robots and machine vision systems.\n\nMy focus is to reduce downtime by finding the real technical root cause step by step. Most of my time is spent in the field supporting production lines, robot cells and electrical cabinets.",
    tags: [
      'Service Engineer',
      'Automation Technician',
      'PLC & ABB Robots',
      'Industrial Electricity',
      'Troubleshooting',
      'Sweden',
    ],
    imageAlt: 'Ibbo Abdoli - Service Engineer and Automation Technician',
  },
} as const;

function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'sv';
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return storedLanguage === 'en' ? 'en' : 'sv';
}

export function Presentation() {
  const [language, setLanguage] = useState<Language>('sv');
  const t = content[language];

  useEffect(() => {
    setLanguage(getStoredLanguage());
  }, []);

  const profile = {
    name: 'Ibbo Abdoli',
    src: '/profil-ibbo.png',
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const paragraphAnimation: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
    },
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="relative w-full overflow-hidden rounded-2xl bg-transparent">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="w-full"
            >
              <Image
                src={profile.src}
                alt={t.imageAlt}
                width={900}
                height={700}
                priority
                className="h-auto w-full object-contain object-center"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col">
          <motion.div initial="hidden" animate="visible" variants={textVariants}>
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
              {profile.name}
            </h1>

            <div className="mt-1">
              <p className="text-muted-foreground">{t.location}</p>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
            className="text-foreground mt-6 leading-relaxed whitespace-pre-line"
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
