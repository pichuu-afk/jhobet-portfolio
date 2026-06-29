import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crilines Academy — Jhobet Michael Bea",
  description: "Modern landing page for a trading education platform.",
};

export default function Crilines() {
  return (
    <main style={{ background: "#050816", color: "#F8FAFC", minHeight: "100vh", fontFamily: "inherit" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 40px", borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
        <Link href="/" style={{ fontSize: 15, fontWeight: 600, color: "#F8FAFC", textDecoration: "none" }}>JMB</Link>
        <Link href="/#projects" style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none" }}>← Back to projects</Link>
      </nav>

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "80px 40px" }}>
        <div style={{ marginBottom: 64 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: "#4ade80", background: "rgba(34,197,94,0.1)", border: "0.5px solid rgba(34,197,94,0.2)", padding: "3px 10px", borderRadius: 20, marginBottom: 20, fontWeight: 500 }}>
            <span style={{ width: 5, height: 5, background: "#22c55e", borderRadius: "50%" }} /> Live
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 600, letterSpacing: "-2px", lineHeight: 1.1, marginBottom: 20 }}>Crilines Academy</h1>
          <p style={{ fontSize: 18, color: "#94A3B8", lineHeight: 1.7, marginBottom: 32 }}>
            A modern landing page for a trading education platform — built to convert visitors into community members with a clean, fast, and credibility-first design.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
            {["HTML", "CSS", "JavaScript", "SEO", "GitHub Pages"].map((t) => (
              <span key={t} style={{ fontSize: 12, color: "#94A3B8", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.08)", padding: "5px 12px", borderRadius: 6 }}>{t}</span>
            ))}
          </div>
          <a
            href="https://crilinesacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 13, color: "#7C3AED", fontWeight: 500, textDecoration: "none" }}
          >
            Visit live site →
          </a>
        </div>

        <Divider />

        <Section label="Overview">
          <p>Crilines Academy is a trading education community focused on Gold (XAU/USD), Silver, Bitcoin, Ethereum, and NAS100, with an active Discord server and structured mentorship content.</p>
          <p>The landing page was built to serve as the primary entry point — communicating the platform&apos;s value clearly, building credibility through social proof, and driving visitors to join the Discord community.</p>
        </Section>

        <Divider />

        <Section label="Challenge">
          <p>Trading education is a crowded, skepticism-heavy niche. The design needed to immediately communicate legitimacy and structure — not hype. The page had to work for two audiences simultaneously: complete beginners curious about trading, and experienced traders evaluating whether the community is worth joining.</p>
          <p>Performance was also a constraint — the target audience is primarily on mobile, so the page needed to load fast and feel smooth on lower-end devices.</p>
        </Section>

        <Divider />

        <Section label="Solution">
          <p>The design prioritizes clarity and credibility over flashiness. A structured hero section leads with the platform&apos;s core promise, followed by a breakdown of what the community includes — mentorship, bot-based alerts, educational content — before any social proof is shown.</p>
          <p>The site was built as a static multi-file project deployed on GitHub Pages. Critical CSS is inlined for fast first paint, images are lazy-loaded, and animations are kept subtle and purposeful so the page doesn&apos;t feel bloated on mobile.</p>
        </Section>

        <Divider />

        <Section label="Features">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {["Particle network background", "Hero text scramble effect", "Auto-scrolling testimonials", "Discord channel switcher", "Scroll reveal animations", "Fully responsive", "SEO optimized", "Fast initial load"].map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 14px", background: "#111827", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: 8 }}>
                <span style={{ width: 4, height: 4, background: "#7C3AED", borderRadius: "50%", flexShrink: 0, marginTop: 6 }} />
                <span style={{ fontSize: 13, color: "#94A3B8" }}>{f}</span>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        <Section label="Lessons learned">
          <p>Landing page design for a trust-dependent product taught me that restraint converts better than spectacle. Every flashy effect I removed from early iterations was replaced with clearer copy or a more direct CTA — and each change improved clarity.</p>
          <p>The terminal/CLI aesthetic of the original design was deliberately iterated away in favor of something more approachable for a non-technical audience, while still keeping a premium, modern feel.</p>
        </Section>
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
