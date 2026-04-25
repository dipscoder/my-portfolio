import { LINKS } from '@/lib/content';
import { Section } from './Section';

const rows = [
  { k: 'email', v: LINKS.email, href: `mailto:${LINKS.email}` },
  { k: 'github', v: LINKS.github, href: `https://${LINKS.github}` },
  { k: 'linkedin', v: LINKS.linkedin, href: `https://${LINKS.linkedin}` },
  { k: 'website', v: LINKS.site, href: `https://${LINKS.site}` },
  { k: 'writing', v: LINKS.blog, href: `https://${LINKS.blog}` },
  { k: 'résumé', v: 'pdf · 1 page', href: LINKS.resume },
];

export function Contact() {
  return (
    <Section id="contact" bridge="contact" className="md:pb-[110px] md:pt-[90px]">
      <h2 className="m-0 mb-4 max-w-[720px] font-serif text-[26px] font-normal leading-[1.2] tracking-[-0.005em] text-ink md:mb-6 md:text-[42px] md:leading-[1.15] md:tracking-[-0.01em]">
        If you’re building something user-driven and the boring infrastructure parts are slowing you down, say hi.
      </h2>
      <p className="m-0 mb-7 font-serif text-[15.5px] italic text-inksoft md:mb-9 md:text-[18px]">
        Email is the easiest. I read everything.
      </p>

      <div className="grid max-w-[760px] font-mono text-[13px] md:grid-cols-2 md:gap-x-12 md:text-[13.5px]">
        {rows.map((row) => {
          const external = row.href.startsWith('http');
          return (
            <a
              key={row.k}
              href={row.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="grid grid-cols-[80px_1fr] items-baseline gap-3 border-t border-rule py-3.5 text-ink no-underline transition-colors hover:text-accent md:grid-cols-[90px_1fr] md:gap-4 md:py-4"
            >
              <span className="text-[10.5px] uppercase tracking-[0.08em] text-inkmute md:text-[11px]">
                {row.k}
              </span>
              <span className="justify-self-start break-all border-b border-accent pb-px text-ink">
                {row.v}
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
