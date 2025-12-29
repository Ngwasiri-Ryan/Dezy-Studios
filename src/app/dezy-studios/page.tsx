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
  ArrowRight, Camera, Video, Film, Clapperboard, MonitorPlay, Eye, 
  Users, Target, Sparkles, CheckCircle, Heart, Star
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
  { icon: Camera, title: "Photography", description: "Capturing moments with artistry and precision." },
  { icon: Video, title: "Videography", description: "Cinematic storytelling for brands and events." },
  { icon: Film, title: "Video Editing", description: "Polishing footage into a compelling narrative." },
  { icon: Target, title: "Content Creation", description: "Strategic visuals that engage and convert." },
];

const processSteps = [
    {
        title: "The Setup",
        description: "Meticulous planning and preparation. We arrange the gear, scout locations, and set the scene to ensure a smooth and efficient shoot.",
        imageId: "project-photo-3",
        imageHint: "camera setup"
    },
    {
        title: "The Shoot",
        description: "This is where the magic happens. We capture the moments, direct the action, and work with subjects to bring the creative vision to life through the lens.",
        imageId: "project-video-2",
        imageHint: "filming action"
    },
    {
        title: "The Edit",
        description: "In post-production, we assemble the story. Footage is edited, colors are graded, and sound is mixed to create a polished, cinematic final product.",
        imageId: "project-video-1",
        imageHint: "video editing timeline"
    }
];

export default function DezyStudiosPage() {
  const heroImage = getPlaceholderImage("project-video-2");
  const identityImage = getPlaceholderImage("project-photo-2");

  const featuredWork = portfolio.filter(p => p.division === "Dezy Studios").slice(0, 3);
  const relevantTestimonials = testimonials.filter(t => ["Wedding Client", "Content Creator", "E-commerce Store Owner"].includes(t.company)).slice(0,2);
  
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
      <motion.section variants={fadeInUp} className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden bg-black">
        <motion.div className="absolute inset-0 z-0" style={{ scale }}>
          {heroImage && 
            <Image
              src={heroImage.imageUrl}
              alt="Dezy Studios abstract background"
              fill
              className="object-cover opacity-60"
              quality={100}
              priority
              data-ai-hint={heroImage.imageHint}
            />
          }
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 p-4">
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white"
          >
            Dezy Studios
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="mt-4 text-xl md:text-2xl text-primary font-semibold tracking-wider"
          >
            Visual stories, captured and crafted.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#work">Explore the Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white hover:border-white">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. Identity & Purpose */}
      <motion.section variants={fadeInUp} className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">The Mission</Badge>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Capturing Life in Motion</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dezy Studios is the photography and videography identity focused on capturing moments, brands, and stories. From the quiet emotion of a portrait to the dynamic energy of a brand film, we create visuals that resonate and endure.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              {identityImage && 
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                  <Image
                    src={identityImage.imageUrl}
                    alt="Dezy Studios identity"
                    width={800}
                    height={600}
                    className="object-cover"
                    data-ai-hint={identityImage.imageHint}
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
                </div>
              }
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Behind-the-Scenes / Process */}
      <motion.section variants={fadeInUp} className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-16">
                  <Badge className="mb-4 bg-primary/10 text-primary">Our Production Flow</Badge>
                  <h2 className="text-4xl md:text-5xl font-headline font-bold">From Lens to Legend</h2>
                  <p className="text-lg text-muted-foreground mt-4">Follow our cinematic process for creating powerful visual narratives.</p>
              </div>

              <div className="relative">
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
                                <Card className="p-8 bg-card shadow-lg border-primary/10">
                                    <Badge variant="outline" className="mb-4">{`Phase 0${index + 1}`}</Badge>
                                    <h3 className="text-3xl font-headline font-bold mb-4">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </Card>
                              </div>
                              
                              <div className="hidden md:block w-1/12">
                                  <div className="w-5 h-5 rounded-full bg-primary mx-auto ring-4 ring-primary/20" />
                              </div>

                              <div className="md:w-5/12 mt-8 md:mt-0">
                                {image && (
                                    <div className="relative rounded-lg overflow-hidden shadow-xl aspect-video">
                                      <Image
                                          src={image.imageUrl}
                                          alt={step.title}
                                          fill
                                          className="object-cover"
                                          data-ai-hint={image.imageHint}
                                      />
                                       <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                            <MonitorPlay className="w-16 h-16 text-white" />
                                        </div>
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
      <motion.section variants={fadeInUp} className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center p-8 h-full bg-card/80 backdrop-blur-sm border border-primary/10 hover:border-primary/20 hover:bg-card transition-all duration-300 hover:shadow-lg">
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
      <motion.section id="work" variants={fadeInUp} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Showcase</Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground mt-4">Highlights from our photography and videography portfolio.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.map((project, index) => {
              const projectImage = getPlaceholderImage(project.imageId);
              return (
                <motion.div key={project.id} variants={fadeInUp}>
                  <Link href={`/portfolio/${project.id}/details`}>
                    <Card className="group overflow-hidden">
                      <div className="relative aspect-[4/3]">
                        {projectImage && 
                          <Image 
                            src={projectImage.imageUrl} 
                            alt={project.title} 
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={projectImage.imageHint}
                          />
                        }
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <MonitorPlay className="w-16 h-16 text-white"/>
                        </div>
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
      <motion.section variants={fadeInUp} className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary">Testimonials</Badge>
              <h2 className="text-4xl md:text-5xl font-headline font-bold">Words from Our Clients</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relevantTestimonials.map(testimonial => {
                const avatar = getPlaceholderImage(testimonial.avatarId);
                return (
                  <motion.div key={testimonial.id} variants={fadeInUp}>
                    <Card className="p-8 h-full bg-card border-l-4 border-primary">
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
      <motion.section variants={fadeInUp} className="py-20 md:py-32 text-center bg-gray-900 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Ready to tell your story?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/80">Let's capture something unforgettable.</p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 hover:border-white">
              <Link href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}>Quick Inquiry</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
