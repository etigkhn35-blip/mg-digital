import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

type CookiesPageProps = {
  params: Promise<{
    locale: "en" | "tr";
  }>;
};

const SITE_URL = "https://mgdigitalagency.com.tr";

export async function generateMetadata({
  params,
}: CookiesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const tr = locale === "tr";

const title = tr
  ? "Ã‡erez PolitikasÄ±"
  : "Cookie Policy";

  const description = tr
    ? "M&G Digital Ã‡erez PolitikasÄ±. Web sitemizde kullanÄ±lan Ã§erezler ve benzeri teknolojiler, kullanÄ±m amaÃ§larÄ± ve tercihlerinizi nasÄ±l yÃ¶netebileceÄŸiniz hakkÄ±nda bilgi edinin."
    : "Read the M&G Digital Cookie Policy to learn about cookies and similar technologies used on our website, why they are used and how you can manage your preferences.";

  const path = `/${locale}/cookies`;

  return {
    title,
    description,

    alternates: {
      canonical: path,
      languages: {
        en: "/en/cookies",
        tr: "/tr/cookies",
        "x-default": "/en/cookies",
      },
    },

    openGraph: {
      type: "website",
      url: `${SITE_URL}${path}`,
      title,
      description,
      siteName: "M&G Digital",
      locale: tr ? "tr_TR" : "en_US",
    },

    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

type SectionItem = [string, string, string];

export default async function CookiesPage({ params }: CookiesPageProps) {
  const { locale } = await params;
  const tr = locale === "tr";

  const sections: SectionItem[] = tr
    ? [
        ["01", "Ã‡erez politikasÄ± hakkÄ±nda", "hakkinda"],
        ["02", "Ã‡erez nedir?", "cerez-nedir"],
        ["03", "Ã‡erezleri neden kullanÄ±yoruz?", "neden"],
        ["04", "Zorunlu Ã§erezler", "zorunlu"],
        ["05", "Tercih teknolojileri", "tercihler"],
        ["06", "Analitik teknolojileri", "analitik"],
        ["07", "Pazarlama teknolojileri", "pazarlama"],
        ["08", "ÃœÃ§Ã¼ncÃ¼ taraf teknolojileri", "ucuncu-taraf"],
        ["09", "Tercihlerinizi yÃ¶netme", "yonetim"],
        ["10", "Saklama sÃ¼releri", "saklama"],
        ["11", "Politika deÄŸiÅŸiklikleri", "degisiklikler"],
        ["12", "Ä°letiÅŸim", "iletisim"],
      ]
    : [
        ["01", "About this cookie policy", "about"],
        ["02", "What is a cookie?", "what-is-cookie"],
        ["03", "Why we use cookies", "why"],
        ["04", "Essential cookies", "essential"],
        ["05", "Preference technologies", "preferences"],
        ["06", "Analytics technologies", "analytics"],
        ["07", "Marketing technologies", "marketing"],
        ["08", "Third-party technologies", "third-party"],
        ["09", "Managing your preferences", "management"],
        ["10", "Retention periods", "retention"],
        ["11", "Changes to this policy", "changes"],
        ["12", "Contact", "contact"],
      ];

  return (
    <div className="mg-privacy-page">
      <Header locale={locale} />

      <main className="mg-privacy">
        <header className="mg-privacy-hero">
          <div className="mg-privacy-eyebrow">
            <span>M&G DIGITAL</span>
            <span>{tr ? "YASAL / 2026" : "LEGAL / 2026"}</span>
          </div>

          <h1>
            <span>{tr ? "Ã‡erez" : "Cookie"}</span>
            <br />
            <span className="mg-privacy-title-accent">
              {tr ? "politikasÄ±." : "policy."}
            </span>
          </h1>

          <div className="mg-privacy-hero-bottom">
            <p>
              {tr
                ? "Web sitemizde kullanÄ±lan Ã§erezler ve benzeri teknolojiler hakkÄ±nda bilgi."
                : "Information about cookies and similar technologies used on our website."}
            </p>

            <span>
              {tr
                ? "SON GÃœNCELLEME / EKÄ°M 2026"
                : "LAST UPDATED / OCTOBER 2026"}
            </span>
          </div>
        </header>

        <div className="mg-privacy-layout">
          <aside className="mg-privacy-index">
            <div className="mg-privacy-index-inner">
              <span className="mg-privacy-index-title">
                {tr ? "BÃ–LÃœMLER:" : "SECTIONS:"}
              </span>

              <nav>
                {sections.map(([number, title, id]) => (
                  <a key={id} href={`#${id}`}>
                    <span>({number})</span>
                    {title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="mg-privacy-content">
            {tr ? (
              <>
                <PolicySection
                  number="01"
                  title="Ã‡erez politikasÄ± hakkÄ±nda"
                  id="hakkinda"
                >
                  <p>
                    Bu Ã‡erez PolitikasÄ±, M&G Digital Communication Agency
                    tarafÄ±ndan iÅŸletilen web sitesinde Ã§erezler ve benzeri
                    teknolojilerin nasÄ±l kullanÄ±labileceÄŸi hakkÄ±nda bilgi
                    vermek amacÄ±yla hazÄ±rlanmÄ±ÅŸtÄ±r.
                  </p>

                  <p>
                    Bu politika, Gizlilik PolitikamÄ±zla birlikte okunmalÄ±dÄ±r.
                  </p>
                </PolicySection>

                <PolicySection
                  number="02"
                  title="Ã‡erez nedir?"
                  id="cerez-nedir"
                >
                  <p>
                    Ã‡erezler, bir web sitesini ziyaret ettiÄŸinizde tarayÄ±cÄ±nÄ±z
                    veya cihazÄ±nÄ±z aracÄ±lÄ±ÄŸÄ±yla saklanabilen kÃ¼Ã§Ã¼k veri
                    parÃ§alarÄ±dÄ±r.
                  </p>

                  <p>
                    Benzer amaÃ§larla yerel depolama gibi tarayÄ±cÄ± tabanlÄ±
                    teknolojiler de kullanÄ±labilir. Bu politikada kolaylÄ±k
                    saÄŸlamak amacÄ±yla bu tÃ¼r teknolojiler birlikte
                    aÃ§Ä±klanmaktadÄ±r.
                  </p>
                </PolicySection>

                <PolicySection
                  number="03"
                  title="Ã‡erezleri neden kullanÄ±yoruz?"
                  id="neden"
                >
                  <p>
                    Web sitesinin gÃ¼venli ve dÃ¼zgÃ¼n biÃ§imde Ã§alÄ±ÅŸmasÄ±nÄ±
                    saÄŸlamak ve kullanÄ±cÄ± tercihlerini hatÄ±rlamak amacÄ±yla
                    gerekli teknolojiler kullanÄ±labilir.
                  </p>

                  <p>
                    Zorunlu olmayan analitik, performans veya pazarlama
                    teknolojilerinin ileride kullanÄ±lmasÄ± hÃ¢linde bunlar,
                    yÃ¼rÃ¼rlÃ¼kteki mevzuatÄ±n gerektirdiÄŸi durumlarda uygun bir
                    tercih ve onay mekanizmasÄ±na tabi tutulacaktÄ±r.
                  </p>
                </PolicySection>

                <PolicySection
                  number="04"
                  title="Zorunlu Ã§erezler"
                  id="zorunlu"
                >
                  <p>
                    BazÄ± teknolojiler web sitesinin temel iÅŸlevlerinin
                    saÄŸlanmasÄ±, gÃ¼venliÄŸin korunmasÄ± ve kullanÄ±cÄ± tarafÄ±ndan
                    yapÄ±lan tercihlerin hatÄ±rlanmasÄ± iÃ§in gerekli olabilir.
                  </p>

                  <div className="mg-cookie-policy-table">
                    <div className="mg-cookie-policy-row mg-cookie-policy-head">
                      <span>TEKNOLOJÄ°</span>
                      <span>AMAÃ‡</span>
                    </div>

                    <div className="mg-cookie-policy-row">
                      <strong>mg-cookie-consent</strong>
                      <span>
                        Ã‡erez bildirimine iliÅŸkin seÃ§iminizi hatÄ±rlamak iÃ§in
                        tarayÄ±cÄ±nÄ±zÄ±n yerel depolama alanÄ±nda kullanÄ±lÄ±r.
                      </span>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection
                  number="05"
                  title="Tercih teknolojileri"
                  id="tercihler"
                >
                  <p>
                    KullanÄ±cÄ±nÄ±n site Ã¼zerindeki belirli seÃ§imlerini
                    hatÄ±rlamak amacÄ±yla tercih teknolojileri kullanÄ±labilir.
                  </p>

                  <p>
                    Mevcut Ã§erez bildirimimiz, bildirime iliÅŸkin seÃ§iminizi
                    tarayÄ±cÄ±nÄ±zÄ±n yerel depolama alanÄ±nda saklar.
                  </p>
                </PolicySection>

                <PolicySection
                  number="06"
                  title="Analitik teknolojileri"
                  id="analitik"
                >
                  <p>
                    Analitik teknolojileri, ziyaretÃ§ilerin web sitesini nasÄ±l
                    kullandÄ±ÄŸÄ±nÄ± anlamaya ve sitenin performansÄ±nÄ±
                    geliÅŸtirmeye yardÄ±mcÄ± olabilir.
                  </p>

                  <p>
                    Zorunlu olmayan analitik teknolojileri kullanÄ±lmasÄ±
                    hÃ¢linde, gerekli olduÄŸu Ã¶lÃ§Ã¼de kullanÄ±cÄ± tercihleri ve
                    yÃ¼rÃ¼rlÃ¼kteki mevzuat dikkate alÄ±nacaktÄ±r.
                  </p>
                </PolicySection>

                <PolicySection
                  number="07"
                  title="Pazarlama teknolojileri"
                  id="pazarlama"
                >
                  <p>
                    Pazarlama teknolojileri reklamlarÄ±n etkinliÄŸini Ã¶lÃ§mek,
                    kampanyalarÄ± deÄŸerlendirmek veya kullanÄ±cÄ± etkileÅŸimlerini
                    anlamak amacÄ±yla kullanÄ±labilir.
                  </p>

                  <p>
                    Bu tÃ¼r zorunlu olmayan teknolojiler kullanÄ±lmasÄ± hÃ¢linde,
                    yÃ¼rÃ¼rlÃ¼kteki mevzuatÄ±n gerektirdiÄŸi uygun tercih veya onay
                    mekanizmasÄ± uygulanacaktÄ±r.
                  </p>
                </PolicySection>

                <PolicySection
                  number="08"
                  title="ÃœÃ§Ã¼ncÃ¼ taraf teknolojileri"
                  id="ucuncu-taraf"
                >
                  <p>
                    Web sitesinin barÄ±ndÄ±rÄ±lmasÄ±, gÃ¼venliÄŸi veya diÄŸer teknik
                    iÅŸlevleri kapsamÄ±nda Ã¼Ã§Ã¼ncÃ¼ taraf hizmet saÄŸlayÄ±cÄ±larÄ±n
                    teknolojilerinden yararlanÄ±labilir.
                  </p>

                  <p>
                    ÃœÃ§Ã¼ncÃ¼ taraf hizmetlerin kullanÄ±lmasÄ± hÃ¢linde ilgili veri
                    iÅŸleme faaliyetleri ve uygulanabilir yasal gereklilikler
                    dikkate alÄ±nÄ±r.
                  </p>
                </PolicySection>

                <PolicySection
                  number="09"
                  title="Tercihlerinizi yÃ¶netme"
                  id="yonetim"
                >
                  <p>
                    Ã‡erez bildiriminde yaptÄ±ÄŸÄ±nÄ±z seÃ§im tarayÄ±cÄ±nÄ±zda
                    saklanabilir. TarayÄ±cÄ±nÄ±zÄ±n site verilerini veya yerel
                    depolama alanÄ±nÄ± temizlediÄŸinizde bildirim yeniden
                    gÃ¶rÃ¼ntÃ¼lenebilir.
                  </p>

                  <p>
                    TarayÄ±cÄ± ayarlarÄ±nÄ±z Ã¼zerinden Ã§erezleri ve diÄŸer site
                    verilerini gÃ¶rÃ¼ntÃ¼leyebilir, sÄ±nÄ±rlandÄ±rabilir veya
                    silebilirsiniz.
                  </p>
                </PolicySection>

                <PolicySection
                  number="10"
                  title="Saklama sÃ¼releri"
                  id="saklama"
                >
                  <p>
                    Ã‡erezler ve benzeri teknolojiler aracÄ±lÄ±ÄŸÄ±yla saklanan
                    bilgilerin sÃ¼resi, teknolojinin amacÄ± ve niteliÄŸine gÃ¶re
                    deÄŸiÅŸebilir.
                  </p>

                  <p>
                    Bilgiler yalnÄ±zca ilgili amacÄ±n gerektirdiÄŸi ve
                    uygulanabilir mevzuatÄ±n izin verdiÄŸi sÃ¼re boyunca
                    tutulmalÄ±dÄ±r.
                  </p>
                </PolicySection>

                <PolicySection
                  number="11"
                  title="Politikadaki deÄŸiÅŸiklikler"
                  id="degisiklikler"
                >
                  <p>
                    Bu Ã‡erez PolitikasÄ±, web sitesinde kullanÄ±lan
                    teknolojilerde veya ilgili mevzuatta meydana gelen
                    deÄŸiÅŸikliklere baÄŸlÄ± olarak gÃ¼ncellenebilir.
                  </p>

                  <p>
                    GÃ¼ncel sÃ¼rÃ¼m bu sayfada yayÄ±mlanÄ±r ve son gÃ¼ncelleme
                    tarihi gerektiÄŸinde deÄŸiÅŸtirilir.
                  </p>
                </PolicySection>

                <PolicySection number="12" title="Ä°letiÅŸim" id="iletisim">
                  <p>
                    Ã‡erez politikamÄ±z veya web sitemizde kullanÄ±lan
                    teknolojiler hakkÄ±nda sorularÄ±nÄ±z iÃ§in bizimle iletiÅŸime
                    geÃ§ebilirsiniz.
                  </p>

                  <a
                    className="mg-privacy-contact-link"
                    href="mailto:hello@mgdigitalagency.com.tr"
                  >
                    hello@mgdigitalagency.com.tr 
                  </a>

                  <Link
                    className="mg-privacy-home-link"
                    href={`/${locale}/privacy`}
                  >
                    GÄ°ZLÄ°LÄ°K POLÄ°TÄ°KASI
                  </Link>
                </PolicySection>
              </>
            ) : (
              <>
                <PolicySection
                  number="01"
                  title="About this cookie policy"
                  id="about"
                >
                  <p>
                    This Cookie Policy explains how cookies and similar
                    technologies may be used on the website operated by M&G
                    Digital Communication Agency.
                  </p>

                  <p>
                    This policy should be read together with our Privacy
                    Policy.
                  </p>
                </PolicySection>

                <PolicySection
                  number="02"
                  title="What is a cookie?"
                  id="what-is-cookie"
                >
                  <p>
                    Cookies are small pieces of data that may be stored through
                    your browser or device when you visit a website.
                  </p>

                  <p>
                    Browser-based technologies such as local storage may also
                    be used for similar purposes. For convenience, these
                    technologies are addressed together in this policy.
                  </p>
                </PolicySection>

                <PolicySection
                  number="03"
                  title="Why we use cookies"
                  id="why"
                >
                  <p>
                    Technologies may be used where necessary to operate the
                    website securely and properly and to remember choices made
                    by users.
                  </p>

                  <p>
                    If non-essential analytics, performance or marketing
                    technologies are introduced in the future, they will be
                    subject to an appropriate preference and consent mechanism
                    where required by applicable law.
                  </p>
                </PolicySection>

                <PolicySection
                  number="04"
                  title="Essential cookies"
                  id="essential"
                >
                  <p>
                    Certain technologies may be necessary to provide basic
                    website functionality, maintain security and remember
                    choices made by the user.
                  </p>

                  <div className="mg-cookie-policy-table">
                    <div className="mg-cookie-policy-row mg-cookie-policy-head">
                      <span>TECHNOLOGY</span>
                      <span>PURPOSE</span>
                    </div>

                    <div className="mg-cookie-policy-row">
                      <strong>mg-cookie-consent</strong>
                      <span>
                        Stored in your browser&apos;s local storage to remember
                        your choice regarding the cookie notice.
                      </span>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection
                  number="05"
                  title="Preference technologies"
                  id="preferences"
                >
                  <p>
                    Preference technologies may be used to remember certain
                    choices made by users while interacting with the website.
                  </p>

                  <p>
                    Our current cookie notice stores your choice regarding the
                    notice in your browser&apos;s local storage.
                  </p>
                </PolicySection>

                <PolicySection
                  number="06"
                  title="Analytics technologies"
                  id="analytics"
                >
                  <p>
                    Analytics technologies can help website operators
                    understand how visitors use a website and improve its
                    performance.
                  </p>

                  <p>
                    Where non-essential analytics technologies are used, user
                    preferences and applicable legal requirements will be
                    taken into account where required.
                  </p>
                </PolicySection>

                <PolicySection
                  number="07"
                  title="Marketing technologies"
                  id="marketing"
                >
                  <p>
                    Marketing technologies can be used to measure advertising
                    effectiveness, evaluate campaigns or understand user
                    interactions.
                  </p>

                  <p>
                    If such non-essential technologies are used, an appropriate
                    preference or consent mechanism will be applied where
                    required by applicable law.
                  </p>
                </PolicySection>

                <PolicySection
                  number="08"
                  title="Third-party technologies"
                  id="third-party"
                >
                  <p>
                    Third-party service providers may provide technologies
                    required for hosting, security or other technical
                    functions of the website.
                  </p>

                  <p>
                    Where third-party services are used, the relevant data
                    processing activities and applicable legal requirements
                    will be taken into account.
                  </p>
                </PolicySection>

                <PolicySection
                  number="09"
                  title="Managing your preferences"
                  id="management"
                >
                  <p>
                    Your choice regarding the cookie notice may be stored in
                    your browser. If you clear website data or local storage,
                    the notice may be displayed again.
                  </p>

                  <p>
                    You can also use your browser settings to view, restrict or
                    delete cookies and other website data.
                  </p>
                </PolicySection>

                <PolicySection
                  number="10"
                  title="Retention periods"
                  id="retention"
                >
                  <p>
                    The period for which information is stored through cookies
                    or similar technologies may vary according to the purpose
                    and nature of the technology.
                  </p>

                  <p>
                    Information should only be retained for as long as required
                    for the relevant purpose and permitted by applicable law.
                  </p>
                </PolicySection>

                <PolicySection
                  number="11"
                  title="Changes to this policy"
                  id="changes"
                >
                  <p>
                    We may update this Cookie Policy to reflect changes to the
                    technologies used on the website or applicable legal
                    requirements.
                  </p>

                  <p>
                    The latest version will be published on this page and the
                    last updated date will be changed where appropriate.
                  </p>
                </PolicySection>

                <PolicySection number="12" title="Contact" id="contact">
                  <p>
                    If you have questions about this Cookie Policy or the
                    technologies used on our website, please contact us.
                  </p>

                  <a
                    className="mg-privacy-contact-link"
                    href="mailto:hello@mgdigitalagency.com.tr"
                  >
                    hello@mgdigitalagency.com.tr â†—
                  </a>

                  <Link
                    className="mg-privacy-home-link"
                    href={`/${locale}/privacy`}
                  >
                    PRIVACY POLICY
                  </Link>
                </PolicySection>
              </>
            )}
          </article>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  );
}

function PolicySection({
  number,
  title,
  id,
  children,
}: {
  number: string;
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mg-privacy-section" id={id}>
      <h2>
        <span>{number}</span>
        {title}
      </h2>

      <div className="mg-privacy-section-body">{children}</div>
    </section>
  );
}
