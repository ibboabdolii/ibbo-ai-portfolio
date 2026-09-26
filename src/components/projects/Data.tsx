'use client';

import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  localized,
  portfolioProjects,
  type PortfolioLanguage,
  type PortfolioProject,
} from '@/data/portfolio';
import React from 'react';

export type ProjectCard = {
  category: string;
  title: string;
  visual: PortfolioProject['visual'];
  content: React.ReactNode;
};

const labels = {
  sv: {
    problem: 'Problem',
    diagnosis: 'Analys',
    action: 'Åtgärd',
    verification: 'Verifiering',
    technologies: 'Teknik',
    links: 'Länkar',
  },
  en: {
    problem: 'Problem',
    diagnosis: 'Diagnosis',
    action: 'Action',
    verification: 'Verification',
    technologies: 'Technologies',
    links: 'Links',
  },
} as const;

const ProjectContent = ({
  project,
  language,
}: {
  project: PortfolioProject;
  language: PortfolioLanguage;
}) => {
  const t = labels[language];

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-[#F5F5F7] p-6 sm:p-8 dark:bg-[#1D1D1F]">
        <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <span>{project.period}</span>
          <span aria-hidden="true">•</span>
          <span>{localized(project.category, language)}</span>
        </div>

        <p className="text-secondary-foreground text-base leading-relaxed md:text-lg">
          {localized(project.summary, language)}
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {[
            [t.problem, localized(project.problem, language)],
            [t.diagnosis, localized(project.diagnosis, language)],
            [t.action, localized(project.action, language)],
            [t.verification, localized(project.verification, language)],
          ].map(([heading, body]) => (
            <div
              key={heading}
              className="rounded-2xl border border-black/5 bg-white p-4 dark:border-white/10 dark:bg-neutral-900"
            >
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
            {t.technologies}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mb-6">
          <div className="mb-4 flex items-center gap-2 px-2 sm:px-6">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              {t.links}
            </h3>
            <Link className="text-muted-foreground h-4 w-4" />
          </div>

          <Separator className="my-4" />

          <div className="space-y-3">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#F5F5F7] p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-medium">
                  {localized(link.name, language)}
                </span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export function getProjectCards(language: PortfolioLanguage): ProjectCard[] {
  return portfolioProjects.map((project) => ({
    category: localized(project.category, language),
    title: localized(project.title, language),
    visual: project.visual,
    content: <ProjectContent project={project} language={language} />,
  }));
}
