import Script from "next/script"

const accent = "#8b5cf6"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "ZiggyHR",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://ziggyhr.com",
      "description": "HR software for small and medium businesses. Employee profiles, PTO tracking, digital onboarding, performance reviews, and compliance — without the enterprise price tag.",
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter",
          "price": "49.00",
          "priceCurrency": "USD",
          "description": "Up to 15 employees — Profiles, PTO tracking, onboarding docs, e-sign"
        },
        {
          "@type": "Offer",
          "name": "Growth",
          "price": "79.00",
          "priceCurrency": "USD",
          "description": "Up to 50 employees — Performance reviews, offer letters, I-9 verification, workflows"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does ZiggyHR cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ZiggyHR starts at $49/mo for up to 15 employees. The Growth plan is $79/mo for up to 50 employees, and Scale is $149/mo for up to 150. No annual contracts required."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an HR department to use ZiggyHR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No — that's the whole point. ZiggyHR is built for business owners and office managers who handle HR alongside everything else. You can be up and running in under 20 minutes."
          }
        }
      ]
    }
  ]
}

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              {[["Features", "#features"], ["Compare", "/vs/bamboohr"], ["Pricing", "#pricing"], ["Blog", "/blog"], ["Sign In", "https://app.ziggyhr.com/login"]].map(([label, href]) => (
                <a key={label} href={href} style={{ color: "#888", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>
                  {label}
                </a>
              ))}
            </div>
            <a href="https://app.ziggyhr.com/signup" style={{
              background: accent,
              color: "#fff",
              textDecoration: "none",
              padding: "9px 20px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}>
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        padding: "100px 24px 80px",
        textAlign: "center",
        maxWidth: 820,
        margin: "0 auto",
      }}>
        <div style={{
          display: "inline-block",
          background: `rgba(139,92,246,0.1)`,
          border: `1px solid rgba(139,92,246,0.25)`,
          borderRadius: 99,
          padding: "6px 16px",
          fontSize: 13,
          color: accent,
          fontWeight: 600,
          marginBottom: 28,
          letterSpacing: "0.02em",
        }}>
          BambooHR Alternative · 68% less per month
        </div>

        <h1 style={{
          fontSize: "clamp(40px, 6vw, 66px)",
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: "-1.5px",
          marginBottom: 24,
          color: "#fff",
        }}>
          HR software for small business<br />
          <span style={{
            background: `linear-gradient(135deg, #fff 0%, ${accent} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>that doesn&apos;t require an HR department.</span>
        </h1>

        <p style={{ fontSize: 19, color: "#888", lineHeight: 1.6, marginBottom: 40, maxWidth: 580, margin: "0 auto 40px" }}>
          BambooHR charges $250+/mo and assumes you have an HR team. ZiggyHR gives you employee profiles, PTO tracking, digital onboarding, and compliance tools for <strong style={{ color: "#fff" }}>$49/mo</strong> — and you&apos;re running in minutes.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
          <a href="https://app.ziggyhr.com/signup" style={{
            background: accent,
            color: "#fff",
            textDecoration: "none",
            padding: "15px 30px",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
          }}>
            Start Free Trial — 14 days free
          </a>
          <a href="#features" style={{
            background: "transparent",
            color: "#fff",
            textDecoration: "none",
            padding: "15px 30px",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            border: "1px solid #333",
          }}>
            See Features
          </a>
        </div>

        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
          {["✓ No credit card required", "✓ 14-day free trial", "✓ Cancel anytime"].map(badge => (
            <span key={badge} style={{ fontSize: 13, color: "#555", fontWeight: 500 }}>{badge}</span>
          ))}
        </div>
      </section>

      {/* ── PROBLEM STRIP ── */}
      <section style={{
        background: "#0f0f0f",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "56px 24px",
      }}>
        <div style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32,
          textAlign: "center",
        }}>
          {[
            {
              emoji: "💸",
              headline: "BambooHR is enterprise pricing for non-enterprise businesses.",
              body: "$250+/mo to manage 20 people. You don't need enterprise HR — you need something that just works at a price that makes sense.",
            },
            {
              emoji: "📋",
              headline: "Spreadsheets and paper forms don't scale.",
              body: "New hire docs in email, PTO in a shared calendar, I-9s in a filing cabinet. It works until it doesn't — and it usually stops working at the worst moment.",
            },
            {
              emoji: "😤",
              headline: "Enterprise HR software wasn't built for you.",
              body: "Rippling, Workday, ADP — they're built for 500+ employee companies. If you have 15 people, you're paying for features you'll never touch.",
            },
          ].map(({ emoji, headline, body }) => (
            <div key={headline}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{emoji}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{headline}</h3>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "96px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 16, color: "#fff" }}>
            Everything your team needs. Nothing you don&apos;t.
          </h2>
          <p style={{ fontSize: 17, color: "#666", maxWidth: 500, margin: "0 auto" }}>
            Built for business owners who handle HR alongside everything else — not for dedicated HR departments.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}>
          {[
            {
              icon: "👥",
              title: "Employee Profiles & Org Chart",
              desc: "A clean, searchable directory for your whole team. Photos, roles, contact info, departments — and an auto-generated org chart that's always current.",
            },
            {
              icon: "🏖️",
              title: "PTO Tracking & Approval Workflows",
              desc: "Employees request time off in the app. You approve or deny. Balances update automatically. No more email chains or shared spreadsheets.",
            },
            {
              icon: "📝",
              title: "Digital Onboarding",
              desc: "Collect documents and e-sign offer letters before day one. New hires complete everything remotely — you show up to the first day ready to go.",
            },
            {
              icon: "⭐",
              title: "Performance Reviews & 360 Feedback",
              desc: "Run structured performance reviews with peer feedback, self-assessments, and manager notes. Track growth over time without reinventing the process.",
            },
            {
              icon: "🔐",
              title: "I-9 & W-4 Verification",
              desc: "Built-in I-9 and W-4 collection with compliance guidance. Stay audit-ready without a dedicated compliance officer.",
            },
            {
              icon: "📢",
              title: "Company Announcements & Policy Docs",
              desc: "Share company news, policy updates, and handbooks in one place. Track who's read and acknowledged each document.",
            },
            {
              icon: "✅",
              title: "Offboarding Checklists",
              desc: "When someone leaves, trigger a checklist: revoke access, collect equipment, process final paperwork. Nothing falls through the cracks.",
            },
            {
              icon: "📊",
              title: "HR Reporting & Analytics",
              desc: "Headcount over time, turnover rate, PTO usage, time-to-hire. The data you need to make smart people decisions. Available on Scale plan.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: "#111111",
              border: "1px solid #1f1f1f",
              borderRadius: 14,
              padding: "28px 24px",
            }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMING SOON STRIP ── */}
      <section style={{
        background: "#0d0d0d",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "64px 24px",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: "#fff" }}>What&apos;s coming next</h2>
            <p style={{ color: "#555", fontSize: 15 }}>We ship fast. Here&apos;s what&apos;s already in development.</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}>
            {[
              {
                icon: "💰",
                title: "Payroll Integration",
                badge: "In Development",
                badgeColor: "#ff9500",
                desc: "Connect your payroll provider directly. Run payroll from inside ZiggyHR — no more exporting CSVs and copy-pasting between systems.",
              },
              {
                icon: "🏥",
                title: "Benefits Enrollment",
                badge: "In Development",
                badgeColor: "#ff9500",
                desc: "Let employees enroll in health, dental, and vision coverage without the paperwork. Track elections and carrier connections in one place.",
              },
              {
                icon: "🎯",
                title: "ATS — Applicant Tracking",
                badge: "Coming Soon",
                badgeColor: "#0066ff",
                desc: "Post jobs, track applicants, schedule interviews, and move candidates through your hiring pipeline — all without leaving ZiggyHR.",
              },
            ].map(({ icon, title, badge, badgeColor, desc }) => (
              <div key={title} style={{
                background: "#111111",
                border: "1px solid #1f1f1f",
                borderRadius: 14,
                padding: "24px 22px",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{icon}</span>
                  <span style={{
                    background: `${badgeColor}20`,
                    color: badgeColor,
                    border: `1px solid ${badgeColor}40`,
                    borderRadius: 99,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase" as const,
                  }}>{badge}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{
        padding: "96px 24px",
        background: "#080808",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 14, color: "#fff" }}>
              Built for your industry
            </h2>
            <p style={{ fontSize: 17, color: "#666", maxWidth: 500, margin: "0 auto" }}>
              Every business type has different HR needs. ZiggyHR covers them all.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
            marginBottom: 40,
          }}>
            {[
              { icon: "🏗️", name: "Construction & Trades", desc: "Crew management, safety certifications, compliance docs, and contractor records — all in one place." },
              { icon: "🛍️", name: "Retail & Hospitality", desc: "Manage shift workers, handle seasonal hiring, and reduce the chaos of high-turnover environments." },
              { icon: "🏥", name: "Healthcare Practices", desc: "Credentialing, compliance documentation, and per-diem staff management without the enterprise HR stack." },
              { icon: "💻", name: "Tech Startups", desc: "Onboard remote teams, manage contractor-to-hire transitions, and track equity-related HR milestones." },
              { icon: "🎓", name: "Schools & Education", desc: "Teacher onboarding, certification tracking, substitute staff records, and background check coordination." },
              { icon: "🏠", name: "Property Management", desc: "Maintenance staff, leasing agents, and vendor contractors — all tracked in a single HR system." },
              { icon: "🧹", name: "Cleaning & Home Services", desc: "Part-time worker records, background check tracking, and scheduling coordination without the spreadsheet chaos." },
              { icon: "📦", name: "Logistics & eCommerce", desc: "Warehouse staff records, driver compliance logs, and DOT documentation — organized and accessible." },
            ].map(({ icon, name, desc }) => (
              <div key={name} style={{
                background: "#111111",
                border: "1px solid #1f1f1f",
                borderRadius: 14,
                padding: "24px 22px",
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
              }}>
                <span style={{ fontSize: 32, flexShrink: 0, lineHeight: 1 }}>{icon}</span>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 5 }}>{name}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.55, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: `rgba(139,92,246,0.06)`,
            border: `1px solid rgba(139,92,246,0.2)`,
            borderRadius: 14,
            padding: "32px 36px",
            display: "flex",
            flexWrap: "wrap" as const,
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Don&apos;t see your industry?</h3>
              <p style={{ fontSize: 15, color: "#888", maxWidth: 480, lineHeight: 1.6, margin: 0 }}>
                We set up ZiggyHR for any business type. Every plan includes onboarding support to get you configured correctly from day one.
              </p>
            </div>
            <a href="https://app.ziggyhr.com/signup" style={{
              background: accent,
              color: "#fff",
              textDecoration: "none",
              padding: "13px 26px",
              borderRadius: 9,
              fontSize: 15,
              fontWeight: 600,
              whiteSpace: "nowrap" as const,
              flexShrink: 0,
            }}>
              Start Free Trial →
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ padding: "96px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: 12, color: "#fff" }}>
            ZiggyHR vs BambooHR
          </h2>
          <p style={{ color: "#666", fontSize: 16 }}>
            Same essential HR features. 68% less per month. No sales call required.
          </p>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>Feature</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: accent, fontWeight: 700, fontSize: 15, borderBottom: "1px solid #1f1f1f", background: `rgba(139,92,246,0.05)` }}>ZiggyHR</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>BambooHR</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Starting price", "$49/mo (up to 15 employees)", "$250+/mo"],
                ["50-employee price", "$79/mo", "$250+/mo (minimum)"],
                ["Free trial", "14 days, no credit card", "No free trial"],
                ["Annual contract", "No — cancel anytime", "Required"],
                ["Sales call required", "Never", "Yes"],
                ["Setup time", "Under 20 minutes", "Guided onboarding required"],
                ["Employee profiles & org chart", "✅ Yes", "✅ Yes"],
                ["PTO tracking & approvals", "✅ Yes", "✅ Yes"],
                ["Digital onboarding & e-sign", "✅ Yes", "✅ Yes"],
                ["Performance reviews", "✅ Yes (Growth+)", "✅ Yes"],
                ["I-9 & W-4 compliance", "✅ Yes", "✅ Yes"],
                ["Offboarding checklists", "✅ Yes", "✅ Yes"],
                ["HR analytics dashboard", "✅ Yes (Scale+)", "✅ Yes (add-on)"],
                ["Payroll", "🔧 Coming soon", "✅ Via integration"],
              ].map(([feature, ziggy, bamboo], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? "transparent" : "#0d0d0d" }}>
                  <td style={{ padding: "14px 20px", color: "#888", borderBottom: "1px solid #161616" }}>{feature}</td>
                  <td style={{ padding: "14px 20px", color: "#fff", textAlign: "center", borderBottom: "1px solid #161616", background: `rgba(139,92,246,0.03)`, fontWeight: 500 }}>{ziggy}</td>
                  <td style={{ padding: "14px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #161616" }}>{bamboo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: 32,
          background: "#111111",
          border: "1px solid #1f1f1f",
          borderRadius: 14,
          padding: "24px 28px",
        }}>
          <p style={{ fontSize: 15, color: "#888", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: "#fff" }}>Bottom line:</strong> BambooHR is enterprise HR for enterprise budgets. $250+/mo for a 20-person team. ZiggyHR covers 50 employees at $79/mo — that&apos;s 68% less for everything a small business actually needs.{" "}
            <a href="/vs/bamboohr" style={{ color: accent, textDecoration: "underline" }}>See full comparison →</a>
          </p>
        </div>

        <p style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "#444" }}>
          Pricing data sourced from BambooHR.com · Updated March 2026
        </p>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{
        padding: "96px 24px",
        background: "#080808",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: 12, color: "#fff" }}>
              Simple pricing. Scales with your team.
            </h2>
            <p style={{ color: "#666", fontSize: 16 }}>
              No annual contracts. No per-feature add-ons. No surprise invoices.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            alignItems: "start",
          }}>
            {[
              {
                name: "Starter",
                price: "$49",
                period: "/mo",
                sub: "Up to 15 employees",
                features: [
                  "Employee profiles & org chart",
                  "PTO tracking & approvals",
                  "Digital onboarding docs",
                  "E-sign offer letters",
                  "Company announcements",
                  "Policy document storage",
                  "14-day free trial",
                ],
                cta: "Start Free Trial",
                highlighted: false,
              },
              {
                name: "Growth",
                price: "$79",
                period: "/mo",
                sub: "Up to 50 employees",
                features: [
                  "Everything in Starter",
                  "Performance reviews & 360 feedback",
                  "Offer letter workflows",
                  "I-9 & W-4 verification",
                  "Custom onboarding workflows",
                  "Offboarding checklists",
                  "Priority email support",
                ],
                cta: "Start Free Trial",
                highlighted: true,
              },
              {
                name: "Scale",
                price: "$149",
                period: "/mo",
                sub: "Up to 150 employees",
                features: [
                  "Everything in Growth",
                  "HR reporting & analytics",
                  "Full analytics dashboard",
                  "Priority support (phone + email)",
                  "Advanced workflow builder",
                  "Custom fields",
                  "Dedicated onboarding call",
                ],
                cta: "Start Free Trial",
                highlighted: false,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                sub: "Unlimited employees",
                features: [
                  "Everything in Scale",
                  "Unlimited employees",
                  "Custom integrations",
                  "SSO & advanced security",
                  "Dedicated account manager",
                  "SLA & uptime guarantee",
                  "Custom contract",
                ],
                cta: "Contact Sales",
                highlighted: false,
              },
            ].map(({ name, price, period, sub, features, cta, highlighted }) => (
              <div key={name} style={{
                background: "#111111",
                border: highlighted ? `2px solid ${accent}` : "1px solid #1f1f1f",
                borderRadius: 14,
                padding: "32px 28px",
                position: "relative" as const,
              }}>
                {highlighted && (
                  <div style={{
                    position: "absolute" as const,
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: accent,
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase" as const,
                    padding: "4px 14px",
                    borderRadius: 99,
                    whiteSpace: "nowrap" as const,
                  }}>Most Popular</div>
                )}
                <div style={{ fontSize: 13, fontWeight: 700, color: highlighted ? accent : "#888", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 12 }}>{name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 4 }}>
                  <span style={{ fontSize: price === "Custom" ? 36 : 48, fontWeight: 700, color: "#fff", letterSpacing: "-1.5px" }}>{price}</span>
                  {period && <span style={{ fontSize: 16, color: "#555" }}>{period}</span>}
                </div>
                <p style={{ fontSize: 13, color: "#555", marginBottom: 24 }}>{sub}</p>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: 28 }}>
                  {features.map(f => (
                    <li key={f} style={{ padding: "6px 0", fontSize: 14, color: "#bbb", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #1a1a1a" }}>
                      <span style={{ color: accent, fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href={name === "Enterprise" ? "mailto:hello@ziggyhr.com" : "https://app.ziggyhr.com/signup"} style={{
                  display: "block",
                  background: highlighted ? accent : "transparent",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "13px",
                  borderRadius: 9,
                  fontSize: 15,
                  fontWeight: 600,
                  textAlign: "center" as const,
                  border: highlighted ? "none" : "1px solid #333",
                }}>
                  {cta}
                </a>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 32,
            background: "#111111",
            border: "1px solid #1f1f1f",
            borderRadius: 14,
            padding: "22px 24px",
            textAlign: "center" as const,
          }}>
            <p style={{ color: "#888", fontSize: 14, lineHeight: 1.6 }}>
              🏢 <strong style={{ color: "#fff" }}>Running the full ZiggyTech stack?</strong> Get all ZiggyTech apps including ZiggyHR with the{" "}
              <a href="https://ziggybusiness.com" style={{ color: accent, textDecoration: "underline" }}>ZiggyTech Business Suite</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "96px 24px", maxWidth: 740, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, letterSpacing: "-0.6px", marginBottom: 48, textAlign: "center", color: "#fff" }}>
          Questions? We&apos;ve got answers.
        </h2>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
          {[
            {
              q: "Do I need an HR background to use ZiggyHR?",
              a: "No. ZiggyHR is built for business owners, office managers, and operations leads who handle HR as one of many responsibilities. The setup takes under 20 minutes and the workflows guide you through everything. No HR degree required.",
            },
            {
              q: "How is ZiggyHR different from BambooHR?",
              a: "BambooHR is built for companies with dedicated HR departments and enterprise budgets. It starts at $250+/mo. ZiggyHR covers everything a small business actually needs — onboarding, PTO, profiles, compliance — starting at $49/mo. That's the whole difference.",
            },
            {
              q: "Can I onboard new hires before their first day?",
              a: "Yes — that's one of ZiggyHR's core features. Send new hires a digital onboarding package before day one: offer letter, I-9, W-4, employee handbook, and any other docs. They complete and e-sign everything in advance. You show up on day one ready to work.",
            },
            {
              q: "How does the free trial work?",
              a: "Sign up and get 14 days free — no credit card required. Full access to all features in your plan from day one. If you don't want to continue, just don't. There's nothing to cancel.",
            },
            {
              q: "What happens if I grow beyond my plan's employee limit?",
              a: "Just upgrade your plan. Moving from Starter (15 employees) to Growth (50 employees) is $30/mo more. No lock-in, no penalty — you switch when you're ready.",
            },
            {
              q: "Is my employee data secure?",
              a: "Yes. Data is encrypted at rest and in transit. You own your data — export it at any time. We never sell, share, or use employee data for any purpose other than running your ZiggyHR account.",
            },
          ].map(({ q, a }) => (
            <details key={q} style={{
              background: "#111111",
              border: "1px solid #1f1f1f",
              borderRadius: 10,
              overflow: "hidden",
            }}>
              <summary style={{
                padding: "20px 24px",
                fontSize: 16,
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                {q}
                <span style={{ color: accent, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>+</span>
              </summary>
              <div style={{ padding: "0 24px 20px", fontSize: 15, color: "#777", lineHeight: 1.7, borderTop: "1px solid #1a1a1a" }}>
                <p style={{ marginTop: 16 }}>{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: "100px 24px",
        textAlign: "center" as const,
        background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a14 100%)",
        borderTop: "1px solid #1f1f1f",
      }}>
        <h2 style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700,
          letterSpacing: "-1.5px",
          marginBottom: 20,
          lineHeight: 1.1,
          color: "#fff",
        }}>
          Your people deserve better<br />
          <span style={{
            background: `linear-gradient(135deg, #fff 0%, ${accent} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>than a spreadsheet.</span>
        </h2>
        <p style={{ fontSize: 18, color: "#555", marginBottom: 40 }}>
          14 days free. No credit card. Cancel anytime.
        </p>
        <a href="https://app.ziggyhr.com/signup" style={{
          display: "inline-block",
          background: accent,
          color: "#fff",
          textDecoration: "none",
          padding: "18px 40px",
          borderRadius: 12,
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.2px",
        }}>
          Start Free Trial →
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#050505",
        borderTop: "1px solid #111",
        padding: "40px 24px",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column" as const,
          alignItems: "center",
          gap: 20,
          textAlign: "center" as const,
        }}>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" as const, justifyContent: "center" }}>
            {[["Home", "/"], ["Features", "#features"], ["Pricing", "#pricing"], ["Compare", "/vs/bamboohr"], ["Blog", "/blog"], ["Privacy", "/privacy"], ["Terms", "/terms"], ["Sign In", "https://app.ziggyhr.com/login"]].map(([label, href]) => (
              <a key={label} href={href} style={{ color: "#555", fontSize: 14, textDecoration: "none", fontWeight: 500 }}>
                {label}
              </a>
            ))}
          </div>

          <p style={{ fontSize: 13, color: "#333" }}>
            Part of{" "}
            <a href="https://ziggybusiness.com" style={{ color: "#555", textDecoration: "none" }}>ZiggyTech Business Suite</a>
            {" · "}
            <a href="https://ziggybusiness.com" style={{ color: "#555", textDecoration: "none" }}>ziggybusiness.com</a>
          </p>

          <p style={{ fontSize: 13, color: "#2a2a2a" }}>
            © 2026 ZiggyHR. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
