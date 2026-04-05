'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const starterFeatures = [
  `Up to 15 employees`,
  `Employee profiles`,
  `PTO tracking`,
  `Onboarding checklists`,
  `Offer letters (e-signature)`,
  `Org chart`,
  `Team directory`,
  `Email support`,
]
const proFeatures = [
  `Everything in Starter`,
  `Up to 50 employees`,
  `Performance reviews`,
  `Benefits tracking`,
  `Advanced reporting`,
  `Unlimited custom fields`,
  `API access`,
  `Priority support`,
  `SSO (SAML)`,
]
const compRows = [
  { feature: `Employees included`, starter: `Up to 15`, pro: `Up to 50` },
  { feature: `Employee profiles`, starter: true, pro: true },
  { feature: `PTO tracking`, starter: true, pro: true },
  { feature: `Onboarding checklists`, starter: true, pro: true },
  { feature: `Offer letters (e-sign)`, starter: true, pro: true },
  { feature: `Org chart`, starter: true, pro: true },
  { feature: `Team directory`, starter: true, pro: true },
  { feature: `Performance reviews`, starter: false, pro: true },
  { feature: `Benefits tracking`, starter: false, pro: true },
  { feature: `Custom fields`, starter: `5 fields`, pro: `Unlimited` },
  { feature: `API access`, starter: false, pro: true },
  { feature: `Priority support`, starter: false, pro: true },
]
const faqs = [
  { q: `How many employees can I add?`, a: `Starter supports up to 15 employees at $49/mo. Pro supports up to 50 employees at $79/mo. For teams larger than 50, contact us for custom pricing.` },
  { q: `Does ZiggyHR handle payroll?`, a: `ZiggyHR is for people management. For payroll, ZiggyPayroll handles 1099 contractors and W-2 employees — the two apps integrate natively as part of the ZiggyTech Suite.` },
  { q: `Can employees access their own profiles?`, a: `Yes. Employees can log in to view their profile, request PTO, complete onboarding tasks, and access their offer letters. Managers can see their direct reports.` },
  { q: `How do offer letters work?`, a: `Use the offer letter template editor to create your standard template. Fill in the custom fields and send via e-signature. The signed offer is automatically stored in the employee record.` },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8b5cf6] mb-4">Pricing</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Simple, honest pricing</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto">No seat traps. No hidden fees. Just a price that works.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-6xl font-bold text-white">$49</span><span className="text-[#b3b3b3] mb-2 text-lg">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">Up to 15 employees</p>
              <Link href="https://app.ziggyhr.com/signup" className="block w-full text-center px-6 py-3.5 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] rounded-xl font-semibold hover:bg-[#8b5cf6]/20 transition-all mb-6">Start free trial</Link>
              <ul className="space-y-3">{starterFeatures.map((f) => <li key={f} className="flex items-start gap-3 text-[#b3b3b3] text-sm"><svg className="w-4 h-4 text-[#8b5cf6] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>{f}</li>)}</ul>
            </div>
            <div className="bg-[#111111] border-2 border-[#8b5cf6]/40 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-6"><span className="px-3 py-1 bg-[#8b5cf6] text-white text-xs font-bold rounded-full uppercase">Most Popular</span></div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-6xl font-bold text-white">$79</span><span className="text-[#b3b3b3] mb-2 text-lg">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">Up to 50 employees</p>
              <Link href="https://app.ziggyhr.com/signup" className="block w-full text-center px-6 py-3.5 bg-[#8b5cf6] text-white rounded-xl font-semibold hover:opacity-90 transition-all mb-6">Start free trial</Link>
              <ul className="space-y-3">{proFeatures.map((f) => <li key={f} className="flex items-start gap-3 text-[#b3b3b3] text-sm"><svg className="w-4 h-4 text-[#8b5cf6] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>{f}</li>)}</ul>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Feature comparison</h2>
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-3 bg-[#1a1a1a] border-b border-[#1f1f1f]">
              <div className="p-4 text-sm font-semibold text-[#b3b3b3]">Feature</div>
              <div className="p-4 text-sm font-semibold text-white text-center">Starter</div>
              <div className="p-4 text-sm font-semibold text-[#8b5cf6] text-center">Pro</div>
            </div>
            {compRows.map((r) => (
              <div key={r.feature} className="grid grid-cols-3 border-b border-[#1f1f1f] last:border-0 hover:bg-[#151515]">
                <div className="p-4 text-sm text-[#b3b3b3]">{r.feature}</div>
                <div className="p-4 text-center">
                  {typeof r.starter === 'boolean' ? (r.starter ? <svg className="w-5 h-5 text-[#8b5cf6] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <svg className="w-5 h-5 text-[#555] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>) : <span className="text-sm text-[#b3b3b3]">{r.starter}</span>}
                </div>
                <div className="p-4 text-center">
                  {typeof r.pro === 'boolean' ? (r.pro ? <svg className="w-5 h-5 text-[#8b5cf6] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <svg className="w-5 h-5 text-[#555] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>) : <span className="text-sm text-[#8b5cf6] font-medium">{r.pro}</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 mb-8 text-center">
            <p className="text-[#b3b3b3] text-sm mb-2">vs the competition</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div><p className="text-[#b3b3b3] text-sm">BambooHR</p><p className="text-2xl font-bold text-white">$250<span className="text-base text-[#b3b3b3]">/mo</span></p></div>
              <div><p className="text-[#8b5cf6] text-sm font-medium">ZiggyHR</p><p className="text-2xl font-bold text-[#8b5cf6]">$49<span className="text-base text-[#b3b3b3]">/mo</span></p></div>
              <div><p className="text-[#b3b3b3] text-sm">Gusto HR</p><p className="text-2xl font-bold text-white">$40<span className="text-base text-[#b3b3b3]">/mo</span></p></div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Pricing FAQ</h2>
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#8b5cf6] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && <div className="px-6 pb-6"><p className="text-[#b3b3b3] leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Start your free trial today</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14 days free. No credit card required.</p>
          <Link href="https://app.ziggyhr.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#8b5cf6] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
