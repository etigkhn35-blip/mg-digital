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

const principles = [
  {
    no: "01",
    en: "Stay curious.",
    tr: "Meraklı kal.",
    enText:
      "We question the obvious, look beyond the category and stay close to culture.",
    trText:
      "Apaçık görüneni sorgular, kategorinin dışına bakar ve kültürü yakından takip ederiz.",
  },
  {
    no: "02",
    en: "Make it matter.",
    tr: "Anlam yarat.",
    enText:
      "Attention alone isn't enough. The work should create value for the brand and its audience.",
    trText:
      "Sadece dikkat çekmek yetmez. Yaptığımız iş marka ve insanlar için gerçek bir değer üretmeli.",
  },
  {
    no: "03",
    en: "Keep it connected.",
    tr: "Bütünü düşün.",
    enText:
      "Strategy, creative, content, media and digital should behave like one system.",
    trText:
      "Strateji, yaratıcılık, içerik, medya ve dijital birbirinden ayrı değil, tek bir sistem gibi çalışmalı.",
  },
  {
    no: "04",
    en: "Move.",
    tr: "Harekete geç.",
    enText:
      "Less presentation theatre. More making, testing, learning and moving forward.",
    trText:
      "Daha az sunum gösterisi; daha çok üretim, deneme, öğrenme ve ilerleme.",
  },
];

const studios = [
  {
    no: "01",
    city: "BODRUM",
    code: "BJV",
    image: "/contact/bodrum.jpg",
    alt: "Bodrum, Türkiye",
    en: "Aegean perspective.",
    tr: "Ege'den gelen bakış.",
  },
  {
    no: "02",
    city: "ISTANBUL",
    code: "IST",
    image: "/contact/istanbul.jpg",
    alt: "Istanbul, Türkiye",
    en: "Culture in motion.",
    tr: "Hareketin içindeki kültür.",
  },
  {
    no: "03",
    city: "LISBON",
    code: "LIS",
    image: "/contact/lisbon.jpg",
    alt: "Lisbon, Portugal",
    en: "A wider point of view.",
    tr: "Daha geniş bir bakış açısı.",
  },
];
export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "tr") {
    notFound();
  }

  const tr = locale === "tr";

  return (
    <main id="top" className="mg-about-page">
      {/* HERO */}

      <section className="mg-about-hero">
        <Header locale={locale} />

        <div className="mg-about-hero-inner">
        <div className="mg-about-eyebrow">
  <span>01</span>
  <span>
    {tr
      ? "360° DİJİTAL İLETİŞİM AJANSI"
      : "360° DIGITAL COMMUNICATION AGENCY"}
  </span>
</div>

          <h1>
            {tr ? (
              <>
                Bağımsız.
                <br />
                Meraklı.
                <br />
                <em>Hareket halinde.</em>
              </>
            ) : (
              <>
                Independent.
                <br />
                Curious.
                <br />
                <em>Always moving.</em>
              </>
            )}
          </h1>

         <div className="mg-about-hero-foot">
  <p>
    {tr
      ? "M&G Digital Agency, çözüm ortaklarına 360° hizmet sunan bağımsız bir dijital iletişim ajansıdır. Stratejiden yaratıcı fikre, içerikten prodüksiyona, dijital deneyimlerden büyümeye kadar markaların tüm iletişim süreçlerini tek bir yaratıcı çatı altında buluşturur."
      : "M&G Digital Agency is an independent digital communications agency delivering 360° services to its partners. From strategy and creative thinking to content, production, digital experiences and growth, we bring every stage of brand communication together under one creative roof."}
  </p>

  <span>M&G DIGITAL ©2026</span>
</div>
        </div>
      </section>

      {/* MANIFESTO */}

      <section className="mg-about-manifesto">
        <div className="mg-about-section-label">
          <span>02</span>
          <span>{tr ? "BAKIŞIMIZ" : "OUR POINT OF VIEW"}</span>
        </div>

        <div className="mg-about-manifesto-copy">
          <h2>
            {tr ? (
              <>
                Markalar insanların
                <br />
                hayatına reklamla değil,
                <br />
                <em>anlamla girer.</em>
              </>
            ) : (
              <>
                Brands enter people&apos;s
                <br />
                lives through meaning,
                <br />
                <em>not advertising.</em>
              </>
            )}
          </h2>

          <div className="mg-about-manifesto-text">
            <p>
  {tr
    ? "360° yaklaşımımızın temelinde stratejiyi, yaratıcılığı, içeriği, prodüksiyonu, medyayı, büyümeyi ve dijital deneyimi birbirinden ayrı işler olarak değil, tek bir bütün olarak ele almak var."
    : "Our 360° approach brings strategy, creative, content, production, media, growth and digital experience together as one connected system rather than separate disciplines."}
</p>

            <p>
              {tr
                ? "Bir markanın nasıl göründüğünden ne söylediğine, nerede karşılaşıldığından nasıl büyüdüğüne kadar bütün deneyimi birlikte düşünüyoruz."
                : "From how a brand looks and speaks to where people encounter it and how it grows, we think about the whole experience."}
            </p>
          </div>
        </div>
      </section>

      {/* CULTURE IMAGE */}
<section className="mg-about-culture">
  <div className="mg-about-culture-media">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="mg-about-culture-video"
      aria-hidden="true"
    >
      <source
        src="/media/mg-showreel.mp4"
        type="video/mp4"
      />
    </video>

    <div className="mg-about-culture-shade" />

    <div className="mg-about-culture-meta">
      <span>03 / CULTURE</span>
      <span>BODRUM · ISTANBUL · LISBON</span>
    </div>
  </div>
</section>

      {/* PRINCIPLES */}

      <section className="mg-about-principles">
        <div className="mg-about-section-label">
          <span>04</span>
          <span>
            {tr ? "NASIL DÜŞÜNÜYORUZ" : "HOW WE THINK"}
          </span>
        </div>

        <div className="mg-about-principles-list">
          {principles.map((item) => (
            <article className="mg-about-principle" key={item.no}>
              <span>{item.no}</span>

              <h3>{tr ? item.tr : item.en}</h3>

              <p>{tr ? item.trText : item.enText}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STUDIOS */}

      <section className="mg-about-studios">
        <div className="mg-about-studios-head">
          <div className="mg-about-section-label">
            <span>05</span>
            <span>{tr ? "STÜDYOLAR" : "STUDIOS"}</span>
          </div>

          <h2>
            {tr ? (
              <>
                Üç şehir.
                <br />
                <em>Tek bakış.</em>
              </>
            ) : (
              <>
                Three cities.
                <br />
                <em>One perspective.</em>
              </>
            )}
          </h2>
        </div>

        <div className="mg-about-studio-grid">
  {studios.map((studio) => (
    <article className="mg-about-studio" key={studio.city}>
      <img
        src={studio.image}
        alt={studio.alt}
        className="mg-about-studio-image"
      />

      <div className="mg-about-studio-shade" />

      <div className="mg-about-studio-top">
        <span>{studio.no}</span>
        <span>{studio.code}</span>
      </div>

      <div className="mg-about-studio-bottom">
        <h3>{studio.city}</h3>
        <p>{tr ? studio.tr : studio.en}</p>
      </div>
    </article>
  ))}
</div>
      </section>

      {/* END CTA */}

      <section className="mg-about-end">
        <div className="mg-about-section-label">
          <span>06</span>
          <span>{tr ? "SONRAKİ ADIM" : "NEXT"}</span>
        </div>

        <div className="mg-about-end-content">
          <h2>
            {tr ? (
              <>
                Bir sonraki iyi iş
                <br />
                <em>bir konuşmayla başlar.</em>
              </>
            ) : (
              <>
                Good work starts
                <br />
                <em>with a conversation.</em>
              </>
            )}
          </h2>

          <Link href={`/${locale}/contact`}>
            {tr ? "BİZE ULAŞIN" : "GET IN TOUCH"}
            <ArrowUpRight size={17} strokeWidth={1.4} />
          </Link>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}