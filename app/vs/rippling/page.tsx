import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "ZiggyHR vs Rippling — Self-Serve in Minutes vs a Sales Call",
  description:
    "Rippling requires a sales call and a contract. ZiggyHR is self-serve, $59/mo, no contract. Compare features, pricing, and setup time.",
};

const rows = [
  { feature: "Pricing", ziggy: "$59/mo flat", rippling: "Custom quote only", winner: "ziggy" },
  { feature: "Sales call required", ziggy: "Never", rippling: "Yes — to see pricing", winner: "ziggy" },
  { feature: "Contract", ziggy: "None — month to month", rippling: "Annual contract", winner: "ziggy" },
  { feature: "Free trial", ziggy: "14 days, no card", rippling: "No", winner: "ziggy" },
  { feature: "Setup time", ziggy: "10 minutes, self-serve", rippling: "Implementation required", winner: "ziggy" },
  { feature: "Employee directory", ziggy: "✓", rippling: "✓", winner: "tie" },
  { feature: "PTO tracking", ziggy: "✓", rippling: "✓", winner: "tie" },
  { feature: "Onboarding", ziggy: "✓ included", rippling: "✓ included", winner: "tie" },
  { feature: "Self-service portal", ziggy: "✓ included", rippling: "✓ included", winner: "tie" },
  { feature: "Org chart", ziggy: "✓", rippling: "✓", winner: "tie" },
  { feature: "Built for small business", ziggy: "Yes — core focus", rippling: "No — enterprise-first", winner: "ziggy" },
  { feature: "Complexity", ziggy: "Simple, focused HR", rippling: "Complex HR + IT + finance suite", winner: "ziggy" },
];

export default function VsRipplingPage() {
  return (
    <>
      <MarketingNav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-4 text-center relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)" }}
          />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "#1e1433", color: "#8b5cf6" }}>
              ZiggyHR vs Rippling
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Rippling requires a sales call.
              <br />
              <span style={{ color: "#8b5cf6" }}>ZiggyHR is self-serve in minutes.</span>
            </h1>
            <p className="text-xl mb-10" style={{ color: "#a1a1aa" }}>
              Rippling is a powerful platform — for enterprise companies with dedicated IT and HR teams.
              If you&apos;re a small business that just wants HR software, you don&apos;t need Rippling&apos;s complexity or its sales process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all hover:opacity-90"
                style={{ background: "#8b5cf6", color: "#fff" }}
              >
                Start free trial — $59/mo
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold border hover:bg-white/5 transition-colors"
                style={{ borderColor: "#27272a", color: "#fff" }}
              >
                See all features
              </Link>
            </div>
          </div>
        </section>

        {/* The difference */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                title: "With Rippling",
                steps: [
                  "Fill out a contact form",
                  "Wait for a sales rep to call",
                  "Sit through a demo",
                  "Get a custom quote",
                  "Sign an annual contract",
                  "Go through implementation",
                  "Start using HR software",
                ],
                color: "#27272a",
                textColor: "#a1a1aa",
              },
              {
                title: "With ZiggyHR",
                steps: [
                  "Go to ziggyhr.com",
                  "Enter your email",
                  "Add your employees",
                  "You're done. ✓",
                ],
                color: "#8b5cf6",
                textColor: "#fff",
                highlight: true,
              },
              {
                title: "Time to value",
                steps: [],
                custom: true,
              },
            ].map((col) => {
              if (col.custom) {
                return (
                  <div key="time" className="p-8 rounded-2xl border flex flex-col justify-center" style={{ background: "#18181b", borderColor: "#27272a" }}>
                    <h3 className="text-xl font-bold mb-6 text-white">Time to value</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm mb-1" style={{ color: "#a1a1aa" }}>Rippling</div>
                        <div className="text-2xl font-bold" style={{ color: "#ff4444" }}>Weeks</div>
                        <div className="text-xs" style={{ color: "#a1a1aa" }}>Sales → demo → quote → contract → implementation</div>
                      </div>
                      <div>
                        <div className="text-sm mb-1" style={{ color: "#a1a1aa" }}>ZiggyHR</div>
                        <div className="text-2xl font-bold" style={{ color: "#8b5cf6" }}>10 minutes</div>
                        <div className="text-xs" style={{ color: "#a1a1aa" }}>Sign up → add team → done</div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={col.title}
                  className="p-8 rounded-2xl border"
                  style={{
                    background: col.highlight ? "#1e1433" : "#18181b",
                    borderColor: col.highlight ? "#8b5cf6" : "#27272a",
                  }}
                >
                  <h3 className="text-xl font-bold mb-6" style={{ color: col.highlight ? "#fff" : "#a1a1aa" }}>
                    {col.title}
                  </h3>
                  <ol className="space-y-3">
                    {col.steps.map((step, i) => (
                      <li key={step} className="flex items-start gap-3 text-sm" style={{ color: col.textColor }}>
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                          style={{ background: col.highlight ? "#8b5cf6" : "#27272a", color: col.highlight ? "#fff" : "#a1a1aa" }}
                        >
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-24 px-4" style={{ background: "#0d0810" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-white">Full comparison</h2>
            <p className="text-center mb-12" style={{ color: "#a1a1aa" }}>
              Every factor that matters when choosing HR software.
            </p>

            <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "#27272a" }}>
              <table className="w-full">
                <thead>
                  <tr style={{ background: "#18181b", borderBottom: "1px solid #27272a" }}>
                    <th className="text-left p-4 text-sm font-semibold text-white">Factor</th>
                    <th className="p-4 text-center text-sm font-semibold" style={{ color: "#8b5cf6" }}>
                      <span style={{ color: "#ff1744" }}>Ziggy</span>HR
                    </th>
                    <th className="p-4 text-center text-sm font-semibold" style={{ color: "#a1a1aa" }}>Rippling</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={row.feature} style={{ borderBottom: "1px solid #27272a", background: i % 2 === 0 ? "#0f0a0a" : "#18181b" }}>
                      <td className="p-4 text-sm text-white">{row.feature}</td>
                      <td className="p-4 text-center text-sm font-semibold" style={{ color: "#8b5cf6" }}>{row.ziggy}</td>
                      <td className="p-4 text-center text-sm" style={{ color: row.winner === "ziggy" ? "#ff4444" : "#a1a1aa" }}>{row.rippling}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Be honest with yourself about what you need.</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border" style={{ background: "#18181b", borderColor: "#27272a" }}>
                <h3 className="text-xl font-bold mb-4 text-white">Choose Rippling if…</h3>
                <ul className="space-y-3 text-sm" style={{ color: "#a1a1aa" }}>
                  {[
                    "You need HR + IT + Finance in one platform",
                    "You have 200+ employees",
                    "You have a dedicated HR and IT team",
                    "You need complex device management and SSO",
                    "Budget is not a constraint",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-2xl border" style={{ background: "#18181b", borderColor: "#8b5cf6" }}>
                <h3 className="text-xl font-bold mb-4 text-white">Choose ZiggyHR if…</h3>
                <ul className="space-y-3 text-sm" style={{ color: "#a1a1aa" }}>
                  {[
                    "You just need solid HR for your team",
                    "You're a small business (5–150 people)",
                    "You don't want to talk to a sales rep",
                    "You want to start today, not in 3 weeks",
                    "You want to pay $59 instead of hundreds",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#8b5cf6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          headline="No sales call. No contract. Just HR."
          sub="Set up ZiggyHR in 10 minutes. $59/mo. 14-day free trial."
        />
      </main>
      <MarketingFooter />
    </>
  );
}
