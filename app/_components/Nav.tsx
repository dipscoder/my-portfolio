'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LINKS } from '@/lib/content';
import { ThemeToggle } from './ThemeToggle';

const DESKTOP_LINKS = [
  { href: '/#about', label: 'about' },
  { href: '/#work', label: 'work' },
  { href: '/#experience', label: 'experience' },
  { href: '/writing', label: 'writing' },
  { href: '/#contact', label: 'say hi' },
];

const SHEET_NAV = [
  { label: 'About', href: '/#about' },
  { label: 'Stack', href: '/#skills' },
  { label: 'Selected work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Writing', href: '/writing' },
  { label: 'Say hi', href: '/#contact' },
];

const SHEET_ELSEWHERE = [
  { k: 'email', v: LINKS.email, href: `mailto:${LINKS.email}` },
  { k: 'github', v: LINKS.github, href: `https://${LINKS.github}` },
  { k: 'linkedin', v: LINKS.linkedin, href: `https://${LINKS.linkedin}` },
  { k: 'résumé', v: 'pdf', href: LINKS.resume },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Esc closes the sheet; lock body scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-30 flex items-center justify-between border-b border-rule bg-bg/85 px-[22px] py-[14px] font-mono text-xs tracking-[0.04em] backdrop-blur-md md:px-14 md:py-[22px]">
        <Link href="/" className="px-link font-medium text-ink">
          dipesh
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 text-inksoft md:flex">
          {DESKTOP_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="px-link text-inksoft hover:text-ink">
              {l.label}
            </Link>
          ))}
          <span aria-hidden="true" className="h-4 w-px bg-rule" />
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger that opens the sheet */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="px-menu-btn text-[11px] uppercase tracking-[0.1em] text-ink"
          >
            <span className="text-inksoft">{open ? 'close' : 'menu'}</span>
            <span
              aria-hidden="true"
              className={`px-menu-bars${open ? ' px-menu-bars--open' : ''}`}
            >
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {/* Backdrop — tap to dismiss */}
      <div
        className={`px-backdrop${open ? ' px-backdrop--open' : ''}`}
        onClick={close}
        aria-hidden={!open}
      />

      {/* Sheet — slides in from the right */}
      <aside
        role="dialog"
        aria-label="Site navigation"
        aria-hidden={!open}
        className={`px-mobile-sheet${open ? ' px-mobile-sheet--open' : ''} border-l border-rule bg-bg text-ink`}
      >
        <div className="flex items-center justify-between border-b border-rule px-[22px] py-[18px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-inkmute">
            Navigate
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="px-menu-btn text-ink"
          >
            <span className="px-menu-bars px-menu-bars--open" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-[22px] pb-6 pt-2">
          <ul className="m-0 list-none p-0">
            {SHEET_NAV.map((item) => (
              <li key={item.href} className="border-b border-rule">
                <Link
                  href={item.href}
                  onClick={close}
                  className="px-menu-row font-serif text-[22px] text-ink"
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true" className="font-mono text-xs text-accent">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mb-3 mt-8 font-mono text-[10.5px] uppercase tracking-[0.14em] text-inkmute">
            Elsewhere
          </div>
          <ul className="m-0 grid list-none gap-1 p-0">
            {SHEET_ELSEWHERE.map((row) => {
              const external = row.href.startsWith('http');
              return (
                <li key={row.k}>
                  <a
                    href={row.href}
                    onClick={close}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="px-menu-row font-mono text-[13px] text-inksoft"
                  >
                    <span className="text-[10.5px] uppercase tracking-[0.08em] text-inkmute">
                      {row.k}
                    </span>
                    <span className="border-b border-accent pb-px text-ink">{row.v}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="border-t border-rule px-[22px] py-[14px] font-mono text-[10px] uppercase tracking-[0.08em] text-inkmute">
          © 2026 · Dipesh
        </div>
      </aside>
    </>
  );
}
