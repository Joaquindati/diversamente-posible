'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ColoredTitle.module.css';

const COLORS = ["#0072b9", "#e63138", "#f8b00e", "#0072b9", "#009940", "#e63138", "#f8b00e"];

const ANIMATED_WORDS = ['SIMPLE', 'POSIBLE'];

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

  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={{ fontFamily: "var(--font-display)" }} aria-label={text}>
      {words.map((word, wi) => {
        const isAnimatedWord = ANIMATED_WORDS.includes(word);
        const letters = word.split("").map((char) => {
          const color = COLORS[letterIndex % COLORS.length];
          const delay = letterIndex * 0.05;
          letterIndex++;

          if (reducedMotion) {
            return (
              <span
                key={`${wi}-${letterIndex}`}
                aria-hidden="true"
                style={{ color, opacity: 1 }}
              >
                {char}
              </span>
            );
          }

          return (
            <span
              key={`${wi}-${letterIndex}`}
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
        });

        return (
          <span key={wi}>
            {isAnimatedWord && !reducedMotion ? (
              <span className={styles.wordPulse}>{letters}</span>
            ) : (
              letters
            )}
            {wi < words.length - 1 && (
              <span className={styles.space} aria-hidden="true">&nbsp;</span>
            )}
          </span>
        );
      })}
    </span>
  );
}
