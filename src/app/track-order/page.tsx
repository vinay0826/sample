"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, CookingPot, Moped, Home } from 'lucide-react';

const steps = [
  { name: 'Order Placed', icon: CheckCircle },
  { name: 'Preparing', icon: CookingPot },
  { name: 'Out for Delivery', icon: Moped },
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
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Track Your Order</CardTitle>
            {orderId && <p className="text-sm text-muted-foreground">Order ID: {orderId}</p>}
          </CardHeader>
          <CardContent className="space-y-12">
            <div>
              <div className="relative mb-4">
                <div className="h-2 w-full bg-muted rounded-full"></div>
                <div
                  className="absolute top-0 left-0 h-2 bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between">
                {steps.map((step, index) => (
                  <div key={step.name} className="flex flex-col items-center text-center w-24">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-colors duration-500 ${
                        index <= currentStep
                          ? 'bg-primary border-primary text-primary-foreground'
                          : 'bg-card border-border text-muted-foreground'
                      }`}
                    >
                      <step.icon className="h-6 w-6" />
                    </div>
                    <p className={`mt-2 text-sm font-medium transition-colors duration-500 ${
                         index <= currentStep ? 'text-primary-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] bg-muted/50 rounded-lg overflow-hidden border">
              {/* Mock map using SVG pattern */}
               <svg width="100%" height="100%" className='absolute inset-0'>
                <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path d="M 10,80 Q 150,10 300,80 T 550,80" stroke="hsl(var(--primary))" strokeDasharray="5" strokeWidth="2" fill="none" className="w-full h-full scale-x-[1.5] lg:scale-x-[2] scale-y-[1.2] lg:scale-y-[1.5] origin-center" />
              </svg>

              <div
                className="absolute transition-all duration-1000 ease-out"
                style={{
                  offsetPath: `path('M 10,80 Q 150,10 300,80 T 550,80')`,
                  offsetDistance: `${progressPercentage}%`,
                  transform: 'scale(1.5) translate(-50%, -50%)',
                }}
              >
                <Moped className="h-8 w-8 text-primary -rotate-12" />
              </div>

               <div className="absolute top-4 left-4 flex items-center gap-2 bg-card p-2 rounded-md shadow">
                <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <CookingPot className="h-6 w-6 text-primary"/>
                </div>
                <div>
                    <p className="font-bold text-sm">Mithaai Delight</p>
                    <p className="text-xs text-muted-foreground">Shop Location</p>
                </div>
               </div>
               <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-card p-2 rounded-md shadow">
                 <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Home className="h-6 w-6 text-green-600"/>
                </div>
                <div>
                    <p className="font-bold text-sm">Your Home</p>
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
