import Link from "next/link";
import { Gem } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/cart/cart-sheet";
import { MotionDiv } from "../motion-div";

export function SiteHeader() {
  return (
    <MotionDiv 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-lg"
    >
      <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Gem className="h-7 w-7 text-primary" />
            <span className="inline-block font-bold text-2xl font-headline text-accent">Elysian Bites</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-1">
            <Button asChild variant="ghost" className="font-semibold text-accent/80 hover:text-primary transition-colors duration-300">
              <Link href="/menu">Menu</Link>
            </Button>
             <Button asChild variant="ghost" className="font-semibold text-accent/80 hover:text-primary transition-colors duration-300">
              <Link href="/#about">Our Story</Link>
            </Button>
             <Button asChild variant="ghost" className="font-semibold text-accent/80 hover:text-primary transition-colors duration-300">
              <Link href="/#contact">Contact</Link>
            </Button>
          </nav>
          <CartSheet />
        </div>
      </div>
    </MotionDiv>
  );
}
