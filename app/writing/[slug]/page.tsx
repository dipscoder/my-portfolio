import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer } from '../../_components/Footer';
import { Nav } from '../../_components/Nav';
import { getAllPosts, getPostSlugs } from '@/lib/posts';

type Params = { slug: string };

// Statically generate every post slug at build time.
export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: 'Not found' };
  return {
    title: `${post.title} · Dipesh Jaiswal`,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const posts = await getAllPosts();
  const meta = posts.find((p) => p.slug === slug);
  if (!meta) notFound();

  // The MDX file becomes a real ES module thanks to @next/mdx.
  const mod = await import(`@/content/writing/${slug}.mdx`).catch(() => null);
  if (!mod) notFound();
  const Post = mod.default;

  const date = meta.date
    ? new Date(meta.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <>
      <Nav />
      <main className="px-[22px] py-12 md:px-14 md:py-20">
        <article className="mx-auto max-w-[680px]">
          <Link
            href="/writing"
            className="mb-8 inline-block font-mono text-[11px] uppercase tracking-[0.08em] text-inkmute transition-colors hover:text-accent md:mb-12"
          >
            ← writing
          </Link>

          <div className="mb-3 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.08em] text-inkmute md:text-[11px]">
            <span className="text-accent">{meta.tag}</span>
            {date && <span>· {date}</span>}
          </div>
          <h1 className="m-0 mb-10 font-serif text-[28px] font-normal leading-[1.2] tracking-[-0.012em] text-ink md:mb-14 md:text-[40px] md:leading-[1.15]">
            {meta.title}
          </h1>

          <div className="prose-writing">
            <Post />
          </div>

          <div className="mt-16 border-t border-rule pt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-inkmute md:mt-20">
            Thanks for reading. Reply to this on{' '}
            <a
              href="mailto:dipeshjaiswal140@gmail.com"
              className="text-ink underline decoration-accent decoration-1 underline-offset-[3px] transition-colors hover:text-accent"
            >
              email
            </a>
            .
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
