"use client";

const LINKS = [
  {
    label: "Email",
    sub: "jhobet0227@gmail.com",
    href: "mailto:jhobet0227@gmail.com",
    icon: "@",
  },
  {
    label: "LinkedIn",
    sub: "linkedin.com/in/jhobetmichaelbea",
    href: "https://www.linkedin.com/in/jhobetmichaelbea/",
    icon: "in",
  },
  {
    label: "GitHub",
    sub: "github.com/pichuu-afk",
    href: "https://github.com/pichuu-afk",
    icon: "</>",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 40px", maxWidth: 1040, margin: "0 auto" }}>
      <p style={{ fontSize: 12, fontWeight: 500, color: "#7C3AED", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 12 }}>
        Contact
      </p>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-1px", color: "#F8FAFC", marginBottom: 8, lineHeight: 1.2 }}>
        Let&apos;s work together
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start", marginTop: 48 }}>
        <div>
          <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.85, marginBottom: 32 }}>
            Currently open to international opportunities in software engineering,
            mobile development, and automation. Open to employer-sponsored work visas.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {LINKS.map(({ label, sub, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 18px",
                  background: "#111827",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(124,58,237,0.15)",
                    borderRadius: 9,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#a78bfa",
                    flexShrink: 0,
                    fontFamily: "monospace",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: 13, color: "#F8FAFC", fontWeight: 500, marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 12, color: "#64748B" }}>{sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "rgba(124,58,237,0.07)",
            border: "0.5px solid rgba(124,58,237,0.2)",
            borderRadius: 16,
            padding: 32,
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 600, color: "#F8FAFC", marginBottom: 12, letterSpacing: "-0.5px" }}>
            Looking for a software engineer?
          </h3>
          <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.8, marginBottom: 28 }}>
            Whether you need a mobile app built from scratch, automation workflows set up,
            or a web presence that converts — I&apos;m available to discuss your project.
          </p>
          <a
            href="mailto:jhobet0227@gmail.com"
            style={{
              display: "inline-block",
              background: "#7C3AED",
              color: "#fff",
              padding: "11px 24px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#6D28D9")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#7C3AED")}
          >
            Send a message
          </a>
        </div>
      </div>
    </section>
  );
}
