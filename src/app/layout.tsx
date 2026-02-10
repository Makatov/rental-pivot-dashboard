import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Lora, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "800"], variable: "--font-playfair" });
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-lora" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Flimod — Rental Pivot",
  description: "Fashion rental startup: 3 models (RO1, ED1, ED2) pre-positioned in US. Team dashboard with financials, tasks & brand demos.",
  openGraph: {
    title: "Flimod — Rental Pivot",
    description: "Fashion rental startup: 3 models (RO1, ED1, ED2) pre-positioned in US. Team dashboard with financials, tasks & brand demos.",
    siteName: "Flimod",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Flimod — Rental Pivot",
    description: "Fashion rental startup: 3 models pre-positioned in US. Dashboard, tasks & brand demos.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${lora.variable} ${dmSans.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
