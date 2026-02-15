'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './EnfoqueSlider.module.css';

const PHRASES = [
  <>Nos posicionamos dentro del <strong>modelo social de la discapacidad</strong>: no se trata de una condición individual a &ldquo;corregir&rdquo; o &ldquo;adaptar&rdquo;.</>,
  <>Es <strong>la sociedad</strong> la que debe transformarse para garantizar verdaderas oportunidades.</>,
  <>La accesibilidad no depende de esfuerzos individuales ni de soluciones aisladas.</>,
  <>Nos comprometemos a impulsar <strong>acciones colectivas</strong> orientadas a transformar los entornos y las prácticas.</>,
  <>Promovemos <strong>redes de apoyo</strong> que hagan posible la participación activa de <strong>todas las personas</strong>, en su singularidad.</>,
];

export function EnfoqueSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);

  const advance = useCallback((to?: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(prev =>
        to !== undefined ? to : (prev + 1) % PHRASES.length
      );
      setFading(false);
    }, 350);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => advance(), 4500);
    return () => clearTimeout(t);
  }, [current, paused, advance]);

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`${styles.slide} ${fading ? styles.slideFading : ''}`}>
        <p>{PHRASES[current]}</p>
      </div>

      <div className={styles.dots}>
        {PHRASES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => advance(i)}
            aria-label={`Frase ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
