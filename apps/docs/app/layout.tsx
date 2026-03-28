import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Piece UI — Modern React Component Library",
    template: "%s | Piece UI",
  },
  description:
    "A futuristic, dark-mode React component library built with TypeScript, Tailwind CSS, and Framer Motion. 17 production-ready components for modern web apps.",
  keywords: ["react", "component library", "typescript", "tailwind css", "framer motion", "dark mode", "ui components"],
  authors: [{ name: "Aymane Atigui" }],
  openGraph: {
    title: "Piece UI — Modern React Component Library",
    description: "17 production-ready components. TypeScript. Tailwind. Framer Motion.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piece UI — Modern React Component Library",
    description: "17 production-ready components. TypeScript. Tailwind. Framer Motion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text-primary min-h-screen`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
