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
    synopsis: "Paul Gauguin, malato e nei suoi ultimi giorni, viene processato dalle autorità francesi a Tahiti mentre è ossessionato dal dipingere la sua ultima grande opera.",
    shortDescription: "Gauguin affronta un processo a Tahiti mentre dipinge la sua ultima opera.",
    whyItMatters: "Una potente esplorazione visiva di un capitolo poco noto della vita del famoso pittore.",
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
    synopsis: "Dopo l'omicidio di un milionario, la sua guardia del corpo scopre tre sospetti nella casa mentre scompare una preziosa valigetta.",
    shortDescription: "Una guardia del corpo trova tre sospetti di omicidio e una valigetta smarrita.",
    whyItMatters: "Aggiunge una sofisticata struttura narrativa al genere thriller in America Latina.",
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
    synopsis: "Dopo essere stata scoperta a travestirsi da Vergine, Amparo fugge per paura di suo padre dal collegio. Forzata a diventare la donna dell'Animale, sopravvive e cerca di salvare sua figlia.",
    shortDescription: "Costretta a convivere con 'l'Animale', una donna lotta per sopravvivere e proteggere sua figlia.",
    whyItMatters: "Un ritratto crudo e dolorosamente realistico sulla violenza e la sopravvivenza.",
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
    synopsis: "James torna in America Latina dopo 30 anni per prelevare un organo da una vittima. Il viaggio lo costringe a rivivere il suo passato violento.",
    shortDescription: "Un uomo torna in America Latina per prelevare un organo, affrontando il passato.",
    whyItMatters: "Rivela le crude realtà sociali attraverso una narrazione avvincente.",
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
    synopsis: "Due donne di classi sociali diverse si incontrano durante un disastro naturale che si porta via il loro passato, unendole come immigrate da un giorno all'altro.",
    shortDescription: "Un disastro unisce due donne molto diverse come immigrate da un giorno all'altro.",
    whyItMatters: "Un emozionante ritratto di perdita e resilienza nel cinema latinoamericano.",
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
    synopsis: "Essendo sopravvissuto alla propria dipendenza, un uomo lotta per preservare la propria sanità mentale e salvare la propria famiglia.",
    shortDescription: "Un uomo combatte per mantenere la sua sanità mentale e salvare la sua famiglia.",
    whyItMatters: "Mostra una narrazione emotiva e intima insieme a prestazioni eccezionali.",
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
    synopsis: "La vita pacifica di un uomo viene alterata quando una ragazza di 13 anni incrocia la strada di suo figlio e inizia a estorcere denaro a entrambi.",
    shortDescription: "Una ragazzina di 13 anni estorce a un uomo pacifico e a suo figlio.",
    whyItMatters: "Una lezione magistrale su come costruire tensione da situazioni quotidiane.",
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
    synopsis: "La vera storia di un poliziotto geloso e della sua giovane moglie che vivono in un quartiere povero in Sudamerica.",
    shortDescription: "La storia basata su eventi reali di un poliziotto geloso e di sua giovane moglie.",
    whyItMatters: "Uno dei film venezuelani di maggior successo di tutti i tempi, che espone machismo e potere.",
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
    synopsis: "Tre giovani che incontrano un immigrato rumeno a Madrid decidono di viaggiare verso il mare per fuggire dalla miseria delle loro vite.",
    shortDescription: "Tre giovani viaggiano verso il mare per fuggire dalle loro miserabili vite.",
    whyItMatters: "Cattura la ribellione e la vulnerabilità della giovinezza con un crudo realismo.",
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
    title: "La Nuova Onda del Cinema Colombiano: Oltre il Realismo Magico",
    excerpt: "Di come una generazione di registi stia ridefinendo la narrazione colombiana, uscendo dall'ombra di García Márquez verso territori nuovi.",
    category: "Notas de Festival",
    author: "Carolina Vásquez",
    date: "18 de Mar, 2026",
    readTime: "Lectura de 8 min",
    image: IMAGES.festival,
  },
  {
    id: "interview-mendonca-filho",
    title: "Kleber Mendonça Filho: 'L'architettura è memoria resa visibile'",
    excerpt: "L'autore brasiliano discute Frammenti di Luce, la trasformazione di Recife, e perché gli edifici raccontano storie che le persone tacciono.",
    category: "Entrevistas",
    author: "Diego Lerman",
    date: "15 de Mar, 2026",
    readTime: "Lectura de 12 min",
    image: IMAGES.director,
  },
  {
    id: "community-rewards-guide",
    title: "Come i Canali AGARRA stanno Cambiando la Distribuzione",
    excerpt: "Da spettatori passivi a partecipanti attivi: come i canali guidati dalla comunità creano nuovo valore per il cinema.",
    category: "Comunidad",
    author: "Editorial AGARRA",
    date: "12 de Mar, 2026",
    readTime: "Lectura de 6 min",
    image: IMAGES.documentary,
  },
  {
    id: "directors-notes-bustamante",
    title: "Appunti del Regista: Jayro Bustamante Filmando Storie Indigene",
    excerpt: "Il regista guatemalteco condivide il suo approccio sulla rappresentanza e sulla collaborazione.",
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
    description: "PDF esclusivo scaricabile dello script originale con annotazioni.",
    type: "Coleccionable Digital",
    rarity: "Raro",
    filmTitle: "Gauguin y el Canal",
  },
  {
    id: "reward-2",
    title: "Invitación VIP a Estreno",
    description: "Biglietto digitale gratuito per la prossima watch party del film.",
    type: "Pase",
    rarity: "Común",
    filmTitle: "Humanpersons",
  },
  {
    id: "reward-3",
    title: "Fotografía Inédita",
    description: "Immagini dietro le quinte in alta risoluzione pronte per il download.",
    type: "Arte",
    rarity: "Épico",
    filmTitle: "Hora menos",
  },
  {
    id: "reward-4",
    title: "Póster Firmado (Físico)",
    description: "Edizione limitata del poster ufficiale inviato a casa tua.",
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
      "Unisciti ai Canali della Community gratuitamente",
      "Guadagna premi base",
      "Partecipa alle discussioni",
      "Acquista biglietti individuali"
    ],
    cta: "Crear Cuenta",
    highlighted: false,
  },
  {
    name: "AGARRA Pass",
    price: "4,99 al mes",
    description: "Para espectadores inmersivos que quieren el máximo valor y contenido tras bastidores.",
    features: [
      "Accesso illimitato a tutti i Canali di Film",
      "Pass VIP per eventi dal vivo e Watch Parties",
      "Multiplicador 2x de recompensas",
      "Accesso Esclusivo Anticipato alle nuove uscite",
      "Vota nel Fondo per Registri",
    ],
    cta: "Suscribirse y Apoyar",
    highlighted: true,
  },
  {
    name: "AGARRA Creator",
    price: "Contactar con ventas",
    description: "Apoya el cine directamente y posea las colecciones más exclusivas.",
    features: [
      "Tutto del Pass Premium",
      "Garanzia di premi rari",
      "Invito a eventi fisici del settore",
      "Credito di ringraziamento nei fondi futuri",
      "Merchandising ufficiale inviato annualmente",
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