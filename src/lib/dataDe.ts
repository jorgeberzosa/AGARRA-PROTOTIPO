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
    synopsis: "Paul Gauguin, krank und in seinen letzten Tagen, wird von den französischen Behörden auf Tahiti vor Gericht gestellt, während er davon besessen ist, sein letztes großes Werk zu malen.",
    shortDescription: "Gauguin wird in Tahiti vor Gericht gestellt, während er sein letztes Werk malt.",
    whyItMatters: "Eine kraftvolle visuelle Erkundung eines wenig bekannten Kapitels im Leben des berühmten Malers.",
    image: "https://m.media-amazon.com/images/M/MV5BY2E2YTgwMmMtZGYzMS00YjA4LWFmM2YtZjcxMWY5M2RkY2YzXkEyXkFqcGc@._V1_QL75_UY562_CR27,0,380,562_.jpg",
    backdrop: "/artfan/gauguin.png",
    status: "Trending",
    members: 2847,
    rewards: 12,
    upcomingEvent: "Live-Fragen und Antworten mit dem Regisseur – 28. März",
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
    shortDescription: "Ein Leibwächter findet drei Mordverdächtige und eine fehlende Aktentasche.",
    whyItMatters: "Es verleiht dem Thriller-Genre in Lateinamerika eine ausgefeilte Erzählstruktur.",
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
    synopsis: "Nachdem Amparo entdeckt wird, dass sie sich als Jungfrau verkleidet, flieht sie aus Angst vor ihrem Vater aus dem Nonneninternat, in dem sie aufgenommen wurde. Er kommt in ein Randviertel von Medellín, wo er auf engstem Raum mit seiner Schwester zusammenlebt. Sie wird gezwungen, die Frau des Tieres zu werden, überlebt und versucht, ihre Tochter zu retten.",
    shortDescription: "Eine Frau ist gezwungen, mit „dem Tier“ zu leben und kämpft um ihr Überleben und den Schutz ihrer Tochter.",
    whyItMatters: "Ein rohes und schmerzlich realistisches Porträt von Gewalt und Überleben.",
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
    synopsis: "James kehrt nach 30 Jahren in seine Heimat Lateinamerika zurück, um einem Opfer ein Organ zu entnehmen. Die Reise zwingt ihn, seine gewalttätige Vergangenheit noch einmal zu durchleben.",
    shortDescription: "Ein Mann kehrt nach Lateinamerika zurück, um sich eine Orgel zu nehmen und muss sich seiner Vergangenheit stellen.",
    whyItMatters: "Es enthüllt rohe gesellschaftliche Realitäten durch eine fesselnde Erzählung.",
    image: "https://m.media-amazon.com/images/M/MV5BOGZiMmI5NTgtNWVkNS00ZTU4LTgxYmUtNTQ0NTRlMzFkZTc2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    backdrop: "/artfan/humanpersons.png",
    status: "Event this week",
    members: 1923,
    rewards: 8,
    upcomingEvent: "Community Watch Party – 25. März",
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
    synopsis: "Zwei Frauen aus unterschiedlichen sozialen Schichten treffen während einer Naturkatastrophe aufeinander, die ihnen ihre Vergangenheit nimmt und sie über Nacht als Einwanderinnen vereint.",
    shortDescription: "Eine Katastrophe vereint über Nacht zwei sehr unterschiedliche Frauen als Einwanderinnen.",
    whyItMatters: "Ein emotionales Porträt von Verlust und Widerstandsfähigkeit im lateinamerikanischen Kino.",
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
    shortDescription: "Ein Mann kämpft darum, bei Verstand zu bleiben und seine Familie zu retten.",
    whyItMatters: "Es präsentiert eine emotionale und intime Erzählung neben brillanten Darbietungen.",
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
    synopsis: "Das friedliche Leben eines Mannes wird gestört, als ein 13-jähriges Mädchen den Weg seines Sohnes kreuzt und beginnt, Geld von beiden zu erpressen.",
    shortDescription: "Ein 13-jähriges Mädchen erpresst Geld von einem friedlichen Mann und seinem Sohn.",
    whyItMatters: "Ein Meisterkurs zum Aufbau von Spannung in Alltagssituationen.",
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
    shortDescription: "Die Geschichte basiert auf wahren Begebenheiten eines eifersüchtigen Polizisten und seiner jungen Frau.",
    whyItMatters: "Einer der erfolgreichsten venezolanischen Filme aller Zeiten, der Machismo und Macht bloßstellt.",
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
    synopsis: "Drei junge Menschen, die in Madrid einen rumänischen Einwanderer treffen, beschließen, ans Meer zu reisen, um dem Elend ihres Lebens zu entfliehen.",
    shortDescription: "Drei junge Menschen reisen ans Meer, um ihrem elenden Leben zu entfliehen.",
    whyItMatters: "Es fängt die Rebellion und Verletzlichkeit der Jugend mit krassem Realismus ein.",
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
    excerpt: "Wie eine Generation von Filmemachern die kolumbianische Erzählung neu definiert und aus dem Schatten von García Márquez heraustritt und mutiges und neues Terrain betritt.",
    category: "Festivalnotizen",
    author: "Carolina Vásquez",
    date: "18 de Mar, 2026",
    readTime: "Lectura de 8 min",
    image: IMAGES.festival,
  },
  {
    id: "interview-mendonca-filho",
    title: "Kleber Mendonça Filho: 'La arquitectura es memoria hecha visible'",
    excerpt: "Der brasilianische Autor spricht über Fragmente des Lichts, die Transformation von Recife und warum Gebäude Geschichten erzählen, über die die Menschen schweigen.",
    category: "Interviews",
    author: "Diego Lerman",
    date: "15 de Mar, 2026",
    readTime: "Lectura de 12 min",
    image: IMAGES.director,
  },
  {
    id: "community-rewards-guide",
    title: "Cómo los Canales de AGARRA están Cambiando la Distribución",
    excerpt: "Von passiven Zuschauern zu aktiven Teilnehmern: Wie Community-gesteuerte Kanäle neue Werte für das Kino schaffen.",
    category: "Gemeinschaft",
    author: "Editorial AGARRA",
    date: "12 de Mar, 2026",
    readTime: "Lectura de 6 min",
    image: IMAGES.documentary,
  },
  {
    id: "directors-notes-bustamante",
    title: "Notas de Director: Jayro Bustamante al Filmar Historias Indígenas",
    excerpt: "Der guatemaltekische Regisseur teilt seine Herangehensweise an Repräsentation, Zusammenarbeit und die Verantwortung, diese Geschichten zu erzählen.",
    category: "Anmerkungen des Regisseurs",
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
    description: "Exklusives herunterladbares PDF des Originalskripts mit Anmerkungen am Rand.",
    type: "Coleccionable Digital",
    rarity: "Raro",
    filmTitle: "Gauguin y el Canal",
  },
  {
    id: "reward-2",
    title: "Invitación VIP a Estreno",
    description: "Kostenloser digitaler Eintritt zur nächsten Watch-Party des Films.",
    type: "Pase",
    rarity: "Común",
    filmTitle: "Humanpersons",
  },
  {
    id: "reward-3",
    title: "Fotografía Inédita",
    description: "Hochauflösende Bilder hinter den Kulissen stehen zum Download bereit.",
    type: "Arte",
    rarity: "Épico",
    filmTitle: "Hora menos",
  },
  {
    id: "reward-4",
    title: "Póster Firmado (Físico)",
    description: "Limitierte Auflage des offiziellen Posters, das Ihnen nach Hause geschickt wird.",
    type: "Artículo Físico",
    rarity: "Legendario",
    filmTitle: "Km 72",
  },
];

export const passTiers = [
  {
    name: "Explora",
    price: "Gratis",
    description: "Starten Sie Ihre Sammlung und treten Sie der unabhängigen Film-Community bei.",
    features: [
      "Treten Sie den Community-Kanälen kostenlos bei",
      "Verdienen Sie Basisprämien",
      "Beteiligen Sie sich an Diskussionen",
      "Kaufen Sie Einzeltickets"
    ],
    cta: "Crear Cuenta",
    highlighted: false,
  },
  {
    name: "AGARRA Pass",
    price: "4,99 al mes",
    description: "Für immersive Zuschauer, die maximalen Wert und Inhalte hinter den Kulissen wünschen.",
    features: [
      "Unbegrenzter Zugriff auf alle Filmkanäle",
      "VIP-Pass für Live-Events und Watch-Partys",
      "2x Belohnungsmultiplikator",
      "Exklusiver Early Access zu Neuerscheinungen",
      "Stimmen Sie im Direktorenfonds ab",
    ],
    cta: "Suscribirse y Apoyar",
    highlighted: true,
  },
  {
    name: "AGARRA Creator",
    price: "Contactar con ventas",
    description: "Unterstützen Sie das Kino direkt und besitzen Sie die exklusivsten Sammlungen.",
    features: [
      "Alles zum Premium Pass",
      "Garantie für seltene Belohnungen",
      "Einladung zu physischen Branchenveranstaltungen",
      "Vielen Dank für die Gutschrift zukünftiger Mittel",
      "Offizieller Merch-Versand jährlich",
    ],
    cta: "Convertirse en Patrocinador",
    highlighted: false,
  },
];

export const faqItems = [
  {
    question: "Wohin geht mein Geld?",
    answer: "Im Gegensatz zu herkömmlichen Plattformen arbeitet AGARRA mit einem Modell, bei dem 70 % des Wertes jedes Passes direkt an die Beteiligungstools der Ersteller auf der Plattform zurückfließen.",
  },
  {
    question: "Was bedeutet „einem Kanal beitreten“?",
    answer: "Wenn Sie einem Filmkanal beitreten, wird dieser Kanal zu Ihrer persönlichen Bibliothek hinzugefügt. Anschließend können Sie an exklusiven Gesprächen teilnehmen, Sammlerstücke freischalten und Live-Streams besuchen.",
  },
  {
    question: "Kann ich anstelle des Passes Einzeltickets kaufen?",
    answer: "Ja, Sie können jederzeit einzelnen Kanälen à la carte beitreten, wenn Sie die kombinierten Vorteile des Premium-Ökosystems nicht nutzen möchten.",
  },
];

export const countries = ["España", "Argentina", "México", "Colombia", "Chile", "Perú", "Venezuela", "Uruguay", "Panamá"];
export const genres = ["Drama", "Documental", "Thriller", "Comedia", "Coming-of-age", "Experimental", "Histórico", "Acción"];
export const moods = ["Cerebral", "Oscuro", "Inspirador", "Íntimo", "Tenso", "Surreal"];
export const festivals = ["Cannes", "San Sebastián", "Venecia", "Sundance", "Berlinale", "IFF Panamá", "BFI"];