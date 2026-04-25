import { ABOUT_PARAS } from '@/lib/content';
import { Section, SectionHeading } from './Section';

export function About() {
  return (
    <Section id="about" tone="soft" bridge="about" label="About">
      <div className="grid max-w-[1040px] gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <SectionHeading>The shape of what I do.</SectionHeading>
          <p className="mb-4 text-[15px] leading-[1.65] text-inksoft md:text-base">
            {ABOUT_PARAS[0]}
          </p>
          <p className="m-0 text-[15px] leading-[1.65] text-inksoft md:text-base">
            {ABOUT_PARAS[1]}
          </p>
        </div>
        <div className="md:pt-[58px]">
          <p className="mb-4 text-[15px] leading-[1.65] text-inksoft md:text-base">
            {ABOUT_PARAS[2]}
          </p>
          <p className="m-0 text-[15px] leading-[1.65] text-inksoft md:text-base">
            {ABOUT_PARAS[3]}
          </p>
        </div>
      </div>
    </Section>
  );
}
