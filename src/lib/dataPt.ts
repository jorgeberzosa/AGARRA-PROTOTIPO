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
    synopsis: "Paul Gauguin, doente e em seus últimos dias, é levado a julgamento pelas autoridades francesas no Taiti enquanto está obsecado em pintar sua última grande obra.",
    shortDescription: "Gauguin enfrenta um julgamento no Taiti enquanto pinta a sua última obra.",
    whyItMatters: "Uma poderosa exploração visual de um capítulo pouco conhecido da vida do famoso pintor.",
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
    synopsis: "Após o assassinato de um milionário, seu guarda-costas descobre três suspeitos na casa enquanto desaparece uma maleta valiosa.",
    shortDescription: "Um guarda-costas encontra três suspeitos de assassinato e uma valise perdida.",
    whyItMatters: "Traz uma estrutura narrativa sofisticada para o gênero de suspense na América Latina.",
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
    synopsis: "Após ser descoberta se disfarçando de Virgem, Amparo foge por medo do seu pai do internato. Forçada a se tornar a mulher do Animal, sobrevive e busca salvar sua filha.",
    shortDescription: "Forçada a conviver com 'o Animal', uma mulher luta por sobreviver e proteger sua filha.",
    whyItMatters: "Um retrato cru e dolorosamente realista sobre a violência e a sobrevivência.",
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
    synopsis: "James volta à sua América Latina natal após 30 anos para extrair um órgão de uma vítima. A viagem o obriga a reviver seu passado violento.",
    shortDescription: "Um homem volta à América Latina para tirar um órgão e enfrenta o passado.",
    whyItMatters: "Expõe realidades sociais duras através de uma narrativa cativante.",
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
    synopsis: "Duas mulheres de diferentes classes sociais se encontram durante um desastre natural que leva seus passados.",
    shortDescription: "Um desastre une duas mulheres muito diferentes como imigrantes durante a noite.",
    whyItMatters: "Um emocionante retrato de perda e resiliência no cinema latino-americano.",
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
    synopsis: "Tendo sobrevivido ao seu próprio vício, um homem luta para preservar a sua sanidade e salvar a sua família.",
    shortDescription: "Um homem luta para manter sua sanidade e salvar sua família.",
    whyItMatters: "Mostra uma narrativa emocional e íntima junto com atuações brilhantes.",
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
    synopsis: "A vida pacífica de um homem é alterada quando uma menina de 13 anos cruza o caminho do seu filho.",
    shortDescription: "Uma garota de 13 anos extorque um homem pacífico e seu filho.",
    whyItMatters: "Uma aula mestre de como construir tensão a partir de situações diárias.",
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
    synopsis: "A verdadeira história de um policial ciumento e de sua esposa jovem vivendo numa favela na América do Sul.",
    shortDescription: "A história baseada em fatos de um policial ciumento e de sua esposa jovem.",
    whyItMatters: "Um dos filmes venezuelanos de maior sucesso de todos os tempos, que expõe machismo e poder.",
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
    synopsis: "Três jovens que encontram um imigrante romeno em Madri decidem viajar para o mar para escapar das misérias.",
    shortDescription: "Três jovens viajam para o mar para escapar de suas vidas miseráveis.",
    whyItMatters: "Captura a rebelião e vulnerabilidade da juventude com um realismo puro.",
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
    title: "A Nova Onda do Cinema Colombiano: Além do Realismo Mágico",
    excerpt: "De como uma geração de cineastas está redefinindo a narrativa colombiana.",
    category: "Notas de Festival",
    author: "Carolina Vásquez",
    date: "18 de Mar, 2026",
    readTime: "Lectura de 8 min",
    image: IMAGES.festival,
  },
  {
    id: "interview-mendonca-filho",
    title: "Kleber Mendonça Filho: 'Arquitetura é memória viva'",
    excerpt: "O autor brasileiro discute Fragmentos de Luz, a transformação de Recife, e porquê os prédios contam histórias.",
    category: "Entrevistas",
    author: "Diego Lerman",
    date: "15 de Mar, 2026",
    readTime: "Lectura de 12 min",
    image: IMAGES.director,
  },
  {
    id: "community-rewards-guide",
    title: "Como os Canais AGARRA estão Mudando a Distribuição",
    excerpt: "De espectadores passivos a participantes ativos: como os canais impulsionados pela comunidade criam valor para o cinema.",
    category: "Comunidad",
    author: "Editorial AGARRA",
    date: "12 de Mar, 2026",
    readTime: "Lectura de 6 min",
    image: IMAGES.documentary,
  },
  {
    id: "directors-notes-bustamante",
    title: "Anotações do Diretor: Jayro Bustamante Filmando Histórias Indígenas",
    excerpt: "O diretor guatemalteco compartilha o seu foco na representação e na responsabilidade de contar essas histórias.",
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
    description: "PDF exclusivo do roteiro para download com anotações nas bordas.",
    type: "Coleccionable Digital",
    rarity: "Raro",
    filmTitle: "Gauguin y el Canal",
  },
  {
    id: "reward-2",
    title: "Invitación VIP a Estreno",
    description: "Ingresso digital gratuito para a próxima watch party do filme.",
    type: "Pase",
    rarity: "Común",
    filmTitle: "Humanpersons",
  },
  {
    id: "reward-3",
    title: "Fotografía Inédita",
    description: "Imagens dos bastidores em alta resolução prontas para baixar.",
    type: "Arte",
    rarity: "Épico",
    filmTitle: "Hora menos",
  },
  {
    id: "reward-4",
    title: "Póster Firmado (Físico)",
    description: "Edição limitada do pôster oficial enviada para a sua casa.",
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
      "Junte-se a Canais Comunitários gratuitamente",
      "Ganhe recompensas base",
      "Participe das discussões",
      "Compre ingressos individuais"
    ],
    cta: "Crear Cuenta",
    highlighted: false,
  },
  {
    name: "AGARRA Pass",
    price: "4,99 al mes",
    description: "Para espectadores inmersivos que quieren el máximo valor y contenido tras bastidores.",
    features: [
      "Acesso ilimitado a todos os Canais de Filmes",
      "Acesso VIP para eventos ao vivo e Watch Parties",
      "Multiplicador 2x de recompensas",
      "Acesso Exclusivo Antecipado aos novos lançamentos",
      "Vota no Fundo para Diretores",
    ],
    cta: "Suscribirse y Apoyar",
    highlighted: true,
  },
  {
    name: "AGARRA Creator",
    price: "Contactar con ventas",
    description: "Apoya el cine directamente y posea las colecciones más exclusivas.",
    features: [
      "Tudo do Passe Premium",
      "Garantia de recompensas raras",
      "Convite a eventos físicos da indústria",
      "Crédito de agradecimento em futuros fundos",
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