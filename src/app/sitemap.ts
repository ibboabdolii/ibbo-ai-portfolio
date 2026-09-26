import { portfolioProjects } from '@/data/portfolio';
import type { MetadataRoute } from 'next';

const siteUrl = 'https://ai.ibboabdoli.com';
const lastModified = new Date('2026-09-26T00:00:00Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = portfolioProjects
    .filter((project) => project.caseSlug)
    .flatMap((project) => {
      const slug = project.caseSlug!;
      const sv = `${siteUrl}/projects/${slug}`;
      const en = `${siteUrl}/en/projects/${slug}`;

      return [
        {
          url: sv,
          lastModified,
          changeFrequency: 'monthly' as const,
          priority: 0.8,
          alternates: { languages: { sv, en } },
        },
        {
          url: en,
          lastModified,
          changeFrequency: 'monthly' as const,
          priority: 0.8,
          alternates: { languages: { sv, en } },
        },
      ];
    });

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          sv: `${siteUrl}/`,
          en: `${siteUrl}/en`,
        },
      },
    },
    {
      url: `${siteUrl}/en`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          sv: `${siteUrl}/`,
          en: `${siteUrl}/en`,
        },
      },
    },
    ...projectEntries,
  ];
}
