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

const expertise = [
  {
    no: "01",
    en: "Hospitality",
    tr: "Konaklama",
    enText:
      "Hotels, resorts and destinations built to become more than places to stay.",
    trText:
      "Konaklamanın ötesine geçen oteller, resortlar ve destinasyon markaları.",
  },
  {
    no: "02",
    en: "Lifestyle",
    tr: "Yaşam Tarzı",
    enText:
      "Brands that live at the intersection of identity, experience and culture.",
    trText:
      "Kimlik, deneyim ve kültürün kesişiminde yaşayan markalar.",
  },
  {
    no: "03",
    en: "Food & Beverage",
    tr: "Gastronomi",
    enText:
      "Restaurants and food concepts shaped into distinctive brand experiences.",
    trText:
      "Restoranları ve gastronomi konseptlerini özgün marka deneyimlerine dönüştürüyoruz.",
  },
  {
    no: "04",
    en: "Luxury",
    tr: "Lüks",
    enText:
      "Premium brands where every detail, interaction and image carries meaning.",
    trText:
      "Her detayın, temasın ve görselin anlam taşıdığı premium markalar.",
  },
  {
    no: "05",
    en: "Culture",
    tr: "Kültür",
    enText:
      "Ideas, experiences and brands designed to participate in culture.",
    trText:
      "Kültürün içinde yer alan fikirler, deneyimler ve markalar.",
  },
];

export default async function ExpertisePage({ params }: PageProps) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "tr") {
    notFound();
  }

  const tr = locale === "tr";

  return (
    <main id="top" className="mg-expertise-page">
      <section className="mg-expertise-hero">
        <Header locale={locale} />

        <div className="mg-expertise-hero-inner">
          <div className="mg-expertise-eyebrow">
            <span>01</span>
            <span>{tr ? "UZMANLIK" : "EXPERTISE"}</span>
          </div>

          <h1>
            {tr ? (
              <>
                Sektörü anlamadan
                <br />
                markayı <em>anlayamazsın.</em>
              </>
            ) : (
              <>
                Know the category.
                <br />
                Understand <em>the brand.</em>
              </>
            )}
          </h1>

          <div className="mg-expertise-hero-foot">
            <p>
              {tr
                ? "Turizmden gastronomiye, yaşam tarzından kültüre; çalıştığımız dünyaları yalnızca gözlemlemiyor, içinde yaşıyoruz."
                : "From hospitality and food to lifestyle and culture, we don't just observe the worlds we work in. We participate in them."}
            </p>

            <span>BODRUM · ISTANBUL · LISBON</span>
          </div>
        </div>
      </section>

      <section className="mg-expertise-list">
        <div className="mg-expertise-list-head">
          <span>02</span>
          <span>{tr ? "ODAK ALANLARIMIZ" : "OUR FOCUS"}</span>
        </div>

        {expertise.map((item) => (
          <div className="mg-expertise-row" key={item.no}>
            <span className="mg-expertise-no">{item.no}</span>

            <h2>{tr ? item.tr : item.en}</h2>

            <p>{tr ? item.trText : item.enText}</p>

            <ArrowUpRight strokeWidth={1.3} />
          </div>
        ))}
      </section>

      <section className="mg-expertise-end">
        <span>03 / M&G</span>

        <div>
          <p>
            {tr
              ? "Kategori bilgisi başlangıç noktasıdır. Asıl mesele, markanın o kategori içinde neden var olması gerektiğini bulmaktır."
              : "Category knowledge is the starting point. The real work is finding why a brand deserves to exist within it."}
          </p>

          <Link href={`/${locale}/services`}>
            {tr ? "NASIL ÇALIŞTIĞIMIZI GÖR" : "EXPLORE OUR SERVICES"}
            <ArrowUpRight size={15} strokeWidth={1.4} />
          </Link>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}