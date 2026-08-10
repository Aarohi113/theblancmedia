import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "THEBLANCMEDIA | Modern Digital Marketing & Web Agency",
  description: "THEBLANCMEDIA is an editorial digital marketing agency specializing in social media management, PPC advertising, SEO/GMB, and custom website development.",
  keywords: ["marketing agency", "theblancmedia", "digital marketing", "PPC", "SEO", "social media management", "website development", "Next.js"],
  authors: [{ name: "theBlancMedia" }],
  openGraph: {
    title: "THEBLANCMEDIA | Modern Digital Marketing Agency",
    description: "Marketing that makes brands impossible to ignore.",
    url: "https://theblancmedia.com",
    siteName: "THEBLANCMEDIA",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-black min-h-screen flex flex-col font-body antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
