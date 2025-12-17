import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CartProvider } from "@/context/cart-context";
import { Toaster } from "@/components/ui/toaster";
import { CursorFollower } from "@/components/cursor-follower";

const headlineFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-headline",
});

const bodyFont = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Elysian Bites - A Fine Dining Experience",
  description: "An unforgettable fine dining experience where vegetarian artistry meets the finest ingredients.",
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
          headlineFont.variable,
          bodyFont.variable
        )}
      >
        <CartProvider>
          <CursorFollower />
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
