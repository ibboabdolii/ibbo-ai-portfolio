'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type Language = 'sv' | 'en';

const LANGUAGE_STORAGE_KEY = 'ibbo-ai-language';

const content = {
  sv: {
    srAbout: 'Om Ibbo AI Portfolio',
    title: 'Välkommen till Ibbo AI Portfolio',
    description:
      'Ett interaktivt sätt att utforska min erfarenhet inom service, automation, tekniska case och felsökning.',
    whatTitle: 'Vad är detta?',
    whatBody: (
      <>
        Detta är min <strong>AI-drivna interaktiva portfolio.</strong>
        <br />
        I stället för att bara läsa en statisk CV kan du ställa specifika
        frågor om mitt praktiska arbete med PLC/I/O, ABB-robotar,
        maskinvision, el-felsökning och produktionssupport.
      </>
    ),
    forTitle: 'Vem är det för?',
    forBody: (
      <>
        Rekryterare, underhållsteam, produktionsledare och tekniska kollegor
        kan använda sidan för att snabbt förstå min bakgrund, mina tekniska
        case, mitt servicearbetssätt och hur jag felsöker verkliga problem i
        produktion.
        <br />
        Fråga om färdigheter, projekt, felsökningsmetod, automationsverktyg
        eller hur du kan kontakta mig.
      </>
    ),
    close: 'Stäng',
    start: 'Börja chatta',
    contactIntro:
      'Vill du diskutera automation, service, felsökning eller tekniskt samarbete?',
    contactLink: 'Kontakta mig.',
    contactQuery:
      'Hur kan jag kontakta dig för automation, service, felsökning eller tekniskt samarbete?',
  },
  en: {
    srAbout: 'About Ibbo AI Portfolio',
    title: 'Welcome to Ibbo AI Portfolio',
    description:
      'An interactive way to explore my service engineering work, automation projects, and technical troubleshooting experience.',
    whatTitle: 'What is this?',
    whatBody: (
      <>
        This is my <strong>AI-powered interactive portfolio.</strong>
        <br />
        Instead of reading a static CV, you can ask specific questions about
        my hands-on work with PLC/I/O, ABB robots, machine vision, electrical
        troubleshooting, and production support.
      </>
    ),
    forTitle: 'Who is it for?',
    forBody: (
      <>
        Recruiters, maintenance teams, production managers, and technical
        colleagues can use this page to quickly understand my background,
        selected projects, service approach, and how I work when
        troubleshooting real production problems.
        <br />
        Ask about skills, projects, fault-finding methods, automation tools,
        or how to contact me.
      </>
    ),
    close: 'Close',
    start: 'Start chatting',
    contactIntro:
      'Want to discuss automation, service, troubleshooting, or a technical collaboration?',
    contactLink: 'Contact me.',
    contactQuery:
      'How can I contact you for automation, service, troubleshooting, or technical collaboration?',
  },
} as const;

interface WelcomeModalProps {
  trigger?: React.ReactNode;
}

function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'sv';
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return storedLanguage === 'en' ? 'en' : 'sv';
}

export default function WelcomeModal({ trigger }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('sv');
  const t = content[language];

  const openModal = () => {
    setLanguage(getStoredLanguage());
    setIsOpen(true);
  };

  const handleContactMe = () => {
    const currentLanguage = getStoredLanguage();
    setIsOpen(false);
    window.location.href = `/chat?lang=${currentLanguage}&query=${encodeURIComponent(
      content[currentLanguage].contactQuery
    )}`;
  };

  const defaultTrigger = (
    <Button
      variant="ghost"
      className="h-auto w-auto cursor-pointer rounded-2xl bg-white/30 p-3 shadow-lg backdrop-blur-lg hover:bg-white/60 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      onClick={openModal}
    >
      <Image
        src="/favicon.svg"
        width={160}
        height={160}
        alt="Ibbo AI Portfolio logo"
        className="h-14 w-14 md:h-20 md:w-20"
        priority
      />
      <span className="sr-only">{t.srAbout}</span>
    </Button>
  );

  return (
    <>
      {trigger ? <div onClick={openModal}>{trigger}</div> : defaultTrigger}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-background z-52 max-h-[85vh] overflow-auto rounded-2xl border-none p-4 py-6 shadow-xl sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col"
          >
            <DialogHeader className="relative flex flex-row items-start justify-between px-8 pt-8 pb-6">
              <div>
                <DialogTitle className="flex items-center gap-2 text-4xl font-bold tracking-tight">
                  {t.title}
                </DialogTitle>
                <DialogDescription className="mt-2 text-base">
                  {t.description}
                </DialogDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="sticky top-0 right-0 cursor-pointer rounded-full bg-black p-2 text-white hover:bg-black/90 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">{t.close}</span>
              </Button>
            </DialogHeader>

            <div className="space-y-6 overflow-y-auto px-2 py-4 md:px-8">
              <section className="bg-accent w-full space-y-8 rounded-2xl p-8">
                <div className="space-y-3">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    {t.whatTitle}
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    {t.whatBody}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    {t.forTitle}
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    {t.forBody}
                  </p>
                </div>
              </section>
            </div>

            <div className="flex flex-col items-center px-8 pt-4 pb-0 md:pb-8">
              <Button
                onClick={() => setIsOpen(false)}
                className="h-auto rounded-full px-4 py-3"
                size="sm"
              >
                {t.start}
              </Button>
              <div
                className="mt-6 flex cursor-pointer flex-wrap gap-1 text-center text-sm"
                onClick={handleContactMe}
              >
                <p className="text-muted-foreground">{t.contactIntro}</p>
                <div className="flex cursor-pointer items-center text-blue-500 hover:underline">
                  {t.contactLink}
                </div>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
