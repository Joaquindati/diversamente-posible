'use client';

import React, { useEffect, useRef, useState, CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;          // segundos
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
  style?: CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

const OFFSETS: Record<string, string> = {
  up:    'translateY(40px)',
  down:  'translateY(-40px)',
  left:  'translateX(40px)',
  right: 'translateX(-40px)',
  scale: 'scale(0.85)',
};

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  style,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const baseStyle: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : OFFSETS[direction],
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    ...style,
  };

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={baseStyle}>
      {children}
    </Tag>
  );
}
