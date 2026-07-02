import { Cormorant_Garamond, JetBrains_Mono, Manrope } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Grain from "@/components/shared/Grain";
import SmoothScroll from "@/components/shared/SmoothScroll";
import { siteMetadata } from "@/constants/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata = {
  ...siteMetadata,
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${display.variable} ${jetBrainsMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased">
        <SmoothScroll>
          <Grain />
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
