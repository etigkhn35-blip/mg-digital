import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type FooterProps = {
  locale: "en" | "tr";
};

/* =========================================================
   SOCIAL ICONS
========================================================= */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.7 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.3H6.8V13h3.1v9h3.8Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.2 7.9H2V22h3.2V7.9ZM3.6 2A1.9 1.9 0 1 0 3.6 5.8 1.9 1.9 0 0 0 3.6 2ZM22 13.9c0-4.2-2.2-6.2-5.2-6.2-2.4 0-3.5 1.3-4.1 2.2V7.9H9.5V22h3.2v-7c0-1.8.3-3.6 2.6-3.6 2.3 0 2.3 2.1 2.3 3.7V22H22v-8.1Z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7a11.7 11.7 0 0 0 5.4 1.4c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.4Zm-8.4 18.2c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.6-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.8.7-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

/* =========================================================
   FOOTER
========================================================= */

export default function Footer({ locale }: FooterProps) {
  const tr = locale === "tr";

  return (
    <footer className="mg-footer">
      {/* TOP */}

      <div className="mg-footer-top">
        <div className="mg-footer-index">
          <span>08</span>
          <span>{tr ? "İLETİŞİM" : "CONTACT"}</span>
        </div>

        <span className="mg-footer-cities-top">
          BODRUM · ISTANBUL · LISBON
        </span>
      </div>

    

      {/* CONTACT + SOCIAL */}

      <div className="mg-footer-contact-row">
        <div className="mg-footer-mail">
          <span>{tr ? "BİZE YAZIN" : "GET IN TOUCH"}</span>

          <a href="mailto:hello@mgdigitalagency.com">
            hello@mgdigitalagency.com
          </a>
        </div>

        <div className="mg-footer-social-area">
          <span>{tr ? "BİZİ TAKİP EDİN" : "FOLLOW US"}</span>

          <div className="mg-footer-socials">
            <a
              href="https://www.instagram.com/mgdigitalagency/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.linkedin.com/company/m-g-digital-communication-agency"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>

            <a
  href="https://wa.me/905528418095"
  target="_blank"
  rel="noreferrer"
  aria-label="WhatsApp"
  title="WhatsApp"
>
  <WhatsappIcon />
</a>
          </div>
        </div>
      </div>

     {/* LOWER */}

<div className="mg-footer-lower">
<Link
  href={`/${locale}`}
  className="mg-footer-brand mg-footer-brand-logo"
  aria-label="M&G Digital"
>
  <Image
    src="/brand/mg-logo-white.png"
    alt="M&G Digital Communication Agency"
    width={500}
    height={220}
    className="mg-footer-logo-image"
  />
</Link>

  <div className="mg-footer-column">
    <span className="mg-footer-column-title">
      {tr ? "ODAK" : "FOCUS"}
    </span>

    <p>
      {tr ? (
        <>
          Konaklama
          <br />
          Yaşam Tarzı
          <br />
          Gastronomi
          <br />
          Kültür
        </>
      ) : (
        <>
          Hospitality
          <br />
          Lifestyle
          <br />
          Food &amp; Beverage
          <br />
          Culture
        </>
      )}
    </p>
  </div>

  <div className="mg-footer-column">
    <span className="mg-footer-column-title">
      {tr ? "STÜDYOLAR" : "STUDIOS"}
    </span>

    <p>
      Bodrum <small>BJV</small>
      <br />
      Istanbul <small>IST</small>
      <br />
      Lisbon <small>LIS</small>
    </p>
  </div>

  <div className="mg-footer-column">
    <span className="mg-footer-column-title">
      {tr ? "KEŞFET" : "EXPLORE"}
    </span>

    <nav className="mg-footer-nav">
      <Link href={`/${locale}/work`}>
        {tr ? "İşler" : "Work"}
      </Link>

      <Link href={`/${locale}/expertise`}>
        {tr ? "Uzmanlık" : "Expertise"}
      </Link>

      <Link href={`/${locale}/services`}>
        {tr ? "Hizmetler" : "Services"}
      </Link>

      <Link href={`/${locale}/about`}>
        {tr ? "Hakkımızda" : "About"}
      </Link>

      <Link href={`/${locale}/insights`}>
        {tr ? "İçgörüler" : "Insights"}
      </Link>
    </nav>
  </div>
</div>

      {/* BOTTOM */}

      <div className="mg-footer-bottom">
        <span>© 2026 M&G DIGITAL</span>

        <div>
          <Link href={`/${locale}/privacy`}>
            {tr ? "GİZLİLİK" : "PRIVACY"}
          </Link>

          <Link href={`/${locale}/cookies`}>
            {tr ? "ÇEREZLER" : "COOKIES"}
          </Link>
        </div>

        <a href="#top">
          {tr ? "YUKARI DÖN" : "BACK TO TOP"} ↑
        </a>
      </div>
    </footer>
  );
}