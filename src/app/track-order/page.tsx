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
      setCurrentStep(prevStep => {
        if (prevStep < steps.length - 1) {
          return prevStep + 1;
        }
        clearInterval(interval);
        return prevStep;
      });
    }, 4000); // Move to next step every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const progressPercentage = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="container mx-auto py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg bg-card border-border/70">
          <CardHeader>
            <CardTitle className="text-3xl font-headline font-light tracking-wider">Track Your Banquet</CardTitle>
            {orderId && <p className="text-sm text-muted-foreground">Order ID: {orderId}</p>}
          </CardHeader>
          <CardContent className="space-y-12 py-8">
            <div>
              <div className="relative mb-4">
                <div className="h-1.5 w-full bg-muted rounded-full"></div>
                <div
                  className="absolute top-0 left-0 h-1.5 bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between">
                {steps.map((step, index) => (
                  <div key={step.name} className="flex flex-col items-center text-center w-32">
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center border-2 transition-colors duration-500 ${
                        index <= currentStep
                          ? 'bg-primary border-primary text-primary-foreground'
                          : 'bg-card border-border text-muted-foreground'
                      }`}
                    >
                      <step.icon className="h-6 w-6" />
                    </div>
                    <p className={`mt-2 text-sm font-medium transition-colors duration-500 tracking-wider ${
                         index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-video bg-muted/30 rounded-lg overflow-hidden border">
               <svg width="100%" height="100%" className='absolute inset-0 opacity-40'>
                <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-muted-foreground text-center">Map of Rome loading...</p>
              </div>

               <div className="absolute top-4 left-4 flex items-center gap-2 bg-card p-2 rounded-md shadow-sm border">
                <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <CookingPot className="h-6 w-6 text-primary"/>
                </div>
                <div>
                    <p className="font-bold text-sm">Elysian Kitchen</p>
                    <p className="text-xs text-muted-foreground">The Forum</p>
                </div>
               </div>
               <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-card p-2 rounded-md shadow-sm border">
                 <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Home className="h-6 w-6 text-green-600"/>
                </div>
                <div>
                    <p className="font-bold text-sm">Your Villa</p>
                    <p className="text-xs text-muted-foreground">Delivery Address</p>
                </div>
               </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
