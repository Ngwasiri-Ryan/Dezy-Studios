'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";
import { ArrowRight, Camera, Film, Monitor, Palette, ShoppingBag, Sparkles, CheckCircle, Zap, Target, Users, Wand2, Brush, Printer, Wrench } from "lucide-react";

const serviceIcons: { [key: string]: React.ElementType } = {
  "Photography": Camera,
  "Graphic Design": Palette,
  "Video Editing": Film,
  "Videography": Monitor,
  "Videography & Video Editing": Film,
  "Product Design": ShoppingBag,
  "Brand Campaign Production": Zap,
  "Screen Printing": Printer,
  "Resin Art": Wand2,
  "Stone Engraving": Brush,
  "Custom Merchandise": ShoppingBag,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    } 
  },
};

export default function ServicesPage() {
  return (
    <motion.div 
      className="bg-background overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
       <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl"
            animate={{
              x: [0, 100 * Math.sin(i), 0],
              y: [0, 50 * Math.cos(i), 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25 + i * 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + i * 10}%`,
            }}
          />
        ))}
      </div>
      <PageHeader
        title={
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Creative Services
            </motion.h1>
        }
        subtitle={
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                Comprehensive solutions to bring your vision to life.
            </motion.p>
        }
        description="Explore our full spectrum of creative services designed to transform your ideas into impactful visual stories."
        className="relative z-10 bg-gradient-to-b from-secondary/20 via-background to-background"
      />

      {/* Services Overview */}
      <motion.section variants={itemVariants} className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold border-primary/30 text-primary bg-primary/10">
              <Wrench className="w-4 h-4 mr-2" />
              What We Offer
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Tailored Creative Solutions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Each service is crafted with precision and passion, ensuring your vision is not just met, but exceeded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.title] || Sparkles;
              return (
                <motion.div 
                  key={service.id} 
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card className="relative h-full flex flex-col border-2 border-transparent hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group overflow-hidden bg-white/5 backdrop-blur-sm">
                     <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />

                    <CardHeader className="pb-6 relative">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
                                {Icon && <Icon className="h-7 w-7" />}
                            </div>
                            <Badge variant="secondary" className="text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20">
                                {service.division}
                            </Badge>
                         </div>
                         <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </CardHeader>

                    <CardContent className="flex-grow pb-8">
                       <CardTitle className="text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground mb-6">
                        {service.shortDescription}
                      </CardDescription>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Professional quality delivery</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Fast turnaround time</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Customized to your needs</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-6 border-t border-border/10">
                       <p className="text-sm text-muted-foreground line-clamp-3">{service.longDescription}</p>
                    </CardFooter>
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section variants={itemVariants} className="py-20 md:py-28 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-semibold border-primary/30 text-primary bg-primary/10">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A streamlined process designed for seamless collaboration and exceptional results.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/20 hidden md:block" />
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We listen to understand your vision, goals, and requirements.",
                icon: Users
              },
              {
                step: "02",
                title: "Strategy",
                description: "Crafting a tailored plan to bring your vision to life effectively.",
                icon: Target
              },
              {
                step: "03",
                title: "Execution",
                description: "Bringing the plan to life with precision and creative excellence.",
                icon: Sparkles
              },
              {
                step: "04",
                title: "Delivery",
                description: "Presenting the final work and ensuring your complete satisfaction.",
                icon: CheckCircle
              }
            ].map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center relative">
                  <div className="relative z-10">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-background border-2 border-primary/20 mx-auto mb-6 group transition-all duration-300 hover:scale-105">
                        <span className="text-3xl font-bold text-primary">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        variants={itemVariants}
        className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <Badge 
              variant="secondary" 
              className="mb-8 px-6 py-2 text-base font-bold bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
            >
              Ready to Start?
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Let's Create Something Extraordinary
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-10">
              Have a specific project in mind? Let's discuss how we can bring your vision to life with our creative services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="px-10 py-7 text-lg font-bold group bg-white text-blue-600 hover:bg-white/90 hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-10 py-7 text-lg font-bold border-2 border-white/50 text-white hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <Link href="/portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
            
            <p className="text-white/70 mt-12 text-lg">
              <CheckCircle className="inline-block h-5 w-5 mr-2" />
              Free consultation for all new projects
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
