"use client";

import { useState } from "react";
import { ArrowDown, Play, X } from "lucide-react";
import Header from "./Header";

type HeroProps = {
  locale: "en" | "tr";
};

export default function Hero({ locale }: HeroProps) {
  const [reelOpen, setReelOpen] = useState(false);

  const tr = locale === "tr";

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="mg-hero">
        <div className="mg-hero-media">
          {/* REAL HERO VIDEO */}

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="mg-hero-video"
            aria-hidden="true"
          >
            <source
              src="/media/mg-showreel.mp4"
              type="video/mp4"
            />
          </video>

          {/* VIDEO SHADE */}

          <div className="mg-hero-shade" />

          {/* HEADER */}

          <Header locale={locale} />

          {/* WATCH REEL */}

          <button
            className="mg-watch-reel"
            type="button"
            onClick={() => setReelOpen(true)}
          >
            <Play
              size={14}
              fill="currentColor"
              strokeWidth={1.4}
            />

            <span>
              {tr ? (
                <>
                  REEL&apos;İ
                  <br />
                  İZLE
                </>
              ) : (
                <>
                  WATCH
                  <br />
                  REEL
                </>
              )}
            </span>
          </button>

          {/* HERO BOTTOM */}

          <div className="mg-hero-bottom">
            <div>
              <span>M&G DIGITAL</span>
              <span>© 2026</span>
            </div>

            <span>
              {tr
                ? "KONAKLAMA · YAŞAM TARZI · KÜLTÜR"
                : "HOSPITALITY · LIFESTYLE · CULTURE"}
            </span>
          </div>

          {/* SCROLL */}

          <a
            href="#intro"
            className="mg-scroll-down"
            aria-label="Scroll down"
          >
            <ArrowDown
              size={17}
              strokeWidth={1.5}
            />
          </a>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section
        className="mg-home-intro"
        id="intro"
      >
        <div className="mg-home-intro-meta">
          <span>01</span>

          <span>
  {tr
    ? "360° DİJİTAL İLETİŞİM AJANSI"
    : "360° DIGITAL COMMUNICATION AGENCY"}
</span>
        </div>

        <div className="mg-home-intro-copy">
          <h1>
            {tr ? (
              <>
                Markaları yalnızca
                <br />
                görünür kılmıyoruz.
                <br />
                <em>Kültüre taşıyoruz.</em>
              </>
            ) : (
              <>
                We don&apos;t just make
                <br />
                brands visible.
                <br />
                <em>We move them into culture.</em>
              </>
            )}
          </h1>

          <div className="mg-home-intro-bottom">
            <p>
              {tr
                ? "Konaklama, yaşam tarzı ve kültür markaları için strateji, yaratıcı işler, içerik, büyüme ve dijital deneyimler."
                : "Strategy, creative, content, growth and digital experiences for hospitality, lifestyle and culture brands."}
            </p>

            <span>
              BODRUM · ISTANBUL · LISBON
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          REEL MODAL
      ====================================================== */}

    {reelOpen && (
  <div className="mg-reel-modal">
    <button
      type="button"
      className="mg-reel-close"
      onClick={() => setReelOpen(false)}
      aria-label={tr ? "Reeli kapat" : "Close reel"}
    >
      <X size={22} strokeWidth={1.3} />
    </button>

    <div className="mg-crt-header">
      <span>M&G DIGITAL</span>
      <span>SHOWREEL / ©2026</span>
    </div>

    <div className="mg-crt-stage">
      <div className="mg-crt-tv">
        <div className="mg-crt-body">
          <div className="mg-crt-screen-shell">
            <div className="mg-crt-screen">
              <video
                className="mg-crt-video"
                autoPlay
                playsInline
                controls
              >
                <source
                  src="/media/mg-showreel.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="mg-crt-glass" />
              <div className="mg-crt-scanlines" />
            </div>
          </div>

          <div className="mg-crt-controls">
            <div className="mg-crt-brand">
              <strong>M&G</strong>
              <span>DIGITAL / CRT-01</span>
            </div>

            <div className="mg-crt-control-panel">
              <div className="mg-crt-led" />

              <div className="mg-crt-knob">
                <span />
              </div>

              <div className="mg-crt-knob mg-crt-knob-small">
                <span />
              </div>
            </div>
          </div>
        </div>

        <div className="mg-crt-feet">
          <span />
          <span />
        </div>
      </div>
    </div>

    <div className="mg-crt-footer">
      <span>PLAYING / 01</span>
      <span>BODRUM · ISTANBUL · LISBON</span>
    </div>
  </div>
)}
    </>
  );
}