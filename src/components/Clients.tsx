import Link from "next/link";

type ClientsProps = {
  locale: "en" | "tr";
};

type Client = {
  name: string;
  categoryEN: string;
  categoryTR: string;
  slug?: string;
};

const clients: Client[] = [
  {
    name: "SO HOTEL RAS AL KHAIMAH",
    categoryEN: "HOSPITALITY",
    categoryTR: "KONAKLAMA",
    slug: "so-hotel",
  },
  {
    name: "SPEKTR BOUTIQUE HOTEL",
    categoryEN: "HOSPITALITY",
    categoryTR: "KONAKLAMA",
    slug: "spektr",
  },
  {
    name: "MYNOS BODRUM",
    categoryEN: "HOSPITALITY",
    categoryTR: "KONAKLAMA",
    slug: "mynos-bodrum",
  },
  {
    name: "ROOT YALIKAVAK",
    categoryEN: "LIFESTYLE",
    categoryTR: "YAŞAM TARZI",
    slug: "root-yalikavak",
  },
  {
    name: "OPA",
    categoryEN: "FOOD & BEVERAGE",
    categoryTR: "GASTRONOMİ",
    slug: "opa",
  },
  {
    name: "LA LARA",
    categoryEN: "LIFESTYLE",
    categoryTR: "YAŞAM TARZI",
    slug: "la-lara",
  },
  {
    name: "COOKS CLUB ADAKÖY",
    categoryEN: "HOSPITALITY",
    categoryTR: "KONAKLAMA",
  },
  {
    name: "THE ISTANBUL BUTCHER",
    categoryEN: "FOOD & BEVERAGE",
    categoryTR: "GASTRONOMİ",
    slug: "the-istanbul-butcher",
  },
  {
    name: "SENTEZ RESTAURANT",
    categoryEN: "FOOD & BEVERAGE",
    categoryTR: "GASTRONOMİ",
  },
  {
    name: "THE ONE BODRUM",
    categoryEN: "HOSPITALITY",
    categoryTR: "KONAKLAMA",
    slug: "the-one-bodrum",
  },
  {
    name: "L'ENTREE",
    categoryEN: "FOOD & BEVERAGE",
    categoryTR: "GASTRONOMİ",
  },
  {
    name: "THE KOMANA BİNBİRDİREK",
    categoryEN: "HOSPITALITY",
    categoryTR: "KONAKLAMA",
    slug: "the-komana",
  },
];

export default function Clients({ locale }: ClientsProps) {
  const tr = locale === "tr";

  return (
    <section className="mg-clients">
      <div className="mg-clients-head">
        <div className="mg-clients-kicker">
          <span>05</span>

          <span>
            {tr ? "SEÇİLİ MÜŞTERİLER" : "SELECTED CLIENTS"}
          </span>
        </div>

        <h2>
          {tr ? (
            <>
              Güvenden doğan
              <br />
              <em>uzun ilişkiler.</em>
            </>
          ) : (
            <>
              Built on trust.
              <br />
              <em>Made to last.</em>
            </>
          )}
        </h2>
      </div>

      <div className="mg-client-list">
        {clients.map((client, index) => {
          const content = (
            <>
              <span className="mg-client-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="mg-client-name">
                {client.name}
              </span>

              <span className="mg-client-category">
                {tr
                  ? client.categoryTR
                  : client.categoryEN}
              </span>

              <span className="mg-client-symbol">
                {client.slug ? "↗" : "—"}
              </span>
            </>
          );

          if (client.slug) {
            return (
              <Link
                key={client.name}
                href={`/${locale}/work/${client.slug}`}
                className="mg-client-row mg-client-row-link"
              >
                {content}
              </Link>
            );
          }

          return (
            <div
              key={client.name}
              className="mg-client-row mg-client-row-static"
            >
              {content}
            </div>
          );
        })}
      </div>

      <div className="mg-clients-bottom">
        <span>M&G DIGITAL ©2026</span>

        <span>
          HOSPITALITY · LIFESTYLE · CULTURE
        </span>
      </div>
    </section>
  );
}