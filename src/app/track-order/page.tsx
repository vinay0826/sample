export const dynamic = "force-dynamic";

"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, CookingPot, Bike, Home } from 'lucide-react';

const steps = [
  { name: 'Order Placed', icon: CheckCircle },
  { name: 'In the Kitchen', icon: CookingPot },
  { name: 'Carriage Dispatched', icon: Bike },
  { name: 'Delivered', icon: Home },
];

export default function OrderTrackingPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('id');
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) return prev + 1;
        return prev;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const progressPercentage =
    (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="container mx-auto py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg bg-card border-border/70">
          <CardHeader>
            <CardTitle className="text-3xl font-headline font-light tracking-wider">
              Track Your Banquet
            </CardTitle>
            {orderId && (
              <p className="text-sm text-muted-foreground">
                Order ID: {orderId}
              </p>
            )}
          </CardHeader>

          <CardContent className="space-y-12 py-8">
            <div>
              <div className="relative mb-4">
                <div className="h-1.5 w-full bg-muted rounded-full" />
                <div
                  className="absolute top-0 left-0 h-1.5 bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              <div className="flex justify-between">
                {steps.map((step, index) => (
                  <div
                    key={step.name}
                    className="flex flex-col items-center text-center w-32"
                  >
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center border-2 transition-colors duration-500 ${
                        index <= currentStep
                          ? 'bg-primary border-primary text-primary-foreground'
                          : 'bg-card border-border text-muted-foreground'
                      }`}
                    >
                      <step.icon className="h-6 w-6" />
                    </div>
                    <p
                      className={`mt-2 text-sm font-medium tracking-wider transition-colors ${
                        index <= currentStep
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {step.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-video bg-muted/30 rounded-lg overflow-hidden border">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">
                  Map of Rome loading…
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
