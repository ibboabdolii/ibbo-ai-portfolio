'use client';

import { Card, Carousel } from '@/components/projects/apple-cards-carousel';
import { getProjectCards } from '@/components/projects/Data';
import { portfolioProjects } from '@/data/portfolio';
import { usePortfolioLanguage } from '@/hooks/use-portfolio-language';
import { useMemo } from 'react';

export default function AllProjects() {
  const language = usePortfolioLanguage();

  const sections = useMemo(() => {
    const featured = portfolioProjects.filter((project) => project.track === 'featured');
    const field = portfolioProjects.filter((project) => project.track === 'field');
    const personal = portfolioProjects.filter(
      (project) => project.track === 'personal' || project.track === 'lab'
    );

    return [
      {
        key: 'featured',
        title: language === 'sv' ? 'Utvalda industriprojekt' : 'Featured industrial cases',
        description:
          language === 'sv'
            ? 'Tre case som bäst visar hur jag arbetar med PLC, ABB-robotar, maskinvision och strukturerad verifiering.'
            : 'Three cases that best show how I work with PLCs, ABB robots, machine vision, and structured verification.',
        projects: featured,
      },
      {
        key: 'field',
        title: language === 'sv' ? 'Fältservice & produktion' : 'Field service & production',
        description:
          language === 'sv'
            ? 'Praktiska service- och felsökningscase från produktionsmiljö. Kundkänsliga detaljer är anonymiserade.'
            : 'Hands-on service and troubleshooting cases from production environments. Customer-sensitive details are anonymized.',
        projects: field,
      },
      {
        key: 'personal',
        title: language === 'sv' ? 'Personligt & lärprojekt' : 'Personal & learning projects',
        description:
          language === 'sv'
            ? 'Egna digitala projekt och öppna labbprojekt hålls separat från industriella kundcase.'
            : 'Personal digital work and public lab projects are kept separate from industrial customer cases.',
        projects: personal,
      },
    ];
  }, [language]);

  return (
    <div className="h-full w-full pt-8">
      <div className="mx-auto max-w-7xl px-1 sm:px-2">
        <h2 className="font-sans text-2xl font-bold text-neutral-800 md:text-3xl dark:text-neutral-200">
          {language === 'sv' ? 'Projekt & tekniska case' : 'Projects & technical cases'}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-500 md:text-base dark:text-neutral-400">
          {language === 'sv'
            ? 'Verkliga industrifall, fältservice och egna projekt — organiserade efter typ och kompletterade med offentliga länkar där de finns.'
            : 'Real industrial cases, field service work, and personal projects — organized by type and backed by public links where available.'}
        </p>
      </div>

      <div className="mt-8 space-y-10">
        {sections.map((section) => {
          const cards = getProjectCards(language, section.projects).map((card, index) => (
            <Card
              key={`${language}-${section.key}-${card.title}`}
              card={card}
              index={index}
              layout
            />
          ));

          return (
            <section key={section.key}>
              <div className="mx-auto max-w-7xl px-1 sm:px-2">
                <h3 className="text-lg font-semibold text-neutral-800 md:text-xl dark:text-neutral-200">
                  {section.title}
                </h3>
                <p className="mt-1 max-w-3xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {section.description}
                </p>
              </div>
              <Carousel items={cards} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
