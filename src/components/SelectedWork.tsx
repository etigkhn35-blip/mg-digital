"use client";

type SelectedWorkProps = {
  locale: "en" | "tr";
};

const clients = [
  { name: "SELVI", logo: "/clients/selvi.png" },
  { name: "ATILAY", logo: "/clients/atilay.png" },
  { name: "SPLENDID", logo: "/clients/splendid.png" },
  { name: "MULLA", logo: "/clients/mulla.png" },
  {
    name: "SMALL LUXURY HOTELS",
    logo: "/clients/small-luxury-hotels.png",
  },
  {
    name: "LUXURY MEMBER HOTELS",
    logo: "/clients/luxury-member-hotels.png",
  },
  { name: "METT HOTELS", logo: "/clients/mett-hotels.png" },
  { name: "SCORPIOS", logo: "/clients/scorpios.png" },
  { name: "FOLIE", logo: "/clients/folie.png" },
  {
    name: "CARRESSA RESORT & SPA",
    logo: "/clients/carressa-resort-spa.png",
  },
  {
    name: "YALIKAVAK MARINA",
    logo: "/clients/yalikavak-marina.png",
  },
  { name: "BITZ", logo: "/clients/bitz.png" },
  { name: "MAÇAKIZI", logo: "/clients/macakizi.png" },
  {
    name: "ISTANBUL AIRPORT",
    logo: "/clients/istanbul-airport.png",
  },
  {
    name: "THE TIMES EDITION",
    logo: "/clients/the-times-edition.png",
  },
  { name: "WYNDHAM", logo: "/clients/wyndham.png" },
  { name: "CELESTE", logo: "/clients/celeste.png" },

 
  
  { name: "COOK'S CLUB", logo: "/clients/cooks-club.png" },
  { name: "LA LARA", logo: "/clients/la-lara.png" },
  { name: "L'ENTREE", logo: "/clients/lentree.png" },
  
  { name: "MYNOS BODRUM", logo: "/clients/mynos.png" },
  { name: "OPA", logo: "/clients/opa.png" },
 
 
  {
    name: "ROOT YALIKAVAK",
    logo: "/clients/root-yalikavak.png",
  },

  { name: "SPEKTR", logo: "/clients/spektr.png" },
  {
    name: "SPLENDID PALACE",
    logo: "/clients/splendid-palace.png",
  },
  {
    name: "THE ISTANBUL BUTCHER",
    logo: "/clients/istanbul-butcher.png",
  },
  {
    name: "THE KOMANA",
    logo: "/clients/the-komana.png",
  },
  {
    name: "THE ONE BODRUM",
    logo: "/clients/the-one.png",
  },
];

export default function SelectedWork({
  locale,
}: SelectedWorkProps) {
  const tr = locale === "tr";

  return (
    <section className="mg-selected-work mg-clients-marquee-section">
      <div className="mg-selected-work-head">
        <div className="mg-selected-work-index">
          <span>05</span>
          <span>{tr ? "MARKALAR" : "CLIENTS"}</span>
        </div>

        <div className="mg-clients-count">
  {tr ? `${clients.length} MARKA` : `${clients.length} BRANDS`}
</div>
      </div>

      <div className="mg-clients-marquee">
        <div className="mg-clients-marquee-track">
          {[...clients, ...clients].map((client, index) => (
            <div
              className="mg-clients-marquee-item"
              key={`${client.name}-${index}`}
              aria-hidden={index >= clients.length}
            >
              <img
                src={client.logo}
                alt={index < clients.length ? client.name : ""}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}