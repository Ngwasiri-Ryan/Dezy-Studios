import { MetadataRoute } from 'next';
import { portfolio } from '@/lib/data';
import { NAV_LINKS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://dezy-enterprise.com'; // Replace with your actual domain

  // Get static pages from NAV_LINKS, excluding placeholders and the homepage (which is added separately)
  const staticPages = NAV_LINKS
    .filter(link => link.href !== '#' && link.href !== '/')
    .map((link) => ({
      url: `${siteUrl}${link.href}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  // Get dynamic project pages
  const projectPages = portfolio.map((project) => ({
    url: `${siteUrl}/portfolio/${project.id}/details`,
    lastModified: new Date().toISOString(), // In a real app, you might use a project-specific date
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...staticPages,
    ...projectPages,
  ];
}
