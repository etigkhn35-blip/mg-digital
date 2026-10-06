"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.7 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.3H6.8V13h3.1v9h3.8Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.2 7.9H2V22h3.2V7.9ZM3.6 2A1.9 1.9 0 1 0 3.6 5.8 1.9 1.9 0 0 0 3.6 2ZM22 13.9c0-4.2-2.2-6.2-5.2-6.2-2.4 0-3.5 1.3-4.1 2.2V7.9H9.5V22h3.2v-7c0-1.8.3-3.6 2.6-3.6 2.3 0 2.3 2.1 2.3 3.7V22H22v-8.1Z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7a11.7 11.7 0 0 0 5.4 1.4c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.4Zm-8.4 18.2c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.6-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.8.7-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

type HeaderProps = {
  locale: "en" | "tr";
};

export default function Header({ locale }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const tr = locale === "tr";

  const navigation = tr
  ? [
      { label: "İŞLER", href: "/tr/work", number: "01" },
      { label: "UZMANLIK", href: "/tr/expertise", number: "02" },
      { label: "HİZMETLER", href: "/tr/services", number: "03" },
      { label: "HAKKIMIZDA", href: "/tr/about", number: "04" },
      { label: "İÇGÖRÜLER", href: "/tr/insights", number: "05" },
    ]
  : [
      { label: "WORK", href: "/en/work", number: "01" },
      { label: "EXPERTISE", href: "/en/expertise", number: "02" },
      { label: "SERVICES", href: "/en/services", number: "03" },
      { label: "ABOUT", href: "/en/about", number: "04" },
      { label: "INSIGHTS", href: "/en/insights", number: "05" },
    ];

  const contactHref = `/${locale}/contact`;

  const switchLocale = (targetLocale: "en" | "tr") => {
    if (!pathname) return `/${targetLocale}`;

    const parts = pathname.split("/");

    if (parts[1] === "en" || parts[1] === "tr") {
      parts[1] = targetLocale;
      return parts.join("/") || `/${targetLocale}`;
    }

    return `/${targetLocale}`;
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className={`mg-header ${menuOpen ? "menu-open" : ""}`}>
        <Link
          href={`/${locale}`}
          className="mg-logo mg-header-logo"
          aria-label="M&G Digital"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/brand/mg-logo-white.png"
            alt="M&G Digital Communication Agency"
            width={500}
            height={220}
            className="mg-header-logo-image"
            priority
            loading="eager"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="mg-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}

          <Link href={contactHref}>
            {tr ? "İLETİŞİM" : "Contact"}
          </Link>
        </nav>

        {/* RIGHT */}
        <div className="mg-header-right">
          <div className="mg-languages">
            <Link
              href={switchLocale("en")}
              className={`mg-language ${
                locale === "en" ? "active" : ""
              }`}
            >
              EN
            </Link>

            <span>/</span>

            <Link
              href={switchLocale("tr")}
              className={`mg-language ${
                locale === "tr" ? "active" : ""
              }`}
            >
              TR
            </Link>
          </div>

          

          <button
  className={`mg-mobile-menu-button ${menuOpen ? "active" : ""}`}
  type="button"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen((current) => !current)}
>
  <span className="mg-mobile-menu-text">
    {menuOpen ? "" : "MENU"}
  </span>

  <span className="mg-mobile-menu-lines">
    <i />
    <i />
    <i />
  </span>
</button>

        </div>
      </header>

      {/* =====================================================
          FULLSCREEN MENU
      ====================================================== */}

      <div
        className={`mg-menu-overlay ${menuOpen ? "active" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
  type="button"
  className="mg-menu-close"
  onClick={() => setMenuOpen(false)}
  aria-label={tr ? "Menüyü kapat" : "Close menu"}
>
  <span />
  <span />
</button>
        <div className="mg-menu-inner">
          <div className="mg-menu-label">
            {tr ? "Menü" : "Navigation"}
          </div>

          {/* MENU LINKS */}

          <nav className="mg-menu-navigation">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mg-menu-number">
                  {item.number}
                </span>

                <span className="mg-menu-title">
                  {item.label}
                </span>

                <span className="mg-menu-arrow">
                  ↗
                </span>
              </Link>
            ))}

            <Link
              href={contactHref}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mg-menu-number">
                06
              </span>

              <span className="mg-menu-title">
                {tr ? "İLETİŞİM" : "Contact"}
              </span>

              <span className="mg-menu-arrow">
                ↗
              </span>
            </Link>
          </nav>

          {/* MENU FOOTER */}

          <div className="mg-menu-footer">
            {/* STUDIOS */}

            <div>
              <span className="mg-menu-footer-label">
                {tr ? "STÜDYOLAR" : "STUDIOS"}
              </span>

              <p>
                Bodrum · Istanbul · Lisbon
              </p>
            </div>

            {/* SOCIAL */}

            <div className="mg-menu-social-area">
              <span className="mg-menu-footer-label">
                {tr ? "BİZİ TAKİP EDİN" : "FOLLOW US"}
              </span>

              <div className="mg-menu-social-icons">
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

            {/* LANGUAGE */}

            <div className="mg-menu-language-large">
              <Link
                href={switchLocale("en")}
                className={locale === "en" ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                EN
              </Link>

              <span>/</span>

              <Link
                href={switchLocale("tr")}
                className={locale === "tr" ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                TR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}