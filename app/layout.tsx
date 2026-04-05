import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { CookieBanner } from "@/app/components/CookieBanner"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: { default: "ZiggyHR — HR software built for teams that are actually small", template: "%s | ZiggyHR" },
  description: "HR software built for teams that are actually small. Part of the ZiggyTech Business Suite.",
  openGraph: { title: "ZiggyHR — HR software built for teams that are actually small", description: "HR software built for teams that are actually small.", siteName: "ZiggyHR", url: "https://ziggyhr.com" },
  icons: { icon: '/favicon.ico' },
  metadataBase: new URL("https://ziggyhr.com"),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-[#0a0a0a] text-white antialiased" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
