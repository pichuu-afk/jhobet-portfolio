import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cinemax — Jhobet Michael Bea",
  description: "A movie discovery platform powered by the TMDB API.",
};

export default function Cinemax() {
  return (
    <main style={{ background: "#050816", color: "#F8FAFC", minHeight: "100vh", fontFamily: "inherit" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 40px", borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
        <Link href="/" style={{ fontSize: 15, fontWeight: 600, color: "#F8FAFC", textDecoration: "none" }}>JMB</Link>
        <Link href="/#projects" style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none" }}>← Back to projects</Link>
      </nav>

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "80px 40px" }}>
        <div style={{ marginBottom: 64 }}>
          <span style={{ fontSize: 11, color: "#94A3B8", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.08)", padding: "3px 10px", borderRadius: 20, marginBottom: 20, display: "inline-block", fontWeight: 500 }}>
            College Project
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 600, letterSpacing: "-2px", lineHeight: 1.1, marginBottom: 20 }}>Cinemax</h1>
          <p style={{ fontSize: 18, color: "#94A3B8", lineHeight: 1.7, marginBottom: 32 }}>
            A movie discovery platform powered by the TMDB API — browse trending films, search by title, and watch official trailers without leaving the page.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["JavaScript", "HTML", "CSS", "TMDB API", "YouTube API"].map((t) => (
              <span key={t} style={{ fontSize: 12, color: "#94A3B8", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.08)", padding: "5px 12px", borderRadius: 6 }}>{t}</span>
            ))}
          </div>
        </div>

        <Divider />

        <Section label="Overview">
          <p>Cinemax is a vanilla JavaScript web application built as a college project. It integrates with The Movie Database (TMDB) API to surface trending movies, popular titles by genre, and individual movie detail pages — all in a responsive, modern UI.</p>
          <p>YouTube trailer integration was added to allow users to watch official trailers directly in a modal, without being redirected away from the app.</p>
        </Section>

        <Divider />

        <Section label="Challenge">
          <p>The main constraint was building a rich, responsive movie app using only vanilla JavaScript — no frameworks. This meant implementing component-like patterns (modal management, dynamic rendering, state) from scratch without React or Vue abstractions.</p>
          <p>API rate limiting and handling asynchronous data for a multi-section layout (trending, categories, search) required careful fetch management to avoid redundant calls and UI flickering.</p>
        </Section>

        <Divider />

        <Section label="Solution">
          <p>I built a lightweight module system using ES6 imports and a simple event-based state model. Each section (trending, categories, search results) renders independently into its own DOM node, allowing partial updates without full page re-renders.</p>
          <p>The trailer modal uses the YouTube IFrame API, initialized lazily on first open to avoid blocking the initial load. Search is debounced to 400ms to reduce unnecessary API calls while the user types.</p>
        </Section>

        <Divider />

        <Section label="Features">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {["Trending movies feed", "Search with debounce", "Category browsing", "Movie detail pages", "Trailer modal (YouTube)", "Responsive layout", "Genre filtering", "Pagination"].map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 14px", background: "#111827", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: 8 }}>
                <span style={{ width: 4, height: 4, background: "#7C3AED", borderRadius: "50%", flexShrink: 0, marginTop: 6 }} />
                <span style={{ fontSize: 13, color: "#94A3B8" }}>{f}</span>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        <Section label="Lessons learned">
          <p>Building without a framework was a valuable exercise — it forced a deeper understanding of the DOM, event delegation, and async patterns that frameworks normally abstract away. The discipline of writing modular vanilla JS made the codebase surprisingly maintainable.</p>
          <p>API design matters a lot for UX. TMDB&apos;s well-structured responses made it easy to build rich features fast — a good reminder that clean external APIs translate directly into faster development cycles.</p>
        </Section>

        <Divider />

        <div style={{ paddingTop: 8 }}>
          <span style={{ fontSize: 13, color: "#64748B", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: "10px 16px", display: "inline-flex", alignItems: "center", gap: 8 }}>
            🔒 Repository is private. Built as a college coursework project.
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
    <section>
      <p style={{ fontSize: 12, fontWeight: 500, color: "#7C3AED", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 20 }}>{label}</p>
      <div style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.85, display: "flex", flexDirection: "column", gap: 16 }}>
        {children}
      </div>
    </section>
  );
}
