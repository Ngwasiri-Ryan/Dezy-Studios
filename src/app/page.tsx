'use client';

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Camera, Palette, Film, Monitor, ShoppingBag, ArrowRight, Star, MessageCircle, Sparkles, Zap, Heart, Target } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from "@/components/ui/button";
import { services, portfolio, testimonials } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Counter } from '@/components/shared/counter';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const homeServices = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Capturing timeless moments with professional precision and artistic vision.',
    color: 'from-primary/20 to-primary/5'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creating stunning visual identities that make your brand stand out.',
    color: 'from-secondary/20 to-secondary/5'
  },
  {
    icon: Film,
    title: 'Video Editing',
    description: 'Transforming raw footage into compelling stories that engage and inspire.',
    color: 'from-primary/20 to-secondary/5'
  },
  {
    icon: Monitor,
    title: 'Videography',
    description: 'Professional video production for events, businesses, and creative projects.',
    color: 'from-secondary/20 to-primary/5'
  },
  {
    icon: ShoppingBag,
    title: 'Product Design',
    description: 'Custom merchandise including t-shirts, sweaters, and mugs.',
    color: 'from-primary/20 to-secondary/10'
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const [ctaParticles, setCtaParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Create floating particles in hero section
    const hero = heroRef.current;
    if (hero) {
      const particles = hero.querySelectorAll('.particle');
      if (particles.length > 0) return; // Particles already created

      const createParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'particle absolute w-1 h-1 bg-primary/30 rounded-full';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `float ${6 + Math.random() * 8}s linear infinite`;
        hero.appendChild(particle);
      };

      for (let i = 0; i < 20; i++) createParticle();
    }
  }, []);

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
    <>
      {/* Hero Section with Advanced Effects */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/10 animate-gradient-shift" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent animate-pulse-slow" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Floating Text Effect */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="animate-float-in"
            >
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-balance mb-6 relative">
                <span className="relative inline-block">
                  Bringing Your 
                  <span className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-50 animate-pulse-slow" />
                </span>
                {' '}
                <span className="text-gradient relative">
                  Creative Vision
                  <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-primary animate-spin-slow" />
                </span>
                {' '}
                to Life
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Professional photography, design, and videography services by Binda Desmond
              <span className="inline-block ml-2">
                <Target className="w-6 h-6 text-primary animate-bounce-subtle" />
              </span>
            </motion.p>

            {/* Animated CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild
                size="lg" 
                className="group hover:scale-105 transition-transform duration-300"
              >
                <Link href="/portfolio">
                  <span className="flex items-center gap-2">
                    View Portfolio
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button asChild
                variant="outline" 
                size="lg"
                className="hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Link href="/services">
                My Services
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Animated Stats with Counter Effect */}
          <div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: 500, label: 'Projects Completed', suffix: '+' },
              { number: 300, label: 'Happy Clients', suffix: '+' },
              { number: 5, label: 'Years Experience', suffix: '+' },
              { number: 50, label: 'Awards Won', suffix: '+' },
            ].map((stat, index) => (
              <motion.div
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-headline font-bold text-primary relative">
                    <Counter value={stat.number} suffix={stat.suffix} />
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-xl" />
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground mt-2 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </section>

       {/* Services Section with Hover Effects */}
       <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--foreground)) 2%, transparent 2%)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

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
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Services</h2>
              <Zap className="w-6 h-6 text-secondary-foreground animate-pulse animation-delay-150" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive creative solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl group-hover:scale-105`} />
                  
                  <div className="relative p-8 rounded-2xl bg-card border border-border/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl z-10 overflow-hidden">
                    {/* Animated Icon */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}>
                        <Icon className="text-primary w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <h3 className="text-xl font-bold font-headline mb-3 relative">
                      {service.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowRight className="text-primary" size={24} />
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
      </section>

      {/* Featured Work Section with 3D Effect */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-orb-move-1" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-l from-secondary/10 to-transparent rounded-full blur-3xl animate-orb-move-2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <div className="relative h-96 rounded-2xl overflow-hidden transform perspective-1000 group-hover:rotate-y-3 transition-transform duration-700">
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
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
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
      </section>

       {/* Testimonials Section with Carousel */}
       <section className="py-20 bg-background relative overflow-hidden">
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
                       <div className="relative p-8 rounded-2xl bg-card border border-border/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
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
      </section>

      {/* CTA Section with Gradient Animation */}
      <section ref={ctaSectionRef} className="py-20 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary animate-gradient-flow" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>

        {/* Floating Particles */}
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
      </section>
    </>
  );
}
