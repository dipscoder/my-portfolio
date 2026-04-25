import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '../_components/Footer';
import { Nav } from '../_components/Nav';
import { getAllPosts, type PostMeta } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Writing — Dipesh Jaiswal',
  description:
    'Notes from along the way — mostly on the boring useful corners of building products.',
};

function groupByYear(posts: PostMeta[]): Record<string, PostMeta[]> {
  return posts.reduce<Record<string, PostMeta[]>>((acc, p) => {
    const year = (p.date || '').slice(0, 4) || 'undated';
    (acc[year] ??= []).push(p);
    return acc;
  }, {});
}

export default async function WritingArchive() {
  const posts = await getAllPosts();
  const groups = groupByYear(posts);
  const years = Object.keys(groups).sort((a, b) => (a < b ? 1 : -1));

  return (
    <>
      <Nav />
      <main className="px-[22px] py-12 md:px-14 md:py-20">
        <div className="mx-auto max-w-[820px]">
          <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-inkmute md:text-[11px]">
            Archive
          </div>
          <h1 className="m-0 mb-3 font-serif text-[32px] font-normal leading-[1.15] tracking-[-0.012em] text-ink md:mb-4 md:text-[48px] md:leading-[1.1]">
            Things I’ve written down.
          </h1>
          <p className="m-0 mb-10 max-w-[640px] font-serif text-[16.5px] italic leading-[1.5] text-inksoft md:mb-14 md:text-[19px]">
            Mostly on the boring useful corners of building products.
          </p>

          {posts.length === 0 ? (
            <p className="font-mono text-xs text-inkmute">
              The archive is empty for now — I’m drafting.
            </p>
          ) : (
            years.map((year) => (
              <section key={year} className="mb-10 md:mb-14">
                <div className="mb-3 font-mono text-[11px] tracking-[0.06em] text-accent md:text-[12px]">
                  {year}
                </div>
                <ul className="m-0 grid list-none p-0">
                  {groups[year].map((p, i, arr) => (
                    <li
                      key={p.slug}
                      className={`border-t border-rule ${
                        i === arr.length - 1 ? 'border-b' : ''
                      }`}
                    >
                      <Link
                        href={`/writing/${p.slug}`}
                        className="group grid items-baseline gap-3 py-5 text-ink no-underline md:grid-cols-[110px_1fr] md:gap-6 md:py-6"
                      >
                        <span className="pt-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-inkmute md:text-[11px]">
                          {p.tag}
                        </span>
                        <div>
                          <div className="mb-1.5 font-serif text-[18px] font-medium leading-[1.3] text-ink transition-colors group-hover:text-accent md:text-[21px]">
                            {p.title}
                          </div>
                          <div className="max-w-[640px] text-[13.5px] leading-[1.55] text-inksoft md:text-[14.5px]">
                            {p.summary}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
