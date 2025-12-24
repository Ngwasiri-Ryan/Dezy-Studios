'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ArrowRight, Download, Target, Lightbulb, PenTool, Gem, Sparkles, Heart, Eye, Users, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { journey, coreValues } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapEmbed } from "@/components/shared/map-embed";

export default function AboutPage() {
  const aboutImage = getPlaceholderImage("about-me");
  const missionImage = getPlaceholderImage("mission-vision");
  const founderImage = getPlaceholderImage("founder-spotlight");

  const icons: { [key: string]: React.ElementType } = {
    Target,
    Lightbulb,
    PenTool,
    Gem,
  };

  return (
    <div className="bg-background">
      <PageHeader
        title="About Dezy Enterprise"
        subtitle="Where Creativity Meets Vision"
        description="Discover the story, values, and passion behind our creative studio"
        className="bg-gradient-to-b from-secondary to-background"
      />

      {/* Mission / Vision Section - Enhanced */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 animate-fade-in-up">
              <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-semibold border-primary/30 text-primary">
                Our Purpose
              </Badge>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">
                Crafting Visual Stories <span className="text-primary">That Resonate</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <p>
                    At Dezy Enterprise, we believe every brand, person, and moment holds a unique narrative waiting to be told. We transform these narratives into <span className="text-primary font-semibold">visually compelling stories</span> that create lasting impact.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <Heart className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <p>
                    Our vision is to redefine creative excellence, consistently pushing boundaries to deliver work that's not only aesthetically beautiful but also deeply meaningful and strategically effective.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in-up animation-delay-200">
              {missionImage && (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
                    <Image
                      src={missionImage.imageUrl}
                      alt={missionImage.description}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl"
                      data-ai-hint={missionImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section - Enhanced */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-semibold border-primary/30 text-primary">
              Our Evolution
            </Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Milestone Journey</h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              The key moments that have shaped Dezy Enterprise into what it is today
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block"></div>
            
            {journey.map((item, index) => (
              <div key={index} className="mb-16 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex md:items-center flex-col md:flex-row">
                  {/* Year section */}
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <div className="inline-flex items-center gap-3">
                      <div className="hidden md:block flex-1 h-px bg-gradient-to-l from-primary/30 to-transparent" />
                      <Badge 
                        variant="secondary" 
                        className="px-5 py-2 text-base font-bold bg-primary text-primary-foreground border-primary hover:bg-primary/90 transition-colors"
                      >
                        {item.year}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30 z-10 shrink-0 items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-background" />
                  </div>
                  
                  {/* Content section */}
                  <div className="md:w-1/2 md:pl-12">
                    <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden group">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-headline font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <div className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                            0{index + 1}
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Founder Spotlight Section - Enhanced */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="animate-fade-in-up">
              <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-semibold border-primary/30 text-primary">
                Creative Visionary
              </Badge>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">
                Meet <span className="text-primary">Binda Desmond</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <Eye className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <p>
                    As the creative force behind Dezy Enterprise, my journey began with a camera in hand and an unwavering passion to capture the beauty I saw in the world around me.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <p>
                    This passion evolved into a multidisciplinary creative studio where we explore photography, videography, and graphic design to create work that's not just visually stunning, but emotionally resonant.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="group px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  disabled
                >
                  <Link href="#">
                    Download Portfolio PDF
                    <Download className="ml-3 h-5 w-5 transition-transform group-hover:translate-y-1" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 text-base font-semibold border-2 hover:border-primary/50 transition-all duration-300"
                >
                  <Link href="/contact">
                    Connect With Me
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-200">
              {founderImage && (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border-2 border-primary/10">
                    <Image
                      src={founderImage.imageUrl}
                      alt={founderImage.description}
                      width={800}
                      height={1000}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={founderImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Enhanced */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-semibold border-primary/30 text-primary">
              Our Foundation
            </Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Guiding Principles</h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              The core values that shape every project and relationship at Dezy Enterprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = icons[value.icon];
              return (
                <div 
                  key={index} 
                  className="animate-fade-in-up hover:transform hover:-translate-y-2 transition-all duration-300" 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="h-full border-2 border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-8 text-center h-full flex flex-col items-center">
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center justify-center h-24 w-24 rounded-full bg-primary/10 text-primary mx-auto group-hover:bg-primary/20 transition-all duration-300">
                          {Icon && <Icon className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-headline font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        {value.description}
                      </p>
                      
                      <div className="mt-8 w-12 h-1 bg-primary/20 group-hover:bg-primary/50 transition-all duration-300 rounded-full" />
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-semibold border-primary/30 text-primary">
              Our Location
            </Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Come Visit Us</h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              We are located in the heart of Derby, United Kingdom.
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <MapEmbed />
          </div>
        </div>
      </section>
      
      {/* CTA Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary py-24 md:py-32">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <Badge 
              variant="secondary" 
              className="mb-8 px-6 py-2 text-base font-bold bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Let's Create Together
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary-foreground mb-6 animate-fade-in-up">
              Ready to Bring Your Vision to Life?
            </h2>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-10 animate-fade-in-up animation-delay-200">
              Let's collaborate on something extraordinary. Your creative journey starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
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
                  View Our Work
                </Link>
              </Button>
            </div>
            
            <p className="text-primary-foreground/70 mt-12 text-lg animate-fade-in-up animation-delay-600">
              Average response time: 4 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
