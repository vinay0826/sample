"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/cart-context";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { Separator } from "../ui/separator";

export function CartSheet() {
  const { cartItems, removeFromCart, getCartTotal, getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative group">
          <ShoppingBag className="h-6 w-6 text-foreground/80 group-hover:text-primary transition-colors" />
          {itemCount > 0 && (
            <Badge
              variant="default"
              className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {itemCount}
            </Badge>
          )}
          <span className="sr-only">Open Order Folio</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md bg-card/95 backdrop-blur-xl border-border/50">
        <SheetHeader className="p-6">
          <SheetTitle className="font-headline font-medium tracking-widest text-2xl">Your Folio</SheetTitle>
        </SheetHeader>
        <Separator className="bg-border/50" />
        {itemCount > 0 ? (
          <>
            <ScrollArea className="flex-1 my-4">
              <div className="flex flex-col gap-6 px-6">
                {cartItems.map((item) => (
                  <div key={item.dish.id} className="flex items-start gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-sm border border-border/50">
                      <Image
                        src={item.dish.image}
                        alt={item.dish.name}
                        fill
                        className="object-cover"
                        data-ai-hint="gourmet food"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-headline font-medium tracking-wide text-lg">{item.dish.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.quantity} &times; {formatPrice(item.dish.price)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-lg">
                        {formatPrice(item.dish.price * item.quantity)}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 mt-1"
                        onClick={() => removeFromCart(item.dish.id)}
                      >
                        <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive transition-colors" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Separator className="bg-border/50" />
            <SheetFooter className="p-6">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-medium text-lg">
                  <span>Subtotal</span>
                  <span>{formatPrice(getCartTotal())}</span>
                </div>
                 <div className="flex flex-col gap-2 pt-4">
                    <Button asChild className="w-full" size="lg">
                        <Link href="/cart">Review Folio</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full" size="lg">
                        <Link href="/checkout">Finalize Experience</Link>
                    </Button>
                 </div>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <div className="text-center px-8">
              <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-6 text-xl font-headline font-medium tracking-wider">Your Folio is Empty</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Select from our curated menu to begin your experience.
              </p>
              <SheetTrigger asChild>
                <Button asChild variant="link" className="text-primary mt-4 tracking-widest">
                    <Link href="/menu">Browse The Menu</Link>
                </Button>
              </SheetTrigger>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
