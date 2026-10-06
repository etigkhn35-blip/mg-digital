import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type AgencyProps = {
  locale: "en" | "tr";
};

export default function Agency({ locale }: AgencyProps) {
  const tr = locale === "tr";

  return (
    <section className="mg-agency">
      <div className="mg-agency-top">
        <div className="mg-agency-label">
          <span>06</span>
          <span>{tr ? "M&G HAKKINDA" : "ABOUT M&G"}</span>
        </div>

        <span className="mg-agency-location">
          BODRUM · ISTANBUL · LISBON
        </span>
      </div>

      <div className="mg-agency-statement">
        <h2>
          {tr ? (
            <>
              Ajans değil.
              <br />
              Markaların
              <br />
              <em>yaratıcı ortağı.</em>
            </>
          ) : (
            <>
              Not just an agency.
              <br />
              A creative partner
              <br />
              <em>for ambitious brands.</em>
            </>
          )}
        </h2>
      </div>

      <div className="mg-agency-editorial">
       <div className="mg-agency-media">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="mg-agency-video"
    aria-hidden="true"
  >
    <source
      src="/media/mg-showreel.mp4"
      type="video/mp4"
    />
  </video>

  <div className="mg-agency-video-shade" />

  <span className="mg-agency-media-index">01 / 01</span>
</div>

        <div className="mg-agency-copy">
          <span className="mg-agency-copy-label">
            {tr ? "BAĞIMSIZ. MERAKLI. HAREKETLİ." : "INDEPENDENT. CURIOUS. IN MOTION."}
          </span>

          <p>
            {tr
              ? "Strateji, yaratıcılık, prodüksiyon ve büyümeyi tek bir yapı içinde buluşturuyoruz. Konaklama, yaşam tarzı, gastronomi ve kültür markalarıyla yalnızca kampanyalar değil, uzun vadeli marka değeri üretiyoruz."
              : "We bring strategy, creativity, production and growth into one connected practice. Working across hospitality, lifestyle, food and culture, we build more than campaigns — we build long-term brand value."}
          </p>

          <Link href={`/${locale}/about`} className="mg-agency-link">
            <span>{tr ? "M&G'Yİ KEŞFET" : "DISCOVER M&G"}</span>
            <ArrowUpRight size={16} strokeWidth={1.4} />
          </Link>
        </div>
      </div>

      <div className="mg-agency-cities">
  <div className="mg-agency-city">
    <img
      src="/contact/bodrum.jpg"
      alt="Bodrum"
      className="mg-agency-city-image"
    />

    <div className="mg-agency-city-shade" />

    <span>01</span>

    <div className="mg-agency-city-bottom">
      <strong>BODRUM</strong>
      <small>BJV</small>
    </div>
  </div>

  <div className="mg-agency-city">
    <img
      src="/contact/istanbul.jpg"
      alt="Istanbul"
      className="mg-agency-city-image"
    />

    <div className="mg-agency-city-shade" />

    <span>02</span>

    <div className="mg-agency-city-bottom">
      <strong>ISTANBUL</strong>
      <small>IST</small>
    </div>
  </div>

  <div className="mg-agency-city">
    <img
      src="/contact/lisbon.jpg"
      alt="Lisbon"
      className="mg-agency-city-image"
    />

    <div className="mg-agency-city-shade" />

    <span>03</span>

    <div className="mg-agency-city-bottom">
      <strong>LISBON</strong>
      <small>LIS</small>
    </div>
  </div>
</div>
    </section>
  );
}