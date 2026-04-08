// URLs de imágenes CDN
export const IMAGES = {
  hero: "https://mgx-backend-cdn.metadl.com/generate/images/1049674/2026-03-22/0d75d87e-da7e-4fb8-a6b1-f56b7597d5aa.png",
  drama: "https://mgx-backend-cdn.metadl.com/generate/images/1049674/2026-03-22/b176d3ff-2bd0-4e20-b349-c63eec297e83.png",
  documentary: "https://mgx-backend-cdn.metadl.com/generate/images/1049674/2026-03-22/16fe34ca-c249-4441-934d-7ebab21aff68.png",
  thriller: "https://mgx-backend-cdn.metadl.com/generate/images/1049674/2026-03-22/9a11ec57-5462-4a4c-aa99-00b696d0efae.png",
  comingOfAge: "https://mgx-backend-cdn.metadl.com/generate/images/1049674/2026-03-22/756b4ca6-e82b-4372-ba46-82947224927c.png",
  experimental: "https://mgx-backend-cdn.metadl.com/generate/images/1049674/2026-03-22/3f3a30d5-ff7c-4af6-abfb-409c0a2689f8.png",
  festival: "https://mgx-backend-cdn.metadl.com/generate/images/1049674/2026-03-22/b02cbc09-c429-45aa-bbc7-0f088111de19.png",
  director: "https://mgx-backend-cdn.metadl.com/generate/images/1049674/2026-03-22/300e5a37-bdfa-40d4-9be3-d14bcb7e15f0.png",
};

export interface Film {
  id: string;
  title: string;
  director: string;
  country: string;
  year: number;
  runtime: string;
  genre: string[];
  tags: string[];
  synopsis: string;
  shortDescription: string;
  whyItMatters: string;
  image: string;
  backdrop?: string;
  status: string;
  members: number;
  rewards: number;
  upcomingEvent?: string;
  festivalSelection?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  backdrop?: string;
}

export interface Event {
  id: string;
  title: string;
  filmTitle: string;
  date: string;
  time: string;
  type: string;
  attendees: number;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  type: string;
  rarity: string;
  filmTitle: string;
  image?: string;
}

export const films: Film[] = [
  {
    id: "gauguin-y-el-canal",
    title: "Gauguin y el Canal",
    director: "Frank Spano",
    country: "Panamá",
    year: 2022,
    runtime: "90 min",
    genre: ["Drama", "Histórico"],
    tags: ["Tendencias", "Recompensas activas"],
    synopsis: "Paul Gauguin, enfermo y en sus últimos días, es sometido a juicio por las autoridades francesas en Tahití mientras se obsesiona con pintar su última gran obra.",
    shortDescription: "Gauguin enfrenta un juicio en Tahití mientras pinta su última obra.",
    whyItMatters: "Una poderosa exploración visual de un capítulo poco conocido en la vida del famoso pintor.",
    image: "https://m.media-amazon.com/images/M/MV5BY2E2YTgwMmMtZGYzMS00YjA4LWFmM2YtZjcxMWY5M2RkY2YzXkEyXkFqcGc@._V1_QL75_UY562_CR27,0,380,562_.jpg",
    backdrop: "/artfan/gauguin.png",
    status: "Trending",
    members: 2847,
    rewards: 12,
    upcomingEvent: "Q&A en vivo con el Director — 28 de Mar",
    festivalSelection: "IFF Panamá",
  },
  {
    id: "km-72",
    title: "Km 72",
    director: "Samuel Henríquez",
    country: "Venezuela",
    year: 2015,
    runtime: "98 min",
    genre: ["Crimen", "Acción"],
    tags: ["Popular"],
    synopsis: "Tras el asesinato de un millonario, su guardaespaldas descubre a tres sospechosos en la casa mientras desaparece un valioso maletín.",
    shortDescription: "Un guardaespaldas encuentra a tres sospechosos de asesinato y un maletín perdido.",
    whyItMatters: "Aporta una sofisticada estructura narrativa al género del thriller en Latinoamérica.",
    image: "https://m.media-amazon.com/images/M/MV5BZmI0NzViMDUtMmNlOC00ZmU0LTlkOTctYWIzYTE2MWI5YzY4XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    backdrop: "/artfan/km72.png",
    status: "Rewards active",
    members: 3412,
    rewards: 15,
  },
  {
    id: "la-mujer-del-animal",
    title: "La mujer del animal",
    director: "Víctor Gaviria",
    country: "Colombia",
    year: 2016,
    runtime: "120 min",
    genre: ["Drama", "Drama social"],
    tags: ["Basado en hechos reales"],
    synopsis: "Tras ser descubierta disfrazándose de Virgen, Amparo huye por miedo a su padre del internado de monjas donde la acogían. Llega a un barrio marginado de Medellín a vivir de \"arrimada\" donde su hermana. Forzada a convertirse en la mujer del Animal, sobrevive y busca salvar a su hija.",
    shortDescription: "Forzada a convivir con 'el Animal', una mujer lucha por sobrevivir y proteger a su hija.",
    whyItMatters: "Un retrato crudo y dolorosamente realista sobre la violencia y supervivencia.",
    image: "/posters/animal.jpg",
    backdrop: "/artfan/animal.png",
    status: "Trending",
    members: 1102,
    rewards: 4,
  },
  {
    id: "humanpersons",
    title: "Humanpersons",
    director: "Frank Spano",
    country: "Panamá",
    year: 2018,
    runtime: "100 min",
    genre: ["Thriller", "Drama Social"],
    tags: ["Evento esta semana"],
    synopsis: "James regresa a su América Latina natal después de 30 años para extraer un órgano de una víctima. El viaje lo obliga a revivir su violento pasado.",
    shortDescription: "Un hombre regresa a Latinoamérica para tomar un órgano, enfrentando su pasado.",
    whyItMatters: "Expone realidades sociales crudas a través de una narrativa atrapante.",
    image: "https://m.media-amazon.com/images/M/MV5BOGZiMmI5NTgtNWVkNS00ZTU4LTgxYmUtNTQ0NTRlMzFkZTc2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    backdrop: "/artfan/humanpersons.png",
    status: "Event this week",
    members: 1923,
    rewards: 8,
    upcomingEvent: "Watch Party Comunitaria — 25 de Mar",
  },
  {
    id: "hora-menos",
    title: "Hora menos",
    director: "Frank Spano",
    country: "Venezuela",
    year: 2011,
    runtime: "95 min",
    genre: ["Drama"],
    tags: ["Clásico"],
    synopsis: "Dos mujeres de diferentes clases sociales se encuentran durante un desastre natural que se lleva sus pasados, uniéndolas como inmigrantes de la noche a la mañana.",
    shortDescription: "Un desastre une a dos mujeres muy diferentes como inmigrantes de la noche a la mañana.",
    whyItMatters: "Un emotivo retrato de pérdida y resiliencia en el cine latinoamericano.",
    image: "https://m.media-amazon.com/images/M/MV5BODkzMmMzOTMtYWVkYS00MDI4LTk1ZjUtYzEzZmIxYTMyMGEzXkEyXkFqcGc@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    backdrop: "/artfan/horamenos.png",
    status: "Trending",
    members: 1567,
    rewards: 6,
  },
  {
    id: "cuando-todo-este-en-orden",
    title: "Cuando todo esté en orden",
    director: "César Martínez Herrada",
    country: "España",
    year: 2002,
    runtime: "95 min",
    genre: ["Drama"],
    tags: ["Selección de festival"],
    synopsis: "Habiendo sobrevivido a su propia adicción, un hombre lucha por preservar su cordura y salvar a su familia.",
    shortDescription: "Un hombre batalla para mantener la cordura y salvar a su familia.",
    whyItMatters: "Muestra una narrativa emocional e íntima junto a actuaciones brillantes.",
    image: "https://m.media-amazon.com/images/M/MV5BMTY3NjExNDI0Ml5BMl5BanBnXkFtZTcwNDM1MzMzMQ@@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    backdrop: "/artfan/orden.png",
    status: "Festival selection",
    members: 1205,
    rewards: 5,
  },
  {
    id: "el-pais-del-miedo",
    title: "El país del miedo",
    director: "Francisco Espada",
    country: "España",
    year: 2015,
    runtime: "102 min",
    genre: ["Drama", "Thriller"],
    tags: ["Ganadora de premios"],
    synopsis: "La vida pacífica de un hombre se ve alterada cuando una niña de 13 años se cruza en el camino de su hijo y comienza a extorsionarlos a ambos.",
    shortDescription: "Una niña de 13 años extorsiona a un hombre pacífico y a su hijo.",
    whyItMatters: "Una clase maestra de cómo construir tensión a partir de situaciones cotidianas.",
    image: "https://m.media-amazon.com/images/M/MV5BOTJkZTJmOGUtYmE3OC00MGQ4LThmYWYtNGE1NDFhOGU3YTFjXkEyXkFqcGc@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    backdrop: "/artfan/miedo.png",
    status: "Popular",
    members: 1450,
    rewards: 8,
  },
  {
    id: "macu-mujer-policia",
    title: "Macu, la mujer del policía",
    director: "Solveig Hoogesteijn",
    country: "Venezuela",
    year: 1987,
    runtime: "90 min",
    genre: ["Drama", "Crimen"],
    tags: ["Clásico"],
    synopsis: "La historia real de un policía celoso y su joven esposa que viven en un barrio marginal en Sudamérica.",
    shortDescription: "La historia basada en hechos reales de un policía celoso y su joven esposa.",
    whyItMatters: "Una de las películas venezolanas más exitosas de todos los tiempos, que expone el machismo y el poder.",
    image: "/posters/macu.jpg",
    backdrop: "/artfan/macu.png",
    status: "Classic",
    members: 4201,
    rewards: 20,
  },
  {
    id: "arena-en-bolsillos",
    title: "Arena en los bolsillos",
    director: "César Martínez Herrada",
    country: "España",
    year: 2006,
    runtime: "98 min",
    genre: ["Drama", "Coming-of-age"],
    tags: [],
    synopsis: "Tres jóvenes que conocen a un inmigrante rumano en Madrid deciden viajar hacia el mar para escapar de las miserias de sus vidas.",
    shortDescription: "Tres jóvenes viajan hacia el mar para escapar de sus vidas miserables.",
    whyItMatters: "Captura la rebelión y vulnerabilidad de la juventud con un crudo realismo.",
    image: "https://m.media-amazon.com/images/M/MV5BMTQzNzQyOTgwMF5BMl5BanBnXkFtZTcwNzM4MDg5MQ@@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    backdrop: "/artfan/arena.png",
    status: "Trending",
    members: 890,
    rewards: 10,
  }
];

export const articles: Article[] = [
  {
    id: "new-wave-colombian-cinema",
    title: "La Nueva Ola del Cine Colombiano: Más allá del Realismo Mágico",
    excerpt: "De cómo una generación de cineastas está redefiniendo la narrativa colombiana, saliendo de la sombra de García Márquez hacia un territorio audaz y nuevo.",
    category: "Notas de Festival",
    author: "Carolina Vásquez",
    date: "18 de Mar, 2026",
    readTime: "Lectura de 8 min",
    image: IMAGES.festival,
  },
  {
    id: "interview-mendonca-filho",
    title: "Kleber Mendonça Filho: 'La arquitectura es memoria hecha visible'",
    excerpt: "El autor brasileño discute Fragmentos de Luz, la transformación de Recife, y por qué los edificios cuentan historias que la gente calla.",
    category: "Entrevistas",
    author: "Diego Lerman",
    date: "15 de Mar, 2026",
    readTime: "Lectura de 12 min",
    image: IMAGES.director,
  },
  {
    id: "community-rewards-guide",
    title: "Cómo los Canales de AGARRA están Cambiando la Distribución",
    excerpt: "De espectadores pasivos a participantes activos: cómo los canales impulsados por la comunidad crean un nuevo valor para el cine.",
    category: "Comunidad",
    author: "Editorial AGARRA",
    date: "12 de Mar, 2026",
    readTime: "Lectura de 6 min",
    image: IMAGES.documentary,
  },
  {
    id: "directors-notes-bustamante",
    title: "Notas de Director: Jayro Bustamante al Filmar Historias Indígenas",
    excerpt: "El director guatemalteco comparte su enfoque sobre la representación, la colaboración y la responsabilidad de contar estas historias.",
    category: "Notas de Director",
    author: "Jayro Bustamante",
    date: "8 de Mar, 2026",
    readTime: "Lectura de 10 min",
    image: IMAGES.hero,
  },
];

export const events: Event[] = [
  {
    id: "qa-bize",
    title: "Encuentro en Vivo + Sesión Q&A",
    filmTitle: "Gauguin y el Canal",
    date: "Viernes, 28 de Marzo",
    time: "20:00 EST",
    type: "Live Stream",
    attendees: 1450,
  },
  {
    id: "watchparty-roldan",
    title: "Watch Party Comunitaria",
    filmTitle: "Humanpersons",
    date: "Sábado, 25 de Marzo",
    time: "21:00 EST",
    type: "Watch Party",
    attendees: 890,
  },
  {
    id: "panel-indie-horror",
    title: "Mesa Redonda de Directores: Thrillers Sociales",
    filmTitle: "Km 72",
    date: "Martes, 31 de Marzo",
    time: "19:00 EST",
    type: "Panel",
    attendees: 3200,
  },
];

export const rewards: Reward[] = [
  {
    id: "reward-1",
    title: "Guion Anotado por el Director",
    description: "PDF exclusivo descargable del guion original con notas al margen.",
    type: "Coleccionable Digital",
    rarity: "Raro",
    filmTitle: "Gauguin y el Canal",
  },
  {
    id: "reward-2",
    title: "Invitación VIP a Estreno",
    description: "Entrada digital gratuita para la próxima watch party de la película.",
    type: "Pase",
    rarity: "Común",
    filmTitle: "Humanpersons",
  },
  {
    id: "reward-3",
    title: "Fotografía Inédita",
    description: "Imágenes de detrás de cámara en alta resolución listas para descargar.",
    type: "Arte",
    rarity: "Épico",
    filmTitle: "Hora menos",
  },
  {
    id: "reward-4",
    title: "Póster Firmado (Físico)",
    description: "Edición limitada del póster oficial enviado a tu domicilio.",
    type: "Artículo Físico",
    rarity: "Legendario",
    filmTitle: "Km 72",
  },
];

export const passTiers = [
  {
    name: "Explora",
    price: "Gratis",
    description: "Empieza tu colección y únete a la comunidad de cine independiente.",
    features: [
      "Únete a Canales Comunitarios gratuitamente",
      "Gana recompensas base",
      "Participa en discusiones",
      "Compra entradas individuales"
    ],
    cta: "Crear Cuenta",
    highlighted: false,
  },
  {
    name: "AGARRA Pass",
    price: "4,99 al mes",
    description: "Para espectadores inmersivos que quieren el máximo valor y contenido tras bastidores.",
    features: [
      "Acceso ilimitado a todos los Canales de Películas",
      "Pase VIP a eventos en vivo y Watch Parties",
      "Multiplicador 2x de recompensas",
      "Acesso Exclusivo Anticipado a nuevos estrenos",
      "Vota en el Fondo para Directores",
    ],
    cta: "Suscribirse y Apoyar",
    highlighted: true,
  },
  {
    name: "AGARRA Creator",
    price: "Contactar con ventas",
    description: "Apoya el cine directamente y posea las colecciones más exclusivas.",
    features: [
      "Todo lo del Pase Premium",
      "Garantía de recompensas raras",
      "Invitación a eventos físicos de la industria",
      "Crédito de agradecimiento en futuros fondos",
      "Merch oficial enviado anualmente",
    ],
    cta: "Convertirse en Patrocinador",
    highlighted: false,
  },
];

export const faqItems = [
  {
    question: "¿A dónde va mi dinero?",
    answer: "A diferencia de plataformas tradicionales, AGARRA opera con un modelo donde el 70% del valor de cada pase vuelve de forma directa a las herramientas de participación de los creadores en la plataforma.",
  },
  {
    question: "¿Qué significa 'unirse a un canal'?",
    answer: "Cuando te unes a un canal de una película, ese canal se añade a tu biblioteca personal. Luego puedes interactuar en conversaciones exclusivas, desbloquear coleccionables y asistir a live streams.",
  },
  {
    question: "¿Puedo comprar entradas individuales en lugar del Pase?",
    answer: "Sí, siempre puedes unirte a canales individuales a la carta si prefieres no contar con los beneficios combinados del ecosistema Premium.",
  },
];

export const countries = ["España", "Argentina", "México", "Colombia", "Chile", "Perú", "Venezuela", "Uruguay", "Panamá"];
export const genres = ["Drama", "Documental", "Thriller", "Comedia", "Coming-of-age", "Experimental", "Histórico", "Acción"];
export const moods = ["Cerebral", "Oscuro", "Inspirador", "Íntimo", "Tenso", "Surreal"];
export const festivals = ["Cannes", "San Sebastián", "Venecia", "Sundance", "Berlinale", "IFF Panamá", "BFI"];