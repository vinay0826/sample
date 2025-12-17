import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Sweet } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { ArrowRight } from 'lucide-react';

type SweetCardProps = {
  sweet: Sweet;
};

export function SweetCard({ sweet }: SweetCardProps) {
  return (
    <Card className="group h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 border">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image
            src={sweet.image}
            alt={sweet.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="indian sweets"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <Badge variant="outline" className="mb-3 w-fit">{sweet.category}</Badge>
        <CardTitle className="mb-2 text-2xl font-bold font-headline">{sweet.name}</CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">{sweet.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-6 pt-4 mt-auto">
        <p className="text-xl font-bold text-foreground">{formatPrice(sweet.price)}</p>
        <Button asChild>
          <Link href={`/sweets/${sweet.slug}`}>
            View <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
