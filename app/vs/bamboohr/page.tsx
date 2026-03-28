import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "ZiggyHR vs BambooHR — $59 vs $250+/mo. Same Essential HR Features.",
  description:
    "BambooHR starts at $250+/mo. ZiggyHR is $59/month. Compare features, pricing, and setup. Same essential HR tools — one-fifth the price.",
};

const rows = [
  { feature: "Monthly price", ziggy: "$59/mo", bamboo: "$250+/mo", winner: "ziggy" },
  { feature: "Annual cost", ziggy: "$708/yr", bamboo: "$3,000+/yr", winner: "ziggy" },
  { feature: "Contract required", ziggy: "No — cancel anytime", bamboo: "Annual contract", winner: "ziggy" },
  { feature: "Free trial", ziggy: "14 days, no credit card", bamboo: "No free trial", winner: "ziggy" },
  { feature: "Setup time", ziggy: "10 minutes, self-serve", bamboo: "Guided onboarding required", winner: "ziggy" },
  { feature: "Sales call required", ziggy: "Never", bamboo: "Sometimes", winner: "ziggy" },
  { feature: "Employee directory", ziggy: "✓", bamboo: "✓", winner: "tie" },
  { feature: "PTO tracking", ziggy: "✓", bamboo: "✓", winner: "tie" },
  { feature: "Onboarding checklists", ziggy: "✓", bamboo: "✓", winner: "tie" },
  { feature: "Self-service portal", ziggy: "✓", bamboo: "✓", winner: "tie" },
  { feature: "Org chart", ziggy: "✓", bamboo: "✓", winner: "tie" },
  { feature: "Document storage", ziggy: "✓", bamboo: "✓", winner: "tie" },
  { feature: "E-signatures", ziggy: "✓", bamboo: "Add-on", winner: "ziggy" },
  { feature: "Unlimited employees", ziggy: "✓ included", bamboo: "Per-employee pricing", winner: "ziggy" },
];

export default function VsBambooHRPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-4 text-center relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)" }}
          />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "#1e1433", color: "#8b5cf6" }}>
              ZiggyHR vs BambooHR
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              $59 vs{" "}
              <span className="line-through" style={{ color: "#a1a1aa" }}>$250+</span>
              /mo.
              <br />
              <span style={{ color: "#8b5cf6" }}>Same essential HR features.</span>
            </h1>
            <p className="text-xl mb-10" style={{ color: "#a1a1aa" }}>
              BambooHR is a great product — built for HR departments at mid-size companies.
              If you&apos;re a small business without a dedicated HR team, you&apos;re overpaying by
              4× for features you&apos;ll never use.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all hover:opacity-90"
              style={{ background: "#8b5cf6", color: "#fff" }}
            >
              Try ZiggyHR free for 14 days
            </Link>
          </div>
        </section>

        {/* Price shock */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border relative overflow-hidden" style={{ background: "#18181b", borderColor: "#8b5cf6" }}>
              <div className="absolute top-4 right-4 px-2 py-1 rounded text-xs font-bold" style={{ background: "#8b5cf6", color: "#fff" }}>
                Best value
              </div>
              <div className="text-3xl font-bold mb-1" style={{ color: "#8b5cf6" }}>
                <span style={{ color: "#ff1744" }}>Ziggy</span>HR
              </div>
              <div className="text-6xl font-bold text-white mb-2">$59</div>
              <div className="text-sm mb-6" style={{ color: "#a1a1aa" }}>per month, all inclusive</div>
              <ul className="space-y-2 text-sm" style={{ color: "#a1a1aa" }}>
                <li>✓ Unlimited employees</li>
                <li>✓ All features included</li>
                <li>✓ No contract</li>
                <li>✓ 14-day free trial</li>
                <li>✓ Self-serve setup in 10 min</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border" style={{ background: "#18181b", borderColor: "#27272a" }}>
              <div className="text-3xl font-bold mb-1 text-white">BambooHR</div>
              <div className="text-6xl font-bold mb-2" style={{ color: "#a1a1aa" }}>$250<span className="text-3xl">+</span></div>
              <div className="text-sm mb-6" style={{ color: "#a1a1aa" }}>per month (estimate for small team)</div>
              <ul className="space-y-2 text-sm" style={{ color: "#a1a1aa" }}>
                <li>✗ Per-employee pricing</li>
                <li>✗ Features split across tiers</li>
                <li>✗ Annual contract</li>
                <li>✗ No free trial</li>
                <li>✗ Onboarding process required</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-6 p-6 rounded-xl border text-center" style={{ background: "#1e1433", borderColor: "#3d1f7a" }}>
            <p className="text-lg font-semibold text-white">
              Over 3 years, ZiggyHR saves you{" "}
              <span style={{ color: "#8b5cf6" }}>$6,876</span>{" "}
              compared to BambooHR. That&apos;s a full-time hire for a month.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-24 px-4" style={{ background: "#0d0810" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-white">Full comparison</h2>
            <p className="text-center mb-12" style={{ color: "#a1a1aa" }}>
              Side-by-side for every feature that matters to a small business.
            </p>

            <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "#27272a" }}>
              <table className="w-full">
                <thead>
                  <tr style={{ background: "#18181b", borderBottom: "1px solid #27272a" }}>
                    <th className="text-left p-4 text-sm font-semibold text-white">Feature</th>
                    <th className="p-4 text-center text-sm font-semibold" style={{ color: "#8b5cf6" }}>
                      <span style={{ color: "#ff1744" }}>Ziggy</span>HR
                    </th>
                    <th className="p-4 text-center text-sm font-semibold" style={{ color: "#a1a1aa" }}>BambooHR</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={row.feature} style={{ borderBottom: "1px solid #27272a", background: i % 2 === 0 ? "#0f0a0a" : "#18181b" }}>
                      <td className="p-4 text-sm text-white">{row.feature}</td>
                      <td className="p-4 text-center text-sm font-semibold" style={{ color: "#8b5cf6" }}>{row.ziggy}</td>
                      <td className="p-4 text-center text-sm" style={{ color: row.winner === "ziggy" ? "#ff4444" : "#a1a1aa" }}>{row.bamboo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Who BambooHR is for */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl border" style={{ background: "#18181b", borderColor: "#27272a" }}>
              <h3 className="text-2xl font-bold mb-4 text-white">BambooHR is great if you&apos;re…</h3>
              <ul className="space-y-3 text-sm" style={{ color: "#a1a1aa" }}>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>A 100+ person company with a dedicated HR team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Running complex compensation workflows and performance reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Need deep integrations with payroll, ATS, and HRIS platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>→</span>
                  <span>Have budget for $3,000+/year in HR software</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border" style={{ background: "#18181b", borderColor: "#8b5cf6" }}>
              <h3 className="text-2xl font-bold mb-4 text-white">
                <span style={{ color: "#ff1744" }}>Ziggy</span>
                <span style={{ color: "#8b5cf6" }}>HR</span> is great if you&apos;re…
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: "#a1a1aa" }}>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#8b5cf6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>A small business with 5–150 employees</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#8b5cf6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Running HR yourself without a dedicated HR department</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#8b5cf6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tired of spreadsheets and want to get organized fast</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#8b5cf6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Want to pay $59 instead of $250+ every month</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <CTASection
          headline="Switch from BambooHR. Save $2,000/year."
          sub="14-day free trial. No credit card. Get set up in 10 minutes."
        />
      </main>
      <Footer />
    </>
  );
}
