import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fixora — Jhobet Michael Bea",
  description: "A service booking platform built with Flutter and Firebase.",
};

export default function Fixora() {
  return (
    <main style={{ background: "#050816", color: "#F8FAFC", minHeight: "100vh", fontFamily: "inherit" }}>
      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 40px", borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
        <Link href="/" style={{ fontSize: 15, fontWeight: 600, color: "#F8FAFC", textDecoration: "none" }}>JMB</Link>
        <Link href="/#projects" style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none" }}>← Back to projects</Link>
      </nav>

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "80px 40px" }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: "#fbbf24", background: "rgba(251,191,36,0.1)", border: "0.5px solid rgba(251,191,36,0.2)", padding: "3px 10px", borderRadius: 20, marginBottom: 20, fontWeight: 500 }}>
            <span style={{ width: 5, height: 5, background: "#fbbf24", borderRadius: "50%" }} /> Prototype
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 600, letterSpacing: "-2px", lineHeight: 1.1, marginBottom: 20 }}>Fixora</h1>
          <p style={{ fontSize: 18, color: "#94A3B8", lineHeight: 1.7, marginBottom: 32 }}>
            A service booking platform connecting customers with trusted professionals through a modern mobile experience.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Flutter", "Dart", "Firebase", "REST API", "Figma"].map((t) => (
              <span key={t} style={{ fontSize: 12, color: "#94A3B8", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.08)", padding: "5px 12px", borderRadius: 6 }}>{t}</span>
            ))}
          </div>
        </div>

        <Divider />

        {/* Overview */}
        <Section label="Overview">
          <p>Fixora is a mobile-first service booking application built with Flutter. The concept addresses the challenge of connecting customers who need professional home services — cleaning, plumbing, electrical work — with verified service providers in a seamless, trust-first experience.</p>
          <p>The app was designed and developed end-to-end: from Figma wireframes through Flutter implementation, Firebase backend integration, and a fully functional admin management panel.</p>
        </Section>

        <Divider />

        {/* Challenge */}
        <Section label="Challenge">
          <p>The core challenge was building a platform that served three distinct user types simultaneously — customers booking services, providers managing their schedules and incoming jobs, and administrators overseeing the entire ecosystem.</p>
          <p>Each user type needed a tailored experience with different permissions, dashboards, and workflows — all within a single Flutter codebase.</p>
        </Section>

        <Divider />

        {/* Solution */}
        <Section label="Solution">
          <p>I structured the app around a role-based authentication system using Firebase Auth, where the user&apos;s role (customer, provider, admin) is stored in Firestore and determines which dashboard and navigation flows they see on login.</p>
          <p>The booking engine uses Firestore real-time listeners so customers and providers see status updates without polling. The admin panel was built as a separate section accessible only to users with the admin role flag, giving full visibility into platform activity.</p>
        </Section>

        <Divider />

        {/* Features */}
        <Section label="Features">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              "Authentication flow (email + social)",
              "Service booking system",
              "Provider dashboard",
              "Customer dashboard",
              "Admin management panel",
              "Real-time status updates",
              "Role-based access control",
              "Figma → Flutter implementation",
            ].map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 14px", background: "#111827", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: 8 }}>
                <span style={{ width: 4, height: 4, background: "#7C3AED", borderRadius: "50%", flexShrink: 0, marginTop: 6 }} />
                <span style={{ fontSize: 13, color: "#94A3B8" }}>{f}</span>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Lessons */}
        <Section label="Lessons learned">
          <p>Building for multiple user roles in a single app taught me the importance of a clean state management architecture early. Using Flutter&apos;s Provider pattern with role-aware routing kept the codebase maintainable as complexity grew.</p>
          <p>Figma-to-Flutter parity is achievable with discipline — establishing a design token system in Figma that maps directly to Flutter theme constants made the handoff seamless and kept the UI consistent across all three dashboards.</p>
        </Section>

        <Divider />

        <div style={{ paddingTop: 8 }}>
          <span style={{ fontSize: 13, color: "#64748B", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: "10px 16px", display: "inline-flex", alignItems: "center", gap: 8 }}>
            🔒 Repository is private. Source code available upon request.
          </span>
        </div>
      </article>
    </main>
  );
}

function Divider() {
  return <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", margin: "48px 0" }} />;
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 0 }}>
      <p style={{ fontSize: 12, fontWeight: 500, color: "#7C3AED", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 20 }}>{label}</p>
      <div style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.85, display: "flex", flexDirection: "column", gap: 16 }}>
        {children}
      </div>
    </section>
  );
}
