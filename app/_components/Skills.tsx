import { SKILLS_PROSE } from '@/lib/content';
import { Coffee } from './Doodles';
import { Section, SectionHeading } from './Section';

export function Skills() {
  return (
    <Section id="skills" bridge="skills" label="Stack & taste">
      <div
        aria-hidden="true"
        className="px-doodle pointer-events-none absolute right-6 top-14 hidden opacity-50 md:block"
      >
        <Coffee className="h-[56px] w-auto" />
      </div>
      <SectionHeading>Where I spend my time.</SectionHeading>
      <div className="grid max-w-[820px] gap-6 md:gap-7">
        {SKILLS_PROSE.map((row) => (
          <div
            key={row.label}
            className="grid gap-3 border-b border-rule pb-5 md:grid-cols-[120px_1fr] md:gap-6 md:pb-6"
          >
            <div className="pt-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent md:text-[11px]">
              {row.label}
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-ink md:text-[16.5px]">
              {row.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
