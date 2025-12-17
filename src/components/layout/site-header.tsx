import Link from "next/link";
import { Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/cart/cart-sheet";
import { MotionDiv } from "../motion-div";

export function SiteHeader() {
  return (
    <MotionDiv 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-24 items-center justify-between">
        <nav className="hidden md:flex items-center space-x-6">
          <Button asChild variant="link" className="text-base tracking-widest">
            <Link href="/menu">Menu</Link>
          </Button>
           <Button asChild variant="link" className="text-base tracking-widest">
            <Link href="/#about">Our Story</Link>
          </Button>
        </nav>
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="flex items-center space-x-3">
            <Gem className="h-7 w-7 text-foreground" />
            <span className="inline-block font-bold text-2xl font-headline tracking-widest">ELYSIAN</span>
          </Link>
        </div>
        
        <div className="flex items-center justify-end space-x-4">
          <Button asChild variant="link" className="hidden md:flex text-base tracking-widest">
            <Link href="/#contact">Contact</Link>
          </Button>
          <CartSheet />
        </div>
      </div>
    </MotionDiv>
  );
}
