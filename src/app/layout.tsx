import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CartProvider } from "@/context/cart-context";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mithaai Delight",
  description: "Fresh Traditional Sweets Delivered to Your Door",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          playfair.variable,
          inter.variable
        )}
      >
        <CartProvider>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 page-transition">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
