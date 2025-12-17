import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, Gem, Award, Leaf } from "lucide-react";
import { featuredDishes, testimonials } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatPrice } from "@/lib/utils";
import { MotionDiv } from "@/components/motion-div";

export default function Home() {
  const headlineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.3,
      },
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center">
        <div className="absolute inset-0 bg-background" />
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,_hsl(var(--primary)/0.1),_transparent_80%)]"
        />

        <div className="container mx-auto px-4 md:px-6 text-center text-foreground space-y-8">
          <MotionDiv 
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
          >
            <MotionDiv variants={childVariants} style={{ willChange: 'opacity, transform' }}>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-headline font-light leading-none tracking-wider text-balance">
                The Art of Dining
              </h1>
            </MotionDiv>
            <MotionDiv variants={childVariants} style={{ willChange: 'opacity, transform' }}>
               <h2 className="text-2xl md:text-3xl font-headline font-light tracking-[0.2em] uppercase text-primary">
                Redefined
              </h2>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1]}}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70">
              An intimate venue where culinary artistry and timeless elegance converge.
            </p>
            <div className="mt-12">
              <Button asChild size="lg" className="font-semibold tracking-widest uppercase">
                <Link href="/menu">Discover The Menu</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
      
      <section className="w-full py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <MotionDiv initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1]}} className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary">
                <Leaf className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-headline font-medium tracking-wide">Pure Ingredients</h3>
              <p className="text-foreground/60 max-w-xs">Sourced from artisanal growers to compose a symphony of natural flavors.</p>
            </MotionDiv>
             <MotionDiv initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1]}} className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary">
                <Gem className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-headline font-medium tracking-wide">Culinary Craft</h3>
              <p className="text-foreground/60 max-w-xs">Each dish is a testament to our chefs' passion for gastronomic excellence and innovation.</p>
            </MotionDiv>
             <MotionDiv initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1]}} className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary">
                <Award className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-headline font-medium tracking-wide">Refined Service</h3>
              <p className="text-foreground/60 max-w-xs">Experience hospitality that anticipates your every need in an atmosphere of quiet luxury.</p>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="w-full py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <MotionDiv initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}>
            <h2 className="text-5xl md:text-6xl font-headline font-light text-center mb-20 tracking-wider">Signature Creations</h2>
          </MotionDiv>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish, i) => (
              <MotionDiv key={dish.id} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1]}}>
                 <Card className="group h-full flex flex-col overflow-hidden transition-all duration-700 ease-in-out bg-transparent border-border/50 rounded-lg shadow-none hover:shadow-2xl hover:shadow-primary/10 hover:border-primary">
                  <CardHeader className="p-0">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 sparkle-on-hover"
                        data-ai-hint="gourmet vegetarian food"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow text-center">
                    <CardTitle className="mb-2 text-2xl font-headline font-medium tracking-wide">{dish.name}</CardTitle>
                    <p className="text-primary text-lg">{formatPrice(dish.price)}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 mt-auto">
                    <Button asChild variant="link" className="w-full">
                       <Link href={`/dishes/${dish.slug}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24 md:py-32 lg:py-40 bg-background" id="about">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-24">
             <MotionDiv initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}} className="relative w-full h-[50vh] md:h-[70vh]">
              <Image src="https://picsum.photos/seed/luxury-interior/800/1000" alt="Our Story" fill className="object-cover rounded-md" data-ai-hint="luxury restaurant interior" />
            </MotionDiv>
            <MotionDiv initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}} className="space-y-8 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-headline font-light tracking-wider text-balance">A Philosophy of Purity</h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Elysian Bites is more than a restaurant; it is a celebration of vegetarian cuisine in its most elegant form. Our philosophy is one of quiet confidence, where the purity of the ingredient is paramount. We believe in creating an atmosphere where time slows, and every meal becomes a cherished memory.
              </p>
              <Button asChild variant="link" className="text-lg tracking-widest">
                <Link href="/menu">Explore Our Passion <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </MotionDiv>
           </div>
        </div>
      </section>

      <section className="w-full py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <MotionDiv initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}>
            <h2 className="text-5xl md:text-6xl font-headline font-light text-center mb-20 tracking-wider">Words from Our Patrons</h2>
          </MotionDiv>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionDiv key={index} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1]}}>
                <Card className="bg-transparent border-0 shadow-none p-8 flex flex-col items-center text-center h-full">
                  <Avatar className="w-24 h-24 mb-6">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name}/>
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p className="text-foreground/60 text-lg mb-6 flex-grow">"{testimonial.text}"</p>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <h3 className="font-semibold text-lg font-headline tracking-widest uppercase">{testimonial.name}</h3>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-24 md:py-32 lg:py-40 bg-accent text-accent-foreground">
        <div className="container text-center">
            <MotionDiv initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}>
              <h2 className="text-5xl md:text-6xl font-headline font-light tracking-wider mb-6">Reserve Your Experience</h2>
              <p className="text-accent-foreground/70 text-lg max-w-2xl mx-auto mb-12">123 Royal Plaza, Palace Road, Jaipur, Rajasthan 302006</p>
              <Button asChild size="lg" variant="secondary" className="font-semibold tracking-widest uppercase">
                  <Link href="#">Make a Reservation</Link>
              </Button>
            </MotionDiv>
        </div>
      </section>
    </div>
  );
}
