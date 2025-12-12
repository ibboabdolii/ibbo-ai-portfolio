'use client';

import { useOutsideClick } from '@/hooks/use-outside-click';
import { cn } from '@/lib/utils';
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

/* ---------------- TYPES ---------------- */
type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

/* ---------------- CONTEXT ---------------- */
export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

/* ---------------- CAROUSEL ---------------- */
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

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const scrollAmount = 224 + 16; // card width + gap

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleCardClose = (index: number) => {
    carouselRef.current?.scrollTo({
      left: index * scrollAmount,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="flex w-full overflow-x-scroll scroll-smooth py-10 [scrollbar-width:none]"
        >
          <div className="flex gap-4 mx-auto max-w-7xl">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.15 },
                }}
                className="rounded-3xl last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mr-10 flex justify-end gap-2 md:mr-20">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="h-10 w-10 rounded-full bg-gray-100 disabled:opacity-50"
          >
            <IconArrowNarrowLeft className="mx-auto h-6 w-6 text-gray-500" />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="h-10 w-10 rounded-full bg-gray-100 disabled:opacity-50"
          >
            <IconArrowNarrowRight className="mx-auto h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

/* ---------------- CARD ---------------- */
export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardType;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  useOutsideClick(ref, () => handleClose());

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50">
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              ref={ref}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-50 mx-auto my-10 max-w-5xl rounded-3xl bg-white dark:bg-neutral-900"
            >
              <div className="sticky top-4 flex justify-end px-8 pt-8">
                <button
                  onClick={handleClose}
                  className="h-8 w-8 rounded-full bg-black text-white"
                >
                  <IconX className="mx-auto h-5 w-5" />
                </button>
              </div>

              <div className="px-8">
                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="text-sm font-medium"
                >
                  {card.category}
                </motion.p>
                <motion.h2
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className="mt-4 text-3xl font-semibold"
                >
                  {card.title}
                </motion.h2>
              </div>

              <div className="px-8 py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={() => setOpen(true)}
        className="relative h-80 w-56 overflow-hidden rounded-3xl bg-neutral-900"
      >
        <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
        <div className="relative z-40 p-8 text-white">
          <motion.p
            layoutId={layout ? `category-${card.title}` : undefined}
            className="text-sm"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-xl font-semibold"
          >
            {card.title}
          </motion.p>
        </div>

        <BlurImage src={card.src} alt={card.title} fill className="object-cover" />
      </motion.button>
    </>
  );
};

/* ---------------- BLUR IMAGE (FIXED) ---------------- */
export const BlurImage = ({ className, alt, ...props }: ImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={alt ?? ''}
      onLoadingComplete={() => setLoading(false)}
      className={cn(
        'transition duration-300',
        loading ? 'blur-sm' : 'blur-0',
        className
      )}
    />
  );
};
