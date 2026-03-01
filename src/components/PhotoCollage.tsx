'use client';

import { EventPhoto } from '@/data/eventos';
import styles from './PhotoCollage.module.css';

interface PhotoCollageProps {
  photos: EventPhoto[];
  onPhotoClick: (index: number) => void;
}

export function PhotoCollage({ photos, onPhotoClick }: PhotoCollageProps) {
  if (photos.length < 6) return null;

  const positions = [
    styles.topLeft,
    styles.topRight,
    styles.circle,
    styles.bottomLeft,
    styles.bottomCenter,
    styles.bottomRight,
  ];

  return (
    <div className={styles.collage}>
      {photos.slice(0, 6).map((photo, i) => (
        <button
          key={i}
          className={`${styles.cell} ${positions[i]}`}
          onClick={() => onPhotoClick(i)}
          aria-label={`Ver foto: ${photo.alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt}
            className={styles.image}
            loading="lazy"
          />
        </button>
      ))}
    </div>
  );
}
