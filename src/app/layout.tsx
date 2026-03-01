import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { DynamicFavicon } from '@/components/DynamicFavicon';
import './globals.css';

const bariol = localFont({
  src: './fonts/Bariol_Regular.otf',
  variable: '--font-primary',
  display: 'swap',
});

const oliver = localFont({
  src: './fonts/Oliver-Regular.ttf',
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Diversamente Posibles | Un Mundo Simple y Posible',
  description: 'Asociación Civil dedicada a crear espacios de convivencia y respeto entre personas con y sin discapacidad a través de actividades recreativas y deportivas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${bariol.variable} ${oliver.variable}`}>
        <DynamicFavicon />
        <a href="#main-content" className="skip-link">Ir al contenido principal</a>
        {children}
      </body>
    </html>
  );
}
