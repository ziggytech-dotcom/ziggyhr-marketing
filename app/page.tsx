'use client'
import Link from 'next/link'
import { useState } from 'react'

const features = [
  { title: 'Employee Profiles', desc: 'A complete record for every employee — contact info, documents, emergency contacts, and employment history. Everything in one place.' },
  { title: 'PTO Tracking', desc: 'Employees request time off, managers approve it, balances update automatically. No more spreadsheets, no more back-and-forth emails.' },
  { title: 'Onboarding Checklists', desc: 'Create repeatable onboarding workflows. New hire completes tasks in their portal. You see progress in real time. Nothing falls through the cracks.' },
  { title: 'Offer Letters', desc: 'Generate professional offer letters from templates. Collect e-signatures before day one. Full audit trail on every document.' },
  { title: 'Org Chart', desc: 'Auto-generated org chart that updates as your team grows. Share it with new hires so they understand the team before they start.' },
  { title: 'Performance Reviews', desc: 'Schedule and run performance reviews without the chaos. Templates, self-assessments, and manager reviews — all in one workflow.' },
]

const faqs = [
  { q: 'How is ZiggyHR different from BambooHR?', a: 'BambooHR starts at $250/month for a 10-person team. ZiggyHR covers up to 15 employees for $49/month. Same core features — onboarding, PTO, org chart, offer letters — without the enterprise price.' },
  { q: 'What happens when I exceed the employee limit?', a: 'On Starter, you can have up to 15 employees. After that, it\'s $5 per additional employee per month. Pro covers up to 50 employees for $79/mo, with $4 per employee after that.' },
  { q: 'Does ZiggyHR handle payroll?', a: 'Not directly — ZiggyHR is your HR management layer. For payroll, we integrate with ZiggyPayroll so your HR data flows directly into payroll runs.' },
  { q: 'Can employees access their own profiles?', a: 'Yes. Each employee gets their own secure login to view their profile, request PTO, complete onboarding tasks, and download documents. No digging through email.' },
  { q: 'Is our employee data secure?', a: 'Yes. All data is encrypted at rest and in transit. Row-level security ensures each employee only sees their own data. 2FA available for all accounts.' },
  { q: 'How does the free trial work?', a: '14 days of full Pro access. No credit card required. After 14 days, choose a plan or your account moves to read-only.' },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-2xl tracking-tight">
              <span style={{ color: '#8b5cf6' }}>Ziggy</span><span className="text-white">HR</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 text-xs text-[#b3b3b3]">
              {[['Features', '/features'], ['Pricing', '/pricing'], ['Suite', '/suite'], ['vs BambooHR', '/compare/bamboohr'], ['vs Gusto HR', '/compare/gusto-hr']].map(([label, href]) => (
                <Link key={label} href={href} className="px-3 py-2 hover:text-white transition-colors rounded-lg hover:bg-[#1a1a1a]">{label}</Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link href="https://app.ziggyhr.com/login" className="hidden md:block text-sm text-[#b3b3b3] hover:text-white transition-colors">Sign In</Link>
              <Link href="https://app.ziggyhr.com/signup" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8b5cf6] text-white rounded-xl font-semibold text-sm hover:bg-[#8b5cf6]/90 hover:scale-105 transition-all">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#8b5cf6]/8 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] text-xs font-semibold uppercase tracking-widest mb-8">
            ZiggyHR — HR Software for Small Teams
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            HR software built for teams that are <span style={{ color: '#8b5cf6' }}>actually small</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#b3b3b3] max-w-3xl mx-auto leading-relaxed mb-10">
            BambooHR starts at $250/month. For a 10-person team. We built the same core HR tools &mdash; onboarding, PTO tracking, org chart, offer letters &mdash; for $49/mo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="https://app.ziggyhr.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8b5cf6] text-white rounded-xl font-semibold text-lg hover:bg-[#8b5cf6]/90 hover:scale-105 transition-all">
              Start Free Trial
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] rounded-xl font-semibold text-lg hover:bg-[#8b5cf6]/20 transition-all">
              See Features
            </Link>
          </div>
          <p className="text-sm text-[#b3b3b3]/60">14-day free trial · No credit card required · Cancel anytime</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-[#1f1f1f]">
            {['$49/mo for up to 15 employees', '80% cheaper than BambooHR', 'Full onboarding workflows', 'Support from the team that built it'].map((fact) => (
              <div key={fact} className="flex items-center gap-2 text-sm text-[#b3b3b3]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product preview placeholder */}
      <section className="py-16 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl border border-[#1f1f1f] overflow-hidden bg-[#111111]" style={{ aspectRatio: '16/9' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/5 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <p className="text-white font-semibold text-lg">Product demo coming soon</p>
                <p className="text-[#b3b3b3] text-sm mt-1">See ZiggyHR in action</p>
                <Link href="https://app.ziggyhr.com/signup" className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-[#8b5cf6] text-white rounded-lg text-sm font-medium hover:bg-[#8b5cf6]/90 transition-colors">Start free trial instead</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0c0f14] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8b5cf6] mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything your team needs. Nothing you don&apos;t.</h2>
            <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto leading-relaxed">Skip the enterprise bloat. ZiggyHR gives small teams the HR tools they actually use — without the price tag that assumes you have an HR department.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 md:p-8 hover:border-[#8b5cf6]/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center mb-5 group-hover:bg-[#8b5cf6]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-[#b3b3b3] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/features" className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] rounded-xl font-semibold hover:bg-[#8b5cf6]/20 transition-all">View all features</Link>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0d1828] to-[#080c10]">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#8b5cf6]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#8b5cf6]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8b5cf6] mb-4">Our story</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">We built this because $250/mo is insane for 10 people</h2>
          <div className="space-y-6 text-lg text-[#b3b3b3] leading-relaxed">
            <p>BambooHR quoted us $250+ a month. We&apos;re a small team. We don&apos;t need enterprise HR software — we need onboarding checklists, PTO tracking, and offer letter templates.</p>
            <p>We built something that covers everything small teams actually need — for $49/month. Not $250. Not $150. $49/month flat, up to 15 employees.</p>
            <p className="text-white font-medium">That&apos;s ZiggyHR. Built because small teams deserve real HR software at a fair price.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '$49/mo', label: 'Starting price', color: '#8b5cf6' },
              { value: '15 employees', label: 'On Starter plan', color: '#0ea5e9' },
              { value: 'Full HR suite', label: 'No feature gates', color: '#f97316' },
              { value: '14 days', label: 'Free to try', color: '#84cc16' },
            ].map((item, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center hover:border-[#8b5cf6]/30 transition-colors">
                <p className="text-2xl font-bold mb-1" style={{ color: item.color }}>{item.value}</p>
                <p className="text-sm text-[#b3b3b3]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0d0d0d] via-[#0a0e14] to-[#0d0d0d]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8b5cf6] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, honest pricing</h2>
          <p className="text-lg text-[#b3b3b3] mb-12 max-w-2xl mx-auto leading-relaxed">BambooHR charges $250+/mo. Gusto HR charges $40+/mo per employee. We cover 15 employees for $49/mo — flat.</p>

          {/* Competitor comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {[
              { name: 'BambooHR', price: '$250+/mo', note: 'For a 10-person team' },
              { name: 'Gusto HR', price: '$40+/mo per employee', note: 'Plus base fees' },
            ].map((comp) => (
              <div key={comp.name} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-left opacity-60">
                <p className="text-sm font-semibold text-[#b3b3b3] mb-1">{comp.name}</p>
                <p className="text-xl font-bold text-white line-through decoration-red-500">{comp.price}</p>
                <p className="text-xs text-[#b3b3b3] mt-1">{comp.note}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 text-left">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-bold text-white">$49</span><span className="text-[#b3b3b3] mb-2">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">Up to 15 employees · +$5/additional</p>
              <Link href="https://app.ziggyhr.com/signup" className="block w-full text-center px-6 py-3 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] rounded-xl font-semibold hover:bg-[#8b5cf6]/20 transition-all">Start free trial</Link>
            </div>
            <div className="bg-[#111111] border-2 border-[#8b5cf6]/40 rounded-2xl p-8 text-left relative shadow-[0_0_40px_rgba(139,92,246,0.12)]">
              <div className="absolute -top-3 left-6"><span className="px-3 py-1 bg-[#8b5cf6] text-white text-xs font-bold rounded-full uppercase tracking-wide">Most Popular</span></div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-bold text-white">$79</span><span className="text-[#b3b3b3] mb-2">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">Up to 50 employees · +$4/additional</p>
              <Link href="https://app.ziggyhr.com/signup" className="block w-full text-center px-6 py-3 bg-[#8b5cf6] text-white rounded-xl font-semibold hover:bg-[#8b5cf6]/90 transition-all">Start free trial</Link>
            </div>
          </div>
          <Link href="/pricing" className="inline-flex items-center gap-2 text-[#8b5cf6] hover:underline font-medium">
            View full pricing and compare plans
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-4 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8b5cf6] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Common questions</h2>
            <p className="text-lg text-[#b3b3b3]">Everything you need to know before you start.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#8b5cf6]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#8b5cf6] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-[#b3b3b3] mt-8">More questions? <Link href="/faq" className="text-[#8b5cf6] hover:underline">View full FAQ</Link></p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0c1520] to-[#080c10]">
        <div className="absolute inset-0 bg-[#8b5cf6]/4 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Ready to stop overpaying<br /><span style={{ color: '#8b5cf6' }}>for HR?</span></h2>
          <p className="text-xl text-[#b3b3b3] mb-10 leading-relaxed">Everything your team needs. Nothing you don&apos;t.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://app.ziggyhr.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#8b5cf6] text-white rounded-xl font-bold text-xl hover:bg-[#8b5cf6]/90 hover:scale-105 transition-all shadow-[0_0_40px_rgba(139,92,246,0.3)]">
              Start Free Trial
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] rounded-xl font-bold text-xl hover:bg-[#8b5cf6]/20 transition-all">View Pricing</Link>
          </div>
          <p className="text-sm text-[#b3b3b3]/60 mt-6">14-day free trial · No credit card required · Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f1f1f] py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-4"><span style={{ color: '#8b5cf6' }}>Ziggy</span><span className="text-white">HR</span></p>
              <p className="text-sm text-[#b3b3b3] leading-relaxed">HR software built for teams that are actually small.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Product</p>
              {[['Features', '/features'], ['Pricing', '/pricing'], ['Suite', '/suite'], ['Changelog', '/changelog'], ['Security', '/security']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Compare</p>
              {[['vs BambooHR', '/compare/bamboohr'], ['vs Gusto HR', '/compare/gusto-hr'], ['FAQ', '/faq'], ['Blog', '/blog']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Legal</p>
              {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Policy', '/cookies']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div className="border-t border-[#1f1f1f] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#b3b3b3]">© 2026 ZiggyTech Ventures LLC</p>
            <Link href="https://ziggybusiness.com" className="text-sm text-[#b3b3b3] hover:text-white transition-colors">Part of the ZiggyTech Business Suite →</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
