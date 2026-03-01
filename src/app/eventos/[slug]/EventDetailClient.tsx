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
import homeStyles from '@/app/page.module.css';

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

      {/* ───── INSCRIPCIÓN A EVENTOS ───── */}
      <section className={homeStyles.proximamenteSection} aria-labelledby="ev-inscripcion-heading">
        <div className="container">
          <Reveal direction="up" className="text-center">
            <span className={homeStyles.proximamenteBadge}>Próximamente</span>
            <h2 id="ev-inscripcion-heading">
              <ColoredTitle text="INSCRIPCIÓN A EVENTOS" />
            </h2>
            <p className={homeStyles.sectionSubtitle}>
              Inscribite a nuestras actividades, maratones y jornadas deportivas.
            </p>
          </Reveal>

          <div className={homeStyles.inscripcionForm}>
            <label htmlFor="ev-inscripcion-nombre" className="sr-only">Nombre completo</label>
            <input
              id="ev-inscripcion-nombre"
              type="text"
              placeholder="Nombre completo"
              className={homeStyles.formInput}
              disabled
              aria-disabled="true"
            />
            <label htmlFor="ev-inscripcion-email" className="sr-only">Email</label>
            <input
              id="ev-inscripcion-email"
              type="email"
              placeholder="Email"
              className={homeStyles.formInput}
              disabled
              aria-disabled="true"
            />
            <label htmlFor="ev-inscripcion-evento" className="sr-only">Seleccionar evento</label>
            <select id="ev-inscripcion-evento" disabled aria-disabled="true">
              <option value="">Seleccioná un evento</option>
              <option value="maraton">Nuestra Maratón 2026</option>
              <option value="surf">Jornada de Surf</option>
              <option value="bici">Carrera en Bici</option>
            </select>
            <label htmlFor="ev-inscripcion-comentarios" className="sr-only">Comentarios</label>
            <textarea
              id="ev-inscripcion-comentarios"
              placeholder="Comentarios (opcional)"
              disabled
              aria-disabled="true"
            />
            <button className="btn btn-primary" disabled aria-disabled="true" style={{ width: '100%' }}>
              Inscribirme
            </button>
          </div>
          <p className={homeStyles.proximamenteNote}>
            Esta sección es un ejemplo funcional. El formulario no envía datos aún.
          </p>
        </div>
      </section>

      {/* ───── CÓMO AYUDAR ───── */}
      <section className={homeStyles.ayudarSection} aria-labelledby="ev-ayudar-heading">
        <div className="container text-center">
          <Reveal direction="up">
            <h2 id="ev-ayudar-heading" className={homeStyles.whiteTitle}>¿CÓMO PODÉS AYUDAR?</h2>
            <p className={homeStyles.ayudarSubtitle}>
              Hay muchas formas de sumarte a nuestra causa. Elegí la que más se adapte a vos.
            </p>
          </Reveal>

          <div className={homeStyles.helpGrid}>
            <Reveal direction="up" delay={0.1}>
              <div className={homeStyles.helpCard}>
                <svg className={homeStyles.helpIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <h3>Realizá una Donación</h3>
                <p>
                  Tu aporte nos permite seguir fabricando equipamiento, organizar actividades
                  y generar verdaderas oportunidades para más personas.
                </p>
                <a
                  href="https://donaronline.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white btn-hover-red"
                >
                  Donar ahora
                </a>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <div className={homeStyles.helpCard}>
                <svg className={homeStyles.helpIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
                <h3>Quiero Unirme</h3>
                <p>
                  Sé parte de nuestro equipo de voluntarios/as y profesionales. Juntos
                  transformamos entornos y prácticas cada fin de semana.
                </p>
                <a
                  href="https://wa.me/5492246496999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white btn-hover-green"
                >
                  Escribinos
                </a>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className={homeStyles.helpCard}>
                <svg className={homeStyles.helpIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                </svg>
                <h3>Unamos Fuerzas</h3>
                <p>
                  Si sos empresa u organización, podemos crear alianzas estratégicas para
                  impulsar acciones colectivas y multiplicar el impacto.
                </p>
                <a href="mailto:contacto@diversamenteposibles.org" className="btn btn-white btn-hover-yellow">
                  Contactar
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── CONTACTO ───── */}
      <section className="section" aria-labelledby="ev-contacto-heading">
        <div className="container">
          <Reveal direction="up" className="text-center" style={{ marginBottom: '60px' }}>
            <h2 id="ev-contacto-heading">
              <ColoredTitle text="CONTACTO" />
            </h2>
            <p className={homeStyles.sectionSubtitle}>
              ¿Tenés dudas, ideas o querés sumarte? Escribinos, estamos para vos.
            </p>
          </Reveal>

          <div className={homeStyles.contactGrid}>
            <Reveal direction="left" className={homeStyles.contactInfo}>
              <h3>Información de contacto</h3>

              <div className={homeStyles.contactItem}>
                <span className={homeStyles.contactIcon} aria-hidden="true">📧</span>
                <div>
                  <strong>Dirección General</strong>
                  <p>
                    <a href="mailto:contacto@diversamenteposibles.org">
                      contacto@diversamenteposibles.org
                    </a>
                  </p>
                  <p>
                    <a href="https://wa.me/5492246496999" target="_blank" rel="noopener noreferrer">
                      +54 9 2246 49-6999
                    </a>
                  </p>
                </div>
              </div>

              <div className={homeStyles.contactItem}>
                <span className={homeStyles.contactIcon} aria-hidden="true">👥</span>
                <div>
                  <strong>Gestión de Personas</strong>
                  <p>
                    <a href="mailto:personal@diversamenteposibles.org">
                      personal@diversamenteposibles.org
                    </a>
                  </p>
                  <p>
                    <a href="https://wa.me/5492246584769" target="_blank" rel="noopener noreferrer">
                      +54 9 2246 58-4769
                    </a>
                  </p>
                </div>
              </div>

              <div className={homeStyles.contactItem}>
                <span className={homeStyles.contactIcon} aria-hidden="true">📍</span>
                <div>
                  <strong>Sede Social</strong>
                  <p>Av 6 nro 1217 - Costa del Este - Partido de la Costa - Provincia de Buenos Aires</p>
                </div>
              </div>

              <div className={homeStyles.socialRow}>
                <a
                  href="https://instagram.com/diversamenteposibles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${homeStyles.socialBtn} ${homeStyles.socialBtnRed}`}
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com/DiversamentePosibles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${homeStyles.socialBtn} ${homeStyles.socialBtnGreen}`}
                >
                  Facebook
                </a>
              </div>
            </Reveal>

            <Reveal direction="right" className={homeStyles.newsletterBox}>
              <h3>Suscribite a nuestro newsletter</h3>
              <p>Enterate de nuestras actividades, novedades y cómo podés ser parte.</p>
              <form className={homeStyles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="ev-newsletter-name" className="sr-only">Tu nombre</label>
                <input
                  id="ev-newsletter-name"
                  type="text"
                  placeholder="Tu nombre"
                  className={homeStyles.formInput}
                />
                <label htmlFor="ev-newsletter-email" className="sr-only">Tu email</label>
                <input
                  id="ev-newsletter-email"
                  type="email"
                  placeholder="Tu email"
                  className={homeStyles.formInput}
                />
                <button type="submit" className="btn btn-primary btn-hover-green" style={{ width: '100%' }}>
                  Suscribirme
                </button>
              </form>
            </Reveal>
          </div>
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
