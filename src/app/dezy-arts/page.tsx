'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { portfolio, testimonials, services } from "@/lib/data";
import { 
  ArrowRight, Palette, Printer, Brush, Sparkles, Wand2, Eye, 
  Layers, PenTool, Tv, ShoppingBag, CheckCircle, Heart, Star,
  Palette as PaletteIcon, ChevronRight
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const artsServices = services.filter(s => s.division === 'Dezy Arts');

const processSteps = [
    {
        title: "The Idea",
        description: "Every creation begins with a spark. We collaborate to sketch, brainstorm, and define the visual direction, ensuring the foundation is as strong as the final piece.",
        imageId: "project-design-1",
        imageHint: "design sketch"
    },
    {
        title: "The Craft",
        description: "This is where ideas take form. Using digital tools, we meticulously design, refine, and perfect every pixel and vector until the concept is fully realized.",
        imageId: "project-design-2",
        imageHint: "graphic design software"
    },
    {
        title: "The Finish",
        description: "From screen to reality. We oversee the printing and production process, ensuring color accuracy and material quality for a flawless final product.",
        imageId: "product-tshirt",
        imageHint: "printing press"
    }
];

export default function DezyArtsPage() {
  const heroImage = getPlaceholderImage("project-design-1");
  const identityImage = getPlaceholderImage("project-design-2");
  
  const featuredWork = portfolio.filter(p => p.division === "Dezy Arts").slice(0, 3);
  const relevantTestimonials = testimonials.filter(t => ["Startup CEO", "Restaurant Owner", "Musician"].includes(t.company)).slice(0,2);
  
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-background text-foreground"
    >
      {/* 1. Immersive Hero */}
      <motion.section variants={fadeInUp} className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ scale }}>
          {heroImage && 
            <Image
              src={heroImage.imageUrl}
              alt="Dezy Arts abstract background"
              fill
              className="object-cover"
              quality={100}
              priority
              data-ai-hint={heroImage.imageHint}
            />
          }
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-blue-500/20" />
        </motion.div>
        
        <div className="relative z-10 p-4">
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400"
          >
            Dezy Arts
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="mt-4 text-xl md:text-2xl text-blue-300 font-semibold tracking-wider"
          >
            Design. Print. Expression.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex gap-4 justify-center">
             <Button asChild size="lg" className="group relative px-6 py-6 text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 overflow-hidden">
              <Link href="#work">
                <span className="relative flex items-center gap-2">Explore the Work <ChevronRight className="group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-6 py-6 text-base bg-background/50 backdrop-blur-sm border-white/20 hover:bg-white/10 hover:border-white/30">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. Identity & Purpose */}
       <motion.section variants={fadeInUp} className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
             <motion.div variants={fadeInUp} className="relative group">
              {identityImage && 
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border-2 border-white/10">
                   <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                    <Image
                      src={identityImage.imageUrl}
                      alt="Dezy Arts identity"
                      width={800}
                      height={1000}
                      className="object-cover"
                      data-ai-hint={identityImage.imageHint}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
                   <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                </div>
              }
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-4 text-blue-400 bg-blue-500/10 border-blue-500/20">The Vision</Badge>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Where Ideas Become <span className="text-blue-400">Tangible</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dezy Arts is the design, print, and crafted products arm of Dezy’s creative practice. It's where ideas are transformed into tangible expressions through thoughtful visuals, high-quality prints, and unique handcrafted items.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Behind-the-Scenes / Process */}
      <motion.section variants={fadeInUp} className="py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-16">
                  <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">Our Creative Process</Badge>
                  <h2 className="text-4xl md:text-5xl font-headline font-bold">From Concept to Creation</h2>
                  <p className="text-lg text-muted-foreground mt-4">A guided journey through how we bring artistic visions to life.</p>
              </div>

              <div className="relative max-w-6xl mx-auto">
                  {/* Center line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />
                  
                  {processSteps.map((step, index) => {
                      const image = getPlaceholderImage(step.imageId);
                      return (
                          <motion.div
                              key={index}
                              variants={fadeInUp}
                              className={`flex items-center mb-8 md:mb-16 ${
                                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                              }`}
                          >
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-4 md:pr-12 text-right' : 'pl-4 md:pl-12'}`}>
                                <motion.div whileHover={{ scale: 1.05 }} className="p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 inline-block max-w-md">
                                    <Badge variant="outline" className="mb-4">{`Step 0${index + 1}`}</Badge>
                                    <h3 className="text-2xl font-headline font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </motion.div>
                            </div>
                              <div className="relative z-10">
                                <div className="w-5 h-5 rounded-full bg-blue-500 ring-4 ring-background" />
                              </div>
                              <div className="w-1/2 p-4 md:p-8">
                                {image && (
                                    <motion.div whileHover={{ scale: 1.05 }} className="relative rounded-lg overflow-hidden shadow-xl aspect-video border border-white/10">
                                      <Image
                                          src={image.imageUrl}
                                          alt={step.title}
                                          fill
                                          className="object-cover"
                                          data-ai-hint={step.imageHint}
                                      />
                                    </motion.div>
                                )}
                              </div>
                          </motion.div>
                      );
                  })}
              </div>
          </div>
      </motion.section>

      {/* 4. Services Snapshot */}
      <motion.section variants={fadeInUp} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">What We Do</Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Core Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artsServices.map((service, index) => {
              const Icon = service.title === 'Graphic Design' ? Palette : service.title === 'Screen Printing' ? Printer : service.title === 'Resin Art' ? Wand2 : service.title === 'Stone Engraving' ? Brush : ShoppingBag;
              return (
                <motion.div key={index} variants={fadeInUp} className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                  <Card className="text-center p-8 h-full bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg border border-white/10 relative z-10">
                    <div className="inline-block p-4 bg-blue-500/10 rounded-lg mb-4">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.shortDescription}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 5. Featured Work */}
      <motion.section id="work" variants={fadeInUp} className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">Our Creations</Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Featured Work</h2>
            <p className="text-lg text-muted-foreground mt-4">A glimpse into our portfolio of design and print projects.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.map((project) => {
              const projectImage = getPlaceholderImage(project.imageId);
              return (
                <motion.div key={project.id} variants={fadeInUp}>
                  <Link href={`/portfolio/${project.id}/details`}>
                    <Card className="group overflow-hidden border-2 border-transparent hover:border-blue-500/50 transition-all duration-300">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        {projectImage && 
                          <Image 
                            src={projectImage.imageUrl} 
                            alt={project.title} 
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={projectImage.imageHint}
                          />
                        }
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{project.subCategory}</p>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/portfolio">View Full Portfolio <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/></Link>
            </Button>
          </div>
        </div>
      </motion.section>
      
      {/* 6. Social Proof */}
      <motion.section variants={fadeInUp} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">Client Voices</Badge>
              <h2 className="text-4xl md:text-5xl font-headline font-bold">Why Brands Love Us</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relevantTestimonials.map(testimonial => {
                const avatar = getPlaceholderImage(testimonial.avatarId);
                return (
                  <motion.div key={testimonial.id} variants={fadeInUp}>
                    <Card className="p-8 h-full bg-card/50 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground/50'}`} />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-6">"{testimonial.feedback}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.name} />}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
        </div>
      </motion.section>

      {/* 7. Conversion CTA */}
      <motion.section variants={fadeInUp} className="py-20 md:py-32 text-center bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Have a project in mind?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/90">Let's create something tangible and beautiful together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90 group">
              <Link href="/contact">Start a Project <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 hover:border-white">
              <Link href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}>Chat on WhatsApp</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
