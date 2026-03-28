import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Restaurant HR Software — Manage Hourly Staff, Schedules, and Time Off",
  description:
    "ZiggyHR is HR software for restaurants. Manage hourly staff, track time off, onboard new servers and cooks, and keep your team organized. $59/mo.",
};

export default function RestaurantsPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-4 text-center relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)" }}
          />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "#27272a", color: "#a1a1aa" }}>
              Restaurants
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Restaurant HR Software
              <br />
              <span style={{ color: "#8b5cf6" }}>Manage hourly staff, schedules, and time off.</span>
            </h1>
            <p className="text-xl mb-10" style={{ color: "#a1a1aa" }}>
              Running a restaurant means constant turnover, hourly employees, and HR paperwork between the lunch and dinner rush.
              ZiggyHR gives you the HR tools you need without the enterprise complexity.
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

        {/* Restaurant-specific challenges */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              HR for restaurants is different.
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  emoji: "🔄",
                  title: "High turnover",
                  detail: "Restaurants see 70%+ annual turnover. You need fast, repeatable onboarding — not a week-long process.",
                },
                {
                  emoji: "⏱️",
                  title: "Hourly employees",
                  detail: "Servers, cooks, hosts — all hourly, all with different schedules and time-off needs. ZiggyHR tracks it all.",
                },
                {
                  emoji: "📋",
                  title: "Food handler certifications",
                  detail: "Track certifications and expiration dates for every employee. Get notified before they expire.",
                },
                {
                  emoji: "📞",
                  title: "Last-minute callouts",
                  detail: "Your staff directory gives you every employee's contact info in seconds. No more digging through texts.",
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
              HR done in the time between <span style={{ color: "#8b5cf6" }}>lunch and dinner service.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  emoji: "🍽️",
                  title: "Fast onboarding",
                  detail: "New server starts Monday? Send their checklist Sunday night. Collect I-9, food handler cert, and direct deposit digitally.",
                },
                {
                  emoji: "🏖️",
                  title: "Time-off tracking",
                  detail: "No more group texts asking who can cover Saturday. See who's requested time off, approve it with one tap.",
                },
                {
                  emoji: "👥",
                  title: "Staff directory",
                  detail: "Every employee's contact info, role, and start date in one searchable place. Call or text in 30 seconds.",
                },
                {
                  emoji: "📄",
                  title: "Food handler docs",
                  detail: "Store food handler certifications with expiry dates. Get reminders before they lapse.",
                },
                {
                  emoji: "🔐",
                  title: "Employee self-service",
                  detail: "Staff update their availability, view pay stubs, and request time off without calling you.",
                },
                {
                  emoji: "📊",
                  title: "Org chart",
                  detail: "FOH vs BOH, managers vs staff — your org is always visualized and up to date.",
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

        {/* Social proof placeholder */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Built for owners who run the floor <span style={{ color: "#8b5cf6" }}>and the back office.</span>
            </h2>
            <p className="text-lg mb-8" style={{ color: "#a1a1aa" }}>
              You&apos;re not just a restaurant owner — you&apos;re the manager, the HR department, and often the line cook.
              ZiggyHR is the only HR software that respects your time.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { stat: "10 min", label: "Average setup time" },
                { stat: "$59", label: "Per month, all inclusive" },
                { stat: "0", label: "Sales calls required" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-xl border" style={{ background: "#18181b", borderColor: "#27272a" }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: "#8b5cf6" }}>{s.stat}</div>
                  <div className="text-sm" style={{ color: "#a1a1aa" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          headline="HR software for restaurants that never sleeps."
          sub="$59/mo. Set up in 10 minutes. 14-day free trial."
        />
      </main>
      <Footer />
    </>
  );
}
