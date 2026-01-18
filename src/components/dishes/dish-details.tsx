"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import type { Dish } from '@/lib/data';
import { useCart } from '@/context/cart-context';
import { formatPrice } from '@/lib/utils';
import { Badge } from '../ui/badge';

type DishDetailsProps = {
  dish: Dish;
};

export function DishDetails({ dish }: DishDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(dish, quantity);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start max-w-6xl mx-auto py-12 px-4">
      <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg border border-border/50">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          data-ai-hint="roman food painting"
        />
      </div>

      <div className="space-y-8">
        <div>
          <Badge variant="outline" className="mb-4 tracking-widest uppercase">
            {dish.category}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter">
            {dish.name}
          </h1>
          <p className="text-3xl font-medium text-primary mt-4">
            {formatPrice(dish.price)}
          </p>
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed">
          {dish.description}
        </p>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Quantity
          </label>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-2xl font-semibold w-12 text-center">
              {quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(q => q + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Button
          size="lg"
          className="w-full font-semibold text-lg tracking-widest uppercase"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-3 h-5 w-5" />
          Add to Order
        </Button>
      </div>
    </div>
  );
}
