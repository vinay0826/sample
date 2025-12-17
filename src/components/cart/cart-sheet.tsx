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
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-6 w-6" />
          {itemCount > 0 && (
            <Badge
              variant="default"
              className="absolute -right-2 -top-2 h-6 w-6 rounded-full p-0 flex items-center justify-center"
            >
              {itemCount}
            </Badge>
          )}
          <span className="sr-only">Open Order</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-6">
          <SheetTitle>Your Order ({itemCount})</SheetTitle>
        </SheetHeader>
        <Separator />
        {itemCount > 0 ? (
          <>
            <ScrollArea className="flex-1">
              <div className="flex flex-col gap-4 px-6 py-4">
                {cartItems.map((item) => (
                  <div key={item.dish.id} className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md">
                      <Image
                        src={item.dish.image}
                        alt={item.dish.name}
                        fill
                        className="object-cover"
                        data-ai-hint="gourmet food"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.dish.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.quantity} x {formatPrice(item.dish.price)}
                      </p>
                    </div>
                    <p className="font-semibold">
                      {formatPrice(item.dish.price * item.quantity)}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.dish.id)}
                    >
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Separator />
            <SheetFooter className="px-6 py-4 bg-card/50">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>{formatPrice(getCartTotal())}</span>
                </div>
                 <div className="flex flex-col gap-2">
                    <Button asChild className="w-full">
                        <Link href="/cart">View Order</Link>
                    </Button>
                    <Button asChild variant="default" className="w-full">
                        <Link href="/checkout">Proceed to Checkout</Link>
                    </Button>
                 </div>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <div className="text-center">
              <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-lg font-semibold">Your order is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Add some dishes to get started!
              </p>
              <SheetTrigger asChild>
                <Button asChild variant="link" className="text-primary mt-2">
                    <Link href="/menu">Browse Menu</Link>
                </Button>
              </SheetTrigger>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
