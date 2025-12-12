'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Crazy = () => {
  const adventurePhotos: PhotoItem[] = [
    {
      src: '/blancmont.JPG', // باید دقیقاً داخل public باشد
      alt: 'On top of Mont Blanc',
      caption: 'Mont Blanc summit — extreme wind and challenging conditions',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-6">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          One of My Craziest Adventures
        </h2>

        <p className="text-secondary-foreground mt-4 max-w-3xl leading-relaxed">
          One of the most challenging and memorable experiences in my life was
          reaching the summit of Mont&nbsp;Blanc, the highest mountain in the Alps.
        </p>

        <p className="text-secondary-foreground mt-3 max-w-3xl leading-relaxed">
          I completed the climb together with a close friend, without a professional
          guide. The conditions were extreme, with strong winds reaching around
          80&nbsp;km/h near the summit.
        </p>

        <p className="text-secondary-foreground mt-3 max-w-3xl leading-relaxed">
          This experience pushed me both physically and mentally, and taught me the
          importance of preparation, teamwork, and staying calm under pressure —
          lessons I apply daily in my work as a Service Engineer.
        </p>
      </div>

      <Photos photos={adventurePhotos} />
    </div>
  );
};

export default Crazy;
