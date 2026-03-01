'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './EnfoqueSlider.module.css';

const SLIDES = [
  { text: <>Nos posicionamos dentro del <strong>modelo social de la discapacidad</strong>: no se trata de una condición individual a &ldquo;corregir&rdquo; o &ldquo;adaptar&rdquo;.</>, author: null },
  { text: <>Es <strong>la sociedad</strong> la que debe transformarse para garantizar verdaderas oportunidades.</>, author: null },
  { text: <>La accesibilidad no depende de esfuerzos individuales ni de soluciones aisladas.</>, author: null },
  { text: <>Nos comprometemos a impulsar <strong>acciones colectivas</strong> orientadas a transformar los entornos y las prácticas.</>, author: null },
  { text: <>Promovemos <strong>redes de apoyo</strong> que hagan posible la participación activa de <strong>todas las personas</strong>, en su singularidad.</>, author: null },
  { text: <>&ldquo;La experiencia en la playa cambió nuestra vida como familia. Ver a mi hijo disfrutar del mar con total autonomía fue increíble.&rdquo;</>, author: 'Familia García' },
  { text: <>&ldquo;Gracias a las bicicletas recicladas, mi hija pudo participar de su primera carrera. No dejó de sonreír en todo el día.&rdquo;</>, author: 'Familia Rodríguez' },
  { text: <>&ldquo;Lo que más valoramos es el espacio de encuentro. Acá no hay diferencias, hay personas disfrutando juntas.&rdquo;</>, author: 'Familia López' },
  { text: <>&ldquo;Ser voluntario en Diversamente Posibles me enseñó que las verdaderas barreras están en los entornos, no en las personas.&rdquo;</>, author: 'Martín, voluntario' },
];

export function EnfoqueSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const advance = useCallback((to?: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(prev =>
        to !== undefined ? to : (prev + 1) % SLIDES.length
      );
      setFading(false);
    }, 350);
  }, []);

  const goNext = useCallback(() => {
    advance((current + 1) % SLIDES.length);
  }, [current, advance]);

  const goPrev = useCallback(() => {
    advance((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, advance]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => advance(), 4500);
    return () => clearTimeout(t);
  }, [current, paused, advance]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
  }, [goNext, goPrev]);

  const currentSlide = SLIDES[current];

  return (
    <div
      ref={sliderRef}
      className={styles.slider}
      role="region"
      aria-label="Testimonios"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={goPrev}
        aria-label="Testimonio anterior"
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className={styles.slideArea}>
        <div
          className={`${styles.slide} ${fading ? styles.slideFading : ''}`}
          aria-live="polite"
        >
          <p>{currentSlide.text}</p>
          {currentSlide.author && (
            <p className={styles.author}>— {currentSlide.author}</p>
          )}
        </div>
      </div>

      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={goNext}
        aria-label="Testimonio siguiente"
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className={styles.controls}>
        <div className={styles.dots}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => advance(i)}
              aria-label={`Testimonio ${i + 1}`}
              type="button"
            />
          ))}
        </div>
        <button
          className={styles.pauseBtn}
          onClick={() => setPaused(p => !p)}
          aria-label={paused ? 'Reproducir testimonios' : 'Pausar testimonios'}
          type="button"
        >
          {paused ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="5 3 19 12 5 21" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
