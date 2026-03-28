import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Features — HR Tools Built for Small Business",
  description:
    "ZiggyHR features: People Management, Time Off, Onboarding, and Documents & Compliance. Everything a small business needs. Nothing it doesn't.",
};

const featureCategories = [
  {
    id: "people",
    emoji: "👥",
    title: "People Management",
    tagline: "Your whole team, organized in one place.",
    description:
      "Stop digging through spreadsheets and email threads to find basic employee information. ZiggyHR gives you a live, searchable directory for your entire team.",
    features: [
      {
        name: "Employee directory",
        detail: "Photos, roles, contact info, departments, start dates — all searchable, all up to date.",
      },
      {
        name: "Org chart",
        detail: "Auto-generated from your team data. Always accurate. Perfect for all-hands meetings.",
      },
      {
        name: "Role & department management",
        detail: "Organize employees into departments and roles. Filter and segment for reports.",
      },
      {
        name: "Employee profiles",
        detail: "Each employee has a full profile — contact, emergency contacts, job history, documents.",
      },
      {
        name: "Employee self-service",
        detail: "Employees update their own info. You review changes. No back-and-forth emails.",
      },
    ],
  },
  {
    id: "timeoff",
    emoji: "🏖️",
    title: "Time Off",
    tagline: "PTO tracking that actually works.",
    description:
      "No more PTO spreadsheets. No more 'how many days do I have left?' emails. ZiggyHR handles requests, approvals, and balances automatically.",
    features: [
      {
        name: "PTO request & approval",
        detail: "Employees request time off in the portal. You approve or deny with one click.",
      },
      {
        name: "Automatic balance tracking",
        detail: "Balances update the moment you approve a request. No manual math.",
      },
      {
        name: "Multiple PTO types",
        detail: "Vacation, sick, personal, holidays — track them all with separate balances.",
      },
      {
        name: "Team calendar view",
        detail: "See who's out when. Plan coverage before you approve.",
      },
      {
        name: "Accrual policies",
        detail: "Set up accrual rules by role or tenure. ZiggyHR handles the math.",
      },
    ],
  },
  {
    id: "onboarding",
    emoji: "✅",
    title: "Onboarding",
    tagline: "New hire-ready on day one. Without the chaos.",
    description:
      "Onboarding is where small businesses bleed the most time. ZiggyHR automates the checklist, collects the signatures, and tells you when everything is done.",
    features: [
      {
        name: "Onboarding checklists",
        detail: "Create templates for different roles. New hires get their checklist automatically.",
      },
      {
        name: "Document collection",
        detail: "Collect I-9s, W-4s, offer letters, and NDAs — all digitally, all tracked.",
      },
      {
        name: "E-signatures",
        detail: "New hires sign documents in the portal. You get notified when it's done.",
      },
      {
        name: "Completion tracking",
        detail: "See real-time progress. Chase the stragglers with one click.",
      },
      {
        name: "Welcome email",
        detail: "Auto-send a welcome email with portal access and their checklist on day one.",
      },
    ],
  },
  {
    id: "documents",
    emoji: "📄",
    title: "Documents & Compliance",
    tagline: "Your HR paper trail — digital, organized, secure.",
    description:
      "HR compliance is mostly paperwork. ZiggyHR makes that paperwork digital, searchable, and audit-ready — without a filing cabinet.",
    features: [
      {
        name: "Document storage",
        detail: "Store offer letters, NDAs, performance reviews, and handbooks in one place.",
      },
      {
        name: "Employee access control",
        detail: "Employees see only their documents. Managers see their team's. Admins see all.",
      },
      {
        name: "Document versioning",
        detail: "Track changes to policies and handbooks. Know which version each employee signed.",
      },
      {
        name: "Expiration reminders",
        detail: "Set reminders for documents that expire — certifications, licenses, contracts.",
      },
      {
        name: "Audit trail",
        detail: "Every document access and signature is logged. Ready for audits.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              HR features built for{" "}
              <span style={{ color: "#8b5cf6" }}>small business.</span>
            </h1>
            <p className="text-xl mb-8" style={{ color: "#a1a1aa" }}>
              Four pillars. One price. No bloat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {featureCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-4 py-2 rounded-lg border text-sm font-medium hover:border-violet-500/50 transition-colors"
                  style={{ borderColor: "#27272a", color: "#a1a1aa" }}
                >
                  {cat.emoji} {cat.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Feature categories */}
        {featureCategories.map((cat, i) => (
          <section
            key={cat.id}
            id={cat.id}
            className="py-24 px-4"
            style={{ background: i % 2 === 0 ? "#0f0a0a" : "#0d0810" }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-5xl mb-6">{cat.emoji}</div>
                  <h2 className="text-4xl font-bold mb-4 text-white">{cat.title}</h2>
                  <p className="text-xl mb-4 font-medium" style={{ color: "#8b5cf6" }}>{cat.tagline}</p>
                  <p className="text-lg leading-relaxed" style={{ color: "#a1a1aa" }}>{cat.description}</p>
                </div>
                <div className="space-y-4">
                  {cat.features.map((f) => (
                    <div key={f.name} className="p-5 rounded-xl border" style={{ background: "#18181b", borderColor: "#27272a" }}>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#8b5cf6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <div className="font-semibold text-white mb-1">{f.name}</div>
                          <div className="text-sm" style={{ color: "#a1a1aa" }}>{f.detail}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Pricing callout */}
        <section className="py-16 px-4 text-center border-y" style={{ borderColor: "#27272a" }}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">All of this for $59/mo.</h2>
            <p className="mb-6" style={{ color: "#a1a1aa" }}>
              BambooHR charges $250+/mo for the same features. Rippling won&apos;t even show you pricing without a sales call.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all hover:opacity-90"
              style={{ background: "#8b5cf6", color: "#fff" }}
            >
              See pricing →
            </Link>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
