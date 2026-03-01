'use client';

import Image from 'next/image';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Pie de página">
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerSection}>
          <Image
            src="/images/logo.png"
            alt="Diversamente Posibles"
            width={180}
            height={90}
            className={styles.footerLogo}
          />
          <p style={{ marginTop: '16px' }}>Transformar barreras en oportunidades.</p>
          <p className={styles.footerSubtext}>
            Asociación Civil — Av 6 nro 1217 - Costa del Este - Partido de la Costa - Provincia de Buenos Aires
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3>Contacto</h3>
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

        <div className={styles.footerSection}>
          <h3>Redes</h3>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com/diversamenteposibles" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://facebook.com/DiversamentePosibles" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Navegación</h3>
          <nav className={styles.footerNav} aria-label="Navegación del pie de página">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#programas">Programas</a>
            <a href="#ayudar">Cómo Ayudar</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Diversamente Posibles. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
