"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { getFeaturedProjects } from "../data/projects";

type SelectedWorkProps = {
  locale: "en" | "tr";
};

const clients = [
  {
    name: "MONDAINE",
    logo: "/clients/mondaine.png",
    tr: "Marka iletişimi, yaratıcı içerik ve dijital görünürlük çalışmaları.",
    en: "Brand communication, creative content and digital visibility.",
  },
  {
    name: "ADAMO",
    logo: "/clients/adamo.png",
    tr: "Marka deneyimi, içerik ve dijital iletişim çalışmaları.",
    en: "Brand experience, content and digital communication.",
  },
  {
    name: "CARTIER",
    logo: "/clients/cartier.png",
    tr: "Lüks marka dünyasında yaratıcı iletişim ve deneyim odaklı çalışmalar.",
    en: "Creative communication and experience-led work within the luxury world.",
  },
  {
    name: "COOK'S CLUB",
    logo: "/clients/cooks-club.png",
    tr: "Konaklama markası için içerik, sosyal medya ve dijital iletişim.",
    en: "Content, social media and digital communication for hospitality.",
  },
  {
    name: "LA LARA",
    logo: "/clients/la-lara.png",
    tr: "Marka konumlandırması, yaratıcı içerik ve dijital büyüme.",
    en: "Brand positioning, creative content and digital growth.",
  },
  {
    name: "MYNOS BODRUM",
    logo: "/clients/mynos.png",
    tr: "Bodrum'dan doğan marka için strateji, içerik ve dijital iletişim.",
    en: "Strategy, content and digital communication for a Bodrum-born brand.",
  },
  {
    name: "OPA",
    logo: "/clients/opa.png",
    tr: "Gastronomi markası için yaratıcı iletişim ve içerik dünyası.",
    en: "Creative communication and content for a dining brand.",
  },
  {
    name: "RITUS HOTEL",
    logo: "/clients/ritus-hotel.png",
    tr: "Konaklama deneyimini dijital dünyaya taşıyan marka iletişimi.",
    en: "Brand communication translating hospitality into the digital world.",
  },
  {
    name: "RIXOS TERSANE",
    logo: "/clients/rixos-tersane.png",
    tr: "Konaklama, deneyim ve kültürün kesişiminde yaratıcı iletişim.",
    en: "Creative communication at the intersection of hospitality, experience and culture.",
  },
  {
    name: "ROOT YALIKAVAK",
    logo: "/clients/root-yalikavak.png",
    tr: "Yaşam tarzı markası için yaratıcı içerik ve dijital iletişim.",
    en: "Creative content and digital communication for a lifestyle brand.",
  },
  {
    name: "SENTEZ",
    logo: "/clients/sentez.png",
    tr: "Gastronomi deneyimi için marka iletişimi ve içerik çalışmaları.",
    en: "Brand communication and content for a distinctive dining experience.",
  },
  {
    name: "SO HOTEL",
    logo: "/clients/so-hotel.png",
    tr: "Uluslararası konaklama markası için dijital iletişim çalışmaları.",
    en: "Digital communication for an international hospitality brand.",
  },
  {
    name: "SPEKTR",
    logo: "/clients/spektr.png",
    tr: "Konaklama markası için dijital büyüme, içerik ve görünürlük.",
    en: "Digital growth, content and visibility for hospitality.",
  },
  {
    name: "SPLENDID PALACE",
    logo: "/clients/splendid-palace.png",
    tr: "Tarihi bir konaklama markasının çağdaş iletişim dünyası.",
    en: "A contemporary communication world for a historic hospitality brand.",
  },
  {
    name: "THE ISTANBUL BUTCHER",
    logo: "/clients/istanbul-butcher.png",
    tr: "Gastronomi markası için kimlik, içerik ve yaratıcı iletişim.",
    en: "Identity, content and creative communication for a gastronomy brand.",
  },
  {
    name: "THE KOMANA",
    logo: "/clients/the-komana.png",
    tr: "Konaklama markası için yaratıcı marka ve dijital iletişim çalışmaları.",
    en: "Creative brand and digital communication for hospitality.",
  },
  {
    name: "THE ONE BODRUM",
    logo: "/clients/the-one.png",
    tr: "Bodrum merkezli yaşam tarzı ve konaklama iletişimi.",
    en: "Lifestyle and hospitality communication rooted in Bodrum.",
  },
  {
    name: "L'ENTREE",
    logo: "/clients/lentree.png",
    tr: "Gastronomi markası için yaratıcı içerik ve marka iletişimi.",
    en: "Creative content and brand communication for gastronomy.",
  },
];

export default function SelectedWork({
  locale,
}: SelectedWorkProps) {
  const tr = locale === "tr";

  const projects = getFeaturedProjects().slice(0, 6);

  const sliderRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartScroll, setDragStartScroll] = useState(0);

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const slider = sliderRef.current;

    if (!slider) return;

    setIsDragging(true);
    setDragStartX(event.clientX);
    setDragStartScroll(slider.scrollLeft);

    slider.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;

    const slider = sliderRef.current;

    if (!slider) return;

    const distance = event.clientX - dragStartX;

    slider.scrollLeft =
      dragStartScroll - distance * 1.25;
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const slider = sliderRef.current;

    setIsDragging(false);

    if (
      slider &&
      slider.hasPointerCapture(event.pointerId)
    ) {
      slider.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section className="mg-selected-work">

      {/* ===================================================
          HEADER
      =================================================== */}

      <div className="mg-selected-work-head">

        <div className="mg-selected-work-index">
          <span>05</span>

          <span>
            {tr
              ? "SEÇİLİ İŞLER"
              : "SELECTED WORK"}
          </span>
        </div>

        <Link
          href={`/${locale}/work`}
          className="mg-selected-work-all"
        >
          <span>
            {tr
              ? "TÜM İŞLER"
              : "ALL WORK"}
          </span>

          <ArrowUpRight
            size={14}
            strokeWidth={1.4}
          />
        </Link>

      </div>


      {/* ===================================================
          SELECTED PARTNERSHIPS
      =================================================== */}

      <div className="mg-client-partnerships">

       


        <div
          ref={sliderRef}
          className={`mg-client-partnerships-scroll ${
            isDragging ? "is-dragging" : ""
          }`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={(event) => {
            if (isDragging) {
              handlePointerUp(event);
            }
          }}
        >

          <div className="mg-client-partnerships-track">

            {clients.map((client, index) => (
              <article
                className="mg-client-partnership-card"
                key={client.name}
              >

                <span className="mg-client-partnership-number">
                  {String(index + 1).padStart(2, "0")}
                </span>


                <div className="mg-client-partnership-logo">

                  <img
                    src={client.logo}
                    alt={client.name}
                    draggable="false"
                  />

                </div>


                <div className="mg-client-partnership-rule" />


                <div className="mg-client-partnership-copy">

                  <h3>
                    {client.name}
                  </h3>

                  <p>
                    {tr
                      ? client.tr
                      : client.en}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </div>

 </section>
  );
}