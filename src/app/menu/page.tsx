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
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">Our Exquisite Menu</h1>
        <p className="text-lg text-muted-foreground">Discover a world of authentic Indian sweets, crafted with passion.</p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map(category => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            onClick={() => setFilter(category)}
            className="rounded-full font-semibold"
          >
            {category}
          </Button>
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredSweets.map(sweet => (
            <motion.div
              key={sweet.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <SweetCard sweet={sweet} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
