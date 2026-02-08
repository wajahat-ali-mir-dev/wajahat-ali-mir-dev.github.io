import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mrwajahatalimir.com';
  
  // Add static pages here
  const routes = [
    '',
    '/about',
    '/projects',
    '/contact',
    '/blog',
    '/links-hub',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
