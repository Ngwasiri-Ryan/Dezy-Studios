'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { 
  ArrowRight, Download, Target, Lightbulb, PenTool, Gem, 
  Sparkles, Heart, Eye, Users, Palette, Film, Camera, 
  Video, Brain, Zap, Award, Globe, Clock, Trophy, Star,
  ChevronRight, Compass, Layers, Target as TargetIcon,
  MessageCircle, Instagram, Linkedin, Twitter, Mail,
  Sparkle, Crown, Diamond, Cloud, Waves, Rocket, Cpu,
  Command, TrendingUp, Gauge, Infinity as InfinityIcon,
  MapPin, Calendar, Coffee, Music, Film as FilmIcon,
  Palette as PaletteIcon, Briefcase, User, UserCheck,
  CheckCircle
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { journey, coreValues } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapEmbed } from "@/components/shared/map-embed";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Marquee } from '@/components/ui/marquee';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'About Dezy Enterprise',
//   description: 'Discover the story, vision, and creative universe of Dezy Enterprise, where visual artistry meets cinematic production in a harmonious ecosystem.',
//   openGraph: {
//     title: 'About Dezy Enterprise',
//     description: 'A deep dive into the philosophy and journey of Dezy Enterprise.',
//   },
//   twitter: {
//     title: 'About Dezy Enterprise',
//     description: 'A deep dive into the philosophy and journey of Dezy Enterprise.',
//   }
// };


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    } 
  },
};

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
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const iconMap: { [key: string]: React.ElementType } = {
  Target: Target,
  Lightbulb: Lightbulb,
  PenTool: PenTool,
  Gem: Gem,
  Camera: Camera,
  Video: Video,
  Brain: Brain,
  Zap: Zap,
  Award: Award,
  Globe: Globe,
  Clock: Clock,
  Trophy: Trophy,
  Star: Star,
  Heart: Heart,
  Users: Users,
  Compass: Compass,
  Layers: Layers,
  TargetIcon: TargetIcon,
  MessageCircle: MessageCircle,
  Instagram: Instagram,
  Linkedin: Linkedin,
  Twitter: Twitter,
  Mail: Mail,
  Sparkle: Sparkle,
  Crown: Crown,
  Diamond: Diamond,
  Cloud: Cloud,
  Waves: Waves,
  Rocket: Rocket,
  Cpu: Cpu,
  Command: Command,
  TrendingUp: TrendingUp,
  Gauge: Gauge,
  InfinityIcon: InfinityIcon,
  MapPin: MapPin,
  Calendar: Calendar,
  Coffee: Coffee,
  Music: Music,
  FilmIcon: FilmIcon,
  PaletteIcon: PaletteIcon,
  Briefcase: Briefcase,
  User: User,
  UserCheck: UserCheck,
};

// Milestones for timeline
const milestones = [
  { year: '2015', title: 'Vision Born', description: 'Started as a solo photography venture', color: 'from-blue-500 to-cyan-500' },
  { year: '2017', title: 'Dezy Arts Launch', description: 'Formalized creative design services', color: 'from-purple-500 to-pink-500' },
  { year: '2019', title: 'First Studio', description: 'Opened dedicated creative workspace', color: 'from-amber-500 to-orange-500' },
  { year: '2021', title: 'Dezy Studios', description: 'Expanded into full video production', color: 'from-emerald-500 to-green-500' },
  { year: '2023', title: 'Enterprise Born', description: 'Unified both divisions under Dezy Enterprise', color: 'from-rose-500 to-red-500' },
  { year: '2024', title: 'Global Reach', description: 'Serving clients worldwide', color: 'from-indigo-500 to-blue-500' },
];

// Core values with enhanced data
const enhancedCoreValues = [
  { 
    icon: Gem, 
    title: 'Excellence', 
    description: 'Pursuing perfection in every pixel and frame',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: Heart, 
    title: 'Passion', 
    description: 'Creating with heart and soul in every project',
    color: 'from-rose-500 to-pink-500'
  },
  { 
    icon: Brain, 
    title: 'Innovation', 
    description: 'Pushing creative boundaries with new technology',
    color: 'from-purple-500 to-indigo-500'
  },
  { 
    icon: Target, 
    title: 'Precision', 
    description: 'Meticulous attention to every detail',
    color: 'from-emerald-500 to-green-500'
  },
  { 
    icon: Users, 
    title: 'Collaboration', 
    description: 'Building strong partnerships with clients',
    color: 'from-amber-500 to-orange-500'
  },
  { 
    icon: Zap, 
    title: 'Impact', 
    description: 'Creating work that moves and inspires',
    color: 'from-violet-500 to-fuchsia-500'
  },
];

// Social links for founder
const founderSocials = [
  { icon: Instagram, label: '@bindadesmond', href: '#', color: 'text-pink-500' },
  { icon: Linkedin, label: 'Binda Desmond', href: '#', color: 'text-blue-500' },
  { icon: Twitter, label: '@binda_desmond', href: '#', color: 'text-sky-500' },
  { icon: Mail, label: 'binda@dezy.com', href: '#', color: 'text-amber-500' },
];

export default function AboutPage() {
  const missionImage = getPlaceholderImage("mission-vision");
  const founderImage = getPlaceholderImage("founder-spotlight");
  const dezyArtsImage = getPlaceholderImage("project-photo-1");
  const dezyStudiosImage = getPlaceholderImage("project-video-1");
  const teamImage = getPlaceholderImage("team-collaboration");

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl"
            animate={{
              x: [0, 100 * Math.sin(i), 0],
              y: [0, 50 * Math.cos(i), 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Header with Parallax */}
      <motion.div 
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <PageHeader
          title={
            <motion.span
              variants={fadeInUp}
              className="block"
            >
              The Creative Universe of
            </motion.span>
          }
          subtitle={
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                DEZY ENTERPRISE
              </span>
            </motion.h1>
          }
          description={
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Where visual artistry meets cinematic production in a harmonious creative ecosystem
            </motion.p>
          }
          className="relative z-10 bg-gradient-to-b from-secondary/20 via-background to-background min-h-[80vh] flex items-center"
        >
          {/* Animated badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <Badge className="px-6 py-3 text-base backdrop-blur-sm bg-white/10 border-white/20">
              <Crown className="w-4 h-4 mr-2" />
              Award-Winning
            </Badge>
            <Badge className="px-6 py-3 text-base backdrop-blur-sm bg-white/10 border-white/20">
              <Globe className="w-4 h-4 mr-2" />
              Global Reach
            </Badge>
            <Badge className="px-6 py-3 text-base backdrop-blur-sm bg-white/10 border-white/20">
              <TrendingUp className="w-4 h-4 mr-2" />
              Industry Leader
            </Badge>
          </motion.div>
        </PageHeader>

        {/* Ecosystem Section - Interactive 3D */}
        <motion.section 
          variants={itemVariants}
          className="relative py-32 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp}>
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center mb-8"
                >
                  <Badge 
                    variant="secondary" 
                    className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30"
                  >
                    <Sparkle className="w-5 h-5 mr-2" />
                    Our Philosophy
                  </Badge>
                </motion.div>
                
                <motion.h2 
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                >
                  One Vision,{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    Two Worlds
                  </span>
                </motion.h2>

                <motion.div 
                  variants={fadeInUp}
                  className="space-y-8 text-lg leading-relaxed"
                >
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="h-8 w-8 text-primary flex-shrink-0" />
                    </motion.div>
                    <p className="text-muted-foreground">
                      Dezy Enterprise is a creative ecosystem built on a single vision: to transform ideas into 
                      extraordinary visual experiences through a unique fusion of artistic expression and 
                      professional production.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="h-8 w-8 text-primary flex-shrink-0" />
                    </motion.div>
                    <p className="text-muted-foreground">
                      <span className="font-bold text-foreground">Dezy Arts</span> crafts visual poetry through 
                      photography and design, while{' '}
                      <span className="font-bold text-foreground">Dezy Studios</span> produces cinematic narratives 
                      that captivate audiences—two worlds united by one creative soul.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="relative"
              >
                {missionImage && (
                  <div className="relative group perspective-1000">
                    {/* 3D Container */}
                    <motion.div
                      whileHover={{ rotateY: 10, rotateX: -5 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="relative w-full h-[600px] rounded-3xl overflow-hidden preserve-3d"
                    >
                      <Image
                        src={missionImage.imageUrl}
                        alt={missionImage.description}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                        data-ai-hint={missionImage.imageHint}
                      />
                      
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </motion.div>
                    
                    {/* Floating elements */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                    
                    {/* Corner badges */}
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-black/50 backdrop-blur-sm border-white/20">
                        Visual Artistry
                      </Badge>
                    </div>
                    <div className="absolute bottom-6 right-6">
                      <Badge className="bg-black/50 backdrop-blur-sm border-white/20">
                        Cinematic Excellence
                      </Badge>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* The Two Worlds Section - Interactive Cards */}
        <motion.section 
          variants={itemVariants}
          className="py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <Badge className="mb-6 px-6 py-3 text-base bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
                <Layers className="w-5 h-5 mr-2" />
                THE TWO WORLDS
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="text-foreground">Creative</span>{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Ecosystem
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the harmonious interplay between our two creative divisions
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Dezy Arts - Holographic Card */}
              <motion.div
                variants={fadeInUp}
                className="relative group"
                whileHover={{ y: -10 }}
              >
                <div className="relative p-10 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-6">
                        <motion.div
                          className="relative"
                          whileHover={{ rotate: 15 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                            <PaletteIcon className="w-10 h-10 text-blue-500" />
                          </div>
                          <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                        
                        <div>
                          <Badge className="mb-3 bg-blue-500/20 backdrop-blur-sm border-blue-500/30">
                            Creative Expression
                          </Badge>
                          <h3 className="text-4xl font-bold">Dezy Arts</h3>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Diamond className="w-8 h-8 text-blue-500/50 group-hover:text-blue-500" />
                      </motion.div>
                    </div>

                    {dezyArtsImage && (
                      <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                        <Image
                          src={dezyArtsImage.imageUrl}
                          alt="Dezy Arts"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          data-ai-hint={dezyArtsImage.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    )}

                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                      The heart of visual artistry. Dezy Arts crafts timeless moments through photography, 
                      creates stunning visual identities with graphic design, and produces unique lifestyle 
                      products that embody creative expression.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {['Photography', 'Graphic Design', 'Product Art', 'Visual Identity'].map((service, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="w-full py-6 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 group/btn"
                    >
                      <Link href="/portfolio">
                        <span className="flex items-center justify-center gap-3">
                          Explore Dezy Arts
                          <ChevronRight className="group-hover/btn:translate-x-2 transition-transform" />
                        </span>
                      </Link>
                    </Button>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>

              {/* Dezy Studios - Holographic Card */}
              <motion.div
                variants={fadeInUp}
                className="relative group"
                whileHover={{ y: -10 }}
              >
                <div className="relative p-10 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-6">
                        <motion.div
                          className="relative"
                          whileHover={{ rotate: 15 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                            <FilmIcon className="w-10 h-10 text-purple-500" />
                          </div>
                          <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                        
                        <div>
                          <Badge className="mb-3 bg-purple-500/20 backdrop-blur-sm border-purple-500/30">
                            Production House
                          </Badge>
                          <h3 className="text-4xl font-bold">Dezy Studios</h3>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Crown className="w-8 h-8 text-purple-500/50 group-hover:text-purple-500" />
                      </motion.div>
                    </div>

                    {dezyStudiosImage && (
                      <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                        <Image
                          src={dezyStudiosImage.imageUrl}
                          alt="Dezy Studios"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          data-ai-hint={dezyStudiosImage.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    )}

                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                      The engine of cinematic storytelling. Dezy Studios produces captivating video content, 
                      from commercial campaigns and event coverage to compelling brand films that engage 
                      audiences and drive results.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {['Videography', 'Video Editing', 'Brand Campaigns', 'Motion Graphics'].map((service, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 group/btn"
                    >
                      <Link href="/portfolio">
                        <span className="flex items-center justify-center gap-3">
                          Enter Dezy Studios
                          <ChevronRight className="group-hover/btn:translate-x-2 transition-transform" />
                        </span>
                      </Link>
                    </Button>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Founder Spotlight - Interactive Profile */}
        <motion.section 
          variants={itemVariants}
          className="py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp} className="relative">
                {founderImage && (
                  <div className="relative group">
                    {/* Main image with 3D effect */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-3xl overflow-hidden border-2 border-white/10"
                    >
                      <Image
                        src={founderImage.imageUrl}
                        alt={founderImage.description}
                        width={800}
                        height={1000}
                        className="w-full h-auto object-cover"
                        data-ai-hint={founderImage.imageHint}
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                      
                      {/* Floating badges */}
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-black/50 backdrop-blur-sm border-white/20">
                          <Crown className="w-3 h-3 mr-1" />
                          Founder & Visionary
                        </Badge>
                      </div>
                      
                      <div className="absolute bottom-6 left-6">
                        <Badge className="bg-black/50 backdrop-blur-sm border-white/20">
                          <Award className="w-3 h-3 mr-1" />
                          Creative Director
                        </Badge>
                      </div>
                    </motion.div>
                    
                    {/* Floating elements around image */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center"
                        animate={{
                          y: [0, -20, 0],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 5 + i * 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          left: i === 0 ? '-2rem' : i === 1 ? '80%' : '20%',
                          top: i === 0 ? '40%' : i === 1 ? '10%' : '80%',
                        }}
                      >
                        {i === 0 && <Camera className="w-6 h-6 text-primary" />}
                        {i === 1 && <Video className="w-6 h-6 text-secondary" />}
                        {i === 2 && <Palette className="w-6 h-6 text-primary" />}
                      </motion.div>
                    ))}
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                  </div>
                )}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center mb-8"
                >
                  <Badge 
                    className="px-6 py-3 text-base bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500/30"
                  >
                    <User className="w-5 h-5 mr-2" />
                    Creative Visionary
                  </Badge>
                </motion.div>
                
                <motion.h2 
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                >
                  Meet{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
                    Binda Desmond
                  </span>
                </motion.h2>

                <motion.div 
                  variants={fadeInUp}
                  className="space-y-8 mb-12"
                >
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex-shrink-0"
                      >
                        <Eye className="h-8 w-8 text-amber-500" />
                      </motion.div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        My journey began with a camera in hand and an unwavering passion to capture the 
                        extraordinary in the ordinary. From those first frames emerged a vision that would 
                        evolve into Dezy Enterprise.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex-shrink-0"
                      >
                        <Users className="h-8 w-8 text-amber-500" />
                      </motion.div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Today, I lead a team of passionate creatives dedicated to pushing boundaries. 
                        We believe in creating work that doesn't just look beautiful, but tells stories 
                        that resonate and inspire action.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  variants={fadeInUp}
                  className="mb-12"
                >
                  <h4 className="text-lg font-semibold mb-4">Connect With Binda</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {founderSocials.map((social, i) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={i}
                          href={social.href}
                          className={`flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 ${social.color}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="text-sm truncate">{social.label}</span>
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button 
                    asChild 
                    size="lg"
                    className="group px-8 py-6 text-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                  >
                    <Link href="/contact">
                      <span className="flex items-center gap-3">
                        <MessageCircle className="w-6 h-6" />
                        Schedule a Call
                        <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg border-2 border-white/20 hover:border-white/40 hover:bg-white/5"
                  >
                    <Link href="/portfolio">
                      <span className="flex items-center gap-3">
                        <Download className="w-6 h-6" />
                        Portfolio PDF
                      </span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Values - Interactive Grid */}
        <motion.section 
          variants={itemVariants}
          className="py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <Badge className="mb-6 px-6 py-3 text-base bg-gradient-to-r from-emerald-500/20 to-green-500/20 border-emerald-500/30">
                <Gem className="w-5 h-5 mr-2" />
                OUR CORE VALUES
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                The{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500">
                  Principles
                </span>{' '}
                That Guide Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Six fundamental beliefs that shape every project and partnership
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {enhancedCoreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative group"
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 h-full">
                      {/* Value icon with gradient */}
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl blur-xl opacity-20`} />
                        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                      
                      {/* Animated underline */}
                      <div className="mt-6">
                        <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-current to-transparent transition-all duration-500" />
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${value.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* Timeline Section - Interactive Journey */}
        <motion.section 
          variants={itemVariants}
          className="py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <Badge className="mb-6 px-6 py-3 text-base bg-gradient-to-r from-rose-500/20 to-pink-500/20 border-rose-500/30">
                <Rocket className="w-5 h-5 mr-2" />
                OUR JOURNEY
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Milestones of{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500">
                  Growth
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The story of how a creative vision evolved into an enterprise
              </p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              {/* Center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />
              
              {/* Milestones */}
              <div className="relative">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`flex items-center mb-16 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 ${
                          index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                        } max-w-md`}
                      >
                        <div className={`text-4xl font-bold mb-2 bg-gradient-to-br ${milestone.color} bg-clip-text text-transparent`}>
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </motion.div>
                    </div>
                    
                    {/* Center dot */}
                    <div className="relative z-10">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${milestone.color}`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-full blur-sm" />
                    </div>
                    
                    {/* Empty space for alternating sides */}
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team & Collaboration Section */}
        <motion.section 
          variants={itemVariants}
          className="py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-cyan-500/5" />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="mb-6 px-6 py-3 text-base bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border-indigo-500/30">
                  <UserCheck className="w-5 h-5 mr-2" />
                  OUR TEAM
                </Badge>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  A Symphony of{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500">
                    Creative Minds
                  </span>
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                  Behind every exceptional project is a team of passionate artists, designers, 
                  and producers working in perfect harmony. We believe collaboration is the key 
                  to innovation.
                </p>

                <div className="space-y-8">
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center">
                        <Brain className="w-6 h-6 text-indigo-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">Strategic Thinkers</h4>
                        <p className="text-muted-foreground">Visionaries who plan every detail</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        <Command className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">Technical Masters</h4>
                        <p className="text-muted-foreground">Experts in cutting-edge technology</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                {teamImage && (
                  <div className="relative group">
                    <div className="relative rounded-3xl overflow-hidden">
                      <Image
                        src={teamImage.imageUrl}
                        alt="Team Collaboration"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                        data-ai-hint={teamImage.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    
                    {/* Floating team stats */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-black/50 backdrop-blur-sm border border-white/20 text-center">
                          <div className="text-2xl font-bold text-white">12+</div>
                          <div className="text-sm text-white/80">Creative Experts</div>
                        </div>
                        <div className="p-4 rounded-xl bg-black/50 backdrop-blur-sm border border-white/20 text-center">
                          <div className="text-2xl font-bold text-white">8</div>
                          <div className="text-sm text-white/80">Years Experience</div>
                        </div>
                        <div className="p-4 rounded-xl bg-black/50 backdrop-blur-sm border border-white/20 text-center">
                          <div className="text-2xl font-bold text-white">250+</div>
                          <div className="text-sm text-white/80">Projects Delivered</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-8 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section 
          variants={itemVariants}
          className="py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-flow" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto"
            >
              <Badge className="mb-6 px-8 py-4 text-base bg-white/20 backdrop-blur-sm border-white/30">
                <Sparkle className="w-6 h-6 mr-2" />
                READY TO COLLABORATE?
              </Badge>
              
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
                Let's Create{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Together
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
                Your vision deserves a creative partner who understands both artistry and execution. 
                Let's discuss how we can bring your ideas to life.
              </p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Button
                  asChild
                  size="lg"
                  className="group px-12 py-8 text-xl bg-white text-blue-600 hover:bg-white/90 hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact">
                    <span className="flex items-center gap-4">
                      Start Your Project
                      <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-12 py-8 text-xl border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  <Link href="/portfolio" className="flex items-center gap-4">
                    <Eye className="w-6 h-6" />
                    View Our Work
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>

      {/* Add missing icon component */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}

// Add the missing CheckCircle component import at the top
// import { CheckCircle } from "lucide-react";
