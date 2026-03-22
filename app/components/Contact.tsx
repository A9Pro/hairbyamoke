"use client";
import { useState } from "react";

const styleOpts = [
  "Knotless Braids",
  "Cornrows",
  "Ghana Weaving",
  "Locs & Twist",
  "Nails",
  "Wig Installation",
  "Other (specify below)",
];

const WA_NUMBER = "2349160830435"; // Amoke's WhatsApp — no + or spaces

function buildWhatsAppMessage(form: Record<string, string>) {
  const service = form.style === "Other (specify below)" && form.customStyle
    ? `Other: ${form.customStyle}`
    : form.style;

  return encodeURIComponent(
    `Hello Amoke! 👋\n\nI'd like to book an appointment.\n\n` +
    `*Name:* ${form.name}\n` +
    `*Service:* ${service}\n` +
    `*Preferred Date:* ${form.date || "Flexible"}\n` +
    `*Notes:* ${form.message || "None"}\n\n` +
    `Looking forward to hearing from you! ✨`
  );
}

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name:"", phone:"", style:"", customStyle:"", date:"", message:"",
  });
  const [status, setStatus] = useState<Status>("idle");
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const showCustom = form.style === "Other (specify below)";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // ── 1. Send email via API route ──────────────────────────
      const res = await fetch("/api/book", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Email failed");

      setStatus("sent");

      // ── 2. Open WhatsApp with pre-filled message ─────────────
      const waUrl = `https://wa.me/${WA_NUMBER}?text=${buildWhatsAppMessage(form)}`;
      setTimeout(() => window.open(waUrl, "_blank"), 800);

    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section" style={{ background:"var(--dark)" }}>
      <div className="container">
        <div className="grid-2">

          {/* ── LEFT INFO ── */}
          <div className="contact-info-col">
            <span className="section-label" style={{ marginBottom:"14px" }}>Get In Touch</span>
            <div style={{ width:"36px", height:"1px", background:"rgba(201,168,76,0.4)", margin:"14px 0 22px" }} />
            <h2 className="sec-title" style={{ textAlign:"left", marginBottom:"20px" }}>
              Book Your<br /><em className="gold-text" style={{ fontStyle:"normal" }}>Experience</em>
            </h2>
            <p style={{ color:"var(--cream-dim)", fontSize:"13px", lineHeight:1.9, fontWeight:300, marginBottom:"36px", maxWidth:"400px" }}>
              Fill the form and you'll receive a WhatsApp message from Amoke within 24 hours to confirm your appointment.
            </p>

            {[
              { icon:"📍", main:"Ketu, Lagos, Nigeria",      sub:"Exact location shared upon booking" },
              { icon:"📱", main:"+234 (0) 916 083 0435",    sub:"WhatsApp preferred" },
              { icon:"📸", main:"@hairbyamokee",              sub:"DMs welcome" },
            ].map((r, i) => (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"14px", marginBottom:"20px" }}>
                <div style={{ width:"34px", height:"34px", border:"1px solid rgba(201,168,76,0.28)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:"13px" }}>{r.icon}</div>
                <div>
                  <p style={{ color:"var(--cream)", fontSize:"13px", fontWeight:300 }}>{r.main}</p>
                  <p style={{ color:"rgba(212,196,160,0.42)", fontSize:"11px", marginTop:"2px" }}>{r.sub}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp direct button */}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ display:"inline-flex", alignItems:"center", gap:"10px", marginTop:"8px", fontSize:"0.68rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.555 4.126 1.528 5.856L0 24l6.337-1.611A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.058-1.398l-.363-.216-3.763.957.999-3.665-.236-.374A9.817 9.817 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
              </svg>
              Chat on WhatsApp
            </a>

            {/* Hours */}
            <div style={{ marginTop:"32px", paddingTop:"24px", borderTop:"1px solid rgba(201,168,76,0.1)" }}>
              <span className="section-label" style={{ fontSize:"0.58rem", marginBottom:"14px" }}>Hours of Operation</span>
              <div style={{ marginTop:"14px", display:"flex", flexDirection:"column", gap:"10px" }}>
                {[
                  ["Monday – Friday","9:00am – 7:00pm"],
                  ["Saturday",       "8:00am – 6:00pm"],
                  ["Sunday",         "By Request Only"],
                ].map(([d, h]) => (
                  <div key={d} style={{ display:"flex", justifyContent:"space-between" }}>
                    <span style={{ color:"var(--cream-dim)", fontSize:"12px", fontWeight:300 }}>{d}</span>
                    <span style={{ color:"rgba(212,196,160,0.42)", fontSize:"11px" }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FORM ── */}
          <div className="card" style={{ padding:"36px 28px" }}>

            {/* Success state */}
            {status === "sent" ? (
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", padding:"48px 0" }}>
                <div style={{ width:"56px", height:"56px", border:"1px solid rgba(201,168,76,0.4)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"20px", fontSize:"22px" }}>✓</div>
                <h3 className="df" style={{ fontSize:"2rem", fontWeight:300, color:"var(--cream)", marginBottom:"12px" }}>Booking Sent!</h3>
                <div className="gold-divider" style={{ marginBottom:"18px" }} />
                <p style={{ color:"var(--cream-dim)", fontSize:"13px", lineHeight:1.8, fontWeight:300, maxWidth:"280px", marginBottom:"24px" }}>
                  Your request was emailed to Amoke. WhatsApp is opening so you can follow up directly. 💬
                </p>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${buildWhatsAppMessage(form)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ fontSize:"0.68rem" }}
                >
                  Open WhatsApp Again
                </a>
              </div>

            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="df" style={{ fontSize:"1.6rem", fontWeight:400, color:"var(--cream)", marginBottom:"8px" }}>Booking Request</h3>
                <div style={{ width:"26px", height:"1px", background:"rgba(201,168,76,0.4)", marginBottom:"26px" }} />

                {/* Name */}
                <div className="field">
                  <label>Full Name</label>
                  <input type="text" required placeholder="Your name" value={form.name} onChange={e=>set("name",e.target.value)} />
                </div>

                {/* Phone */}
                <div className="field">
                  <label>WhatsApp Number</label>
                  <input type="tel" required placeholder="+234 916 083 0435" value={form.phone} onChange={e=>set("phone",e.target.value)} />
                </div>

                {/* Service */}
                <div className="field">
                  <label>Select a Service</label>
                  <select required value={form.style} onChange={e=>set("style",e.target.value)}>
                    <option value="">Choose a service</option>
                    {styleOpts.map(s=><option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Custom style — animated reveal */}
                <div style={{ maxHeight:showCustom?"100px":"0", overflow:"hidden", transition:"max-height 0.4s ease, opacity 0.3s ease", opacity:showCustom?1:0 }}>
                  <div className="field" style={{ marginTop:"2px" }}>
                    <label>Describe Your Style</label>
                    <input
                      type="text"
                      placeholder="e.g. Butterfly locs, Fulani braids, Bantu knots..."
                      value={form.customStyle}
                      onChange={e=>set("customStyle",e.target.value)}
                      required={showCustom}
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="field">
                  <label>Preferred Date</label>
                  <input type="date" value={form.date} onChange={e=>set("date",e.target.value)} style={{ colorScheme:"dark" }} />
                </div>

                {/* Notes */}
                <div className="field">
                  <label>Additional Notes</label>
                  <textarea rows={3} placeholder="Hair length, type, inspiration photos, any special requests..." value={form.message} onChange={e=>set("message",e.target.value)} />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p style={{ color:"#E24B4A", fontSize:"11px", marginBottom:"12px", letterSpacing:"0.1em" }}>
                    ⚠ Something went wrong. Please try WhatsApp directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-gold"
                  disabled={status === "sending"}
                  style={{ width:"100%", marginTop:"4px", opacity:status==="sending"?0.7:1, cursor:status==="sending"?"wait":"pointer" }}
                >
                  {status === "sending" ? "Sending..." : "Send Booking Request"}
                </button>

                <p style={{ textAlign:"center", color:"rgba(212,196,160,0.3)", fontSize:"10px", letterSpacing:"0.16em", marginTop:"12px" }}>
                  Booking confirmed via WhatsApp + Email
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
