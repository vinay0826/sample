"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const total = getCartTotal();
  const serviceCharge = total > 0 ? 150 : 0; // 5-star restaurants have service charges
  const tax = total * 0.18; // Higher tax for luxury dining
  const grandTotal = total + serviceCharge + tax;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto text-center py-20">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
        <h1 className="mt-4 text-3xl font-bold">Your Order is Empty</h1>
        <p className="mt-2 text-muted-foreground">Looks like you haven't selected any dishes yet.</p>
        <Button asChild className="mt-6">
          <Link href="/menu">Explore The Menu</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold font-headline mb-8">Your Order</h1>
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.dish.id} className="flex items-center p-4">
              <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-md overflow-hidden mr-4">
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
                <p className="text-sm text-muted-foreground">{formatPrice(item.dish.price)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-semibold w-8 text-center">{item.quantity}</span>
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{formatPrice(item.dish.price * item.quantity)}</p>
                <Button variant="ghost" size="icon" className="mt-2" onClick={() => removeFromCart(item.dish.id)}>
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <Card className="md:col-span-1 sticky top-24">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between">
              <span>Service Charge</span>
              <span>{formatPrice(serviceCharge)}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes (18%)</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{formatPrice(grandTotal)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full" size="lg">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
