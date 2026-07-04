import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Swarikaro | Apna Safar Apne Log",
    template: "%s | Swarikaro",
  },
  description: "Rent Cars, Bikes & Scooters with Swarikaro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
