import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import { featuredSweets, testimonials } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card/50">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter font-headline text-primary-foreground">
            Fresh Traditional Sweets
            <br />
            <span className="text-primary">Delivered to Your Door</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Experience the authentic taste of India with our handcrafted sweets, made with love and the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-semibold text-lg py-7 px-10">
              <Link href="/menu">Order Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold text-lg py-7 px-10 border-2">
              <Link href="/menu">Explore Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-primary/10 border-primary/20 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
              <div className="space-y-4 text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-primary font-headline">Diwali Specials are Here!</h2>
                <p className="text-primary-foreground/80">Celebrate the festival of lights with our exclusive collection of festive sweets.</p>
                <Button asChild variant="default" className="mt-2">
                  <Link href="/menu">Shop a Festive Collection <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image src="https://picsum.photos/seed/diwali/300/300" alt="Diwali Sweets" fill className="object-contain" data-ai-hint="diwali sweets" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-card/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">Featured Mithaai</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {featuredSweets.map((sweet) => (
                <CarouselItem key={sweet.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                      <CardHeader className="p-0">
                        <div className="relative aspect-video">
                          <Image
                            src={sweet.image}
                            alt={sweet.name}
                            fill
                            className="object-cover"
                            data-ai-hint="indian sweets"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 flex-grow">
                        <CardTitle className="mb-2 text-xl font-bold">{sweet.name}</CardTitle>
                        <p className="text-muted-foreground text-sm line-clamp-2">{sweet.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center p-6 pt-0">
                        <p className="text-lg font-semibold text-primary">₹{sweet.price.toFixed(2)}</p>
                        <Button asChild variant="secondary">
                           <Link href={`/sweets/${sweet.slug}`}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 border-border/50 p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <Avatar className="w-20 h-20 mb-4 border-4 border-primary/20">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
