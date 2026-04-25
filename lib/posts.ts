import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const WRITING_DIR = path.join(process.cwd(), 'content', 'writing');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
  draft?: boolean;
};

// Read frontmatter from every MDX file in /content/writing.
// Sorted newest-first; drafts hidden in production builds.
export async function getAllPosts(): Promise<PostMeta[]> {
  let files: string[] = [];
  try {
    files = await fs.readdir(WRITING_DIR);
  } catch {
    return [];
  }

  const posts: PostMeta[] = [];
  for (const file of files) {
    if (!file.endsWith('.mdx')) continue;
    const raw = await fs.readFile(path.join(WRITING_DIR, file), 'utf8');
    const { data } = matter(raw);
    const slug = file.replace(/\.mdx$/, '');
    if (process.env.NODE_ENV === 'production' && data.draft) continue;
    posts.push({
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      tag: data.tag ?? 'note',
      summary: data.summary ?? '',
      draft: data.draft ?? false,
    });
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}
