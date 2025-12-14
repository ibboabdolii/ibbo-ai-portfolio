'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import WelcomeModal from '@/components/welcome-modal';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Who are you? Tell me about your background as a Service Engineer / Automation Technician.',
  Projects:
    'Tell me about your projects at Scania, Lantmännen, Meritor, Volvo, and Elektroautomatik.',
  Skills:
    'What are your main skills in PLC, ABB robots, and electrical installations?',
  Fun: 'What do you do for fun outside of work?',
  Contact: 'How can I contact you if I want to work with you?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Fun', color: '#B95F9D', icon: PartyPopper },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
] as const;

/* ---------- component ---------- */
export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // ✅ اصلاح اصلی: بدون query در URL
  const goToChat = (query: string) => {
    const q = query.trim();
    if (!q) return;

    sessionStorage.setItem('chat_prefill', q);
    router.push('/chat');
  };

  /* hero animations */
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  useEffect(() => {
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
      {/* header */}
      <motion.div
        className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <WelcomeModal />

        <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl">
          Hey, I'm Ibbo 👋
        </h2>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Ibbo AI Portfolio
        </h1>
      </motion.div>

      {/* memoji */}
      <div className="relative z-10 h-52 w-52 overflow-hidden rounded-full sm:h-72 sm:w-72">
        <Image
          src="/landing-memojis.png"
          alt="Hero memoji"
          fill
          priority
          sizes="(max-width: 640px) 208px, 288px"
          className="object-cover"
        />
      </div>

      {/* input + quick buttons */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0"
      >
        {/* free-form question */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) goToChat(input);
          }}
          className="relative w-full max-w-lg"
        >
          <div className="mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-2.5 pr-2 pl-6 backdrop-blur-lg">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about my experience, projects, or skills…"
              className="w-full border-none bg-transparent text-base focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-white"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* quick questions */}
        <div className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <Button
              key={key}
              onClick={() => goToChat(questions[key])}
              variant="outline"
              className="aspect-square rounded-2xl"
            >
              <div className="flex flex-col items-center gap-1">
                <Icon size={22} color={color} />
                <span className="text-xs font-medium sm:text-sm">{key}</span>
              </div>
            </Button>
          ))}
        </div>
      </motion.div>

      <FluidCursor />
    </div>
  );
}
