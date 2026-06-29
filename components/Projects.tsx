"use client";
import Link from "next/link";

const PROJECTS = [
  {
    slug: "fixora",
    title: "Fixora",
    status: { label: "Prototype", color: "#fbbf24", bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.2)" },
    description:
      "A service booking platform connecting customers with trusted professionals through a modern mobile experience. Built end-to-end from Figma to Flutter.",
    tags: ["Flutter", "Firebase", "REST API", "Figma", "Dart"],
    features: ["Authentication flow", "Booking system", "Provider dashboard", "Customer dashboard", "Admin panel"],
    featured: true,
  },
  {
    slug: "cinemax",
    title: "Cinemax",
    status: null,
    description:
      "Movie discovery platform powered by the TMDB API with YouTube trailer integration, search, trending titles, and category browsing.",
    tags: ["JavaScript", "TMDB API", "HTML/CSS"],
    features: [],
    featured: false,
  },
  {
    slug: "crilines",
    title: "Crilines Academy",
    status: { label: "Live", color: "#4ade80", bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.2)" },
    description:
      "Modern landing page for a trading education platform. Responsive, fast-loading, and built for conversion.",
    tags: ["HTML/CSS", "JavaScript", "SEO"],
    features: [],
    featured: false,
    href: "https://crilinesacademy.com",
  },
];

const AUTOMATION = {
  title: "Enterprise Workflow Automation",
  description:
    "Built automation systems for internal business operations — reducing manual workloads through integrated pipelines across multiple platforms.",
  tags: ["n8n", "REST API", "Airtable", "Google Apps Script"],
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 40px", maxWidth: 1040, margin: "0 auto" }}>
      <p style={{ fontSize: 12, fontWeight: 500, color: "#7C3AED", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 12 }}>
        Projects
      </p>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-1px", color: "#F8FAFC", marginBottom: 8, lineHeight: 1.2 }}>
        Things I&apos;ve built
      </h2>
      <p style={{ fontSize: 15, color: "#64748B", maxWidth: 480, lineHeight: 1.6, marginBottom: 48 }}>
        A selection of projects across mobile, web, and automation engineering.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Featured: Fixora */}
        <ProjectCard project={PROJECTS[0]} style={{ gridColumn: "span 2" }} featured />

        {/* Cinemax */}
        <ProjectCard project={PROJECTS[1]} />

        {/* Crilines */}
        <ProjectCard project={PROJECTS[2]} />

        {/* Automation — full width */}
        <div
          style={{
            gridColumn: "span 2",
            background: "#111827",
            border: "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: 28,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "#F8FAFC", marginBottom: 10, letterSpacing: "-0.5px" }}>
                {AUTOMATION.title}
              </div>
              <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.75, marginBottom: 20 }}>
                {AUTOMATION.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {AUTOMATION.tags.map((t) => (
                  <span key={t} style={{ fontSize: 11, color: "#94A3B8", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: 6 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "rgba(255,255,255,0.02)",
                border: "0.5px solid rgba(255,255,255,0.06)",
                borderRadius: 10,
                padding: "16px 20px",
                alignSelf: "center",
              }}
            >
              <span style={{ fontSize: 20 }}>🔒</span>
              <span style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
                Screenshots and source code cannot be publicly shared due to confidentiality agreements.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  style,
  featured,
}: {
  project: (typeof PROJECTS)[number];
  style?: React.CSSProperties;
  featured?: boolean;
}) {
  const inner = (
    <div
      style={{
        background: "#111827",
        border: "0.5px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 28,
        transition: "border-color 0.2s, transform 0.2s",
        cursor: "pointer",
        display: featured ? "grid" : "block",
        gridTemplateColumns: featured ? "1fr 1fr" : undefined,
        gap: featured ? 32 : undefined,
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div>
        {project.status && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontSize: 11,
              color: project.status.color,
              background: project.status.bg,
              border: `0.5px solid ${project.status.border}`,
              padding: "3px 10px",
              borderRadius: 20,
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            <span style={{ width: 5, height: 5, background: project.status.color, borderRadius: "50%" }} />
            {project.status.label}
          </span>
        )}
        <div style={{ fontSize: 18, fontWeight: 600, color: "#F8FAFC", marginBottom: 10, letterSpacing: "-0.5px" }}>
          {project.title}
        </div>
        <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.75, marginBottom: 20 }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {project.tags.map((t) => (
            <span key={t} style={{ fontSize: 11, color: "#94A3B8", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: 6 }}>
              {t}
            </span>
          ))}
        </div>
        <span
          style={{
            fontSize: 13,
            color: "#7C3AED",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          View case study →
        </span>
      </div>

      {featured && project.features.length > 0 && (
        <div style={{ paddingTop: 4 }}>
          <div style={{ fontSize: 11, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 16 }}>
            Features
          </div>
          {project.features.map((f) => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ width: 4, height: 4, background: "#7C3AED", borderRadius: "50%", flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: "#94A3B8" }}>{f}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none", ...style }}>
      {inner}
    </Link>
  );
}
