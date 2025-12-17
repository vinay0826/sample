import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Gem } from "lucide-react";
import { MotionDiv } from "../motion-div";

export function SiteFooter() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        <MotionDiv initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6}} className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <Gem className="h-7 w-7 text-primary" />
            <span className="inline-block font-bold text-2xl font-headline">Elysian Bites</span>
          </Link>
          <p className="text-sm text-accent-foreground/70">
            A sanctuary for connoisseurs of fine vegetarian cuisine.
          </p>
        </MotionDiv>

        <MotionDiv initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6, delay: 0.1}} className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-headline font-semibold mb-4 text-primary">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/menu" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Menu</Link></li>
            <li><Link href="/#about" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Reservations</Link></li>
            <li><Link href="/#contact" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </MotionDiv>
        
        <MotionDiv initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6, delay: 0.2}} className="flex flex-col items-center md:items-start text-center md:text-left">
           <h3 className="font-headline font-semibold mb-4 text-primary">Follow Us</h3>
           <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-accent-foreground/70 hover:bg-primary/10 hover:text-primary rounded-full" asChild>
                  <Link href="#"><Instagram className="h-5 w-5"/></Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-accent-foreground/70 hover:bg-primary/10 hover:text-primary rounded-full" asChild>
                  <Link href="#"><Facebook className="h-5 w-5"/></Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-accent-foreground/70 hover:bg-primary/10 hover:text-primary rounded-full" asChild>
                  <Link href="#"><Twitter className="h-5 w-5"/></Link>
              </Button>
          </div>
        </MotionDiv>
      </div>
      <div className="bg-black/20 py-4">
         <div className="container text-center text-sm text-accent-foreground/60">
            &copy; {new Date().getFullYear()} Elysian Bites. All Rights Reserved.
         </div>
      </div>
    </footer>
  );
}
