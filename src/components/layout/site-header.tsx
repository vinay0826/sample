import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/cart/cart-sheet";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-7 w-7 text-primary" />
            <span className="inline-block font-bold text-2xl font-headline">Mithaai Delight</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-2">
            <Button asChild variant="ghost" className="font-semibold">
              <Link href="/menu">Menu</Link>
            </Button>
             <Button asChild variant="ghost" className="font-semibold">
              <Link href="/#about">About Us</Link>
            </Button>
             <Button asChild variant="ghost" className="font-semibold">
              <Link href="/#contact">Contact</Link>
            </Button>
          </nav>
          <CartSheet />
        </div>
      </div>
    </header>
  );
}
