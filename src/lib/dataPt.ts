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
    synopsis: "Paul Gauguin, doente e nos últimos dias, é levado a julgamento pelas autoridades francesas no Taiti enquanto fica obcecado em pintar sua última grande obra.",
    shortDescription: "Gauguin enfrenta julgamento no Taiti enquanto pintava sua última obra.",
    whyItMatters: "Uma poderosa exploração visual de um capítulo pouco conhecido da vida do famoso pintor.",
    image: "https://m.media-amazon.com/images/M/MV5BY2E2YTgwMmMtZGYzMS00YjA4LWFmM2YtZjcxMWY5M2RkY2YzXkEyXkFqcGc@._V1_QL75_UY562_CR27,0,380,562_.jpg",
    backdrop: "/artfan/gauguin.png",
    status: "Trending",
    members: 2847,
    rewards: 12,
    upcomingEvent: "Perguntas e respostas ao vivo com o diretor – 28 de março",
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
    synopsis: "Após o assassinato de um milionário, seu guarda-costas descobre três suspeitos na casa enquanto uma valiosa pasta desaparece.",
    shortDescription: "Um guarda-costas encontra três suspeitos de assassinato e uma pasta desaparecida.",
    whyItMatters: "Fornece uma estrutura narrativa sofisticada ao gênero suspense na América Latina.",
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
    synopsis: "Depois de ser descoberta disfarçada de Virgem, Amparo foge com medo do pai do internato de freiras onde foi acolhida. Ele chega a um bairro marginalizado de Medellín para morar perto de sua irmã. Forçada a se tornar esposa do Animal, ela sobrevive e busca salvar a filha.",
    shortDescription: "Forçada a conviver com ‘o Animal’, uma mulher luta para sobreviver e proteger sua filha.",
    whyItMatters: "Um retrato cru e dolorosamente realista de violência e sobrevivência.",
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
    synopsis: "James retorna à sua terra natal, a América Latina, após 30 anos para remover um órgão de uma vítima. A viagem o obriga a reviver seu passado violento.",
    shortDescription: "Um homem retorna à América Latina para pegar um órgão, enfrentando seu passado.",
    whyItMatters: "Ele expõe realidades sociais cruas através de uma narrativa cativante.",
    image: "https://m.media-amazon.com/images/M/MV5BOGZiMmI5NTgtNWVkNS00ZTU4LTgxYmUtNTQ0NTRlMzFkZTc2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    backdrop: "/artfan/humanpersons.png",
    status: "Event this week",
    members: 1923,
    rewards: 8,
    upcomingEvent: "Festa de Vigilância da Comunidade – 25 de março",
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
    synopsis: "Duas mulheres de diferentes classes sociais se encontram durante um desastre natural que tira seu passado, unindo-as como imigrantes da noite para o dia.",
    shortDescription: "Um desastre une duas mulheres muito diferentes como imigrantes durante a noite.",
    whyItMatters: "Um retrato emocional da perda e da resiliência no cinema latino-americano.",
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
    synopsis: "Depois de sobreviver ao seu próprio vício, um homem luta para preservar a sua sanidade e salvar a sua família.",
    shortDescription: "Um homem luta para manter a sanidade e salvar sua família.",
    whyItMatters: "Apresenta uma narrativa emocional e íntima ao lado de performances brilhantes.",
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
    synopsis: "A vida pacífica de um homem é perturbada quando uma menina de 13 anos cruza o caminho de seu filho e começa a extorquir dinheiro dos dois.",
    shortDescription: "Uma menina de 13 anos extorquia dinheiro de um homem pacífico e de seu filho.",
    whyItMatters: "Uma aula magistral sobre como criar tensão a partir de situações cotidianas.",
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
    synopsis: "A verdadeira história de um policial ciumento e sua jovem esposa morando em uma favela na América do Sul.",
    shortDescription: "A história baseada em fatos reais de um policial ciumento e sua jovem esposa.",
    whyItMatters: "Um dos filmes venezuelanos de maior sucesso de todos os tempos, que expõe o machismo e o poder.",
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
    synopsis: "Três jovens que conhecem um imigrante romeno em Madrid decidem viajar para o mar para escapar às misérias das suas vidas.",
    shortDescription: "Três jovens viajam para o mar para escapar de suas vidas miseráveis.",
    whyItMatters: "Captura a rebelião e a vulnerabilidade da juventude com total realismo.",
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
    excerpt: "Como uma geração de cineastas está redefinindo a narrativa colombiana, saindo da sombra de García Márquez para um território novo e ousado.",
    category: "Notas do Festival",
    author: "Carolina Vásquez",
    date: "18 de Mar, 2026",
    readTime: "Lectura de 8 min",
    image: IMAGES.festival,
  },
  {
    id: "interview-mendonca-filho",
    title: "Kleber Mendonça Filho: 'La arquitectura es memoria hecha visible'",
    excerpt: "O autor brasileiro discute Fragmentos de Luz, a transformação do Recife e por que os edifícios contam histórias que as pessoas silenciam.",
    category: "Entrevistas",
    author: "Diego Lerman",
    date: "15 de Mar, 2026",
    readTime: "Lectura de 12 min",
    image: IMAGES.director,
  },
  {
    id: "community-rewards-guide",
    title: "Cómo los Canales de AGARRA están Cambiando la Distribución",
    excerpt: "De espectadores passivos a participantes ativos: como canais comunitários criam novo valor para o cinema.",
    category: "Comunidade",
    author: "Editorial AGARRA",
    date: "12 de Mar, 2026",
    readTime: "Lectura de 6 min",
    image: IMAGES.documentary,
  },
  {
    id: "directors-notes-bustamante",
    title: "Notas de Director: Jayro Bustamante al Filmar Historias Indígenas",
    excerpt: "O diretor guatemalteco compartilha sua abordagem em relação à representação, à colaboração e à responsabilidade de contar essas histórias.",
    category: "Notas do Diretor",
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
    description: "PDF exclusivo para download do roteiro original com notas nas margens.",
    type: "Coleccionable Digital",
    rarity: "Raro",
    filmTitle: "Gauguin y el Canal",
  },
  {
    id: "reward-2",
    title: "Invitación VIP a Estreno",
    description: "Entrada digital gratuita para a próxima festa de exibição do filme.",
    type: "Pase",
    rarity: "Común",
    filmTitle: "Humanpersons",
  },
  {
    id: "reward-3",
    title: "Fotografía Inédita",
    description: "Imagens de bastidores em alta resolução prontas para download.",
    type: "Arte",
    rarity: "Épico",
    filmTitle: "Hora menos",
  },
  {
    id: "reward-4",
    title: "Póster Firmado (Físico)",
    description: "Edição limitada do pôster oficial enviado para sua casa.",
    type: "Artículo Físico",
    rarity: "Legendario",
    filmTitle: "Km 72",
  },
];

export const passTiers = [
  {
    name: "Explora",
    price: "Gratis",
    description: "Comece sua coleção e junte-se à comunidade de filmes independentes.",
    features: [
      "Junte-se aos canais da comunidade gratuitamente",
      "Ganhe recompensas básicas",
      "Participe de discussões",
      "Compre ingressos individuais"
    ],
    cta: "Crear Cuenta",
    highlighted: false,
  },
  {
    name: "AGARRA Pass",
    price: "4,99 al mes",
    description: "Para espectadores envolventes que desejam valor máximo e conteúdo de bastidores.",
    features: [
      "Acesso ilimitado a todos os canais de filmes",
      "Passe VIP para eventos ao vivo e assistir festas",
      "Multiplicador de recompensa 2x",
      "Acesso antecipado exclusivo a novos lançamentos",
      "Vote no Fundo de Diretores",
    ],
    cta: "Suscribirse y Apoyar",
    highlighted: true,
  },
  {
    name: "AGARRA Creator",
    price: "Contactar con ventas",
    description: "Apoie o cinema diretamente e possua as coleções mais exclusivas.",
    features: [
      "Tudo sobre o Passe Premium",
      "Garantia de recompensas raras",
      "Convite para eventos físicos da indústria",
      "Obrigado crédito em fundos futuros",
      "Produtos oficiais enviados anualmente",
    ],
    cta: "Convertirse en Patrocinador",
    highlighted: false,
  },
];

export const faqItems = [
  {
    question: "Para onde vai meu dinheiro?",
    answer: "Diferentemente das plataformas tradicionais, a AGARRA opera com um modelo onde 70% do valor de cada passe retorna diretamente para as ferramentas de participação dos criadores na plataforma.",
  },
  {
    question: "O que significa 'entrar em um canal'?",
    answer: "Quando você entra em um canal de filmes, esse canal é adicionado à sua biblioteca pessoal. Você pode então interagir em conversas exclusivas, desbloquear itens colecionáveis ​​e assistir a transmissões ao vivo.",
  },
  {
    question: "Posso comprar ingressos individuais em vez do Passe?",
    answer: "Sim, você sempre pode aderir a canais individuais à la carte se preferir não ter os benefícios combinados do ecossistema Premium.",
  },
];

export const countries = ["España", "Argentina", "México", "Colombia", "Chile", "Perú", "Venezuela", "Uruguay", "Panamá"];
export const genres = ["Drama", "Documental", "Thriller", "Comedia", "Coming-of-age", "Experimental", "Histórico", "Acción"];
export const moods = ["Cerebral", "Oscuro", "Inspirador", "Íntimo", "Tenso", "Surreal"];
export const festivals = ["Cannes", "San Sebastián", "Venecia", "Sundance", "Berlinale", "IFF Panamá", "BFI"];