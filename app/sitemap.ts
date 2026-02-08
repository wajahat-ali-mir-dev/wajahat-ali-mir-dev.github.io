import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wajahat-ali-mir-dev.github.io';
  
  // Add static pages here
  const routes = [
    '',
    '#about',
    '#projects',
    '#contact',
    '#blog',
    '#links',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
