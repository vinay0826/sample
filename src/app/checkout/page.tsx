"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from '@/context/cart-context';
import { Truck, Landmark, CreditCard, Wallet } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  
  const total = getCartTotal();
  const deliveryFee = total > 0 ? 50 : 0;
  const tax = total * 0.05;
  const grandTotal = total + deliveryFee + tax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
        toast({
            title: "Your cart is empty!",
            description: "Please add items to your cart before placing an order.",
            variant: "destructive",
        })
        router.push('/menu');
        return;
    }
    clearCart();
    router.push('/order-success');
  };
  
  if (cartItems.length === 0 && typeof window !== 'undefined') {
    // router.push('/menu'); // This causes issues in some cases
    return <div className="container text-center py-20">
        <h1 className="text-2xl font-bold">Your cart is empty. Redirecting to menu...</h1>
    </div>
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold font-headline mb-8">Checkout</h1>
      <form onSubmit={handlePlaceOrder} className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Anjali Sharma" required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" required/>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123, Rose Villa, MG Road" required/>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Mumbai" required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="Maharashtra" required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="400001" required/>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delivery Time</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="standard" className="space-y-2">
                <Label className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent/50 has-[input:checked]:bg-accent/80 has-[input:checked]:border-primary">
                  <RadioGroupItem value="standard" id="standard" />
                  <div>
                    <p className="font-semibold">Standard Delivery (2-3 hours)</p>
                    <p className="text-sm text-muted-foreground">Receive your order within the next few hours.</p>
                  </div>
                </Label>
                <Label className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent/50 has-[input:checked]:bg-accent/80 has-[input:checked]:border-primary">
                  <RadioGroupItem value="express" id="express" />
                  <div>
                    <p className="font-semibold">Express Delivery (Under 60 mins)</p>
                    <p className="text-sm text-muted-foreground">Get your sweets delivered super fast for a small fee.</p>
                  </div>
                </Label>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="cod" className="space-y-2">
                 <Label className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent/50 has-[input:checked]:bg-accent/80 has-[input:checked]:border-primary">
                  <RadioGroupItem value="cod" id="cod" />
                  <Truck className="h-5 w-5 mr-2"/>
                  <p className="font-semibold">Cash on Delivery (COD)</p>
                </Label>
                <Label className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent/50 has-[input:checked]:bg-accent/80 has-[input:checked]:border-primary">
                  <RadioGroupItem value="upi" id="upi" />
                  <Landmark className="h-5 w-5 mr-2"/>
                  <p className="font-semibold">UPI</p>
                </Label>
                 <Label className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent/50 has-[input:checked]:bg-accent/80 has-[input:checked]:border-primary">
                  <RadioGroupItem value="card" id="card" />
                  <CreditCard className="h-5 w-5 mr-2"/>
                  <p className="font-semibold">Credit/Debit Card</p>
                </Label>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1 sticky top-24">
            <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Delivery Fee</span>
                        <span>{formatPrice(deliveryFee)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Taxes (5%)</span>
                        <span>{formatPrice(tax)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>{formatPrice(grandTotal)}</span>
                    </div>
                </CardContent>
            </Card>
            <Button type="submit" className="w-full mt-6" size="lg">
                <Wallet className="mr-2 h-5 w-5"/>
                Place Order
            </Button>
        </div>
      </form>
    </div>
  );
}
