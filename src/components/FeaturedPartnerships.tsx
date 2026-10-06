import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type FeaturedPartnershipsProps = {
  locale: "en" | "tr";
};

const partnerships = [
  {
    id: "01",
    client: "RIXOS TERSANE",
    year: "2026",
    location: "ISTANBUL",
    type: "video",
    media: "/work/rixos-tersane/cover.mp4",
    href: "/work/rixos-tersane",
    services: "SOCIAL · CONTENT · CREATIVE",
  },
 {
  id: "02",
  client: "SPLENDID PALACE",
  year: "2026",
  location: "ISTANBUL",
  type: "video",
  media: "/work/splendid-palace/cover.mp4",
  href: "/work/splendid-palace",
  services: "STRATEGY · CONTENT · DIGITAL",
},
{
  id: "03",
  client: "CARTIER",
  year: "2026",
  location: "ISTANBUL",
  type: "video",
  media: "/work/cartier/cover.mp4",
  href: "/work/cartier",
  services: "CONTENT · PRODUCTION",
},
];

export default function FeaturedPartnerships({
  locale,
}: FeaturedPartnershipsProps) {
  const tr = locale === "tr";

  return (
    <section className="mg-partnerships">
      <div className="mg-partnerships-rule" />

      <div className="mg-partnerships-head">
        <div className="mg-partnerships-label">
          <span>02</span>
          <span>
            {tr ? "ÖNE ÇIKAN İŞ BİRLİKLERİ" : "FEATURED PARTNERSHIPS"}
          </span>
        </div>

        <p className="mg-partnerships-intro">
          {tr
            ? "Uzun soluklu marka ilişkileri, kültürel içgörü ve yaratıcı üretim üzerine kurulu seçili iş birlikleri."
            : "Selected partnerships built around long-term brand relationships, cultural insight and creative execution."}
        </p>
      </div>

      <div className="mg-partnerships-grid">
        {partnerships.map((item) => (
          <Link
            href={`/${locale}${item.href}`}
            className="mg-partnership-card"
            key={item.client}
          >
            <div className="mg-partnership-media">
              {item.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="mg-partnership-asset"
                >
                  <source src={item.media} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.media}
                  alt={item.client}
                  className="mg-partnership-asset"
                />
              )}

              <div className="mg-partnership-index">
                <span>{item.id}</span>
                <ArrowUpRight size={18} strokeWidth={1.4} />
              </div>
            </div>

            <div className="mg-partnership-info">
              <div className="mg-partnership-title">
                <h3>{item.client}</h3>
                <span>©{item.year}</span>
              </div>

              <div className="mg-partnership-meta">
                <span>{item.services}</span>
                <span>{item.location}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mg-partnerships-footer">
        <span>
          {tr
            ? "SEÇİLİ MÜŞTERİLER / 2024—2026"
            : "SELECTED CLIENTS / 2024—2026"}
        </span>

        <Link href={`/${locale}/work`}>
          {tr ? "Tüm işleri gör" : "View all work"}
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}