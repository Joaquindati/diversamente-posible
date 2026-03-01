'use client';

import { EventPhoto } from '@/data/eventos';
import styles from './SunburstGallery.module.css';

interface SunburstGalleryProps {
  photos: EventPhoto[];
  circlePhoto?: EventPhoto;
  onPhotoClick: (index: number) => void;
}

const CELLS = [
  { className: styles.topLeft },
  { className: styles.topRight },
  { className: styles.bottomLeft },
  { className: styles.bottomRight },
];

export function SunburstGallery({ photos, circlePhoto, onPhotoClick }: SunburstGalleryProps) {
  const circle = circlePhoto || photos[4];

  return (
    <div className={styles.gallery} role="group" aria-label="Galería de fotos">
      {CELLS.map((cell, i) => (
        photos[i] && (
          <button
            key={i}
            className={`${styles.cell} ${cell.className}`}
            onClick={() => onPhotoClick(i)}
            aria-label={`Ver foto: ${photos[i].alt}`}
            type="button"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[i].src}
              alt={photos[i].alt}
              className={styles.image}
              loading="lazy"
            />
          </button>
        )
      ))}
      {circle && (
        <button
          className={styles.circle}
          onClick={() => onPhotoClick(4)}
          aria-label={`Ver foto: ${circle.alt}`}
          type="button"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={circle.src}
            src={circle.src}
            alt={circle.alt}
            className={styles.circleImage}
            loading="lazy"
          />
        </button>
      )}
    </div>
  );
}
