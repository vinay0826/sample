import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Gem } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container py-16 text-center">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center space-x-3">
            <Gem className="h-7 w-7 text-foreground" />
            <span className="inline-block font-bold text-2xl font-headline tracking-widest text-foreground">ELYSIAN</span>
          </Link>
          <div className="flex items-center gap-4 text-sm uppercase tracking-widest font-medium">
            <Link href="/menu" className="text-foreground/60 hover:text-primary transition-colors">Menu</Link>
            <Link href="/#about" className="text-foreground/60 hover:text-primary transition-colors">Our Story</Link>
            <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">Reservations</Link>
            <Link href="/#contact" className="text-foreground/60 hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-foreground/60 hover:bg-primary/10 hover:text-primary rounded-full" asChild>
                  <Link href="#"><Instagram className="h-5 w-5"/></Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground/60 hover:bg-primary/10 hover:text-primary rounded-full" asChild>
                  <Link href="#"><Facebook className="h-5 w-5"/></Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground/60 hover:bg-primary/10 hover:text-primary rounded-full" asChild>
                  <Link href="#"><Twitter className="h-5 w-5"/></Link>
              </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 py-6">
         <div className="container text-center text-sm text-foreground/50 tracking-wider">
            &copy; {new Date().getFullYear()} Elysian Bites. A commitment to culinary excellence.
         </div>
      </div>
    </footer>
  );
}
