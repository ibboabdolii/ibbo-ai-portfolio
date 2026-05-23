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

interface WelcomeModalProps {
  trigger?: React.ReactNode;
}

export default function WelcomeModal({ trigger }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Default trigger is the logo
  const defaultTrigger = (
    <Button
      variant="ghost"
      className="h-auto w-auto cursor-pointer rounded-2xl bg-white/30 p-3 shadow-lg backdrop-blur-lg hover:bg-white/60 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      onClick={() => setIsOpen(true)}
    >
      <Image
        src="/logo-ibbo.svg"
        width={160}
        height={160}
        alt="Ibbo AI Portfolio logo"
        className="h-14 w-14 md:h-20 md:w-20"
        priority
      />
      <span className="sr-only">About Ibbo AI Portfolio</span>
    </Button>
  );

  const handleContactMe = () => {
    setIsOpen(false);
    window.location.href =
      '/chat?query=How%20can%20I%20contact%20you%20for%20service%20or%20automation%20projects%3F';
  };

  return (
    <>
      {/* Use custom trigger if provided, otherwise use default */}
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        defaultTrigger
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-background z-52 max-h-[85vh] overflow-auto rounded-2xl border-none p-4 py-6 shadow-xl sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col"
          >
            {/* Header */}
            <DialogHeader className="relative flex flex-row items-start justify-between px-8 pt-8 pb-6">
              <div>
                <DialogTitle className="flex items-center gap-2 text-4xl font-bold tracking-tight">
                  Welcome to Ibbo AI Portfolio
                </DialogTitle>
                <DialogDescription className="mt-2 text-base">
                  An interactive way to explore my service engineering work,
                  automation projects, and technical troubleshooting experience.
                </DialogDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="sticky top-0 right-0 cursor-pointer rounded-full bg-black p-2 text-white hover:bg-black/90 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogHeader>

            {/* Content area */}
            <div className="space-y-6 overflow-y-auto px-2 py-4 md:px-8">
              <section className="bg-accent w-full space-y-8 rounded-2xl p-8">
                {/* What section */}
                <div className="space-y-3">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    What is this?
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    This is my{' '}
                    <strong>AI-powered interactive portfolio.</strong>
                    <br />
                    Instead of reading a static CV, you can ask specific
                    questions about my hands-on work with PLC/I/O, ABB robots,
                    machine vision, electrical troubleshooting, and production
                    support.
                  </p>
                </div>

                {/* Why section */}
                <div className="space-y-3">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    Who is it for?
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    Recruiters, maintenance teams, production managers, and
                    technical colleagues can use this page to quickly understand
                    my background, selected projects, service approach, and how
                    I work when troubleshooting real production problems.
                    <br />
                    Ask about skills, projects, fault-finding methods,
                    automation tools, or how to contact me.
                  </p>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center px-8 pt-4 pb-0 md:pb-8">
              <Button
                onClick={() => setIsOpen(false)}
                className="h-auto rounded-full px-4 py-3"
                size="sm"
              >
                Start Chatting
              </Button>
              <div
                className="mt-6 flex cursor-pointer flex-wrap gap-1 text-center text-sm"
                onClick={handleContactMe}
              >
                <p className="text-muted-foreground">
                  Want to discuss automation, service, troubleshooting, or a
                  technical collaboration?
                </p>
                <div className="flex cursor-pointer items-center text-blue-500 hover:underline">
                  Contact me.
                </div>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
