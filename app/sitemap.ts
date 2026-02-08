import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wajahat-ali-mir-dev.github.io';
  
  // Single page application - only the main URL is indexable
  // Hash fragments (#about, #projects, etc.) are not indexed by search engines
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ];
}
