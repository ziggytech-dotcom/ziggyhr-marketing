import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  sub?: string;
}

export default function CTASection({
  headline = "Try ZiggyHR free for 14 days.",
  sub = "No credit card required. No sales call. Cancel anytime.",
}: CTASectionProps) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{headline}</h2>
        <p className="text-lg mb-10" style={{ color: "#a1a1aa" }}>{sub}</p>
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
            See all features
          </Link>
        </div>
        <p className="mt-6 text-sm" style={{ color: "#a1a1aa" }}>
          Join hundreds of small businesses that ditched the $250/mo enterprise tools.
        </p>
      </div>
    </section>
  );
}
