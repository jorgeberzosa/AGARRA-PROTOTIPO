// CDN Image URLs
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
}

export const films: Film[] = [
  {
    id: "gauguin-y-el-canal",
    title: "Gauguin y el Canal",
    director: "Frank Spano",
    country: "Panamá",
    year: 2022,
    runtime: "90 min",
    genre: ["Drama", "Historical"],
    tags: ["Trending", "Rewards active"],
    synopsis: "Paul Gauguin, sick and dying, is subjected to a trial by French authorities in Tahiti while he obsesses over painting his last great work.",
    shortDescription: "Gauguin faces trial in Tahiti while painting his last work.",
    whyItMatters: "A powerful visual exploration of a lesser-known chapter in the famous painter's life.",
    image: "https://m.media-amazon.com/images/M/MV5BY2E2YTgwMmMtZGYzMS00YjA4LWFmM2YtZjcxMWY5M2RkY2YzXkEyXkFqcGc@._V1_QL75_UY562_CR27,0,380,562_.jpg",
    status: "Trending",
    members: 2847,
    rewards: 12,
    upcomingEvent: "Live Q&A with Director — Mar 28",
    festivalSelection: "IFF Panama",
  },
  {
    id: "humanpersons",
    title: "Humanpersons",
    director: "Frank Spano",
    country: "Panamá",
    year: 2018,
    runtime: "100 min",
    genre: ["Thriller", "Social Drama"],
    tags: ["Event this week"],
    synopsis: "James returns to his native Latin America after 30 years to take an organ from a victim. The trip forces him to relive his violent past.",
    shortDescription: "A man returns to Latin America to take an organ, facing his past.",
    whyItMatters: "Exposes raw social realities through a gripping narrative.",
    image: "https://m.media-amazon.com/images/M/MV5BOGZiMmI5NTgtNWVkNS00ZTU4LTgxYmUtNTQ0NTRlMzFkZTc2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    status: "Event this week",
    members: 1923,
    rewards: 8,
    upcomingEvent: "Community Watch Party — Mar 25",
  },
  {
    id: "hora-menos",
    title: "Hora menos",
    director: "Frank Spano",
    country: "Venezuela",
    year: 2011,
    runtime: "95 min",
    genre: ["Drama"],
    tags: ["Classic"],
    synopsis: "Two women from different social classes meet during a disaster that takes their pasts away, uniting them as immigrants overnight.",
    shortDescription: "A disaster unites two very different women as immigrants overnight.",
    whyItMatters: "A poignant portrait of loss and resilience in Latin American cinema.",
    image: "https://m.media-amazon.com/images/M/MV5BODkzMmMzOTMtYWVkYS00MDI4LTk1ZjUtYzEzZmIxYTMyMGEzXkEyXkFqcGc@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    status: "Trending",
    members: 1567,
    rewards: 6,
  },
  {
    id: "km-72",
    title: "Km 72",
    director: "Samuel Henríquez",
    country: "Venezuela",
    year: 2015,
    runtime: "98 min",
    genre: ["Crime", "Action"],
    tags: ["Popular"],
    synopsis: "Following the murder of a millionaire, his bodyguard finds three suspects at the house while a valuable briefcase goes missing.",
    shortDescription: "A bodyguard finds three murder suspects and a missing briefcase.",
    whyItMatters: "Brings sophisticated narrative structure to the Latin American thriller genre.",
    image: "https://m.media-amazon.com/images/M/MV5BZmI0NzViMDUtMmNlOC00ZmU0LTlkOTctYWIzYTE2MWI5YzY4XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    status: "Rewards active",
    members: 3412,
    rewards: 15,
  },
  {
    id: "macu-mujer-policia",
    title: "Macu, la mujer del policía",
    director: "Solveig Hoogesteijn",
    country: "Venezuela",
    year: 1987,
    runtime: "90 min",
    genre: ["Drama", "Crime"],
    tags: ["Classic"],
    synopsis: "The true story of a jealous policeman and his young wife living in a shanty-town in South America.",
    shortDescription: "The true story of a jealous policeman and his young wife.",
    whyItMatters: "One of the most successful Venezuelan films of all time, tackling machismo and power.",
    image: "https://m.media-amazon.com/images/M/MV5BZTc2NjZhOTYtYmQwOC00OGVmLTg4YTktNmQzNWZjYzAxYzgxXkEyXkFqcGc@._V1_QL75_UY562_CR6,0,380,562_.jpg",
    status: "Classic",
    members: 4201,
    rewards: 20,
  },
  {
    id: "cuando-todo-este-en-orden",
    title: "Cuando todo esté en orden",
    director: "César Martínez Herrada",
    country: "España",
    year: 2002,
    runtime: "95 min",
    genre: ["Drama"],
    tags: ["Festival selection"],
    synopsis: "Having survived his own addiction, a man battles to preserve his sanity and save his family.",
    shortDescription: "A man battles to preserve his sanity and save his family.",
    whyItMatters: "Showcases intimate emotional storytelling and brilliant acting.",
    image: "https://m.media-amazon.com/images/M/MV5BMTY3NjExNDI0Ml5BMl5BanBnXkFtZTcwNDM1MzMzMQ@@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    status: "Festival selection",
    members: 1205,
    rewards: 5,
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
    synopsis: "Three youngsters meeting a young immigrant in Madrid decide to journey to the sea to escape the miseries of their lives.",
    shortDescription: "Youngsters journey to the sea to escape their miserables lives.",
    whyItMatters: "Captures the rebellion and vulnerability of youth with raw realism.",
    image: "https://m.media-amazon.com/images/M/MV5BMTQzNzQyOTgwMF5BMl5BanBnXkFtZTcwNzM4MDg5MQ@@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    status: "Trending",
    members: 890,
    rewards: 10,
  },
  {
    id: "el-pais-del-miedo",
    title: "El país del miedo",
    director: "Francisco Espada",
    country: "España",
    year: 2015,
    runtime: "102 min",
    genre: ["Drama", "Thriller"],
    tags: ["Awards winner"],
    synopsis: "A peaceful man's life is altered when a 13-year-old girl crosses paths with his son and begins extorting them both.",
    shortDescription: "A 13-year-old girl extorts a peaceful man and his son.",
    whyItMatters: "A masterclass in building tension out of everyday situations.",
    image: "https://m.media-amazon.com/images/M/MV5BOTJkZTJmOGUtYmE3OC00MGQ4LThmYWYtNGE1NDFhOGU3YTFjXkEyXkFqcGc@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    status: "Popular",
    members: 1450,
    rewards: 8,
  }
];

export const articles: Article[] = [
  {
    id: "new-wave-colombian-cinema",
    title: "The New Wave of Colombian Cinema: Beyond Magical Realism",
    excerpt: "How a generation of filmmakers is redefining Colombian storytelling, moving beyond García Márquez's shadow into bold new territory.",
    category: "Festival Notes",
    author: "Carolina Vásquez",
    date: "Mar 18, 2026",
    readTime: "8 min read",
    image: IMAGES.festival,
  },
  {
    id: "interview-mendonca-filho",
    title: "Kleber Mendonça Filho: 'Architecture Is Memory Made Visible'",
    excerpt: "The Brazilian auteur discusses Fragmentos de Luz, Recife's transformation, and why buildings tell stories that people cannot.",
    category: "Interviews",
    author: "Diego Lerman",
    date: "Mar 15, 2026",
    readTime: "12 min read",
    image: IMAGES.director,
  },
  {
    id: "community-rewards-guide",
    title: "How AGARRA Channels Are Changing Film Distribution",
    excerpt: "From passive viewers to active participants: how community-driven channels create new value for independent cinema.",
    category: "Community Highlights",
    author: "AGARRA Editorial",
    date: "Mar 12, 2026",
    readTime: "6 min read",
    image: IMAGES.documentary,
  },
  {
    id: "directors-notes-bustamante",
    title: "Director's Notes: Jayro Bustamante on Filming Indigenous Stories",
    excerpt: "The Guatemalan director shares his approach to representation, collaboration, and the responsibility of telling stories that aren't entirely his own.",
    category: "Director's Notes",
    author: "Jayro Bustamante",
    date: "Mar 8, 2026",
    readTime: "10 min read",
    image: IMAGES.hero,
  },
];

export const events: Event[] = [
  {
    id: "qa-bize",
    title: "Live Q&A: Matías Bize on Memory and Cinema",
    filmTitle: "La Memoria del Agua",
    date: "Mar 28, 2026",
    time: "7:00 PM CET",
    type: "Live Q&A",
    attendees: 342,
  },
  {
    id: "watch-party-tierra",
    title: "Community Watch Party: Tierra de Nadie",
    filmTitle: "Tierra de Nadie",
    date: "Mar 25, 2026",
    time: "9:00 PM CET",
    type: "Watch Party",
    attendees: 189,
  },
  {
    id: "panel-environment",
    title: "Panel: Cinema & Environmental Justice",
    filmTitle: "El Silencio del Río",
    date: "Mar 30, 2026",
    time: "6:00 PM CET",
    type: "Panel Discussion",
    attendees: 256,
  },
];

export const rewards: Reward[] = [
  {
    id: "r1",
    title: "Early Access Pass",
    description: "Watch new releases 48 hours before general availability",
    type: "Access",
    rarity: "Common",
    filmTitle: "La Memoria del Agua",
  },
  {
    id: "r2",
    title: "Director's Cut Collectible",
    description: "Exclusive digital collectible with behind-the-scenes content",
    type: "Collectible",
    rarity: "Rare",
    filmTitle: "Fragmentos de Luz",
  },
  {
    id: "r3",
    title: "Festival Screening Invite",
    description: "Virtual invitation to exclusive festival screening events",
    type: "Event",
    rarity: "Uncommon",
    filmTitle: "Tierra de Nadie",
  },
  {
    id: "r4",
    title: "Community Curator Badge",
    description: "Recognition badge for active community participation",
    type: "Badge",
    rarity: "Common",
    filmTitle: "Los Días de la Ballena",
  },
];

export const countries = ["Argentina", "Brazil", "Chile", "Colombia", "Guatemala", "Mexico", "Peru", "Spain", "Uruguay"];
export const genres = ["Drama", "Thriller", "Documentary", "Coming-of-age", "Experimental", "Romance", "Social Drama", "Indigenous Cinema"];
export const moods = ["Contemplative", "Intense", "Uplifting", "Melancholic", "Provocative", "Lyrical"];
export const festivals = ["Cannes", "BAFICI", "Morelia IFF", "Valdivia IFF", "San Sebastián", "IDFA", "Berlinale"];

export const passTiers = [
  {
    name: "Explore",
    price: "Free",
    description: "Discover the world of Ibero-American independent cinema",
    features: [
      "Browse all film channels",
      "Read Journal articles",
      "Join public community discussions",
      "Access free event streams",
      "Basic profile",
    ],
    cta: "Start Exploring",
    highlighted: false,
  },
  {
    name: "Pass",
    price: "$9.90/mo",
    description: "Full access to films, events, rewards, and community",
    features: [
      "Unlimited film streaming",
      "All live events and Q&As",
      "Earn and collect rewards",
      "Wallet-enabled benefits",
      "Early access to new releases",
      "Exclusive editorial content",
      "Priority community features",
      "Vote on curation",
    ],
    cta: "Join AGARRA Pass",
    highlighted: true,
  },
  {
    name: "Creator",
    price: "$29.90/mo",
    description: "For filmmakers ready to activate their audience",
    features: [
      "Everything in Pass",
      "Launch your film channel",
      "Create and manage events",
      "Design custom rewards",
      "Audience analytics dashboard",
      "Revenue sharing tools",
      "Direct community messaging",
      "Festival submission support",
    ],
    cta: "Apply as Creator",
    highlighted: false,
  },
];

export const faqItems = [
  {
    question: "What is AGARRA?",
    answer: "AGARRA is a curated platform for Ibero-American independent cinema where every film becomes a live channel. Watch films, participate in events, join communities, and earn rewards — all in one premium experience.",
  },
  {
    question: "How does the wallet work?",
    answer: "Your AGARRA wallet stores your rewards, collectibles, and access passes. It's seamlessly integrated into the platform — no crypto knowledge required. Think of it as your personal cinema passport.",
  },
  {
    question: "What are film channels?",
    answer: "Each film on AGARRA is more than a title to stream. It's a living channel with its own community, events, editorial context, and rewards. Channels stay active long after a film's release.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. AGARRA Pass and Creator subscriptions can be cancelled at any time. You'll retain access until the end of your billing period, and your earned rewards remain in your wallet.",
  },
  {
    question: "How do filmmakers benefit?",
    answer: "Filmmakers on AGARRA can activate their audience, build lasting communities, host events, create rewards, and access detailed audience insights — turning each film into an ongoing cultural experience.",
  },
];