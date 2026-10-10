"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "mg-cookie-consent";

export default function CookieConsent() {
  const pathname = usePathname();
  const tr = pathname === "/tr" || pathname.startsWith("/tr/");

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!consent) {
      setVisible(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  }

  function closeBanner() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "dismissed");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="mg-cookie-banner"
      role="region"
      aria-label={tr ? "Çerez bildirimi" : "Cookie notice"}
    >
      <div className="mg-cookie-accent" />

      <div className="mg-cookie-inner">
        <div className="mg-cookie-copy">
          <span className="mg-cookie-label">
            M&G / {tr ? "GİZLİLİK" : "PRIVACY"}
          </span>

          <p>
            {tr ? (
              <>
                Bu web sitesi, deneyiminizi geliştirmek ve sitenin düzgün
                çalışmasını sağlamak için çerezler kullanır.{" "}
                <Link href="/tr/cookies">ÇEREZ POLİTİKASI</Link>
              </>
            ) : (
              <>
                This website uses cookies to improve your experience and
                ensure the site works properly.{" "}
                <Link href="/en/cookies">COOKIE POLICY</Link>
              </>
            )}
          </p>
        </div>

        <div className="mg-cookie-actions">
          <button
            type="button"
            className="mg-cookie-accept"
            onClick={acceptCookies}
          >
            {tr ? "ÇEREZLERİ KABUL ET" : "ACCEPT COOKIES"}
          </button>

          <button
            type="button"
            className="mg-cookie-close"
            onClick={closeBanner}
            aria-label={tr ? "Bildirimi kapat" : "Close notice"}
          >
            <X strokeWidth={1.4} />
          </button>
        </div>
      </div>
    </div>
  );
}