'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const cvLinks = {
  sv: {
    label: 'Download Swedish CV',
    href: '/Ibbo_Abdoli_CV_2026_SV_Final.pdf',
    filename: 'Ibbo_Abdoli_CV_2026_SV_Final.pdf',
  },
  en: {
    label: 'Download English CV',
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
  return (
    <div className="mx-auto w-full py-8 font-sans">
      <motion.div
        className="group relative overflow-hidden rounded-xl bg-accent p-0 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.0, ease: 'easeOut' }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="relative h-64 w-full overflow-hidden border-b border-black/5 bg-[#0f172a] p-6 text-white">
          <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0f172a]">
            <FileText className="h-7 w-7" />
          </div>

          <div className="flex h-full flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              CV / Resume
            </p>
            <h3 className="max-w-[80%] text-3xl font-bold leading-tight sm:text-4xl">
              Ibbo Abdoli
            </h3>
            <p className="mt-3 max-w-[85%] text-lg font-medium text-slate-200">
              Servicetekniker / Automationstekniker
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-100">
              <span className="rounded-full bg-white/10 px-3 py-1">PLC / I/O</span>
              <span className="rounded-full bg-white/10 px-3 py-1">ABB Robots</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Machine Vision</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Electrical Troubleshooting</span>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-medium text-foreground">
                Ibbo Abdoli – CV
              </h3>
              <p className="text-sm text-muted-foreground">
                Swedish and English versions available.
              </p>
              <div className="mt-1 flex flex-wrap text-xs text-muted-foreground">
                <span>PDF</span>
                <span className="mx-2">•</span>
                <span>Updated 2026</span>
                <span className="mx-2">•</span>
                <span>Recommended: Swedish for Sweden, English for international roles</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => downloadFile(cvLinks.sv.href, cvLinks.sv.filename)}
                className="flex items-center justify-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-black/80"
              >
                <Download className="h-4 w-4" />
                {cvLinks.sv.label}
              </button>
              <button
                type="button"
                onClick={() => downloadFile(cvLinks.en.href, cvLinks.en.filename)}
                className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-medium text-foreground transition hover:bg-black/5"
              >
                <Download className="h-4 w-4" />
                {cvLinks.en.label}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
