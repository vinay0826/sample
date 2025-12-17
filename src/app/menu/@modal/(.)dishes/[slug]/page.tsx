"use client"

import { useRouter } from 'next/navigation';
import { DishDetails } from '@/components/dishes/dish-details';
import { dishes } from '@/lib/data';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function DishModal({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const dish = dishes.find(s => s.slug === params.slug);

  if (!dish) {
    // Or redirect to a 404 page
    return null;
  }
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0">
        <DishDetails dish={dish} />
      </DialogContent>
    </Dialog>
  );
}
