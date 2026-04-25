'use client';

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

// Fades + lifts content into view once it intersects the viewport.
// Disconnects after the first intersection so each element animates only once.
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  style,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={['px-reveal', shown ? 'px-reveal--in' : '', className].filter(Boolean).join(' ')}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms', ...style }}
    >
      {children}
    </Tag>
  );
}
