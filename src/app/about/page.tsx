
'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ArrowRight, Download, Target, Lightbulb, PenTool, Gem } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { journey, coreValues } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

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
        title="About Dezy Arts"
        subtitle="Creative. Visionary. Modern."
        className="bg-secondary"
      />

      {/* Mission / Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1 animate-fade-in-up">
              <h2 className="text-3xl font-headline font-bold mb-4">
                Our Mission & Vision
              </h2>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  At Dezy Arts, our mission is to craft <span className="text-primary font-semibold">visual stories</span> that resonate. We believe that every brand, person, and moment holds a unique narrative waiting to be told. We are committed to bringing that story to life with <span className="text-primary font-semibold">authenticity and creative flair</span>.
                </p>
                <p>
                  Our vision is to be a leading creative studio recognized for pushing the boundaries of visual storytelling, consistently delivering work that is not only beautiful but also deeply meaningful and impactful.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in-up animation-delay-200">
              {missionImage && (
                <div className="rounded-lg overflow-hidden shadow-2xl group">
                  <Image
                    src={missionImage.imageUrl}
                    alt={missionImage.description}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={missionImage.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-headline font-bold sm:text-5xl">Our Journey</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">The milestones that have shaped Dezy Arts.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>
            {journey.map((item, index) => (
              <div key={index} className="mb-12 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex md:items-center flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <Badge variant="outline" className="mb-2 text-primary border-primary">{item.year}</Badge>
                  </div>
                  <div className="hidden md:block w-8 h-8 rounded-full bg-primary border-4 border-secondary ring-4 ring-primary shrink-0 z-10" />
                  <div className="md:w-1/2 md:pl-8">
                     <div className="p-6 rounded-lg bg-card border shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                       <h3 className="text-xl font-headline font-bold mb-2">{item.title}</h3>
                       <p className="text-muted-foreground">{item.description}</p>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Founder Spotlight Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-headline font-bold mb-4">The Founder</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  I'm Binda Desmond, the creative force behind Dezy Arts. My journey began with a camera in hand, driven by a passion to capture the beauty I saw in the world. This passion evolved into a multidisciplinary creative studio where I explore photography, videography, and graphic design.
                </p>
                <p>
                  I pour my heart and soul into every project, constantly learning and pushing the boundaries of creativity to create work that is not only visually stunning but also emotionally resonant.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" disabled>
                  {/* The PDF download would be implemented here */}
                  <Link href="#">Download PDF Portfolio <Download className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              {founderImage && (
                <div className="rounded-lg overflow-hidden shadow-2xl perspective-1000 group">
                  <Image
                    src={founderImage.imageUrl}
                    alt={founderImage.description}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:rotate-y-3"
                    data-ai-hint={founderImage.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-headline font-bold sm:text-5xl">Our Core Values</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">The principles that guide our work and relationships.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = icons[value.icon];
              return (
                <div key={index} className="text-center p-6 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mx-auto mb-6 group">
                    {Icon && <Icon className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />}
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
       <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground animate-fade-in-up">
              Have a Project in Mind?
            </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto mt-4 animate-fade-in-up animation-delay-200">
            Let's collaborate to bring your creative vision to life.
          </p>
          <div className="animate-fade-in-up animation-delay-400">
            <Button asChild
              variant="secondary" 
              size="lg" 
              className="group hover:scale-105 hover:shadow-glow-white"
            >
              <Link href="/contact">
              Get a Quote <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1"/>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
