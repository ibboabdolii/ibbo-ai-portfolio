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
    sections: [
      {
        category: 'Industriell automation & PLC',
        iconType: 'cpu',
        skills: [
          'Felsökning av produktions- och förpackningslinjer',
          'PLC-diagnostik och förståelse för sekvenslogik (Siemens / Codesys)',
          'Siemens TIA Portal (grund till medelnivå)',
          'Codesys / SoMachine (grundläggande felsökning)',
          'HMI / SCADA-grunder (larm, signaler, idrifttagning)',
          'Givare och I/O-diagnostik (PNP/NPN, analog/digital)',
          'Frekvensomriktare och drivsystem (grundparametrar och felsökning)',
          'Serviceflöde: felisolering, rotorsaksanalys och rapportering',
        ],
        color: 'bg-blue-50 text-blue-600 border border-blue-200',
      },
      {
        category: 'Robotik & rörelsestyrning',
        iconType: 'code',
        skills: [
          'ABB-robotar (IRC5) – service och felsökning',
          'SafeMove-grunder (vanliga fel och kontroller)',
          'Verifiering av TCP, tooldata och workobject',
          'Felsökning av kollisioner och Motion Supervision',
          'Kalibrering och referenskontroller',
          'Vision-offsets och plockgränser (grundförståelse)',
          'Mekanisk linjering: fixturer, chuckar, axlar och vridbord',
        ],
        color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
      },
      {
        category: 'El & installation',
        iconType: 'tool',
        skills: [
          'Elinstallation med säkerhet först (SS 436 40 00)',
          'Läsa och tolka elscheman',
          'Skåparbete: kablage, plintar, reläer och kontaktorer',
          'El-felsökning: glapp, kabelbrott och intermittenta fel',
          'Mätning och verifiering med multimeter och grundkontroller',
          'Grundläggande termografi och riskbedömning',
          'Industriuttag, kapslingar och kablage i verkstad och på site',
        ],
        color: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
      },
      {
        category: 'Verktyg, dokumentation & IT',
        iconType: 'code',
        skills: [
          'Windows-felsökning och grundläggande Linux',
          'Teknisk dokumentation och servicerapportering',
          'Strukturerade checklistor och överlämningsunderlag',
          'Git (grund) för versionshantering av konfigurationer och projekt',
          'Grundläggande webb/UI (HTML/CSS) för personliga projekt',
        ],
        color: 'bg-purple-50 text-purple-600 border border-purple-200',
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
        color: 'bg-amber-50 text-amber-600 border border-amber-200',
      },
    ],
  },
  en: {
    title: 'Skills & Expertise',
    sections: [
      {
        category: 'Industrial Automation & PLC',
        iconType: 'cpu',
        skills: [
          'Troubleshooting production and packaging lines',
          'PLC diagnostics and logic understanding (Siemens / Codesys)',
          'Siemens TIA Portal (basic to intermediate)',
          'Codesys / SoMachine (basic troubleshooting)',
          'HMI / SCADA basics (alarms, signals, commissioning)',
          'Sensors and I/O diagnostics (PNP/NPN, analog/digital)',
          'Drives and frequency inverters (basic parameters and fault finding)',
          'Field service workflows (fault isolation, root cause analysis, reporting)',
        ],
        color: 'bg-blue-50 text-blue-600 border border-blue-200',
      },
      {
        category: 'Robotics & Motion Control',
        iconType: 'code',
        skills: [
          'ABB robots (IRC5) — service and troubleshooting',
          'SafeMove basics (common faults and checks)',
          'TCP / tool data and workobject verification',
          'Collision and motion supervision troubleshooting',
          'Calibration and reference checks',
          'Vision offsets / picking limits (basic understanding)',
          'Mechanical alignment (fixtures, chucks, axes, turntables)',
        ],
        color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
      },
      {
        category: 'Electrical & Installation',
        iconType: 'tool',
        skills: [
          'Electrical installation with a safety-first mindset (SS 436 40 00)',
          'Reading and interpreting electrical schematics',
          'Panel work: wiring, terminals, relays, contactors',
          'Electrical fault finding: loose connections, cable breaks, intermittent faults',
          'Measurement and verification (multimeter, basic checks)',
          'Thermography (basic) and risk assessment thinking',
          'Industrial outlets / enclosures / cabling (workshop and site work)',
        ],
        color: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
      },
      {
        category: 'Tools, Documentation & IT',
        iconType: 'code',
        skills: [
          'Windows troubleshooting and basic Linux',
          'Technical documentation and service reporting',
          'Structured checklists and handover notes',
          'Git (basic) for versioning configs and projects',
          'Basic web/UI (HTML/CSS) for personal projects',
        ],
        color: 'bg-purple-50 text-purple-600 border border-purple-200',
      },
      {
        category: 'Soft Skills (Field Service)',
        iconType: 'users',
        skills: [
          'Structured troubleshooting under time pressure',
          'Clear customer communication on-site',
          'Ownership and responsibility for assigned tasks',
          'Teamwork with technicians, engineers, and suppliers',
          'Learning agility (fast onboarding on new equipment)',
          'Safety-first mindset and disciplined work habits',
          'Working independently on defined tasks in the field',
        ],
        color: 'bg-amber-50 text-amber-600 border border-amber-200',
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
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            {t.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {t.sections.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  <SkillIcon iconType={section.iconType} />
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                    >
                      <Badge className={cn('px-3 py-1.5 font-normal', section.color)}>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
