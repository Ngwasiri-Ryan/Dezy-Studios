'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";
import { ArrowRight, Camera, Film, Monitor, Palette, ShoppingBag, Sparkles, CheckCircle, Zap, Target, Users, Wand2, Brush, Printer } from "lucide-react";

const serviceIcons: { [key: string]: React.ElementType } = {
  "Photography": Camera,
  "Graphic Design": Palette,
  "Video Editing": Film,
  "Videography": Monitor,
  "Videography & Video Editing": Film,
  "Product Design": ShoppingBag,
  "Brand Campaigns": Zap,
  "Screen Printing": Printer,
  "Resin Art": Wand2,
  "Stone Engraving": Brush,
  "Custom Merchandise": ShoppingBag,
  "Brand Campaign Production": Zap,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  return (
    <motion.div 
      className="bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PageHeader
        title={<span className="text-gradient">Creative Services</span>}
        subtitle="Comprehensive solutions for your vision"
        description="Explore our full spectrum of creative services designed to transform your ideas into impactful visual stories"
        className="bg-gradient-to-b from-secondary/50 to-background"
      />

      {/* Services Overview */}
      <motion.section variants={itemVariants} className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-semibold border-primary/30 text-primary">
              What We Offer
            </Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">
              Tailored Creative <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Each service is crafted with precision and passion, ensuring your vision is not just met, but exceeded.
            </p>
          </div>

          {/* Services Grid - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.title] || Sparkles;
              return (
                <motion.div 
                  key={service.id} 
                  variants={itemVariants}
                  className="hover:transform hover:-translate-y-2 transition-all duration-300"
                >
                  <Card className="h-full flex flex-col border-2 border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group overflow-hidden bg-card/50 backdrop-blur-sm">
                    {/* Service Icon & Header */}
                    <CardHeader className="pb-6 relative">
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Sparkles className="h-6 w-6 text-primary/50" />
                      </div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
                            {Icon && <Icon className="h-7 w-7" />}
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20">
                          {service.division}
                        </Badge>
                      </div>
                      <CardTitle className="font-headline text-2xl md:text-3xl mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {service.shortDescription}
                      </CardDescription>
                    </CardHeader>

                    {/* Service Content */}
                    <CardContent className="flex-grow pb-8">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.longDescription}
                      </p>
                      
                      {/* Key Features */}
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

                    {/* Service Footer */}
                    <CardFooter className="pt-6 border-t border-border/50">
                      <Button 
                        asChild 
                        variant="link" 
                        className="p-0 h-auto text-primary hover:text-primary/80 group/link transition-colors"
                      >
                        <Link href="/contact" className="flex items-center">
                          <span className="text-lg font-semibold">Discuss Your Project</span>
                          <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/link:translate-x-2" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section variants={itemVariants} className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-semibold border-primary/30 text-primary">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A streamlined process designed for seamless collaboration and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <motion.div key={index} variants={itemVariants} className="text-center">
                <Card className="border-2 border-primary/5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mx-auto mb-6 group">
                      <span className="text-3xl font-headline font-bold text-primary">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-headline font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={itemVariants} className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <Badge 
              variant="secondary" 
              className="mb-8 px-6 py-2 text-base font-bold bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Ready to Start?
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary-foreground mb-6">
              Let's Create Something <span className="text-primary-foreground/90">Extraordinary</span>
            </h2>
            
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-10">
              Have a specific project in mind? Let's discuss how we can bring your vision to life with our creative services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="px-10 py-7 text-lg font-bold group hover:scale-105 hover:shadow-2xl hover:shadow-primary-foreground/20 transition-all duration-300"
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
                className="px-10 py-7 text-lg font-bold border-2 border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Link href="/portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
            
            <p className="text-primary-foreground/70 mt-12 text-lg">
              <CheckCircle className="inline-block h-5 w-5 mr-2" />
              Free consultation for all new projects
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
