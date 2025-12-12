'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Crazy = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/blancmont.JPG',
      alt: 'Mont Blanc summit',
      caption: 'Summit of Mont Blanc – Ibbo Abdoli (blue jacket)',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-6">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Mont Blanc (4,810 m)
        </h2>

        <p className="text-secondary-foreground mt-4 max-w-3xl leading-relaxed">
          I’m Ibbo Abdoli, a Service Engineer and Industrial Automation Technician
          based in Sweden. One of the craziest things I’ve ever done was climbing
          Mont Blanc, the highest mountain in the Alps and Western Europe.
        </p>

        <p className="text-secondary-foreground mt-3 max-w-3xl leading-relaxed">
          I completed the ascent with a close friend, without a professional
          guide, which required careful planning, physical endurance, and strong
          trust in each other. During the climb, we faced extreme conditions,
          including winds reaching up to 80 km/h.
        </p>

        <p className="text-secondary-foreground mt-3 max-w-3xl leading-relaxed">
          This experience pushed my physical and mental limits and strengthened
          skills such as decision-making under pressure, resilience, and
          teamwork—qualities I also rely on in my professional work within
          industrial automation and field service.
        </p>
      </div>

      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Crazy;
