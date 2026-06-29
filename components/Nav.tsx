"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Experience", "Projects", "Stack", "Contact"];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 40px", height: "60px",
        background: scrolled || menuOpen ? "rgba(5,8,22,0.95)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
        borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.08)" : "0.5px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <Link href="/" style={{ fontSize: 15, fontWeight: 600, color: "#F8FAFC", textDecoration: "none", letterSpacing: "-0.3px" }}>
          JMB
        </Link>

        <div className="nav-links-desktop">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >{item}</a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="/JhobetMichaelBea_Resume.pdf" download
            style={{ fontSize: 13, background: "#7C3AED", color: "#fff", padding: "7px 16px", borderRadius: 8, textDecoration: "none", fontWeight: 500 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#6D28D9")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#7C3AED")}
          >Download CV</a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            <div style={{ width: 20, height: 2, background: "#F8FAFC", marginBottom: 5, transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <div style={{ width: 20, height: 2, background: "#F8FAFC", marginBottom: menuOpen ? 0 : 5, transition: "all 0.2s", opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: 20, height: 2, background: "#F8FAFC", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 60, left: 0, right: 0, zIndex: 99,
          background: "rgba(5,8,22,0.97)", backdropFilter: "blur(16px)",
          borderBottom: "0.5px solid rgba(255,255,255,0.08)",
          padding: "20px", display: "flex", flexDirection: "column", gap: 4,
        }}>
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 16, color: "#94A3B8", textDecoration: "none", padding: "12px 0", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}
            >{item}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .hamburger { display: block !important; } }
      `}</style>
    </>
  );
}
