export default function CtaBanner() {
  return (
    <section style={{ position:"relative", overflow:"hidden", minHeight:"400px", display:"flex", alignItems:"center", justifyContent:"center", padding:"80px 24px" }}>
      {/* ── CTA BANNER BACKGROUND IMAGE ─────────────────────────
          Place your image at: public/images/cta-bg.jpg
      ──────────────────────────────────────────────────────── */}
      <div style={{
        position:"absolute", inset:0,
        backgroundImage:"url('/images/cta-bg.jpg')",
        backgroundSize:"cover",
        backgroundPosition:"center 30%",
        backgroundColor:"var(--dark-3)",   /* fallback colour */
      }} />
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(8,8,8,0.89) 0%,rgba(16,10,2,0.82) 50%,rgba(8,8,8,0.91) 100%)" }} />
      <div style={{ position:"absolute", top:0, left:"8%", right:"8%", height:"1px", background:"linear-gradient(90deg,transparent,rgba(201,168,76,0.5),transparent)" }} />
      <div style={{ position:"absolute", bottom:0, left:"8%", right:"8%", height:"1px", background:"linear-gradient(90deg,transparent,rgba(201,168,76,0.5),transparent)" }} />

      <div style={{ position:"relative", zIndex:2, textAlign:"center", maxWidth:"680px" }}>
        <span className="section-label" style={{ marginBottom:"18px" }}>Ready for your transformation?</span>
        <div className="gold-divider" style={{ margin:"18px auto 26px" }} />
        <h2 className="df" style={{ fontSize:"clamp(2rem,6vw,3.8rem)", fontWeight:300, color:"var(--cream)", lineHeight:1.1, marginBottom:"14px" }}>
          Your Next Style is{" "}
          <em className="gold-text" style={{ fontStyle:"normal" }}>Waiting.</em>
        </h2>
        <p style={{ color:"var(--cream-dim)", fontSize:"13px", lineHeight:1.85, fontWeight:300, marginBottom:"32px" }}>
          Limited slots available each month. Secure yours before they're gone.
        </p>
        <a href="#contact" className="btn-gold" style={{ fontSize:"0.75rem", padding:"16px 44px" }}>
          Book Your Appointment
        </a>
      </div>
    </section>
  );
}
