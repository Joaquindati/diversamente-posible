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
  const ref = useRef<HTMLSpanElement>(null);
  let letterIndex = 0;

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
    <span ref={ref} className={className} style={{ fontFamily: "var(--font-display)" }}>
      {text.split("").map((char, i) => {
        if (char === " ") {
          return <span key={i} className={styles.space}>&nbsp;</span>;
        }
        const color = COLORS[letterIndex % COLORS.length];
        const delay = letterIndex * 0.05;
        letterIndex++;
        return (
          <span
            key={i}
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
