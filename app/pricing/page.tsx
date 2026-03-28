import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Pricing — $59/mo, All Inclusive",
  description:
    "ZiggyHR is $59/month. Unlimited employees. All features included. No per-seat pricing, no contracts, no sales calls. 14-day free trial.",
};

const faqs = [
  {
    q: "How many employees are included?",
    a: "Unlimited. We don't do per-seat pricing. $59/mo covers your whole team, whether that's 5 people or 150.",
  },
  {
    q: "Is self-service included?",
    a: "Yes. Every plan includes the employee self-service portal. Employees can update their own info, request PTO, download documents, and more — all included at $59/mo.",
  },
  {
    q: "What PTO types can I track?",
    a: "All of them. Vacation, sick leave, personal days, floating holidays, unpaid leave — you define the types and policies. We track the balances.",
  },
  {
    q: "Do I need a credit card for the trial?",
    a: "No. Start your 14-day free trial with just an email. No credit card required until you decide to keep it.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no cancellation fees. Cancel from your account settings at any time — you won't be charged again.",
  },
  {
    q: "What happens after the trial?",
    a: "After 14 days, add a credit card to continue at $59/mo. If you cancel during the trial, you owe nothing.",
  },
  {
    q: "Is onboarding really included?",
    a: "Yes. Full onboarding workflows, checklists, e-signatures, document collection — all included. No add-ons.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Pay annually and get 2 months free ($590/year instead of $708). Switch in your account settings anytime.",
  },
  {
    q: "How is ZiggyHR different from BambooHR?",
    a: "We have the same essential HR features at one-fifth the price. BambooHR starts at $250+/mo. ZiggyHR is $59/mo. No sales call, no long-term contract.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "#1e1433", color: "#8b5cf6" }}>
              Pricing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              $59/month. <br />
              <span style={{ color: "#a1a1aa" }}>That&apos;s it.</span>
            </h1>
            <p className="text-xl" style={{ color: "#a1a1aa" }}>
              One plan, all features, unlimited employees. <br />
              BambooHR charges $250+/mo. Rippling won&apos;t show you pricing at all.
            </p>
          </div>
        </section>

        {/* Pricing card */}
        <section className="py-12 px-4">
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl" style={{ background: "linear-gradient(135deg, #8b5cf6, #ff1744)" }} />
              <div className="relative rounded-2xl p-8" style={{ background: "#18181b" }}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      <span style={{ color: "#ff1744" }}>Ziggy</span>
                      <span style={{ color: "#8b5cf6" }}>HR</span>
                    </h2>
                    <p className="text-sm mt-1" style={{ color: "#a1a1aa" }}>Everything. For everyone.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-bold text-white">$59</div>
                    <div className="text-sm" style={{ color: "#a1a1aa" }}>/month</div>
                  </div>
                </div>

                <div className="my-6 py-3 px-4 rounded-lg text-sm" style={{ background: "#1e1433", color: "#8b5cf6" }}>
                  💡 Annual billing: <strong>$590/year</strong> — 2 months free
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Unlimited employees",
                    "Employee directory",
                    "PTO tracking",
                    "Onboarding checklists",
                    "Self-service portal",
                    "Org chart",
                    "Document storage",
                    "E-signatures",
                    "Team calendar",
                    "Compliance docs",
                    "14-day free trial",
                    "No contracts",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "#a1a1aa" }}>
                      <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#8b5cf6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="#"
                  className="block w-full text-center py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90 mb-3"
                  style={{ background: "#8b5cf6" }}
                >
                  Start free trial — no credit card
                </Link>
                <p className="text-center text-xs" style={{ color: "#a1a1aa" }}>
                  14-day free trial. Cancel anytime. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison bar */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">You&apos;re not paying for their enterprise.</h2>
            <div className="space-y-4">
              {[
                { name: "ZiggyHR", price: "$59/mo", bar: 20, color: "#8b5cf6" },
                { name: "BambooHR", price: "$250+/mo", bar: 84, color: "#27272a" },
                { name: "Rippling", price: "Custom quote", bar: 100, color: "#27272a" },
              ].map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-white">{item.name}</span>
                    <span style={{ color: item.color === "#8b5cf6" ? "#8b5cf6" : "#a1a1aa" }}>{item.price}</span>
                  </div>
                  <div className="w-full h-3 rounded-full" style={{ background: "#27272a" }}>
                    <div
                      className="h-3 rounded-full transition-all"
                      style={{ width: `${item.bar}%`, background: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4 flex-wrap justify-center">
              <Link href="/vs/bamboohr" className="text-sm hover:text-white transition-colors underline" style={{ color: "#8b5cf6" }}>
                Full comparison vs BambooHR →
              </Link>
              <Link href="/vs/rippling" className="text-sm hover:text-white transition-colors underline" style={{ color: "#8b5cf6" }}>
                Full comparison vs Rippling →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4" style={{ background: "#0d0810" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-6 rounded-xl border" style={{ background: "#18181b", borderColor: "#27272a" }}>
                  <h3 className="font-semibold text-white mb-3">{faq.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-white">Stop overpaying for HR software.</h2>
            <p className="text-lg mb-8" style={{ color: "#a1a1aa" }}>
              $59/mo. 14-day free trial. No credit card. No sales call.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all hover:opacity-90"
              style={{ background: "#8b5cf6", color: "#fff" }}
            >
              Start your free trial
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
