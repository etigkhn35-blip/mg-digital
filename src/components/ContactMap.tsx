"use client";

import { useState } from "react";

type ContactMapProps = {
  locale: "en" | "tr";
};

const locations = [
  {
    id: "bodrum",
    number: "01",
    city: "BODRUM",
    code: "BJV",
    address: "Turgutreis Caddesi 259/1",
    region: "Bodrum / MUĞLA",
    mapQuery: "Turgutreis Caddesi 259/1, Bodrum, Muğla, Türkiye",
  },
  {
    id: "istanbul",
    number: "02",
    city: "ISTANBUL",
    code: "IST",
    address: "Dikilitaş Mah. Emirhan Cad. No:3 D:3",
    region: "Beşiktaş / İSTANBUL",
    mapQuery:
      "Dikilitaş Mahallesi Emirhan Caddesi No:3, Beşiktaş, İstanbul, Türkiye",
  },
  {
    id: "lisbon",
    number: "03",
    city: "LISBON",
    code: "LIS",
    address: "R. de São Bento 31, 1200-815",
    region: "Lisboa / PORTUGAL",
    mapQuery: "R. de São Bento 31, 1200-815 Lisboa, Portugal",
  },
];

export default function ContactMap({ locale }: ContactMapProps) {
  const [active, setActive] = useState(0);

  const location = locations[active];

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    location.mapQuery
  )}&z=16&output=embed`;

  return (
    <section className="mg-contact-map">
      <div className="mg-contact-section-label">
        <span>04</span>
        <span>{locale === "tr" ? "ADRESLERİMİZ" : "OUR LOCATIONS"}</span>
      </div>

      <div className="mg-contact-map-heading">
        <h2>
          {locale === "tr" ? (
            <>
              Üç şehir.
              <br />
              <em>Tek bakış açısı.</em>
            </>
          ) : (
            <>
              Three cities.
              <br />
              <em>One point of view.</em>
            </>
          )}
        </h2>
      </div>

      <div className="mg-contact-map-locations">
        {locations.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`mg-contact-map-location ${
              active === index ? "is-active" : ""
            }`}
            onClick={() => setActive(index)}
          >
            <div className="mg-contact-map-location-top">
              <span>{item.number}</span>
              <span>{item.code}</span>
            </div>

            <strong>{item.city}</strong>

            <div className="mg-contact-map-address">
              <span>{item.address}</span>
              <span>{item.region}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mg-contact-map-frame">
        <iframe
          key={location.id}
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`M&G Digital — ${location.city}`}
          allowFullScreen
        />

        <div className="mg-contact-map-active">
          <span>{location.code}</span>

          <div>
            <strong>{location.city}</strong>
            <small>
              {location.address}
              <br />
              {location.region}
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}