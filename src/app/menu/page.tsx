"use client";

import { useState } from 'react';
import { DishCard } from '@/components/dishes/dish-card';
import { dishes } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Antipasto', 'Primo', 'Secondo', 'Dolce'];

export default function MenuPage() {
  const [filter, setFilter] = useState('All');

  const filteredDishes = filter === 'All' ? dishes : dishes.filter(s => s.category === filter);

  return (
    <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-light font-headline mb-4 tracking-tighter">The Banquet</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A curated collection of vegetarian dishes inspired by the rich culinary traditions of ancient Rome.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-16">
        {categories.map(category => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            onClick={() => setFilter(category)}
            className="rounded-full font-semibold px-6 py-2 text-base transition-all duration-300"
          >
            {category}
          </Button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
        >
          {filteredDishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
