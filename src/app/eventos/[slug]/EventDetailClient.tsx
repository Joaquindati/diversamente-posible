'use client';

import { useState, useCallback } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ColoredTitle } from '@/components/ColoredTitle';
import { Reveal } from '@/components/Reveal';
import { PhotoCollage } from '@/components/PhotoCollage';
import { Lightbox } from '@/components/Lightbox';
import { StickyDonateButton } from '@/components/StickyDonateButton';
import { Evento } from '@/data/eventos';
import styles from './EventDetail.module.css';

interface Props {
  evento: Evento;
}

export function EventDetailClient({ evento }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + evento.photos.length) % evento.photos.length : null
    );
  }, [evento.photos.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % evento.photos.length : null
    );
  }, [evento.photos.length]);

  return (
    <main className={styles.main}>
      <Navbar basePath="/" />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal direction="up" delay={0.1}>
            <a href="/#momentos" className={styles.backLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Volver al inicio
            </a>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <span className={styles.dateBadge} style={{ backgroundColor: evento.accentColor }}>
              {evento.date}
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <h1 className={styles.title}>
              <ColoredTitle text={evento.title.toUpperCase()} />
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <p className={styles.description}>{evento.longDescription}</p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallerySection}>
        <div className="container">
          <Reveal direction="up">
            <h2 className={styles.galleryTitle}>
              <ColoredTitle text="GALERÍA DE FOTOS" />
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <PhotoCollage photos={evento.photos} onPhotoClick={openLightbox} />
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div className={styles.galleryActions}>
              <button
                className={`btn btn-primary ${styles.viewAllBtn}`}
                onClick={() => openLightbox(0)}
              >
                Ver todas las fotos
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer basePath="/" />
      <StickyDonateButton />

      {lightboxIndex !== null && (
        <Lightbox
          photos={evento.photos}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </main>
  );
}
