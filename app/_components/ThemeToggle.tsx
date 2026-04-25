"use client";

import { useEffect, useState } from "react";

const TRANSITION_MS = 320;

// The pre-paint script in <head> sets the initial `dark` class. This
// component just exposes the toggle and keeps localStorage in sync.
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;

    // Add the transient class so colour-bearing properties ease across
    // for one tween-window. Removed afterwards so hover states and the
    // rest of the page keep their normal timings.
    root.classList.add("theme-transitioning");
    root.classList.toggle("dark", next);
    setIsDark(next);

    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore quota / privacy mode */
    }

    window.setTimeout(() => {
      root.classList.remove("theme-transitioning");
    }, TRANSITION_MS);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label="Toggle color theme"
      className="font-mono text-[11px] uppercase tracking-[0.14em] text-inksoft transition-colors hover:text-ink"
    >
      {isDark ? "light" : "dark"}
    </button>
  );
}
