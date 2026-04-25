// Theme tokens. Mirrored as CSS variables in globals.css.
// Update both places when adjusting the palette.

export const themes = {
  dark: {
    bg: '#0e0d0c',
    bgSoft: '#161412',
    ink: '#f5efe6',
    inkSoft: 'rgba(245,239,230,0.62)',
    inkMute: 'rgba(245,239,230,0.42)',
    rule: 'rgba(245,239,230,0.10)',
    accent: '#e8895f',
    cardBg: 'rgba(255,255,255,0.025)',
    cardBorder: 'rgba(245,239,230,0.08)',
  },
  light: {
    bg: '#f5f1ea',
    bgSoft: '#ebe5da',
    ink: '#1a1714',
    inkSoft: 'rgba(26,23,20,0.65)',
    inkMute: 'rgba(26,23,20,0.42)',
    rule: 'rgba(26,23,20,0.10)',
    accent: '#b8401f',
    cardBg: '#faf7f1',
    cardBorder: 'rgba(26,23,20,0.10)',
  },
} as const;

export type ThemeName = keyof typeof themes;
