import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import { featuredDishes, testimonials } from "@/lib/data";
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
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image 
            src="https://picsum.photos/seed/roman-architecture/1920/1080"
            alt="Roman Forum"
            fill
            className="object-cover"
            priority
            data-ai-hint="ancient roman ruins"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </MotionDiv>
        

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-foreground space-y-8">
          <MotionDiv 
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
          >
            <MotionDiv variants={childVariants} style={{ willChange: 'opacity, transform' }}>
              <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-headline font-light leading-none tracking-tighter text-balance">
                A Feast for Gods
              </h1>
            </MotionDiv>
            <MotionDiv variants={childVariants} style={{ willChange: 'opacity, transform' }}>
               <h2 className="text-2xl md:text-3xl font-headline font-normal tracking-[0.3em] uppercase text-primary">
                A Taste of Eternity
              </h2>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1]}}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70">
              Experience the vegetarian banquet of ancient Rome, reimagined.
            </p>
            <div className="mt-12">
              <Button asChild size="lg" className="font-semibold tracking-widest uppercase">
                <Link href="/menu">Explore The Menu</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
      
      <section className="w-full py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish, i) => (
              <MotionDiv key={dish.id} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1]}}>
                 <Card className="group h-full flex flex-col overflow-hidden transition-all duration-700 ease-in-out bg-card border-border/50 rounded-md shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 sparkle-on-hover"
                        data-ai-hint="roman food painting"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow text-center">
                    <CardTitle className="mb-2 text-3xl font-headline font-medium tracking-wide">{dish.name}</CardTitle>
                    <p className="text-primary text-lg">{formatPrice(dish.price)}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 mt-auto">
                    <Button asChild variant="outline" className="w-full">
                       <Link href={`/dishes/${dish.slug}`}>View Composition</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24 md:py-32 lg:py-40 bg-card" id="about">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-24">
             <MotionDiv initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}} className="relative w-full h-[50vh] md:h-[70vh]">
              <Image src="https://picsum.photos/seed/roman-villa/800/1000" alt="Our Story" fill className="object-cover rounded-md" data-ai-hint="ancient roman fresco" />
            </MotionDiv>
            <MotionDiv initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}} className="space-y-8 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-headline font-light tracking-wider text-balance">The Elysian Philosophy</h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Elysian Bites is a tribute to the grand traditions of the Roman table, reborn with a vegetarian soul. We honor the earth's bounty, crafting dishes from humble ingredients into culinary art. Our philosophy is one of reverence—for history, for flavor, and for the shared joy of a meal that transcends time.
              </p>
              <Button asChild variant="link" className="text-lg tracking-widest text-primary">
                <Link href="/menu">Discover Our Passion <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </MotionDiv>
           </div>
        </div>
      </section>

      <section className="w-full py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <MotionDiv initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}>
            <h2 className="text-5xl md:text-6xl font-headline font-light text-center mb-20 tracking-wider">Acclamations from Our Patricians</h2>
          </MotionDiv>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionDiv key={index} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1]}}>
                <Card className="bg-card border-border/60 rounded-md p-8 flex flex-col items-center text-center h-full">
                  <p className="text-foreground/70 text-lg mb-6 flex-grow">"{testimonial.text}"</p>
                   <div className="w-20 h-px bg-border my-6"></div>
                  <h3 className="font-semibold text-lg font-headline tracking-widest uppercase">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-24 md:py-32 lg:py-40 bg-secondary text-secondary-foreground">
        <div className="container text-center">
            <MotionDiv initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}>
              <h2 className="text-5xl md:text-6xl font-headline font-light tracking-wider mb-6">Reserve Your Place at the Forum</h2>
              <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto mb-12">Via Sacra, 1, 00186 Roma RM, Italy</p>
              <Button asChild size="lg" variant="default" className="font-semibold tracking-widest uppercase">
                  <Link href="#">Make a Reservation</Link>
              </Button>
            </MotionDiv>
        </div>
      </section>
    </div>
  );
}
