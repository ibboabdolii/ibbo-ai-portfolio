'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Sports = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/podium.jpg',
      alt: 'Podium finish at Roc d’Azur',
      caption: '3rd place podium finish at the legendary Roc d’Azur race',
    },
    {
      src: '/levens.JPG',
      alt: 'Mountain bike world cup in Levens',
      caption: 'Competing in the Mountain Bike World Cup in Levens',
    },
    {
      src: '/marseille.JPG',
      alt: 'World Cup race in Marseille',
      caption: 'Pushing my limits at the Marseille World Cup',
    },
    {
      src: '/transmo.JPG',
      alt: 'Transmaurienne race start line',
      caption: 'On the start line of the Transmaurienne race in the French Alps',
    },
    {
      src: '/ploeuc.jpg',
      alt: 'French championship race',
      caption: 'French Championship race in Ploeuc',
    },
    {
      src: '/gueret.jpg',
      alt: 'World Cup race in Gueret',
      caption: 'Racing at the World Cup event in Gueret',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Sports & Discipline
        </h2>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          Before building my career in industrial automation and engineering,
          sports played a central role in my life. Competing at a high level
          taught me discipline, mental focus, and how to perform under pressure.
        </p>

        <p className="mt-3 text-muted-foreground leading-relaxed">
          These experiences continue to shape the way I work today as a Service
          Engineer — staying calm in critical situations, paying attention to
          details, and constantly pushing for improvement.
        </p>
      </div>

      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Sports;
