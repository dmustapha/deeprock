import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Deeprock | Institutional Real-World Asset Platform",
  description:
    "Institutional-grade real world asset investments with biometric authentication on Avalanche. No gas fees. No seed phrases. Just secure, compliant investing.",
  keywords: [
    "Deeprock",
    "RWA",
    "Real World Assets",
    "Avalanche",
    "DeFi",
    "Biometric",
    "WebAuthn",
    "Investment",
  ],
  manifest: "/manifest.json",
  other: { "ory-verify": "orynth-bcf5db6aa1ea4594b2a876945c8624a6" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${outfit.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
