"use client";

const stats = [
  { v:"500+", l:"Happy Clients" },
  { v:"8+",   l:"Years Experience" },
  { v:"20+",  l:"Signature Styles" },
  { v:"100%", l:"Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background:"var(--dark-2)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:0, right:0, bottom:0, width:"50%", zIndex:0,
        backgroundImage:"url('/images/about-bg.jpg')", backgroundSize:"cover",
        backgroundPosition:"center", opacity:0.07 }} />
      <div style={{ position:"absolute", inset:0,
        background:"linear-gradient(90deg, var(--dark-2) 35%, rgba(22,22,22,0.55) 100%)", zIndex:1 }} />

      <div className="container" style={{ position:"relative", zIndex:2 }}>
        <div className="grid-2">

          {/* Portrait */}
          <div className="portrait-wrap">
            <div style={{ width:"100%", aspectRatio:"3/4", position:"relative",
              overflow:"hidden", border:"1px solid rgba(201,168,76,0.22)", backgroundColor:"var(--dark-3)" }}>

              {/* Plain img — explicit dimensions tell browser exact size upfront */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-portrait.jpg"
                alt="Amoke — Hair Artist"
                width={400}
                height={533}
                loading="lazy"
                decoding="async"
                style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block" }}
              />

              <div style={{ position:"absolute", inset:0,
                background:"linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)",
                pointerEvents:"none", zIndex:1 }} />

              {/* Corner accents — explicit camelCase, no spread */}
              <div style={{ position:"absolute", top:"10px", left:"10px", width:"18px", height:"18px", zIndex:2, borderTop:"1px solid rgba(201,168,76,0.55)", borderLeft:"1px solid rgba(201,168,76,0.55)" }} />
              <div style={{ position:"absolute", top:"10px", right:"10px", width:"18px", height:"18px", zIndex:2, borderTop:"1px solid rgba(201,168,76,0.55)", borderRight:"1px solid rgba(201,168,76,0.55)" }} />
              <div style={{ position:"absolute", bottom:"10px", left:"10px", width:"18px", height:"18px", zIndex:2, borderBottom:"1px solid rgba(201,168,76,0.55)", borderLeft:"1px solid rgba(201,168,76,0.55)" }} />
              <div style={{ position:"absolute", bottom:"10px", right:"10px", width:"18px", height:"18px", zIndex:2, borderBottom:"1px solid rgba(201,168,76,0.55)", borderRight:"1px solid rgba(201,168,76,0.55)" }} />

              <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"20px", zIndex:3 }}>
                <p className="df" style={{ fontSize:"1.4rem", fontWeight:300, color:"var(--cream)", letterSpacing:"0.1em" }}>Amoke</p>
                <p className="section-label" style={{ fontSize:"0.58rem", marginTop:"2px", color:"rgba(201,168,76,0.7)" }}>Hair Artist · Lagos</p>
              </div>
            </div>

            <div className="card" style={{ position:"absolute", bottom:"-20px", right:"-8px",
              padding:"16px 22px", textAlign:"center", minWidth:"130px", zIndex:3 }}>
              <div className="df gold-text" style={{ fontSize:"2rem", fontWeight:300 }}>8+</div>
              <div className="section-label" style={{ fontSize:"0.56rem", marginTop:"4px" }}>Years of<br/>Mastery</div>
            </div>
          </div>

          {/* Text */}
          <div style={{ paddingTop:"8px" }}>
            <span className="section-label" style={{ marginBottom:"14px" }}>About Amoke</span>
            <div style={{ width:"36px", height:"1px", background:"rgba(201,168,76,0.4)", marginBottom:"22px", marginTop:"14px" }} />
            <h2 className="sec-title" style={{ textAlign:"left", marginBottom:"24px" }}>
              Where Craft Meets{" "}
              <em className="gold-text" style={{ fontStyle:"normal" }}>Passion</em>
            </h2>
            {[
              "I am Amoke — a hair artist with over eight years of dedicated practice, specialising in protective styling that honours the beauty and strength of natural hair. Born in Lagos, trained across West Africa and beyond.",
              "Every client who sits in my chair is more than an appointment. You are a canvas, and I approach each style with the same reverence a sculptor gives to marble — with patience, precision, and profound care.",
              "My philosophy is simple: you deserve hair that reflects who you are, not just what's trending. We create together.",
            ].map((p, i) => (
              <p key={i} style={{ color:"var(--cream-dim)", fontSize:"13px", lineHeight:1.9, fontWeight:300, marginBottom:"14px" }}>{p}</p>
            ))}
            <div style={{ marginTop:"24px", paddingTop:"20px", borderTop:"1px solid rgba(201,168,76,0.1)" }}>
              <span className="df" style={{ fontSize:"1.8rem", fontWeight:300, fontStyle:"italic", color:"var(--cream-dim)" }}>~ Amoke</span>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"22px", marginTop:"28px" }}>
              {stats.map(s => (
                <div key={s.l}>
                  <div className="df gold-text" style={{ fontSize:"1.9rem", fontWeight:300 }}>{s.v}</div>
                  <div style={{ color:"rgba(212,196,160,0.48)", fontSize:"10px", letterSpacing:"0.2em", textTransform:"uppercase", marginTop:"3px" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}