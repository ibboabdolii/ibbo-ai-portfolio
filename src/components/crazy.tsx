'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Crazy = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/blancmont.JPG',
      alt: 'Outdoor activity',
      caption: 'Outdoor activity',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-6">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Sports & Active Lifestyle
        </h2>

        <p className="text-secondary-foreground mt-4 max-w-3xl leading-relaxed">
          I value an active and balanced lifestyle and regularly take part in
          different physical activities to stay healthy and focused.
        </p>

        <p className="text-secondary-foreground mt-3 max-w-3xl leading-relaxed">
          I go to the gym at Actic, where I focus on strength training and overall
          fitness. I also enjoy swimming and long walks, which help me stay
          energized and clear-minded.
        </p>

        <p className="text-secondary-foreground mt-3 max-w-3xl leading-relaxed">
          Staying active plays an important role in my daily routine and helps
          me maintain both physical and mental well-being.
        </p>
      </div>

      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Crazy;
