import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-body",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Marcelo Leal | Portfólio Full Stack",
  description:
    "Portfólio de Marcelo Leal, desenvolvedor full stack com foco em interfaces modernas, back-end robusto e produtos digitais orientados a resultado.",
  metadataBase: new URL("https://marceloandradedev.vercel.app"),
  openGraph: {
    title: "Marcelo Leal | Portfólio Full Stack",
    description:
      "Projetos reais de front-end e back-end com foco em performance, experiência do usuário e engenharia de produto.",
    url: "https://marceloandradedev.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcelo Leal | Portfólio Full Stack",
    description:
      "Interfaces e APIs construídas para produto, escala e conversão.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-M6D4ZBFG" />
      <GoogleAnalytics gaId="G-W09Q9BNGBR" />
      <body className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable}`}>
        <div className="app-tech-bg" aria-hidden>
          <div className="app-tech-particles" />
          <div className="app-tech-scanline" />
        </div>
        <div className="layout-shell">
          <Header />
          <main className="layout-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
