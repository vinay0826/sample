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
import { ArrowRight, Star, UtensilsCrossed, Award, Leaf } from "lucide-react";
import { featuredDishes, testimonials } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-24 md:py-40 lg:py-48">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter font-headline text-foreground">
            A Symphony of Flavours,
            <br />
            <span className="text-primary">Artfully Composed.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Indulge in an unforgettable fine dining experience where culinary artistry meets the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-semibold text-lg py-7 px-10 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow">
              <Link href="/menu">Explore The Menu</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-16 lg:py-20 bg-accent/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-headline font-bold">Exquisite Ingredients</h3>
              <p className="text-muted-foreground">Sourced from the world's finest purveyors to ensure unparalleled quality and taste.</p>
            </div>
             <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <UtensilsCrossed className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-headline font-bold">Culinary Mastery</h3>
              <p className="text-muted-foreground">Every dish is a masterpiece, crafted by our world-class chefs with passion and precision.</p>
            </div>
             <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-headline font-bold">Award-Winning Service</h3>
              <p className="text-muted-foreground">Experience impeccable service in an atmosphere of refined elegance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline">Chef's Signatures</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent>
              {featuredDishes.map((dish) => (
                <CarouselItem key={dish.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                     <Card className="h-full flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl border-transparent hover:border-primary/20">
                      <CardHeader className="p-0">
                        <div className="relative aspect-square">
                          <Image
                            src={dish.image}
                            alt={dish.name}
                            fill
                            className="object-cover"
                            data-ai-hint="gourmet food dish"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 flex-grow">
                        <Badge variant="secondary" className="mb-2">{dish.category}</Badge>
                        <CardTitle className="mb-2 text-2xl font-bold font-headline">{dish.name}</CardTitle>
                        <p className="text-muted-foreground text-sm line-clamp-2">{dish.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center p-6 pt-0">
                        <p className="text-xl font-semibold text-foreground">₹{dish.price.toFixed(2)}</p>
                        <Button asChild>
                           <Link href={`/dishes/${dish.slug}`}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-10" />
            <CarouselNext className="hidden sm:flex -right-10" />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-24 bg-accent/50" id="about">
        <div className="container mx-auto px-4 md:px-6">
           <Card className="bg-card border-none overflow-hidden shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
               <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden">
                <Image src="https://picsum.photos/seed/restaurant-interior/800/600" alt="Our Story" fill className="object-cover" data-ai-hint="luxury restaurant interior" />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-4xl font-bold text-foreground font-headline">The Elysian Bites Story</h2>
                <p className="text-muted-foreground text-lg">Elysian Bites was born from a vision to create a sanctuary for food lovers. We believe dining is an art form, a multi-sensory experience that should delight and inspire. Our philosophy is rooted in a deep respect for ingredients, tradition, and innovation.</p>
                <Button asChild variant="link" className="text-primary text-lg p-0 h-auto">
                  <Link href="/menu">Discover Our Passion <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline">Words from Our Patrons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border p-8 flex flex-col items-center text-center transform transition-transform duration-300">
                 <Avatar className="w-24 h-24 mb-6 border-4 border-primary/10">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name}/>
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-muted-foreground mb-6 text-base flex-grow">"{testimonial.text}"</p>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <h3 className="font-semibold text-lg font-headline">{testimonial.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-12 md:py-16 lg:py-24 bg-accent/50">
        <div className="container text-center">
            <h2 className="text-4xl font-bold font-headline mb-4">Reserve Your Table</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">123 Royal Plaza, Palace Road, Jaipur, Rajasthan 302006</p>
            <Button asChild size="lg" className="font-semibold text-lg py-7 px-10 rounded-full shadow-lg shadow-primary/20">
                <Link href="#">Make a Reservation</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
