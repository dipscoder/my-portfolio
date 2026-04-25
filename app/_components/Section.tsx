import { BRIDGES } from '@/lib/content';

type Tone = 'bg' | 'soft';

type SectionProps = {
  id?: string;
  tone?: Tone;
  bridge?: keyof typeof BRIDGES;
  label?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  tone = 'bg',
  bridge,
  label,
  className = '',
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        'relative border-t border-rule px-[22px] py-12 md:px-14 md:py-20',
        tone === 'soft' ? 'bg-bgsoft' : 'bg-bg',
        className,
      ].join(' ')}
    >
      {bridge && (
        <p className="mb-4 font-serif text-[14.5px] italic leading-[1.5] text-inkmute md:text-[17px]">
          {BRIDGES[bridge]}
        </p>
      )}
      {label && (
        <div className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-inkmute md:text-[11px]">
          {label}
        </div>
      )}
      {children}
    </section>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-7 font-serif text-2xl font-medium leading-[1.2] tracking-[-0.005em] md:mb-9 md:text-[32px]">
      {children}
    </h2>
  );
}
