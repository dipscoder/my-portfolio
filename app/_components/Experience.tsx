import { EXPERIENCE, LINKS } from '@/lib/content';
import { Section, SectionHeading } from './Section';

export function Experience() {
  return (
    <Section id="experience" bridge="experience" label="Experience">
      <SectionHeading>A short timeline.</SectionHeading>

      <div className="grid max-w-[920px] gap-9 md:gap-11">
        {EXPERIENCE.map((exp, i) => {
          const last = i === EXPERIENCE.length - 1;
          return (
            <article
              key={exp.company}
              className={`grid gap-3 pb-6 md:grid-cols-[180px_1fr] md:gap-8 md:pb-9 ${
                last ? '' : 'border-b border-rule'
              }`}
            >
              <div className="pt-1 font-mono text-[11px] tracking-[0.04em] text-inkmute md:text-xs">
                {exp.period}
              </div>
              <div>
                <div className="mb-1 font-serif text-lg font-medium text-ink md:text-[22px]">
                  {exp.role}{' '}
                  <span className="text-accent">· {exp.company}</span>
                </div>
                <div className="mb-4 font-serif text-[13.5px] italic text-inksoft md:text-[15px]">
                  {exp.sub}
                </div>
                <ul className="m-0 grid list-none gap-2 p-0 md:gap-2.5">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="grid grid-cols-[14px_1fr] gap-2.5 text-[14px] leading-[1.55] text-inksoft md:text-[15.5px] md:leading-[1.6]"
                    >
                      <span aria-hidden="true" className="pt-[2px] text-accent">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-8 font-mono text-xs text-inksoft md:text-[12.5px]">
        The complete version, with dates and dependencies, is in the{' '}
        <a
          href={LINKS.resume}
          className="text-ink underline decoration-accent decoration-1 underline-offset-[3px] transition-colors hover:text-accent"
        >
          résumé (pdf)
        </a>
        .
      </p>
    </Section>
  );
}
