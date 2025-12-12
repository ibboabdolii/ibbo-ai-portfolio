'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export function Presentation() {
  const profile = {
    name: 'Ibbo Abdoli',
    location: 'Södertälje / Stockholm, Sweden',
    description:
      "Hey 👋\nI'm Ibbo, a Service Engineer & Automation Technician based in Sweden. I work with industrial automation, PLC systems, ABB robots and electrical installations.\n\nMost of my time is spent out in the field – troubleshooting production lines, fixing electrical panels, tuning robot cells and helping customers keep their factories running. I love challenging projects, learning new things and making complex systems simpler and safer.",
    src: '/profil-ibbo.png',
    fallbackSrc:
      'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3',
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const paragraphAnimation = {
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
        {/* Image */}
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="h-full w-full"
            >
              <Image
                src={profile.src}
                alt={profile.name}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <motion.div initial="hidden" animate="visible" variants={textVariants}>
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
              {profile.name}
            </h1>

            <div className="mt-1">
              <p className="text-muted-foreground">{profile.location}</p>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
            className="text-foreground mt-6 leading-relaxed whitespace-pre-line"
          >
            {profile.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {[
              'Service Engineer',
              'Automation Technician',
              'PLC & ABB Robots',
              'Industrial Electricity',
              'Troubleshooting',
              'Sweden',
            ].map((tag) => (
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
