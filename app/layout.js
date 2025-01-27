'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Buy me a COFFEE",
  description: "Crowdfunding App to support your FAV developer!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-['-apple-system','San Francisco']">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <SessionWrapper>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
          <Navbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
