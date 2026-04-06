import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "HR for Contractor Businesses — Manage Field Employees Professionally",
  description:
    "ZiggyHR is HR software for contractor businesses. Manage field employees, track certifications, onboard crews fast, and store compliance docs. $59/mo.",
};

export default function ContractorsPage() {
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
              Contractors
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              HR for Contractor Businesses
              <br />
              <span style={{ color: "#8b5cf6" }}>Manage field employees professionally.</span>
            </h1>
            <p className="text-xl mb-10" style={{ color: "#a1a1aa" }}>
              Your team is in the field — not at a desk. Your HR system needs to be just as mobile, flexible, and no-nonsense.
              ZiggyHR is $59/month. Set up in 10 minutes.
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

        {/* Field-specific challenges */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Running a contractor business is different.
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  emoji: "🏗️",
                  title: "Field crews, not desk workers",
                  detail: "Your employees are on job sites, not in offices. HR software needs to work from a phone — and be simple enough for everyone to use.",
                },
                {
                  emoji: "📋",
                  title: "License & certification tracking",
                  detail: "Electricians, plumbers, HVAC techs — all need up-to-date licenses. Track expiration dates and get reminders before they lapse.",
                },
                {
                  emoji: "🔄",
                  title: "Project-based crew changes",
                  detail: "Your team changes by project. You need HR records that are clean, current, and easy to update — not a mess of spreadsheets.",
                },
                {
                  emoji: "⚠️",
                  title: "Compliance risk",
                  detail: "Contractor businesses face serious compliance exposure — misclassification, I-9s, OSHA docs. ZiggyHR keeps your paper trail tight.",
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

        {/* How ZiggyHR helps */}
        <section className="py-24 px-4" style={{ background: "#0d0810" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              <span style={{ color: "#8b5cf6" }}>ZiggyHR</span> is built for businesses that build things.
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  emoji: "📱",
                  title: "Mobile-first portal",
                  detail: "Field workers access their own HR — PTO requests, pay stubs, documents — from their phone on any job site.",
                },
                {
                  emoji: "📋",
                  title: "Certification tracking",
                  detail: "Upload certifications with expiry dates. Get email alerts 30 days before anything expires. Stay compliant automatically.",
                },
                {
                  emoji: "✅",
                  title: "Fast crew onboarding",
                  detail: "New crew member starting Monday? Send their onboarding checklist right now. Collect every doc digitally before day one.",
                },
                {
                  emoji: "📄",
                  title: "Document storage",
                  detail: "I-9s, W-4s, OSHA training records, subcontractor agreements — all stored securely, all searchable.",
                },
                {
                  emoji: "👥",
                  title: "Employee directory",
                  detail: "Every field employee's contact info, role, and certifications in one place. Find anyone in 10 seconds.",
                },
                {
                  emoji: "🏖️",
                  title: "PTO tracking",
                  detail: "Even field crews take time off. Track requests, approvals, and balances without spreadsheets.",
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

        {/* Trust */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Professional HR for professional contractors.
            </h2>
            <p className="text-lg mb-12" style={{ color: "#a1a1aa" }}>
              Your customers expect professionalism. Your HR should too.
              ZiggyHR gives your field business the same HR system that enterprise companies use — at a price that makes sense.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { stat: "$59", label: "per month", sub: "All features, unlimited employees" },
                { stat: "10 min", label: "setup time", sub: "Start onboarding crews today" },
                { stat: "0", label: "sales calls", sub: "Sign up and go, no demos needed" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-xl border" style={{ background: "#18181b", borderColor: "#27272a" }}>
                  <div className="text-4xl font-bold mb-1" style={{ color: "#8b5cf6" }}>{s.stat}</div>
                  <div className="font-medium text-white mb-1">{s.label}</div>
                  <div className="text-sm" style={{ color: "#a1a1aa" }}>{s.sub}</div>
                </div>
              ))}
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all hover:opacity-90"
              style={{ background: "#8b5cf6", color: "#fff" }}
            >
              Start free trial — $59/mo
            </Link>
          </div>
        </section>

        <CTASection
          headline="Your crew deserves a real HR system."
          sub="$59/mo. 14-day free trial. No contracts, no complexity."
        />
      </main>
      <MarketingFooter />
    </>
  );
}
