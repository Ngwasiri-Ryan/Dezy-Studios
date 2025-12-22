import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Code, Film, MessageCircle, Monitor, Palette, PenTool, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { services, portfolio, testimonials, faq } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";

const serviceIcons: { [key: string]: React.ElementType } = {
  "Photography": Camera,
  "Graphic Design": Palette,
  "Video Editing": Film,
  "Videography": Monitor,
  "Product Design": ShoppingBag,
};


export default function Home() {
  const heroImage = getPlaceholderImage("hero-1");

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full h-[80vh] md:h-screen text-primary-foreground">
          <div className="absolute inset-0 bg-foreground/70 z-10" />
          {heroImage && 
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          }
          <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-balance">
              Dezy Arts
            </h1>
            <p className="mt-4 max-w-[700px] text-lg md:text-xl">
              Crafting visual stories through photography, design, and motion.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-bold">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-bold">
                <Link href="/services">My Services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">What I Do</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From capturing timeless moments to building stunning brand identities, I offer a range of creative services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-12">
              {services.slice(0, 5).map((service) => {
                 const Icon = serviceIcons[service.title] || PenTool;
                 return (
                  <div key={service.id} className="flex flex-col items-center text-center gap-4">
                    <div className="bg-background rounded-full p-4 shadow-md">
                       <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                  </div>
                 );
              })}
            </div>
          </div>
        </section>

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Featured Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A glimpse into my creative world. Explore some of my favorite projects.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
              {portfolio.slice(0, 6).map((item) => {
                const projectImage = getPlaceholderImage(item.imageId);
                return (
                  <Link key={item.id} href="/portfolio" className="group block">
                    <Card className="overflow-hidden h-full flex flex-col">
                       {projectImage && 
                        <div className="overflow-hidden">
                          <Image
                            src={projectImage.imageUrl}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={projectImage.imageHint}
                          />
                        </div>
                       }
                      <CardHeader>
                        <CardTitle className="font-headline">{item.title}</CardTitle>
                        <CardDescription>{item.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="font-bold">
                <Link href="/portfolio">Explore All Projects <ArrowRight className="ml-2 h-5 w-5"/></Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-center mb-12">What My Clients Say</h2>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col">
                        <CardHeader className="flex flex-row items-center gap-4">
                          <Avatar>
                            <AvatarImage src={getPlaceholderImage(testimonial.avatarId)?.imageUrl} alt={testimonial.name} data-ai-hint={getPlaceholderImage(testimonial.avatarId)?.imageHint}/>
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="font-headline text-lg">{testimonial.name}</CardTitle>
                            <CardDescription>{testimonial.company}</CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground italic">"{testimonial.feedback}"</p>
                        </CardContent>
                        <CardFooter>
                          <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex"/>
            </Carousel>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="font-bold text-lg">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        
        <section id="contact-cta" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mt-4">
              Let's create something amazing together. I'm available for new projects and collaborations.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="font-bold">
                <Link href="/contact">Let's Talk <MessageCircle className="ml-2 h-5 w-5"/></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
