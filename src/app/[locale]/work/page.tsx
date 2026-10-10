import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import WorkArchive from "../../../components/WorkArchive";

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
    ? "İşler — Seçili Projeler & Case Studies"
    : "Work — Selected Projects & Case Studies";

  const description = tr
    ? "M&G Digital'in konaklama, turizm, lifestyle, gastronomi ve kültür markaları için geliştirdiği seçili strateji, yaratıcı iletişim, içerik, dijital ve büyüme projelerini keşfedin."
    : "Explore selected M&G Digital strategy, creative, content, digital and growth projects for hospitality, lifestyle, food and culture brands.";

  const canonical = `${SITE_URL}/${locale}/work`;

  return {
    title,
    description,

    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en/work`,
        tr: `${SITE_URL}/tr/work`,
        "x-default": `${SITE_URL}/en/work`,
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
export default async function WorkPage({ params }: PageProps) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "tr") {
    notFound();
  }

  return (
    <main id="top" className="mg-inner-page">
      <section className="mg-work-hero">
        <Header locale={locale} />

        <div className="mg-work-hero-content">
          <div className="mg-work-hero-meta">
  <span className="mg-work-hero-index">01</span>

  <span className="mg-work-hero-dot" aria-hidden="true" />

  <span className="mg-work-hero-label">
    {locale === "tr" ? "SEÇİLİ İŞLER" : "SELECTED WORK"}
  </span>
</div>

          <h1>
            {locale === "tr" ? (
              <>
                İşlerimiz
                <br />
                bizim yerimize
                <br />
                <em>konuşsun.</em>
              </>
            ) : (
              <>
                Let the work
                <br />
                speak
                <br />
                <em>for itself.</em>
              </>
            )}
          </h1>

          <div className="mg-work-hero-bottom">
            <p>
              {locale === "tr"
                ? "Konaklama, yaşam tarzı, gastronomi ve kültür dünyasından seçili marka işleri."
                : "Selected brand work across hospitality, lifestyle, food and culture."}
            </p>

            <span>2024 — 2026</span>
          </div>
        </div>
      </section>

      <WorkArchive locale={locale} />

      <Footer locale={locale} />
    </main>
  );
}