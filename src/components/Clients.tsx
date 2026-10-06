type ClientsProps = {
  locale: "en" | "tr";
};

const clients = [
  ["SO HOTEL RAS AL KHAIMAH", "HOSPITALITY"],
  ["SPEKTR BOUTIQUE HOTEL", "HOSPITALITY"],
  ["MYNOS BODRUM", "HOSPITALITY"],
  ["ROOT YALIKAVAK", "LIFESTYLE"],
  ["OPA", "FOOD & BEVERAGE"],
  ["LA LARA", "LIFESTYLE"],
  ["COOKS CLUB ADAKÖY", "HOSPITALITY"],
  ["THE ISTANBUL BUTCHER", "FOOD & BEVERAGE"],
  ["SENTEZ RESTAURANT", "FOOD & BEVERAGE"],
  ["THE ONE BODRUM", "HOSPITALITY"],
  ["L'ENTREE", "FOOD & BEVERAGE"],
  ["THE KOMANA BİNBİRDİREK", "HOSPITALITY"],
];

export default function Clients({ locale }: ClientsProps) {
  const tr = locale === "tr";

  return (
    <section className="mg-clients">
      <div className="mg-clients-head">
        <div className="mg-clients-kicker">
          <span>05</span>
          <span>{tr ? "SEÇİLİ MÜŞTERİLER" : "SELECTED CLIENTS"}</span>
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
        {clients.map(([name, category], index) => (
          <div className="mg-client-row" key={name}>
            <span className="mg-client-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="mg-client-name">{name}</span>

            <span className="mg-client-category">{category}</span>

            <span className="mg-client-symbol">↗</span>
          </div>
        ))}
      </div>

      <div className="mg-clients-bottom">
        <span>M&G DIGITAL ©2026</span>

        <span>
          {tr
            ? "HOSPITALITY · LIFESTYLE · CULTURE"
            : "HOSPITALITY · LIFESTYLE · CULTURE"}
        </span>
      </div>
    </section>
  );
}