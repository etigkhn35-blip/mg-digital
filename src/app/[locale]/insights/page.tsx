import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};
const SITE_URL = "https://mgdigitalagency.com.tr";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en" && locale !== "tr") {
    return {};
  }

  const tr = locale === "tr";

  const title = tr
    ? "İçgörüler — Marka, Turizm, Kültür & Büyüme"
    : "Insights — Brand, Hospitality, Culture & Growth";

  const description = tr
    ? "M&G Digital'den marka stratejisi, turizm ve konaklama, kültür, yaratıcılık, dijital iletişim ve büyüme üzerine içgörüler ve perspektifler."
    : "Insights and perspectives from M&G Digital on brand strategy, hospitality, culture, creativity, digital communication and growth.";

  const canonical = `${SITE_URL}/${locale}/insights`;

  return {
    title,
    description,

    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en/insights`,
        tr: `${SITE_URL}/tr/insights`,
        "x-default": `${SITE_URL}/en/insights`,
      },
    },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: "M&G Digital",
      title: `${title} | M&G Digital`,
      description,
      locale: tr ? "tr_TR" : "en_US",
      alternateLocale: tr ? ["en_US"] : ["tr_TR"],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | M&G Digital`,
      description,
    },
  };
}

const insights = [
  {
    no: "01",
    slug: "hospitality-brands-need-more-than-content",
    categoryEN: "Perspective",
    categoryTR: "Bakış",
    date: "2026",
    titleEN: "Hospitality brands need more than content.",
    titleTR: "Konaklama markalarının içerikten fazlasına ihtiyacı var.",
    textEN:
      "The difference between producing content and building a brand people want to be part of.",
    textTR:
      "İçerik üretmek ile insanların parçası olmak isteyeceği bir marka inşa etmek arasındaki fark.",
  },
  {
    no: "02",
    slug: "from-destination-to-desire",
    categoryEN: "Hospitality",
    categoryTR: "Konaklama",
    date: "2026",
    titleEN: "From destination to desire.",
    titleTR: "Destinasyondan arzuya.",
    textEN:
      "Why the strongest hospitality brands sell a feeling before they sell a room.",
    textTR:
      "Güçlü konaklama markalarının neden bir odadan önce bir duygu sattığı üzerine.",
  },
  {
    no: "03",
    slug: "performance-without-brand-is-a-dead-end",
    categoryEN: "Growth",
    categoryTR: "Büyüme",
    date: "2026",
    titleEN: "Performance without brand is a dead end.",
    titleTR: "Markasız performans bir çıkmazdır.",
    textEN:
      "Short-term conversion and long-term brand value should not be competing objectives.",
    textTR:
      "Kısa vadeli dönüşüm ile uzun vadeli marka değerinin neden birbirine rakip olmaması gerektiği.",
  },
  {
    no: "04",
    slug: "luxury-is-not-an-aesthetic",
    categoryEN: "Culture",
    categoryTR: "Kültür",
    date: "2026",
    titleEN: "Luxury is not an aesthetic.",
    titleTR: "Lüks bir estetik değildir.",
    textEN:
      "Premium brands are built through restraint, relevance and the quality of every interaction.",
    textTR:
      "Premium markaların gösterişten çok ölçü, bağlam ve her temasın niteliğiyle kurulması üzerine.",
  },
  {
    no: "05",
    slug: "brands-that-belong-to-culture",
    categoryEN: "Brand",
    categoryTR: "Marka",
    date: "2026",
    titleEN: "Brands that belong to culture.",
    titleTR: "Kültürün parçası olan markalar.",
    textEN:
      "Visibility can be bought. Relevance has to be earned.",
    textTR:
      "Görünürlük satın alınabilir. Anlamlı bir yer edinmek ise kazanılmalıdır.",
  },
];

export default async function InsightsPage({ params }: PageProps) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "tr") {
    notFound();
  }

  const tr = locale === "tr";

  const featured = insights[0];
  const archive = insights.slice(1);

  return (
    <main id="top" className="mg-insights-page">
      {/* HERO */}

      <section className="mg-insights-hero">
        <Header locale={locale} />

        <div className="mg-insights-hero-inner">
          <div className="mg-insights-eyebrow">
            <span>01</span>
            <span>{tr ? "İÇGÖRÜLER" : "INSIGHTS"}</span>
          </div>

          <h1>
            {tr ? (
              <>
                Ne yaptığımız kadar
                <br />
                nasıl düşündüğümüz de
                <br />
                <em>önemli.</em>
              </>
            ) : (
              <>
                What we think
                <br />
                shapes what
                <br />
                <em>we make.</em>
              </>
            )}
          </h1>

          <div className="mg-insights-hero-foot">
            <p>
              {tr
                ? "Marka, kültür, konaklama, yaratıcılık, dijital ve büyüme üzerine M&G'den notlar."
                : "Notes from M&G on brands, culture, hospitality, creativity, digital and growth."}
            </p>

            <span>M&G / THINKING / 2026</span>
          </div>
        </div>
      </section>

      {/* FEATURED */}

      <section className="mg-insights-featured">
        <div className="mg-insights-section-label">
          <span>02</span>
          <span>{tr ? "ÖNE ÇIKAN" : "FEATURED"}</span>
        </div>

        <Link
          href={`/${locale}/insights/${featured.slug}`}
          className="mg-insights-featured-link"
        >
          <div className="mg-insights-featured-meta">
            <span>{featured.no}</span>

            <span>
              {tr ? featured.categoryTR : featured.categoryEN}
            </span>

            <span>{featured.date}</span>
          </div>

          <div className="mg-insights-featured-content">
            <h2>
              {tr ? featured.titleTR : featured.titleEN}
            </h2>

            <div>
              <p>
                {tr ? featured.textTR : featured.textEN}
              </p>

              <span className="mg-insights-read">
                {tr ? "OKU" : "READ"}
                <ArrowUpRight size={16} strokeWidth={1.4} />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ARCHIVE */}

      <section className="mg-insights-archive">
        <div className="mg-insights-section-label">
          <span>03</span>
          <span>{tr ? "TÜM YAZILAR" : "ALL STORIES"}</span>
        </div>

        <div className="mg-insights-archive-list">
          {archive.map((item) => (
            <Link
              href={`/${locale}/insights/${item.slug}`}
              className="mg-insights-row"
              key={item.slug}
            >
              <span className="mg-insights-row-no">
                {item.no}
              </span>

              <div className="mg-insights-row-title">
                <span>
                  {tr ? item.categoryTR : item.categoryEN}
                </span>

                <h2>
                  {tr ? item.titleTR : item.titleEN}
                </h2>
              </div>

              <p>
                {tr ? item.textTR : item.textEN}
              </p>

              <div className="mg-insights-row-end">
                <span>{item.date}</span>
                <ArrowUpRight strokeWidth={1.2} />
              </div>
            </Link>
          ))}
        </div>
      </section>
 <Footer locale={locale} />
    </main>
  );
}