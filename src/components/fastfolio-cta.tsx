'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export function FastfolioCTA() {
  const handleClick = () => {
    window.open('https://ibboabdoli.com', '_blank');
  };

  return (
    <motion.button
      className="fixed top-8 left-6 z-50 cursor-pointer group flex items-center gap-2 
                 rounded-full bg-white/20 backdrop-blur-xl px-4 py-2.5 border border-white/40 
                 hover:shadow-lg transition-all duration-300"
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image 
        src="/ibbo-logo.png"
        alt="Ibbo AI Assistant"
        width={24}
        height={24}
        className="object-contain rounded"
      />

      {/* متن برای دسکتاپ */}
      <span className="text-sm font-medium text-foreground hidden sm:inline">
        Explore Ibbo AI Assistant
      </span>

      {/* متن کوتاه برای موبایل */}
      <span className="text-sm font-medium text-foreground sm:hidden">
        Visit
      </span>

      <ChevronRight 
        className="h-4 w-4 group-hover:translate-x-0.5 transition-transform hidden sm:block" 
      />
    </motion.button>
  );
}

export default FastfolioCTA;
