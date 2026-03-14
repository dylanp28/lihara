import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { PasswordGate } from "@/components/layout/PasswordGate";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LIHARA — Creativity. Refined.",
    template: "%s | LIHARA",
  },
  description:
    "Unisex jewelry for creative professionals. Minimalist designs crafted from premium stainless steel. $30–$70.",
  keywords: [
    "jewelry",
    "unisex jewelry",
    "minimalist jewelry",
    "stainless steel jewelry",
    "creative professionals",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        <PasswordGate>
          <CartProvider>
            <AnnouncementBar />
            <Header />
            <main className="min-h-[60vh]">{children}</main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </PasswordGate>
      </body>
    </html>
  );
}
