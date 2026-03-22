"use client";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* ── HERO BACKGROUND IMAGE ──────────────────────────────
          Place your image at: public/images/hero-bg.jpg
      ──────────────────────────────────────────────────────── */}
      <div style={{
        position:"absolute", inset:0, zIndex:0,
        backgroundImage:"url('/images/hero-bg.jpg')",
        backgroundSize:"cover",
        backgroundPosition:"center center",
        backgroundRepeat:"no-repeat",
      }} />

      {/* Dark overlay */}
      <div style={{ position:"absolute", inset:0, zIndex:1, background:"linear-gradient(135deg,rgba(8,8,8,0.88) 0%,rgba(8,8,8,0.68) 55%,rgba(8,8,8,0.85) 100%)" }} />
      {/* Gold glow */}
      <div style={{ position:"absolute", inset:0, zIndex:2, pointerEvents:"none", background:"radial-gradient(ellipse 70% 55% at 50% 50%,rgba(201,168,76,0.08),transparent 70%)" }} />

      {/* Side lines — desktop */}
      <div className="side-line" style={{ position:"absolute", left:"64px", top:0, bottom:0, width:"1px", background:"linear-gradient(to bottom,transparent,rgba(201,168,76,0.2),transparent)", display:"none", zIndex:3 }} />
      <div className="side-line" style={{ position:"absolute", right:"64px", top:0, bottom:0, width:"1px", background:"linear-gradient(to bottom,transparent,rgba(201,168,76,0.2),transparent)", display:"none", zIndex:3 }} />

      {/* Corner ornaments */}
      <div style={{ position:"absolute", zIndex:3, top:"28px", left:"20px" }}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M26 0L0 0L0 26" stroke="rgba(201,168,76,0.35)" strokeWidth="1" fill="none"/></svg>
      </div>
      <div style={{ position:"absolute", zIndex:3, top:"28px", right:"20px" }}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M0 0L26 0L26 26" stroke="rgba(201,168,76,0.35)" strokeWidth="1" fill="none"/></svg>
      </div>
      <div style={{ position:"absolute", zIndex:3, bottom:"28px", left:"20px" }}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M0 0L0 26L26 26" stroke="rgba(201,168,76,0.35)" strokeWidth="1" fill="none"/></svg>
      </div>
      <div style={{ position:"absolute", zIndex:3, bottom:"28px", right:"20px" }}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M26 0L26 26L0 26" stroke="rgba(201,168,76,0.35)" strokeWidth="1" fill="none"/></svg>
      </div>

      {/* Floating orbs */}
      <div style={{ position:"absolute", top:"28%", left:"10%", width:"240px", height:"240px", borderRadius:"50%", background:"radial-gradient(circle,rgba(201,168,76,0.06),transparent 70%)", animation:"float 6s ease-in-out infinite", pointerEvents:"none", zIndex:2 }} />
      <div style={{ position:"absolute", bottom:"20%", right:"8%", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(circle,rgba(201,168,76,0.04),transparent 70%)", animation:"float 9s 2s ease-in-out infinite", pointerEvents:"none", zIndex:2 }} />

      {/* Content */}
      <div style={{ position:"relative", zIndex:4, maxWidth:"960px", width:"100%", textAlign:"center" }}>

        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"14px", marginBottom:"22px", animation:"fadeUp 0.7s ease both" }}>
          <div style={{ height:"1px", width:"36px", background:"rgba(201,168,76,0.45)" }} />
          <span className="section-label">Lagos • Nigeria</span>
          <div style={{ height:"1px", width:"36px", background:"rgba(201,168,76,0.45)" }} />
        </div>

        {/* Brand name */}
        <div style={{ animation:"fadeUp 0.8s 0.08s ease both", marginBottom:"10px" }}>
          <span style={{
            fontFamily:"'Cormorant Garamond', serif",
            fontWeight:600,
            fontSize:"clamp(1.5rem, 5vw, 4.2rem)",
            letterSpacing:"0.16em",
            textTransform:"uppercase",
            whiteSpace:"nowrap",
            background:"linear-gradient(135deg,#9A7A2E 0%,#E8C97A 35%,#C9A84C 60%,#9A7A2E 100%)",
            backgroundSize:"200% auto",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",
            backgroundClip:"text",
            animation:"shimmer 4s linear infinite",
            display:"block",
            lineHeight:1.1,
          }}>HairbyAmoke</span>
        </div>

        <div style={{ width:"70px", height:"1px", background:"linear-gradient(90deg,transparent,rgba(201,168,76,0.6),transparent)", margin:"0 auto 26px", animation:"fadeUp 0.8s 0.14s ease both" }} />

        <h1 className="df" style={{ fontSize:"clamp(2.8rem, 10vw, 8rem)", fontWeight:300, lineHeight:0.95, letterSpacing:"0.03em", color:"#F5EDD6", marginBottom:"22px", animation:"fadeUp 0.9s 0.2s ease both" }}>
          Your Hair,<br />
          <em className="gold-text" style={{ fontStyle:"normal" }}>Elevated.</em>
        </h1>

        <p className="hero-sub" style={{ animation:"fadeUp 1s 0.32s ease both", maxWidth:"500px", margin:"0 auto 38px" }}>
          Bespoke hair artistry for the woman who demands nothing less than perfection.
        </p>

        <div className="hero-btns" style={{ animation:"fadeUp 1s 0.44s ease both" }}>
          <a href="#contact" className="btn-gold" style={{ minWidth:"210px" }}>Book an Appointment</a>
          <a href="#gallery" className="btn-outline" style={{ minWidth:"160px" }}>View My Work</a>
        </div>

        <div style={{ marginTop:"56px", display:"flex", flexDirection:"column", alignItems:"center", gap:"8px", animation:"fadeUp 1s 1s ease both" }}>
          <span style={{ fontFamily:"'Jost',sans-serif", fontSize:"0.56rem", letterSpacing:"0.34em", textTransform:"uppercase", color:"rgba(201,168,76,0.38)" }}>Scroll</span>
          <div style={{ width:"1px", height:"44px", background:"linear-gradient(to bottom,rgba(201,168,76,0.38),transparent)" }} />
        </div>
      </div>

      <style>{`@media(min-width:1024px){ .side-line{ display:block !important; } }`}</style>
    </section>
  );
}
