import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ThinkingProps = {
  locale: "en" | "tr";
};

const stories = {
  en: [
    {
      type: "INSIGHT",
      date: "2026",
      title:
        "Hospitality brands don't need more content. They need a point of view.",
      href: "/en/insights/hospitality-brands-need-more-than-content",
      index: "01",
    },
    {
      type: "PERSPECTIVE",
      date: "2026",
      title:
        "From destination to desire: building brands people want to belong to.",
      href: "/en/insights/from-destination-to-desire",
      index: "02",
    },
    {
      type: "GROWTH",
      date: "2026",
      title: "Performance without brand is a dead end.",
      href: "/en/insights/performance-without-brand-is-a-dead-end",
      index: "03",
    },
  ],

  tr: [
    {
      type: "İÇGÖRÜ",
      date: "2026",
      title:
        "Hospitality markalarının daha fazla içeriğe değil, güçlü bir bakış açısına ihtiyacı var.",
      href: "/tr/insights/hospitality-brands-need-more-than-content",
      index: "01",
    },
    {
      type: "PERSPEKTİF",
      date: "2026",
      title:
        "Destinasyondan arzuya: İnsanların parçası olmak istediği markalar yaratmak.",
      href: "/tr/insights/from-destination-to-desire",
      index: "02",
    },
    {
      type: "BÜYÜME",
      date: "2026",
      title: "Markasız performans bir çıkmazdır.",
      href: "/tr/insights/performance-without-brand-is-a-dead-end",
      index: "03",
    },
  ],
};

export default function Thinking({ locale }: ThinkingProps) {
  const tr = locale === "tr";
  const items = stories[locale];

  return (
    <section className="mg-thinking">
      <div className="mg-thinking-head">
        <div className="mg-thinking-label">
          <span>07</span>
          <span>
            {tr ? "DÜŞÜNCE & PERSPEKTİF" : "THINKING & PERSPECTIVE"}
          </span>
        </div>

        <h2>
          {tr ? (
            <>
              Ne yaptığımız kadar,
              <br />
              <em>nasıl düşündüğümüz de önemli.</em>
            </>
          ) : (
            <>
              The thinking behind
              <br />
              <em>the work.</em>
            </>
          )}
        </h2>
      </div>

      <div className="mg-thinking-grid">
        {items.map((item) => (
          <Link
            href={item.href}
            className="mg-thinking-card"
            key={item.index}
          >
            <div className="mg-thinking-card-top">
              <span>{item.index}</span>
              <ArrowUpRight size={17} strokeWidth={1.4} />
            </div>

            <div className="mg-thinking-card-content">
              <div className="mg-thinking-meta">
                <span>{item.type}</span>
                <span>©{item.date}</span>
              </div>

              <h3>{item.title}</h3>
            </div>

            <div className="mg-thinking-read">
              <span>{tr ? "OKU" : "READ"}</span>
              <span>↗</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mg-thinking-footer">
        <span>
          {tr
            ? "FİKİRLER · KÜLTÜR · MARKALAR · BÜYÜME"
            : "IDEAS · CULTURE · BRANDS · GROWTH"}
        </span>

        <Link href={`/${locale}/insights`}>
          {tr ? "TÜM YAZILAR" : "ALL INSIGHTS"}
          <ArrowUpRight size={15} strokeWidth={1.4} />
        </Link>
      </div>
    </section>
  );
}