"use client";
import { useState, useEffect } from "react";

const links = ["Services", "Gallery", "About", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: "none", lineHeight: 1.1 }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "11px", letterSpacing: "0.28em", background: "linear-gradient(135deg,#9A7A2E,#E8C97A,#C9A84C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Hair by</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "20px", letterSpacing: "0.24em", color: "#F5EDD6" }}>AMOKE</div>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(l => (
            <li key={l} style={{ listStyle: "none" }}>
              <a href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="btn-gold nav-book-desktop" style={{ fontSize: "0.65rem", padding: "11px 24px" }}>Book Now</a>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="ham-bar" style={{ transform: open ? "rotate(45deg) translate(4px,4px)" : "none" }} />
          <span className="ham-bar" style={{ opacity: open ? 0 : 1 }} />
          <span className="ham-bar" style={{ transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? "open" : "closed"}`}>
        <ul>
          {links.map(l => (
            <li key={l} style={{ listStyle: "none" }}>
              <a href={`#${l.toLowerCase()}`} className="nav-link" onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-gold" style={{ width: "100%", marginTop: "6px" }} onClick={() => setOpen(false)}>Book Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
