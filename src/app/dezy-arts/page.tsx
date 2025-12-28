'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { portfolio, testimonials } from "@/lib/data";
import { 
  ArrowRight, Palette, Printer, Brush, Sparkles, Wand2, Eye, 
  Layers, PenTool, Tv, ShoppingBag, CheckCircle, Heart, Star
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

const servicesList = [
  { icon: Layers, title: "Brand & Logo Design", description: "Crafting memorable visual identities." },
  { icon: PenTool, title: "Graphic Design", description: "Visuals for digital and print media." },
  { icon: ShoppingBag, title: "Custom Apparel & Prints", description: "Tangible products with artistic flair." },
  { icon: Tv, title: "Visual Assets", description: "Graphics for social media and websites." },
];

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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

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
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-secondary/30" />
        </motion.div>
        
        <div className="relative z-10 p-4">
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold"
          >
            Dezy Arts
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="mt-4 text-xl md:text-2xl text-primary font-semibold tracking-wider"
          >
            Design. Print. Expression.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#work">Explore the Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. Identity & Purpose */}
      <motion.section variants={fadeInUp} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div variants={fadeInUp}>
              {identityImage && 
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-secondary/20">
                  <Image
                    src={identityImage.imageUrl}
                    alt="Dezy Arts identity"
                    width={800}
                    height={1000}
                    className="object-cover"
                    data-ai-hint={identityImage.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
                </div>
              }
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">The Vision</Badge>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Where Ideas Become Tangible</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dezy Arts is the design and print arm of Dezy’s creative practice. It's where ideas are transformed into tangible expressions through thoughtful visuals, high-quality print, and unique product design. We focus on creating assets that not only look beautiful but also communicate with purpose.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Behind-the-Scenes / Process */}
      <motion.section variants={fadeInUp} className="py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-16">
                  <Badge className="mb-4 bg-primary/10 text-primary">Our Creative Process</Badge>
                  <h2 className="text-4xl md:text-5xl font-headline font-bold">From Concept to Creation</h2>
                  <p className="text-lg text-muted-foreground mt-4">A guided journey through how we bring artistic visions to life.</p>
              </div>

              <div className="relative">
                  {/* Timeline */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-border hidden md:block" />

                  {processSteps.map((step, index) => {
                      const image = getPlaceholderImage(step.imageId);
                      const isEven = index % 2 === 0;
                      return (
                          <motion.div
                              key={index}
                              variants={fadeInUp}
                              className={`flex flex-col md:flex-row items-center justify-between mb-20 md:mb-32 ${isEven ? '' : 'md:flex-row-reverse'}`}
                          >
                              <div className="md:w-5/12 relative">
                                <Card className="p-8 bg-card shadow-lg">
                                    <Badge variant="outline" className="mb-4">{`Step 0${index + 1}`}</Badge>
                                    <h3 className="text-3xl font-headline font-bold mb-4">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </Card>
                              </div>

                              <div className="hidden md:block w-1/12">
                                  <div className="w-5 h-5 rounded-full bg-primary mx-auto" />
                              </div>

                              <div className="md:w-5/12 mt-8 md:mt-0">
                                {image && (
                                    <div className="relative rounded-lg overflow-hidden shadow-xl aspect-video">
                                      <Image
                                          src={image.imageUrl}
                                          alt={step.title}
                                          fill
                                          className="object-cover"
                                          data-ai-hint={step.imageHint}
                                      />
                                    </div>
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
            <Badge className="mb-4 bg-primary/10 text-primary">What We Do</Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Core Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center p-8 h-full bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg">
                    <div className="inline-block p-4 bg-primary/10 rounded-lg mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
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
            <Badge className="mb-4 bg-primary/10 text-primary">Our Creations</Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Featured Work</h2>
            <p className="text-lg text-muted-foreground mt-4">A glimpse into our portfolio of design and print projects.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.map((project, index) => {
              const projectImage = getPlaceholderImage(project.imageId);
              return (
                <motion.div key={project.id} variants={fadeInUp}>
                  <Link href={`/portfolio/${project.id}/details`}>
                    <Card className="group overflow-hidden">
                      <div className="relative aspect-square">
                        {projectImage && 
                          <Image 
                            src={projectImage.imageUrl} 
                            alt={project.title} 
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={projectImage.imageHint}
                          />
                        }
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{project.subCategory}</p>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/portfolio">View Full Portfolio <ArrowRight className="ml-2 w-5 h-5"/></Link>
            </Button>
          </div>
        </div>
      </motion.section>
      
      {/* 6. Social Proof */}
      <motion.section variants={fadeInUp} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary">Client Voices</Badge>
              <h2 className="text-4xl md:text-5xl font-headline font-bold">Why Brands Love Us</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relevantTestimonials.map(testimonial => {
                const avatar = getPlaceholderImage(testimonial.avatarId);
                return (
                  <motion.div key={testimonial.id} variants={fadeInUp}>
                    <Card className="p-8 h-full bg-card/50">
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
      <motion.section variants={fadeInUp} className="py-20 md:py-32 text-center bg-gradient-to-r from-primary to-rose-600 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Have a project in mind?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/90">Let's create something tangible and beautiful together.</p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground">
              <Link href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}>Chat on WhatsApp</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
