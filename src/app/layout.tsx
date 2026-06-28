import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vijeta Properties | Premium Residential & Commercial Real Estate",
  description: "Experience luxury living with Vijeta Properties. Browse our curated collection of premium residential villas, penthouses, and high-end commercial spaces designed to suit your lifestyle.",
  keywords: ["luxury homes", "premium real estate", "villas", "penthouses", "commercial spaces", "Vijeta Properties"],
  authors: [{ name: "Vijeta Properties" }],
  openGraph: {
    title: "Vijeta Properties | Premium Residential & Commercial Real Estate",
    description: "Experience luxury living with Vijeta Properties. Browse our curated collection of premium residential villas, penthouses, and high-end commercial spaces.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
