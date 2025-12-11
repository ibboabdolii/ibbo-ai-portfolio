'use client';

import Image from 'next/image';

export function PoweredByFastfolio() {
  return (
    <div className="flex items-center justify-center gap-1.5 pb-4 md:pb-0 text-xs text-gray-500">
      <span>Powered by</span>
      <Image 
        src="/ibbo-logo.png" // آیکون یا لوگوی خودت در public
        alt="Ibbo AI"
        width={16}
        height={16}
        className="object-contain"
      />
      <span className="font-medium">Ibbo AI</span>
    </div>
  );
}
