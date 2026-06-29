"use client";
import { useEffect, useRef } from "react";

const ROLES = ["Software Engineer", "Flutter Developer", "Automation Engineer"];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const type = () => {
      const current = ROLES[roleIndex.current];
      if (!roleRef.current) return;
      if (!deleting.current) {
        roleRef.current.textContent = current.slice(0, charIndex.current + 1);
        charIndex.current++;
        if (charIndex.current === current.length) { deleting.current = true; timeout = setTimeout(type, 2000); return; }
      } else {
        roleRef.current.textContent = current.slice(0, charIndex.current - 1);
        charIndex.current--;
        if (charIndex.current === 0) { deleting.current = false; roleIndex.current = (roleIndex.current + 1) % ROLES.length; }
      }
      timeout = setTimeout(type, deleting.current ? 40 : 80);
    };
    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="hero-pad" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.4;}}
        @keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}
        @keyframes float{0%,100%{transform:translateX(-50%) translateY(0);}50%{transform:translateX(-50%) translateY(6px);}}
      `}</style>

      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: "rgba(124,58,237,0.12)", border: "0.5px solid rgba(124,58,237,0.3)",
        color: "#a78bfa", fontSize: 12, padding: "5px 14px", borderRadius: 20,
        marginBottom: 32, fontWeight: 500,
      }}>
        <span style={{ width: 6, height: 6, background: "#22c55e", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
        Available for international opportunities
      </div>

      <h1 style={{ fontSize: "clamp(30px, 6vw, 64px)", fontWeight: 600, letterSpacing: "-2px", lineHeight: 1.05, color: "#F8FAFC", marginBottom: 20 }}>
        Jhobet Michael Bea
      </h1>

      <div style={{ fontSize: "clamp(16px, 3vw, 26px)", fontWeight: 500, color: "#7C3AED", marginBottom: 20, height: 36, display: "flex", alignItems: "center", gap: 4 }}>
        <span ref={roleRef} />
        <span style={{ display: "inline-block", width: 2, height: "1em", background: "#7C3AED", animation: "blink 1s step-end infinite", verticalAlign: "middle" }} />
      </div>

      <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#64748B", maxWidth: 480, lineHeight: 1.75, marginBottom: 40, padding: "0 8px" }}>
        Building software that solves real-world problems through mobile applications, web development, and workflow automation.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <a href="#projects" style={{ background: "#7C3AED", color: "#fff", padding: "12px 28px", borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#6D28D9")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#7C3AED")}
        >View projects</a>
        <a href="/JhobetMichaelBea_Resume.pdf" download style={{ background: "transparent", color: "#F8FAFC", padding: "12px 28px", borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: "none", border: "0.5px solid rgba(255,255,255,0.15)" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
        >Download resume</a>
      </div>

      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.4, animation: "float 2s ease-in-out infinite" }}>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, transparent, #94A3B8)" }} />
        <span style={{ fontSize: 11, color: "#94A3B8", letterSpacing: "0.1em" }}>scroll</span>
      </div>
    </section>
  );
}
