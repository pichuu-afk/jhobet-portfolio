"use client";
export default function Footer() {
  return (
    <footer
      style={{
        padding: "32px 40px",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <span style={{ fontSize: 12, color: "#64748B" }}>
        © 2025 Jhobet Michael Bea · Built with intent
      </span>
      <div style={{ display: "flex", gap: 24 }}>
        {[
          { label: "GitHub", href: "https://github.com/pichuu-afk" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/jhobetmichaelbea/" },
          { label: "Resume", href: "/JhobetMichaelBea_Resume.pdf" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            download={label === "Resume" ? true : undefined}
            style={{ fontSize: 12, color: "#64748B", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#94A3B8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
