import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";



import GridBackground from "@/components/GridBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BHARATH'S BOT",
  description: "AI Command Center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
     <body className="min-h-full flex flex-col bg-[#05020a] text-white overflow-hidden">

  {/* Cyber Purple Grid Background */}
  <GridBackground />

 
  

  {/* Main App */}
  <div className="relative z-10 flex-1">
    {children}
  </div>

</body>
    </html>
  );
}