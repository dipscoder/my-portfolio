import { HIGHLIGHTS } from '@/lib/content';
import { Reveal } from './Reveal';
import { Section, SectionHeading } from './Section';

export function SelectedWork() {
  return (
    <Section id="work" tone="soft" bridge="highlights" label="Selected work">
      <SectionHeading>Three problems I sat with.</SectionHeading>

      <div className="grid max-w-[920px] gap-7 md:gap-9">
        {HIGHLIGHTS.map((h, i) => {
          const last = i === HIGHLIGHTS.length - 1;
          return (
            <Reveal
              as="article"
              key={h.title}
              delay={i * 100}
              className={`grid gap-4 pb-6 md:grid-cols-[40px_1fr] md:gap-6 md:pb-8 ${
                last ? '' : 'border-b border-rule'
              }`}
            >
              <div className="pt-1 font-mono text-[12px] text-accent md:text-[13px]">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="m-0 mb-2.5 font-serif text-[18.5px] font-medium leading-[1.3] text-ink md:mb-3 md:text-[22px]">
                  {h.title}
                </h3>
                <p className="m-0 mb-2.5 max-w-[680px] text-[14.5px] leading-[1.6] text-inksoft md:mb-3.5 md:text-base md:leading-[1.65]">
                  {h.body}
                </p>
                <p className="m-0 font-mono text-[11px] tracking-[0.02em] text-inkmute md:text-xs">
                  {h.foot}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
