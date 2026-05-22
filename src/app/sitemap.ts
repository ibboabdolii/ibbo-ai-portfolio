import type { MetadataRoute } from 'next';

const siteUrl = 'https://ai.ibboabdoli.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: siteUrl + '/chat',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
