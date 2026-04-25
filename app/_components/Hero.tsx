import { HERO_VARIANTS } from '@/lib/content';
import { Cyclist } from './Doodles';

export function Hero() {
  const hero = HERO_VARIANTS[0];

  return (
    <section className="relative px-[22px] pb-14 pt-16 md:px-14 md:pb-[110px] md:pt-[130px]">
      {/* Cyclist doodle floats in the upper right; hide on small screens. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-6 hidden opacity-50 sm:block md:right-14 md:top-20 md:opacity-60"
      >
        <Cyclist className="h-[60px] w-auto md:h-[80px]" />
      </div>

      <div className="max-w-[820px]">
        {hero.eyebrow && (
          <div className="mb-5 font-mono text-[11px] tracking-[0.08em] text-inksoft md:mb-7 md:text-xs">
            {hero.eyebrow}
          </div>
        )}
        <h1 className="m-0 mb-[18px] font-serif text-[32px] font-normal leading-[1.15] tracking-[-0.012em] text-ink md:mb-[26px] md:text-[56px] md:leading-[1.1]">
          {hero.head}
        </h1>
        <p className="m-0 max-w-[640px] font-serif text-[16.5px] italic leading-[1.5] text-inksoft md:text-[21px]">
          {hero.sub}
        </p>
      </div>
    </section>
  );
}
