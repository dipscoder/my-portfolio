import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { href: '/#about', label: 'about' },
  { href: '/#work', label: 'work' },
  { href: '/#experience', label: 'experience' },
  { href: '/writing', label: 'writing' },
  { href: '/#contact', label: 'say hi' },
];

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between border-b border-rule bg-bg/85 px-[22px] py-[14px] font-mono text-xs tracking-[0.04em] backdrop-blur-md md:px-14 md:py-[22px]"
    >
      <Link href="/" className="font-medium text-ink">
        dipesh
      </Link>

      <div className="hidden items-center gap-7 text-inksoft md:flex">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="transition-colors hover:text-ink"
          >
            {l.label}
          </Link>
        ))}
        <span aria-hidden="true" className="h-4 w-px bg-rule" />
        <ThemeToggle />
      </div>

      <div className="flex items-center gap-5 md:hidden">
        <ThemeToggle />
        <Link
          href="#contact"
          className="text-[11px] uppercase tracking-[0.1em] text-inksoft"
        >
          menu
        </Link>
      </div>
    </nav>
  );
}
