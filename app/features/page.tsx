import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  { title: `Employee Profiles`, desc: `A complete record for every employee. Contact info, employment history, documents, compensation, and performance.`, bullets: [`Full employee profiles`, `Document storage`, `Employment history`, `Compensation records`, `Custom fields`, `Role-based access control`] },
  { title: `PTO Tracking`, desc: `Employees request time off, managers approve, and balances update automatically. No spreadsheets.`, bullets: [`PTO request and approval`, `Multiple leave types`, `Accrual policy configuration`, `Balance tracking`, `Calendar view of team`, `Manager notifications`] },
  { title: `Onboarding Checklists`, desc: `Create structured onboarding checklists for new hires. Assign tasks, set due dates, and track completion.`, bullets: [`Custom checklist templates`, `Task assignment`, `Due date tracking`, `Pre-boarding access`, `E-signature for offer letters`, `Document collection`] },
  { title: `Offer Letters`, desc: `Generate professional offer letters. Send via e-signature. Signed copies stored in the employee record.`, bullets: [`Offer letter templates`, `Custom fields`, `E-signature via ZiggyDocs`, `Signed copy auto-stored`, `Offer expiry settings`, `Offer analytics`] },
  { title: `Org Chart`, desc: `A live org chart that updates automatically as you add employees and set reporting relationships.`, bullets: [`Auto-generated from data`, `Drag-to-rearrange`, `Department grouping`, `Photo display`, `Export to PNG/PDF`, `Shareable link`] },
  { title: `Performance Reviews`, desc: `Run structured performance reviews on your own schedule with self-assessments and manager reviews.`, bullets: [`Review cycle configuration`, `Self-assessment forms`, `Manager review forms`, `Custom rating scales`, `Goal setting`, `Historical archive`] },
]

export default function FeaturesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8b5cf6]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8b5cf6] mb-4">Features</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Everything ZiggyHR can do</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-8">Every feature explained. No fluff.</p>
          <Link href="https://app.ziggyhr.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b5cf6] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all">
            Start Free Trial — 14 days free
          </Link>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {features.map((f, i) => (
            <div key={f.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">{f.title}</h2>
                <p className="text-lg text-[#b3b3b3] leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[#b3b3b3]">
                      <div className="w-5 h-5 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-[#111111] border border-[#1f1f1f] rounded-2xl aspect-video flex items-center justify-center">
                <p className="text-[#555] text-sm">Screenshot coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to see it in action?</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14-day free trial. No credit card required.</p>
          <Link href="https://app.ziggyhr.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#8b5cf6] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
