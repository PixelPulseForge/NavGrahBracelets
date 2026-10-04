// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NavGrah Bracelets",
    template: "%s · NavGrah Bracelets",
  },
  description:
    "Personalized gemstone bracelets selected according to your kundli and astrologer recommendations.",
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-[#faf8f4] text-[#241c16] antialiased">
        {/* Skip navigation */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-full focus:bg-[#211b17] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-[#a47735] focus:ring-offset-2"
        >
          Skip to content
        </a>

        {/* Header */}
        <header className="border-b border-[#e7dfd5] bg-white">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
            <a
              href="/"
              aria-label="NavGrah Bracelets home"
              className="inline-flex items-center"
            >
              <Image
                src="/logo.png"
                alt="NavGrah Bracelets"
                width={180}
                height={60}
                priority
                className="h-auto w-[140px] object-contain sm:w-[170px]"
              />
            </a>
          </div>
        </header>

        {/* Main content */}
        <div id="main" className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
