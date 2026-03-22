"use client";

const services = [
  {
    n:"01", name:"Knotless Braids",
    desc:"Flawless, tension-free braids crafted for comfort and lasting beauty. Each section individually placed for a natural, seamless finish.",
    img:"/images/service-knotless.jpg",
  },
  {
    n:"02", name:"Cornrows",
    desc:"Sleek, precision-laid cornrows that lie flat and last long. Bold and geometric or soft and flowing — every row crafted with expert care.",
    img:"/images/cornrows.jpg",
  },
  {
    n:"03", name:"Ghana Weaving",
    desc:"A timeless protective style rooted in West African tradition. Feed-in technique ensures a smooth, natural look from root to tip.",
    img:"/images/ghana_weaving.jpg",
  },
  {
    n:"04", name:"Locs & Twist",
    desc:"From starter locs to goddess locs, two-strand twists to retwists — sculpted with patience and intentionality for stunning results.",
    img:"/images/locs_twist.jpg",
  },
  {
    n:"05", name:"Nails",
    desc:"Impeccably finished nails to complement your look. From clean neutrals to intricate nail art — handled with the same luxury care.",
    img:"/images/nails.jpg",
  },
  {
    n:"06", name:"Wig Installation",
    desc:"Flawless, undetectable installs tailored to your face. Frontal, closure, or full lace — laid flat, natural, and secure.",
    img:"/images/wig_installation.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background:"var(--dark)", position:"relative", overflow:"hidden" }}>
      {/* Top glow */}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 40% at 50% 0%, rgba(201,168,76,0.06), transparent 65%)", pointerEvents:"none" }} />

      <div className="container" style={{ position:"relative", zIndex:1 }}>

        {/* Header */}
        <div className="sec-head">
          <span className="section-label" style={{ marginBottom:"16px" }}>What I Offer</span>
          <div className="gold-divider" style={{ margin:"16px auto" }} />
          <h2 className="sec-title">Signature <em className="gold-text" style={{ fontStyle:"normal" }}>Services</em></h2>
          <p style={{ color:"var(--cream-dim)", fontSize:"13px", maxWidth:"440px", margin:"14px auto 0", lineHeight:1.85, fontWeight:300 }}>
            Each appointment is a private, unhurried experience — because exceptional hair requires time, care, and artistry.
          </p>
        </div>

        {/* Grid */}
        <div className="svc-grid">
          {services.map(s => (
            <div key={s.n} className="svc-card">

              {/* Full image — takes most of the card */}
              <div className="svc-img-wrap">
                <div className="svc-thumb" style={{ backgroundImage:`url('${s.img}')` }} />

                {/* Gradient: transparent top → solid bottom */}
                <div className="svc-grad" />

                {/* Gold shimmer sweep */}
                <div className="svc-shine" />

                {/* Number top-right */}
                <div className="svc-num-wrap">
                  <span className="svc-num df">{s.n}</span>
                </div>

                {/* Text overlaid on image bottom */}
                <div className="svc-text-over">
                  <h3 className="svc-name-over df">{s.name}</h3>
                  <div className="svc-rule" />
                  <p className="svc-desc-over">{s.desc}</p>
                  <a href="#contact" className="svc-book-btn">Book this style →</a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── GRID: 2-col mobile, 3-col desktop ── */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 900px) {
          .svc-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; }
        }

        /* ── CARD ── */
        .svc-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(201,168,76,0.15);
          transition: border-color 0.4s ease, transform 0.4s ease;
          border-radius: 2px;
        }
        .svc-card:hover {
          border-color: rgba(201,168,76,0.5);
          transform: translateY(-4px);
        }

        /* ── IMAGE WRAPPER — full card height ── */
        .svc-img-wrap {
          position: relative;
          width: 100%;
          /* Tall on mobile so image really shows */
          height: 320px;
          overflow: hidden;
        }
        @media (min-width: 640px)  { .svc-img-wrap { height: 360px; } }
        @media (min-width: 900px)  { .svc-img-wrap { height: 420px; } }
        @media (min-width: 1200px) { .svc-img-wrap { height: 480px; } }

        /* ── ACTUAL IMAGE ── */
        .svc-thumb {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center top;
          background-color: var(--dark-3);
          transition: transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }
        .svc-card:hover .svc-thumb {
          transform: scale(1.1);
        }

        /* ── GRADIENT: transparent top, dense bottom ── */
        .svc-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(8,8,8,0.0)  0%,
            rgba(8,8,8,0.1)  35%,
            rgba(8,8,8,0.72) 65%,
            rgba(8,8,8,0.95) 100%
          );
          transition: opacity 0.4s ease;
          z-index: 1;
        }
        .svc-card:hover .svc-grad {
          background: linear-gradient(
            to bottom,
            rgba(8,8,8,0.0)  0%,
            rgba(8,8,8,0.05) 30%,
            rgba(8,8,8,0.65) 62%,
            rgba(8,8,8,0.92) 100%
          );
        }

        /* ── SHIMMER SWEEP ── */
        .svc-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 25%, rgba(201,168,76,0.1) 50%, transparent 75%);
          background-size: 200% 100%;
          background-position: -100% 0;
          transition: background-position 0.7s ease;
          z-index: 2;
          pointer-events: none;
        }
        .svc-card:hover .svc-shine { background-position: 110% 0; }

        /* ── NUMBER top-right ── */
        .svc-num-wrap {
          position: absolute;
          top: 14px;
          right: 16px;
          z-index: 3;
        }
        .svc-num {
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 300;
          color: rgba(201,168,76,0.3);
          line-height: 1;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
          transition: color 0.4s;
        }
        .svc-card:hover .svc-num { color: rgba(201,168,76,0.7); }

        /* ── TEXT overlaid at bottom ── */
        .svc-text-over {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 18px 18px 20px;
          z-index: 4;
        }
        @media (min-width: 900px) {
          .svc-text-over { padding: 22px 24px 26px; }
        }

        .svc-name-over {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          font-weight: 400;
          color: var(--cream);
          margin-bottom: 8px;
          line-height: 1.15;
          transition: color 0.3s;
        }
        .svc-card:hover .svc-name-over { color: var(--gold-light); }

        .svc-rule {
          width: 24px; height: 1px;
          background: rgba(201,168,76,0.5);
          margin-bottom: 10px;
          transition: width 0.5s ease;
        }
        .svc-card:hover .svc-rule { width: 44px; }

        /* Description hidden on mobile (too tight), shown on desktop */
        .svc-desc-over {
          font-size: 11px;
          color: rgba(212,196,160,0.75);
          line-height: 1.7;
          font-weight: 300;
          font-family: 'Jost', sans-serif;
          display: none;
          margin-bottom: 12px;
        }
        @media (min-width: 900px) {
          .svc-desc-over { display: block; }
        }

        /* ── BOOK BUTTON ── */
        .svc-book-btn {
          display: inline-block;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid rgba(201,168,76,0.35);
          padding-bottom: 2px;
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          transition: color 0.3s, border-color 0.3s;
          margin-top: 4px;
        }
        @media (min-width: 900px) {
          .svc-book-btn { font-size: 10px; }
        }
        .svc-book-btn:hover {
          color: var(--gold-light);
          border-color: rgba(201,168,76,0.75);
        }
      `}</style>
    </section>
  );
}
