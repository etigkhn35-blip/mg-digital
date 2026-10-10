const SITE_URL = "https://mgdigitalagency.com.tr";

export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,

    name: "M&G Digital",
    alternateName: "M&G Digital Communication Agency",

    url: SITE_URL,

    email: "hello@mgdigitalagency.com.tr",

    telephone: "+905528418095",

    description:
      "Independent creative growth and digital communications agency for hospitality, lifestyle, food, luxury and culture brands.",

    areaServed: [
      {
        "@type": "Country",
        name: "Türkiye",
      },
      {
        "@type": "Country",
        name: "Portugal",
      },
    ],

    knowsAbout: [
      "Hospitality Marketing",
      "Brand Strategy",
      "Creative Strategy",
      "Branding",
      "Digital Marketing",
      "Content Production",
      "Social Media",
      "Performance Marketing",
      "Web Design",
      "SEO",
      "Lifestyle Marketing",
      "Food and Beverage Marketing",
      "Luxury Brand Marketing",
    ],

    sameAs: [
      "https://www.instagram.com/mgdigitalagency/",
      "https://www.linkedin.com/company/m-g-digital-communication-agency/",
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+905528418095",
      email: "hello@mgdigitalagency.com.tr",
      contactType: "business inquiries",
      availableLanguage: ["English", "Turkish"],
    },

    location: [
      {
        "@type": "Place",
        name: "M&G Digital — Bodrum",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Turgutreis Caddesi 259 / 1",
          addressLocality: "Bodrum",
          addressRegion: "Muğla",
          addressCountry: "TR",
        },
      },

      {
        "@type": "Place",
        name: "M&G Digital — Istanbul",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dikilitaş Mah. Emirhan Cad. No:3 D:3",
          addressLocality: "Beşiktaş",
          addressRegion: "İstanbul",
          addressCountry: "TR",
        },
      },

      {
        "@type": "Place",
        name: "M&G Digital — Lisbon",
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. de São Bento 31, 1200-815",
          addressLocality: "Lisboa",
          addressCountry: "PT",
        },
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,

    url: SITE_URL,
    name: "M&G Digital",

    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },

    inLanguage: ["en", "tr"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}