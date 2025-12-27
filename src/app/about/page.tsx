'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ArrowRight, Download, Target, Lightbulb, PenTool, Gem, Sparkles, Heart, Eye, Users, Palette, Film } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { journey, coreValues } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapEmbed } from "@/components/shared/map-embed";

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

export default function AboutPage() {
  const missionImage = getPlaceholderImage("mission-vision");
  const founderImage = getPlaceholderImage("founder-spotlight");
  const dezyArtsImage = getPlaceholderImage("project-photo-1");
  const dezyStudiosImage = getPlaceholderImage("project-video-1");


  const icons: { [key: string]: React.ElementType } = {
    Target,
    Lightbulb,
    PenTool,
    Gem,
  };

  return (
    <motion.div 
      className="bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PageHeader
        title="A Creative Ecosystem"
        subtitle="Dezy Enterprise: Where Artistry Meets Production"
        description="Discover the story, values, and the two creative worlds that define our passion."
        className="bg-gradient-to-b from-secondary to-background"
      />

      {/* Ecosystem Section */}
      <motion.section variants={itemVariants} className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 animate-fade-in-up">
              <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-semibold border-primary/30 text-primary">
                Our Philosophy
              </Badge>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">
                One Vision, <span className="text-primary">Two Worlds</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <p>
                    Dezy Enterprise is a creative ecosystem built on a single vision: to bring powerful ideas to life through exceptional visual storytelling. We operate through two distinct, yet interconnected, divisions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <Heart className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <p>
                    <span className="font-bold text-foreground">Dezy Arts</span> is our world of creative expression, focusing on photography, art, and tangible products. <span className="font-bold text-foreground">Dezy Studios</span> is our engine for professional media production, crafting cinematic videos and brand campaigns.
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
      </motion.section>

      {/* The Two Divisions Section */}
      <motion.section variants={itemVariants} className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Dezy Arts */}
                <Card className="flex flex-col group overflow-hidden">
                    {dezyArtsImage && (
                        <div className="relative h-64 overflow-hidden">
                            <Image
                            src={dezyArtsImage.imageUrl}
                            alt="Dezy Arts"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={dezyArtsImage.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    )}
                    <CardContent className="p-8 flex-grow flex flex-col">
                        <Badge variant="outline" className="mb-4 w-fit">Creative Expression</Badge>
                        <h3 className="text-3xl font-headline font-bold mb-4">Dezy Arts</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">
                        The heart of our creative expression. Dezy Arts is dedicated to photography, graphic design, and unique products that embody a distinct visual culture and lifestyle.
                        </p>
                        <Button asChild variant="outline">
                            <Link href="/portfolio">
                                Explore Dezy Arts <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>

                {/* Dezy Studios */}
                <Card className="flex flex-col group overflow-hidden">
                    {dezyStudiosImage && (
                        <div className="relative h-64 overflow-hidden">
                            <Image
                            src={dezyStudiosImage.imageUrl}
                            alt="Dezy Studios"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={dezyStudiosImage.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                     )}
                    <CardContent className="p-8 flex-grow flex flex-col">
                        <Badge className="mb-4 w-fit">Professional Production</Badge>
                        <h3 className="text-3xl font-headline font-bold mb-4">Dezy Studios</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">
                        The engine for professional media production. Dezy Studios creates cinematic video content, from commercial campaigns and event coverage to compelling brand films.
                        </p>
                        <Button asChild>
                            <Link href="/portfolio">
                                Visit Dezy Studios <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </motion.section>

      {/* Founder Spotlight Section */}
      <motion.section variants={itemVariants} className="py-20 md:py-28">
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
                    This passion evolved into a multidisciplinary creative ecosystem where we explore both artistic expression and professional production to create work that's not just visually stunning, but emotionally resonant.
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
      </motion.section>
    </motion.div>
  );
}
