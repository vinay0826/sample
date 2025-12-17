"use client"

import { useRouter } from 'next/navigation';
import { SweetDetails } from '@/components/sweets/sweet-details';
import { sweets } from '@/lib/data';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function SweetModal({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const sweet = sweets.find(s => s.slug === params.slug);

  if (!sweet) {
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
        <SweetDetails sweet={sweet} />
      </DialogContent>
    </Dialog>
  );
}
