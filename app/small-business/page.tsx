import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "HR Software for Small Business — Manage Your Team Without an HR Department",
  description:
    "ZiggyHR is HR software built for small businesses. Employee directory, PTO tracking, onboarding, and self-service — $59/mo, no contract, no HR department required.",
};

export default function SmallBusinessPage() {
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
              Small Business
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              HR Software for Small Business
              <br />
              <span style={{ color: "#8b5cf6" }}>Manage your team without an HR department.</span>
            </h1>
            <p className="text-xl mb-10" style={{ color: "#a1a1aa" }}>
              You&apos;re running HR yourself — between a dozen other things. ZiggyHR gives you a
              professional HR system without the enterprise price tag or the complexity.
              $59/month. Set up in 10 minutes.
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

        {/* Pain points */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">Sound familiar?</h2>
              <p style={{ color: "#a1a1aa" }}>Most small businesses are running HR the same broken way.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  emoji: "📊",
                  problem: "PTO in a spreadsheet",
                  detail: "You have a Google Sheet with PTO balances that's always behind, always wrong, and never where you need it.",
                },
                {
                  emoji: "📧",
                  problem: "Onboarding via email chains",
                  detail: "New hires get a jumble of emails. You manually follow up on I-9s, handbook signatures, and direct deposit forms.",
                },
                {
                  emoji: "📁",
                  problem: "HR docs scattered everywhere",
                  detail: "Offer letters in email, handbooks in Drive, contracts in Dropbox. Good luck finding anything during an audit.",
                },
                {
                  emoji: "❓",
                  problem: "'How many PTO days do I have?'",
                  detail: "Your employees ask you this every other week. You have to dig through the spreadsheet. Every. Single. Time.",
                },
              ].map((item) => (
                <div key={item.problem} className="p-6 rounded-xl border" style={{ background: "#18181b", borderColor: "#27272a" }}>
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.problem}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-24 px-4" style={{ background: "#0d0810" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Professional HR. <span style={{ color: "#8b5cf6" }}>Without the HR department.</span>
              </h2>
              <p className="text-lg" style={{ color: "#a1a1aa" }}>
                ZiggyHR is built specifically for small businesses — simple enough to run yourself, powerful enough to actually work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  emoji: "👥",
                  title: "Employee directory",
                  detail: "Everyone in one place. Searchable, up to date, mobile-friendly.",
                },
                {
                  emoji: "🏖️",
                  title: "PTO tracking",
                  detail: "Employees request time off. You approve it. Balances update automatically.",
                },
                {
                  emoji: "✅",
                  title: "Onboarding checklists",
                  detail: "Auto-sent on day one. Track completion without chasing anyone.",
                },
                {
                  emoji: "🔐",
                  title: "Self-service portal",
                  detail: "Employees update their own info, download pay stubs, view PTO — no email needed.",
                },
                {
                  emoji: "🏢",
                  title: "Org chart",
                  detail: "Always up to date. Perfect for team meetings and new hire orientation.",
                },
                {
                  emoji: "📄",
                  title: "Document storage",
                  detail: "One secure place for every HR document. Access-controlled, audit-ready.",
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

        {/* Pricing callout */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Enterprise HR tools. <span style={{ color: "#8b5cf6" }}>Small business price.</span>
              </h2>
              <p className="text-lg mb-6" style={{ color: "#a1a1aa" }}>
                BambooHR charges $250+/mo. Rippling won&apos;t tell you the price until you talk to sales.
                ZiggyHR is $59/month, all inclusive, no contracts.
              </p>
              <ul className="space-y-3 text-sm mb-8" style={{ color: "#a1a1aa" }}>
                {["Unlimited employees — no per-seat pricing", "All features included at $59/mo", "14-day free trial, no credit card", "Cancel anytime, no penalty"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#8b5cf6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all hover:opacity-90"
                style={{ background: "#8b5cf6", color: "#fff" }}
              >
                See pricing →
              </Link>
            </div>
            <div className="p-8 rounded-2xl border text-center" style={{ background: "#18181b", borderColor: "#27272a" }}>
              <div className="text-5xl font-bold text-white mb-2">$59</div>
              <div className="text-sm mb-6" style={{ color: "#a1a1aa" }}>/month — all inclusive</div>
              <div className="text-sm py-3 px-4 rounded-lg mb-4" style={{ background: "#1e1433", color: "#8b5cf6" }}>
                vs BambooHR at $250+/mo
              </div>
              <p className="text-sm" style={{ color: "#a1a1aa" }}>
                Save $2,000+/year compared to BambooHR.
              </p>
            </div>
          </div>
        </section>

        <CTASection
          headline="HR software that works as hard as you do."
          sub="$59/mo. 14-day free trial. Set up in 10 minutes. No sales call."
        />
      </main>
      <MarketingFooter />
    </>
  );
}
