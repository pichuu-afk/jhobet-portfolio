"use client";

const STATS = [
  { num: "4+", label: "Years experience" },
  { num: "10+", label: "Projects shipped" },
  { num: "3", label: "Tech domains" },
  { num: "BS", label: "Information Technology" },
];

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ maxWidth: 1040, margin: "0 auto" }}>
      <style>{`@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.4;}}`}</style>
      <p style={{ fontSize: 12, fontWeight: 500, color: "#7C3AED", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 12 }}>About</p>

      <div className="two-col">
        <div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-1px", color: "#F8FAFC", marginBottom: 24, lineHeight: 1.2 }}>
            A builder who ships<br />real software
          </h2>
          <div style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.85 }}>
            <p style={{ marginBottom: 16 }}>I&apos;m a Software Engineer from the Philippines with hands-on experience in Flutter development, workflow automation, API integrations, and modern web development.</p>
            <p style={{ marginBottom: 16 }}>I enjoy building scalable applications that simplify complex business processes and create intuitive user experiences.</p>
            <p style={{ marginBottom: 24 }}>Holds a BS in Information Technology from Saint Louis University.</p>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(34,197,94,0.1)", border: "0.5px solid rgba(34,197,94,0.25)", color: "#4ade80", fontSize: 12, padding: "5px 14px", borderRadius: 20, fontWeight: 500 }}>
            <span style={{ width: 6, height: 6, background: "#22c55e", borderRadius: "50%", animation: "pulse 2s infinite" }} />
            Open to international opportunities · visa sponsorship welcome
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {STATS.map(({ num, label }) => (
            <div key={label} style={{ background: "#111827", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "24px 20px" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <div style={{ fontSize: 32, fontWeight: 600, color: "#F8FAFC", letterSpacing: "-1px", marginBottom: 6 }}>{num}</div>
              <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
