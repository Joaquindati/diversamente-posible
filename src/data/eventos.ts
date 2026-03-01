export interface EventPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Evento {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  coverAlt: string;
  shortDescription: string;
  longDescription: string;
  accentColor: string;
  photos: EventPhoto[];
}

export const eventos: Evento[] = [
  {
    slug: 'premio-abanderados-2024',
    title: 'Premio Abanderados 2024',
    date: 'Noviembre 2024',
    coverImage: 'https://picsum.photos/seed/premio-abanderados/400/200',
    coverAlt: 'Premio Abanderados 2024',
    shortDescription:
      'Diversamente Posibles fue reconocida con el Premio Abanderados por su labor en la creación de espacios de encuentro y participación para personas con y sin discapacidad.',
    longDescription:
      'El Premio Abanderados reconoce a personas y organizaciones que trabajan para transformar la realidad de sus comunidades. En 2024, Diversamente Posibles fue seleccionada entre cientos de postulaciones por su compromiso con la inclusión a través del deporte y la recreación. La ceremonia reunió a líderes sociales de todo el país, y nuestro equipo recibió el galardón como un impulso para seguir construyendo un mundo más accesible.',
    accentColor: 'var(--color-red)',
    photos: [
      { src: 'https://picsum.photos/seed/aband-1/600/800', alt: 'Equipo recibiendo el premio', width: 600, height: 800 },
      { src: 'https://picsum.photos/seed/aband-2/1200/600', alt: 'Ceremonia de premiación', width: 1200, height: 600 },
      { src: 'https://picsum.photos/seed/aband-3/800/800', alt: 'Momento del reconocimiento', width: 800, height: 800 },
      { src: 'https://picsum.photos/seed/aband-4/1200/600', alt: 'Ignacio con el trofeo', width: 1200, height: 600 },
      { src: 'https://picsum.photos/seed/aband-5/600/900', alt: 'Grupo de abanderados 2024', width: 600, height: 900 },
      { src: 'https://picsum.photos/seed/aband-6/1000/600', alt: 'Celebración posterior', width: 1000, height: 600 },
    ],
  },
  {
    slug: 'nota-en-medios',
    title: 'Nota en Medios',
    date: 'Septiembre 2024',
    coverImage: 'https://picsum.photos/seed/nota-medio/400/200',
    coverAlt: 'Nota en medios nacionales',
    shortDescription:
      'Nuestra historia fue destacada en medios nacionales, visibilizando el impacto de las actividades recreativas y deportivas basadas en el diseño universal.',
    longDescription:
      'La historia de Diversamente Posibles llegó a los medios nacionales, donde se destacó cómo un padre transformó el sueño de su hija en un movimiento comunitario. La nota cubrió desde los orígenes de la organización hasta los proyectos actuales, incluyendo DisfrutArte en Bici, la Escuelita de Surf y la fabricación de sillas anfibias. La repercusión mediática generó nuevas alianzas y voluntarios que se sumaron a la causa.',
    accentColor: 'var(--color-blue)',
    photos: [
      { src: 'https://picsum.photos/seed/media-1/600/800', alt: 'Entrevista en televisión', width: 600, height: 800 },
      { src: 'https://picsum.photos/seed/media-2/1200/600', alt: 'Nota en diario nacional', width: 1200, height: 600 },
      { src: 'https://picsum.photos/seed/media-3/800/800', alt: 'Momento de la entrevista', width: 800, height: 800 },
      { src: 'https://picsum.photos/seed/media-4/1200/600', alt: 'Equipo durante la cobertura', width: 1200, height: 600 },
      { src: 'https://picsum.photos/seed/media-5/600/900', alt: 'Actividad cubierta por medios', width: 600, height: 900 },
      { src: 'https://picsum.photos/seed/media-6/1000/600', alt: 'Impacto en redes sociales', width: 1000, height: 600 },
    ],
  },
  {
    slug: 'proximamente',
    title: 'Próximamente',
    date: '2025',
    coverImage: 'https://picsum.photos/seed/proximo-momento/400/200',
    coverAlt: 'Próximo momento destacado',
    shortDescription:
      'Seguimos construyendo momentos que transforman. Este espacio se actualizará con nuevas notas y reconocimientos.',
    longDescription:
      'Diversamente Posibles sigue creciendo y generando impacto. Estamos trabajando en nuevos proyectos, alianzas y eventos que seguirán transformando nuestra comunidad. Este espacio se irá completando con las novedades que vayan surgiendo a lo largo del año. Mantenete conectado a nuestras redes para enterarte de todas las novedades.',
    accentColor: 'var(--color-green)',
    photos: [
      { src: 'https://picsum.photos/seed/prox-1/600/800', alt: 'Preparativos para nuevo evento', width: 600, height: 800 },
      { src: 'https://picsum.photos/seed/prox-2/1200/600', alt: 'Equipo planificando', width: 1200, height: 600 },
      { src: 'https://picsum.photos/seed/prox-3/800/800', alt: 'Actividad en preparación', width: 800, height: 800 },
      { src: 'https://picsum.photos/seed/prox-4/1200/600', alt: 'Voluntarios en acción', width: 1200, height: 600 },
      { src: 'https://picsum.photos/seed/prox-5/600/900', alt: 'Sede social', width: 600, height: 900 },
      { src: 'https://picsum.photos/seed/prox-6/1000/600', alt: 'Comunidad Diversamente Posibles', width: 1000, height: 600 },
    ],
  },
];

export function getEventBySlug(slug: string): Evento | undefined {
  return eventos.find((e) => e.slug === slug);
}
