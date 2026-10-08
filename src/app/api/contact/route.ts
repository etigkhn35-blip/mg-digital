import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  interests?: string[];
  message?: string;
  locale?: "en" | "tr";
};

const interestLabels: Record<string, string> = {
  strategy: "Strategy / Strateji",
  creative: "Creative / Yaratıcı",
  content: "Content / İçerik",
  growth: "Growth / Büyüme",
  digital: "Digital / Dijital",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    const name = body.name?.trim();
    const company = body.company?.trim() || "-";
    const email = body.email?.trim();
    const phone = body.phone?.trim() || "-";
    const message = body.message?.trim();
    const interests = Array.isArray(body.interests) ? body.interests : [];

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

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
      console.error("Contact form SMTP configuration is incomplete.");

      return NextResponse.json(
        { error: "Mail service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const selectedInterests =
      interests.length > 0
        ? interests
            .map((item) => interestLabels[item] || item)
            .join(", ")
        : "-";

    const safe = (value: string) =>
      value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    await transporter.sendMail({
      from: `"M&G Digital Website" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New Website Enquiry — ${name}`,
      text: [
        "NEW WEBSITE ENQUIRY",
        "",
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Services: ${selectedInterests}`,
        `Language: ${body.locale === "tr" ? "TR" : "EN"}`,
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
            <p><strong>Name</strong><br>${safe(name)}</p>
            <p><strong>Brand / Company</strong><br>${safe(company)}</p>
            <p><strong>Email</strong><br>${safe(email)}</p>
            <p><strong>Phone</strong><br>${safe(phone)}</p>
            <p><strong>Services</strong><br>${safe(selectedInterests)}</p>
            <p><strong>Language</strong><br>${
              body.locale === "tr" ? "TR" : "EN"
            }</p>

            <div style="margin-top:32px;padding-top:24px;border-top:1px solid #ddd;">
              <strong>Message</strong>
              <p style="white-space:pre-wrap;line-height:1.6;">${safe(message)}</p>
            </div>
          </div>

          <div style="border-top:1px solid #ddd;padding:18px 0;font-size:11px;color:#777;">
            Sent from mgdigitalagency.com.tr contact form
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Unable to send message." },
      { status: 500 }
    );
  }
}