'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ColoredTitle } from '@/components/ColoredTitle';
import { Reveal } from '@/components/Reveal';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import { EnfoqueSlider } from '@/components/EnfoqueSlider';
import { StickyDonateButton } from '@/components/StickyDonateButton';
import { SunburstGallery } from '@/components/SunburstGallery';
import { Lightbox } from '@/components/Lightbox';
import { eventos, EventPhoto } from '@/data/eventos';
import styles from './page.module.css';

const allPhotos: EventPhoto[] = Array.from({ length: 19 }, (_, i) => ({
  src: `/images/galeria-${i + 1}.jpg`,
  alt: `Actividad Diversamente Posibles ${i + 1}`,
  width: 600,
  height: 400,
}));

// Group photos into sets of 4 for each slide
const gallerySlides: EventPhoto[][] = [];
for (let i = 0; i < 9; i++) {
  gallerySlides.push([
    allPhotos[(i * 4) % allPhotos.length],
    allPhotos[(i * 4 + 1) % allPhotos.length],
    allPhotos[(i * 4 + 2) % allPhotos.length],
    allPhotos[(i * 4 + 3) % allPhotos.length],
  ]);
}

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex(prev =>
      prev !== null ? (prev - 1 + allPhotos.length) % allPhotos.length : null
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex(prev =>
      prev !== null ? (prev + 1) % allPhotos.length : null
    );
  }, []);
  return (
    <main id="main-content" className={styles.main}>
      <Navbar />

      {/* ───── HERO ───── */}
      <section id="inicio" className={styles.hero}>
        <div className={`container text-center ${styles.heroContainer}`}>
          <Reveal direction="scale" delay={0.1}>
            <h1 className={styles.heroTitle}>
              <ColoredTitle text="UN MUNDO SIMPLE Y POSIBLE" />
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className={styles.heroText}>
              Somos una organización dedicada a la creación de espacios de convivencia y respeto
              entre personas con y sin discapacidad a través de actividades recreativas y deportivas
              basadas en la <strong>accesibilidad</strong> y el <strong>diseño universal</strong>.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.5}>
            <div className={styles.heroButtons}>
              <a
                href="https://donaronline.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-hover-red"
              >
                FORMA PARTE DE NUESTRA CAUSA
              </a>
              <a
                href="https://wa.me/5492246496999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-hover-green"
              >
                Quiero involucrarme
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── NOSOTROS ───── */}
      <section id="nosotros" className="section" aria-labelledby="nosotros-heading">
        <div className="container">
          <Reveal direction="up" className="text-center" style={{ marginBottom: '60px' }}>
            <h2 id="nosotros-heading">
              <ColoredTitle text="¿QUIÉNES SOMOS?" />
            </h2>
          </Reveal>

          <div className={styles.twoCol}>
            <Reveal direction="left" className={styles.colText}>
              <p>
                Todo empezó con un deseo: <strong>Lourdes</strong> soñaba con correr una carrera en bicicleta.
                Su papá, <strong>Ignacio Calabró</strong>, junto a un amigo, decidieron hacerlo posible y
                crearon una bici que pudiera trasladarla. Al ver su alegría, entendió que ese sueño
                podía ser compartido.
              </p>
              <p>
                Así nació en <strong>2020 Diversamente Posibles</strong>, una organización dedicada a la
                creación de espacios de convivencia y respeto entre personas con y sin discapacidad
                a través de actividades recreativas y deportivas basadas en la accesibilidad y el
                diseño universal.
              </p>
              <p style={{ marginBottom: 0 }}>
                Hoy somos una gran comunidad que cree en las verdaderas oportunidades: logramos
                reciclar <strong>35 bicicletas</strong>, patentar nuestro diseño de <strong>silla anfibia</strong> e
                inaugurar nuestra <strong>sede social en Costa del Este</strong>, Buenos Aires.
              </p>
            </Reveal>
            <div className={styles.colStats}>
              <Reveal direction="right" delay={0.1}>
                <div className={`${styles.statCard} ${styles.statCardGreen}`}>
                  <AnimatedNumber value="35" className={styles.statNumber} />
                  <span className={styles.statLabel}>Bicicletas recicladas</span>
                </div>
              </Reveal>
              <Reveal direction="right" delay={0.25}>
                <div className={`${styles.statCard} ${styles.statCardYellow}`}>
                  <AnimatedNumber value="200+" className={styles.statNumber} />
                  <span className={styles.statLabel}>Bicicletas donadas</span>
                </div>
              </Reveal>
              <Reveal direction="right" delay={0.4}>
                <div className={`${styles.statCard} ${styles.statCardRed}`}>
                  <AnimatedNumber value="12" className={styles.statNumber} />
                  <span className={styles.statLabel}>Sillas anfibias</span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Enfoque / Testimonios + Galería + Misión/Visión/Valores */}
          <div className={styles.nosotrosGrid}>
            <Reveal direction="left" className={styles.nosotrosSlider}>
              <EnfoqueSlider onSlideChange={handleSlideChange} />
            </Reveal>
            <Reveal direction="right" className={styles.nosotrosGallery}>
              <SunburstGallery
                photos={gallerySlides}
                currentSlide={currentSlide}
                onPhotoClick={openLightbox}
              />
            </Reveal>

            <Reveal direction="up" delay={0} style={{ height: '100%' }}>
              <div className={`${styles.mvCard} ${styles.mvCardRed}`}>
                <h3>Nuestra Misión</h3>
                <p>
                  Hacer posible el encuentro y la convivencia entre todas las personas a través
                  de propuestas deportivas y recreativas basadas en el diseño universal y el
                  enfoque de derechos.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.15} style={{ height: '100%' }}>
              <div className={`${styles.mvCard} ${styles.mvCardGreen}`}>
                <h3>Nuestra Visión</h3>
                <p>
                  Transformar el mundo generando verdaderas oportunidades, donde cada persona
                  tenga la oportunidad de participar, disfrutar y crecer.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3} style={{ height: '100%' }}>
              <div className={`${styles.mvCard} ${styles.mvCardYellow}`}>
                <h3>Nuestros Valores</h3>
                <div className={styles.valoresGrid}>
                  <span className={styles.valorItem}>Innovación</span>
                  <span className={styles.valorItem}>Transformación</span>
                  <span className={styles.valorItem}>Dignidad</span>
                  <span className={styles.valorItem}>Autonomía</span>
                  <span className={styles.valorItem}>Sustentabilidad</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── PROGRAMAS ───── */}
      <section id="programas" className={styles.programasSection} aria-labelledby="programas-heading">
        <div className="container">
          <Reveal direction="up" className="text-center" style={{ marginBottom: '60px' }}>
            <h2 id="programas-heading">
              <ColoredTitle text="NUESTROS PROYECTOS" />
            </h2>
            <p className={styles.sectionSubtitle}>
              Iniciativas que transforman entornos y generan verdaderas oportunidades
              a través del deporte y la movilidad accesible.
            </p>
          </Reveal>

          {/* Programa 1 - Bici */}
          <div className={styles.programaRow}>
            <Reveal direction="left" className={styles.programaText}>
              <span className={styles.programaBadge} style={{ backgroundColor: 'var(--color-green)' }}>
                Movilidad Accesible
              </span>
              <h3 style={{ marginTop: '16px' }}>
                <ColoredTitle text="DisfrutArte en Bici" />
              </h3>
              <p>
                Contamos con <strong>30 bicicletas recicladas y reacondicionadas</strong> y con más
                de <strong>200 donadas</strong> que aguardan ser intervenidas. Cada pedaleada, cada
                evento, cada carrera compartida es una manera de encontrarnos y de continuar
                fortaleciendo la accesibilidad en lo cotidiano.
              </p>
              <div className={styles.equipGrid}>
                <div className={styles.equipItem}>
                  <AnimatedNumber value="30" className={styles.equipNum} />
                  <span>Bicicletas recicladas</span>
                </div>
                <div className={styles.equipItem}>
                  <AnimatedNumber value="200+" className={styles.equipNum} />
                  <span>Donadas en espera</span>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" className={styles.programaVisual}>
              <Image
                src="/images/disfrutarte_bici.png"
                alt="DisfrutArte en Bici"
                width={400}
                height={300}
                className={styles.programaImage}
              />
            </Reveal>
          </div>

          {/* Programa 2 - Surf */}
          <div className={`${styles.programaRow} ${styles.programaRowReverse}`}>
            <Reveal direction="right" className={styles.programaText}>
              <span className={styles.programaBadge} style={{ backgroundColor: 'var(--color-blue)' }}>
                Deporte para Personas con Discapacidad
              </span>
              <h3 style={{ marginTop: '16px' }}>
                <ColoredTitle text="DisfrutArte en Surf" />
              </h3>
              <p>
                Contamos con nuestra propia <strong>Escuelita de Surf</strong> equipada con todo lo
                necesario para disfrutar del mar. Desde hace <strong>4 años</strong>, este espacio
                recreativo-deportivo brinda la posibilidad a personas de disfrutar del mar con
                total autonomía y seguridad.
              </p>
              <div className={styles.equipGrid}>
                <div className={styles.equipItem}>
                  <AnimatedNumber value="12" className={styles.equipNum} />
                  <span>Sillas anfibias</span>
                </div>
                <div className={styles.equipItem}>
                  <AnimatedNumber value="7" className={styles.equipNum} />
                  <span>Tablas de surf</span>
                </div>
                <div className={styles.equipItem}>
                  <AnimatedNumber value="3" className={styles.equipNum} />
                  <span>Botes</span>
                </div>
                <div className={styles.equipItem}>
                  <AnimatedNumber value="10" className={styles.equipNum} />
                  <span>Bodyboards</span>
                </div>
                <div className={styles.equipItem}>
                  <AnimatedNumber value="5" className={styles.equipNum} />
                  <span>Skimboards</span>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" className={styles.programaVisual}>
              <Image
                src="/images/disfrutarte_surf.png"
                alt="DisfrutArte en Surf"
                width={400}
                height={300}
                className={`${styles.programaImage} ${styles.programaImageRight}`}
              />
            </Reveal>
          </div>

          {/* Programa 3 - ReciclArte */}
          <div className={styles.programaRow}>
            <Reveal direction="left" className={styles.programaText}>
              <span className={styles.programaBadge} style={{ backgroundColor: 'var(--color-green)' }}>
                Sustentabilidad
              </span>
              <h3 style={{ marginTop: '16px' }}>
                <ColoredTitle text="ReciclArte" />
              </h3>
              <p>
                Un proyecto que une <strong>sustentabilidad y creatividad</strong>. Recuperamos materiales
                en desuso para transformarlos en recursos útiles y obras de arte colectivo. Cada
                objeto reciclado es una oportunidad de aprendizaje, participación y cuidado
                del medio ambiente.
              </p>
              <div className={styles.equipGrid}>
                <div className={styles.equipItem}>
                  <svg className={styles.equipIcon} viewBox="0 0 24 24" fill="var(--color-green)" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  <span>Materiales recuperados</span>
                </div>
                <div className={styles.equipItem}>
                  <svg className={styles.equipIcon} viewBox="0 0 24 24" fill="var(--color-yellow)" aria-hidden="true"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 0 0 0-1.41z"/></svg>
                  <span>Arte colectivo</span>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" className={styles.programaVisual}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/reciclarte.jpg"
                alt="Proyecto ReciclArte"
                className={styles.programaImage}
              />
            </Reveal>
          </div>

          {/* Programa 4 - Maratón */}
          <div className={`${styles.programaRow} ${styles.programaRowReverse}`}>
            <Reveal direction="right" className={styles.programaText}>
              <span className={styles.programaBadge} style={{ backgroundColor: 'var(--color-red)' }}>
                Evento Deportivo
              </span>
              <h3 style={{ marginTop: '16px' }}>
                <ColoredTitle text="Nuestra Maratón" />
              </h3>
              <p>
                Un evento deportivo que convoca a toda la comunidad. Nuestra maratón es un punto de
                encuentro donde <strong>personas con y sin discapacidad</strong> comparten un mismo
                recorrido, celebrando la diversidad y el movimiento como herramientas de
                transformación social.
              </p>
              <div className={styles.equipGrid}>
                <div className={styles.equipItem}>
                  <svg className={styles.equipIcon} viewBox="0 0 24 24" fill="var(--color-blue)" aria-hidden="true"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/></svg>
                  <span>Participantes</span>
                </div>
                <div className={styles.equipItem}>
                  <svg className={styles.equipIcon} viewBox="0 0 24 24" fill="var(--color-red)" aria-hidden="true"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                  <span>Encuentro comunitario</span>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" className={styles.programaVisual}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/maraton.jpg"
                alt="Nuestra Maratón"
                className={`${styles.programaImage} ${styles.programaImageRight}`}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── CAMPAÑA ───── */}
      <section className={styles.campanaSection} aria-labelledby="campana-heading">
        <div className="container text-center">
          <Reveal direction="up">
            <h2 id="campana-heading" className={styles.campanaTitle}>
              ¿Te imaginas llegar con 1000 Bicicletas y 1000 Sillas a todo el país?
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className={styles.campanaCta}>¿Te sumás?</p>
            <div className={styles.campanaButtons}>
              <a
                href="https://donaronline.org"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.btnCampana} btn-hover-blue`}
              >
                QUIERO SUMARME
              </a>
              <a
                href="https://wa.me/5492246496999"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.btnOutlineDark} btn-hover-red`}
              >
                Hablar con el equipo
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── MOMENTOS DESTACADOS ───── */}
      <section id="momentos" className={styles.momentosSection} aria-labelledby="momentos-heading">
        <div className="container">
          <Reveal direction="up" className="text-center">
            <h2 id="momentos-heading">
              <ColoredTitle text="MOMENTOS DESTACADOS" />
            </h2>
            <p className={styles.sectionSubtitle}>
              Notas de prensa, reconocimientos y eventos que marcaron nuestro camino.
            </p>
          </Reveal>

          <div className={styles.momentosGrid}>
            {eventos.map((evento, i) => (
              <Reveal key={evento.slug} direction="up" delay={0.1 * (i + 1)} style={{ height: '100%' }}>
                <Link href={`/eventos/${evento.slug}`} className={styles.momentoCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={evento.coverImage}
                    alt={evento.coverAlt}
                    className={styles.momentoImage}
                  />
                  <div className={styles.momentoContent}>
                    <h3>{evento.title}</h3>
                    <p>{evento.shortDescription}</p>
                    <span className={styles.momentoLink}>Leer más</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── INSCRIPCIÓN A EVENTOS (Próximamente) ───── */}
      <section id="inscripcion" className={styles.proximamenteSection} aria-labelledby="inscripcion-heading">
        <div className="container">
          <Reveal direction="up" className="text-center">
            <span className={styles.proximamenteBadge}>Próximamente</span>
            <h2 id="inscripcion-heading">
              <ColoredTitle text="INSCRIPCIÓN A EVENTOS" />
            </h2>
            <p className={styles.sectionSubtitle}>
              Inscribite a nuestras actividades, maratones y jornadas deportivas.
            </p>
          </Reveal>

          <div className={styles.inscripcionForm}>
            <label htmlFor="inscripcion-nombre" className="sr-only">Nombre completo</label>
            <input
              id="inscripcion-nombre"
              type="text"
              placeholder="Nombre completo"
              className={styles.formInput}
              disabled
              aria-disabled="true"
            />
            <label htmlFor="inscripcion-email" className="sr-only">Email</label>
            <input
              id="inscripcion-email"
              type="email"
              placeholder="Email"
              className={styles.formInput}
              disabled
              aria-disabled="true"
            />
            <label htmlFor="inscripcion-evento" className="sr-only">Seleccionar evento</label>
            <select id="inscripcion-evento" disabled aria-disabled="true">
              <option value="">Seleccioná un evento</option>
              <option value="maraton">Nuestra Maratón 2026</option>
              <option value="surf">Jornada de Surf</option>
              <option value="bici">Carrera en Bici</option>
            </select>
            <label htmlFor="inscripcion-comentarios" className="sr-only">Comentarios</label>
            <textarea
              id="inscripcion-comentarios"
              placeholder="Comentarios (opcional)"
              disabled
              aria-disabled="true"
            />
            <button className="btn btn-primary" disabled aria-disabled="true" style={{ width: '100%' }}>
              Inscribirme
            </button>
          </div>
          <p className={styles.proximamenteNote}>
            Esta sección es un ejemplo funcional. El formulario no envía datos aún.
          </p>
        </div>
      </section>

      {/* ───── TIENDA (Próximamente) ───── */}
      <section id="tienda" className={`${styles.proximamenteSection} ${styles.proximamenteBg}`} aria-labelledby="tienda-heading">
        <div className="container">
          <Reveal direction="up" className="text-center">
            <span className={styles.proximamenteBadge}>Próximamente</span>
            <h2 id="tienda-heading">
              <ColoredTitle text="NUESTRA TIENDA" />
            </h2>
            <p className={styles.sectionSubtitle}>
              Merchandising oficial de Diversamente Posibles. Tu compra apoya directamente nuestros proyectos.
            </p>
          </Reveal>

          <div className={styles.tiendaGrid}>
            {[
              { name: 'Remera Diversamente', price: '$15.000', img: '/images/tienda-remera.jpg' },
              { name: 'Banderas', price: '$8.000', img: '/images/tienda-banderas.jpg' },
              { name: 'Stickers Pack', price: '$3.000', img: '/images/tienda-stickers.jpg' },
            ].map((product) => (
              <Reveal key={product.name} direction="up">
                <div className={styles.tiendaCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.img}
                    alt={`${product.name} — imagen placeholder`}
                    className={styles.tiendaImage}
                  />
                  <div className={styles.tiendaContent}>
                    <h3>{product.name}</h3>
                    <p className={styles.tiendaPrice}>{product.price}</p>
                    <button className="btn btn-primary" disabled aria-disabled="true">
                      Comprar
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className={styles.proximamenteNote}>
            Esta sección es un ejemplo funcional. Los productos y precios son ficticios.
          </p>
        </div>
      </section>

      {/* ───── CÓMO AYUDAR ───── */}
      <section id="ayudar" className={styles.ayudarSection} aria-labelledby="ayudar-heading">
        <div className="container text-center">
          <Reveal direction="up">
            <h2 id="ayudar-heading" className={styles.whiteTitle}>¿CÓMO PODÉS AYUDAR?</h2>
            <p className={styles.ayudarSubtitle}>
              Hay muchas formas de sumarte a nuestra causa. Elegí la que más se adapte a vos.
            </p>
          </Reveal>

          <div className={styles.helpGrid}>
            <Reveal direction="up" delay={0.1}>
              <div className={styles.helpCard}>
                <svg className={styles.helpIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
              <div className={styles.helpCard}>
                <svg className={styles.helpIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
              <div className={styles.helpCard}>
                <svg className={styles.helpIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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

      {/* ───── EQUIPO ───── */}
      <section className="section" style={{ background: 'var(--color-light-gray)' }} aria-labelledby="equipo-heading">
        <div className="container">
          <Reveal direction="up" className="text-center" style={{ marginBottom: '48px' }}>
            <h2 id="equipo-heading">
              <ColoredTitle text="NUESTRO EQUIPO" />
            </h2>
          </Reveal>

          <div className={styles.equipoGrid}>
            {[
              { name: 'Ignacio Calabró', role: 'Dirección General' },
              { name: 'Victoria Pereyra', role: 'Fundraising' },
              { name: 'Silvia Olgiatti', role: 'Comisión de Familias' },
              { name: 'María Cristina Silva', role: 'Comisión de Familias' },
              { name: 'Laura Benitez', role: 'Coordinación Voluntarios' },
              { name: 'Caterina Wiytiszen', role: 'Gestión Personas' },
              { name: 'Camila Gianoli', role: 'Gestión Personas' },
              { name: 'Nerea Depetris Berardo', role: 'Comunicación y Redes' },
              { name: 'Joaquín Datí', role: 'Desarrollo Tecnológico' },
            ].map((member, i) => (
              <Reveal key={member.name} direction="scale" delay={i * 0.07}>
                <div className={styles.equipoCard}>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CONTACTO ───── */}
      <section id="contacto" className="section" aria-labelledby="contacto-heading">
        <div className="container">
          <Reveal direction="up" className="text-center" style={{ marginBottom: '60px' }}>
            <h2 id="contacto-heading">
              <ColoredTitle text="CONTACTO" />
            </h2>
            <p className={styles.sectionSubtitle}>
              ¿Tenés dudas, ideas o querés sumarte? Escribinos, estamos para vos.
            </p>
          </Reveal>

          <div className={styles.contactGrid}>
            <Reveal direction="left" className={styles.contactInfo}>
              <h3>Información de contacto</h3>

              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="var(--color-blue)" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
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

              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="var(--color-red)" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
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

              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="var(--color-green)" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <div>
                  <strong>Sede Social</strong>
                  <p>Av 6 nro 1217 - Costa del Este - Partido de la Costa - Provincia de Buenos Aires</p>
                </div>
              </div>

              <div className={styles.socialRow}>
                <a
                  href="https://instagram.com/diversamenteposibles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialBtn} ${styles.socialBtnRed}`}
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com/DiversamentePosibles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialBtn} ${styles.socialBtnGreen}`}
                >
                  Facebook
                </a>
              </div>
            </Reveal>

            <Reveal direction="right" className={styles.newsletterBox}>
              <h3>Suscribite a nuestro newsletter</h3>
              <p>Enterate de nuestras actividades, novedades y cómo podés ser parte.</p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="newsletter-name" className="sr-only">Tu nombre</label>
                <input
                  id="newsletter-name"
                  type="text"
                  placeholder="Tu nombre"
                  className={styles.formInput}
                />
                <label htmlFor="newsletter-email" className="sr-only">Tu email</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Tu email"
                  className={styles.formInput}
                />
                <button type="submit" className="btn btn-primary btn-hover-green" style={{ width: '100%' }}>
                  Suscribirme
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <StickyDonateButton />

      {lightboxIndex !== null && (
        <Lightbox
          photos={allPhotos}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </main>
  );
}
