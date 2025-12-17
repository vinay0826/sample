"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from 'react-use';

export default function OrderSuccessPage() {
  const [orderId, setOrderId] = useState('');
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Generate a fake order ID on the client side to avoid hydration mismatch
    setOrderId(`EB-${Math.floor(Math.random() * 90000) + 10000}`);
    
    // Trigger confetti after a short delay
    const timer = setTimeout(() => setShowConfetti(true), 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={300} colors={['#2c3e50', '#f1c40f', '#ecf0f1']}/>}
      <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-15rem)] py-12">
        <Card className="max-w-md w-full text-center p-8 md:p-12 shadow-2xl bg-card">
          <CardContent className="space-y-6">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <CheckCircle2 className="mx-auto h-20 w-20 text-green-500" />
            </motion.div>
            <h1 className="text-3xl font-bold font-headline">Confirmation Received!</h1>
            <p className="text-muted-foreground">
              Thank you for your order. We are now preparing your exquisite meal.
            </p>
            {orderId && (
              <div className="bg-muted rounded-lg py-3">
                <p className="text-sm text-muted-foreground">Your Order ID</p>
                <p className="font-mono font-semibold text-lg">{orderId}</p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="w-full">
                <Link href={`/track-order?id=${orderId}`}>Track Your Order</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/menu">Continue Browsing</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

// Dummy motion component to avoid dependency error
const motion = {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>
}
