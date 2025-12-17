"use client";

import { useState } from 'react';
import { SweetCard } from '@/components/sweets/sweet-card';
import { sweets } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Milk-based', 'Dry Fruit', 'Festival Specials', 'Classic'];

export default function MenuPage() {
  const [filter, setFilter] = useState('All');

  const filteredSweets = filter === 'All' ? sweets : sweets.filter(s => s.category === filter);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold font-headline mb-4">Our Sweet Symphony</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore a curated collection of India's most cherished sweets, each handcrafted to perfection using timeless recipes.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-12">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredSweets.map((sweet, i) => (
            <motion.div
              key={sweet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <SweetCard sweet={sweet} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
