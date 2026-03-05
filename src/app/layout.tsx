import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maverick Energy Partners | Sustainable Innovation in Engineering",
  description:
    "Maverick Energy Partners (MEP) is a specialized hydropower project development and consulting firm backed by over 100 years of combined industry experience.",
  keywords: [
    "hydropower",
    "dam engineering",
    "renewable energy",
    "Mambilla",
    "Zungeru",
    "Gurara",
    "consulting",
  ],
  openGraph: {
    title: "Maverick Energy Partners | Sustainable Innovation in Engineering",
    description:
      "Specialized hydropower project development and consulting with over 100 years combined experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
