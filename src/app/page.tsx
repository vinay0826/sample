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
import { MotionDiv } from "@/components/motion-div";

export default function Home() {
  const headlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.2,
      },
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center">
        <Image
          src="https://picsum.photos/seed/dark-ambience/1800/1200"
          alt="Elegant restaurant interior"
          fill
          className="object-cover -z-10 brightness-[.4]"
          priority
          data-ai-hint="dark luxury restaurant"
        />
        <div className="container mx-auto px-4 md:px-6 text-center text-background space-y-8">
          <MotionDiv 
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
          >
            <MotionDiv variants={childVariants}>
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter font-headline text-white drop-shadow-2xl">
                Experience Culinary
              </h1>
            </MotionDiv>
            <MotionDiv variants={childVariants}>
               <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter font-headline text-primary drop-shadow-2xl">
                Elegance.
              </h1>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8, delay: 0.5, ease: "easeOut"}}>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-background/80 drop-shadow-lg">
              Indulge in an unforgettable fine dining experience where vegetarian artistry meets the finest ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="font-semibold text-lg py-7 px-10 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/menu">Explore The Menu</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
      
      <section className="w-full py-16 md:py-24 lg:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <MotionDiv initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6, delay: 0.1}} className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-headline font-bold text-accent">Exquisite Ingredients</h3>
              <p className="text-accent/80">Sourced from the world's finest purveyors to ensure unparalleled quality and taste.</p>
            </MotionDiv>
             <MotionDiv initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6, delay: 0.2}} className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <UtensilsCrossed className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-headline font-bold text-accent">Culinary Mastery</h3>
              <p className="text-accent/80">Every dish is a masterpiece, crafted by our world-class chefs with passion and precision.</p>
            </MotionDiv>
             <MotionDiv initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6, delay: 0.3}} className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-headline font-bold text-accent">Award-Winning Service</h3>
              <p className="text-accent/80">Experience impeccable service in an atmosphere of refined elegance.</p>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 lg:py-28 bg-gradient-to-b from-background via-yellow-50/20 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <MotionDiv initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6}}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline text-accent">Chef's Signatures</h2>
          </MotionDiv>
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
                  <div className="p-4">
                     <Card className="group h-full flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl border-transparent hover:border-primary/30 bg-card/80 backdrop-blur-sm rounded-lg hover:scale-[1.02] hover:-translate-y-2">
                      <CardHeader className="p-0">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={dish.image}
                            alt={dish.name}
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
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
                        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
                           <Link href={`/dishes/${dish.slug}`}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 text-primary border-primary/50 hover:bg-primary/10 hover:text-primary rounded-full w-10 h-10" />
            <CarouselNext className="hidden sm:flex -right-12 text-primary border-primary/50 hover:bg-primary/10 hover:text-primary rounded-full w-10 h-10" />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 lg:py-28 bg-background" id="about">
        <div className="container mx-auto px-4 md:px-6">
           <Card className="bg-transparent border-none overflow-hidden shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
               <MotionDiv initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.8, ease: "easeOut"}} className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
                <Image src="https://picsum.photos/seed/luxury-interior/800/600" alt="Our Story" fill className="object-cover" data-ai-hint="luxury restaurant interior" />
              </MotionDiv>
              <MotionDiv initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.8, ease: "easeOut"}} className="space-y-6 text-center md:text-left">
                <h2 className="text-4xl font-bold text-accent font-headline">The Elysian Bites Story</h2>
                <p className="text-accent/80 text-lg">Elysian Bites was born from a vision to create a sanctuary for connoisseurs of fine vegetarian cuisine. We believe dining is an art form, a multi-sensory experience that should delight and inspire. Our philosophy is rooted in a deep respect for ingredients, tradition, and innovation.</p>
                <Button asChild variant="link" className="text-primary text-lg p-0 h-auto hover:text-primary/80">
                  <Link href="/menu">Discover Our Passion <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </MotionDiv>
            </div>
          </Card>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 lg:py-28 bg-gradient-to-b from-background via-yellow-50/20 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <MotionDiv initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6}}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline text-accent">Words from Our Patrons</h2>
          </MotionDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionDiv key={index} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6, delay: index * 0.1}}>
                <Card className="bg-card/80 backdrop-blur-sm border border-yellow-900/10 p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-lg h-full">
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
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-20 md:py-28 lg:py-32 bg-accent">
        <div className="container text-center">
            <MotionDiv initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6}}>
              <h2 className="text-4xl font-bold font-headline mb-4 text-background">Reserve Your Table</h2>
              <p className="text-background/70 text-lg max-w-2xl mx-auto mb-8">123 Royal Plaza, Palace Road, Jaipur, Rajasthan 302006</p>
              <Button asChild size="lg" className="font-semibold text-lg py-7 px-10 rounded-full shadow-lg shadow-black/20 transition-all duration-300 transform hover:-translate-y-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#">Make a Reservation</Link>
              </Button>
            </MotionDiv>
        </div>
      </section>
    </div>
  );
}
