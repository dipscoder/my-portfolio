import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

const SITE = 'https://dipeshjaiswal.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const now = new Date();

  return [
    { url: `${SITE}/`, lastModified: now, priority: 1 },
    { url: `${SITE}/writing`, lastModified: now, priority: 0.8 },
    ...posts.map((p) => ({
      url: `${SITE}/writing/${p.slug}`,
      lastModified: p.date ? new Date(p.date) : now,
      priority: 0.6,
    })),
  ];
}
