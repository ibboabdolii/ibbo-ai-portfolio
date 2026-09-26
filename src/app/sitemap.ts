import type { MetadataRoute } from 'next';

const siteUrl = 'https://ai.ibboabdoli.com';
const lastModified = new Date('2026-09-26T00:00:00Z');

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];
}
