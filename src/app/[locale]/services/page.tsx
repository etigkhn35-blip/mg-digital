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
    ? "Hizmetler — Strateji, Yaratıcı, İçerik, Büyüme & Dijital"
    : "Services — Strategy, Creative, Content, Growth & Digital";

  const description = tr
    ? "M&G Digital; marka stratejisi, yaratıcı iletişim, içerik ve prodüksiyon, performans pazarlaması, web tasarımı, SEO ve dijital deneyim hizmetleri sunan 360° dijital iletişim ajansıdır."
    : "M&G Digital delivers brand strategy, creative, content and production, performance marketing, web design, SEO and digital experiences through one connected agency practice.";

  const canonical = `${SITE_URL}/${locale}/services`;

  return {
    title,
    description,

    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en/services`,
        tr: `${SITE_URL}/tr/services`,
        "x-default": `${SITE_URL}/en/services`,
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

const services = [
  {
    no: "01",
    enTitle: "Strategy",
    trTitle: "Strateji",
    enText:
      "Finding the position, story and direction that gives a brand a reason to matter.",
    trText:
      "Markaya anlam kazandıran konumu, hikâyeyi ve yönü birlikte belirliyoruz.",
    enItems: [
      "Brand Strategy",
      "Positioning",
      "Research & Insight",
      "Communication Strategy",
      "Go-to-Market",
      "Campaign Strategy",
    ],
    trItems: [
      "Marka Stratejisi",
      "Konumlandırma",
      "Araştırma & İçgörü",
      "İletişim Stratejisi",
      "Pazara Giriş Stratejisi",
      "Kampanya Stratejisi",
    ],
  },
  {
    no: "02",
    enTitle: "Creative",
    trTitle: "Yaratıcı",
    enText:
      "Ideas, identities and campaigns designed to give brands a distinctive cultural presence.",
    trText:
      "Markalara özgün bir kültürel duruş kazandıran fikirler, kimlikler ve kampanyalar üretiyoruz.",
    enItems: [
      "Creative Direction",
      "Campaign Concepts",
      "Art Direction",
      "Brand Identity",
      "Visual Systems",
      "Copywriting",
    ],
    trItems: [
      "Yaratıcı Yönetmenlik",
      "Kampanya Fikirleri",
      "Sanat Yönetimi",
      "Marka Kimliği",
      "Görsel Sistemler",
      "Metin Yazarlığı",
    ],
  },
  {
    no: "03",
    enTitle: "Content",
    trTitle: "İçerik",
    enText:
      "From a single frame to an always-on content system, we create work people want to watch.",
    trText:
      "Tek bir kareden sürekli içerik sistemlerine kadar, insanların görmek isteyeceği işler üretiyoruz.",
    enItems: [
      "Film",
      "Photography",
      "Social Content",
      "Editorial",
      "Production",
      "Post-Production",
    ],
    trItems: [
      "Film",
      "Fotoğraf",
      "Sosyal Medya İçeriği",
      "Editoryal İçerik",
      "Prodüksiyon",
      "Post Prodüksiyon",
    ],
  },
  {
    no: "04",
    enTitle: "Growth",
    trTitle: "Büyüme",
    enText:
      "Creative and media working together to turn attention into measurable business growth.",
    trText:
      "Yaratıcı üretim ile medyayı birlikte çalıştırarak ilgiyi ölçülebilir iş sonuçlarına dönüştürüyoruz.",
    enItems: [
      "Performance Marketing",
      "Paid Social",
      "Search",
      "Media Strategy",
      "Analytics",
      "Conversion",
    ],
    trItems: [
      "Performans Pazarlaması",
      "Ücretli Sosyal Medya",
      "Arama Pazarlaması",
      "Medya Stratejisi",
      "Analiz & Raporlama",
      "Dönüşüm Optimizasyonu",
    ],
  },
  {
    no: "05",
    enTitle: "Digital",
    trTitle: "Dijital",
    enText:
      "Digital experiences that make the brand feel as considered online as it does in the real world.",
    trText:
      "Markanın gerçek dünyadaki karakterini dijital deneyime aynı özenle taşıyoruz.",
    enItems: [
      "Web Design",
      "Web Development",
      "UX / UI",
      "Digital Products",
      "SEO",
      "Digital Experience",
    ],
    trItems: [
      "Web Tasarımı",
      "Web Geliştirme",
      "UX / UI",
      "Dijital Ürünler",
      "SEO",
      "Dijital Deneyim",
    ],
  },
];

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "tr") {
    notFound();
  }

  const tr = locale === "tr";

  return (
    <main id="top" className="mg-services-page">
      {/* HERO */}

      <section className="mg-services-hero">
        <Header locale={locale} />

        <div className="mg-services-hero-inner">
          <div className="mg-services-eyebrow">
            <span>01</span>
            <span>{tr ? "HİZMETLER" : "SERVICES"}</span>
          </div>

          <h1>
            {tr ? (
              <>
                Fikirden
                <br />
                büyümeye.
                <br />
                <em>Tek yapı.</em>
              </>
            ) : (
              <>
                From idea
                <br />
                to growth.
                <br />
                <em>One practice.</em>
              </>
            )}
          </h1>

          <div className="mg-services-hero-foot">
            <p>
              {tr
                ? "Stratejiden yaratıcı üretime, içerikten büyümeye ve dijital deneyime kadar markanın ihtiyaç duyduğu disiplinleri aynı masada buluşturuyoruz."
                : "Strategy, creative, content, growth and digital experience working together around one brand."}
            </p>

            <span>STRATEGY → CREATIVE → GROWTH</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="mg-services-list">
        <div className="mg-services-list-header">
          <span>02</span>

          <span>
            {tr ? "NE YAPIYORUZ" : "WHAT WE DO"}
          </span>

          <span>05 DISCIPLINES</span>
        </div>

        {services.map((service) => (
          <article className="mg-service-block" key={service.no}>
            <div className="mg-service-number">
              {service.no}
            </div>

            <div className="mg-service-main">
              <h2>
                {tr ? service.trTitle : service.enTitle}
              </h2>

              <p>
                {tr ? service.trText : service.enText}
              </p>
            </div>

            <div className="mg-service-items">
              {(tr ? service.trItems : service.enItems).map(
                (item, index) => (
                  <div key={item}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{item}</strong>
                  </div>
                )
              )}
            </div>
          </article>
        ))}
      </section>

      {/* APPROACH */}

      <section className="mg-services-approach">
        <div className="mg-services-approach-label">
          <span>03</span>
          <span>{tr ? "YAKLAŞIM" : "APPROACH"}</span>
        </div>

        <div className="mg-services-approach-content">
          <h2>
            {tr ? (
              <>
                Beş ayrı hizmet değil.
                <br />
                <em>Tek bir sistem.</em>
              </>
            ) : (
              <>
                Not five separate services.
                <br />
                <em>One connected system.</em>
              </>
            )}
          </h2>

          <div className="mg-services-approach-bottom">
            <p>
              {tr
                ? "Strateji yaratıcı fikri yönlendirir. Yaratıcı fikir içeriğe dönüşür. İçerik dağıtılır, ölçülür ve büyümeyi besler. Dijital deneyim bütün yapıyı bir araya getirir."
                : "Strategy informs creative. Creative becomes content. Content is distributed, measured and optimized for growth. Digital connects the entire experience."}
            </p>

            <Link href={`/${locale}/contact`}>
              {tr ? "BİRLİKTE ÇALIŞALIM" : "WORK WITH US"}
              <ArrowUpRight size={16} strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}