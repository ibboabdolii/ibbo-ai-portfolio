'use client';

import { useOutsideClick } from '@/hooks/use-outside-click';
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

type VisualKey = 'serial' | 'robot' | 'vision' | 'service' | 'software' | 'safety';

type CardData = {
  title: string;
  category: string;
  visual: VisualKey;
  content: React.ReactNode;
};

const visualConfig: Record<VisualKey, { code: string; label: string; detail: string }> = {
  serial: { code: 'RS485', label: 'SERIAL / GYRO', detail: 'RX · PARSER · ANGLE' },
  robot: { code: 'ABB', label: 'ROBOT PATH', detail: 'RAPID · CLEARANCE' },
  vision: { code: 'CV', label: 'VISION CELL', detail: 'TRIGGER · OFFSET' },
  service: { code: 'IO', label: 'FIELD SERVICE', detail: 'SIGNAL · VERIFY' },
  software: { code: 'CI', label: 'SAAS / DELIVERY', detail: 'PR · PREVIEW · OBS' },
  safety: { code: 'SAFE', label: 'ROBOT SAFETY', detail: 'STATE · RESTART' },
};

function ProjectVisual({ visual, title }: { visual: VisualKey; title: string }) {
  const config = visualConfig[visual];

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[#0b1220]"
      aria-label={`${title} technical illustration`}
      role="img"
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(125,211,252,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,.18)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -right-10 top-8 h-36 w-36 rounded-full border border-sky-300/20 bg-sky-400/10 blur-[1px]" />
      <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-2xl font-bold tracking-tight text-sky-300">
            {config.code}
          </span>
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,.8)]" />
        </div>
        <p className="mt-3 font-mono text-[11px] font-semibold tracking-[0.2em] text-white/90">
          {config.label}
        </p>
        <p className="mt-1 font-mono text-[9px] tracking-[0.16em] text-white/45">
          {config.detail}
        </p>
      </div>
      <div className="absolute left-7 top-10 h-[2px] w-24 bg-gradient-to-r from-sky-300 to-transparent" />
      <div className="absolute left-7 top-14 h-[2px] w-16 bg-gradient-to-r from-emerald-300/80 to-transparent" />
    </div>
  );
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({ onCardClose: () => {}, currentIndex: 0 });

export const Carousel = ({
  items,
  initialScroll = 0,
}: {
  items: React.ReactNode[];
  initialScroll?: number;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollLeft = initialScroll;
    checkScrollability();
  }, [initialScroll]);

  const scrollByCard = (direction: 1 | -1) => {
    carouselRef.current?.scrollBy({ left: direction * 240, behavior: 'smooth' });
  };

  const handleCardClose = (index: number) => {
    carouselRef.current?.scrollTo({ left: 240 * index, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-auto overscroll-x-auto scroll-smooth py-8 [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="mx-auto flex max-w-7xl flex-row justify-start gap-4 px-1 sm:px-2">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.35), ease: 'easeOut' }}
                key={`card-${index}`}
                className="rounded-3xl last:pr-[5%] md:last:pr-[25%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-2 flex justify-end gap-2 md:mr-8">
          <button
            aria-label="Scroll projects left"
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-40"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            aria-label="Scroll projects right"
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-40"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardData;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };

    document.body.style.overflow = open ? 'hidden' : 'auto';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // @ts-ignore library hook accepts a mutable element ref
  useOutsideClick(containerRef, () => handleClose());

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-52 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-6 h-fit max-w-5xl rounded-3xl bg-white font-sans shadow-2xl sm:my-10 dark:bg-neutral-900"
            >
              <div className="sticky top-4 z-52 flex justify-end px-5 pt-5 md:px-14 md:pt-8">
                <button
                  aria-label="Close project details"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black/90 shadow-md dark:bg-white/90"
                  onClick={handleClose}
                >
                  <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                </button>
              </div>

              <div className="relative px-6 pt-1 pb-0 md:px-14">
                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400"
                >
                  {card.category}
                </motion.p>
                <motion.h3
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className="mt-3 text-2xl font-semibold text-neutral-800 md:text-5xl dark:text-white"
                >
                  {card.title}
                </motion.h3>
              </div>

              <div className="px-6 pt-8 pb-12 md:px-14 md:pb-14">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={() => setOpen(true)}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-950 text-left shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <ProjectVisual visual={card.visual} title={card.title} />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
        <div className="relative z-40 p-7">
          <motion.p
            layoutId={layout ? `category-card-${card.title}` : undefined}
            className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-sky-200"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-card-${card.title}` : undefined}
            className="mt-2 max-w-xs font-sans text-xl font-semibold leading-tight text-white [text-wrap:balance]"
          >
            {card.title}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};
