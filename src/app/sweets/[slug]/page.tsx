import { SweetDetails } from "@/components/sweets/sweet-details";
import { sweets } from "@/lib/data";
import { notFound } from "next/navigation";

export default function SweetPage({ params }: { params: { slug: string } }) {
  const sweet = sweets.find(s => s.slug === params.slug);

  if (!sweet) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 md:py-16">
        <SweetDetails sweet={sweet} />
    </div>
  );
}

export async function generateStaticParams() {
  return sweets.map((sweet) => ({
    slug: sweet.slug,
  }))
}
