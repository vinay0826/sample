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
    <Card className="group h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 border">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="gourmet food"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <Badge variant="outline" className="mb-3 w-fit">{dish.category}</Badge>
        <CardTitle className="mb-2 text-2xl font-bold font-headline">{dish.name}</CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">{dish.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-6 pt-4 mt-auto">
        <p className="text-xl font-bold text-foreground">{formatPrice(dish.price)}</p>
        <Button asChild>
          <Link href={`/dishes/${dish.slug}`}>
            Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
