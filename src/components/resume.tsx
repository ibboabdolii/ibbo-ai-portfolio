'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Languages } from 'lucide-react';
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
    eyebrow: 'CV / Resume',
    role: 'Servicetekniker / Automationstekniker',
    title: 'Ibbo Abdoli – CV',
    description: 'Tillgänglig på svenska och engelska.',
    meta: 'Uppdaterad 2026 • Rekommenderad version: svenska för Sverige, engelska för internationella roller',
    svButton: 'Ladda ner svensk CV',
    enButton: 'Ladda ner engelsk CV',
    note: 'Svensk CV passar bäst för svenska rekryterare och företag.',
  },
  en: {
    eyebrow: 'CV / Resume',
    role: 'Service Engineer / Automation Technician',
    title: 'Ibbo Abdoli – Resume',
    description: 'Available in Swedish and English.',
    meta: 'Updated 2026 • Recommended: Swedish for Sweden, English for international roles',
    svButton: 'Download Swedish CV',
    enButton: 'Download English CV',
    note: 'The Swedish CV is recommended for recruiters and companies in Sweden.',
  },
} as const;

const cvLinks = {
  sv: {
    href: '/Ibbo_Abdoli_CV_2026_SV_Final.pdf',
    filename: 'Ibbo_Abdoli_CV_2026_SV_Final.pdf',
  },
  en: {
    href: '/Ibbo_Abdoli_CV_2026_EN_Final.pdf',
    filename: 'Ibbo_Abdoli_CV_2026_EN_Final.pdf',
  },
};

function downloadFile(href: string, filename: string) {
  const link = document.createElement('a');
  link.href = href;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function Resume() {
  const [language, setLanguage] = useState<Language>('sv');
  const t = content[language];

  useEffect(() => {
    setLanguage(getStoredLanguage());
  }, []);

  return (
    <div className="mx-auto w-full py-6 font-sans">
      <motion.div
        className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div className="relative overflow-hidden bg-[#0f172a] p-6 text-white sm:p-8">
          <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0f172a] shadow-sm">
            <FileText className="h-7 w-7" />
          </div>

          <div className="max-w-[85%]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
              {t.eyebrow}
            </p>
            <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
              Ibbo Abdoli
            </h3>
            <p className="mt-3 text-base font-medium text-slate-200 sm:text-lg">
              {t.role}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-100">
            <span className="rounded-full bg-white/10 px-3 py-1">PLC / I/O</span>
            <span className="rounded-full bg-white/10 px-3 py-1">ABB Robots</span>
            <span className="rounded-full bg-white/10 px-3 py-1">Machine Vision</span>
            <span className="rounded-full bg-white/10 px-3 py-1">Troubleshooting</span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2">
                <Languages className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-foreground">
                  {t.title}
                </h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {t.description}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {t.meta}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => downloadFile(cvLinks.sv.href, cvLinks.sv.filename)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-black/80 active:scale-[0.99]"
              >
                <Download className="h-4 w-4" />
                {t.svButton}
              </button>
              <button
                type="button"
                onClick={() => downloadFile(cvLinks.en.href, cvLinks.en.filename)}
                className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-foreground transition hover:bg-black/5 active:scale-[0.99]"
              >
                <Download className="h-4 w-4" />
                {t.enButton}
              </button>
            </div>

            <p className="rounded-2xl bg-muted/50 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              {t.note}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
