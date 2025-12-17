import { DraftingCompass } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
            <div className="flex flex-col items-start gap-4 col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-3">
                <DraftingCompass className="h-7 w-7 text-foreground" />
                <span className="inline-block font-bold text-2xl font-headline tracking-widest text-foreground">ELYSIAN</span>
              </Link>
              <p className="text-sm text-muted-foreground">A tribute to the grandeur of Rome. © {new Date().getFullYear()}.</p>
            </div>
            <div className="space-y-3">
                <h4 className="font-headline text-lg font-semibold tracking-wider">Navigation</h4>
                <ul className="space-y-2">
                    <li><Link href="/menu" className="text-muted-foreground hover:text-primary transition-colors">The Menu</Link></li>
                    <li><Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">Our Philosophy</Link></li>
                    <li><Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">Reservations</Link></li>
                </ul>
            </div>
             <div className="space-y-3">
                <h4 className="font-headline text-lg font-semibold tracking-wider">Legal</h4>
                <ul className="space-y-2">
                    <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                </ul>
            </div>
             <div className="space-y-3">
                <h4 className="font-headline text-lg font-semibold tracking-wider">Location</h4>
                <address className="not-italic text-muted-foreground">
                    Via Sacra, 1<br/>
                    00186 Roma RM<br/>
                    Italy
                </address>
            </div>
        </div>
      </div>
    </footer>
  );
}
