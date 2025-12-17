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
import { formatPrice } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-24 md:py-40 lg:py-48 bg-gradient-to-b from-background via-yellow-50/20 to-background">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter font-headline text-accent">
            Experience Culinary
            <br />
            <span className="text-primary">Elegance.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-accent/80">
            Indulge in an unforgettable fine dining experience where vegetarian artistry meets the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-semibold text-lg py-7 px-10 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/menu">Explore The Menu</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-headline font-bold text-accent">Exquisite Ingredients</h3>
              <p className="text-accent/80">Sourced from the world's finest purveyors to ensure unparalleled quality and taste.</p>
            </div>
             <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <UtensilsCrossed className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-headline font-bold text-accent">Culinary Mastery</h3>
              <p className="text-accent/80">Every dish is a masterpiece, crafted by our world-class chefs with passion and precision.</p>
            </div>
             <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-headline font-bold text-accent">Award-Winning Service</h3>
              <p className="text-accent/80">Experience impeccable service in an atmosphere of refined elegance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-24 bg-gradient-to-b from-background via-yellow-50/20 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline text-accent">Chef's Signatures</h2>
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
                     <Card className="h-full flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl border-yellow-900/10 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
                      <CardHeader className="p-0">
                        <div className="relative aspect-video">
                          <Image
                            src={dish.image}
                            alt={dish.name}
                            fill
                            className="object-cover"
                            data-ai-hint="gourmet vegetarian food"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 flex-grow">
                        <Badge variant="outline" className="mb-2 border-primary/50 text-primary">{dish.category}</Badge>
                        <CardTitle className="mb-2 text-2xl font-bold font-headline text-accent">{dish.name}</CardTitle>
                        <p className="text-accent/70 text-sm line-clamp-2">{dish.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center p-6 pt-0">
                        <p className="text-xl font-semibold text-accent">{formatPrice(dish.price)}</p>
                        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                           <Link href={`/dishes/${dish.slug}`}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-10 text-primary border-primary/50 hover:bg-primary/10 hover:text-primary" />
            <CarouselNext className="hidden sm:flex -right-10 text-primary border-primary/50 hover:bg-primary/10 hover:text-primary" />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-24 bg-background" id="about">
        <div className="container mx-auto px-4 md:px-6">
           <Card className="bg-transparent border-none overflow-hidden shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
               <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
                <Image src="https://picsum.photos/seed/luxury-interior/800/600" alt="Our Story" fill className="object-cover" data-ai-hint="luxury restaurant interior" />
              </div>
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-4xl font-bold text-accent font-headline">The Elysian Bites Story</h2>
                <p className="text-accent/80 text-lg">Elysian Bites was born from a vision to create a sanctuary for connoisseurs of fine vegetarian cuisine. We believe dining is an art form, a multi-sensory experience that should delight and inspire. Our philosophy is rooted in a deep respect for ingredients, tradition, and innovation.</p>
                <Button asChild variant="link" className="text-primary text-lg p-0 h-auto hover:text-primary/80">
                  <Link href="/menu">Discover Our Passion <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-24 bg-gradient-to-b from-background via-yellow-50/20 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline text-accent">Words from Our Patrons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border border-yellow-900/10 p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                 <Avatar className="w-24 h-24 mb-6 border-4 border-primary/20">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name}/>
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-accent/70 mb-6 text-base flex-grow">"{testimonial.text}"</p>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <h3 className="font-semibold text-lg font-headline text-accent">{testimonial.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-12 md:py-16 lg:py-24 bg-accent">
        <div className="container text-center">
            <h2 className="text-4xl font-bold font-headline mb-4 text-background">Reserve Your Table</h2>
            <p className="text-background/70 text-lg max-w-2xl mx-auto mb-8">123 Royal Plaza, Palace Road, Jaipur, Rajasthan 302006</p>
            <Button asChild size="lg" className="font-semibold text-lg py-7 px-10 rounded-full shadow-lg shadow-black/20 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#">Make a Reservation</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
