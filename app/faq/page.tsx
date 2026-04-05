'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const faqs = [
  { q: `How many employees can I add?`, a: `Starter supports up to 15 employees at $49/mo. Pro supports up to 50 employees at $79/mo. For teams larger than 50, contact us for custom pricing.` },
  { q: `Does ZiggyHR handle payroll?`, a: `ZiggyHR is for people management. For payroll, ZiggyPayroll handles 1099 contractors and W-2 employees — the two apps integrate natively as part of the ZiggyTech Suite.` },
  { q: `Can employees access their own profiles?`, a: `Yes. Employees can log in to view their profile, request PTO, complete onboarding tasks, and access their offer letters. Managers can see their direct reports.` },
  { q: `How do offer letters work?`, a: `Use the offer letter template editor to create your standard template. Fill in the custom fields and send via e-signature. The signed offer is automatically stored in the employee record.` },
  { q: `Is performance review data private?`, a: `Yes. Performance review data has fine-grained access controls. Managers see reviews for their direct reports. Employees see only their own reviews. HR admins have full access.` },
  { q: `Can I migrate from BambooHR?`, a: `Yes. ZiggyHR supports CSV import for employee data. We also offer a free migration call for Pro plan users to help transfer your data from BambooHR.` },
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8b5cf6] mb-4">FAQ</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Frequently asked questions</h1>
          <p className="text-xl text-[#b3b3b3]">Everything you need to know about ZiggyHR.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#8b5cf6]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#8b5cf6] flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {open === i && <div className="px-6 md:px-8 pb-6 md:pb-8"><p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#8b5cf6]/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
            <p className="text-[#b3b3b3] mb-6">Our team is happy to help.</p>
            <Link href="https://app.ziggyhr.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b5cf6] text-white rounded-xl font-semibold hover:opacity-90 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
