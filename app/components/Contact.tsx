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

export default function Contact() {
  const [form, setForm] = useState({ name:"", phone:"", style:"", customStyle:"", date:"", message:"" });
  const [sent, setSent] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const showCustom = form.style === "Other (specify below)";

  return (
    <section id="contact" className="section" style={{ background:"var(--dark)" }}>
      <div className="container">
        <div className="grid-2">

          {/* Left info */}
          <div className="contact-info-col">
            <span className="section-label" style={{ marginBottom:"14px" }}>Get In Touch</span>
            <div style={{ width:"36px", height:"1px", background:"rgba(201,168,76,0.4)", margin:"14px 0 22px" }} />
            <h2 className="sec-title" style={{ textAlign:"left", marginBottom:"20px" }}>
              Book Your<br /><em className="gold-text" style={{ fontStyle:"normal" }}>Experience</em>
            </h2>
            <p style={{ color:"var(--cream-dim)", fontSize:"13px", lineHeight:1.9, fontWeight:300, marginBottom:"36px", maxWidth:"400px" }}>
              All bookings begin with a consultation. I'll get back to you within 24 hours to confirm your appointment details and deposit information.
            </p>

            {[
              { icon:"📍", main:"Ketu, Lagos, Nigeria",        sub:"Exact location shared upon booking" },
              { icon:"📱", main:"+234 (0) 916 083 0435",      sub:"WhatsApp preferred" },
              { icon:"📸", main:"@hairbyamokee",                sub:"DMs welcome" },
            ].map((r, i) => (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"14px", marginBottom:"20px" }}>
                <div style={{ width:"34px", height:"34px", border:"1px solid rgba(201,168,76,0.28)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:"13px" }}>{r.icon}</div>
                <div>
                  <p style={{ color:"var(--cream)", fontSize:"13px", fontWeight:300 }}>{r.main}</p>
                  <p style={{ color:"rgba(212,196,160,0.42)", fontSize:"11px", marginTop:"2px" }}>{r.sub}</p>
                </div>
              </div>
            ))}

            <div style={{ marginTop:"32px", paddingTop:"24px", borderTop:"1px solid rgba(201,168,76,0.1)" }}>
              <span className="section-label" style={{ fontSize:"0.58rem", marginBottom:"14px" }}>Hours of Operation</span>
              <div style={{ marginTop:"14px", display:"flex", flexDirection:"column", gap:"10px" }}>
                {[
                  ["Monday – Friday", "9:00am – 7:00pm"],
                  ["Saturday",        "8:00am – 6:00pm"],
                  ["Sunday",          "By Request Only"],
                ].map(([d, h]) => (
                  <div key={d} style={{ display:"flex", justifyContent:"space-between" }}>
                    <span style={{ color:"var(--cream-dim)", fontSize:"12px", fontWeight:300 }}>{d}</span>
                    <span style={{ color:"rgba(212,196,160,0.42)", fontSize:"11px" }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="card" style={{ padding:"36px 28px" }}>
            {sent ? (
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"48px 0" }}>
                <div style={{ width:"52px", height:"52px", border:"1px solid rgba(201,168,76,0.4)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"20px", fontSize:"20px" }}>✓</div>
                <h3 className="df" style={{ fontSize:"2rem", fontWeight:300, color:"var(--cream)", marginBottom:"12px" }}>Thank You</h3>
                <div className="gold-divider" style={{ marginBottom:"16px" }} />
                <p style={{ color:"var(--cream-dim)", fontSize:"13px", lineHeight:1.8, fontWeight:300, maxWidth:"260px" }}>
                  Your booking request has been received. Amoke will reach out within 24 hours to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                <h3 className="df" style={{ fontSize:"1.6rem", fontWeight:400, color:"var(--cream)", marginBottom:"8px" }}>Booking Request</h3>
                <div style={{ width:"26px", height:"1px", background:"rgba(201,168,76,0.4)", marginBottom:"26px" }} />

                {/* Name */}
                <div className="field">
                  <label>Full Name</label>
                  <input type="text" required placeholder="Your name" value={form.name} onChange={e => set("name", e.target.value)} />
                </div>

                {/* Phone */}
                <div className="field">
                  <label>WhatsApp Number</label>
                  <input type="tel" required placeholder="+234 916 083 0435" value={form.phone} onChange={e => set("phone", e.target.value)} />
                </div>

                {/* Service dropdown */}
                <div className="field">
                  <label>Select a Service</label>
                  <select required value={form.style} onChange={e => set("style", e.target.value)}>
                    <option value="">Choose a service</option>
                    {styleOpts.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Custom style input — shown only when "Other" is selected */}
                <div style={{
                  maxHeight: showCustom ? "100px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease, opacity 0.3s ease",
                  opacity: showCustom ? 1 : 0,
                }}>
                  <div className="field" style={{ marginTop:"2px" }}>
                    <label>Describe Your Style</label>
                    <input
                      type="text"
                      placeholder="e.g. Butterfly locs, Fulani braids, Senegalese twists..."
                      value={form.customStyle}
                      onChange={e => set("customStyle", e.target.value)}
                      required={showCustom}
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="field">
                  <label>Preferred Date</label>
                  <input type="date" value={form.date} onChange={e => set("date", e.target.value)} style={{ colorScheme:"dark" }} />
                </div>

                {/* Notes */}
                <div className="field">
                  <label>Additional Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Hair length, hair type, inspiration photos, any special requests..."
                    value={form.message}
                    onChange={e => set("message", e.target.value)}
                  />
                </div>

                <button type="submit" className="btn-gold" style={{ width:"100%", marginTop:"4px" }}>
                  Send Booking Request
                </button>

                <p style={{ textAlign:"center", color:"rgba(212,196,160,0.3)", fontSize:"10px", letterSpacing:"0.16em", marginTop:"12px" }}>
                  30% deposit required to secure your booking
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}