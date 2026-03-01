'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ColoredTitle.module.css';

const COLORS = ["#0072b9", "#e63138", "#f8b00e", "#0072b9", "#009940", "#e63138", "#f8b00e"];

interface ColoredTitleProps {
  text: string;
  className?: string;
}

export function ColoredTitle({ text, className }: ColoredTitleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  let letterIndex = 0;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className} style={{ fontFamily: "var(--font-display)" }} aria-label={text}>
      {text.split("").map((char, i) => {
        if (char === " ") {
          return <span key={i} className={styles.space} aria-hidden="true">&nbsp;</span>;
        }
        const color = COLORS[letterIndex % COLORS.length];
        const delay = letterIndex * 0.05;
        letterIndex++;

        if (reducedMotion) {
          return (
            <span
              key={i}
              aria-hidden="true"
              style={{ color, opacity: 1 }}
            >
              {char}
            </span>
          );
        }

        return (
          <span
            key={i}
            aria-hidden="true"
            className={isVisible ? styles.letter : ''}
            style={{
              color,
              animationDelay: `${delay}s`,
              opacity: isVisible ? undefined : 0,
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}
