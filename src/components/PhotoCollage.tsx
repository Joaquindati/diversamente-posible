'use client';

import { EventPhoto } from '@/data/eventos';
import styles from './PhotoCollage.module.css';

interface PhotoCollageProps {
  photos: EventPhoto[];
  onPhotoClick: (index: number) => void;
}

/**
 * Slot definitions with their orientation requirement:
 * - 'landscape': only accepts images wider than tall (w > h)
 * - 'portrait':  prefers images taller than wide (h > w)
 * - 'any':       accepts any aspect ratio
 */
type SlotOrientation = 'landscape' | 'portrait' | 'any';

interface SlotDef {
  className: string;
  orientation: SlotOrientation;
}

const SLOTS: SlotDef[] = [
  { className: styles.topLeft,    orientation: 'portrait' },   // tall rect
  { className: styles.topCenter,  orientation: 'portrait' },   // small rect
  { className: styles.circle,     orientation: 'any' },        // circle (square crop)
  { className: styles.bottomLeft, orientation: 'any' },        // small square
  { className: styles.bottomWide, orientation: 'landscape' },  // wide rect
];

function isLandscape(photo: EventPhoto): boolean {
  return photo.width > photo.height;
}

function isPortrait(photo: EventPhoto): boolean {
  return photo.height > photo.width;
}

/**
 * Distributes photos into slots based on their aspect ratio:
 * - Landscape slots get landscape images (wider than tall)
 * - Portrait slots get portrait images (taller than wide)
 * - 'any' slots get whatever remains
 *
 * Returns an array of { photo, originalIndex } to preserve lightbox mapping.
 */
function distributePhotos(photos: EventPhoto[]) {
  const candidates = photos.slice(0, Math.max(photos.length, 5)).map((photo, i) => ({
    photo,
    originalIndex: i,
  }));

  const result: { photo: EventPhoto; originalIndex: number }[] = new Array(SLOTS.length);
  const used = new Set<number>();

  // Pass 1: fill landscape slots with landscape photos
  SLOTS.forEach((slot, slotIdx) => {
    if (slot.orientation !== 'landscape') return;
    const match = candidates.find((c) => !used.has(c.originalIndex) && isLandscape(c.photo));
    if (match) {
      result[slotIdx] = match;
      used.add(match.originalIndex);
    }
  });

  // Pass 2: fill portrait slots with portrait photos
  SLOTS.forEach((slot, slotIdx) => {
    if (slot.orientation !== 'portrait' || result[slotIdx]) return;
    const match = candidates.find((c) => !used.has(c.originalIndex) && isPortrait(c.photo));
    if (match) {
      result[slotIdx] = match;
      used.add(match.originalIndex);
    }
  });

  // Pass 3: fill remaining slots with whatever is left
  SLOTS.forEach((_slot, slotIdx) => {
    if (result[slotIdx]) return;
    const match = candidates.find((c) => !used.has(c.originalIndex));
    if (match) {
      result[slotIdx] = match;
      used.add(match.originalIndex);
    }
  });

  return result;
}

export function PhotoCollage({ photos, onPhotoClick }: PhotoCollageProps) {
  if (photos.length < 5) return null;

  const distributed = distributePhotos(photos);

  return (
    <div className={styles.collage}>
      {distributed.map((item, i) => {
        if (!item) return null;
        return (
          <button
            key={item.originalIndex}
            className={`${styles.cell} ${SLOTS[i].className}`}
            onClick={() => onPhotoClick(item.originalIndex)}
            aria-label={`Ver foto: ${item.photo.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.photo.src}
              alt={item.photo.alt}
              className={styles.image}
              loading="lazy"
            />
          </button>
        );
      })}
    </div>
  );
}
