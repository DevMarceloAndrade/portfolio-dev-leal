import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from "@/components/header";
import Footer from "@/components/footer";


const tomorrow = Tomorrow({ 
  subsets: ["latin"], 
  weight: ["400"] 
});

export const metadata: Metadata = {
  title: "Portifolio Dev Marcelo Andrade",
  description: "Portifolio do desenvolvedor Marcelo Andrade",
  metadataBase: new URL("https://marceloandradedev.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <GoogleTagManager gtmId="GTM-M6D4ZBFG" />
      <GoogleAnalytics gaId="G-W09Q9BNGBR" />
      <body
        className={`${tomorrow.className} antialiased flex justify-center`}
      >
        <main className="container flex flex-col justify-between">
          <Header/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
