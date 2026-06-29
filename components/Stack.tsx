"use client";

const STACK = [
  {
    group: "Languages",
    items: ["Flutter / Dart", "JavaScript", "Python", "HTML / CSS"],
  },
  {
    group: "Automation",
    items: ["n8n", "Google Apps Script", "Airtable", "REST APIs"],
  },
  {
    group: "Web",
    items: ["WordPress", "GitHub Pages", "Responsive Design", "SEO"],
  },
  {
    group: "Tools",
    items: ["Git / GitHub", "Figma", "VS Code", "Firebase"],
  },
];

export default function Stack() {
  return (
    <section id="stack" style={{ padding: "100px 40px", maxWidth: 1040, margin: "0 auto" }}>
      <p style={{ fontSize: 12, fontWeight: 500, color: "#7C3AED", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 12 }}>
        Tech Stack
      </p>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-1px", color: "#F8FAFC", marginBottom: 48, lineHeight: 1.2 }}>
        Tools I work with
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {STACK.map(({ group, items }) => (
          <div
            key={group}
            style={{
              background: "#111827",
              border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: 20,
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#7C3AED",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                marginBottom: 16,
              }}
            >
              {group}
            </div>
            {items.map((item, i) => (
              <div
                key={item}
                style={{
                  fontSize: 13,
                  color: "#94A3B8",
                  padding: "7px 0",
                  borderBottom: i < items.length - 1 ? "0.5px solid rgba(255,255,255,0.05)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#7C3AED",
                    flexShrink: 0,
                    opacity: 0.7,
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
