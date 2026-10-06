import { notFound } from "next/navigation";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import WorkArchive from "../../../components/WorkArchive";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

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