import { SIDE_PROJECT } from '@/lib/content';
import { Reveal } from './Reveal';
import { Section, SectionHeading } from './Section';

export function SideProject() {
  return (
    <Section tone="soft" bridge="projects" label="On the side">
      <SectionHeading>Something I’ve been building for myself.</SectionHeading>

      <Reveal className="px-card max-w-[760px] rounded border border-cardborder bg-cardbg p-6 md:p-8">
        <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.1em] text-accent md:text-[11px]">
          {SIDE_PROJECT.eyebrow}
        </div>
        <h3 className="m-0 mb-3 font-serif text-lg font-medium text-ink md:text-[22px]">
          {SIDE_PROJECT.title}
        </h3>
        <p className="m-0 text-[14px] leading-[1.6] text-inksoft md:text-[15.5px] md:leading-[1.65]">
          {SIDE_PROJECT.body}
        </p>
      </Reveal>
    </Section>
  );
}
