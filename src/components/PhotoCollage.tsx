'use client';

import { EventPhoto } from '@/data/eventos';
import styles from './PhotoCollage.module.css';

interface PhotoCollageProps {
  photos: EventPhoto[];
  onPhotoClick: (index: number) => void;
}

const SLOTS = [
  { className: styles.topLeft },
  { className: styles.topRight },
  { className: styles.bottomLeft },
  { className: styles.bottomRight },
];

export function PhotoCollage({ photos, onPhotoClick }: PhotoCollageProps) {
  if (photos.length < 4) return null;

  return (
    <div className={styles.collage}>
      {SLOTS.map((slot, i) => (
        <button
          key={i}
          className={`${styles.cell} ${slot.className}`}
          onClick={() => onPhotoClick(i)}
          aria-label={`Ver foto: ${photos[i].alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[i].src}
            alt={photos[i].alt}
            className={styles.image}
            loading="lazy"
          />
        </button>
      ))}
    </div>
  );
}
