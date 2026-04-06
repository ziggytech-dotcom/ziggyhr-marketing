import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Retail HR Software — Onboarding and Compliance for Retail Teams",
  description:
    "ZiggyHR is HR software for retail businesses. Onboard seasonal staff fast, track time off, stay compliant, and manage your team in one place. $59/mo.",
};

export default function RetailPage() {
  return (
    <>
      <MarketingNav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-4 text-center relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)" }}
          />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "#27272a", color: "#a1a1aa" }}>
              Retail
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Retail HR Software
              <br />
              <span style={{ color: "#8b5cf6" }}>Onboarding and compliance for retail teams.</span>
            </h1>
            <p className="text-xl mb-10" style={{ color: "#a1a1aa" }}>
              Seasonal hiring spikes, part-time staff, compliance paperwork — retail HR is a different beast.
              ZiggyHR is built to handle it without enterprise complexity or a $250/mo price tag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all hover:opacity-90"
                style={{ background: "#8b5cf6", color: "#fff" }}
              >
                Start free trial — $59/mo
              </Link>
            </div>
          </div>
        </section>

        {/* Retail challenges */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Retail HR challenges nobody talks about.</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  emoji: "🎄",
                  title: "Seasonal hiring surges",
                  detail: "You hire 20 people in November and need to onboard them all before Black Friday. ZiggyHR makes that fast and organized.",
                },
                {
                  emoji: "📋",
                  title: "Part-time & full-time mix",
                  detail: "Different PTO policies for full-time vs part-time. Different documents to sign. ZiggyHR handles both.",
                },
                {
                  emoji: "📄",
                  title: "Compliance paperwork",
                  detail: "W-4s, I-9s, state tax forms — every new hire needs a paper trail. Store it all digitally, access it instantly.",
                },
                {
                  emoji: "🔄",
                  title: "High turnover",
                  detail: "Retail turnover averages 60%/year. You need an onboarding system that scales, not a process you recreate every time.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl border" style={{ background: "#18181b", borderColor: "#27272a" }}>
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-24 px-4" style={{ background: "#0d0810" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              <span style={{ color: "#8b5cf6" }}>ZiggyHR</span> makes retail HR repeatable.
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  emoji: "⚡",
                  title: "Batch onboarding",
                  detail: "Add 20 seasonal employees, send all their checklists in one click. Track who's done what from one dashboard.",
                },
                {
                  emoji: "📝",
                  title: "Role-based templates",
                  detail: "Different checklists for floor associates, cashiers, and managers. Set it up once, reuse it forever.",
                },
                {
                  emoji: "🏖️",
                  title: "Part-time PTO",
                  detail: "Configure separate PTO policies for full-time and part-time staff. Accrual, approval, balances — automatic.",
                },
                {
                  emoji: "🔐",
                  title: "Self-service portal",
                  detail: "Staff check their own schedules, PTO balances, and pay stubs. You stop being the answer machine.",
                },
                {
                  emoji: "📄",
                  title: "Compliance storage",
                  detail: "Every I-9, W-4, and handbook signature stored securely. Pull any document in seconds.",
                },
                {
                  emoji: "👥",
                  title: "Staff directory",
                  detail: "Call any employee in 30 seconds. No more digging through group chats.",
                },
              ].map((f) => (
                <div key={f.title} className="p-6 rounded-xl border hover:border-violet-500/50 transition-colors" style={{ background: "#18181b", borderColor: "#27272a" }}>
                  <div className="text-3xl mb-3">{f.emoji}</div>
                  <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm" style={{ color: "#a1a1aa" }}>{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Numbers that matter for retail.
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { stat: "10 min", label: "Average setup time", sub: "Be ready before your next hire" },
                { stat: "$59", label: "Per month, flat rate", sub: "vs $250+/mo for BambooHR" },
                { stat: "14 days", label: "Free trial", sub: "No credit card required" },
              ].map((s) => (
                <div key={s.label} className="p-8 rounded-xl border" style={{ background: "#18181b", borderColor: "#27272a" }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: "#8b5cf6" }}>{s.stat}</div>
                  <div className="font-semibold text-white mb-1">{s.label}</div>
                  <div className="text-sm" style={{ color: "#a1a1aa" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          headline="Be ready for your next seasonal surge."
          sub="$59/mo. 14-day free trial. No contracts, no complexity."
        />
      </main>
      <MarketingFooter />
    </>
  );
}
