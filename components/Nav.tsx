"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "60px",
        background: scrolled ? "rgba(5,8,22,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.08)" : "0.5px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <Link href="/" style={{ fontSize: 15, fontWeight: 600, color: "#F8FAFC", textDecoration: "none", letterSpacing: "-0.3px" }}>
        JMB
      </Link>

      <div style={{ display: "flex", gap: 28 }}>
        {["About", "Experience", "Projects", "Stack", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="/JhobetMichaelBea_Resume.pdf"
        download
        style={{
          fontSize: 13,
          background: "#7C3AED",
          color: "#fff",
          padding: "7px 16px",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 500,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#6D28D9")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#7C3AED")}
      >
        Download CV
      </a>
    </nav>
  );
}
