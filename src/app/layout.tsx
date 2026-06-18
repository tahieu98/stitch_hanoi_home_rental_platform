import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AutumnHanoi — Căn hộ nghỉ dưỡng cao cấp tại Hà Nội",
    template: "%s | AutumnHanoi",
  },
  description:
    "Trải nghiệm không gian sống sang trọng, mang đậm chất thơ của thủ đô. Căn hộ cao cấp tại Hoàn Kiếm, Tây Hồ và Ba Đình.",
  keywords: ["căn hộ cao cấp Hà Nội", "cho thuê nhà Hà Nội", "nghỉ dưỡng cao cấp", "AutumnHanoi"],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "AutumnHanoi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${hankenGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
