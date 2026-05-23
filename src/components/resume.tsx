'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export function Resume() {
  const resumeDetails = {
    title: 'Ibbo Abdoli – CV',
    description: 'Service Engineer • Automation Technician',
    fileType: 'PDF',
    lastUpdated: 'December 2025',
    fileSize: '1.1 MB',
    downloadUrl: '/Ibbo_Abdoli_CV.pdf',
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeDetails.downloadUrl;
    link.download = resumeDetails.downloadUrl.split('/').pop() || 'Ibbo_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto w-full py-8 font-sans">
      <motion.div
        onClick={handleDownload}
        className="group relative cursor-pointer overflow-hidden rounded-xl bg-accent p-0 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.0, ease: 'easeOut' }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Stable CV preview card. Avoids broken image on mobile/social browsers. */}
        <div className="relative h-64 w-full overflow-hidden border-b border-black/5 bg-[#0f172a] p-6 text-white">
          <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0f172a]">
            <FileText className="h-7 w-7" />
          </div>

          <div className="flex h-full flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              CV Preview
            </p>
            <h3 className="max-w-[80%] text-3xl font-bold leading-tight sm:text-4xl">
              Ibbo Abdoli
            </h3>
            <p className="mt-3 max-w-[85%] text-lg font-medium text-slate-200">
              Service Engineer / Automation Technician
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-100">
              <span className="rounded-full bg-white/10 px-3 py-1">PLC / I/O</span>
              <span className="rounded-full bg-white/10 px-3 py-1">ABB Robots</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Machine Vision</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Electrical Troubleshooting</span>
            </div>
          </div>
        </div>

        {/* Details area */}
        <div className="p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium text-foreground">
                {resumeDetails.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {resumeDetails.description}
              </p>
              <div className="mt-1 flex flex-wrap text-xs text-muted-foreground">
                <span>{resumeDetails.fileType}</span>
                <span className="mx-2">•</span>
                <span>Updated {resumeDetails.lastUpdated}</span>
                <span className="mx-2">•</span>
                <span>{resumeDetails.fileSize}</span>
              </div>
            </div>

            <motion.div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-primary-foreground group-hover:bg-black/80"
              initial={{ scale: 1 }}
            >
              <Download className="h-5 w-5" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
