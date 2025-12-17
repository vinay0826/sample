import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Dish } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { ArrowRight } from 'lucide-react';

type DishCardProps = {
  dish: Dish;
};

export function DishCard({ dish }: DishCardProps) {
  return (
    <Card className="group h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out bg-transparent border-0 shadow-none">
      <CardHeader className="p-0">
        <Link href={`/dishes/${dish.slug}`} className="block relative aspect-square overflow-hidden rounded-md">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="roman food painting"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
        </Link>
      </CardHeader>
      <CardContent className="p-0 pt-6 text-center">
        <CardTitle className="mb-1 text-2xl font-medium font-headline">{dish.name}</CardTitle>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">{dish.category}</p>
      </CardContent>
      <CardFooter className="flex-col items-center p-0 pt-4 mt-auto">
        <p className="text-lg font-medium text-foreground mb-4">{formatPrice(dish.price)}</p>
        <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
          <Link href={`/dishes/${dish.slug}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
