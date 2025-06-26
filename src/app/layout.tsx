import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en">
      <body className={`${montserrat.className} bg-[#0F1117] text-white`}>
        <Header />
        <main className="bg-[#111219] mx-auto px-4 pt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
