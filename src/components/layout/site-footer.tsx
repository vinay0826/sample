import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Gem } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <Gem className="h-7 w-7 text-primary" />
            <span className="inline-block font-bold text-2xl font-headline">Elysian Bites</span>
          </Link>
          <p className="text-sm text-accent-foreground/70">
            A sanctuary for connoisseurs of fine vegetarian cuisine.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/menu" className="text-sm text-accent-foreground/70 hover:text-primary">Menu</Link></li>
            <li><Link href="/#about" className="text-sm text-accent-foreground/70 hover:text-primary">Our Story</Link></li>
            <li><Link href="#" className="text-sm text-accent-foreground/70 hover:text-primary">Reservations</Link></li>
            <li><Link href="/#contact" className="text-sm text-accent-foreground/70 hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
           <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
           <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-accent-foreground/70 hover:bg-primary/10 hover:text-primary" asChild>
                  <Link href="#"><Instagram className="h-5 w-5"/></Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-accent-foreground/70 hover:bg-primary/10 hover:text-primary" asChild>
                  <Link href="#"><Facebook className="h-5 w-5"/></Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-accent-foreground/70 hover:bg-primary/10 hover:text-primary" asChild>
                  <Link href="#"><Twitter className="h-5 w-5"/></Link>
              </Button>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
         <div className="container text-center text-sm text-accent-foreground/60">
            &copy; {new Date().getFullYear()} Elysian Bites. All Rights Reserved.
         </div>
      </div>
    </footer>
  );
}
