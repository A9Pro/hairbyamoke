export default function Footer() {
  return (
    <footer style={{ background:"var(--black)", borderTop:"1px solid rgba(201,168,76,0.09)", padding:"44px 20px 28px" }}>
      <div style={{ maxWidth:"var(--max-w)", margin:"0 auto", padding:"0 var(--pad-x)" }}>
        <div className="footer-inner">
          <div style={{ textAlign:"inherit" }}>
            <div className="df gold-text" style={{ fontSize:"1.5rem", fontWeight:300, letterSpacing:"0.12em" }}>Hair by Amoke</div>
            <div style={{ fontSize:"10px", color:"rgba(212,196,160,0.28)", letterSpacing:"0.22em", marginTop:"3px" }}>Lagos, Nigeria</div>
          </div>
          <nav className="footer-nav">
            {["Services","Gallery","About","Testimonials","Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" style={{ fontSize:"10px", opacity:0.6 }}>{l}</a>
            ))}
          </nav>
          <div style={{ display:"flex", gap:"8px" }}>
            {[{ l:"IG", h:"https://instagram.com/hairbyamokee" }, { l:"TIK", h:"https://tiktok.com/hairbyamokee" }, { l:"WA", h:"https://wa.me/2349160830435" }].map(s => (
              <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
                style={{ width:"34px", height:"34px", border:"1px solid rgba(201,168,76,0.22)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--gold)", fontSize:"10px", letterSpacing:"0.04em", textDecoration:"none", transition:"all 0.3s" }}>
                {s.l}
              </a>
            ))}
          </div>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"6px", paddingTop:"18px", borderTop:"1px solid rgba(201,168,76,0.06)" }}>
          <p style={{ fontSize:"10px", color:"rgba(212,196,160,0.22)", letterSpacing:"0.14em" }}>© {new Date().getFullYear()} Hair by Amoke. All rights reserved.</p>
          <p style={{ fontSize:"10px", color:"rgba(212,196,160,0.18)", letterSpacing:"0.14em" }}>Crafted with ♡ in Lagos</p>
        </div>
      </div>
    </footer>
  );
}
