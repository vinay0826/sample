import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Sweet } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { Badge } from '../ui/badge';

type SweetCardProps = {
  sweet: Sweet;
};

export function SweetCard({ sweet }: SweetCardProps) {
  return (
    <Card className="group h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 relative">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={sweet.image}
            alt={sweet.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            data-ai-hint="indian sweets"
          />
        </div>
        <Badge variant="secondary" className="absolute top-3 right-3">{sweet.category}</Badge>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="mb-2 text-xl font-bold font-headline">{sweet.name}</CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-3">{sweet.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-6 pt-0 mt-auto">
        <p className="text-2xl font-bold text-primary">{formatPrice(sweet.price)}</p>
        <Button asChild className="font-semibold">
          <Link href={`/sweets/${sweet.slug}`} scroll={false}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
