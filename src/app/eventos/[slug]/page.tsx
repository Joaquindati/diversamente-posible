import { notFound } from 'next/navigation';
import { eventos, getEventBySlug } from '@/data/eventos';
import { EventDetailClient } from './EventDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return eventos.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const evento = getEventBySlug(slug);
  if (!evento) return { title: 'Evento no encontrado' };

  return {
    title: `${evento.title} — Diversamente Posibles`,
    description: evento.shortDescription,
  };
}

export default async function EventoPage({ params }: PageProps) {
  const { slug } = await params;
  const evento = getEventBySlug(slug);
  if (!evento) notFound();

  return <EventDetailClient evento={evento} />;
}
