import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, style, customStyle, date, message } = body;

    const serviceName = style === "Other (specify below)" && customStyle
      ? `Other: ${customStyle}`
      : style;

    // ── Gmail transporter ─────────────────────────────────────
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,      // your Gmail address
        pass: process.env.GMAIL_APP_PASS,  // Gmail App Password (not your main password)
      },
    });

    const htmlBody = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0E0E0E; color: #F5EDD6; padding: 40px 32px; border: 1px solid #C9A84C;">
        <div style="text-align:center; margin-bottom: 32px;">
          <h1 style="font-family: Georgia, serif; font-weight: 300; font-size: 28px; letter-spacing: 0.15em; color: #C9A84C; margin: 0;">HairbyAmoke</h1>
          <p style="font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(201,168,76,0.6); margin-top: 6px;">New Booking Request</p>
        </div>

        <div style="border-top: 1px solid rgba(201,168,76,0.2); padding-top: 28px;">
          ${[
            ["Full Name",        name],
            ["WhatsApp Number",  phone],
            ["Service Requested",serviceName],
            ["Preferred Date",   date || "Not specified"],
            ["Additional Notes", message || "None"],
          ].map(([label, value]) => `
            <div style="margin-bottom: 18px;">
              <p style="font-size: 10px; letter-spacing: 0.28em; text-transform: uppercase; color: #C9A84C; margin: 0 0 4px;">${label}</p>
              <p style="font-size: 14px; color: #F5EDD6; margin: 0; font-weight: 300;">${value}</p>
            </div>
          `).join("")}
        </div>

        <div style="border-top: 1px solid rgba(201,168,76,0.2); margin-top: 28px; padding-top: 20px; text-align: center;">
          <p style="font-size: 11px; color: rgba(212,196,160,0.4); letter-spacing: 0.15em;">Sent from hairbyamoke.com</p>
        </div>
      </div>
    `;

    // ── Send to Amoke's inbox ─────────────────────────────────
    await transporter.sendMail({
      from:    `"HairbyAmoke Bookings" <${process.env.GMAIL_USER}>`,
      to:      process.env.GMAIL_USER,
      replyTo: phone,
      subject: `✨ New Booking — ${name} | ${serviceName}`,
      html:    htmlBody,
    });

    // ── Send confirmation to client (if they provided email) ──
    // (optional — skipped if no client email collected)

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Booking email error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
