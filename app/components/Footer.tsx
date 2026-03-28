import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: "#27272a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1 text-xl font-bold mb-4">
              <span style={{ color: "#ff1744" }}>Ziggy</span>
              <span style={{ color: "#8b5cf6" }}>HR</span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
              HR that doesn&apos;t need an HR department. $59/mo, no contracts, cancel anytime.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Features</Link></li>
              <li><Link href="/pricing" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Pricing</Link></li>
              <li><Link href="/vs/bamboohr" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>vs BambooHR</Link></li>
              <li><Link href="/vs/rippling" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>vs Rippling</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Industries</h4>
            <ul className="space-y-2">
              <li><Link href="/small-business" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Small Business</Link></li>
              <li><Link href="/restaurants" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Restaurants</Link></li>
              <li><Link href="/retail" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Retail</Link></li>
              <li><Link href="/contractors" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Contractors</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Get started</Link></li>
              <li><a href="mailto:hello@ziggyhr.com" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Contact</a></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Privacy</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "#27272a" }}>
          <p className="text-sm" style={{ color: "#a1a1aa" }}>
            © {new Date().getFullYear()} ZiggyHR. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "#a1a1aa" }}>
            Built for small businesses. Not enterprises.
          </p>
        </div>
      </div>
    </footer>
  );
}
