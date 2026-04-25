// Hand-drawn SVG doodles. Inlined so they pick up `currentColor`
// (theme-aware accent) and render at low opacity for a sketchy feel.

type DoodleProps = { className?: string; ariaHidden?: boolean };

export function Cyclist({ className = '' }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 70"
      role="img"
      aria-label="Bicycle doodle"
      className={`text-accent ${className}`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="28" cy="55" r="11" />
        <circle cx="92" cy="55" r="11" />
        <path d="M28 55 L55 55 L72 32 L82 55" />
        <path d="M55 55 L62 38 L72 32" />
        <path d="M62 38 L52 30" />
        <circle cx="74" cy="22" r="5" />
        <path d="M70 18 Q72 14 78 16" />
      </g>
    </svg>
  );
}

export function Signature({ className = '' }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 160 50"
      aria-hidden="true"
      className={`text-accent ${className}`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 35 Q14 8 22 32 L22 14 Q30 32 38 14" />
        <path d="M44 22 Q52 10 56 22 Q52 30 46 26 Q56 26 60 18" />
        <path d="M66 14 Q66 34 72 30 Q80 24 76 18 Q72 14 68 22" />
        <path d="M84 14 L84 32 M84 22 Q92 14 96 22 L96 32" />
        <path d="M104 22 Q112 10 116 22 Q112 30 106 26 Q116 26 120 18" />
        <path d="M126 30 Q138 8 150 30" />
        <path d="M8 42 Q60 48 150 42" opacity="0.5" />
      </g>
    </svg>
  );
}

export function Coffee({ className = '' }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      aria-hidden="true"
      className={`text-accent ${className}`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 30 L20 60 Q22 68 32 68 L48 68 Q58 68 60 60 L64 30 Z" />
        <path d="M64 36 Q74 38 72 50 Q70 58 62 56" />
        <path d="M28 22 Q26 14 32 12 M40 22 Q38 14 44 12 M52 22 Q50 14 56 12" opacity="0.6" />
      </g>
    </svg>
  );
}
