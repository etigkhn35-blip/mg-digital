import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

type PrivacyPageProps = {
  params: Promise<{
    locale: "en" | "tr";
  }>;
};

type SectionItem = [string, string, string];

export default async function PrivacyPage({
  params,
}: PrivacyPageProps) {
  const { locale } = await params;
  const tr = locale === "tr";

  const sections: SectionItem[] = tr
    ? [
        ["01", "AMAÇ", "amac"],
        ["02", "VERİ SORUMLUSU", "veri-sorumlusu"],
        ["03", "İŞLENEN KİŞİSEL VERİLER", "veriler"],
        ["04", "VERİLERİN TOPLANMASI", "toplama"],
        ["05", "İŞLEME AMAÇLARI", "amaclar"],
        ["06", "HUKUKİ SEBEPLER", "hukuki-sebepler"],
        ["07", "VERİLERİN AKTARILMASI", "aktarim"],
        ["08", "ÇEREZLER", "cerezler"],
        ["09", "VERİ GÜVENLİĞİ VE SAKLAMA", "guvenlik"],
        ["10", "HAKLARINIZ", "haklar"],
        ["11", "POLİTİKA DEĞİŞİKLİKLERİ", "degisiklikler"],
        ["12", "İLETİŞİM", "iletisim"],
      ]
    : [
        ["01", "PURPOSE", "purpose"],
        ["02", "DATA CONTROLLER", "controller"],
        ["03", "PERSONAL DATA WE PROCESS", "data"],
        ["04", "COLLECTION OF DATA", "collection"],
        ["05", "PURPOSES OF PROCESSING", "processing"],
        ["06", "LEGAL BASIS", "legal-basis"],
        ["07", "DATA TRANSFERS", "transfers"],
        ["08", "COOKIES", "cookies"],
        ["09", "SECURITY & RETENTION", "security"],
        ["10", "YOUR RIGHTS", "rights"],
        ["11", "CHANGES TO THIS POLICY", "changes"],
        ["12", "CONTACT", "contact"],
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
  <span>{tr ? "Gizlilik" : "Privacy"}</span>
  <br />
  <span className="mg-privacy-title-accent">
    {tr ? "politikası." : "policy."}
  </span>
</h1>

          <div className="mg-privacy-hero-bottom">
            <p>
              {tr
                ? "Kişisel verilerinizin korunması ve gizliliğiniz bizim için önemlidir."
                : "The protection of your personal data and your privacy is important to us."}
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
                <PrivacySection number="01" title="Amaç" id="amac">
                  <p>
                    Bu Gizlilik Politikası, M&G Digital Communication Agency
                    tarafından işletilen web sitesini ziyaret ettiğinizde veya
                    web sitesi üzerinden bizimle iletişime geçtiğinizde kişisel
                    verilerinizin nasıl toplandığını, kullanıldığını,
                    korunduğunu ve gerektiğinde aktarıldığını açıklamak amacıyla
                    hazırlanmıştır.
                  </p>

                  <p>
                    Kişisel verilerin işlenmesinde başta 6698 sayılı Kişisel
                    Verilerin Korunması Kanunu (“KVKK”) olmak üzere Türkiye
                    Cumhuriyeti&apos;nin yürürlükteki ilgili mevzuatına uygun
                    hareket etmeyi amaçlıyoruz.
                  </p>

                  <p>
                    Bu politika özellikle M&G Digital web sitesini ziyaret eden,
                    iletişim formunu kullanan veya dijital kanallarımız üzerinden
                    bizimle iletişim kuran kişileri kapsamaktadır.
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="02"
                  title="Veri Sorumlusu"
                  id="veri-sorumlusu"
                >
                  <p>
                    KVKK kapsamında kişisel verileriniz bakımından veri
                    sorumlusu:
                  </p>

                  <div className="mg-privacy-company">
                    <strong>[RESMÎ ŞİRKET UNVANI]</strong>
                    <span>M&G Digital Communication Agency</span>
                    <span>[MERKEZ ADRESİ]</span>

                    <a href="mailto:hello@mgdigitalagency.com.tr">
                      hello@mgdigitalagency.com.tr
                    </a>
                  </div>

                  <p>
                    Resmî şirket unvanı ve kayıtlı merkez adresi bu metnin
                    yayımlanmasından önce şirketin güncel ticaret sicili
                    bilgilerine göre tamamlanacaktır.
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="03"
                  title="Hangi Kişisel Verileri İşliyoruz?"
                  id="veriler"
                >
                  <p>
                    Web sitemizi nasıl kullandığınıza ve bizimle nasıl iletişim
                    kurduğunuza bağlı olarak aşağıdaki kişisel veriler
                    işlenebilir:
                  </p>

                  <ul>
                    <li>Ad ve soyad bilgisi,</li>
                    <li>marka veya şirket bilgisi,</li>
                    <li>e-posta adresi,</li>
                    <li>telefon numarası,</li>
                    <li>ilgilenilen hizmetlere ilişkin tercihler,</li>
                    <li>
                      iletişim formu üzerinden gönderilen mesaj ve talepler,
                    </li>
                    <li>
                      web sitesinin güvenli ve teknik olarak çalışması sırasında
                      oluşabilecek sınırlı teknik kayıtlar.
                    </li>
                  </ul>

                  <p>
                    İletişim formumuz aracılığıyla özel nitelikli kişisel veri
                    göndermemenizi rica ederiz.
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="04"
                  title="Kişisel Verilerinizi Nasıl Topluyoruz?"
                  id="toplama"
                >
                  <p>
                    Kişisel verileriniz ağırlıklı olarak doğrudan sizin
                    tarafınızdan sağlanmaktadır. Buna web sitesindeki iletişim
                    formu, e-posta yoluyla gerçekleştirilen iletişim ve bizimle
                    doğrudan kurduğunuz diğer iletişimler dahildir.
                  </p>

                  <p>
                    Ayrıca web sitesinin çalışması ve güvenliğinin sağlanması
                    amacıyla sunucu ve benzeri teknik sistemler üzerinden bazı
                    teknik bilgiler otomatik olarak oluşturulabilir.
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="05"
                  title="Kişisel Verilerinizi Neden İşliyoruz?"
                  id="amaclar"
                >
                  <p>
                    Kişisel verileriniz, ilgili veri işleme faaliyetine bağlı
                    olarak aşağıdaki amaçlarla işlenebilir:
                  </p>

                  <ul>
                    <li>İletişim taleplerinizi almak ve cevaplamak,</li>
                    <li>
                      talep ettiğiniz hizmetler hakkında sizinle iletişime
                      geçmek,
                    </li>
                    <li>
                      potansiyel proje ve iş birliği görüşmelerini yürütmek,
                    </li>
                    <li>web sitesinin güvenliğini sağlamak,</li>
                    <li>
                      teknik sorunları tespit etmek ve web sitesinin çalışmasını
                      sürdürmek,
                    </li>
                    <li>
                      hukuki yükümlülüklerin yerine getirilmesini sağlamak ve
                      gerektiğinde hukuki haklarımızı korumak.
                    </li>
                  </ul>
                </PrivacySection>

                <PrivacySection
                  number="06"
                  title="Kişisel Verilerin İşlenmesinin Hukuki Sebepleri"
                  id="hukuki-sebepler"
                >
                  <p>
                    Kişisel verileriniz, gerçekleştirilen işleme faaliyetine göre
                    KVKK&apos;nın 5. maddesinde düzenlenen kişisel veri işleme
                    şartlarından uygulanabilir olanlara dayanılarak işlenir.
                  </p>

                  <p>
                    Bunlar; bir sözleşmenin kurulması veya ifasıyla doğrudan
                    doğruya ilgili olması, veri sorumlusunun hukuki
                    yükümlülüğünü yerine getirebilmesi için zorunlu olması,
                    ilgili kişinin temel hak ve özgürlüklerine zarar vermemek
                    kaydıyla veri sorumlusunun meşru menfaatleri için veri
                    işlenmesinin zorunlu olması ve gerekli olduğu durumlarda açık
                    rızanızın bulunması gibi hukuki sebepleri içerebilir.
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="07"
                  title="Kişisel Verilerin Aktarılması"
                  id="aktarim"
                >
                  <p>
                    Kişisel verileriniz yalnızca ilgili işlemin gerektirdiği
                    ölçüde ve yürürlükteki mevzuata uygun olarak yetkili kamu
                    kurum ve kuruluşları ile web sitesi, barındırma, e-posta ve
                    bilgi teknolojileri altyapısının sağlanmasında görev alan
                    hizmet sağlayıcılarla paylaşılabilir.
                  </p>

                  <p>
                    Kişisel verilerinizin yurt dışına aktarılmasının söz konusu
                    olduğu durumlarda KVKK&apos;nın yurt dışına veri aktarımına
                    ilişkin yürürlükteki hükümleri dikkate alınır.
                  </p>
                </PrivacySection>

                <PrivacySection number="08" title="Çerezler" id="cerezler">
                  <p>
                    Web sitemiz, sitenin güvenli ve düzgün biçimde çalışması için
                    gerekli teknik teknolojilerden yararlanabilir.
                  </p>

                  <p>
                    Zorunlu olmayan analitik, performans veya pazarlama
                    teknolojilerinin kullanılması halinde, bunlar yürürlükteki
                    mevzuata uygun bir tercih ve onay mekanizmasına tabi
                    tutulacaktır.
                  </p>

                  <p>
                    Çerez tercihlerinizi web sitesinde sunulan çerez yönetim
                    araçları üzerinden değiştirebilirsiniz.
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="09"
                  title="Veri Güvenliği ve Saklama"
                  id="guvenlik"
                >
                  <p>
                    Kişisel verilerin hukuka aykırı olarak işlenmesini ve
                    erişilmesini önlemek ve verilerin güvenli şekilde
                    saklanmasını sağlamak amacıyla işleme faaliyetinin
                    niteliğine uygun teknik ve idari tedbirlerin uygulanması
                    hedeflenmektedir.
                  </p>

                  <p>
                    Kişisel veriler, işlenme amaçlarının gerektirdiği süre ve
                    uygulanabilir mevzuatta öngörülen yasal saklama süreleri
                    boyunca muhafaza edilir. İşleme amacı ve hukuki saklama
                    gerekliliği sona erdiğinde veriler ilgili mevzuata uygun
                    şekilde silinir, yok edilir veya anonim hâle getirilir.
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="10"
                  title="Kişisel Verilerinizle İlgili Haklarınız"
                  id="haklar"
                >
                  <p>
                    KVKK&apos;nın 11. maddesi kapsamında, şartları oluştuğu
                    ölçüde, kişisel verilerinizle ilgili olarak:
                  </p>

                  <ul>
                    <li>
                      kişisel verilerinizin işlenip işlenmediğini öğrenme,
                    </li>
                    <li>işlenmişse buna ilişkin bilgi talep etme,</li>
                    <li>
                      işlenme amacını ve amacına uygun kullanılıp kullanılmadığını
                      öğrenme,
                    </li>
                    <li>
                      yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri
                      bilme,
                    </li>
                    <li>
                      eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini
                      isteme,
                    </li>
                    <li>
                      kanunda öngörülen şartlar çerçevesinde silinmesini veya yok
                      edilmesini isteme,
                    </li>
                    <li>
                      düzeltme, silme veya yok etme işlemlerinin verilerin
                      aktarıldığı üçüncü kişilere bildirilmesini isteme,
                    </li>
                    <li>
                      münhasıran otomatik sistemlerle analiz edilmesi nedeniyle
                      aleyhinize bir sonucun ortaya çıkmasına itiraz etme,
                    </li>
                    <li>
                      kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde
                      zararın giderilmesini talep etme.
                    </li>
                  </ul>

                  <p>haklarına sahipsiniz.</p>
                </PrivacySection>

                <PrivacySection
                  number="11"
                  title="Politikadaki Değişiklikler"
                  id="degisiklikler"
                >
                  <p>
                    Bu Gizlilik Politikası, web sitesindeki veri işleme
                    faaliyetlerinde veya ilgili mevzuatta meydana gelen
                    değişiklikler doğrultusunda güncellenebilir.
                  </p>

                  <p>
                    Güncel sürüm her zaman bu sayfada yayımlanır ve sayfanın üst
                    kısmındaki son güncelleme tarihi değiştirilir.
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="12"
                  title="İletişim"
                  id="iletisim"
                >
                  <p>
                    Gizlilik politikamız veya kişisel verilerinizin işlenmesiyle
                    ilgili sorularınız için bizimle iletişime geçebilirsiniz.
                  </p>

                  <a
                    className="mg-privacy-contact-link"
                    href="mailto:hello@mgdigitalagency.com.tr"
                  >
                    hello@mgdigitalagency.com.tr ↗
                  </a>

                  <Link className="mg-privacy-home-link" href={`/${locale}`}>
                    ANA SAYFAYA DÖN
                  </Link>
                </PrivacySection>
              </>
            ) : (
              <>
                <PrivacySection number="01" title="Purpose" id="purpose">
                  <p>
                    This Privacy Policy explains how M&G Digital Communication
                    Agency collects, uses, protects and, where necessary,
                    transfers personal data when you visit our website or
                    contact us through our digital channels.
                  </p>

                  <p>
                    Our personal data processing activities relating to this
                    website are intended to be carried out in accordance with
                    applicable Turkish data protection legislation, including
                    Law No. 6698 on the Protection of Personal Data (“KVKK”).
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="02"
                  title="Data Controller"
                  id="controller"
                >
                  <p>
                    For the purposes of applicable Turkish data protection law,
                    the data controller is:
                  </p>

                  <div className="mg-privacy-company">
  <strong>M&G Digital Communication Agency</strong>

  <div className="mg-privacy-office">
    <span className="mg-privacy-office-city">Bodrum</span>
    <span>Turgutreis Caddesi 259 / 1</span>
    <span>Bodrum / MUĞLA</span>
  </div>

  <div className="mg-privacy-office">
    <span className="mg-privacy-office-city">İstanbul</span>
    <span>Dikilitaş Mah. Emirhan Cad. No:3 D:3</span>
    <span>Beşiktaş / İSTANBUL</span>
  </div>

  <div className="mg-privacy-office">
    <span className="mg-privacy-office-city">Lisbon</span>
    <span>R. de São Bento 31, 1200-815</span>
    <span>Lisboa / PORTUGAL</span>
  </div>

  <a
    className="mg-privacy-company-mail"
    href="mailto:hello@mgdigitalagency.com.tr"
  >
    hello@mgdigitalagency.com.tr
  </a>
</div>
                </PrivacySection>

                <PrivacySection
                  number="03"
                  title="Personal Data We Process"
                  id="data"
                >
                  <p>
                    Depending on how you interact with us, we may process:
                  </p>

                  <ul>
                    <li>your name and surname,</li>
                    <li>brand or company information,</li>
                    <li>email address,</li>
                    <li>telephone number,</li>
                    <li>services you are interested in,</li>
                    <li>messages and enquiries submitted to us, and</li>
                    <li>
                      limited technical records necessary for the operation and
                      security of the website.
                    </li>
                  </ul>
                </PrivacySection>

                <PrivacySection
                  number="04"
                  title="How We Collect Personal Data"
                  id="collection"
                >
                  <p>
                    Personal data is primarily collected directly from you when
                    you complete our contact form, contact us by email or
                    otherwise communicate with M&G Digital.
                  </p>

                  <p>
                    Limited technical information may also be generated
                    automatically by systems required to operate and secure the
                    website.
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="05"
                  title="Why We Process Personal Data"
                  id="processing"
                >
                  <ul>
                    <li>To receive and respond to enquiries,</li>
                    <li>to communicate with you about requested services,</li>
                    <li>to discuss potential projects and collaborations,</li>
                    <li>to maintain website security and functionality,</li>
                    <li>to identify and resolve technical issues, and</li>
                    <li>
                      to comply with applicable legal obligations and protect
                      our legal rights.
                    </li>
                  </ul>
                </PrivacySection>

                <PrivacySection
                  number="06"
                  title="Legal Basis"
                  id="legal-basis"
                >
                  <p>
                    Personal data is processed on the applicable legal grounds
                    set out under Article 5 of the KVKK, depending on the
                    relevant processing activity.
                  </p>

                  <p>
                    These grounds may include processing necessary for the
                    establishment or performance of a contract, compliance with
                    legal obligations, legitimate interests provided that your
                    fundamental rights and freedoms are not adversely affected,
                    and your explicit consent where required.
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="07"
                  title="Data Transfers"
                  id="transfers"
                >
                  <p>
                    Personal data may be shared, only where necessary and in
                    accordance with applicable law, with authorised public
                    authorities and service providers involved in hosting,
                    email, website operation and information technology
                    infrastructure.
                  </p>

                  <p>
                    Where a transfer of personal data outside Türkiye occurs,
                    the applicable provisions of Turkish data protection law
                    governing international transfers will be taken into
                    account.
                  </p>
                </PrivacySection>

                <PrivacySection number="08" title="Cookies" id="cookies">
                  <p>
                    Our website may use technologies that are necessary for its
                    secure and proper operation.
                  </p>

                  <p>
                    Where non-essential analytics, performance or marketing
                    technologies are introduced, they will be subject to an
                    appropriate preference and consent mechanism where required
                    by applicable law.
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="09"
                  title="Security & Retention"
                  id="security"
                >
                  <p>
                    Appropriate technical and organisational measures are
                    intended to be used to protect personal data against
                    unlawful processing, unauthorised access, loss or
                    disclosure.
                  </p>

                  <p>
                    Personal data is retained only for as long as required for
                    the relevant processing purpose and any applicable
                    statutory retention period. Once those purposes and legal
                    requirements cease to apply, data is deleted, destroyed or
                    anonymised as appropriate.
                  </p>
                </PrivacySection>

                <PrivacySection number="10" title="Your Rights" id="rights">
                  <p>
                    You may exercise the rights available to you under Article
                    11 of the KVKK, subject to the conditions provided by
                    applicable law.
                  </p>

                  <p>
                    These include rights relating to obtaining information about
                    the processing of your personal data, requesting correction
                    of inaccurate data, requesting deletion or destruction where
                    the applicable conditions are met, learning the third
                    parties to whom your data has been transferred, objecting to
                    certain results produced exclusively through automated
                    processing and requesting compensation where unlawful
                    processing has caused damage.
                  </p>
                </PrivacySection>

                <PrivacySection
                  number="11"
                  title="Changes to This Policy"
                  id="changes"
                >
                  <p>
                    We may update this Privacy Policy to reflect changes to our
                    website, data processing activities or applicable legal
                    requirements.
                  </p>

                  <p>
                    The latest version will be published on this page together
                    with the date of the most recent update.
                  </p>
                </PrivacySection>

                <PrivacySection number="12" title="Contact" id="contact">
                  <p>
                    If you have questions regarding this Privacy Policy or the
                    processing of your personal data, please contact us.
                  </p>

                  <a
                    className="mg-privacy-contact-link"
                    href="mailto:hello@mgdigitalagency.com.tr"
                  >
                    hello@mgdigitalagency.com.tr ↗
                  </a>

                  <Link className="mg-privacy-home-link" href={`/${locale}`}>
                    BACK TO HOME
                  </Link>
                </PrivacySection>
              </>
            )}
          </article>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  );
}

function PrivacySection({
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