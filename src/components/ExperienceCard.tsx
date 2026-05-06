'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Globe } from 'lucide-react';

const ExperienceCard = () => {
  const openMail = () => {
    window.open('mailto:ibbo.abdoli@elektroautomatik.se', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md flex items-center justify-center text-sm font-semibold text-muted-foreground">
            Service
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Technical Service Inquiry
            </h2>
            <p className="text-muted-foreground text-sm">
              Automation, troubleshooting and field service support
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Service focus</p>
            <p className="text-muted-foreground text-sm">
              Machine downtime reduction, PLC/I/O checks and root-cause troubleshooting
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Location</p>
            <p className="text-muted-foreground text-sm">
              Södertälje / Stockholm area, Sweden
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">What I offer</p>
        <p className="text-foreground text-sm">
          Practical field service for industrial automation, ABB robots, machine vision and electrical cabinets. I focus on clear problem solving, safe recovery and documentation for maintenance teams.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Contact me
        </button>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
