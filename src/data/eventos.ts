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
    coverImage: '/images/galeria-8.jpg',
    coverAlt: 'Premio Abanderados 2024',
    shortDescription:
      'Diversamente Posibles fue reconocida con el Premio Abanderados por su labor en la creación de espacios de encuentro y participación para personas con y sin discapacidad.',
    longDescription:
      'El Premio Abanderados reconoce a personas y organizaciones que trabajan para transformar la realidad de sus comunidades. En 2024, Diversamente Posibles fue seleccionada entre cientos de postulaciones por su compromiso con la inclusión a través del deporte y la recreación. La ceremonia reunió a líderes sociales de todo el país, y nuestro equipo recibió el galardón como un impulso para seguir construyendo un mundo más accesible.',
    accentColor: 'var(--color-red)',
    photos: [
      { src: '/images/galeria-1.jpg', alt: 'Equipo recibiendo el premio', width: 600, height: 400 },
      { src: '/images/galeria-2.jpg', alt: 'Ceremonia de premiación', width: 600, height: 400 },
      { src: '/images/galeria-3.jpg', alt: 'Momento del reconocimiento', width: 600, height: 400 },
      { src: '/images/galeria-4.jpg', alt: 'Ignacio con el trofeo', width: 600, height: 400 },
      { src: '/images/galeria-6.jpg', alt: 'Grupo de abanderados 2024', width: 600, height: 400 },
      { src: '/images/galeria-7.jpg', alt: 'Celebración posterior', width: 600, height: 400 },
    ],
  },
  {
    slug: 'nota-en-medios',
    title: 'Nota en Medios',
    date: 'Septiembre 2024',
    coverImage: '/images/galeria-12.jpg',
    coverAlt: 'Nota en medios nacionales',
    shortDescription:
      'Nuestra historia fue destacada en medios nacionales, visibilizando el impacto de las actividades recreativas y deportivas basadas en el diseño universal.',
    longDescription:
      'La historia de Diversamente Posibles llegó a los medios nacionales, donde se destacó cómo un padre transformó el sueño de su hija en un movimiento comunitario. La nota cubrió desde los orígenes de la organización hasta los proyectos actuales, incluyendo DisfrutArte en Bici, la Escuelita de Surf y la fabricación de sillas anfibias. La repercusión mediática generó nuevas alianzas y voluntarios que se sumaron a la causa.',
    accentColor: 'var(--color-blue)',
    photos: [
      { src: '/images/galeria-9.jpg', alt: 'Entrevista en televisión', width: 600, height: 400 },
      { src: '/images/galeria-10.jpg', alt: 'Nota en diario nacional', width: 600, height: 400 },
      { src: '/images/galeria-11.jpg', alt: 'Momento de la entrevista', width: 600, height: 400 },
      { src: '/images/galeria-13.jpg', alt: 'Equipo durante la cobertura', width: 600, height: 400 },
      { src: '/images/galeria-14.jpg', alt: 'Actividad cubierta por medios', width: 600, height: 400 },
      { src: '/images/galeria-15.jpg', alt: 'Impacto en redes sociales', width: 600, height: 400 },
    ],
  },
  {
    slug: 'proximamente',
    title: 'Próximamente',
    date: '2025',
    coverImage: '/images/galeria-5.jpg',
    coverAlt: 'Próximo momento destacado',
    shortDescription:
      'Seguimos construyendo momentos que transforman. Este espacio se actualizará con nuevas notas y reconocimientos.',
    longDescription:
      'Diversamente Posibles sigue creciendo y generando impacto. Estamos trabajando en nuevos proyectos, alianzas y eventos que seguirán transformando nuestra comunidad. Este espacio se irá completando con las novedades que vayan surgiendo a lo largo del año. Mantenete conectado a nuestras redes para enterarte de todas las novedades.',
    accentColor: 'var(--color-green)',
    photos: [
      { src: '/images/galeria-16.jpg', alt: 'Preparativos para nuevo evento', width: 600, height: 400 },
      { src: '/images/galeria-17.jpg', alt: 'Equipo planificando', width: 600, height: 400 },
      { src: '/images/galeria-18.jpg', alt: 'Actividad en preparación', width: 600, height: 400 },
      { src: '/images/galeria-19.jpg', alt: 'Voluntarios en acción', width: 600, height: 400 },
      { src: '/images/galeria-1.jpg', alt: 'Sede social', width: 600, height: 400 },
      { src: '/images/galeria-2.jpg', alt: 'Comunidad Diversamente Posibles', width: 600, height: 400 },
    ],
  },
];

export function getEventBySlug(slug: string): Evento | undefined {
  return eventos.find((e) => e.slug === slug);
}
