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

  caseStudy?: ProjectCaseStudy;
};

export type ProjectCaseStudySection = {
  titleEN: string;
  titleTR: string;

  paragraphsEN: string[];
  paragraphsTR: string[];
};

export type ProjectCaseStudy = {
  taglineEN: string;
  taglineTR: string;

  introEN: string;
  introTR: string;

  sections: ProjectCaseStudySection[];
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
caseStudy: {
  taglineEN: "Istanbul, reintroduced.",
  taglineTR: "İstanbul, yeniden.",

  introEN:
    "Some projects are about telling the story of a place. Others require telling the story of a destination at scale.",

  introTR:
    "Bazı projelerde mekânı anlatırsınız. Bazı projelerde ise bir destinasyonun ölçeğini anlatmanız gerekir. Rixos Tersane Istanbul ikinci gruptaydı.",

  sections: [
    {
      titleEN: "NOT JUST A HOTEL. A NEW PIECE OF ISTANBUL.",
      titleTR: "SADECE BİR OTEL DEĞİL. İSTANBUL'UN YENİ BİR PARÇASI.",

      paragraphsEN: [
        "Rixos Tersane Istanbul is positioned not as a conventional city hotel, but as an urban resort, lifestyle destination and meeting point where the historic heritage of the Golden Horn meets contemporary Istanbul.",
        "Our visual approach therefore needed to go far beyond rooms, restaurants and pools.",
        "We began the story with the scale of the architecture — the Golden Horn, the water, the historic silhouette, the shipyard texture, contemporary architecture, people and movement.",
        "While wide frames revealed the scale of the destination, closer compositions brought the experience back to a human level.",
        "The story moved beyond saying 'you can stay here' toward a much more powerful idea: 'you can experience Istanbul from here.'",
      ],

      paragraphsTR: [
        "Haliç’in tarihi dokusunun içinde konumlanan marka kendisini klasik bir şehir otelinden farklı olarak bir urban resort, lifestyle destination ve buluşma noktası şeklinde konumluyor; tarihi tersane mirasını çağdaş İstanbul yaşamıyla buluşturuyor.",
        "Dolayısıyla bizim görsel yaklaşımımız da oda, restoran ve havuz fotoğraflarından çok daha geniş olmak zorundaydı.",
        "Rixos Tersane için hikâyeyi mimarinin ölçeğinden başlattık. Haliç, su, tarihi siluet, tersane dokusu, çağdaş mimari, insan ve hareket aynı İstanbul deneyiminin parçaları haline geldi.",
        "Geniş planlarla destinasyonun büyüklüğünü gösterirken, yakın planlarda deneyimi insan ölçeğine indirdik.",
        "Böylece görsel hikâyeyi yalnızca 'burada kalabilirsiniz' cümlesinden çıkarıp 'İstanbul’u buradan yaşayabilirsiniz' düşüncesine taşıdık.",
      ],
    },

    {
      titleEN: "HERITAGE MEETS NOW.",
      titleTR: "GEÇMİŞ, BUGÜNLE BULUŞUYOR.",

      paragraphsEN: [
        "One of the project's strongest qualities was the ability for old and new to exist within the same frame.",
        "The challenge was to preserve the weight of history without turning it into nostalgia, while presenting modern luxury without overpowering the city's past.",
        "Our production approach was built around this balance: strong geometries in architectural content, movement in lifestyle imagery, warmth in hospitality details and the rhythm of the destination in film.",
        "The result was a visual language that felt more urban, dynamic and editorial than conventional five-star hotel communication.",
      ],

      paragraphsTR: [
        "Bu projenin en güçlü taraflarından biri eski ile yeninin aynı karede yaşayabilmesiydi.",
        "Tarihin ağırlığını nostaljiye dönüştürmeden korumak; modern lüksü ise şehrin geçmişini bastırmadan göstermek gerekiyordu.",
        "Prodüksiyon yaklaşımımız tam olarak bu denge üzerine kuruldu. Mimari içeriklerde güçlü geometriler, lifestyle çekimlerinde hareket, hospitality detaylarında sıcaklık, video içeriklerinde ise destinasyonun ritmi.",
        "Sonuçta ortaya klasik bir beş yıldızlı otel estetiğinden daha şehirli, daha dinamik ve daha editoryal bir anlatım çıktı.",
      ],
    },

    {
      titleEN: "THE CITY IS PART OF THE EXPERIENCE.",
      titleTR: "ŞEHİR, DENEYİMİN BİR PARÇASI.",

      paragraphsEN: [
        "Perhaps the most important distinction of Rixos Tersane is that Istanbul is never left outside the experience.",
        "The city is not simply a view here; it becomes part of the experience itself.",
        "Rather than isolating the brand from Istanbul, we photographed it together with Istanbul.",
        "The Golden Horn became a character rather than a background, while the relationship between water, architecture and the city became central to the visual identity.",
        "Our aim was to position Rixos Tersane not simply as a hotel in Istanbul, but as one of Istanbul's new stages for contemporary life.",
      ],

      paragraphsTR: [
        "Rixos Tersane’nin belki de en önemli farkı, İstanbul’u dışarıda bırakmaması.",
        "Şehir burada yalnızca manzara değil; deneyimin kendisinin bir parçası.",
        "Biz de içerik üretirken markayı İstanbul’dan izole etmek yerine İstanbul’la birlikte çektik.",
        "Haliç’i bir arka plan olarak değil, karakter olarak kullandık. Su, mimari ve şehir arasındaki ilişkiyi görsel kimliğin merkezine taşıdık.",
        "Ve Rixos Tersane’yi yalnızca İstanbul’daki bir otel olarak değil; İstanbul’un yeni yaşam sahnelerinden biri olarak anlatmaya çalıştık.",
      ],
    },
  ],
},
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
caseStudy: {
  taglineEN: "History, still in motion.",
  taglineTR: "Tarih, hâlâ hareket halinde.",

  introEN:
    "Some brands need a new story. At Splendid Palace, the story was already there. Our role was to make it heard again.",

  introTR:
    "Bazı markalar için yeni bir hikâye yaratmanız gerekir. Splendid Palace’ta ise hikâye zaten oradaydı. Bizim yapmamız gereken onu yeniden duyulur hale getirmekti.",

  sections: [
    {
      titleEN: "WE DIDN’T REINVENT THE PALACE. WE LET IT SPEAK AGAIN.",
      titleTR: "SARAYI YENİDEN YARATMADIK. YENİDEN KONUŞMASINA İZİN VERDİK.",

      paragraphsEN: [
        "A part of Büyükada’s memory since 1908, Splendid Palace is more than a hotel. With its silver domes, red shutters and distinctive architecture, it is one of Istanbul’s living icons.",
        "With a brand like this, the greatest mistake would be to use the past simply as decoration. We saw history not as decoration, but as part of the brand’s DNA.",
        "In Splendid Palace’s digital world, we created a careful balance between old and new.",
        "Archive-like details, contemporary production aesthetics, the hotel’s characteristic red, Büyükada’s unique light, domes, corridors, staircases, rooms, gardens, tables and people all became part of the same visual language.",
        "Rather than simply showing beautiful rooms, we wanted to show what time spent at Splendid actually feels like.",
      ],

      paragraphsTR: [
        "1908’den beri Büyükada’nın hafızasının bir parçası olan Splendid Palace; gümüşî kubbeleri, kırmızı panjurları ve kendine özgü mimarisiyle yalnızca bir otel değil, İstanbul’un yaşayan simgelerinden biri.",
        "Böyle bir markayla çalışırken en büyük hata geçmişi dekor olarak kullanmaktır. Biz geçmişi dekor değil, markanın DNA’sı olarak gördük.",
        "Splendid Palace’ın dijital dünyasında yeni ile eski arasında dikkatli bir denge kurduk.",
        "Arşiv hissi taşıyan detaylar, bugünün prodüksiyon estetiği, otelin karakteristik kırmızısı, Büyükada’nın kendine özgü ışığı, kubbeler, koridorlar, merdivenler, odalar, bahçe, masalar ve insanlar aynı görsel dilin parçaları haline geldi.",
        "İçerik üretirken yalnızca güzel odalar göstermek istemedik. Splendid’de geçirilen zamanı göstermek istedik.",
      ],
    },

    {
      titleEN: "A PALACE OF STORIES.",
      titleTR: "HİKÂYELERLE DOLU BİR SARAY.",

      paragraphsEN: [
        "There is one Splendid in the morning, another during the day, another at sunset and a completely different one during a wedding, a fashion event or a celebration.",
        "One of the strongest elements of the brand strategy was refusing to confine Splendid to a single purpose.",
        "Hospitality, gastronomy, events, fashion, culture, celebrations and island life became different chapters of the same brand.",
        "Across social media management, production, special-day campaigns, graphic design, press communication and event content, we kept asking the same question: does this really feel like Splendid?",
      ],

      paragraphsTR: [
        "Sabah başka bir Splendid var. Gün içinde başka. Gün batımında başka. Bir düğün gecesinde, bir moda etkinliğinde ya da 29 Ekim Cumhuriyet Balosu’nda bambaşka.",
        "Marka stratejisinin en güçlü taraflarından biri Splendid’i tek bir kullanım alanına hapsetmemek oldu.",
        "Konaklama, gastronomi, etkinlik, moda, kültür, kutlamalar ve ada yaşamı aynı markanın farklı bölümleri haline geldi.",
        "Sosyal medya yönetiminden prodüksiyona, özel gün kampanyalarından grafik tasarıma, basın iletişiminden etkinlik içeriklerine kadar her temas noktasında aynı soruyu sorduk: Bu içerik gerçekten Splendid gibi mi hissettiriyor?",
      ],
    },

    {
      titleEN: "HERITAGE WITHOUT DUST.",
      titleTR: "TOZLANMAYAN BİR MİRAS.",

      paragraphsEN: [
        "There is a fine line in the communication of historic hotels.",
        "Emphasize the past too much and the brand becomes a museum. Emphasize the present too much and it loses its character.",
        "For Splendid Palace, we chose a third path: preserve the past while placing it inside contemporary culture.",
        "That allows the brand to be nostalgic at times, romantic at others, playful or entirely contemporary — without ever forgetting who it is.",
        "We didn’t tell the story of history. We communicated a history that continues to live.",
      ],

      paragraphsTR: [
        "Tarihi otellerin iletişiminde ince bir çizgi vardır.",
        "Geçmişi fazla öne çıkarırsanız marka müzeye dönüşür. Bugünü fazla öne çıkarırsanız karakterini kaybeder.",
        "Biz Splendid Palace için üçüncü bir yol seçtik: geçmişi koruyup bugünün kültürünün içine yerleştirmek.",
        "Bu nedenle marka kimi zaman nostaljik, kimi zaman romantik, kimi zaman eğlenceli, kimi zaman son derece çağdaş olabiliyor. Ama hiçbir zaman kim olduğunu unutmuyor.",
        "Bir tarihi anlatmadık. Yaşamaya devam eden bir tarihin iletişimini yaptık.",
      ],
    },
  ],
},
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
caseStudy: {
  taglineEN: "When a Maison enters a Palace.",
  taglineTR: "Bir Maison, bir saraya girdiğinde.",

  introEN:
    "Creating content for Cartier begins not with showing more, but with knowing what not to show. Because true luxury often lives in the details.",

  introTR:
    "Cartier için içerik üretmek, daha fazla şey göstermek değil; neyi göstermeyeceğinizi bilmekle başlar. Çünkü gerçek lüks çoğu zaman detaylarda yaşar.",

  sections: [
    {
      titleEN: "LUXURY IS IN THE EDIT.",
      titleTR: "LÜKS, SEÇİMDE SAKLIDIR.",

      paragraphsEN: [
        "A stone catching the light. The movement of a hand. The texture of a fabric. A glance. A guest walking up the stairs. A space becoming something entirely different as the night unfolds.",
        "Our task was not simply to document the scale of the experience, but to make it felt.",
        "In a production of this kind, everything can be filmed. But not everything should be used.",
        "From image selection to editing rhythm, we worked with a controlled visual discipline.",
        "Less movement. More precise movement. Fewer images. Stronger images.",
        "We stayed away from effects that competed with the jewellery, unnecessary camera tricks and disposable social-media aesthetics.",
      ],

      paragraphsTR: [
        "Bir taşın ışığı yakaladığı saniye. Bir elin hareketi. Bir kumaşın dokusu. Bir bakış. Bir davetlinin merdivenden çıkışı. Bir mekânın gecenin ilerleyen saatlerinde başka bir karaktere dönüşmesi.",
        "Bizim için mesele bu ölçeği kamerayla belgelemek değil, hissettirmekti.",
        "Bu tip bir prodüksiyonda her şey çekilebilir. Ama her şey kullanılmamalıdır.",
        "Cartier’ın dünyasını anlatırken görüntü seçiminden kurgu ritmine kadar kontrollü bir görsel disiplin kullandık.",
        "Daha az hareket. Daha doğru hareket. Daha az görüntü. Daha güçlü görüntü.",
        "Mücevherin önüne geçen efektlerden, gereksiz kamera numaralarından ve hızlı tüketilen sosyal medya estetiğinden uzak durduk.",
      ],
    },

    {
      titleEN: "INTO THE WILD.",
      titleTR: "INTO THE WILD.",

      paragraphsEN: [
        "The theatrical character of the event gave us a powerful space for visual storytelling.",
        "The historic architecture of Splendid Palace and Cartier’s contemporary luxury world came together for one night.",
        "On one side: red shutters, domes and more than a century of history. On the other: Panthère, high jewellery, fashion and contemporary culture.",
        "Throughout the production, we searched for the points where these two worlds intersected.",
        "Guest arrivals, jewellery, decoration, architecture, light, conversations and the night itself became fragments of one visual memory.",
      ],

      paragraphsTR: [
        "Etkinliğin teatral yapısı bize güçlü bir görsel anlatı alanı verdi.",
        "Splendid Palace’ın tarihsel mimarisi ile Cartier’ın çağdaş lüks dünyası aynı gece içinde buluştu.",
        "Bir tarafta kırmızı panjurlar, kubbeler ve yüz yılı aşan bir yapı. Diğer tarafta Panthère, yüksek mücevher, moda ve çağdaş kültür.",
        "Prodüksiyon boyunca bu iki dünyanın kesişme noktalarını aradık.",
        "Misafir gelişleri, mücevherler, dekorasyon, mimari, ışık, sohbetler ve gece aynı görsel hafızanın parçalarına dönüştü.",
      ],
    },

    {
      titleEN: "FROM EXPERIENCE TO FILM.",
      titleTR: "DENEYİMDEN FİLME.",

      paragraphsEN: [
        "One of our main objectives was not simply for viewers to understand what happened at the event. We wanted them to wish they had been there.",
        "The aftermovie was therefore designed not as a chronological event recap, but as a memory of the night.",
        "The images determined the rhythm. Some moments accelerated, others slowed down, while certain details were allowed to exist for only a second.",
        "In luxury storytelling, the point is not to explain everything. It is to show the right thing for exactly the right amount of time.",
        "For Cartier, every detail matters. So for us, every frame had to matter too.",
      ],

      paragraphsTR: [
        "Etkinlik prodüksiyonunda en önemli hedeflerimizden biri, içerikleri izleyen kişinin yalnızca orada ne olduğunu anlaması değildi. Orada olmayı istemesiydi.",
        "Bu nedenle aftermovie’yu kronolojik bir etkinlik özeti gibi değil, gecenin hafızası gibi kurguladık.",
        "Ritmi görüntünün kendisi belirledi. Bazı anları hızlandırdık, bazılarında zamanı yavaşlattık, bazı detayların ise yalnızca bir saniyeliğine görünmesine izin verdik.",
        "Çünkü luxury storytelling’de mesele her şeyi anlatmak değildir. Doğru şeyi, doğru süre boyunca göstermektir.",
        "Cartier için her detay önemliydi. Bu nedenle bizim için de her karenin önemli olması gerekiyordu.",
      ],
    },
  ],
},
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

caseStudy: {
  taglineEN: "Eight arms. One Aegean soul.",
  taglineTR: "Sekiz kol. Tek bir Ege ruhu.",

  introEN:
    "Mynos begins with the sea. But it doesn’t end with seafood. Our challenge was to carry the spirit of its Aegean world into digital.",

  introTR:
    "Mynos’un hikâyesi denizle başlıyor. Ama yalnızca deniz ürünleriyle bitmiyor. Bizim için esas mesele bu dünyanın ruhunu dijitale taşımaktı.",

  sections: [
    {
      titleEN: "THE AEGEAN, WITHOUT THE CLICHÉS.",
      titleTR: "KLİŞELERE DÜŞMEDEN EGE.",

      paragraphsEN: [
        "Aegean communication can easily become a cliché: a blue table, a white chair, a plate of fish and a glass of rakı.",
        "For Mynos, we looked for something beyond those familiar codes.",
        "We used the sea, but not merely as a background. We used the sunset, but not merely as a beautiful view. We showed food, but never merely as product.",
        "We treated all of them as parts of the same experience.",
        "Because at Mynos, the real story doesn’t happen on the table. It happens around it.",
      ],

      paragraphsTR: [
        "Ege iletişimi kolayca klişeye dönüşebilir. Mavi masa. Beyaz sandalye. Bir tabak balık. Bir kadeh rakı.",
        "Biz Mynos için bundan daha fazlasını aradık.",
        "Denizi kullandık ama yalnızca fon olarak değil. Gün batımını kullandık ama yalnızca güzel bir manzara olarak değil. Yemeği gösterdik ama yalnızca ürün olarak değil.",
        "Hepsini aynı deneyimin parçaları olarak ele aldık.",
        "Çünkü Mynos’ta asıl hikâye bir masanın üzerinde değil; o masanın etrafında yaşanıyor.",
      ],
    },

    {
      titleEN: "365 SUNSETS. ENDLESS STORIES.",
      titleTR: "365 GÜN BATIMI. SONSUZ HİKÂYE.",

      paragraphsEN: [
        "One of Mynos’ strongest natural advantages is Yalıkavak’s constantly changing light.",
        "The same table can become an entirely different story at different hours of the day.",
        "Natural light therefore became part of the communication itself: the open Aegean tones of daytime, the warmth of golden hour, the blue hour after sunset and the more sophisticated atmosphere of evening service.",
        "Instead of a catalogue of repetitive food photography, the social feed became a living, breathing Yalıkavak diary.",
      ],

      paragraphsTR: [
        "Mynos’un en güçlü doğal avantajlarından biri Yalıkavak’ın değişen ışığı.",
        "Aynı masa, günün farklı saatlerinde bambaşka bir hikâyeye dönüşebiliyor.",
        "Bu nedenle fotoğraf ve video prodüksiyonlarında doğal ışığı iletişimin bir parçası yaptık. Gündüzün açık ve ferah Ege tonları, golden hour’ın sıcaklığı, gün batımından sonraki mavi saat ve akşam servisinin daha sofistike atmosferi.",
        "Böylece Mynos’un sosyal medya akışı tek tip gastronomi fotoğraflarından oluşan bir katalog yerine yaşayan, nefes alan bir Yalıkavak günlüğüne dönüştü.",
      ],
    },

    {
      titleEN: "SEAFOOD. PEOPLE. PLACE.",
      titleTR: "DENİZ. İNSAN. MEKÂN.",

      paragraphsEN: [
        "We never separated the kitchen, service, people and place from one another.",
        "Hands preparing meze. Fresh fish on ice. A warm plate arriving at the table. The movement of the service team. The first ice dropping into a glass of rakı. The last sunlight over the sea.",
        "Together, these moments built Mynos’ brand memory.",
        "Because what people remember is often not the exact name of what they ate. It is how they felt that evening.",
        "Modern without losing its roots. Premium without becoming distant. Local while remaining natural to an international guest.",
      ],

      paragraphsTR: [
        "İçeriklerimizde mutfağı, servisi, insanları ve mekânı birbirinden ayırmadık.",
        "Meze hazırlayan eller. Buz üzerinde taze balıklar. Masaya gelen sıcak tabak. Servis ekibinin hareketi. Rakıya düşen ilk buz. Denizin üzerindeki son güneş.",
        "Hepsi Mynos’un marka hafızasını oluşturdu.",
        "Çünkü insanların hatırladığı şey çoğu zaman yediği yemeğin tam adı değildir. O akşam nasıl hissettiğidir.",
        "Modern ama köklerinden kopmayan. Premium ama mesafeli olmayan. Yerel ama uluslararası misafire de doğal gelen bir dünya kurduk.",
      ],
    },
  ],
},

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

caseStudy: {
  taglineEN: "A little more sun. A little more life.",
  taglineTR: "Biraz daha güneş. Biraz daha hayat.",

  introEN:
    "When we looked at La Lara, we didn’t simply see a restaurant. There was much more than a table, a view, a cocktail or a plate. At the heart of the story was hospitality.",

  introTR:
    "La Lara’ya baktığımızda karşımızda yalnızca bir restoran görmedik. Bir masa, bir manzara, bir kokteyl ya da bir tabaktan çok daha fazlası vardı. Çünkü La Lara’nın hikâyesinin temelinde misafirperverlik var.",

  sections: [
    {
      titleEN: "WE DIDN’T WANT TO SHOW A RESTAURANT. WE WANTED TO SHOW A FEELING.",
      titleTR: "BİR RESTORAN GÖSTERMEK İSTEMEDİK. BİR HİS GÖSTERMEK İSTEDİK.",

      paragraphsEN: [
        "Rather than communicating the venue itself, we chose to communicate moments.",
        "Morning light falling across a breakfast table. A short afternoon break by the pool. A cold drink overlooking Yalıkavak. The changing light before sunset. Dinner beginning. Music. People. Glasses.",
        "And that unmistakable Bodrum feeling of having nowhere else to rush to.",
        "The production language followed the same idea. We didn’t want the content to feel like advertising films.",
        "The camera often moved like another guest, allowing food, people, service, architecture and landscape to become different parts of the same story.",
      ],

      paragraphsTR: [
        "La Lara’nın iletişiminde mekân yerine anları anlatmayı tercih ettik.",
        "Sabah ışığının masaya düştüğü bir kahvaltı. Öğleden sonra havuz kenarında verilen kısa bir mola. Yalıkavak manzarasına karşı soğuk bir içecek. Gün batımına yaklaşan saatlerde değişen ışık. Akşam yemeğinin başlaması. Müzik. İnsanlar. Kadehler.",
        "Ve Bodrum’un o kendine özgü 'acelemiz yok' hissi.",
        "Prodüksiyon dilini de bunun üzerine kurduk. İçeriklerin fazla reklam filmi gibi görünmesini istemedik.",
        "Kamera çoğu zaman bir misafir gibi hareket etti. Yemekler, insanlar, servis, mimari ve manzara aynı hikâyenin farklı parçaları haline geldi.",
      ],
    },

    {
      titleEN: "ALL DAY. ALL MOOD.",
      titleTR: "GÜN BOYU. HER RUH HALİYLE.",

      paragraphsEN: [
        "One of La Lara’s defining qualities is its ability to take on a different character throughout the day.",
        "We therefore refused to confine the brand to the perception of an evening restaurant.",
        "Softer in the morning. More alive at noon. More cinematic at sunset. More social and energetic at night.",
        "By revealing different moods within the same brand, we positioned La Lara not simply as a restaurant to reserve, but as a lifestyle destination accompanying different moments of a day in Yalıkavak.",
      ],

      paragraphsTR: [
        "La Lara’nın önemli özelliklerinden biri günün farklı saatlerinde farklı bir karaktere bürünebilmesi.",
        "Bu nedenle içerik stratejimizi tek bir 'akşam restoranı' algısına hapsetmedik.",
        "Sabah daha yumuşak. Öğlen daha canlı. Sunset saatlerinde daha sinematik. Gece ise daha sosyal ve enerjik.",
        "Aynı marka içinde farklı ruh hallerini göstererek La Lara’yı yalnızca rezervasyon yapılan bir restoran değil, Yalıkavak’ta günün farklı anlarına eşlik eden bir lifestyle destination olarak ele aldık.",
      ],
    },

    {
      titleEN: "HOSPITALITY, WITH A PERSONALITY.",
      titleTR: "KARAKTERİ OLAN MİSAFİRPERVERLİK.",

      paragraphsEN: [
        "We stayed away from the familiar clichés of gastronomy communication.",
        "Warmer. More human. More spontaneous. More Bodrum.",
        "At La Lara, luxury didn’t need to be communicated through marble or oversized words.",
        "Luxury here was the view, time, good service, the right music, beautiful food and a few hours spent around the same table with people you love.",
        "Our role was to make exactly that visible — not simply to show La Lara, but to communicate what being at La Lara feels like.",
      ],

      paragraphsTR: [
        "Markanın sosyal medya dilinde klasik gastronomi klişelerinden uzak durduk.",
        "Daha sıcak. Daha insani. Daha spontane. Daha Bodrum.",
        "Çünkü La Lara’da lüksü mermerler ya da büyük kelimeler üzerinden anlatmak gerekmiyordu.",
        "Buradaki lüks; manzara, zaman, iyi servis, doğru müzik, güzel yemek ve sevdiğiniz insanlarla aynı masada geçirilen birkaç saatti.",
        "Bizim görevimiz de tam olarak bunu görünür kılmaktı. La Lara’yı göstermek değil, La Lara’da olmanın nasıl hissettirdiğini anlatmak.",
      ],
    },
  ],
},

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

caseStudy: {
  taglineEN: "Craft, served with character.",
  taglineTR: "Ustalık, karakterle servis edilir.",

  introEN:
    "For us, The Istanbul Butcher was never simply a place that sold good meat. Product, craft, material and character sat at the heart of the story.",

  introTR:
    "The Istanbul Butcher bizim için yalnızca iyi et satan bir mekân değildi. Hikâyenin merkezinde ürün, ustalık, malzeme ve karakter vardı.",

  sections: [
    {
      titleEN: "GOOD TASTE DOESN’T NEED TO SHOUT.",
      titleTR: "İYİ ZEVKİN BAĞIRMAYA İHTİYACI YOK.",

      paragraphsEN: [
        "We moved away from the familiar codes of restaurant communication.",
        "Instead of a social feed where every plate is pushed toward the camera and every post says 'come and try this', we built a calmer, more confident and more refined world.",
        "The most important principle was never to lose the reality of the product.",
        "We showed meat not only as the final dish, but throughout its journey: being cut, prepared, meeting the fire, in the hands of the craftsman and before reaching the table.",
        "Knife marks, the texture of wood, the natural colour of meat, fire, smoke, hands and architecture all became part of the brand story.",
        "Rather than creating an excessively perfect food world, we looked for perfection inside real details.",
      ],

      paragraphsTR: [
        "Markayı anlatırken restoran iletişiminin alışılmış kodlarından uzaklaştık.",
        "Tabakların sürekli kameraya yaklaştırıldığı, her içeriğin 'gelin, deneyin' dediği bir sosyal medya dili yerine; kendine güvenen, daha sakin ve daha rafine bir dünya kurduk.",
        "The Istanbul Butcher’ın görsel dünyasında bizim için en önemli konu, ürünün gerçekliğini kaybetmemekti.",
        "Eti yalnızca servis edilmiş son haliyle değil; kesilirken, hazırlanırken, ateşle buluşurken, ustanın elindeyken ve masaya ulaşmadan önceki bütün yolculuğuyla göstermeye başladık.",
        "Bıçakların izi, ahşabın dokusu, etin doğal rengi, ateş, duman, ustanın elleri ve mekânın mimarisi markanın hikâyesinin parçaları oldu.",
        "Fazla kusursuz görünen bir gastronomi dünyası yaratmak yerine, kusursuzluğu gerçek detayların içinde aradık.",
      ],
    },

    {
      titleEN: "FROM PRODUCT TO RITUAL.",
      titleTR: "ÜRÜNDEN RİTÜELE.",

      paragraphsEN: [
        "The content strategy was built not only around food, but around the entire Istanbul Butcher experience.",
        "Selecting the meat. Preparing it. The movement of the craftsman. Setting the table. The moment of service. The calm of lunch or the energy of dinner.",
        "The social feed stopped behaving like a menu display and became a digital window into the brand’s world.",
        "The same principle shaped the caption language: fewer adjectives, fewer sales lines, more character.",
        "We never tried to make the product appear more valuable than it was. We simply made sure its existing value could be seen properly.",
      ],

      paragraphsTR: [
        "İçerik stratejisinin merkezine yalnızca yemekleri değil, The Istanbul Butcher deneyimini yerleştirdik.",
        "Bir etin seçilmesi. Hazırlanması. Ustanın hareketleri. Masanın kurulması. Servis anı. Bir öğle yemeğinin sakinliği ya da akşam servisinin enerjisi.",
        "Böylece sosyal medya hesabını bir menü vitrini olmaktan çıkarıp markanın dünyasına açılan dijital bir pencereye dönüştürdük.",
        "Caption dilinde de aynı prensibi koruduk: daha az sıfat, daha az satış cümlesi, daha fazla karakter.",
        "Ürünü olduğundan daha değerli göstermeye çalışmadık; zaten sahip olduğu değerin doğru şekilde görünmesini sağladık.",
      ],
    },

    {
      titleEN: "QUIET LUXURY, BUT EDIBLE.",
      titleTR: "SESSİZ LÜKS, AMA YENİLEBİLİR.",

      paragraphsEN: [
        "The content world we created for The Istanbul Butcher reflects an approach to gastronomy we strongly believe in: quiet luxury.",
        "A premium perception that comes from quality rather than spectacle.",
        "Communication centred around the work behind a plate, the atmosphere of a space and the natural aesthetics of a good product.",
        "The essence of the project was never simply to show good meat.",
        "It was to communicate why good meat feels different.",
      ],

      paragraphsTR: [
        "The Istanbul Butcher için yarattığımız içerik dünyası, gastronomide bizim sevdiğimiz bir yaklaşımın karşılığı oldu: sessiz lüks.",
        "Gösterişten değil kaliteden gelen bir premium algı.",
        "Bir tabağın arkasındaki emeği, bir mekânın atmosferini ve iyi ürünün kendi estetiğini merkeze alan bir iletişim.",
        "The Istanbul Butcher için yaptığımız işin özü iyi eti göstermek değildi.",
        "İyi etin neden farklı hissettirdiğini anlatmaktı.",
      ],
    },
  ],
},
      
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

    /* =======================================================
     ROOT YALIKAVAK
  ======================================================= */

  {
    number: "07",
    slug: "root-yalikavak",

    client: "ROOT YALIKAVAK",
    location: "YALIKAVAK · BODRUM",
    year: "2026",

    category: "lifestyle",
    categoryEN: "Lifestyle",
    categoryTR: "Yaşam Tarzı",

    servicesEN: ["Strategy", "Creative", "Content", "Social"],
    servicesTR: ["Strateji", "Yaratıcı", "İçerik", "Sosyal Medya"],

   cover: "/work/root-yalikavak/cover.jpg",
   coverType: "image",

    archiveSize: "large",

    statementEN:
      "A distinctive social world shaped by the rhythm of Yalıkavak.",

    statementTR:
      "Yalıkavak'ın ritmiyle şekillenen özgün bir sosyal dünya.",

    introEN:
      "For Root Yalıkavak, we build a visual and communication world around atmosphere, people, music and the energy of Bodrum.",

    introTR:
      "Root Yalıkavak için atmosfer, insanlar, müzik ve Bodrum'un enerjisi etrafında şekillenen bir görsel dünya ve iletişim dili oluşturuyoruz.",

    approachTitleEN: "Built around atmosphere.",
    approachTitleTR: "Atmosfer etrafında şekillenen.",

    approachEN:
      "The creative direction captures the energy of the destination through movement, people and moments rather than treating the venue as a static space.",

    approachTR:
      "Yaratıcı yaklaşım, mekânı statik bir alan olarak göstermek yerine hareket, insanlar ve anlar üzerinden destinasyonun enerjisini yakalıyor.",
caseStudy: {
  taglineEN: "Summer, with a point of view.",
  taglineTR: "Yaza farklı bir bakış.",

  introEN:
    "Root Yalıkavak is not simply about staying in Bodrum. It is about a particular way of experiencing summer — through architecture, design, atmosphere and the effortless rhythm of Yalıkavak.",

  introTR:
    "Root Yalıkavak yalnızca Bodrum'da konaklamakla ilgili değil. Mimari, tasarım, atmosfer ve Yalıkavak'ın zahmetsiz ritmi üzerinden yazı başka türlü yaşamakla ilgili.",

  sections: [
    {
      titleEN: "NOT AN ESCAPE. A DIFFERENT WAY TO STAY.",
      titleTR: "BİR KAÇIŞ DEĞİL. FARKLI BİR KONAKLAMA BİÇİMİ.",

      paragraphsEN: [
        "The story was never about presenting Root as a place removed from its surroundings. It was about making it feel naturally connected to Yalıkavak.",
        "Architecture, landscape, people, light and the pace of summer became parts of the same visual world.",
        "Instead of selling an escape, we focused on a different way of being present — slower, more considered and more connected to place.",
      ],

      paragraphsTR: [
        "Hikâye hiçbir zaman Root'u çevresinden kopuk bir yer olarak göstermek değildi. Onu Yalıkavak'la doğal biçimde bağ kuran bir deneyim olarak anlatmak istedik.",
        "Mimari, peyzaj, insanlar, ışık ve yazın ritmi aynı görsel dünyanın parçalarına dönüştü.",
        "Bir kaçış satmak yerine; daha yavaş, daha düşünülmüş ve bulunduğu yerle daha güçlü bağ kuran farklı bir var olma biçimine odaklandık.",
      ],
    },

    {
      titleEN: "DESIGNED FOR SUMMER.",
      titleTR: "YAZ İÇİN TASARLANDI.",

      paragraphsEN: [
        "Root's character comes from the relationship between architecture and the way summer is actually lived.",
        "Open spaces, natural materials, changing light and moments between indoors and outdoors shaped the production language.",
        "We treated design not as something to document, but as something people experience throughout the day.",
      ],

      paragraphsTR: [
        "Root'un karakteri, mimari ile yazın gerçekten yaşanma biçimi arasındaki ilişkiden geliyor.",
        "Açık alanlar, doğal malzemeler, değişen ışık ve iç mekânla dış mekân arasındaki anlar prodüksiyon dilini şekillendirdi.",
        "Tasarımı belgelenmesi gereken bir unsur olarak değil, insanların gün boyunca deneyimlediği bir şey olarak ele aldık.",
      ],
    },

    {
      titleEN: "LUXURY WITHOUT THE CEREMONY.",
      titleTR: "TÖRENSİZ LÜKS.",

      paragraphsEN: [
        "For Root, luxury was never about excess.",
        "It was space, privacy, thoughtful design, good light and the freedom to experience Bodrum without unnecessary formality.",
        "The resulting world feels premium without becoming distant — considered, but never over-styled.",
        "A kind of luxury that doesn't need to announce itself.",
      ],

      paragraphsTR: [
        "Root için lüks hiçbir zaman fazlalıkla ilgili değildi.",
        "Alan, mahremiyet, düşünülmüş tasarım, iyi ışık ve Bodrum'u gereksiz resmiyetten uzak yaşama özgürlüğüydü.",
        "Ortaya çıkan dünya mesafeli olmadan premium; fazla kurgulanmış hissettirmeden özenli.",
        "Kendisini ilan etmeye ihtiyaç duymayan bir lüks anlayışı.",
      ],
    },
  ],
},

   media: [
  {
    src: "/work/root-yalikavak/01.jpg",
    type: "image",
    layout: "full",
    alt: "Root Yalıkavak",
  },
  {
    src: "/work/root-yalikavak/02.jpg",
    type: "image",
    layout: "portrait",
    alt: "Root Yalıkavak",
  },
  {
    src: "/work/root-yalikavak/03.jpg",
    type: "image",
    layout: "portrait",
    alt: "Root Yalıkavak",
  },
  {
    src: "/work/root-yalikavak/04.jpg",
    type: "image",
    layout: "full",
    alt: "Root Yalıkavak",
  },
  {
    src: "/work/root-yalikavak/05.jpg",
    type: "image",
    layout: "landscape",
    alt: "Root Yalıkavak",
  },
  {
    src: "/work/root-yalikavak/06.jpg",
    type: "image",
    layout: "full",
    alt: "Root Yalıkavak",
  },
],
  },


  /* =======================================================
     SO HOTEL
  ======================================================= */

  {
    number: "08",
    slug: "so-hotel",

    client: "SO HOTEL RAS AL KHAIMAH",
    location: "RAS AL KHAIMAH · UAE",
    year: "2026",

    category: "hospitality",
    categoryEN: "Hospitality",
    categoryTR: "Konaklama",

    servicesEN: ["Strategy", "Creative", "Content", "Digital"],
    servicesTR: ["Strateji", "Yaratıcı", "İçerik", "Dijital"],

    cover: "/work/so-hotel/cover.mp4",
    coverType: "video",

    archiveSize: "medium",

    statementEN:
      "A contemporary hospitality experience shaped by place and perspective.",

    statementTR:
      "Mekân ve bakış açısıyla şekillenen çağdaş bir konaklama deneyimi.",

    introEN:
      "For SO Hotel, the communication world brings together architecture, destination, lifestyle and contemporary hospitality.",

    introTR:
      "SO Hotel için iletişim dünyasını mimari, destinasyon, yaşam tarzı ve çağdaş konaklama deneyimini bir araya getirerek şekillendiriyoruz.",

    approachTitleEN: "A new point of view.",
    approachTitleTR: "Yeni bir bakış açısı.",

    approachEN:
      "The visual language balances destination storytelling with a contemporary international hospitality perspective.",

    approachTR:
      "Görsel dil, destinasyon anlatısını çağdaş ve uluslararası bir konaklama perspektifiyle dengeliyor.",

caseStudy: {
  taglineEN: "Hospitality, stripped back to what matters.",
  taglineTR: "Konaklama, gerçekten önemli olana indirgendi.",

  introEN:
    "A hotel is not remembered as a collection of rooms, restaurants and facilities. It is remembered through moments — and our work for SO Hotel began with exactly that idea.",

  introTR:
    "Bir otel; odalar, restoranlar ve olanakların toplamı olarak hatırlanmaz. Anlarla hatırlanır. SO Hotel için yaklaşımımız tam olarak bu fikirle başladı.",

  sections: [
    {
      titleEN: "A HOTEL IS MADE OF MOMENTS.",
      titleTR: "BİR OTEL ANLARDAN OLUŞUR.",

      paragraphsEN: [
        "We moved away from treating hospitality content like a catalogue of spaces.",
        "Instead, we focused on the moments that give those spaces meaning: arriving, waking up, stepping into the light, sitting down for a meal, slowing down and experiencing the destination.",
        "Architecture remained important, but people and experience gave it context.",
      ],

      paragraphsTR: [
        "Konaklama iletişimini mekânların kataloğu gibi ele almaktan uzaklaştık.",
        "Bunun yerine o mekânlara anlam veren anlara odaklandık: varış, uyanmak, ışığa çıkmak, bir masaya oturmak, yavaşlamak ve destinasyonu yaşamak.",
        "Mimari önemini korudu; fakat ona bağlamı insanlar ve deneyim verdi.",
      ],
    },

    {
      titleEN: "PLACE BEFORE PROPERTY.",
      titleTR: "ÖNCE DESTİNASYON.",

      paragraphsEN: [
        "A hotel never exists in isolation from its destination.",
        "For SO Hotel, landscape, climate, architecture and local atmosphere became part of the same hospitality story.",
        "The objective was not simply to communicate where guests would stay, but where they would find themselves.",
      ],

      paragraphsTR: [
        "Bir otel hiçbir zaman bulunduğu destinasyondan bağımsız değildir.",
        "SO Hotel için peyzaj, iklim, mimari ve yerel atmosfer aynı konaklama hikâyesinin parçalarına dönüştü.",
        "Amacımız yalnızca misafirlerin nerede kalacağını değil, kendilerini nasıl bir dünyanın içinde bulacağını anlatmaktı.",
      ],
    },

    {
      titleEN: "LESS HOTEL. MORE FEELING.",
      titleTR: "DAHA AZ OTEL. DAHA FAZLA HİS.",

      paragraphsEN: [
        "The strongest hospitality communication doesn't explain every feature.",
        "It creates enough desire for people to imagine themselves inside the experience.",
        "Our visual language therefore became quieter, more atmospheric and more focused on the emotional value of staying somewhere.",
      ],

      paragraphsTR: [
        "Güçlü konaklama iletişimi her özelliği tek tek açıklamaz.",
        "İnsanların kendilerini deneyimin içinde hayal edebilmesine yetecek kadar arzu yaratır.",
        "Bu nedenle görsel dilimizi daha sakin, daha atmosferik ve bir yerde kalmanın duygusal değerine daha fazla odaklanan bir yapıda kurduk.",
      ],
    },
  ],
},

    media: [],
  },


  /* =======================================================
     THE KOMANA BİNBİRDİREK
  ======================================================= */

  {
    number: "09",
    slug: "the-komana",

    client: "THE KOMANA BİNBİRDİREK",
    location: "ISTANBUL",
    year: "2026",

    category: "hospitality",
    categoryEN: "Hospitality",
    categoryTR: "Konaklama",

    servicesEN: ["Strategy", "Creative", "Content", "Digital"],
    servicesTR: ["Strateji", "Yaratıcı", "İçerik", "Dijital"],

    cover: "/work/the-komana/cover.mp4",
    coverType: "video",

    archiveSize: "mediumPortrait",

    statementEN:
      "A contemporary stay connected to the layers of Istanbul.",

    statementTR:
      "İstanbul'un katmanlarıyla bağ kuran çağdaş bir konaklama deneyimi.",

    introEN:
      "The Komana Binbirdirek is approached through its relationship with the city, architecture and the cultural texture surrounding it.",

    introTR:
      "The Komana Binbirdirek'i şehirle, mimariyle ve çevresindeki kültürel dokuyla kurduğu ilişki üzerinden ele alıyoruz.",

    approachTitleEN: "Stay connected to the city.",
    approachTitleTR: "Şehirle bağ kurmak.",

    approachEN:
      "The creative world positions the property as part of Istanbul rather than an experience isolated from it.",

    approachTR:
      "Yaratıcı dünya, tesisi İstanbul'dan bağımsız bir deneyim olarak değil, şehrin bir parçası olarak konumlandırıyor.",

caseStudy: {
  taglineEN: "History, without standing still.",
  taglineTR: "Tarih, yerinde saymadan.",

  introEN:
    "The Komana sits inside one of Istanbul's most layered neighbourhoods. Our challenge was to make that history present without allowing the brand to become trapped inside the past.",

  introTR:
    "The Komana, İstanbul'un en katmanlı bölgelerinden birinin içinde yer alıyor. Bizim için mesele bu tarihi görünür kılarken markayı geçmişin içine hapsetmemekti.",

  sections: [
    {
      titleEN: "OLD ISTANBUL. NEW HOSPITALITY.",
      titleTR: "ESKİ İSTANBUL. YENİ MİSAFİRPERVERLİK.",

      paragraphsEN: [
        "The surrounding city carries centuries of architecture, movement and memory.",
        "Rather than reproducing familiar historical clichés, we looked at how contemporary hospitality could naturally exist within those layers.",
        "The result connects old Istanbul with a more current, intimate and design-conscious way of staying in the city.",
      ],

      paragraphsTR: [
        "Çevresindeki şehir yüzyılların mimarisini, hareketini ve hafızasını taşıyor.",
        "Alışılmış tarihi İstanbul klişelerini yeniden üretmek yerine, çağdaş konaklama anlayışının bu katmanların içinde nasıl doğal biçimde yaşayabileceğine baktık.",
        "Ortaya eski İstanbul'u daha güncel, samimi ve tasarım odaklı bir şehirde kalma deneyimiyle buluşturan bir dünya çıktı.",
      ],
    },

    {
      titleEN: "HISTORY IS CONTEXT, NOT DECORATION.",
      titleTR: "TARİH DEKOR DEĞİL, BAĞLAMDIR.",

      paragraphsEN: [
        "Heritage works best when it is allowed to exist naturally.",
        "Stone, texture, streets, architectural details and the surrounding neighbourhood became context rather than props.",
        "This allowed the visual identity to acknowledge history without becoming nostalgic.",
      ],

      paragraphsTR: [
        "Miras, doğal biçimde var olmasına izin verildiğinde daha güçlü çalışır.",
        "Taş, doku, sokaklar, mimari detaylar ve çevredeki mahalle dekor değil, anlatının bağlamı oldu.",
        "Böylece görsel kimlik tarihi kabul ederken nostaljiye dönüşmedi.",
      ],
    },

    {
      titleEN: "STAY INSIDE THE CITY.",
      titleTR: "ŞEHRİN İÇİNDE KAL.",

      paragraphsEN: [
        "The Komana is not an experience designed to separate guests from Istanbul.",
        "The city continues beyond the door — streets, people, history, food, movement and everyday life.",
        "Our communication positioned the hotel as a starting point for experiencing Istanbul rather than a retreat from it.",
      ],

      paragraphsTR: [
        "The Komana, misafirleri İstanbul'dan ayırmak için tasarlanmış bir deneyim değil.",
        "Kapının dışında şehir devam ediyor: sokaklar, insanlar, tarih, gastronomi, hareket ve gündelik hayat.",
        "İletişimde oteli İstanbul'dan kaçılan bir yer olarak değil, İstanbul'u yaşamaya başlanan bir nokta olarak konumlandırdık.",
      ],
    },
  ],
},

    media: [
  {
    src: "/work/the-komana/01.jpg",
    type: "image",
    layout: "full",
    alt: "The Komana Binbirdirek",
  },
  {
    src: "/work/the-komana/02.jpg",
    type: "image",
    layout: "portrait",
    alt: "The Komana Binbirdirek",
  },
  {
    src: "/work/the-komana/03.jpg",
    type: "image",
    layout: "portrait",
    alt: "The Komana Binbirdirek",
  },
  {
    src: "/work/the-komana/04.jpg",
    type: "image",
    layout: "full",
    alt: "The Komana Binbirdirek",
  },
  {
    src: "/work/the-komana/05.jpg",
    type: "image",
    layout: "landscape",
    alt: "The Komana Binbirdirek",
  },
  {
    src: "/work/the-komana/06.jpg",
    type: "image",
    layout: "full",
    alt: "The Komana Binbirdirek",
  },
],
  },


  /* =======================================================
     THE ONE BODRUM
  ======================================================= */

  {
    number: "10",
    slug: "the-one-bodrum",

    client: "THE ONE BODRUM",
    location: "BODRUM",
    year: "2026",

    category: "hospitality",
    categoryEN: "Hospitality",
    categoryTR: "Konaklama",

    servicesEN: ["Creative", "Content", "Social", "Digital"],
    servicesTR: ["Yaratıcı", "İçerik", "Sosyal Medya", "Dijital"],

    cover: "/work/the-one-bodrum/cover.mp4",
    coverType: "video",

    archiveSize: "wide",

    statementEN:
      "A refined expression of the contemporary Bodrum lifestyle.",

    statementTR:
      "Çağdaş Bodrum yaşam tarzının rafine bir ifadesi.",

    introEN:
      "For The One Bodrum, we create a visual language shaped by the Aegean, architecture, atmosphere and an effortless sense of place.",

    introTR:
      "The One Bodrum için Ege, mimari, atmosfer ve mekânın doğal hissi etrafında şekillenen bir görsel dil oluşturuyoruz.",

    approachTitleEN: "Effortless by nature.",
    approachTitleTR: "Doğası gereği zahmetsiz.",

    approachEN:
      "Light, landscape and considered compositions create a visual world that feels elevated without becoming overstated.",

    approachTR:
      "Işık, peyzaj ve kontrollü kompozisyonlar; abartıya kaçmadan rafine hissettiren bir görsel dünya oluşturuyor.",

caseStudy: {
  taglineEN: "Don't sell the villa. Sell the life around it.",
  taglineTR: "Villayı değil, etrafındaki hayatı sat.",

  introEN:
    "The One Bodrum required more than beautiful real-estate imagery. The objective was to transform architecture, location and lifestyle into desire — and desire into measurable interest.",

  introTR:
    "The One Bodrum için güzel gayrimenkul görsellerinden fazlası gerekiyordu. Amaç mimariyi, lokasyonu ve yaşam tarzını arzuya; arzuyu da ölçülebilir ilgiye dönüştürmekti.",

  sections: [
    {
      titleEN: "SELL THE LIFE, NOT THE PROPERTY.",
      titleTR: "MÜLKÜ DEĞİL, HAYATI SAT.",

      paragraphsEN: [
        "Premium real estate becomes more powerful when people can imagine the life surrounding the architecture.",
        "We therefore moved beyond square metres, rooms and specifications.",
        "Light, landscape, privacy, mornings, evenings and the rhythm of Bodrum became part of the proposition.",
        "The villa remained the product. The life around it became the reason to want it.",
      ],

      paragraphsTR: [
        "Premium gayrimenkul, insanlar mimarinin etrafındaki hayatı hayal edebildiğinde daha güçlü hale gelir.",
        "Bu nedenle metrekare, oda ve teknik özelliklerin ötesine geçtik.",
        "Işık, peyzaj, mahremiyet, sabahlar, akşamlar ve Bodrum'un ritmi teklifin bir parçasına dönüştü.",
        "Villa ürün olarak kaldı. Onu istemenin nedeni ise etrafındaki hayat oldu.",
      ],
    },

    {
      titleEN: "DESIRE NEEDS DIRECTION.",
      titleTR: "ARZUNUN BİR YÖNE İHTİYACI VAR.",

      paragraphsEN: [
        "Creating desire was only one half of the system.",
        "The creative world needed to connect naturally with digital performance, enquiries and the sales journey.",
        "Campaigns were therefore considered not as isolated advertisements, but as different entry points into the same brand experience.",
      ],

      paragraphsTR: [
        "Arzu yaratmak sistemin yalnızca bir yarısıydı.",
        "Yaratıcı dünyanın dijital performans, talepler ve satış yolculuğuyla doğal biçimde bağ kurması gerekiyordu.",
        "Bu nedenle kampanyaları birbirinden bağımsız reklamlar olarak değil, aynı marka deneyimine açılan farklı giriş noktaları olarak ele aldık.",
      ],
    },

    {
      titleEN: "FROM ATTENTION TO ACTION.",
      titleTR: "DİKKATTEN AKSİYONA.",

      paragraphsEN: [
        "The final objective was not visibility for visibility's sake.",
        "Every piece of communication had a role within the journey from first impression to qualified interest.",
        "Creative, media and conversion worked as one connected system — building the brand while creating a clearer path toward action.",
      ],

      paragraphsTR: [
        "Nihai hedef yalnızca görünürlük değildi.",
        "Her iletişim parçasının ilk karşılaşmadan nitelikli ilgiye uzanan yolculukta bir görevi vardı.",
        "Yaratıcı, medya ve dönüşüm tek bir bağlantılı sistem olarak çalıştı; marka değerini oluştururken aksiyona giden yolu da netleştirdi.",
      ],
    },
  ],
},

   media: [
  {
    src: "/work/the-one-bodrum/01.png",
    type: "image",
    layout: "full",
    alt: "The One Bodrum",
  },
  {
    src: "/work/the-one-bodrum/02.png",
    type: "image",
    layout: "portrait",
    alt: "The One Bodrum",
  },
  {
    src: "/work/the-one-bodrum/03.png",
    type: "image",
    layout: "portrait",
    alt: "The One Bodrum",
  },
  {
    src: "/work/the-one-bodrum/04.png",
    type: "image",
    layout: "full",
    alt: "The One Bodrum",
  },
  {
    src: "/work/the-one-bodrum/05.png",
    type: "image",
    layout: "landscape",
    alt: "The One Bodrum",
  },
  {
    src: "/work/the-one-bodrum/06.png",
    type: "image",
    layout: "full",
    alt: "The One Bodrum",
  },
],
  },


  /* =======================================================
     OPA
  ======================================================= */

  {
    number: "11",
    slug: "opa",

    client: "OPA",
    location: "BODRUM",
    year: "2026",

    category: "food",
    categoryEN: "Food & Beverage",
    categoryTR: "Gastronomi",

    servicesEN: ["Creative", "Content", "Photography", "Social"],
    servicesTR: ["Yaratıcı", "İçerik", "Fotoğraf", "Sosyal Medya"],

    cover: "/work/opa/cover.mp4",
    coverType: "video",

    archiveSize: "medium",

    statementEN:
      "Food, energy and atmosphere brought into one social experience.",

    statementTR:
      "Lezzet, enerji ve atmosferi tek bir sosyal deneyimde buluşturmak.",

    introEN:
      "OPA's visual world is built around food, people, movement and the energy that defines the experience.",

    introTR:
      "OPA'nın görsel dünyasını gastronomi, insanlar, hareket ve deneyimin karakterini belirleyen enerji etrafında kuruyoruz.",

    approachTitleEN: "Make the energy visible.",
    approachTitleTR: "Enerjiyi görünür kılmak.",

    approachEN:
      "Content focuses not only on what is served, but on how the entire experience feels when food, people and atmosphere come together.",

    approachTR:
      "İçerik yalnızca sunulan ürünlere değil; gastronomi, insanlar ve atmosfer bir araya geldiğinde bütün deneyimin nasıl hissettirdiğine odaklanıyor.",

caseStudy: {
  taglineEN: "Dinner was never the whole story.",
  taglineTR: "Hikâye hiçbir zaman sadece akşam yemeği değildi.",

  introEN:
    "OPA is built around food, but it comes alive through people, music, movement and the energy of the night. Our communication had to capture the whole experience, not simply what arrived at the table.",

  introTR:
    "OPA'nın merkezinde gastronomi var; fakat marka insanlar, müzik, hareket ve gecenin enerjisiyle hayat buluyor. İletişimin yalnızca masaya geleni değil, bütün deneyimi yakalaması gerekiyordu.",

  sections: [
    {
      titleEN: "DINING AS ENTERTAINMENT.",
      titleTR: "EĞLENCEYE DÖNÜŞEN GASTRONOMİ.",

      paragraphsEN: [
        "OPA was never going to behave like a conventional restaurant brand.",
        "Food might begin the evening, but music, people, service and atmosphere transform it into something larger.",
        "Our visual language therefore moved constantly between gastronomy and entertainment.",
        "The table became a stage and the night became part of the product.",
      ],

      paragraphsTR: [
        "OPA hiçbir zaman klasik bir restoran markası gibi davranmayacaktı.",
        "Geceyi yemek başlatabilir; fakat müzik, insanlar, servis ve atmosfer deneyimi çok daha büyük bir şeye dönüştürüyor.",
        "Bu nedenle görsel dilimiz gastronomi ile eğlence arasında sürekli hareket etti.",
        "Masa bir sahneye, gece ise ürünün bir parçasına dönüştü.",
      ],
    },

    {
      titleEN: "LAUNCH THE FEELING.",
      titleTR: "HİSSİ LANSE ET.",

      paragraphsEN: [
        "A launch is not simply about announcing that a place exists.",
        "It is about establishing the energy people should associate with it from the very beginning.",
        "Content, social communication and production were designed to make OPA feel alive before people experienced it for themselves.",
      ],

      paragraphsTR: [
        "Bir lansman yalnızca bir mekânın açıldığını duyurmak değildir.",
        "İnsanların markayla ilişkilendireceği enerjiyi daha ilk günden kurmaktır.",
        "İçerik, sosyal medya iletişimi ve prodüksiyonu; insanlar OPA'yı kendileri deneyimlemeden önce bile markayı canlı hissettirecek şekilde tasarladık.",
      ],
    },

    {
      titleEN: "MAKE THEM WISH THEY WERE THERE.",
      titleTR: "ORADA OLMAK İSTESİNLER.",

      paragraphsEN: [
        "Nightlife communication depends on a particular kind of desire: the feeling that something is happening and you should be part of it.",
        "We used people, movement, details and fragments of the night to create that sense of immediacy.",
        "Rather than explaining the experience, the content gave just enough away to create FOMO.",
        "Because sometimes the strongest call to action is simply wishing you were there.",
      ],

      paragraphsTR: [
        "Gece hayatı iletişimi özel bir arzuya dayanır: bir şeylerin yaşandığını ve sizin de bunun parçası olmanız gerektiğini hissetmek.",
        "Bu hissi yaratmak için insanları, hareketi, detayları ve geceden kısa parçaları kullandık.",
        "Deneyimi tamamen açıklamak yerine FOMO yaratacak kadarını gösterdik.",
        "Çünkü bazen en güçlü aksiyon çağrısı yalnızca 'keşke orada olsaydım' hissidir.",
      ],
    },
  ],
},

    media: [
  {
    src: "/work/opa/01.jpg",
    type: "image",
    layout: "full",
    alt: "OPA",
  },
  {
    src: "/work/opa/02.jpg",
    type: "image",
    layout: "portrait",
    alt: "OPA",
  },
  {
    src: "/work/opa/03.jpg",
    type: "image",
    layout: "portrait",
    alt: "OPA",
  },
  {
    src: "/work/opa/04.jpg",
    type: "image",
    layout: "full",
    alt: "OPA",
  },
  {
    src: "/work/opa/05.jpg",
    type: "image",
    layout: "landscape",
    alt: "OPA",
  },
  {
    src: "/work/opa/06.jpg",
    type: "image",
    layout: "full",
    alt: "OPA",
  },
],
  },


  /* =======================================================
     SPEKTR BOUTIQUE HOTEL YALIKAVAK
  ======================================================= */

  {
    number: "12",
    slug: "spektr",

    client: "SPEKTR BOUTIQUE HOTEL YALIKAVAK",
    location: "YALIKAVAK · BODRUM",
    year: "2026",

    category: "hospitality",
    categoryEN: "Hospitality",
    categoryTR: "Konaklama",

    servicesEN: ["Strategy", "Creative", "Content", "Digital"],
    servicesTR: ["Strateji", "Yaratıcı", "İçerik", "Dijital"],

    cover: "/work/spektr/cover.mp4",
    coverType: "video",

    archiveSize: "large",

    statementEN:
      "A boutique hospitality world shaped by the character of Yalıkavak.",

    statementTR:
      "Yalıkavak'ın karakteriyle şekillenen butik bir konaklama dünyası.",

    introEN:
      "For Spektr Boutique Hotel Yalıkavak, we build a communication world around architecture, atmosphere, landscape and the relaxed rhythm of Bodrum.",

    introTR:
      "Spektr Boutique Hotel Yalıkavak için mimari, atmosfer, peyzaj ve Bodrum'un rahat ritmi etrafında şekillenen bir iletişim dünyası oluşturuyoruz.",

    approachTitleEN: "A different spectrum of Bodrum.",
    approachTitleTR: "Bodrum'un farklı bir spektrumu.",

    approachEN:
      "The creative approach brings together the intimacy of a boutique property with the distinctive visual character of Yalıkavak.",

    approachTR:
      "Yaratıcı yaklaşım, butik bir tesisin samimiyetini Yalıkavak'ın kendine özgü görsel karakteriyle bir araya getiriyor.",

   media: [
  {
    src: "/work/spektr/01.png",
    type: "image",
    layout: "full",
    alt: "Spektr Boutique Hotel Yalıkavak",
  },
  {
    src: "/work/spektr/02.png",
    type: "image",
    layout: "portrait",
    alt: "Spektr Boutique Hotel Yalıkavak",
  },
  {
    src: "/work/spektr/03.png",
    type: "image",
    layout: "portrait",
    alt: "Spektr Boutique Hotel Yalıkavak",
  },
  {
    src: "/work/spektr/04.png",
    type: "image",
    layout: "full",
    alt: "Spektr Boutique Hotel Yalıkavak",
  },
  {
    src: "/work/spektr/05.png",
    type: "image",
    layout: "landscape",
    alt: "Spektr Boutique Hotel Yalıkavak",
  },
  {
    src: "/work/spektr/06.png",
    type: "image",
    layout: "full",
    alt: "Spektr Boutique Hotel Yalıkavak",
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