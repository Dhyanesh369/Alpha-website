import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/animations/CustomCursor";
import PageTransition from "@/components/animations/PageTransition";
import GlobalLoader from "@/components/ui/GlobalLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALPHA | Premium Men's Grooming",
  description: "Premium organic grooming built for men who demand sharper looks and real results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className={`${inter.className} min-h-full flex flex-col bg-[#0A0A0A] text-foreground`}>
        <GlobalLoader />
        <CustomCursor />
        <SmoothScroll />
        <Navbar />
        <main className="flex-grow flex flex-col relative z-10">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
