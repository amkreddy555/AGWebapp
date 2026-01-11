import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

import WhatsApp from "@/components/sections/Contact/WhatsApp";

export const metadata: Metadata = {
  title: "AquaGenius | Premium Pure Water Solutions",
  description: "Experience the purity of intelligent water filtration. High-end RO, UV, & Copper purifiers for a healthier lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <WhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
