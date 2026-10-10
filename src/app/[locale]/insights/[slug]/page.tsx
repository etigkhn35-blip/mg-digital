import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const articles = {
  "hospitality-brands-need-more-than-content": {
    categoryEN: "Perspective",
    categoryTR: "Bakış",
    titleEN: "Hospitality brands need more than content.",
    titleTR: "Konaklama markalarının içerikten fazlasına ihtiyacı var.",
    introEN:
      "Producing more content is easy. Building a brand people remember, desire and choose is a different challenge.",
    introTR:
      "Daha fazla içerik üretmek kolay. İnsanların hatırladığı, arzuladığı ve tercih ettiği bir marka yaratmak ise başka bir mesele.",
    sections: [
      {
        enTitle: "Content is not the strategy.",
        trTitle: "İçerik stratejinin kendisi değildir.",
        enText:
          "A full content calendar can create activity without creating meaning. Before deciding what to publish, brands need to understand what they want to stand for and why people should care.",
        trText:
          "Dolu bir içerik takvimi hareket yaratabilir ama anlam yaratmayabilir. Ne yayınlanacağına karar vermeden önce markanın neyi temsil edeceği ve insanların bunu neden önemseyeceği belirlenmelidir.",
      },
      {
        enTitle: "Hospitality is an experience business.",
        trTitle: "Konaklama bir deneyim işidir.",
        enText:
          "A hotel is experienced long before check-in. The website, photography, social presence, reservation journey and tone of voice all shape expectations before a guest arrives.",
        trText:
          "Bir otel deneyimi check-in'den çok önce başlar. Web sitesi, fotoğraflar, sosyal medya, rezervasyon süreci ve iletişim dili misafir daha gelmeden beklentiyi şekillendirir.",
      },
      {
        enTitle: "Build a point of view.",
        trTitle: "Bir bakış açısı oluşturun.",
        enText:
          "The strongest brands are recognizable even without a logo. Their choices feel connected because they come from a clear point of view rather than a collection of disconnected posts.",
        trText:
          "Güçlü markalar logoları görünmese bile tanınabilir. Çünkü verdikleri kararlar birbirinden kopuk paylaşımlardan değil, belirgin bir bakış açısından beslenir.",
      },
    ],
  },

  "from-destination-to-desire": {
    categoryEN: "Hospitality",
    categoryTR: "Konaklama",
    titleEN: "From destination to desire.",
    titleTR: "Destinasyondan arzuya.",
    introEN:
      "The strongest hospitality brands don't simply communicate where they are. They create a reason to want to be there.",
    introTR:
      "Güçlü konaklama markaları yalnızca nerede olduklarını anlatmaz. Orada bulunmayı istemek için bir neden yaratır.",
    sections: [
      {
        enTitle: "Place is only the beginning.",
        trTitle: "Mekân yalnızca başlangıçtır.",
        enText:
          "Location can attract attention, but location alone rarely creates a distinctive brand. The opportunity is to turn place into a particular feeling and point of view.",
        trText:
          "Konum dikkat çekebilir ancak tek başına özgün bir marka yaratmaz. Asıl fırsat, bulunduğunuz yeri belirli bir duyguya ve bakış açısına dönüştürmektir.",
      },
      {
        enTitle: "Sell the feeling first.",
        trTitle: "Önce duyguyu anlatın.",
        enText:
          "People imagine the experience before they compare the details. Great hospitality communication makes that imagined experience tangible.",
        trText:
          "İnsanlar ayrıntıları karşılaştırmadan önce deneyimi hayal eder. İyi konaklama iletişimi bu hayali deneyimi görünür ve hissedilir hale getirir.",
      },
    ],
  },

  "performance-without-brand-is-a-dead-end": {
    categoryEN: "Growth",
    categoryTR: "Büyüme",
    titleEN: "Performance without brand is a dead end.",
    titleTR: "Markasız performans bir çıkmazdır.",
    introEN:
      "Performance can capture existing demand. Brand creates the conditions for future demand.",
    introTR:
      "Performans mevcut talebi yakalayabilir. Marka ise gelecekteki talebin oluşacağı zemini yaratır.",
    sections: [
      {
        enTitle: "Conversion is not the whole story.",
        trTitle: "Dönüşüm hikâyenin tamamı değildir.",
        enText:
          "Optimizing only for immediate results can make marketing efficient while gradually making the brand interchangeable.",
        trText:
          "Yalnızca anlık sonuçları optimize etmek pazarlamayı verimli hale getirirken markayı zaman içinde rakiplerinden ayırt edilemez hale getirebilir.",
      },
      {
        enTitle: "Brand and growth belong together.",
        trTitle: "Marka ve büyüme birlikte çalışmalı.",
        enText:
          "Creative, brand and performance should share the same strategy, audience understanding and measurement framework.",
        trText:
          "Yaratıcı üretim, marka ve performans aynı strateji, hedef kitle anlayışı ve ölçüm sistemi üzerinden birlikte çalışmalıdır.",
      },
    ],
  },

  "luxury-is-not-an-aesthetic": {
    categoryEN: "Culture",
    categoryTR: "Kültür",
    titleEN: "Luxury is not an aesthetic.",
    titleTR: "Lüks bir estetik değildir.",
    introEN:
      "Luxury is not created by adding more. Often, it is created by knowing exactly what to leave out.",
    introTR:
      "Lüks daha fazlasını ekleyerek oluşmaz. Çoğu zaman neyi dışarıda bırakacağını bilmekle oluşur.",
    sections: [
      {
        enTitle: "Restraint creates confidence.",
        trTitle: "Ölçü güven yaratır.",
        enText:
          "Premium communication doesn't need to explain everything. Confidence often appears through editing, consistency and restraint.",
        trText:
          "Premium iletişim her şeyi açıklamak zorunda değildir. Güven çoğu zaman seçicilik, tutarlılık ve ölçülü davranmakla ortaya çıkar.",
      },
      {
        enTitle: "Every interaction counts.",
        trTitle: "Her temas önemlidir.",
        enText:
          "Luxury is experienced through details: language, service, digital experience, imagery and the way a brand responds.",
        trText:
          "Lüks ayrıntılarda deneyimlenir: dilde, hizmette, dijital deneyimde, görsel dünyada ve markanın insanlara nasıl karşılık verdiğinde.",
      },
    ],
  },

  "brands-that-belong-to-culture": {
    categoryEN: "Brand",
    categoryTR: "Marka",
    titleEN: "Brands that belong to culture.",
    titleTR: "Kültürün parçası olan markalar.",
    introEN:
      "Visibility can be bought. Cultural relevance has to be earned through participation, consistency and a genuine point of view.",
    introTR:
      "Görünürlük satın alınabilir. Kültür içinde anlamlı bir yer edinmek ise katılım, tutarlılık ve gerçek bir bakış açısıyla kazanılır.",
    sections: [
      {
        enTitle: "Don't interrupt culture.",
        trTitle: "Kültürün sözünü kesmeyin.",
        enText:
          "Brands become relevant when they understand the conversations, behaviors and communities around them rather than simply inserting themselves into attention.",
        trText:
          "Markalar yalnızca dikkat çekmeye çalışmak yerine çevrelerindeki konuşmaları, davranışları ve toplulukları anladıklarında anlamlı hale gelir.",
      },
      {
        enTitle: "Participation beats imitation.",
        trTitle: "Katılım taklitten güçlüdür.",
        enText:
          "Following every trend may create temporary reach. Building a recognizable perspective creates longer-term relevance.",
        trText:
          "Her trendi takip etmek geçici erişim sağlayabilir. Tanınabilir bir bakış açısı oluşturmak ise daha kalıcı bir anlam yaratır.",
      },
    ],
  },
};

const SITE_URL = "https://mgdigitalagency.com.tr";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (locale !== "en" && locale !== "tr") {
    return {};
  }

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return {};
  }

  const tr = locale === "tr";

  const title = tr ? article.titleTR : article.titleEN;
  const description = tr ? article.introTR : article.introEN;
  const canonical = `${SITE_URL}/${locale}/insights/${slug}`;

  return {
    title,
    description,

    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en/insights/${slug}`,
        tr: `${SITE_URL}/tr/insights/${slug}`,
        "x-default": `${SITE_URL}/en/insights/${slug}`,
      },
    },

    openGraph: {
      type: "article",
      url: canonical,
      siteName: "M&G Digital",
      title: `${title} | M&G Digital`,
      description,
      locale: tr ? "tr_TR" : "en_US",
      alternateLocale: tr ? ["en_US"] : ["tr_TR"],
      
      authors: ["M&G Digital"],
      section: tr ? article.categoryTR : article.categoryEN,
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | M&G Digital`,
      description,
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (locale !== "en" && locale !== "tr") {
    notFound();
  }

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    notFound();
  }

  const tr = locale === "tr";
    const title = tr ? article.titleTR : article.titleEN;
  const description = tr ? article.introTR : article.introEN;
  const category = tr ? article.categoryTR : article.categoryEN;
  const canonical = `${SITE_URL}/${locale}/insights/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: canonical,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    inLanguage: tr ? "tr-TR" : "en-US",
    articleSection: category,
    author: {
      "@type": "Organization",
      name: "M&G Digital",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "M&G Digital",
      url: SITE_URL,
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: tr ? "Ana Sayfa" : "Home",
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: tr ? "İçgörüler" : "Insights",
        item: `${SITE_URL}/${locale}/insights`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonical,
      },
    ],
  };
  return (
  <main id="top" className="mg-article-page">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
      }}
    />

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
  }}
/>

    <section className="mg-article-hero">
        <Header locale={locale} />

        <div className="mg-article-hero-inner">
          <div className="mg-article-topline">
            <Link href={`/${locale}/insights`}>
              <ArrowLeft size={13} />
              {tr ? "İÇGÖRÜLERE DÖN" : "BACK TO INSIGHTS"}
            </Link>

            <span>{tr ? article.categoryTR : article.categoryEN}</span>
            <span>2026</span>
          </div>

          <h1>{tr ? article.titleTR : article.titleEN}</h1>

          <div className="mg-article-intro">
            <span>M&G / THINKING</span>
            <p>{tr ? article.introTR : article.introEN}</p>
          </div>
        </div>
      </section>

      <article className="mg-article-body">
        <div className="mg-article-body-label">
          <span>01</span>
          <span>{tr ? "OKUMA" : "READ"}</span>
        </div>

        <div className="mg-article-content">
          {article.sections.map((section, index) => (
            <section className="mg-article-section" key={section.enTitle}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <div>
                <h2>{tr ? section.trTitle : section.enTitle}</h2>
                <p>{tr ? section.trText : section.enText}</p>
              </div>
            </section>
          ))}
        </div>
      </article>

      <section className="mg-article-next">
        <span>{tr ? "BİR PROJE Mİ VAR?" : "HAVE A PROJECT?"}</span>

        <Link href={`/${locale}/contact`}>
          {tr ? (
            <>
              Birlikte
              <br />
              <em>çalışalım.</em>
            </>
          ) : (
            <>
              Let&apos;s work
              <br />
              <em>together.</em>
            </>
          )}

          <ArrowUpRight strokeWidth={1.1} />
        </Link>
      </section>

      <Footer locale={locale} />
    </main>
  );
}