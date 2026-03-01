'use client';

import { useEffect } from 'react';

const COLORS = ['#0072b9', '#e63138', '#f8b00e', '#009940'];

function generateFavicon(color: string): string {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  ctx.beginPath();
  ctx.arc(32, 32, 30, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();

  return canvas.toDataURL('image/png');
}

export function DynamicFavicon() {
  useEffect(() => {
    const index = parseInt(localStorage.getItem('favicon-color-index') ?? '0', 10);
    const color = COLORS[index % COLORS.length];

    const link: HTMLLinkElement =
      document.querySelector("link[rel~='icon']") ?? document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = generateFavicon(color);
    document.head.appendChild(link);

    localStorage.setItem('favicon-color-index', String((index + 1) % COLORS.length));
  }, []);

  return null;
}
