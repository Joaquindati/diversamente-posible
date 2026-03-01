'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

interface NavbarProps {
  basePath?: string;
}

export function Navbar({ basePath = '' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setHidden(false);
      } else if (currentY > lastScrollY.current) {
        setHidden(true);
        setIsOpen(false);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${hidden ? styles.navbarHidden : ''}`}>
        <div className={`container ${styles.navbarContainer}`}>
          <a href={`${basePath}#inicio`} className={styles.logo} onClick={close}>
            <Image
              src="/images/logo.png"
              alt="Diversamente Posibles"
              width={220}
              height={110}
              className={styles.logoImg}
              priority
            />
          </a>

          <button
            className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
            <li><a href={`${basePath}#inicio`} onClick={close}>Inicio</a></li>
            <li><a href={`${basePath}#nosotros`} onClick={close}>Nosotros</a></li>
            <li><a href={`${basePath}#programas`} onClick={close}>Programas</a></li>
            <li><a href={`${basePath}#ayudar`} onClick={close}>Cómo Ayudar</a></li>
            <li><a href={`${basePath}#contacto`} onClick={close}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      {isOpen && <div className={styles.overlay} onClick={close} />}
    </>
  );
}
