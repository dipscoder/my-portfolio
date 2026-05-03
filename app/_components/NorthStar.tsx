import { NORTH_STAR } from '@/lib/content';
import { Section } from './Section';

export function NorthStar() {
  return (
    <Section tone="soft" label="Where I’m headed" className="md:py-[90px]">
      <p className="m-0 mt-3 max-w-[880px] font-serif text-[21px] font-normal leading-[1.35] tracking-[-0.005em] text-ink md:text-[30px] md:leading-[1.3]">
        {NORTH_STAR}
      </p>
    </Section>
  );
}
