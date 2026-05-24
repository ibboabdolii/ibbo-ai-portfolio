'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion, type Variants } from 'framer-motion';
import { Cpu, Code, PenTool, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

type Language = 'sv' | 'en';

const LANGUAGE_STORAGE_KEY = 'ibbo-ai-language';

function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'sv';
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return storedLanguage === 'en' ? 'en' : 'sv';
}

const content = {
  sv: {
    title: 'Färdigheter & teknisk erfarenhet',
    subtitle: 'En praktisk översikt över mina viktigaste teknikområden i fältservice och automation.',
    sections: [
      {
        category: 'Industriell automation & PLC',
        iconType: 'cpu',
        skills: [
          'Felsökning av produktions- och förpackningslinjer',
          'PLC-diagnostik och sekvenslogik (Siemens / Codesys)',
          'Siemens TIA Portal (grund till medelnivå)',
          'Codesys / SoMachine (grundläggande felsökning)',
          'HMI / SCADA-grunder: larm, signaler, idrifttagning',
          'Givare och I/O-diagnostik (PNP/NPN, analog/digital)',
          'Frekvensomriktare och drivsystem',
          'Felisolering, rotorsaksanalys och rapportering',
        ],
        color: 'bg-blue-50 text-blue-700 border border-blue-200',
      },
      {
        category: 'Robotik & rörelsestyrning',
        iconType: 'code',
        skills: [
          'ABB-robotar (IRC5) – service och felsökning',
          'SafeMove-grunder och vanliga kontroller',
          'Verifiering av TCP, tooldata och workobject',
          'Kollisioner och Motion Supervision',
          'Kalibrering och referenskontroller',
          'Vision-offsets och plockgränser',
          'Mekanisk linjering: fixturer, chuckar, axlar och vridbord',
        ],
        color: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      },
      {
        category: 'El & installation',
        iconType: 'tool',
        skills: [
          'Elinstallation med säkerhet först (SS 436 40 00)',
          'Läsa och tolka elscheman',
          'Skåparbete: kablage, plintar, reläer och kontaktorer',
          'El-felsökning: glapp, kabelbrott och intermittenta fel',
          'Mätning och verifiering med multimeter',
          'Grundläggande termografi och riskbedömning',
          'Industriuttag, kapslingar och kablage i verkstad och på site',
        ],
        color: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
      },
      {
        category: 'Verktyg, dokumentation & IT',
        iconType: 'code',
        skills: [
          'Windows-felsökning och grundläggande Linux',
          'Teknisk dokumentation och servicerapportering',
          'Strukturerade checklistor och överlämningsunderlag',
          'Git (grund) för versionshantering',
          'Grundläggande webb/UI (HTML/CSS) för personliga projekt',
        ],
        color: 'bg-purple-50 text-purple-700 border border-purple-200',
      },
      {
        category: 'Arbetssätt i fältservice',
        iconType: 'users',
        skills: [
          'Strukturerad felsökning under tidspress',
          'Tydlig kundkommunikation på site',
          'Ägarskap och ansvar för tilldelade uppgifter',
          'Samarbete med tekniker, ingenjörer och leverantörer',
          'Snabb inlärning vid ny utrustning',
          'Säkerhetsfokus och disciplinerat arbetssätt',
          'Självständigt arbete med definierade uppgifter i fält',
        ],
        color: 'bg-amber-50 text-amber-700 border border-amber-200',
      },
    ],
  },
  en: {
    title: 'Skills & Expertise',
    subtitle: 'A practical overview of my main technical areas in field service and automation.',
    sections: [
      {
        category: 'Industrial Automation & PLC',
        iconType: 'cpu',
        skills: [
          'Troubleshooting production and packaging lines',
          'PLC diagnostics and sequence logic (Siemens / Codesys)',
          'Siemens TIA Portal (basic to intermediate)',
          'Codesys / SoMachine basic troubleshooting',
          'HMI / SCADA basics: alarms, signals, commissioning',
          'Sensors and I/O diagnostics (PNP/NPN, analog/digital)',
          'Drives and frequency inverters',
          'Fault isolation, root cause analysis and reporting',
        ],
        color: 'bg-blue-50 text-blue-700 border border-blue-200',
      },
      {
        category: 'Robotics & Motion Control',
        iconType: 'code',
        skills: [
          'ABB robots (IRC5) — service and troubleshooting',
          'SafeMove basics and common checks',
          'TCP, tool data and workobject verification',
          'Collision and motion supervision troubleshooting',
          'Calibration and reference checks',
          'Vision offsets and picking limits',
          'Mechanical alignment: fixtures, chucks, axes and turntables',
        ],
        color: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      },
      {
        category: 'Electrical & Installation',
        iconType: 'tool',
        skills: [
          'Electrical installation with a safety-first mindset (SS 436 40 00)',
          'Reading and interpreting electrical schematics',
          'Panel work: wiring, terminals, relays and contactors',
          'Electrical fault finding: loose connections, cable breaks and intermittent faults',
          'Measurement and verification with multimeter',
          'Basic thermography and risk assessment thinking',
          'Industrial outlets, enclosures and cabling on site and in workshop',
        ],
        color: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
      },
      {
        category: 'Tools, Documentation & IT',
        iconType: 'code',
        skills: [
          'Windows troubleshooting and basic Linux',
          'Technical documentation and service reporting',
          'Structured checklists and handover notes',
          'Git basics for versioning',
          'Basic web/UI (HTML/CSS) for personal projects',
        ],
        color: 'bg-purple-50 text-purple-700 border border-purple-200',
      },
      {
        category: 'Soft Skills in Field Service',
        iconType: 'users',
        skills: [
          'Structured troubleshooting under time pressure',
          'Clear customer communication on site',
          'Ownership and responsibility for assigned tasks',
          'Teamwork with technicians, engineers and suppliers',
          'Fast onboarding on new equipment',
          'Safety-first mindset and disciplined work habits',
          'Independent work on defined field tasks',
        ],
        color: 'bg-amber-50 text-amber-700 border border-amber-200',
      },
    ],
  },
} as const;

function SkillIcon({ iconType }: { iconType: string }) {
  if (iconType === 'cpu') return <Cpu className="h-5 w-5" />;
  if (iconType === 'tool') return <PenTool className="h-5 w-5" />;
  if (iconType === 'users') return <Users className="h-5 w-5" />;
  return <Code className="h-5 w-5" />;
}

const Skills = () => {
  const [language, setLanguage] = useState<Language>('sv');
  const t = content[language];

  useEffect(() => {
    setLanguage(getStoredLanguage());
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="mx-auto w-full max-w-5xl"
    >
      <Card className="w-full rounded-3xl border border-black/5 bg-white px-0 pb-8 shadow-sm">
        <CardHeader className="px-5 pb-2 pt-6 sm:px-6">
          <CardTitle className="text-primary text-2xl font-bold sm:text-3xl">
            {t.title}
          </CardTitle>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {t.subtitle}
          </p>
        </CardHeader>

        <CardContent className="px-5 sm:px-6">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {t.sections.map((section, index) => (
              <motion.section
                key={index}
                className="rounded-2xl border border-black/5 bg-muted/20 p-4 sm:p-5"
                variants={itemVariants}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-xl bg-white p-2 text-primary shadow-sm">
                    <SkillIcon iconType={section.iconType} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {section.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className={cn(
                        'rounded-full px-3 py-1.5 text-xs font-medium leading-relaxed sm:text-sm',
                        section.color
                      )}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.section>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
