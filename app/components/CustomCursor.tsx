"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const posRef    = useRef({ x: -100, y: -100 });
  const ringPos   = useRef({ x: -100, y: -100 });
  const rafRef    = useRef<number>(0);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) return;
    document.documentElement.style.cursor = "none";

    const move  = (e: MouseEvent) => { posRef.current = { x: e.clientX, y: e.clientY }; };
    const down  = () => setClicking(true);
    const up    = () => setClicking(false);
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup",   up);

    document.querySelectorAll("a,button,input,select,textarea,[role='button']").forEach(el => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    const tick = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }
      if (ringRef.current) {
        ringPos.current = {
          x: ringPos.current.x + (posRef.current.x - ringPos.current.x) * 0.11,
          y: ringPos.current.y + (posRef.current.y - ringPos.current.y) * 0.11,
        };
        ringRef.current.style.transform = `translate(${ringPos.current.x - 22}px, ${ringPos.current.y - 22}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup",   up);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const size      = clicking ? 26 : hovering ? 42 : 34;
  const ringSize  = hovering ? 52 : clicking ? 28 : 44;
  const ringAlpha = hovering ? "0.8" : "0.32";
  const glow      = hovering
    ? "drop-shadow(0 0 7px rgba(201,168,76,1)) drop-shadow(0 0 14px rgba(201,168,76,0.5))"
    : "drop-shadow(0 0 3px rgba(201,168,76,0.6))";

  // Tilted ~40° — like a stylist holding it naturally
  // Click = slight extra tilt as if pressing down
  const angle = clicking ? 50 : hovering ? 36 : 40;

  return (
    <>
      {/* ── Afro Pick — tilted at natural angle ── */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 0, height: 0,
          zIndex: 99999,
          pointerEvents: "none",
          willChange: "transform",
        }}
      >
        <div style={{
          position: "absolute",
          top:  `-${size * 0.6}px`,
          left: `-${size * 0.4}px`,
          filter: glow,
          transform: `rotate(${angle}deg)`,
          transition: "filter 0.2s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
          transformOrigin: "bottom center",
        }}>
          <svg
            width={size}
            height={size * 1.9}
            viewBox="0 0 44 84"
            fill="none"
            style={{ display: "block", transition: "width 0.15s ease, height 0.15s ease" }}
          >
            {/* ── TINES (5 long teeth, arced slightly — center tallest) ── */}
            {/* Tine 1 — far left */}
            <rect x="4"  y="8"  width="4.5" height="38" rx="2.2" fill="#C9A84C"/>
            {/* Tine 2 */}
            <rect x="12" y="4"  width="4.5" height="42" rx="2.2" fill="#E8C97A"/>
            {/* Tine 3 — centre, tallest */}
            <rect x="20" y="1"  width="4.5" height="45" rx="2.2" fill="#C9A84C"/>
            {/* Tine 4 */}
            <rect x="28" y="4"  width="4.5" height="42" rx="2.2" fill="#E8C97A"/>
            {/* Tine 5 — far right */}
            <rect x="36" y="8"  width="4.5" height="38" rx="2.2" fill="#C9A84C"/>

            {/* Bright rounded tips */}
            <ellipse cx="6.2"  cy="8"  rx="2.5" ry="3.2" fill="#FFE08A"/>
            <ellipse cx="14.2" cy="4"  rx="2.5" ry="3.2" fill="#FFE08A"/>
            <ellipse cx="22.2" cy="1"  rx="2.5" ry="3.5" fill="#FFE08A"/>
            <ellipse cx="30.2" cy="4"  rx="2.5" ry="3.2" fill="#FFE08A"/>
            <ellipse cx="38.2" cy="8"  rx="2.5" ry="3.2" fill="#FFE08A"/>

            {/* ── NECK ── */}
            <rect x="14" y="46" width="16" height="9" rx="2.5" fill="#B8932A"/>
            <rect x="14" y="46" width="16" height="3.5" rx="2" fill="rgba(255,255,255,0.14)"/>

            {/* ── HANDLE (fist grip) ── */}
            <rect x="10" y="54" width="24" height="28" rx="6" fill="#C9A84C"/>
            {/* Grip lines */}
            <rect x="14" y="59" width="16" height="2" rx="1" fill="rgba(0,0,0,0.18)"/>
            <rect x="14" y="64" width="16" height="2" rx="1" fill="rgba(0,0,0,0.18)"/>
            <rect x="14" y="69" width="16" height="2" rx="1" fill="rgba(0,0,0,0.18)"/>
            <rect x="14" y="74" width="16" height="2" rx="1" fill="rgba(0,0,0,0.18)"/>
            {/* Handle top highlight */}
            <rect x="10" y="54" width="24" height="6" rx="5" fill="rgba(255,255,255,0.18)"/>
            {/* Side shine */}
            <rect x="11" y="57" width="5" height="20" rx="2.5" fill="rgba(255,255,255,0.1)"/>
            {/* Bottom rounded cap */}
            <rect x="10" y="76" width="24" height="6" rx="5" fill="#9A7A2E"/>
          </svg>
        </div>
      </div>

      {/* ── Lagging gold ring ── */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width:   `${ringSize}px`,
          height:  `${ringSize}px`,
          borderRadius: "50%",
          border:  `1.5px solid rgba(201,168,76,${ringAlpha})`,
          background: hovering ? "rgba(201,168,76,0.05)" : "transparent",
          zIndex: 99998,
          pointerEvents: "none",
          willChange: "transform",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.3s, background 0.3s",
        }}
      />

      <style>{`*, *::before, *::after { cursor: none !important; }`}</style>
    </>
  );
}