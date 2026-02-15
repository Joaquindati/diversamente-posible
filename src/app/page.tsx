'use client';

import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ColoredTitle } from '@/components/ColoredTitle';
import { Reveal } from '@/components/Reveal';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import { EnfoqueSlider } from '@/components/EnfoqueSlider';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
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
                className="btn btn-primary"
              >
                FORMA PARTE DE NUESTRA CAUSA
              </a>
              <a
                href="https://wa.me/5492246496999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Quiero involucrarme
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── NOSOTROS ───── */}
      <section id="nosotros" className="section">
        <div className="container">
          <Reveal direction="up" className="text-center" style={{ marginBottom: '60px' }}>
            <h2>
              <ColoredTitle text="QUIÉNES SOMOS" />
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

          {/* Enfoque */}
          <Reveal direction="up" delay={0.1}>
            <EnfoqueSlider />
          </Reveal>

          <div className={styles.missionVisionValores}>
            <Reveal direction="up" delay={0}>
              <div className={`${styles.mvCard} ${styles.mvCardRed}`}>
                <h3>Nuestra Misión</h3>
                <p>
                  Hacer posible el encuentro y la convivencia entre todas las personas a través
                  de propuestas deportivas y recreativas basadas en el diseño universal y el
                  enfoque de derechos.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <div className={`${styles.mvCard} ${styles.mvCardGreen}`}>
                <h3>Nuestra Visión</h3>
                <p>
                  Transformar el mundo generando verdaderas oportunidades, donde cada persona
                  tenga la oportunidad de participar, disfrutar y crecer.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
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
      <section id="programas" className={styles.programasSection}>
        <div className="container">
          <Reveal direction="up" className="text-center" style={{ marginBottom: '60px' }}>
            <h2>
              <ColoredTitle text="NUESTROS PROYECTOS" />
            </h2>
            <p className={styles.sectionSubtitle}>
              Dos iniciativas que transforman entornos y generan verdaderas oportunidades
              a través del deporte y la movilidad inclusiva.
            </p>
          </Reveal>

          {/* Programa 1 - Bici */}
          <div className={styles.programaRow}>
            <Reveal direction="left" className={styles.programaText}>
              <span className={styles.programaBadge} style={{ backgroundColor: 'var(--color-green)' }}>
                Movilidad Inclusiva
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
                Deporte Adaptado
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
        </div>
      </section>

      {/* ───── CÓMO AYUDAR ───── */}
      <section id="ayudar" className={styles.ayudarSection}>
        <div className="container text-center">
          <Reveal direction="up">
            <h2 className={styles.whiteTitle}>¿CÓMO PODÉS AYUDAR?</h2>
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
                  className="btn btn-white"
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
                  className="btn btn-white"
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
                <a href="mailto:contacto@diversamenteposibles.org" className="btn btn-white">
                  Contactar
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── CAMPAÑA ───── */}
      <section className={styles.campanaSection}>
        <div className="container text-center">
          <Reveal direction="up">
            <h2 className={styles.campanaTitle}>
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
                className={`btn ${styles.btnCampana}`}
              >
                QUIERO SUMARME
              </a>
              <a
                href="https://wa.me/5492246496999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
              >
                Hablar con el equipo
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── EQUIPO ───── */}
      <section className="section" style={{ background: 'var(--color-light-gray)' }}>
        <div className="container">
          <Reveal direction="up" className="text-center" style={{ marginBottom: '48px' }}>
            <h2>
              <ColoredTitle text="NUESTRO EQUIPO" />
            </h2>
          </Reveal>

          <div className={styles.equipoGrid}>
            {[
              { name: 'Ignacio Calabró', role: 'Dirección General' },
              { name: 'Victoria Pereyra', role: 'Fundraising' },
              { name: 'Silvia Olgiatti', role: 'Comisión de Familias' },
              { name: 'María Cristina Silva', role: 'Comisión de Familias' },
              { name: 'Laura Benitez', role: 'Comisión de Familias / Gestión de Personas' },
              { name: 'Caterina Wiytiszen', role: 'Gestión de Personas y Cultura' },
              { name: 'Camila Gianoli', role: 'Gestión de Personas y Cultura' },
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
      <section id="contacto" className="section">
        <div className="container">
          <Reveal direction="up" className="text-center" style={{ marginBottom: '60px' }}>
            <h2>
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
                <span className={styles.contactIcon}>📧</span>
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
                <span className={styles.contactIcon}>👥</span>
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
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <strong>Sede Social</strong>
                  <p>Costa del Este, Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className={styles.socialRow}>
                <a
                  href="https://instagram.com/diversamenteposibles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com/DiversamentePosibles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                >
                  Facebook
                </a>
              </div>
            </Reveal>

            <Reveal direction="right" className={styles.newsletterBox}>
              <h3>Suscribite a nuestro newsletter</h3>
              <p>Enterate de nuestras actividades, novedades y cómo podés ser parte.</p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Tu nombre" className={styles.formInput} />
                <input type="email" placeholder="Tu email" className={styles.formInput} />
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Suscribirme
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
