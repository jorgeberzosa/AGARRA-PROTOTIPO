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
    synopsis: "Paul Gauguin, malato e negli ultimi giorni, viene processato dalle autorità francesi a Tahiti mentre diventa ossessionato dalla pittura della sua ultima grande opera.",
    shortDescription: "Gauguin affronta il processo a Tahiti mentre dipinge la sua ultima opera.",
    whyItMatters: "Una potente esplorazione visiva di un capitolo poco conosciuto della vita del famoso pittore.",
    image: "https://m.media-amazon.com/images/M/MV5BY2E2YTgwMmMtZGYzMS00YjA4LWFmM2YtZjcxMWY5M2RkY2YzXkEyXkFqcGc@._V1_QL75_UY562_CR27,0,380,562_.jpg",
    backdrop: "/artfan/gauguin.png",
    status: "Trending",
    members: 2847,
    rewards: 12,
    upcomingEvent: "Domande e risposte in diretta con il regista - 28 marzo",
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
    synopsis: "Dopo l'omicidio di un milionario, la sua guardia del corpo scopre tre sospetti in casa mentre una preziosa valigetta scompare.",
    shortDescription: "Una guardia del corpo trova tre sospettati di omicidio e una valigetta scomparsa.",
    whyItMatters: "Fornisce una struttura narrativa sofisticata al genere thriller in America Latina.",
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
    synopsis: "Dopo essere stata scoperta travestita da Vergine, Amparo fugge per paura del padre dal collegio delle suore dove è stata accolta. Arriva in un quartiere emarginato di Medellín per vivere a stretto contatto con sua sorella. Costretta a diventare la moglie dell'animale, sopravvive e cerca di salvare sua figlia.",
    shortDescription: "Costretta a convivere con \"l'animale\", una donna lotta per sopravvivere e proteggere sua figlia.",
    whyItMatters: "Un ritratto crudo e dolorosamente realistico di violenza e sopravvivenza.",
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
    synopsis: "James torna nella sua nativa America Latina dopo 30 anni per rimuovere un organo da una vittima. Il viaggio lo costringe a rivivere il suo passato violento.",
    shortDescription: "Un uomo torna in America Latina per prendere un organo, affrontando il suo passato.",
    whyItMatters: "Espone realtà sociali crude attraverso una narrazione accattivante.",
    image: "https://m.media-amazon.com/images/M/MV5BOGZiMmI5NTgtNWVkNS00ZTU4LTgxYmUtNTQ0NTRlMzFkZTc2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    backdrop: "/artfan/humanpersons.png",
    status: "Event this week",
    members: 1923,
    rewards: 8,
    upcomingEvent: "Community Watch Party – 25 marzo",
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
    synopsis: "Due donne di diverse classi sociali si incontrano durante un disastro naturale che porta via il loro passato, unendole da un giorno all'altro come immigrate.",
    shortDescription: "Un disastro unisce due donne molto diverse come immigrate da un giorno all'altro.",
    whyItMatters: "Un ritratto emotivo della perdita e della resilienza nel cinema latinoamericano.",
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
    synopsis: "Sopravvissuto alla propria dipendenza, un uomo lotta per preservare la sanità mentale e salvare la sua famiglia.",
    shortDescription: "Un uomo lotta per restare sano di mente e salvare la sua famiglia.",
    whyItMatters: "Mette in mostra una narrazione emotiva e intima insieme a performance brillanti.",
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
    synopsis: "La vita pacifica di un uomo viene sconvolta quando una ragazza di 13 anni incrocia la strada di suo figlio e inizia a estorcere denaro a entrambi.",
    shortDescription: "Una ragazza di 13 anni estorce denaro a un uomo pacifico e a suo figlio.",
    whyItMatters: "Una master class su come creare tensione nelle situazioni quotidiane.",
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
    synopsis: "La storia vera di un agente di polizia geloso e della sua giovane moglie che vivono in una baraccopoli del Sud America.",
    shortDescription: "La storia basata su eventi realmente accaduti di un agente di polizia geloso e della sua giovane moglie.",
    whyItMatters: "Uno dei film venezuelani di maggior successo di tutti i tempi, che mette a nudo machismo e potere.",
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
    synopsis: "Tre giovani che incontrano un immigrato rumeno a Madrid decidono di prendere il mare per sfuggire alle miserie della loro vita.",
    shortDescription: "Tre giovani si recano al mare per sfuggire alle loro miserabili vite.",
    whyItMatters: "Cattura la ribellione e la vulnerabilità dei giovani con crudo realismo.",
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
    excerpt: "Come una generazione di registi sta ridefinendo la narrativa colombiana, uscendo dall'ombra di García Márquez per addentrarsi in un territorio nuovo e audace.",
    category: "Note del festival",
    author: "Carolina Vásquez",
    date: "18 de Mar, 2026",
    readTime: "Lectura de 8 min",
    image: IMAGES.festival,
  },
  {
    id: "interview-mendonca-filho",
    title: "Kleber Mendonça Filho: 'La arquitectura es memoria hecha visible'",
    excerpt: "L'autore brasiliano parla di Frammenti di luce, della trasformazione di Recife e del perché gli edifici raccontano storie di cui le persone tacciono.",
    category: "Interviste",
    author: "Diego Lerman",
    date: "15 de Mar, 2026",
    readTime: "Lectura de 12 min",
    image: IMAGES.director,
  },
  {
    id: "community-rewards-guide",
    title: "Cómo los Canales de AGARRA están Cambiando la Distribución",
    excerpt: "Da spettatori passivi a partecipanti attivi: come i canali guidati dalla comunità creano nuovo valore per il cinema.",
    category: "Comunità",
    author: "Editorial AGARRA",
    date: "12 de Mar, 2026",
    readTime: "Lectura de 6 min",
    image: IMAGES.documentary,
  },
  {
    id: "directors-notes-bustamante",
    title: "Notas de Director: Jayro Bustamante al Filmar Historias Indígenas",
    excerpt: "Il regista guatemalteco condivide il suo approccio alla rappresentazione, alla collaborazione e alla responsabilità di raccontare queste storie.",
    category: "Note del regista",
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
    description: "PDF scaricabile esclusivo della sceneggiatura originale con note ai margini.",
    type: "Coleccionable Digital",
    rarity: "Raro",
    filmTitle: "Gauguin y el Canal",
  },
  {
    id: "reward-2",
    title: "Invitación VIP a Estreno",
    description: "Ingresso digitale gratuito al prossimo watch party del film.",
    type: "Pase",
    rarity: "Común",
    filmTitle: "Humanpersons",
  },
  {
    id: "reward-3",
    title: "Fotografía Inédita",
    description: "Immagini dietro le quinte ad alta risoluzione pronte per il download.",
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
    description: "Inizia la tua collezione e unisciti alla comunità cinematografica indipendente.",
    features: [
      "Unisciti gratuitamente ai canali della community",
      "Guadagna premi base",
      "Partecipare alle discussioni",
      "Acquista i biglietti singoli"
    ],
    cta: "Crear Cuenta",
    highlighted: false,
  },
  {
    name: "AGARRA Pass",
    price: "4,99 al mes",
    description: "Per spettatori coinvolgenti che desiderano il massimo valore e contenuti dietro le quinte.",
    features: [
      "Accesso illimitato a tutti i canali di film",
      "Pass VIP per eventi dal vivo e feste",
      "Moltiplicatore di ricompensa 2x",
      "Accesso anticipato esclusivo alle nuove uscite",
      "Voto nel Fondo dei direttori",
    ],
    cta: "Suscribirse y Apoyar",
    highlighted: true,
  },
  {
    name: "AGARRA Creator",
    price: "Contactar con ventas",
    description: "Sostieni direttamente il cinema e possiedi le collezioni più esclusive.",
    features: [
      "Tutto sul Premium Pass",
      "Garanzia di premi rari",
      "Invito a eventi fisici del settore",
      "Grazie credito sui fondi futuri",
      "Merchandise ufficiale inviato ogni anno",
    ],
    cta: "Convertirse en Patrocinador",
    highlighted: false,
  },
];

export const faqItems = [
  {
    question: "Dove vanno i miei soldi?",
    answer: "A differenza delle piattaforme tradizionali, AGARRA opera con un modello in cui il 70% del valore di ogni pass ritorna direttamente agli strumenti di partecipazione dei creatori sulla piattaforma.",
  },
  {
    question: "Cosa significa \"unirsi a un canale\"?",
    answer: "Quando ti iscrivi a un canale di film, quel canale viene aggiunto alla tua libreria personale. Puoi quindi interagire in conversazioni esclusive, sbloccare oggetti da collezione e partecipare a live streaming.",
  },
  {
    question: "Posso acquistare biglietti singoli al posto del Pass?",
    answer: "Sì, puoi sempre unirti ai singoli canali à la carte se preferisci non avere i vantaggi combinati dell'ecosistema Premium.",
  },
];

export const countries = ["España", "Argentina", "México", "Colombia", "Chile", "Perú", "Venezuela", "Uruguay", "Panamá"];
export const genres = ["Drama", "Documental", "Thriller", "Comedia", "Coming-of-age", "Experimental", "Histórico", "Acción"];
export const moods = ["Cerebral", "Oscuro", "Inspirador", "Íntimo", "Tenso", "Surreal"];
export const festivals = ["Cannes", "San Sebastián", "Venecia", "Sundance", "Berlinale", "IFF Panamá", "BFI"];