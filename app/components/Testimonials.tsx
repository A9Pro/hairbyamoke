"use client";
import { useState } from "react";

/*
  ── TESTIMONIAL AVATAR GUIDE ───────────────────────────────
  Place your images in: public/images/
  client-1.jpg → Adaeze
  client-2.jpg → Chisom
  client-3.jpg → Fatima
  client-4.jpg → Ngozi
  client-5.jpg → Blessing
  ───────────────────────────────────────────────────────── */

const ts = [
  { name:"Adaeze O.",   loc:"Victoria Island, Lagos", style:"Knotless Braids",   avatar:"/images/client-1.jpg", quote:"Amoke is simply magical. She took my vision and exceeded it in ways I didn't know were possible. My knotless braids lasted 8 weeks and looked pristine throughout. She is the only person I trust with my hair." },
  { name:"Chisom N.",   loc:"Lekki, Lagos",           style:"Fulani Braids",     avatar:"/images/client-2.jpg", quote:"I flew in from Abuja specifically for this appointment, and I would do it a thousand times over. Amoke's attention to detail is unmatched — every bead, every section, absolute perfection." },
  { name:"Fatima A.",   loc:"Ikoyi, Lagos",           style:"Goddess Locs",      avatar:"/images/client-3.jpg", quote:"The experience itself is luxurious — she transforms the appointment into a ritual. And then you see the finished result and words fail you. Amoke doesn't just do hair, she creates wearable art." },
  { name:"Ngozi E.",    loc:"Gbagada, Lagos",         style:"Box Braids",        avatar:"/images/client-4.jpg", quote:"Five stars is not enough. I've been getting my hair done for 15 years and no one comes close to Amoke's precision and care. I left feeling like absolute royalty." },
  { name:"Blessing T.", loc:"Surulere, Lagos",        style:"Feed-in Cornrows",  avatar:"/images/client-5.jpg", quote:"She listened to what I wanted, offered her expert opinion, and together we created something beyond beautiful. Every compliment I receive leads back to one name — Amoke." },
];

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const t = ts[cur];

  return (
    <section id="testimonials" className="section" style={{ background:"var(--black)", position:"relative", overflow:"hidden" }}>
      {/* ── BACKGROUND IMAGE ───────────────────────────────────
          Place your image at: public/images/testimonials-bg.jpg
      ──────────────────────────────────────────────────────── */}
      <div style={{
        position:"absolute", inset:0,
        backgroundImage:"url('/images/testimonials-bg.jpg')",
        backgroundSize:"cover", backgroundPosition:"center",
        opacity:0.05, zIndex:0,
      }} />
      <div className="df" style={{ position:"absolute", top:"20px", left:"8px", fontSize:"16rem", lineHeight:1, fontWeight:300, color:"rgba(201,168,76,0.05)", pointerEvents:"none", userSelect:"none", zIndex:1 }}>"</div>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 60% at 50% 50%,rgba(201,168,76,0.04),transparent 70%)", pointerEvents:"none", zIndex:1 }} />

      <div className="container" style={{ position:"relative", zIndex:2 }}>
        <div style={{ maxWidth:"760px", margin:"0 auto" }}>
          <div className="sec-head">
            <span className="section-label" style={{ marginBottom:"16px" }}>Kind Words</span>
            <div className="gold-divider" style={{ margin:"16px auto" }} />
            <h2 className="sec-title">Client <em className="gold-text" style={{ fontStyle:"normal" }}>Stories</em></h2>
          </div>

          <div className="card testi-card">
            {/* Avatar */}
            <div style={{ display:"flex", justifyContent:"center", marginBottom:"18px" }}>
              <div style={{ width:"70px", height:"70px", borderRadius:"50%", overflow:"hidden", border:"2px solid rgba(201,168,76,0.38)", backgroundColor:"var(--dark-3)", flexShrink:0 }}>
                <img src={t.avatar} alt={t.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              </div>
            </div>

            {/* Stars */}
            <div style={{ display:"flex", justifyContent:"center", gap:"4px", marginBottom:"14px" }}>
              {[...Array(5)].map((_,i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="#C9A84C"/>
                </svg>
              ))}
            </div>

            <span className="section-label" style={{ fontSize:"0.58rem", color:"rgba(201,168,76,0.52)", marginBottom:"18px" }}>{t.style}</span>
            <blockquote className="testi-quote">"{t.quote}"</blockquote>
            <div className="gold-divider" style={{ marginBottom:"16px" }} />
            <p style={{ color:"var(--cream)", fontSize:"13px", letterSpacing:"0.12em", fontWeight:300 }}>{t.name}</p>
            <p style={{ color:"rgba(212,196,160,0.42)", fontSize:"10px", letterSpacing:"0.22em", textTransform:"uppercase", marginTop:"4px" }}>{t.loc}</p>
          </div>

          {/* Controls */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"18px", marginTop:"26px" }}>
            <button onClick={() => setCur(c => (c - 1 + ts.length) % ts.length)} style={{ width:"36px", height:"36px", border:"1px solid rgba(201,168,76,0.3)", background:"transparent", color:"var(--gold)", cursor:"pointer", fontSize:"20px", display:"flex", alignItems:"center", justifyContent:"center" }}>‹</button>
            <div style={{ display:"flex", gap:"6px", alignItems:"center" }}>
              {ts.map((_,i) => (
                <div key={i} onClick={() => setCur(i)} style={{ height:"2px", width:i===cur?"22px":"6px", background:i===cur?"var(--gold)":"rgba(201,168,76,0.2)", borderRadius:"1px", cursor:"pointer", transition:"all 0.3s" }} />
              ))}
            </div>
            <button onClick={() => setCur(c => (c + 1) % ts.length)} style={{ width:"36px", height:"36px", border:"1px solid rgba(201,168,76,0.3)", background:"transparent", color:"var(--gold)", cursor:"pointer", fontSize:"20px", display:"flex", alignItems:"center", justifyContent:"center" }}>›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
