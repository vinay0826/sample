import { DishDetails } from "@/components/dishes/dish-details";
import { dishes } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function DishPage({ params }: { params: { slug: string } }) {
  const dish = dishes.find(s => s.slug === params.slug);

  if (!dish) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 md:py-16">
        <DishDetails dish={dish} />
    </div>
  );
}

export async function generateStaticParams() {
  return dishes.map((dish) => ({
    slug: dish.slug,
  }))
}


