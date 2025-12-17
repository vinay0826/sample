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
import { Textarea } from '@/components/ui/textarea';

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
    // This part runs on the client, after hydration.
    // We can safely redirect.
    router.replace('/menu');
    return (
        <div className="container text-center py-20">
            <h1 className="text-2xl font-bold">Your order is empty. Redirecting to menu...</h1>
        </div>
    );
  }

  return (
    <div className="container mx-auto py-24 md:py-32">
      <h1 className="text-5xl font-headline font-light tracking-wider mb-12 text-center">Finalize Your Experience</h1>
      <form onSubmit={handlePlaceOrder} className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className='font-headline tracking-wide text-2xl font-medium'>Patron Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Gaius Julius Caesar" required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Sestertius</Label>
                  <Input id="phone" placeholder="+39 123 456 7890" required/>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Villa Address</Label>
                <Input id="address" placeholder="123 Via Appia, Roma" required/>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='font-headline tracking-wide text-2xl font-medium'>Special Edicts</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="requests">Dietary restrictions, allergies, or other requests for the chef</Label>
                  <Textarea id="requests" placeholder="e.g. No garum, extra figs..."/>
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='font-headline tracking-wide text-2xl font-medium'>Method of Tribute</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="card" className="space-y-2">
                 <Label className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent has-[input:checked]:bg-accent has-[input:checked]:border-primary">
                  <RadioGroupItem value="card" id="card" />
                  <CreditCard className="h-5 w-5 mr-2"/>
                  <p className="font-semibold">Credit Tablet</p>
                </Label>
                <Label className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent has-[input:checked]:bg-accent has-[input:checked]:border-primary">
                  <RadioGroupItem value="upi" id="upi" />
                  <Landmark className="h-5 w-5 mr-2"/>
                  <p className="font-semibold">Imperial Bank Transfer</p>
                </Label>
                 <Label className="flex items-center gap-4 border rounded-md p-4 cursor-pointer hover:bg-accent has-[input:checked]:bg-accent has-[input:checked]:border-primary">
                  <RadioGroupItem value="valet" id="valet" />
                  <Wallet className="h-5 w-5 mr-2"/>
                  <p className="font-semibold">Pay with Denarii at Venue</p>
                </Label>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1 sticky top-32">
            <Card>
                <CardHeader>
                    <CardTitle className='font-headline tracking-wide text-2xl font-medium'>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="flex justify-between text-muted-foreground">
                        <span>Subtotal</span>
                        <span>{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                        <span>Imperial Service</span>
                        <span>{formatPrice(serviceCharge)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                        <span>State Taxes</span>
                        <span>{formatPrice(tax)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-xl">
                        <span>Grand Total</span>
                        <span>{formatPrice(grandTotal)}</span>
                    </div>
                </CardContent>
            </Card>
            <Button type="submit" className="w-full mt-6 tracking-widest uppercase" size="lg">
                Confirm & Place Order
            </Button>
        </div>
      </form>
    </div>
  );
}
