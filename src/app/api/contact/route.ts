import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactBody = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  interests?: unknown;
  message?: unknown;
  website?: unknown;
  locale?: unknown;
};

const ALLOWED_INTERESTS = new Set([
  "strategy",
  "creative",
  "content",
  "growth",
  "digital",
]);

const interestLabels: Record<string, string> = {
  strategy: "Strategy / Strateji",
  creative: "Creative / Yaratıcı",
  content: "Content / İçerik",
  growth: "Growth / Büyüme",
  digital: "Digital / Dijital",
};

const MAX_BODY_SIZE = 10_000;

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function containsHeaderBreak(value: string): boolean {
  return /[\r\n]/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function badRequest(message = "Invalid request.") {
  return NextResponse.json(
    { error: message },
    { status: 400 }
  );
}

export async function POST(request: Request) {
  try {

    console.log("CONTACT IP HEADERS", {
  forwarded: request.headers.get("forwarded"),
  xForwardedFor: request.headers.get("x-forwarded-for"),
  xRealIp: request.headers.get("x-real-ip"),
});
    /*
     * Content-Type kontrolü
     */
    const contentType = request.headers.get("content-type") || "";

    if (!contentType.toLowerCase().startsWith("application/json")) {
      return NextResponse.json(
        { error: "Unsupported content type." },
        { status: 415 }
      );
    }

    /*
     * Aşırı büyük request'leri JSON parse etmeden önce reddet.
     */
    const contentLength = Number(
      request.headers.get("content-length") || "0"
    );

    if (
      Number.isFinite(contentLength) &&
      contentLength > MAX_BODY_SIZE
    ) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 }
      );
    }

    /*
     * Body'yi text olarak okuyarak gerçek boyutu da kontrol et.
     * Content-Length header'ına tek başına güvenmiyoruz.
     */
    const rawBody = await request.text();

    if (
      new TextEncoder().encode(rawBody).length >
      MAX_BODY_SIZE
    ) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 }
      );
    }

    let body: ContactBody;

    try {
      body = JSON.parse(rawBody) as ContactBody;
    } catch {
      return badRequest();
    }

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return badRequest();
    }

    /*
     * Honeypot
     *
     * Gerçek kullanıcı bu alanı göremez.
     * Bot doldurmuşsa mail göndermiyoruz.
     *
     * Bilerek success dönüyoruz; botun honeypot'u
     * keşfetmesini zorlaştırıyor.
     */
    const website = cleanString(body.website);

    if (website) {
      return NextResponse.json({ success: true });
    }

    const name = cleanString(body.name);
    const company = cleanString(body.company);
    const email = cleanString(body.email);
    const phone = cleanString(body.phone);
    const message = cleanString(body.message);

    /*
     * Zorunlu alanlar
     */
    if (!name || !email || !message) {
      return badRequest("Required fields are missing.");
    }

    /*
     * Sunucu tarafı uzunluk limitleri.
     * Client'taki maxLength değerlerine güvenmiyoruz.
     */
    if (name.length > 100) {
      return badRequest();
    }

    if (company.length > 150) {
      return badRequest();
    }

    if (email.length > 254) {
      return badRequest();
    }

    if (phone.length > 40) {
      return badRequest();
    }

    if (message.length > 5000) {
      return badRequest();
    }

    /*
     * Nodemailer header alanlarında CR/LF kabul etmiyoruz.
     */
    if (
      containsHeaderBreak(name) ||
      containsHeaderBreak(email)
    ) {
      return badRequest();
    }

    /*
     * Email kontrolü
     */
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return badRequest("Invalid email address.");
    }

    /*
     * Locale yalnızca TR veya EN olabilir.
     */
    const locale =
      body.locale === "tr" ? "tr" : "en";

    /*
     * Interest allowlist.
     *
     * Client'tan rastgele servis isimleri kabul etmiyoruz.
     */
    const interests = Array.isArray(body.interests)
      ? body.interests.filter(
          (item): item is string =>
            typeof item === "string" &&
            ALLOWED_INTERESTS.has(item)
        )
      : [];

    /*
     * Aynı interest'in tekrar tekrar gönderilmesini engelle.
     */
    const uniqueInterests = [...new Set(interests)];

    const selectedInterests =
      uniqueInterests.length > 0
        ? uniqueInterests
            .map((item) => interestLabels[item])
            .join(", ")
        : "-";

    /*
     * SMTP ayarları yalnızca server environment'tan okunuyor.
     */
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !CONTACT_TO
    ) {
      console.error(
        "Contact form SMTP configuration is incomplete."
      );

      return NextResponse.json(
        { error: "Unable to send message." },
        { status: 500 }
      );
    }

    const smtpPort = Number(SMTP_PORT);

    if (
      !Number.isInteger(smtpPort) ||
      smtpPort < 1 ||
      smtpPort > 65535
    ) {
      console.error(
        "Contact form SMTP port configuration is invalid."
      );

      return NextResponse.json(
        { error: "Unable to send message." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,

      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const displayCompany = company || "-";
    const displayPhone = phone || "-";

    await transporter.sendMail({
      from: `"M&G Digital Website" <${SMTP_USER}>`,

      to: CONTACT_TO,

      replyTo: email,

      subject: `New Website Enquiry — ${name}`,

      text: [
        "NEW WEBSITE ENQUIRY",
        "",
        `Name: ${name}`,
        `Company: ${displayCompany}`,
        `Email: ${email}`,
        `Phone: ${displayPhone}`,
        `Services: ${selectedInterests}`,
        `Language: ${locale === "tr" ? "TR" : "EN"}`,
        "",
        "MESSAGE",
        message,
      ].join("\n"),

      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:680px;margin:0 auto;color:#151513;">

          <div style="border-bottom:1px solid #ddd;padding:24px 0;">

            <div style="font-size:12px;letter-spacing:2px;color:#777;">
              M&G DIGITAL AGENCY
            </div>

            <h1 style="font-size:28px;font-weight:500;margin:12px 0 0;">
              New Website Enquiry
            </h1>

          </div>

          <div style="padding:28px 0;">

            <p>
              <strong>Name</strong><br>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Brand / Company</strong><br>
              ${escapeHtml(displayCompany)}
            </p>

            <p>
              <strong>Email</strong><br>
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Phone</strong><br>
              ${escapeHtml(displayPhone)}
            </p>

            <p>
              <strong>Services</strong><br>
              ${escapeHtml(selectedInterests)}
            </p>

            <p>
              <strong>Language</strong><br>
              ${locale === "tr" ? "TR" : "EN"}
            </p>

            <div style="margin-top:32px;padding-top:24px;border-top:1px solid #ddd;">

              <strong>Message</strong>

              <p style="white-space:pre-wrap;line-height:1.6;">
                ${escapeHtml(message)}
              </p>

            </div>

          </div>

          <div style="border-top:1px solid #ddd;padding:18px 0;font-size:11px;color:#777;">
            Sent from mgdigitalagency.com.tr contact form
          </div>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    /*
     * SMTP veya server ayrıntısını client'a göndermiyoruz.
     */
    return NextResponse.json(
      { error: "Unable to send message." },
      { status: 500 }
    );
  }
}