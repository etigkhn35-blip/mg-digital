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
  ? "Çerez Politikası"
  : "Cookie Policy";

  const description = tr
    ? "M&G Digital Çerez Politikası. Web sitemizde kullanılan çerezler ve benzeri teknolojiler, kullanım amaçları ve tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi edinin."
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
        ["01", "Çerez politikası hakkında", "hakkinda"],
        ["02", "Çerez nedir?", "cerez-nedir"],
        ["03", "Çerezleri neden kullanıyoruz?", "neden"],
        ["04", "Zorunlu çerezler", "zorunlu"],
        ["05", "Tercih teknolojileri", "tercihler"],
        ["06", "Analitik teknolojileri", "analitik"],
        ["07", "Pazarlama teknolojileri", "pazarlama"],
        ["08", "Üçüncü taraf teknolojileri", "ucuncu-taraf"],
        ["09", "Tercihlerinizi yönetme", "yonetim"],
        ["10", "Saklama süreleri", "saklama"],
        ["11", "Politika değişiklikleri", "degisiklikler"],
        ["12", "İletişim", "iletisim"],
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
            <span>{tr ? "Çerez" : "Cookie"}</span>
            <br />
            <span className="mg-privacy-title-accent">
              {tr ? "politikası." : "policy."}
            </span>
          </h1>

          <div className="mg-privacy-hero-bottom">
            <p>
              {tr
                ? "Web sitemizde kullanılan çerezler ve benzeri teknolojiler hakkında bilgi."
                : "Information about cookies and similar technologies used on our website."}
            </p>

            <span>
              {tr
                ? "SON GÜNCELLEME / EKİM 2026"
                : "LAST UPDATED / OCTOBER 2026"}
            </span>
          </div>
        </header>

        <div className="mg-privacy-layout">
          <aside className="mg-privacy-index">
            <div className="mg-privacy-index-inner">
              <span className="mg-privacy-index-title">
                {tr ? "BÖLÜMLER:" : "SECTIONS:"}
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
                  title="Çerez politikası hakkında"
                  id="hakkinda"
                >
                  <p>
                    Bu Çerez Politikası, M&G Digital Communication Agency
                    tarafından işletilen web sitesinde çerezler ve benzeri
                    teknolojilerin nasıl kullanılabileceği hakkında bilgi
                    vermek amacıyla hazırlanmıştır.
                  </p>

                  <p>
                    Bu politika, Gizlilik Politikamızla birlikte okunmalıdır.
                  </p>
                </PolicySection>

                <PolicySection
                  number="02"
                  title="Çerez nedir?"
                  id="cerez-nedir"
                >
                  <p>
                    Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız
                    veya cihazınız aracılığıyla saklanabilen küçük veri
                    parçalarıdır.
                  </p>

                  <p>
                    Benzer amaçlarla yerel depolama gibi tarayıcı tabanlı
                    teknolojiler de kullanılabilir. Bu politikada kolaylık
                    sağlamak amacıyla bu tür teknolojiler birlikte
                    açıklanmaktadır.
                  </p>
                </PolicySection>

                <PolicySection
                  number="03"
                  title="Çerezleri neden kullanıyoruz?"
                  id="neden"
                >
                  <p>
                    Web sitesinin güvenli ve düzgün biçimde çalışmasını
                    sağlamak ve kullanıcı tercihlerini hatırlamak amacıyla
                    gerekli teknolojiler kullanılabilir.
                  </p>

                  <p>
                    Zorunlu olmayan analitik, performans veya pazarlama
                    teknolojilerinin ileride kullanılması hâlinde bunlar,
                    yürürlükteki mevzuatın gerektirdiği durumlarda uygun bir
                    tercih ve onay mekanizmasına tabi tutulacaktır.
                  </p>
                </PolicySection>

                <PolicySection
                  number="04"
                  title="Zorunlu çerezler"
                  id="zorunlu"
                >
                  <p>
                    Bazı teknolojiler web sitesinin temel işlevlerinin
                    sağlanması, güvenliğin korunması ve kullanıcı tarafından
                    yapılan tercihlerin hatırlanması için gerekli olabilir.
                  </p>

                  <div className="mg-cookie-policy-table">
                    <div className="mg-cookie-policy-row mg-cookie-policy-head">
                      <span>TEKNOLOJİ</span>
                      <span>AMAÇ</span>
                    </div>

                    <div className="mg-cookie-policy-row">
                      <strong>mg-cookie-consent</strong>
                      <span>
                        Çerez bildirimine ilişkin seçiminizi hatırlamak için
                        tarayıcınızın yerel depolama alanında kullanılır.
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
                    Kullanıcının site üzerindeki belirli seçimlerini
                    hatırlamak amacıyla tercih teknolojileri kullanılabilir.
                  </p>

                  <p>
                    Mevcut çerez bildirimimiz, bildirime ilişkin seçiminizi
                    tarayıcınızın yerel depolama alanında saklar.
                  </p>
                </PolicySection>

                <PolicySection
                  number="06"
                  title="Analitik teknolojileri"
                  id="analitik"
                >
                  <p>
                    Analitik teknolojileri, ziyaretçilerin web sitesini nasıl
                    kullandığını anlamaya ve sitenin performansını
                    geliştirmeye yardımcı olabilir.
                  </p>

                  <p>
                    Zorunlu olmayan analitik teknolojileri kullanılması
                    hâlinde, gerekli olduğu ölçüde kullanıcı tercihleri ve
                    yürürlükteki mevzuat dikkate alınacaktır.
                  </p>
                </PolicySection>

                <PolicySection
                  number="07"
                  title="Pazarlama teknolojileri"
                  id="pazarlama"
                >
                  <p>
                    Pazarlama teknolojileri reklamların etkinliğini ölçmek,
                    kampanyaları değerlendirmek veya kullanıcı etkileşimlerini
                    anlamak amacıyla kullanılabilir.
                  </p>

                  <p>
                    Bu tür zorunlu olmayan teknolojiler kullanılması hâlinde,
                    yürürlükteki mevzuatın gerektirdiği uygun tercih veya onay
                    mekanizması uygulanacaktır.
                  </p>
                </PolicySection>

                <PolicySection
                  number="08"
                  title="Üçüncü taraf teknolojileri"
                  id="ucuncu-taraf"
                >
                  <p>
                    Web sitesinin barındırılması, güvenliği veya diğer teknik
                    işlevleri kapsamında üçüncü taraf hizmet sağlayıcıların
                    teknolojilerinden yararlanılabilir.
                  </p>

                  <p>
                    Üçüncü taraf hizmetlerin kullanılması hâlinde ilgili veri
                    işleme faaliyetleri ve uygulanabilir yasal gereklilikler
                    dikkate alınır.
                  </p>
                </PolicySection>

                <PolicySection
                  number="09"
                  title="Tercihlerinizi yönetme"
                  id="yonetim"
                >
                  <p>
                    Çerez bildiriminde yaptığınız seçim tarayıcınızda
                    saklanabilir. Tarayıcınızın site verilerini veya yerel
                    depolama alanını temizlediğinizde bildirim yeniden
                    görüntülenebilir.
                  </p>

                  <p>
                    Tarayıcı ayarlarınız üzerinden çerezleri ve diğer site
                    verilerini görüntüleyebilir, sınırlandırabilir veya
                    silebilirsiniz.
                  </p>
                </PolicySection>

                <PolicySection
                  number="10"
                  title="Saklama süreleri"
                  id="saklama"
                >
                  <p>
                    Çerezler ve benzeri teknolojiler aracılığıyla saklanan
                    bilgilerin süresi, teknolojinin amacı ve niteliğine göre
                    değişebilir.
                  </p>

                  <p>
                    Bilgiler yalnızca ilgili amacın gerektirdiği ve
                    uygulanabilir mevzuatın izin verdiği süre boyunca
                    tutulmalıdır.
                  </p>
                </PolicySection>

                <PolicySection
                  number="11"
                  title="Politikadaki değişiklikler"
                  id="degisiklikler"
                >
                  <p>
                    Bu Çerez Politikası, web sitesinde kullanılan
                    teknolojilerde veya ilgili mevzuatta meydana gelen
                    değişikliklere bağlı olarak güncellenebilir.
                  </p>

                  <p>
                    Güncel sürüm bu sayfada yayımlanır ve son güncelleme
                    tarihi gerektiğinde değiştirilir.
                  </p>
                </PolicySection>

                <PolicySection number="12" title="İletişim" id="iletisim">
                  <p>
                    Çerez politikamız veya web sitemizde kullanılan
                    teknolojiler hakkında sorularınız için bizimle iletişime
                    geçebilirsiniz.
                  </p>

                  <a
                    className="mg-privacy-contact-link"
                    href="mailto:hello@mgdigitalagency.com.tr"
                  >
                    hello@mgdigitalagency.com.tr ↗
                  </a>

                  <Link
                    className="mg-privacy-home-link"
                    href={`/${locale}/privacy`}
                  >
                    GİZLİLİK POLİTİKASI
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
                    hello@mgdigitalagency.com.tr ↗
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