"use client";

/*
  ── GALLERY IMAGE GUIDE ────────────────────────────────────
  Place your images in: public/images/
  Name them exactly as listed below.

  Col 1:  gallery-1.jpg  (tall)    gallery-2.jpg  (short)
  Col 2:  gallery-3.jpg  (short)   gallery-4.jpg  (tall)
  Col 3:  gallery-5.jpg  (tall)    gallery-6.jpg  (short)
  Col 4:  gallery-7.jpg  (short)   gallery-8.jpg  (tall)
  ───────────────────────────────────────────────────────── */

const cols = [
  [
    { img:"/images/gallery-1.jpg", label:"Knotless Braids",    tall:true  },
    { img:"/images/gallery-2.jpg", label:"Goddess Locs",       tall:false },
  ],
  [
    { img:"/images/gallery-3.jpg", label:"Fulani Braids",      tall:false },
    { img:"/images/gallery-4.jpg", label:"Box Braids",         tall:true  },
  ],
  [
    { img:"/images/gallery-5.jpg", label:"Feed-in Cornrows",   tall:true  },
    { img:"/images/gallery-6.jpg", label:"Senegalese Twists",  tall:false },
  ],
  [
    { img:"/images/gallery-7.jpg", label:"Frontal Wig",        tall:false },
    { img:"/images/gallery-8.jpg", label:"Passion Twists",     tall:true  },
  ],
];

function GalItem({ img, label, tall }: { img:string; label:string; tall:boolean }) {
  return (
    <div className={`gal-item ${tall ? "gal-tall" : "gal-short"}`}>
      {/* Image fills the slot; dark-3 shows as placeholder until image loads */}
      <div
        className="gal-inner"
        style={{
          width:"100%", height:"100%",
          backgroundImage:`url('${img}')`,
          backgroundSize:"cover",
          backgroundPosition:"center top",
          backgroundColor:"var(--dark-3)",
        }}
      />
      {/* Permanent bottom gradient */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"55%", background:"linear-gradient(to top,rgba(8,8,8,0.6),transparent)", pointerEvents:"none", zIndex:1 }} />
      {/* Label on hover */}
      <div className="gal-overlay" style={{ zIndex:2 }}>
        <p style={{ fontFamily:"'Jost',sans-serif", fontSize:"10px", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--cream)", fontWeight:300 }}>{label}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="section" style={{ background:"var(--black)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 40% at 50% 80%,rgba(201,168,76,0.04),transparent 70%)", pointerEvents:"none" }} />

      <div className="container" style={{ position:"relative", zIndex:1 }}>
        {/* Header */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"36px", flexWrap:"wrap", gap:"20px" }}>
          <div>
            <span className="section-label" style={{ marginBottom:"14px" }}>Portfolio</span>
            <div style={{ width:"36px", height:"1px", background:"rgba(201,168,76,0.4)", marginBottom:"14px", marginTop:"14px" }} />
            <h2 className="sec-title" style={{ textAlign:"left" }}>
              The <em className="gold-text" style={{ fontStyle:"normal" }}>Gallery</em>
            </h2>
          </div>
          <p style={{ color:"var(--cream-dim)", fontSize:"12px", maxWidth:"260px", lineHeight:1.85, fontWeight:300 }}>
            A curated selection of my most beloved creations. Each style tells a story — yours is next.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid-4">
          {cols.map((col, ci) => (
            <div key={ci} className="gal-col">
              {col.map((item, ii) => <GalItem key={ii} {...item} />)}
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div style={{ textAlign:"center", marginTop:"44px" }}>
          <p style={{ fontFamily:"'Jost',sans-serif", fontSize:"10px", letterSpacing:"0.28em", textTransform:"uppercase", color:"rgba(212,196,160,0.36)", marginBottom:"16px" }}>
            See more on Instagram
          </p>
          <a href="https://instagram.com/hairbyamoke" target="_blank" rel="noopener noreferrer" className="btn-outline">
            @hairbyamoke
          </a>
        </div>
      </div>
    </section>
  );
}
