import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});


export const metadata: Metadata = {
  title: "FightClub: Shiyu",
  description: "Tournament platform for Zenless Zone Zero and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-[#0F1117] text-white font-sans">
        <Header />
        <main className="bg-[#111219] mx-auto px-4 pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
