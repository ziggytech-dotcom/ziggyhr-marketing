import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ZiggyHR — HR Software for Small Business | $59/mo",
    template: "%s | ZiggyHR",
  },
  description:
    "ZiggyHR gives small businesses professional HR tools — employee directory, PTO tracking, onboarding checklists, and self-service — without the $250/mo enterprise price tag.",
  keywords: [
    "HR software small business",
    "employee management",
    "PTO tracking",
    "onboarding software",
    "BambooHR alternative",
    "Rippling alternative",
    "HR software $59",
  ],
  openGraph: {
    title: "ZiggyHR — HR that doesn't need an HR department",
    description:
      "BambooHR costs $250/mo. ZiggyHR costs $59. Same essential HR features — employee directory, PTO, onboarding, self-service.",
    url: "https://ziggyhr.com",
    siteName: "ZiggyHR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZiggyHR — HR that doesn't need an HR department",
    description: "BambooHR costs $250/mo. ZiggyHR costs $59. No contracts.",
  },
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#0f0a0a", color: "#ffffff", fontFamily: "'Space Grotesk', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
