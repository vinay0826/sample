"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { MotionDiv } from "@/components/motion-div";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const total = getCartTotal();
  const serviceCharge = total > 0 ? 150 : 0; 
  const tax = total * 0.18;
  const grandTotal = total + serviceCharge + tax;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto text-center py-20 md:py-40 flex flex-col items-center justify-center min-h-[60vh]">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
        <h1 className="mt-8 text-4xl font-headline font-light tracking-wider">Your Folio is Empty</h1>
        <p className="mt-4 text-lg text-muted-foreground">Looks like you haven't selected any dishes yet.</p>
        <Button asChild size="lg" className="mt-8 tracking-widest uppercase">
          <Link href="/menu">Explore The Menu</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-24 md:py-32">
      <h1 className="text-5xl font-headline font-light tracking-wider mb-12 text-center">Your Order Folio</h1>
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item, i) => (
            <MotionDiv
              key={item.dish.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="flex items-center p-4 bg-card rounded-lg shadow-sm">
                <div className="relative h-24 w-24 rounded-md overflow-hidden mr-6 border border-border">
                  <Image
                    src={item.dish.image}
                    alt={item.dish.name}
                    fill
                    className="object-cover"
                    data-ai-hint="roman food painting"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline font-medium tracking-wide text-xl">{item.dish.name}</h3>
                  <p className="text-sm text-muted-foreground">{formatPrice(item.dish.price)}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold w-8 text-center text-lg">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <p className="font-medium text-lg mb-2">{formatPrice(item.dish.price * item.quantity)}</p>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.dish.id)}>
                    <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                  </Button>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
        <Card className="lg:col-span-1 sticky top-32 bg-card rounded-lg shadow-sm p-2">
          <CardHeader>
            <CardTitle className="font-headline font-medium tracking-wider text-2xl">Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service Charge</span>
              <span>{formatPrice(serviceCharge)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Taxes (18%)</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-medium text-xl">
              <span>Total</span>
              <span>{formatPrice(grandTotal)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full tracking-widest uppercase" size="lg">
              <Link href="/checkout">Finalize Experience</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
