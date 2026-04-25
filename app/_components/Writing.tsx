import Link from 'next/link';
import { LINKS } from '@/lib/content';
import { getAllPosts } from '@/lib/posts';
import { Section, SectionHeading } from './Section';

export async function Writing() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <Section id="writing" bridge="writing" label="Writing">
      <SectionHeading>Things I’ve written down.</SectionHeading>

      <p className="m-0 mb-6 max-w-[640px] text-[14.5px] leading-[1.6] text-inksoft md:mb-8 md:text-base md:leading-[1.65]">
        Mostly on the boring useful corners of building products. Full archive at{' '}
        <Link
          href="/writing"
          className="text-ink underline decoration-accent decoration-1 underline-offset-[3px] transition-colors hover:text-accent"
        >
          {LINKS.blog}
        </Link>
        .
      </p>

      {posts.length === 0 ? (
        <p className="font-mono text-xs text-inkmute">
          No posts yet. Check back soon.
        </p>
      ) : (
        <ul className="m-0 grid max-w-[820px] list-none p-0">
          {posts.map((p, i) => (
            <li
              key={p.slug}
              className={`border-t border-rule ${
                i === posts.length - 1 ? 'border-b' : ''
              }`}
            >
              <Link
                href={`/writing/${p.slug}`}
                className="group grid items-baseline gap-3 py-5 text-ink no-underline md:grid-cols-[90px_1fr] md:gap-6 md:py-6"
              >
                <span className="pt-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-inkmute md:text-[11px]">
                  {p.tag}
                </span>
                <div>
                  <div className="mb-1.5 font-serif text-[17px] font-medium leading-[1.3] text-ink transition-colors group-hover:text-accent md:text-xl">
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
      )}
    </Section>
  );
}
