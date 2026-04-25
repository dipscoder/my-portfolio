import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './content/**/*.{md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Iowan Old Style', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      colors: {
        bg: 'var(--bg)',
        bgsoft: 'var(--bg-soft)',
        ink: 'var(--ink)',
        inksoft: 'var(--ink-soft)',
        inkmute: 'var(--ink-mute)',
        rule: 'var(--rule)',
        accent: 'var(--accent)',
        cardbg: 'var(--card-bg)',
        cardborder: 'var(--card-border)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
