import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-card/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} Mithaai Delight. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Instagram className="h-5 w-5"/></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Facebook className="h-5 w-5"/></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Twitter className="h-5 w-5"/></Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
