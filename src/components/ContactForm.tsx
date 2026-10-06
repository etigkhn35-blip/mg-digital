"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type ContactFormProps = {
  locale: "en" | "tr";
};

const interests = [
  {
    value: "strategy",
    en: "Strategy",
    tr: "Strateji",
  },
  {
    value: "creative",
    en: "Creative",
    tr: "Yaratıcı",
  },
  {
    value: "content",
    en: "Content",
    tr: "İçerik",
  },
  {
    value: "growth",
    en: "Growth",
    tr: "Büyüme",
  },
  {
    value: "digital",
    en: "Digital",
    tr: "Dijital",
  },
];

export default function ContactForm({ locale }: ContactFormProps) {
  const tr = locale === "tr";

  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  function toggleInterest(value: string) {
    setSelected((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // API / email bağlantısını sonraki adımda bağlayacağız.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mg-contact-success">
        <span>✓</span>

        <h3>
          {tr ? "Mesajınızı aldık." : "We've got it."}
        </h3>

        <p>
          {tr
            ? "Teşekkürler. En kısa sürede sizinle iletişime geçeceğiz."
            : "Thank you. We'll get back to you as soon as possible."}
        </p>

        <button type="button" onClick={() => setSent(false)}>
          {tr ? "YENİ MESAJ" : "NEW MESSAGE"}
        </button>
      </div>
    );
  }

  return (
    <form className="mg-contact-form" onSubmit={handleSubmit}>
      <div className="mg-contact-field">
        <label htmlFor="contact-name">
          01 / {tr ? "ADINIZ" : "YOUR NAME"}
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder={tr ? "Ad Soyad" : "Name Surname"}
        />
      </div>

      <div className="mg-contact-field">
        <label htmlFor="contact-company">
          02 / {tr ? "MARKA / ŞİRKET" : "BRAND / COMPANY"}
        </label>

        <input
          id="contact-company"
          name="company"
          type="text"
          placeholder={tr ? "Marka veya şirket adı" : "Brand or company name"}
        />
      </div>

      <div className="mg-contact-field">
        <label htmlFor="contact-email">
          03 / {tr ? "E-POSTA" : "EMAIL"}
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="name@company.com"
        />
      </div>

      <div className="mg-contact-field">
        <label htmlFor="contact-phone">
          04 / {tr ? "TELEFON" : "PHONE"}
        </label>

        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="+90"
        />
      </div>

      <fieldset className="mg-contact-interests">
        <legend>
          05 / {tr ? "NELERLE İLGİLENİYORSUNUZ?" : "WHAT DO YOU NEED?"}
        </legend>

        <div>
          {interests.map((item) => {
            const active = selected.includes(item.value);

            return (
              <button
                key={item.value}
                type="button"
                className={active ? "active" : ""}
                onClick={() => toggleInterest(item.value)}
              >
                <span>{active ? "✓" : "+"}</span>
                {tr ? item.tr : item.en}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mg-contact-field mg-contact-message">
        <label htmlFor="contact-message">
          06 / {tr ? "PROJENİZİ ANLATIN" : "TELL US ABOUT IT"}
        </label>

        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder={
            tr
              ? "Ne üzerinde çalışıyorsunuz?"
              : "What are you working on?"
          }
        />
      </div>

      <div className="mg-contact-submit-row">
        <p>
          {tr
            ? "Göndererek sizinle bu talep hakkında iletişime geçmemizi kabul etmiş olursunuz."
            : "By sending this form, you agree that we may contact you about this enquiry."}
        </p>

        <button type="submit" className="mg-contact-submit">
          <span>{tr ? "GÖNDER" : "SEND"}</span>

          <span className="mg-contact-submit-arrow">
            <ArrowUpRight strokeWidth={1.3} />
          </span>
        </button>
      </div>
    </form>
  );
}