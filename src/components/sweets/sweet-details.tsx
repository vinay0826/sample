"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import type { Sweet } from '@/lib/data';
import { useCart } from '@/context/cart-context';
import { formatPrice } from '@/lib/utils';
import { Badge } from '../ui/badge';

type SweetDetailsProps = {
  sweet: Sweet;
};

export function SweetDetails({ sweet }: SweetDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(sweet.weightOptions[0]);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(sweet, quantity);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto py-12 px-4">
      <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
        <Image
          src={sweet.image}
          alt={sweet.name}
          fill
          className="object-cover"
          data-ai-hint="indian sweet"
        />
      </div>
      <div className="space-y-6">
        <div>
          <Badge variant="outline" className='mb-2'>{sweet.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-headline">{sweet.name}</h1>
          <p className="text-2xl font-semibold text-primary mt-2">{formatPrice(sweet.price)}</p>
        </div>
        <p className="text-muted-foreground">{sweet.description}</p>

        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <label className="text-sm font-medium">Weight</label>
                <Select value={selectedWeight} onValueChange={setSelectedWeight}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select weight" />
                    </SelectTrigger>
                    <SelectContent>
                        {sweet.weightOptions.map(weight => (
                        <SelectItem key={weight} value={weight}>{weight}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium">Quantity</label>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => setQuantity(q => q + 1)}>
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>

        <Button size="lg" className="w-full font-semibold text-lg" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
