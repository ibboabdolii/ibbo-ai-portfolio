'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import WelcomeModal from '@/components/welcome-modal';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Layers,
  UserRoundSearch,
  UserSearch,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type Language = 'sv' | 'en';

const LANGUAGE_STORAGE_KEY = 'ibbo-ai-language';

const content = {
  sv: {
    eyebrow: 'Servicetekniker / Automationstekniker',
    title: 'Ibbo AI Portfolio',
    subtitle:
      'Fråga en AI-version av mig om industriell automation, PLC/I/O-felsökning, ABB-robotar, maskinvision, elservice och praktiskt produktionsstöd i Sverige.',
    placeholder:
      'Fråga om min automationserfarenhet, tekniska case eller felsökningsmetod…',
    submitLabel: 'Skicka fråga',
    quick: {
      Me: 'Om mig',
      Projects: 'Projekt',
      Skills: 'Färdigheter',
      Troubleshooting: 'Felsökning',
      Contact: 'Kontakt',
    },
    questions: {
      Me: 'Vem är Ibbo? Berätta kort om din bakgrund som servicetekniker och automationstekniker.',
      Projects:
        'Visa utvalda tekniska case inom industriell automation, ABB-robotar, maskinvision och felsökning.',
      Skills:
        'Vilka är dina starkaste tekniska färdigheter inom PLC, el-felsökning, ABB-robotar och maskinvision?',
      Troubleshooting:
        'Hur felsöker du driftstopp och tekniska fel steg för steg?',
      Contact:
        'Hur kan jag kontakta dig för automation, service, felsökning eller tekniskt samarbete?',
    },
  },
  en: {
    eyebrow: 'Service Engineer / Automation Technician',
    title: 'Ibbo AI Portfolio',
    subtitle:
      'Ask an AI version of me about industrial automation, PLC/I/O troubleshooting, ABB robots, machine vision, electrical service, and real production support work in Sweden.',
    placeholder:
      'Ask about my automation experience, technical cases, or troubleshooting method…',
    submitLabel: 'Submit question',
    quick: {
      Me: 'Me',
      Projects: 'Projects',
      Skills: 'Skills',
      Troubleshooting: 'Troubleshooting',
      Contact: 'Contact',
    },
    questions: {
      Me: 'Who are you? Tell me about your background as a Service Engineer and Automation Technician.',
      Projects:
        'Can you show me selected projects in industrial automation, ABB robots, machine vision, and troubleshooting?',
      Skills:
        'What are your strongest technical skills in PLC, electrical troubleshooting, ABB robots, and machine vision?',
      Troubleshooting:
        'How do you troubleshoot production stops and technical faults step by step?',
      Contact:
        'How can I contact you for automation, service, troubleshooting, or technical support work?',
    },
  },
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: UserSearch },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Troubleshooting', color: '#B95F9D', icon: Wrench },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
] as const;

export default function Home() {
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState<Language>('sv');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const t = content[language];

  const setPreferredLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  };

  const goToChat = (query: string) =>
    router.push(
      `/chat?lang=${language}&query=${encodeURIComponent(query)}`
    );

  const topElementVariants: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween', ease: 'easeOut', duration: 0.8 },
    },
  };

  const bottomElementVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween', ease: 'easeOut', duration: 0.8, delay: 0.2 },
    },
  };

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage === 'sv' || storedLanguage === 'en') {
      setLanguage(storedLanguage);
    }

    const img = new window.Image();
    img.src = '/landing-memojis.png';

    const linkWebm = document.createElement('link');
    linkWebm.rel = 'preload';
    linkWebm.as = 'video';
    linkWebm.href = '/final_memojis.webm';
    linkWebm.type = 'video/webm';

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'preload';
    linkMp4.as = 'video';
    linkMp4.href = '/final_memojis_ios.mp4';
    linkMp4.type = 'video/mp4';

    document.head.appendChild(linkWebm);
    document.head.appendChild(linkMp4);

    return () => {
      linkWebm.remove();
      linkMp4.remove();
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          Ibbo Abdoli
        </div>
      </div>

      <div className="absolute top-4 right-4 z-30 flex rounded-full border border-neutral-200 bg-white/60 p-1 text-xs font-semibold shadow-sm backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/60">
        <button
          type="button"
          onClick={() => setPreferredLanguage('sv')}
          className={`rounded-full px-3 py-1 transition ${
            language === 'sv'
              ? 'bg-[#0171E3] text-white'
              : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300'
          }`}
          aria-label="Visa sidan på svenska"
        >
          SV
        </button>
        <button
          type="button"
          onClick={() => setPreferredLanguage('en')}
          className={`rounded-full px-3 py-1 transition ${
            language === 'en'
              ? 'bg-[#0171E3] text-white'
              : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300'
          }`}
          aria-label="Show page in English"
        >
          EN
        </button>
      </div>

      <motion.div
        className="z-1 mt-24 mb-8 flex max-w-4xl flex-col items-center text-center md:mt-4 md:mb-12"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="z-100">
          <WelcomeModal />
        </div>

        <p className="text-secondary-foreground mt-4 text-sm font-semibold uppercase tracking-[0.28em] md:text-base">
          {t.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {t.title}
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
          {t.subtitle}
        </p>
      </motion.div>

      <div className="relative z-10 h-52 w-52 overflow-hidden rounded-full sm:h-72 sm:w-72">
        <Image
          src="/landing-memojis.png"
          alt="Ibbo Abdoli AI portfolio avatar"
          fill
          priority
          sizes="(max-width: 640px) 208px, 288px"
          className="object-cover"
        />
      </div>

      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) goToChat(input.trim());
          }}
          className="relative w-full max-w-lg"
        >
          <div className="mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-2.5 pr-2 pl-6 backdrop-blur-lg transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              className="w-full border-none bg-transparent text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label={t.submitLabel}
              className="flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-white transition-colors hover:bg-blue-600 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <Button
              key={key}
              onClick={() => goToChat(t.questions[key])}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:p-10"
            >
              <div className="flex h-full flex-col items-center justify-center gap-1 text-gray-700">
                <Icon size={22} strokeWidth={2} color={color} />
                <span className="text-xs font-medium sm:text-sm">
                  {t.quick[key]}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </motion.div>

      <FluidCursor />
    </div>
  );
}
