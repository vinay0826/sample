"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from '@/context/cart-context';
import { Landmark, CreditCard, Wallet, ParkingSquare } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  
  const total = getCartTotal();
  const serviceCharge = total > 0 ? 150 : 0;
  const tax = total * 0.18;
  const grandTotal = total + serviceCharge + tax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
        toast({
            title: "Your order is empty!",
            description: "Please add dishes to your order before proceeding.",
            variant: "destructive",
        })
        router.push('/menu');
        return;
    }
    clearCart();
    router.push('/order-success');
  };
  
  if (cartItems.length === 0 && typeof window !== 'undefined') {
    return <div className="container text-center py-20">
        <h1 className="text-2xl font-bold">Your order is empty. Redirecting to menu...</h1>
    </div>
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold font-headline mb-8">Checkout</h1>
      <form onSubmit={handlePlaceOrder} className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Aarav Sharma" required/>
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
                  <Input id="city" placeholder="Jaipur" required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="Rajasthan" required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="302006" required/>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Special Requests</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="requests">Dietary restrictions, allergies, or other requests</Label>
                  <Input id="requests" placeholder="e.g. Gluten-free, no nuts"/>
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="card" className="space-y-2">
                 <Label className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent/50 has-[input:checked]:bg-accent has-[input:checked]:border-primary">
                  <RadioGroupItem value="card" id="card" />
                  <CreditCard className="h-5 w-5 mr-2"/>
                  <p className="font-semibold">Credit/Debit Card</p>
                </Label>
                <Label className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent/50 has-[input:checked]:bg-accent has-[input:checked]:border-primary">
                  <RadioGroupItem value="upi" id="upi" />
                  <Landmark className="h-5 w-5 mr-2"/>
                  <p className="font-semibold">UPI / Netbanking</p>
                </Label>
                 <Label className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent/50 has-[input:checked]:bg-accent has-[input:checked]:border-primary">
                  <RadioGroupItem value="valet" id="valet" />
                  <ParkingSquare className="h-5 w-5 mr-2"/>
                  <p className="font-semibold">Pay at the Restaurant</p>
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
            </Card>
            <Button type="submit" className="w-full mt-6" size="lg">
                <Wallet className="mr-2 h-5 w-5"/>
                Confirm & Pay
            </Button>
        </div>
      </form>
    </div>
  );
}
