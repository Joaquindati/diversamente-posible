'use client';

import { useState, useEffect } from 'react';
import styles from './StickyDonateButton.module.css';

export function StickyDonateButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://donaronline.org"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.stickyDonate} ${visible ? styles.visible : ''}`}
      aria-label="Realizar una donación"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <span className={styles.textFull}>QUIERO DONAR</span>
      <span className={styles.textShort}>DONAR</span>
    </a>
  );
}
