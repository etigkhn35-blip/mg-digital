export type ProjectCategory =
  | "hospitality"
  | "lifestyle"
  | "food"
  | "luxury"
  | "culture";

export type ProjectMediaLayout =
  | "full"
  | "portrait"
  | "landscape"
  | "square";

export type ProjectMedia = {
  src: string;
  type: "image" | "video";
  layout: ProjectMediaLayout;
  alt: string;
};

export type Project = {
  number: string;
  slug: string;

  client: string;
  location: string;
  year: string;

  category: ProjectCategory;
  categoryEN: string;
  categoryTR: string;

  servicesEN: string[];
  servicesTR: string[];

  cover: string;
  coverType: "image" | "video";

archiveSize:
  | "large"
  | "medium"
  | "wide"
  | "portrait"
  | "mediumPortrait";

  featured?: boolean;

  statementEN: string;
  statementTR: string;

  introEN: string;
  introTR: string;

  approachTitleEN: string;
  approachTitleTR: string;

  approachEN: string;
  approachTR: string;

  media: ProjectMedia[];
};


/* =========================================================
   PROJECTS
========================================================= */

export const projects: Project[] = [
  /* =======================================================
     RIXOS TERSANE
  ======================================================= */

  {
    number: "01",
    slug: "rixos-tersane",

    client: "RIXOS TERSANE",
    location: "ISTANBUL",
    year: "2026",

    category: "hospitality",
    categoryEN: "Hospitality",
    categoryTR: "Konaklama",

    servicesEN: [
      "Strategy",
      "Creative",
      "Content",
      "Social",
    ],

    servicesTR: [
      "Strateji",
      "Yaratıcı",
      "İçerik",
      "Sosyal Medya",
    ],

    cover: "/work/rixos-tersane/cover.mp4",
    coverType: "video",

    archiveSize: "large",

    featured: true,

    statementEN:
      "Turning a destination into a cultural point of view.",

    statementTR:
      "Bir destinasyonu kültürel bir bakış açısına dönüştürmek.",

    introEN:
      "For Rixos Tersane, we developed a content and communication approach shaped around the energy of Istanbul, contemporary hospitality and the social life surrounding the destination.",

    introTR:
      "Rixos Tersane için İstanbul'un enerjisini, çağdaş konaklama deneyimini ve destinasyonun çevresindeki sosyal yaşamı merkeze alan bir içerik ve iletişim yaklaşımı geliştirdik.",

    approachTitleEN:
      "More than a hotel.",

    approachTitleTR:
      "Bir otelden fazlası.",

    approachEN:
      "The work focuses on building a living visual world rather than simply documenting a property. People, atmosphere, architecture, food and the city become parts of one connected brand experience.",

    approachTR:
      "Çalışmanın odağında yalnızca bir tesisi belgelemek değil, yaşayan bir görsel dünya kurmak var. İnsanlar, atmosfer, mimari, gastronomi ve şehir tek bir marka deneyiminin parçalarına dönüşüyor.",

   media: [
  {
    src: "/work/rixos-tersane/01.png",
    type: "image",
    layout: "full",
    alt: "Rixos Tersane Istanbul",
  },
  {
    src: "/work/rixos-tersane/02.png",
    type: "image",
    layout: "portrait",
    alt: "Rixos Tersane Istanbul",
  },
  {
    src: "/work/rixos-tersane/03.png",
    type: "image",
    layout: "portrait",
    alt: "Rixos Tersane Istanbul",
  },
  {
    src: "/work/rixos-tersane/04.png",
    type: "image",
    layout: "full",
    alt: "Rixos Tersane Istanbul",
  },
  {
    src: "/work/rixos-tersane/05.png",
    type: "image",
    layout: "landscape",
    alt: "Rixos Tersane Istanbul",
  },
  {
    src: "/work/rixos-tersane/06.png",
    type: "image",
    layout: "full",
    alt: "Rixos Tersane Istanbul",
  },
],
  },


  /* =======================================================
     SPLENDID PALACE
  ======================================================= */

  {
    number: "02",
    slug: "splendid-palace",

    client: "SPLENDID PALACE",
    location: "BÜYÜKADA · ISTANBUL",
    year: "2026",

    category: "hospitality",
    categoryEN: "Hospitality",
    categoryTR: "Konaklama",

    servicesEN: [
      "Strategy",
      "Content",
      "Photography",
      "Digital",
    ],

    servicesTR: [
      "Strateji",
      "İçerik",
      "Fotoğraf",
      "Dijital",
    ],

    cover: "/work/splendid-palace/cover.mp4",
    coverType: "video",

    archiveSize: "medium",

    featured: true,

    statementEN:
      "A historic icon, seen through a contemporary lens.",

    statementTR:
      "Tarihi bir ikon, çağdaş bir bakışla yeniden anlatılıyor.",

    introEN:
      "Our work for Splendid Palace brings together heritage, island culture and contemporary hospitality through a visual language that respects the character of the property without becoming nostalgic.",

    introTR:
      "Splendid Palace için yürüttüğümüz çalışma; mirası, ada kültürünü ve çağdaş konaklama anlayışını, yapının karakterine saygı duyan ancak nostaljiye sıkışmayan bir görsel dilde buluşturuyor.",

    approachTitleEN:
      "Heritage without nostalgia.",

    approachTitleTR:
      "Nostaljiye sıkışmayan bir miras.",

    approachEN:
      "Instead of treating history as decoration, we use it as context. The result is a brand world that feels established, relevant and alive.",

    approachTR:
      "Tarihi dekoratif bir unsur olarak değil, markanın bağlamı olarak ele alıyoruz. Böylece köklü, güncel ve yaşayan bir marka dünyası ortaya çıkıyor.",

  media: [
  {
    src: "/work/splendid-palace/01.png",
    type: "image",
    layout: "full",
    alt: "Splendid Palace Hotel",
  },
  {
    src: "/work/splendid-palace/02.png",
    type: "image",
    layout: "portrait",
    alt: "Splendid Palace Hotel",
  },
  {
    src: "/work/splendid-palace/03.png",
    type: "image",
    layout: "portrait",
    alt: "Splendid Palace Hotel",
  },
  {
    src: "/work/splendid-palace/04.mp4",
    type: "video",
    layout: "full",
    alt: "Splendid Palace Hotel",
  },
  {
    src: "/work/splendid-palace/05.png",
    type: "image",
    layout: "landscape",
    alt: "Splendid Palace Hotel",
  },
  {
    src: "/work/splendid-palace/06.png",
    type: "image",
    layout: "full",
    alt: "Splendid Palace Hotel",
  },
],
  },


  /* =======================================================
     CARTIER
  ======================================================= */

  {
    number: "03",
    slug: "cartier",

    client: "CARTIER",
    location: "ISTANBUL",
    year: "2026",

    category: "luxury",
    categoryEN: "Luxury",
    categoryTR: "Lüks",

    servicesEN: [
      "Content",
      "Photography",
      "Production",
    ],

    servicesTR: [
      "İçerik",
      "Fotoğraf",
      "Prodüksiyon",
    ],

    cover: "/work/cartier/cover.mp4",
    coverType: "video",

    archiveSize: "medium",

    featured: true,

    statementEN:
      "Luxury expressed through restraint, detail and atmosphere.",

    statementTR:
      "Lüksü ölçü, detay ve atmosfer üzerinden anlatmak.",

    introEN:
      "A visual production shaped around precision, material, light and the quiet confidence of an established luxury house.",

    introTR:
      "Hassasiyet, malzeme, ışık ve köklü bir lüks markanın sessiz özgüveni etrafında şekillenen görsel bir prodüksiyon.",

    approachTitleEN:
      "Less noise. More presence.",

    approachTitleTR:
      "Daha az gürültü. Daha güçlü bir etki.",

    approachEN:
      "Every frame is treated as an exercise in restraint. Composition, movement and detail work together without competing for attention.",

    approachTR:
      "Her kare ölçülü bir yaklaşım üzerinden ele alınıyor. Kompozisyon, hareket ve detay; dikkat için birbiriyle yarışmadan birlikte çalışıyor.",

  media: [
  {
    src: "/work/cartier/01.jpg",
    type: "image",
    layout: "full",
    alt: "Cartier",
  },
  {
    src: "/work/cartier/02.jpg",
    type: "image",
    layout: "portrait",
    alt: "Cartier",
  },
  {
    src: "/work/cartier/03.jpg",
    type: "image",
    layout: "portrait",
    alt: "Cartier",
  },
  {
    src: "/work/cartier/04.jpg",
    type: "image",
    layout: "full",
    alt: "Cartier",
  },
  {
    src: "/work/cartier/05.jpg",
    type: "image",
    layout: "landscape",
    alt: "Cartier",
  },
  {
    src: "/work/cartier/06.jpg",
    type: "image",
    layout: "full",
    alt: "Cartier",
  },
],
  },


  /* =======================================================
     MYNOS BODRUM
  ======================================================= */

  {
    number: "04",
    slug: "mynos-bodrum",

    client: "MYNOS BODRUM",
    location: "BODRUM",
    year: "2026",

    category: "hospitality",
    categoryEN: "Hospitality",
    categoryTR: "Konaklama",

    servicesEN: [
      "Creative",
      "Content",
      "Social",
      "Digital",
    ],

    servicesTR: [
      "Yaratıcı",
      "İçerik",
      "Sosyal Medya",
      "Dijital",
    ],

    cover: "/work/mynos-bodrum/cover.mp4",
    coverType: "video",

    archiveSize: "mediumPortrait",

    featured: true,

    statementEN:
      "A slower rhythm for a different side of Bodrum.",

    statementTR:
      "Bodrum'un başka bir yüzü için daha sakin bir ritim.",

    introEN:
      "For Mynos Bodrum, the visual world is shaped by light, texture, landscape and the effortless rhythm of the Aegean.",

    introTR:
      "Mynos Bodrum'un görsel dünyasını ışık, doku, peyzaj ve Ege'nin zahmetsiz ritmi etrafında şekillendiriyoruz.",

    approachTitleEN:
      "Let the place breathe.",

    approachTitleTR:
      "Mekâna nefes alanı bırakmak.",

    approachEN:
      "The creative approach avoids overstatement. Natural moments and considered compositions allow the destination to speak for itself.",

    approachTR:
      "Yaratıcı yaklaşım abartıdan uzak duruyor. Doğal anlar ve kontrollü kompozisyonlar, destinasyonun kendi karakterini anlatmasına alan açıyor.",

    media: [
  {
    src: "/work/mynos-bodrum/01.png",
    type: "image",
    layout: "full",
    alt: "Mynos Bodrum",
  },
  {
    src: "/work/mynos-bodrum/02.jpg",
    type: "image",
    layout: "portrait",
    alt: "Mynos Bodrum",
  },
  {
    src: "/work/mynos-bodrum/03.png",
    type: "image",
    layout: "portrait",
    alt: "Mynos Bodrum",
  },
  {
    src: "/work/mynos-bodrum/04.jpg",
    type: "image",
    layout: "full",
    alt: "Mynos Bodrum",
  },
  {
    src: "/work/mynos-bodrum/05.jpg",
    type: "image",
    layout: "landscape",
    alt: "Mynos Bodrum",
  },
  {
    src: "/work/mynos-bodrum/06.png",
    type: "image",
    layout: "full",
    alt: "Mynos Bodrum",
  },
],
  },


  /* =======================================================
     LA LARA
  ======================================================= */

  {
    number: "05",
    slug: "la-lara",

    client: "LA LARA",
    location: "BODRUM",
    year: "2026",

    category: "lifestyle",
    categoryEN: "Lifestyle",
    categoryTR: "Yaşam Tarzı",

    servicesEN: [
      "Creative",
      "Content",
      "Photography",
      "Social",
    ],

    servicesTR: [
      "Yaratıcı",
      "İçerik",
      "Fotoğraf",
      "Sosyal Medya",
    ],

    cover: "/work/la-lara/cover.mp4",
    coverType: "video",

   archiveSize: "wide",

    featured: true,

    statementEN:
      "Building a lifestyle brand around mood, place and personality.",

    statementTR:
      "Duygu, mekân ve karakter etrafında bir yaşam tarzı markası kurmak.",

    introEN:
      "La Lara is approached as a world rather than a venue. The visual identity grows from its atmosphere, people and relationship with Bodrum.",

    introTR:
      "La Lara'yı yalnızca bir mekân olarak değil, kendi dünyası olan bir marka olarak ele alıyoruz. Görsel kimlik; atmosferinden, insanlarından ve Bodrum'la kurduğu ilişkiden besleniyor.",

    approachTitleEN:
      "Create a world.",

    approachTitleTR:
      "Bir dünya yaratmak.",

    approachEN:
      "The objective is consistency without repetition: a recognizable feeling that can evolve across campaigns, seasons and formats.",

    approachTR:
      "Amaç tekrar etmeden tutarlılık yaratmak: kampanyalar, sezonlar ve farklı formatlar boyunca gelişebilen ancak her zaman tanınabilir kalan bir his.",

   media: [
  {
    src: "/work/la-lara/01.jpg",
    type: "image",
    layout: "full",
    alt: "La Lara",
  },
  {
    src: "/work/la-lara/02.jpg",
    type: "image",
    layout: "portrait",
    alt: "La Lara",
  },
  {
    src: "/work/la-lara/03.jpg",
    type: "image",
    layout: "portrait",
    alt: "La Lara",
  },
  {
    src: "/work/la-lara/04.png",
    type: "image",
    layout: "full",
    alt: "La Lara",
  },
  {
    src: "/work/la-lara/05.png",
    type: "image",
    layout: "landscape",
    alt: "La Lara",
  },
  {
    src: "/work/la-lara/06.jpg",
    type: "image",
    layout: "full",
    alt: "La Lara",
  },
],
  },


  /* =======================================================
     THE ISTANBUL BUTCHER
  ======================================================= */

  {
    number: "06",
    slug: "the-istanbul-butcher",

    client: "THE ISTANBUL BUTCHER",
    location: "ISTANBUL",
    year: "2026",

    category: "food",
    categoryEN: "Food & Beverage",
    categoryTR: "Gastronomi",

    servicesEN: [
      "Creative",
      "Content",
      "Photography",
    ],

    servicesTR: [
      "Yaratıcı",
      "İçerik",
      "Fotoğraf",
    ],

    cover:
      "/work/the-istanbul-butcher/cover.mp4",

    coverType: "video",

    archiveSize: "medium",

    featured: true,

    statementEN:
      "Making appetite part of the brand language.",

    statementTR:
      "İştahı marka dilinin bir parçasına dönüştürmek.",

    introEN:
      "A content system built around product, craft, texture and the character of the restaurant experience.",

    introTR:
      "Ürün, ustalık, doku ve restoran deneyiminin karakteri etrafında kurulan bir içerik sistemi.",

    approachTitleEN:
      "Make it tangible.",

    approachTitleTR:
      "Hissedilir hale getirmek.",

    approachEN:
      "Food communication works when people can almost feel the experience before arriving. Light, texture, movement and detail become essential creative tools.",

    approachTR:
      "Gastronomi iletişimi, insanlar daha mekâna gelmeden deneyimi neredeyse hissedebildiğinde çalışır. Işık, doku, hareket ve detay bu nedenle temel yaratıcı araçlara dönüşür.",

   media: [
  {
    src: "/work/the-istanbul-butcher/01.png",
    type: "image",
    layout: "full",
    alt: "The Istanbul Butcher",
  },
  {
    src: "/work/the-istanbul-butcher/02.png",
    type: "image",
    layout: "portrait",
    alt: "The Istanbul Butcher",
  },
  {
    src: "/work/the-istanbul-butcher/03.jpg",
    type: "image",
    layout: "portrait",
    alt: "The Istanbul Butcher",
  },
  {
    src: "/work/the-istanbul-butcher/04.png",
    type: "image",
    layout: "full",
    alt: "The Istanbul Butcher",
  },
  {
    src: "/work/the-istanbul-butcher/05.jpg",
    type: "image",
    layout: "landscape",
    alt: "The Istanbul Butcher",
  },
  {
    src: "/work/the-istanbul-butcher/06.jpg",
    type: "image",
    layout: "full",
    alt: "The Istanbul Butcher",
  },
],
  },
];


/* =========================================================
   HELPERS
========================================================= */

export function getProject(
  slug: string
): Project | undefined {
  return projects.find(
    (project) => project.slug === slug
  );
}


export function getNextProject(
  slug: string
): Project {
  const index = projects.findIndex(
    (project) => project.slug === slug
  );

  if (
    index === -1 ||
    index === projects.length - 1
  ) {
    return projects[0];
  }

  return projects[index + 1];
}


export function getFeaturedProjects(): Project[] {
  return projects.filter(
    (project) => project.featured
  );
}