import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Source_Serif_4 } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

const SITE = 'https://dipeshjaiswal.com';
const TITLE = 'Dipesh Jaiswal · Senior Engineer at CultureX';
const DESC =
  'The guy who makes sure the software people use works pretty much all the time. No lag, no drama. Backend, infra, and the bits in between.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESC,
  keywords: [
    'Dipesh Jaiswal',
    'Senior Software Engineer',
    'Backend',
    'Node.js',
    'AWS',
    'CultureX',
    'Portfolio',
  ],
  authors: [{ name: 'Dipesh Jaiswal', url: SITE }],
  openGraph: {
    type: 'website',
    url: SITE,
    title: TITLE,
    description: DESC,
    siteName: 'Dipesh Jaiswal',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/manifest.webmanifest',
  alternates: { canonical: SITE },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f1ea' },
    { media: '(prefers-color-scheme: dark)', color: '#0e0d0c' },
  ],
};

// Inline pre-paint script: read saved theme (or system preference) and set
// `class="dark"` on <html> before the first paint, so there's no flash.
const themeBootstrap = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = stored || (prefersDark ? 'dark' : 'dark'); // default dark
      if (theme === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    } catch (_) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      {/* suppressHydrationWarning on <body>: Grammarly-style extensions inject
          attributes on <body> before React hydrates, which produces a noisy
          (and unactionable) mismatch warning. */}
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
