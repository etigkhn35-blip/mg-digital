import { ArrowUpRight } from "lucide-react";

type CapabilitiesProps = {
  locale: "en" | "tr";
};

const capabilities = {
  en: [
    {
      no: "01",
      title: "Strategy",
      description:
        "Brand strategy, positioning, audience insight and communication systems built for meaningful growth.",
      services: "Brand Strategy / Positioning / Research / Consulting",
    },
    {
      no: "02",
      title: "Creative",
      description:
        "Ideas, identities and campaigns designed to make brands distinctive, relevant and culturally visible.",
      services: "Creative Direction / Campaigns / Identity / Design",
    },
    {
      no: "03",
      title: "Content",
      description:
        "Photography, film and social-first storytelling created for hospitality, lifestyle and culture.",
      services: "Film / Photography / Social / Production",
    },
    {
      no: "04",
      title: "Growth",
      description:
        "Performance, media and digital growth systems connecting creative work with measurable business results.",
      services: "Paid Media / Social / SEO / Analytics",
    },
    {
      no: "05",
      title: "Digital",
      description:
        "Websites and digital experiences where strategy, technology and brand expression work as one.",
      services: "Web Design / Development / UX / Digital Experience",
    },
  ],

  tr: [
    {
      no: "01",
      title: "Strateji",
      description:
        "Markaların anlamlı ve sürdürülebilir büyümesi için konumlandırma, hedef kitle içgörüsü ve iletişim sistemleri.",
      services: "Marka Stratejisi / Konumlandırma / Araştırma / Danışmanlık",
    },
    {
      no: "02",
      title: "Yaratıcı",
      description:
        "Markaları ayrıştıran, güncel tutan ve kültür içinde görünür kılan fikirler, kimlikler ve kampanyalar.",
      services: "Yaratıcı Yönetim / Kampanya / Kimlik / Tasarım",
    },
    {
      no: "03",
      title: "İçerik",
      description:
        "Konaklama, yaşam tarzı ve kültür markaları için fotoğraf, film ve sosyal odaklı hikâye anlatımı.",
      services: "Film / Fotoğraf / Sosyal Medya / Prodüksiyon",
    },
    {
      no: "04",
      title: "Büyüme",
      description:
        "Yaratıcı işleri ölçülebilir ticari sonuçlarla buluşturan performans, medya ve dijital büyüme sistemleri.",
      services: "Performans / Medya / SEO / Analitik",
    },
    {
      no: "05",
      title: "Dijital",
      description:
        "Strateji, teknoloji ve marka deneyimini tek yapıda buluşturan web siteleri ve dijital ürünler.",
      services: "Web Tasarım / Geliştirme / UX / Dijital Deneyim",
    },
  ],
};

export default function Capabilities({ locale }: CapabilitiesProps) {
  const tr = locale === "tr";
  const items = capabilities[locale];

  return (
    <section className="mg-capabilities">
      <div className="mg-capabilities-head">
        <div className="mg-capabilities-index">
          <span>03</span>
          <span>{tr ? "NE YAPIYORUZ" : "WHAT WE DO"}</span>
        </div>

        <p>
          {tr
            ? "Stratejiden ekrana, fikirden büyümeye."
            : "From strategy to screen. From ideas to growth."}
        </p>
      </div>

      <div className="mg-capabilities-title">
        <h2>
          {tr ? (
            <>
              Markaların ihtiyacı
              <br />
              olan her şey.
              <br />
              <em>Tek çatı altında.</em>
            </>
          ) : (
            <>
              Everything brands
              <br />
              need to move.
              <br />
              <em>Under one roof.</em>
            </>
          )}
        </h2>
      </div>

      <div className="mg-capabilities-list">
        {items.map((item) => (
          <a
            href={`/${locale}/services`}
            className="mg-capability"
            key={item.no}
          >
            <div className="mg-capability-number">{item.no}</div>

            <div className="mg-capability-name">
              <h3>{item.title}</h3>
            </div>

            <div className="mg-capability-description">
              <p>{item.description}</p>
              <span>{item.services}</span>
            </div>

            <div className="mg-capability-arrow">
              <ArrowUpRight size={25} strokeWidth={1.2} />
            </div>
          </a>
        ))}
      </div>

      <div className="mg-capabilities-footer">
        <span>
          {tr
            ? "Büyük fikir. Güçlü üretim. Ölçülebilir büyüme."
            : "Big ideas. Strong execution. Measurable growth."}
        </span>

        <a href={`/${locale}/services`}>
          {tr ? "Tüm Hizmetleri Gör" : "Explore All Services"}
          <ArrowUpRight size={17} strokeWidth={1.3} />
        </a>
      </div>
    </section>
  );
}