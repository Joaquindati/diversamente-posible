'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './StickyDonateButton.module.css';

type Variant = 'light' | 'dark' | 'yellow';

function getLuminance(r: number, g: number, b: number) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function parseColor(color: string): [number, number, number] | null {
  if (color.startsWith('rgb')) {
    const m = color.match(/(\d+)/g);
    if (m && m.length >= 3) return [+m[0], +m[1], +m[2]];
  }
  return null;
}

export function StickyDonateButton() {
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<Variant>('light');
  const [atFooter, setAtFooter] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  const detect = useCallback(() => {
    if (!ref.current) return;

    setVisible(window.scrollY > window.innerHeight * 0.8);

    // Detect if button overlaps with footer
    const footer = document.querySelector('footer');
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      const btnRect = ref.current.getBoundingClientRect();
      setAtFooter(btnRect.bottom >= footerRect.top);
    }

    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    ref.current.style.pointerEvents = 'none';
    const el = document.elementFromPoint(cx, cy);
    ref.current.style.pointerEvents = '';

    if (!el) return;

    let node: Element | null = el;
    let bg: string | null = null;

    while (node && node !== document.documentElement) {
      const computed = getComputedStyle(node).backgroundColor;
      if (computed && computed !== 'rgba(0, 0, 0, 0)' && computed !== 'transparent') {
        bg = computed;
        break;
      }
      node = node.parentElement;
    }

    if (!bg) {
      setVariant('light');
      return;
    }

    const rgb = parseColor(bg);
    if (!rgb) {
      setVariant('light');
      return;
    }

    // Detect yellow background (high R, medium G, low B)
    const [r, g, b] = rgb;
    const isYellow = r > 200 && g > 140 && g < 200 && b < 50;

    if (isYellow) {
      setVariant('yellow');
    } else {
      const lum = getLuminance(...rgb);
      setVariant(lum < 0.4 ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    detect();
    window.addEventListener('scroll', detect, { passive: true });
    return () => window.removeEventListener('scroll', detect);
  }, [detect]);

  const cls = [
    styles.stickyDonate,
    visible ? styles.visible : '',
    variant === 'dark' ? styles.onDark : '',
    variant === 'yellow' ? styles.onYellow : '',
  ].filter(Boolean).join(' ');

  return (
    <a
      ref={ref}
      href="https://donaronline.org"
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      aria-label="Realizar una donación"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={`${styles.icon} ${atFooter ? styles.iconAtFooter : ''}`}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <span className={styles.textFull}>QUIERO DONAR</span>
      <span className={styles.textShort}>DONAR</span>
    </a>
  );
}
