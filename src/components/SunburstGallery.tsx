'use client';

import { useState, useEffect, useRef } from 'react';
import { EventPhoto } from '@/data/eventos';
import styles from './SunburstGallery.module.css';

interface SunburstGalleryProps {
  photos: EventPhoto[][];
  currentSlide: number;
  onPhotoClick: (index: number) => void;
}

const CELLS = [
  { className: styles.topLeft },
  { className: styles.topRight },
  { className: styles.bottomLeft },
  { className: styles.bottomRight },
];

const STAGGER_DELAY = 180; // ms between each photo transition

export function SunburstGallery({ photos, currentSlide, onPhotoClick }: SunburstGalleryProps) {
  // Each cell tracks its own displayed photo independently
  const [cellPhotos, setCellPhotos] = useState(() => photos[currentSlide % photos.length]);
  const [fadingCells, setFadingCells] = useState<boolean[]>([false, false, false, false]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const nextPhotos = photos[currentSlide % photos.length];

    // Clear any pending timers
    timersRef.current.forEach(t => clearTimeout(t));
    timersRef.current = [];

    // Stagger: fade out cell i, then swap its photo and fade back in
    for (let i = 0; i < 4; i++) {
      const delay = i * STAGGER_DELAY;

      // Fade out
      const tOut = setTimeout(() => {
        setFadingCells(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, delay);

      // Swap photo + fade in
      const tIn = setTimeout(() => {
        setCellPhotos(prev => {
          const next = [...prev];
          next[i] = nextPhotos[i];
          return next;
        });
        setFadingCells(prev => {
          const next = [...prev];
          next[i] = false;
          return next;
        });
      }, delay + 250);

      timersRef.current.push(tOut, tIn);
    }

    return () => {
      timersRef.current.forEach(t => clearTimeout(t));
    };
  }, [currentSlide, photos]);

  return (
    <div className={styles.gallery} role="group" aria-label="Galeria de fotos">
      {CELLS.map((cell, i) => (
        cellPhotos[i] && (
          <button
            key={i}
            className={`${styles.cell} ${cell.className} ${fadingCells[i] ? styles.cellFading : ''}`}
            onClick={() => onPhotoClick(currentSlide * 4 + i)}
            aria-label={`Ver foto: ${cellPhotos[i].alt}`}
            type="button"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cellPhotos[i].src}
              alt={cellPhotos[i].alt}
              className={styles.image}
              loading="lazy"
            />
          </button>
        )
      ))}
    </div>
  );
}
