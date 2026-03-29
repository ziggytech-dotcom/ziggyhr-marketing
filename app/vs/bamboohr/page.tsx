import Script from "next/script"

const accent = "#8b5cf6"

export const metadata = {
  title: "ZiggyHR vs BambooHR — $79/mo vs $250+/mo. Same Essential HR Features.",
  description:
    "BambooHR starts at $250+/mo. ZiggyHR covers 50 employees at $79/mo. Compare features, pricing, and setup for small business HR software.",
}

export default function VsBambooHR() {
  return (
    <>
      <Script
        id="json-ld-vs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ZiggyHR vs BambooHR",
            "description": "Feature and pricing comparison between ZiggyHR and BambooHR for small business HR software."
          })
        }}
      />

      <style>{`
        @media (max-width: 768px) { .nav-links { display: none !important; } }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f1f1f",
        padding: "0 24px",
      }}>
        <div style={{
          maxWidth: 1120,
          margin: "0 auto",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: "#fff", textDecoration: "none", letterSpacing: "-0.5px" }}>
            Ziggy<span style={{ color: accent }}>HR</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div className="nav-links" style={{ display: "flex", gap: 28 }}>
              {[["Features", "/#features"], ["Compare", "/vs/bamboohr"], ["Pricing", "/#pricing"], ["Blog", "/blog"], ["Sign In", "https://app.ziggyhr.com/login"]].map(([label, href]) => (
                <a key={label} href={href} style={{ color: "#888", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>{label}</a>
              ))}
            </div>
            <a href="https://app.ziggyhr.com/signup" style={{
              background: accent, color: "#fff", textDecoration: "none",
              padding: "9px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600, whiteSpace: "nowrap",
            }}>Start Free Trial</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: "80px 24px 60px", textAlign: "center", maxWidth: 780, margin: "0 auto" }}>
        <div style={{
          display: "inline-block",
          background: "rgba(139,92,246,0.1)",
          border: "1px solid rgba(139,92,246,0.25)",
          borderRadius: 99,
          padding: "6px 16px",
          fontSize: 13,
          color: accent,
          fontWeight: 600,
          marginBottom: 24,
          letterSpacing: "0.02em",
        }}>Detailed Comparison · Updated March 2026</div>

        <h1 style={{
          fontSize: "clamp(36px, 5vw, 58px)",
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: "-1.5px",
          marginBottom: 20,
          color: "#fff",
        }}>
          ZiggyHR vs BambooHR
        </h1>

        <p style={{ fontSize: 18, color: "#888", lineHeight: 1.6, maxWidth: 600, margin: "0 auto 32px" }}>
          BambooHR is enterprise HR for enterprise budgets. $250+/mo for a 20-person team. ZiggyHR covers 50 employees at $79/mo — that&apos;s 68% less for everything a small business actually needs.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://app.ziggyhr.com/signup" style={{
            background: accent, color: "#fff", textDecoration: "none",
            padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600,
          }}>Start Free Trial — No credit card</a>
          <a href="/#pricing" style={{
            background: "transparent", color: "#fff", textDecoration: "none",
            padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600,
            border: "1px solid #333",
          }}>See Pricing</a>
        </div>
      </section>

      {/* ── PRICE CALLOUT ── */}
      <section style={{
        background: "#0f0f0f",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "48px 24px",
      }}>
        <div style={{
          maxWidth: 860,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
          textAlign: "center",
        }}>
          {[
            { label: "ZiggyHR (Growth — 50 employees)", price: "$79/mo", sub: "14-day free trial, no card required", highlight: true },
            { label: "BambooHR (Essentials)", price: "$250+/mo", sub: "Annual contract required", highlight: false },
            { label: "You save", price: "68%", sub: "~$2,000+ per year", highlight: true },
          ].map(({ label, price, sub, highlight }) => (
            <div key={label} style={{
              background: highlight ? "rgba(139,92,246,0.08)" : "#111111",
              border: highlight ? "1px solid rgba(139,92,246,0.3)" : "1px solid #1f1f1f",
              borderRadius: 14,
              padding: "28px 24px",
            }}>
              <p style={{ fontSize: 12, color: "#555", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 10 }}>{label}</p>
              <p style={{ fontSize: 44, fontWeight: 700, color: highlight ? accent : "#555", letterSpacing: "-1.5px", marginBottom: 6 }}>{price}</p>
              <p style={{ fontSize: 13, color: "#555" }}>{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FULL COMPARISON TABLE ── */}
      <section style={{ padding: "80px 24px", maxWidth: 960, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: 40, textAlign: "center", color: "#fff" }}>
          Feature-by-Feature Comparison
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f", minWidth: 200 }}>Feature</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: accent, fontWeight: 700, fontSize: 15, borderBottom: "1px solid #1f1f1f", background: "rgba(139,92,246,0.05)", minWidth: 180 }}>ZiggyHR</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f", minWidth: 180 }}>BambooHR</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Starting price", "$49/mo (15 employees)", "$250+/mo"],
                ["50-employee price", "$79/mo", "$250+/mo minimum"],
                ["150-employee price", "$149/mo", "$400+/mo"],
                ["Annual contract", "❌ No — cancel anytime", "✅ Required"],
                ["Free trial", "✅ 14 days, no credit card", "❌ No free trial"],
                ["Sales call required", "❌ Never", "⚠️ Sometimes"],
                ["Setup time", "Under 20 minutes", "Guided onboarding required"],
                ["Employee profiles & org chart", "✅ All plans", "✅ Yes"],
                ["PTO tracking & approvals", "✅ All plans", "✅ Yes"],
                ["Digital onboarding & e-sign", "✅ All plans", "✅ Yes"],
                ["Performance reviews", "✅ Growth+ ($79/mo)", "✅ Yes"],
                ["I-9 & W-4 collection", "✅ Growth+ ($79/mo)", "✅ Yes"],
                ["Offboarding checklists", "✅ All plans", "✅ Yes"],
                ["HR analytics dashboard", "✅ Scale+ ($149/mo)", "⚠️ Add-on cost"],
                ["Payroll", "🔧 Coming soon", "✅ Via BambooHR Payroll"],
                ["Benefits administration", "🔧 Coming soon", "✅ Via add-on"],
                ["ATS / Applicant tracking", "🔧 Coming soon", "✅ Via Bamboo Hiring"],
              ].map(([feature, ziggy, bamboo], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? "transparent" : "#0d0d0d" }}>
                  <td style={{ padding: "14px 20px", color: "#888", borderBottom: "1px solid #161616" }}>{feature}</td>
                  <td style={{ padding: "14px 20px", color: "#fff", textAlign: "center", borderBottom: "1px solid #161616", background: "rgba(139,92,246,0.03)", fontWeight: 500 }}>{ziggy}</td>
                  <td style={{ padding: "14px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #161616" }}>{bamboo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "#444" }}>
          Pricing data sourced from BambooHR.com · Updated March 2026
        </p>
      </section>

      {/* ── VERDICT ── */}
      <section style={{
        background: "#080808",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "64px 24px",
      }}>
        <div style={{ maxWidth: 740, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, marginBottom: 20, color: "#fff" }}>The verdict</h2>
          <p style={{ fontSize: 17, color: "#888", lineHeight: 1.8 }}>
            If you have a dedicated HR team and 200+ employees, BambooHR is a solid choice. If you&apos;re a small business owner managing HR yourself — or a growing team of 5 to 150 — you&apos;re overpaying. ZiggyHR gives you every feature a small business actually uses, at a price that doesn&apos;t require a board approval.
          </p>
          <div style={{ marginTop: 36 }}>
            <a href="https://app.ziggyhr.com/signup" style={{
              display: "inline-block",
              background: accent,
              color: "#fff",
              textDecoration: "none",
              padding: "16px 36px",
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 700,
            }}>Try ZiggyHR Free for 14 Days →</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050505", borderTop: "1px solid #111", padding: "40px 24px" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 20, textAlign: "center" as const,
        }}>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" as const, justifyContent: "center" }}>
            {[["Home", "/"], ["Features", "/#features"], ["Pricing", "/#pricing"], ["Compare", "/vs/bamboohr"], ["Blog", "/blog"], ["Privacy", "/privacy"], ["Terms", "/terms"], ["Sign In", "https://app.ziggyhr.com/login"]].map(([label, href]) => (
              <a key={label} href={href} style={{ color: "#555", fontSize: 14, textDecoration: "none", fontWeight: 500 }}>{label}</a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#333" }}>
            Part of{" "}
            <a href="https://ziggybusiness.com" style={{ color: "#555", textDecoration: "none" }}>ZiggyTech Business Suite</a>
            {" · "}
            <a href="https://ziggybusiness.com" style={{ color: "#555", textDecoration: "none" }}>ziggybusiness.com</a>
          </p>
          <p style={{ fontSize: 13, color: "#2a2a2a" }}>© 2026 ZiggyHR. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
