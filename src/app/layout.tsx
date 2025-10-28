import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderMobile from "@/components/HeaderMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Certificat PEB - Wallonie | Certificateur PEB agréé",
  description:
    "Certificats PEB rapides et fiables en Wallonie. Certificats pour vente ou location. Intervention sous 3-5 jours, remise sous 48h. Namur, Liège, Hainaut, Brabant wallon, Luxembourg.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-50`}
      >
        <HeaderMobile />
        <div className="pb-20 md:pb-0">{children}</div>
      </body>
    </html>
  );
}
