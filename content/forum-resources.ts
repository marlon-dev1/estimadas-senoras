export const forumPdfUrl = encodeURI(
  "/pdf/La hermanastra fea-cineforo (Post para Instagram (45)) (1).pdf",
);

export type ForumResource = {
  id: string;
  category: "Carteles" | "Guías";
  title: string;
  image: string;
  alt: string;
  description: string;
  sourceUrl: string;
  page?: number;
};

// Material original facilitado por el cineforo. Las fechas que aparecen en los
// carteles pertenecen a cada pieza y no constituyen una agenda actualizada.
export const forumResources: ForumResource[] = [
  {
    id: "la-hermanastra-fea",
    category: "Carteles",
    title: "La hermanastra fea",
    image: "/images/foro/la-hermanastra-fea.webp",
    alt: "Cartel de La hermanastra fea, con un retrato en blanco y negro y el nombre del cineforo en fucsia",
    description:
      "El cartel del encuentro dedicado a la película de Emilie Blichfeldt. Una invitación a conversar sobre la belleza, el cuerpo y las expectativas.",
    sourceUrl:
      "https://drive.google.com/file/d/1pvWgzYKWDCOQmOuq8KfOyqpRWYXe5iCo/view",
  },
  {
    id: "huesera",
    category: "Carteles",
    title: "Huesera",
    image: "/images/foro/huesera.webp",
    alt: "Cartel de Huesera del cineforo Estimadas Señoras, en tonos verdes y con una mujer de espaldas",
    description:
      "La pieza del cineforo para Huesera, dirigida por Michelle Garza Cervera. Cine y preguntas para compartir después de los créditos.",
    sourceUrl:
      "https://drive.google.com/file/d/1No03Pr06pOIM2r2r4wUJzQp_EeYr-DEv/view",
  },
  {
    id: "guia-hermanastra-presentacion",
    category: "Guías",
    title: "Una mirada a La hermanastra fea",
    image: "/images/foro/guia-hermanastra-1.webp",
    alt: "Primera página de la guía de La hermanastra fea: ficha de la película y presentación de la historia",
    description:
      "La ficha y la presentación de la película que abren el material de acompañamiento del cineforo.",
    sourceUrl: `${forumPdfUrl}#page=1`,
    page: 1,
  },
  {
    id: "poor-things",
    category: "Carteles",
    title: "Poor Things",
    image: "/images/foro/poor-things.webp",
    alt: "Cartel de Poor Things con un collage de Bella Baxter sobre el nombre Estimadas Señoras en azul",
    description:
      "El universo visual de Poor Things se encuentra con la identidad del foro en este cartel de la película de Yorgos Lanthimos.",
    sourceUrl:
      "https://drive.google.com/file/d/1iP0UwrpyjLugdYJ7K72M-lx3PvkK6GLW/view",
  },
  {
    id: "belen",
    category: "Carteles",
    title: "Belén",
    image: "/images/foro/belen.webp",
    alt: "Cartel negro y verde de Belén, con el nombre del cineforo y los rostros de sus protagonistas",
    description:
      "La pieza gráfica del encuentro alrededor de Belén, película dirigida por Dolores Fonzi.",
    sourceUrl:
      "https://drive.google.com/file/d/1rX6OW4tyXpCjSJbvEo3qxNBsqVrG6NTV/view",
  },
  {
    id: "ellas-hablan",
    category: "Carteles",
    title: "Ellas hablan",
    image: "/images/foro/ellas-hablan.webp",
    alt: "Cartel de Ellas hablan con un marco amarillo, fondo morado y unas manos entrelazadas",
    description:
      "El cartel del cineforo para Ellas hablan, de Sarah Polley. Una historia para poner la escucha y la palabra en el centro.",
    sourceUrl:
      "https://drive.google.com/file/d/1UgxEEdKLAX-mRRc-0lqsI7Pyj1Z--5zn/view",
  },
  {
    id: "promising-young-woman",
    category: "Carteles",
    title: "Promising Young Woman",
    image: "/images/foro/promising-young-woman.webp",
    alt: "Cartel de Promising Young Woman con tipografía rosa, recortes verticales y la marca del cineforo",
    description:
      "La película de Emerald Fennell, en una pieza original del foro que combina fotografía, recortes y tipografía expresiva.",
    sourceUrl:
      "https://drive.google.com/file/d/1COe7zf0quxhs4HVzXmXCZp4fDSMBiQNS/view",
  },
  {
    id: "estimados-senores",
    category: "Carteles",
    title: "Estimados señores",
    image: "/images/foro/estimados-senores.webp",
    alt: "Cartel morado de Estimados señores, con flores y un puño en alto, dedicado al voto femenino en Colombia",
    description:
      "El material del cineforo para la película de Patricia Castañeda, con una mirada a la historia del sufragio femenino en Colombia.",
    sourceUrl:
      "https://drive.google.com/file/d/1K3lhcSg9T4gaAJO5G8A9ZD-1sn_NJ5--/view",
  },
  {
    id: "guia-hermanastra-conversacion",
    category: "Guías",
    title: "Preguntas que abre la película",
    image: "/images/foro/guia-hermanastra-2.webp",
    alt: "Segunda página de la guía: temas para conversar sobre estándares de belleza, rivalidad y amor romántico",
    description:
      "Los temas propuestos en la guía: estándares de belleza, el cuerpo como mercancía, la mirada masculina y el amor romántico.",
    sourceUrl: `${forumPdfUrl}#page=2`,
    page: 2,
  },
  {
    id: "guia-hermanastra-profundizar",
    category: "Guías",
    title: "Para seguir profundizando",
    image: "/images/foro/guia-hermanastra-3.webp",
    alt: "Tercera página de la guía, con canciones, películas, libros, un ensayo y un artículo para profundizar",
    description:
      "La selección de canciones, películas, lecturas y un artículo académico que acompaña la conversación del cineforo.",
    sourceUrl: `${forumPdfUrl}#page=3`,
    page: 3,
  },
];
