'use client';

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Camera, Palette, Film, Monitor, ArrowRight, Star, MessageCircle, Sparkles, Zap, Heart, Target, Briefcase, Video } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from "@/components/ui/button";
import { services, portfolio, testimonials } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Counter } from '@/components/shared/counter';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';

const homeServices = [
  {
    icon: Camera,
    title: 'Photography',
    division: 'Dezy Arts',
    description: 'Capturing timeless moments with professional precision and artistic vision.',
    color: 'from-primary/20 to-primary/5'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    division: 'Dezy Arts',
    description: 'Creating stunning visual identities that make your brand stand out.',
    color: 'from-secondary/20 to-secondary/5'
  },
  {
    icon: Video,
    title: 'Videography',
    division: 'Dezy Studios',
    description: 'Professional video production for events, businesses, and creative projects.',
    color: 'from-secondary/20 to-primary/5'
  },
  {
    icon: Film,
    title: 'Video Editing',
    division: 'Dezy Studios',
    description: 'Transforming raw footage into compelling stories that engage and inspire.',
    color: 'from-primary/20 to-secondary/5'
  },
  {
    icon: Briefcase,
    title: 'Brand Campaigns',
    division: 'Dezy Studios',
    description: 'End-to-end production for impactful brand campaigns.',
    color: 'from-primary/20 to-secondary/10'
  },
];

export default function Home() {
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const [ctaParticles, setCtaParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generatedParticles = [...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-white/30 rounded-full animate-float-random"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${10 + Math.random() * 10}s`,
        }}
      />
    ));
    setCtaParticles(generatedParticles);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {/* Hero Section */}
      <motion.section
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-background animate-gradient-shift" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-balance mb-6"
          >
            Two Creative Worlds. <span className="text-gradient">One Vision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Dezy Arts & Dezy Studios — visual storytelling, art, and production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="group hover:scale-105 transition-transform duration-300 hover:shadow-glow">
              <Link href="/portfolio">
                Explore Dezy Arts
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:border-primary hover:text-primary transition-all duration-300">
              <Link href="/portfolio">
                Enter Dezy Studios
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>


       {/* Services Section with Hover Effects */}
       <motion.section 
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="py-20 bg-secondary/50 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary animate-pulse" />
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Our Capabilities</h2>
              <Zap className="w-6 h-6 text-secondary-foreground animate-pulse animation-delay-150" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creative solutions from our two specialized divisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl group-hover:scale-105`} />
                  
                  <div className="relative p-8 rounded-2xl bg-card border border-border/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl z-10 overflow-hidden h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}>
                            <Icon className="text-primary w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <Badge variant={service.division === 'Dezy Arts' ? 'outline' : 'default'}>{service.division}</Badge>
                    </div>

                    <h3 className="text-xl font-bold font-headline mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="mt-6">
                        <Button variant="link" asChild className="p-0 text-primary group/link">
                            <Link href="/services">
                                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild 
              size="lg" 
              className="group hover:shadow-glow"
            >
              <Link href="/services">
                <span className="flex items-center gap-2">
                  View All Services
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Work Section */}
      <motion.section 
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl mb-4 relative inline-block">
              Featured Work
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into recent projects and creative endeavors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.slice(0, 3).map((project, index) => {
              const projectImage = getPlaceholderImage(project.imageId);
              return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/portfolio`}
                  className="group relative"
                >
                  <div className="relative h-96 rounded-2xl overflow-hidden transition-all duration-700 group-hover:shadow-glow-lg">
                    {projectImage && 
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        data-ai-hint={projectImage.imageHint}
                      />
                    }
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 p-6 flex flex-col justify-end">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-headline text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-4">{project.category}</p>
                        <div className="flex items-center text-primary">
                          <span className="text-sm font-medium">View Project</span>
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white/90 border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              </motion.div>
            )})}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild 
              size="lg" 
              className="group hover:shadow-glow-lg"
            >
              <Link href="/portfolio">
                <span className="flex items-center gap-2">
                  View Full Portfolio
                  <ArrowRight className="group-hover:rotate-90 transition-transform duration-500" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

       {/* Testimonials Section with Carousel */}
       <motion.section 
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="py-20 bg-secondary/50 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Client Testimonials</h2>
              <Heart className="w-6 h-6 text-secondary-foreground animate-pulse animation-delay-300" fill="currentColor" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What clients say about working with Dezy Enterprise
            </p>
          </motion.div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {testimonials.slice(0, 6).map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="p-4 h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative group h-full">
                       <div className="relative p-8 rounded-2xl bg-card border border-border/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col hover:shadow-glow">
                          <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/30 transition-colors duration-300">
                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>
                          
                          <div className="flex items-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`text-yellow-400 ${
                                  i < testimonial.rating ? 'fill-current' : ''
                                } group-hover:scale-110 transition-transform duration-300`}
                                style={{ transitionDelay: `${i * 50}ms` }}
                                size={20}
                              />
                            ))}
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed mb-8 italic relative flex-grow">
                            "{testimonial.feedback}"
                          </p>

                          <div className="flex items-center gap-4 mt-auto">
                            <Avatar className="relative">
                              <AvatarImage src={getPlaceholderImage(testimonial.avatarId)?.imageUrl} alt={testimonial.name} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Avatar>
                            <div>
                              <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {testimonial.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {testimonial.company}
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </motion.section>

      {/* CTA Section with Gradient Animation */}
      <motion.section 
        ref={ctaSectionRef} 
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-flow" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>

        <div className="absolute inset-0">
          {ctaParticles.map((particle, i) => (
              <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: Math.random() }}
              >
                  {particle}
              </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"
            >
              Ready to Start Your Project?
            </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto mt-4"
          >
            Let's collaborate to bring your creative vision to life. Get in touch today for
            a free consultation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild
              variant="secondary" 
              size="lg" 
              className="group hover:scale-105 hover:shadow-glow-white"
            >
              <Link href="/contact">
              Get a Quote
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

    