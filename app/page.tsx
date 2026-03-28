import type { Metadata } from "next";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";

export const metadata: Metadata = {
  title: "ZiggyHR — HR Software for Small Business | $59/mo",
  description:
    "BambooHR costs $250+/mo. ZiggyHR costs $59. Employee directory, PTO tracking, onboarding checklists, and self-service — without the enterprise price tag.",
};

const features = [
  {
    icon: "👥",
    title: "Employee Directory",
    desc: "A clean, searchable directory for your whole team. Photos, roles, contact info, departments.",
  },
  {
    icon: "🏖️",
    title: "PTO Tracking",
    desc: "Employees request time off. You approve it. Balances update automatically.",
  },
  {
    icon: "✅",
    title: "Onboarding Checklists",
    desc: "Send new hires a checklist on day one. Track completion without chasing anyone.",
  },
  {
    icon: "🔐",
    title: "Employee Self-Service",
    desc: "Employees update their own info, view pay stubs, download docs — without emailing HR.",
  },
  {
    icon: "🏢",
    title: "Org Chart",
    desc: "Auto-generated org chart from your employee data. Always up to date.",
  },
  {
    icon: "📄",
    title: "Document Storage",
    desc: "Store offer letters, NDAs, handbooks. Employees sign and access digitally.",
  },
];

const comparisonRows = [
  { feature: "Price", ziggy: "$59/mo", bamboo: "$250+/mo", rippling: "Custom quote" },
  { feature: "Free trial", ziggy: "14 days", bamboo: "No", rippling: "No" },
  { feature: "Setup", ziggy: "Self-serve, 10 min", bamboo: "Guided onboarding", rippling: "Sales call required" },
  { feature: "Employee directory", ziggy: "✓", bamboo: "✓", rippling: "✓" },
  { feature: "PTO tracking", ziggy: "✓", bamboo: "✓", rippling: "✓" },
  { feature: "Onboarding checklists", ziggy: "✓", bamboo: "✓", rippling: "✓" },
  { feature: "Self-service portal", ziggy: "✓", bamboo: "✓", rippling: "✓" },
  { feature: "Org chart", ziggy: "✓", bamboo: "✓", rippling: "✓" },
  { feature: "Contract required", ziggy: "No", bamboo: "Annual", rippling: "Annual" },
];

const trustItems = [
  "No contracts",
  "Cancel anytime",
  "14-day free trial",
  "All seats included",
  "Setup in 10 minutes",
  "No sales call needed",
];

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
          {/* Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)" }}
          />
          <div className="relative max-w-5xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border"
              style={{ background: "#18181b", borderColor: "#27272a", color: "#a1a1aa" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              No sales call. No contract. Just HR that works.
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span style={{ color: "#ff1744" }}>BambooHR</span> costs{" "}
              <span className="line-through" style={{ color: "#a1a1aa" }}>$250</span>
              /mo.
              <br />
              We cost{" "}
              <span style={{ color: "#8b5cf6" }}>$59</span>.
            </h1>

            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto" style={{ color: "#a1a1aa" }}>
              Employee directory, PTO tracking, onboarding checklists, and self-service — without the enterprise price tag.
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
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold border transition-all hover:bg-white/5"
                style={{ borderColor: "#27272a", color: "#fff" }}
              >
                See all features →
              </Link>
            </div>

            <p className="mt-4 text-sm" style={{ color: "#a1a1aa" }}>
              14-day free trial. No credit card required.
            </p>
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-8 border-y" style={{ borderColor: "#27272a" }}>
          <div className="max-w-6xl mx-auto px-4">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#a1a1aa" }}>
                  <svg className="w-4 h-4" style={{ color: "#8b5cf6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Problem */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "#27272a", color: "#a1a1aa" }}>
              The Problem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Built for enterprises. <br />Billed to small businesses.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#a1a1aa" }}>
              BambooHR and Rippling are built for enterprises with dedicated HR teams. You&apos;re a small business
              running HR on spreadsheets and email — paying for features you&apos;ll never use, after a sales call you
              didn&apos;t want to take.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
            {[
              { pain: "💸 $250+/mo", desc: "BambooHR starts at $250+ for small teams. That's $3,000/year for software you barely use." },
              { pain: "📞 Sales calls", desc: "Rippling won't show you pricing without a sales call. You just want HR software, not a sales funnel." },
              { pain: "📊 Spreadsheet chaos", desc: "You're tracking PTO in Excel, storing docs in email, and onboarding people with sticky notes." },
            ].map((p) => (
              <div key={p.pain} className="p-6 rounded-xl border" style={{ background: "#18181b", borderColor: "#27272a" }}>
                <div className="text-2xl mb-3">{p.pain}</div>
                <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className="py-24 px-4" style={{ background: "#0d0810" }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "#1e1433", color: "#8b5cf6" }}>
              The Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Professional HR without the enterprise invoice.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#a1a1aa" }}>
              ZiggyHR gives you professional HR tools without the complexity or the $250/mo invoice.
              Set up in 10 minutes. No training required. No dedicated HR team needed.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-4" id="features">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Everything you need. Nothing you don&apos;t.</h2>
              <p className="text-lg" style={{ color: "#a1a1aa" }}>Six core HR tools, perfectly sized for small businesses.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="p-6 rounded-xl border hover:border-violet-500/50 transition-colors group" style={{ background: "#18181b", borderColor: "#27272a" }}>
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Feature: Self-Service Portal */}
        <section className="py-24 px-4" style={{ background: "#0d0810" }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "#1e1433", color: "#8b5cf6" }}>
                Employee Self-Service
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">Stop being the HR help desk.</h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#a1a1aa" }}>
                With ZiggyHR&apos;s self-service portal, employees handle their own updates — no more emails asking for pay stubs,
                address changes, or time-off balances.
              </p>
              <ul className="space-y-3">
                {[
                  "Update personal info without emailing anyone",
                  "Download pay stubs and W-2s instantly",
                  "View and request PTO from a mobile-friendly dashboard",
                  "Sign documents electronically",
                  "Access the company org chart and directory",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#a1a1aa" }}>
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#8b5cf6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border p-8 text-center" style={{ background: "#18181b", borderColor: "#27272a" }}>
              <div className="text-6xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold mb-2 text-white">Employee Portal</h3>
              <p className="text-sm mb-6" style={{ color: "#a1a1aa" }}>Your team handles their own HR</p>
              <div className="space-y-3">
                {["My Profile", "Time Off", "Documents", "Pay History", "Org Chart"].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-lg border text-left" style={{ borderColor: "#27272a", background: "#0f0a0a" }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: "#8b5cf6" }} />
                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deep Feature: Onboarding */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-2xl border p-8" style={{ background: "#18181b", borderColor: "#27272a" }}>
              <h3 className="text-lg font-bold mb-4 text-white">New Hire Checklist — Sarah J.</h3>
              <div className="space-y-3">
                {[
                  { task: "Sign offer letter", done: true },
                  { task: "Complete I-9", done: true },
                  { task: "Set up direct deposit", done: true },
                  { task: "Review employee handbook", done: false },
                  { task: "Complete benefits enrollment", done: false },
                  { task: "Meet with your manager", done: false },
                ].map((item) => (
                  <div key={item.task} className="flex items-center gap-3 p-3 rounded-lg border" style={{ borderColor: "#27272a", background: "#0f0a0a" }}>
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${item.done ? "border-violet-500" : "border-zinc-600"}`} style={item.done ? { background: "#8b5cf6" } : {}}>
                      {item.done && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm" style={{ color: item.done ? "#ffffff" : "#a1a1aa" }}>{item.task}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm" style={{ color: "#a1a1aa" }}>
                <span>3 of 6 complete</span>
                <span style={{ color: "#8b5cf6" }}>50%</span>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "#27272a", color: "#a1a1aa" }}>
                Onboarding Workflows
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">First-day-ready on day one.</h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#a1a1aa" }}>
                Send every new hire a personalized onboarding checklist automatically. Track who&apos;s done what.
                No more chasing paperwork or wondering if Sarah signed her offer letter.
              </p>
              <ul className="space-y-3">
                {[
                  "Auto-send checklists when you add a new employee",
                  "Employees complete tasks from any device",
                  "You see completion status in real time",
                  "Templates for different roles and departments",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#a1a1aa" }}>
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#8b5cf6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 px-4" style={{ background: "#0d0810" }} id="pricing">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">One plan. One price. No surprises.</h2>
            <p className="text-lg mb-12" style={{ color: "#a1a1aa" }}>
              Everything included. Unlimited employees. No per-seat nonsense.
            </p>

            <div className="relative inline-block w-full max-w-sm mx-auto">
              <div className="absolute -inset-px rounded-2xl" style={{ background: "linear-gradient(135deg, #8b5cf6, #ff1744)" }} />
              <div className="relative rounded-2xl p-8 text-left" style={{ background: "#18181b" }}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">ZiggyHR</h3>
                    <p className="text-sm" style={{ color: "#a1a1aa" }}>Everything. Everyone.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-bold text-white">$59</div>
                    <div className="text-sm" style={{ color: "#a1a1aa" }}>/month</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Unlimited employees",
                    "Employee directory",
                    "PTO tracking & approvals",
                    "Onboarding checklists",
                    "Self-service portal",
                    "Org chart",
                    "Document storage",
                    "14-day free trial",
                    "No contracts",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#a1a1aa" }}>
                      <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#8b5cf6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/pricing"
                  className="block w-full text-center py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: "#8b5cf6" }}
                >
                  Start free trial
                </Link>
              </div>
            </div>

            <p className="mt-6 text-sm" style={{ color: "#a1a1aa" }}>
              Compare to BambooHR ($250+/mo) and Rippling (custom pricing, sales call required).{" "}
              <Link href="/vs/bamboohr" className="underline hover:text-white" style={{ color: "#8b5cf6" }}>See full comparison →</Link>
            </p>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">How we stack up</h2>
              <p style={{ color: "#a1a1aa" }}>Same essential HR features. One-fifth the price.</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "#27272a" }}>
              <table className="w-full">
                <thead>
                  <tr style={{ background: "#18181b", borderBottom: "1px solid #27272a" }}>
                    <th className="text-left p-4 text-sm font-semibold text-white">Feature</th>
                    <th className="p-4 text-center text-sm font-semibold" style={{ color: "#8b5cf6" }}>
                      <span style={{ color: "#ff1744" }}>Ziggy</span>HR
                    </th>
                    <th className="p-4 text-center text-sm font-semibold" style={{ color: "#a1a1aa" }}>BambooHR</th>
                    <th className="p-4 text-center text-sm font-semibold" style={{ color: "#a1a1aa" }}>Rippling</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "" : ""} style={{ borderBottom: "1px solid #27272a", background: i % 2 === 0 ? "#0f0a0a" : "#18181b" }}>
                      <td className="p-4 text-sm text-white">{row.feature}</td>
                      <td className="p-4 text-center text-sm font-semibold" style={{ color: "#8b5cf6" }}>{row.ziggy}</td>
                      <td className="p-4 text-center text-sm" style={{ color: "#a1a1aa" }}>{row.bamboo}</td>
                      <td className="p-4 text-center text-sm" style={{ color: "#a1a1aa" }}>{row.rippling}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/vs/bamboohr" className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium border hover:bg-white/5 transition-colors" style={{ borderColor: "#27272a", color: "#a1a1aa" }}>
                Full comparison vs BambooHR →
              </Link>
              <Link href="/vs/rippling" className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium border hover:bg-white/5 transition-colors" style={{ borderColor: "#27272a", color: "#a1a1aa" }}>
                Full comparison vs Rippling →
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
