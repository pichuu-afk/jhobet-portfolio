"use client";

const EXPERIENCE = [
  {
    role: "Technical Manager · Operations Manager",
    company: "CAL Agency",
    date: "June 2024 – April 2026",
    description: "Architected and maintained n8n automation workflows and Airtable systems that reduced manual processing time across agency operations. Led technical project delivery for multiple digital teams, developed internal web tools and automation dashboards, managed API integrations and Google Apps Script solutions for cross-platform data syncing, and provided technical leadership by mentoring team members and setting engineering best practices.",
  },
  {
    role: "Content Development & Web Operations Lead",
    company: "Knowles Training Institute · Internship",
    date: "Jan 2024 – May 2024",
    description: "Managed and optimized web operations, improving site performance and content delivery workflows. Built and enhanced content structures that boosted user engagement across the platform. Collaborated with designers, writers, and developers for seamless platform integration.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ maxWidth: 1040, margin: "0 auto" }}>
      <p style={{ fontSize: 12, fontWeight: 500, color: "#7C3AED", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 12 }}>Experience</p>
      <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-1px", color: "#F8FAFC", marginBottom: 48, lineHeight: 1.2 }}>Where I&apos;ve worked</h2>

      {EXPERIENCE.map((exp, i) => (
        <div key={i} style={{ padding: "36px 0", borderTop: "0.5px solid rgba(255,255,255,0.07)", borderBottom: i === EXPERIENCE.length - 1 ? "0.5px solid rgba(255,255,255,0.07)" : "none" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, gap: 12, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "clamp(14px, 2vw, 17px)", fontWeight: 500, color: "#F8FAFC", marginBottom: 4 }}>{exp.role}</div>
              <div style={{ fontSize: 13, color: "#7C3AED", fontWeight: 500 }}>{exp.company}</div>
            </div>
            <span style={{ fontSize: 12, color: "#64748B", background: "rgba(255,255,255,0.05)", padding: "4px 12px", borderRadius: 6, whiteSpace: "nowrap", border: "0.5px solid rgba(255,255,255,0.07)" }}>{exp.date}</span>
          </div>
          <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85, maxWidth: 680 }}>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}
