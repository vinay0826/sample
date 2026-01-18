import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center">
        <div className="absolute inset-0 bg-background" />

        <MotionDiv
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80"
            alt="Ancient Roman architecture"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </MotionDiv>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center space-y-8">
          <MotionDiv variants={headlineVariants} initial="hidden" animate="visible">
            <MotionDiv variants={childVariants}>
              <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-headline font-light leading-none tracking-tighter">
                A Feast for Gods
              </h1>
            </MotionDiv>
            <MotionDiv variants={childVariants}>
              <h2 className="text-2xl md:text-3xl font-headline tracking-[0.3em] uppercase text-primary">
                A Taste of Eternity
              </h2>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
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

      {/* FEATURED DISHES */}
      <section className="w-full py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish, i) => (
              <MotionDiv
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15 }}
              >
                <Card className="group h-full flex flex-col overflow-hidden bg-card border-border/50 rounded-md">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow text-center">
                    <CardTitle className="mb-2 text-3xl font-headline">
                      {dish.name}
                    </CardTitle>
                    <p className="text-primary text-lg">
                      {formatPrice(dish.price)}
                    </p>
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

      {/* ABOUT */}
      <section className="w-full py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <MotionDiv className="relative w-full h-[70vh]">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80"
                alt="Roman villa interior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-md"
              />
            </MotionDiv>

            <MotionDiv className="space-y-8 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-headline font-light">
                The Elysian Philosophy
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Elysian Bites honors the Roman table with a vegetarian soul,
                transforming humble ingredients into timeless feasts.
              </p>
              <Button asChild variant="link" className="text-lg tracking-widest text-primary">
                <Link href="/menu">
                  Discover Our Passion <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-5xl md:text-6xl font-headline text-center mb-20">
            Acclamations from Our Patricians
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <MotionDiv key={i}>
                <Card className="p-8 text-center h-full">
                  <p className="text-foreground/70 text-lg mb-6">"{t.text}"</p>
                  <h3 className="font-semibold text-lg tracking-widest uppercase">
                    {t.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t.title}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
