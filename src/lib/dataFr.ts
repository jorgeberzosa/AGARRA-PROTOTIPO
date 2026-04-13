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
    synopsis: "Paul Gauguin, malade et à la fin de ses jours, est jugé par les autorités françaises à Tahiti tout en étant obsédé par la réalisation de sa dernière grande œuvre.",
    shortDescription: "Gauguin fait face à un procès à Tahiti pendant qu'il peint sa dernière œuvre.",
    whyItMatters: "Une puissante exploration visuelle d'un chapitre méconnu de la vie du célèbre peintre.",
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
    synopsis: "Après l'assassinat d'un millionnaire, son garde du corps découvre trois suspects dans la maison alors qu'une mallette de valeur disparaît.",
    shortDescription: "Un garde du corps trouve trois suspects de meurtre et une mallette disparue.",
    whyItMatters: "Apporte une structure narrative sophistiquée au genre du thriller en Amérique latine.",
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
    synopsis: "Après avoir été découverte se déguisant en Vierge, Amparo s'enfuit du pensionnat de religieuses par peur de son père. Elle arrive dans un quartier marginal de Medellín. Forcée de devenir la femme de l'Animal, elle survit et cherche à sauver sa fille.",
    shortDescription: "Forcée de vivre avec 'l'Animal', une femme lutte pour survivre et protéger sa fille.",
    whyItMatters: "Un portrait brut et douloureusement réaliste de la violence et de la survie.",
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
    synopsis: "James retourne dans son Amérique latine natale après 30 ans pour prélever un organe d'une victime. Le voyage le force à revivre son passé violent.",
    shortDescription: "Un homme retourne en Amérique latine pour prendre un organe, affrontant son passé.",
    whyItMatters: "Expose des réalités sociales dures à travers une narration captivante.",
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
    synopsis: "Deux femmes de différentes classes sociales se rencontrent lors d'une catastrophe naturelle qui emporte leur passé, les unissant comme immigrantes du jour au lendemain.",
    shortDescription: "Une catastrophe unit deux femmes très différentes comme immigrantes du jour au lendemain.",
    whyItMatters: "Un portrait émouvant de perte et de résilience dans le cinéma latino-américain.",
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
    synopsis: "Ayant survécu à sa propre dépendance, un homme lutte pour préserver sa santé mentale et sauver sa famille.",
    shortDescription: "Un homme se bat pour maintenir sa santé mentale et sauver sa famille.",
    whyItMatters: "Montre une narration émotionnelle et intime avec des performances brillantes.",
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
    synopsis: "La vie paisible d'un homme est bouleversée lorsqu'une fille de 13 ans croise le chemin de son fils et commence à les extorquer tous les deux.",
    shortDescription: "Une fille de 13 ans extorque un homme paisible et son fils.",
    whyItMatters: "Une masterclass sur la façon de construire la tension à partir de situations quotidiennes.",
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
    synopsis: "L'histoire vraie d'un policier jaloux et de sa jeune épouse vivant dans un quartier marginal en Amérique du Sud.",
    shortDescription: "L'histoire basée sur des faits réels d'un policier jaloux et de sa jeune épouse.",
    whyItMatters: "L'un des films vénézuéliens les plus réussis de tous les temps, exposant le machisme et le pouvoir.",
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
    synopsis: "Trois jeunes qui rencontrent un immigrant roumain à Madrid décident de voyager vers la mer pour échapper aux misères de leur vie.",
    shortDescription: "Trois jeunes voyagent vers la mer pour échapper à leurs vies misérables.",
    whyItMatters: "Capture la rébellion et la vulnérabilité de la jeunesse avec un réalisme brut.",
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
    title: "La Nouvelle Vague du Cinéma Colombien : Au-delà du Réalisme Magique",
    excerpt: "Comment une génération de cinéastes redéfinit la narration colombienne, sortant de l'ombre de García Márquez vers un territoire audacieux et nouveau.",
    category: "Notas de Festival",
    author: "Carolina Vásquez",
    date: "18 de Mar, 2026",
    readTime: "Lectura de 8 min",
    image: IMAGES.festival,
  },
  {
    id: "interview-mendonca-filho",
    title: "Kleber Mendonça Filho : 'L'architecture est la mémoire rendue visible'",
    excerpt: "L'auteur brésilien discute des Fragments de Lumière, de la transformation de Recife et de la raison pour laquelle les bâtiments racontent des histoires que les gens taisent.",
    category: "Entrevistas",
    author: "Diego Lerman",
    date: "15 de Mar, 2026",
    readTime: "Lectura de 12 min",
    image: IMAGES.director,
  },
  {
    id: "community-rewards-guide",
    title: "Comment les Chaînes AGARRA Changent la Distribution",
    excerpt: "Des spectateurs passifs aux participants actifs : comment les chaînes animées par la communauté créent une nouvelle valeur pour le cinéma.",
    category: "Comunidad",
    author: "Editorial AGARRA",
    date: "12 de Mar, 2026",
    readTime: "Lectura de 6 min",
    image: IMAGES.documentary,
  },
  {
    id: "directors-notes-bustamante",
    title: "Notes du Réalisateur : Jayro Bustamante Filme des Histoires Indigènes",
    excerpt: "Le réalisateur guatémaltèque partage son approche de la représentation, de la collaboration et de la responsabilité de raconter ces histoires.",
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
    description: "PDF exclusif téléchargeable du scénario original avec des notes en marge.",
    type: "Coleccionable Digital",
    rarity: "Raro",
    filmTitle: "Gauguin y el Canal",
  },
  {
    id: "reward-2",
    title: "Invitación VIP a Estreno",
    description: "Billet numérique gratuit pour la prochaine watch party du film.",
    type: "Pase",
    rarity: "Común",
    filmTitle: "Humanpersons",
  },
  {
    id: "reward-3",
    title: "Fotografía Inédita",
    description: "Images des coulisses en haute résolution prêtes à être téléchargées.",
    type: "Arte",
    rarity: "Épico",
    filmTitle: "Hora menos",
  },
  {
    id: "reward-4",
    title: "Póster Firmado (Físico)",
    description: "Édition limitée de l'affiche officielle expédiée à votre domicile.",
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
      "Rejoignez des Chaînes Communautaires gratuitement",
      "Gagnez des récompenses de base",
      "Participez aux discussions",
      "Achetez des billets individuels"
    ],
    cta: "Crear Cuenta",
    highlighted: false,
  },
  {
    name: "AGARRA Pass",
    price: "4,99 al mes",
    description: "Para espectadores inmersivos que quieren el máximo valor y contenido tras bastidores.",
    features: [
      "Accès illimité à toutes les Chaînes de Films",
      "Pass VIP pour des événements en direct et Check Parties",
      "Multiplicador 2x de recompensas",
      "Accès Exclusif Anticipé aux nouvelles sorties",
      "Votez dans le Fonds pour Réalisateurs",
    ],
    cta: "Suscribirse y Apoyar",
    highlighted: true,
  },
  {
    name: "AGARRA Creator",
    price: "Contactar con ventas",
    description: "Apoya el cine directamente y posea las colecciones más exclusivas.",
    features: [
      "Tout du Pass Premium",
      "Garantie de récompenses rares",
      "Invitation à des événements physiques de l'industrie",
      "Crédit de remerciement dans de futurs fonds",
      "Produits officiels expédiés annuellement",
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