import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ContactForm from "../../../components/ContactForm";
import ContactMap from "../../../components/ContactMap";
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
    ? "İletişim — Bodrum, İstanbul & Lizbon"
    : "Contact — Bodrum, Istanbul & Lisbon";

  const description = tr
    ? "M&G Digital ile yeni markanız, projeniz veya kampanyanız için iletişime geçin. Bodrum, İstanbul ve Lizbon'daki stüdyolarımızla strateji, yaratıcı iletişim, dijital ve büyüme projeleri geliştiriyoruz."
    : "Contact M&G Digital for brand, creative, digital and growth projects. Work with our independent agency team across Bodrum, Istanbul and Lisbon.";

  const canonical = `${SITE_URL}/${locale}/contact`;

  return {
    title,
    description,

    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en/contact`,
        tr: `${SITE_URL}/tr/contact`,
        "x-default": `${SITE_URL}/en/contact`,
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
export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "tr") {
    notFound();
  }

  const tr = locale === "tr";

  const studios = [
    {
      number: "01",
      code: "BJV",
      city: "BODRUM",
      image: "/contact/bodrum.jpg",
      alt: "Bodrum, Türkiye",
      descriptionTR: "Ege'den dünyaya.",
      descriptionEN: "From the Aegean to the world.",
    },
    {
      number: "02",
      code: "IST",
      city: "ISTANBUL",
      image: "/contact/istanbul.jpg",
      alt: "Istanbul, Türkiye",
      descriptionTR: "Kültürün ve hareketin içinde.",
      descriptionEN: "In the middle of culture and motion.",
    },
    {
      number: "03",
      code: "LIS",
      city: "LISBON",
      image: "/contact/lisbon.jpg",
      alt: "Lisbon, Portugal",
      descriptionTR: "Yeni bir bakış açısı.",
      descriptionEN: "A different point of view.",
    },
  ];

  return (
    <main id="top" className="mg-contact-page">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="mg-contact-hero">
        <Header locale={locale} />

        <div className="mg-contact-hero-inner">
          <div className="mg-contact-eyebrow">
            <span>01</span>
            <span>{tr ? "İLETİŞİM" : "CONTACT"}</span>
          </div>

          <h1>
            {tr ? (
              <>
                Bir fikrin
                <br />
                varsa,
                <br />
                <em>konuşalım.</em>
              </>
            ) : (
              <>
                Got an idea?
                <br />
                Let&apos;s
                <br />
                <em>talk.</em>
              </>
            )}
          </h1>

          <div className="mg-contact-hero-bottom">
            <p>
              {tr
                ? "Yeni bir marka, yeni bir proje, yeni bir kampanya ya da sadece iyi bir fikir. Nereden başlayacağınızı birlikte bulabiliriz."
                : "A new brand, a new project, a new campaign or simply a good idea. We can figure out where to start together."}
            </p>

            <a href="mailto:hello@mgdigitalagency.com.tr">
              hello@mgdigitalagency.com.tr
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM
      ====================================================== */}

      <section className="mg-contact-project">
        <div className="mg-contact-section-label">
          <span>02</span>

          <span>
            {tr
              ? "BİZE PROJENİZİ ANLATIN"
              : "TELL US ABOUT YOUR PROJECT"}
          </span>
        </div>

        <div className="mg-contact-project-layout">
          <div className="mg-contact-project-intro">
            <h2>
              {tr ? (
                <>
                  Birkaç detay
                  <br />
                  yeterli.
                </>
              ) : (
                <>
                  A few details
                  <br />
                  are enough.
                </>
              )}
            </h2>

            <p>
              {tr
                ? "Her şeyi netleştirmiş olmanıza gerek yok. Markanızı, hedefinizi veya çözmek istediğiniz problemi anlatın."
                : "You don't need to have everything figured out. Tell us about your brand, your ambition or the problem you're trying to solve."}
            </p>
          </div>

          <ContactForm locale={locale} />
        </div>
      </section>

      {/* =====================================================
          STUDIOS
      ====================================================== */}

      <section className="mg-contact-studios">
        <div className="mg-contact-section-label">
          <span>03</span>
          <span>{tr ? "STÜDYOLAR" : "STUDIOS"}</span>
        </div>

        <div className="mg-contact-studio-grid">
          {studios.map((studio) => (
            <article
              className="mg-contact-studio-card"
              key={studio.city}
            >
              {/* IMAGE */}

              <div className="mg-contact-studio-image">
                <Image
                  src={studio.image}
                  alt={studio.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                  loading="eager"
                />
              </div>

              {/* DARK GRADIENT */}

              <div className="mg-contact-studio-overlay" />

              {/* CONTENT */}

              <div className="mg-contact-studio-content">
                <div className="mg-contact-studio-meta">
                  <span>{studio.number}</span>
                  <span>{studio.code}</span>
                </div>

                <div className="mg-contact-studio-bottom">
                  <h2>{studio.city}</h2>

                  <p>
                    {tr
                      ? studio.descriptionTR
                      : studio.descriptionEN}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
   

      <ContactMap locale={locale} />

      <Footer locale={locale} />
      
    </main>
  );
}