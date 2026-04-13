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
    synopsis: "Paul Gauguin, krank und am Ende seiner Tage, wird von den französischen Behörden auf Tahiti vor Gericht gestellt, während er besessen davon ist, sein letztes großes Werk zu malen.",
    shortDescription: "Gauguin steht auf Tahiti vor Gericht, während er sein letztes Werk malt.",
    whyItMatters: "Eine kraftvolle visuelle Erkundung eines wenig bekannten Kapitels im Leben des berühmten Malers.",
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
    synopsis: "Nach der Ermordung eines Millionärs entdeckt sein Leibwächter drei Verdächtige im Haus, während eine wertvolle Aktentasche verschwindet.",
    shortDescription: "Ein Leibwächter findet drei Mordverdächtige und eine verlorene Aktentasche.",
    whyItMatters: "Bringt eine ausgeklügelte narrative Struktur in das Thriller-Genre in Lateinamerika.",
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
    synopsis: "Nachdem sie dabei entdeckt wurde, wie sie sich als Jungfrau verkleidete, flieht Amparo aus Angst vor ihrem Vater aus dem Nonneninternat. Gezwungen, die Frau des Tieres zu werden, überlebt sie und versucht, ihre Tochter zu retten.",
    shortDescription: "Gezwungen, mit 'dem Tier' zu leben, kämpft eine Frau ums Überleben und um den Schutz ihrer Tochter.",
    whyItMatters: "Ein rohes und schmerzhaft realistisches Porträt über Gewalt und Überleben.",
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
    synopsis: "James kehrt nach 30 Jahren in sein Heimatland Lateinamerika zurück, um einem Opfer ein Organ zu entnehmen.",
    shortDescription: "Ein Mann kehrt nach Lateinamerika zurück, um ein Organ zu nehmen und sich seiner Vergangenheit zu stellen.",
    whyItMatters: "Deck auf raue soziale Realitäten durch eine fesselnde Erzählung auf.",
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
    synopsis: "Zwei Frauen aus unterschiedlichen sozialen Schichten treffen während einer Naturkatastrophe aufeinander, die sie über Nacht als Einwanderer vereint.",
    shortDescription: "Eine Katastrophe vereint zwei sehr unterschiedliche Frauen über Nacht als Einwanderer.",
    whyItMatters: "Ein emotionales Porträt von Verlust und Resilienz im lateinamerikanischen Kino.",
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
    synopsis: "Nachdem er seine eigene Sucht überlebt hat, kämpft ein Mann darum, seinen Verstand zu bewahren und seine Familie zu retten.",
    shortDescription: "Ein Mann kämpft darum, seinen Verstand zu behalten und seine Familie zu retten.",
    whyItMatters: "Zeigt eine emotionale und intime Erzählung zusammen mit brillanten schauspielerischen Leistungen.",
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
    synopsis: "Das friedliche Leben eines Mannes wird auf den Kopf gestellt, als ein 13-jähriges Mädchen den Weg seines Sohnes kreuzt und beginnt, beide zu erpressen.",
    shortDescription: "Ein 13-jähriges Mädchen erpresst einen friedlichen Mann und seinen Sohn.",
    whyItMatters: "Eine Meisterklasse, wie man Spannung aus Alltagssituationen aufbaut.",
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
    synopsis: "Die wahre Geschichte eines eifersüchtigen Polizisten und seiner jungen Frau, die in einem Slum in Südamerika leben.",
    shortDescription: "Erforscht die auf wahren Begebenheiten beruhende Geschichte eines eifersüchtigen Polizisten.",
    whyItMatters: "Einer der erfolgreichsten venezolanischen Filme aller Zeiten, der Machismus und Macht aufdeckt.",
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
    synopsis: "Drei Jugendliche, die einen rumänischen Einwanderer in Madrid treffen, beschließen, ans Meer zu reisen, um dem Elend ihres Lebens zu entfliehen.",
    shortDescription: "Drei Jugendliche reisen ans Meer, um ihrem miserablen Leben zu entfliehen.",
    whyItMatters: "Fängt die Rebellion und Verletzlichkeit der Jugend mit einem rauen Realismus ein.",
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
    title: "Die neue Welle des kolumbianischen Kinos: Jenseits des Magischen Realismus",
    excerpt: "Wie eine Generation von Filmemachern die kolumbianische Erzählung neu definiert und aus dem Schatten von García Márquez in neues Territorium tritt.",
    category: "Notas de Festival",
    author: "Carolina Vásquez",
    date: "18 de Mar, 2026",
    readTime: "Lectura de 8 min",
    image: IMAGES.festival,
  },
  {
    id: "interview-mendonca-filho",
    title: "Kleber Mendonça Filho: 'Architektur ist sichtbar gemachte Erinnerung'",
    excerpt: "Der brasilianische Autor diskutiert Fragmente des Lichts, die Transformation von Recife und warum Gebäude Geschichten erzählen.",
    category: "Entrevistas",
    author: "Diego Lerman",
    date: "15 de Mar, 2026",
    readTime: "Lectura de 12 min",
    image: IMAGES.director,
  },
  {
    id: "community-rewards-guide",
    title: "Wie die Kanäle von AGARRA die Distribution verändern",
    excerpt: "Von passiven Zuschauern zu aktiven Teilnehmern: Wie von der Community getragene Kanäle neuen Wert für das Kino schaffen.",
    category: "Comunidad",
    author: "Editorial AGARRA",
    date: "12 de Mar, 2026",
    readTime: "Lectura de 6 min",
    image: IMAGES.documentary,
  },
  {
    id: "directors-notes-bustamante",
    title: "Regienotizen: Jayro Bustamante filmt indigene Geschichten",
    excerpt: "Der guatemaltekische Regisseur teilt seinen Ansatz zur Repräsentation, Zusammenarbeit und der Verantwortung.",
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
    description: "Exklusives herunterladbares PDF des Originaldrehbuchs mit Randnotizen.",
    type: "Coleccionable Digital",
    rarity: "Raro",
    filmTitle: "Gauguin y el Canal",
  },
  {
    id: "reward-2",
    title: "Invitación VIP a Estreno",
    description: "Kostenloses digitales Ticket für die nächste Watch-Party des Films.",
    type: "Pase",
    rarity: "Común",
    filmTitle: "Humanpersons",
  },
  {
    id: "reward-3",
    title: "Fotografía Inédita",
    description: "Hinter den Kulissen-Bilder in hoher Auflösung zum Herunterladen.",
    type: "Arte",
    rarity: "Épico",
    filmTitle: "Hora menos",
  },
  {
    id: "reward-4",
    title: "Póster Firmado (Físico)",
    description: "Limitierte Auflage des offiziellen Posters, das an Ihre Adresse gesendet wird.",
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
      "Tritt kostenlosen Community-Kanälen bei",
      "Gewinne Basisbelohnungen",
      "Nimm an Diskussionen teil",
      "Kaufe Einzeltickets"
    ],
    cta: "Crear Cuenta",
    highlighted: false,
  },
  {
    name: "AGARRA Pass",
    price: "4,99 al mes",
    description: "Para espectadores inmersivos que quieren el máximo valor y contenido tras bastidores.",
    features: [
      "Unbegrenzter Zugang zu allen Filmkanälen",
      "VIP-Pass für Live-Events und Watch Partys",
      "Multiplicador 2x de recompensas",
      "Exklusiver Frühzugang zu neuen Veröffentlichungen",
      "Stimme im Fonds für Regisseure ab",
    ],
    cta: "Suscribirse y Apoyar",
    highlighted: true,
  },
  {
    name: "AGARRA Creator",
    price: "Contactar con ventas",
    description: "Apoya el cine directamente y posea las colecciones más exclusivas.",
    features: [
      "Alles aus dem Premium Pass",
      "Garantie für seltene Belohnungen",
      "Einladung zu physischen Branchenveranstaltungen",
      "Dankeschön-Kredit in zukünftigen Fonds",
      "Offizielles Merchandising jährlich versendet",
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