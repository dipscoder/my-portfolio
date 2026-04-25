'use client';

import { useEffect, useState } from 'react';

// The pre-paint script in <head> sets the initial `dark` class. This
// component just exposes the toggle and keeps localStorage in sync.
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* ignore quota / privacy mode */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label="Toggle color theme"
      className="font-mono text-[11px] uppercase tracking-[0.14em] text-inksoft transition-colors hover:text-ink"
    >
      {isDark ? 'light' : 'dark'}
    </button>
  );
}
