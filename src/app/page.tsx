'use client';

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { 
  Camera, Palette, Film, Monitor, ArrowRight, Star, MessageCircle, 
  Sparkles, Zap, Heart, Target, Briefcase, Video, ChevronRight,
  Play, Globe, Users, Award, TrendingUp, Clock, CheckCircle,
  Lightbulb, Shield, Rocket, Infinity as InfinityIcon, Eye,
  Maximize2, Sparkle, Cloud, Layers, Compass, Target as TargetIcon,
  Circle, Hexagon, Triangle, Diamond, Brain, Palette as PaletteIcon,
  Film as FilmIcon, Music, Zap as ZapIcon, Waves, Gauge, Cpu,
  Command, Gem, Crown, TrendingUp as TrendingUpIcon, Wind
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

import { Button } from "@/components/ui/button";
import { services, portfolio, testimonials } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Marquee from '@/components/ui/marquee';

const homeServices = [
  {
    icon: Camera,
    title: 'Photography',
    division: 'Dezy Arts',
    description: 'Capturing timeless moments with professional precision and artistic vision.',
    color: 'from-blue-500/20 to-purple-500/10',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
    features: ['Portrait & Commercial', 'Event Coverage', 'Product Photography']
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    division: 'Dezy Arts',
    description: 'Creating stunning visual identities that make your brand stand out.',
    color: 'from-emerald-500/20 to-cyan-500/10',
    gradient: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
    features: ['Brand Identity', 'UI/UX Design', 'Print & Digital']
  },
  {
    icon: Video,
    title: 'Videography',
    division: 'Dezy Studios',
    description: 'Professional video production for events, businesses, and creative projects.',
    color: 'from-rose-500/20 to-pink-500/10',
    gradient: 'linear-gradient(135deg, #F43F5E 0%, #EC4899 100%)',
    features: ['Commercial Films', 'Event Coverage', 'Corporate Videos']
  },
  {
    icon: Film,
    title: 'Video Editing',
    division: 'Dezy Studios',
    description: 'Transforming raw footage into compelling stories that engage and inspire.',
    color: 'from-amber-500/20 to-orange-500/10',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
    features: ['Color Grading', 'Motion Graphics', 'Sound Design']
  },
  {
    icon: Briefcase,
    title: 'Brand Campaigns',
    division: 'Dezy Studios',
    description: 'End-to-end production for impactful brand campaigns.',
    color: 'from-violet-500/20 to-fuchsia-500/10',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)',
    features: ['Strategy & Planning', 'Multi-platform', 'Analytics & ROI']
  },
];

const stats = [
  { label: 'Projects Completed', value: 450, icon: Target, suffix: '+', color: 'text-blue-500' },
  { label: 'Happy Clients', value: 320, icon: Users, suffix: '+', color: 'text-emerald-500' },
  { label: 'Awards Won', value: 28, icon: Award, color: 'text-amber-500' },
  { label: 'Years Excellence', value: 12, icon: TrendingUp, suffix: '+', color: 'text-rose-500' },
];

const industries = [
  'Fashion & Luxury', 'Tech & Startups', 'Music & Entertainment', 
  'Corporate & Business', 'Healthcare & Wellness', 'Real Estate & Architecture',
  'Education & E-learning', 'Food & Beverage', 'Sports & Fitness'
];

export default function Home() {
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('arts');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating particles for hero
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  // Geometric shapes animation
  const shapes = [
    { icon: Hexagon, color: 'text-blue-500/20', size: 80, x: 10, y: 20 },
    { icon: Circle, color: 'text-purple-500/20', size: 60, x: 85, y: 15 },
    { icon: Triangle, color: 'text-pink-500/20', size: 70, x: 15, y: 80 },
    { icon: Diamond, color: 'text-amber-500/20', size: 90, x: 90, y: 75 },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Geometric shapes */}
        {shapes.map((shape, i) => {
          const Icon = shape.icon;
          return (
            <motion.div
              key={i}
              className={`absolute ${shape.color} hidden md:block`}
              style={{
                left: `${shape.x}%`,
                top: `${shape.y}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Icon size={shape.size} />
            </motion.div>
          );
        })}
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section with 3D Parallax */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePosition({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
          });
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Animated Background Layers */}
        <div className="absolute inset-0" style={{ 
          transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)`,
          transition: 'transform 0.1s ease-out'
        }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
          
          {/* Animated grid */}
          <div className="absolute inset-0 opacity-10 hidden md:block">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_99%,rgba(255,255,255,0.1)_1%)] bg-[length:50px_50px]" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent_99%,rgba(255,255,255,0.1)_1%)] bg-[length:50px_50px]" />
          </div>

          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 hidden md:block"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Content with 3D effect */}
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
          style={{
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center justify-center mb-6 md:mb-8"
          >
            <div className="relative">
              <Badge 
                variant="secondary" 
                className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg font-semibold backdrop-blur-sm bg-white/10 border-white/20"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="mr-2 hidden sm:block"
                >
                  <Sparkle className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
                Award-Winning Creative Agency
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-2 hidden sm:block"
                >
                  <Crown className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
              </Badge>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Main Heading with Gradient Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6 md:mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 md:mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                DEZY
              </span>
              <br />
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  ENTERPRISE
                </span>
                <motion.div
                  className="absolute -bottom-2 md:-bottom-4 left-1/4 right-1/4 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Tagline with animated words */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <div className="inline-block">
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xl md:text-2xl font-light">
                {['Visual', 'Artistry', 'Meets', 'Digital', 'Innovation'].map((word, i) => (
                  <motion.span
                    key={i}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {word}
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Where <span className="text-blue-500 font-semibold">Dezy Arts</span> crafts visual masterpieces 
            and <span className="text-purple-500 font-semibold">Dezy Studios</span> brings stories to life — 
            united by one exceptional creative vision.
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="group relative px-8 py-6 text-base md:px-10 md:py-7 md:text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 overflow-hidden w-full sm:w-auto"
              >
                <Link href="/contact">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative flex items-center gap-2 md:gap-3">
                    <Rocket className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-45 transition-transform" />
                    Launch Your Project
                    <ChevronRight className="group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="group px-8 py-6 text-base md:px-10 md:py-7 md:text-lg border-2 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                <Link href="/portfolio" className="flex items-center gap-2 md:gap-3">
                  <Eye className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                  View Our Showcase
                </Link>
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Scroll Indicator with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm text-muted-foreground tracking-wider">EXPLORE</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative w-6 h-10"
            >
              <div className="absolute inset-0 border-2 border-white/30 rounded-full" />
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-1/2 top-1 w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full -translate-x-1/2"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Mouse Following Light */}
        <motion.div
          className="fixed pointer-events-none w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </motion.section>

      {/* Industry Marquee */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="outline" className="px-4 py-2">
              <TargetIcon className="w-4 h-4 mr-2" />
              Trusted Across Industries
            </Badge>
          </div>
          <Marquee className="[--duration:40s]">
            {industries.map((industry, i) => (
              <div key={i} className="flex items-center mx-4 md:mx-8">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
                <span className="text-base md:text-lg font-semibold whitespace-nowrap">{industry}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </motion.section>

      {/* Services Section - Holographic Cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 md:py-32 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-4 md:mb-6"
            >
              <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <Brain className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
              </div>
            </motion.div>
            
            <Badge variant="secondary" className="mb-4 md:mb-6 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base">
              <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              CREATIVE EXCELLENCE
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Where Vision
              </span>
              <br />
              <span className="text-foreground">Meets Execution</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our dual-division approach to creative problem-solving and digital innovation
            </p>
          </motion.div>

          {/* Interactive Division Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12 md:mb-16"
          >
            <Tabs defaultValue="arts" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <TabsTrigger 
                  value="arts" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white rounded-xl py-2"
                >
                  <PaletteIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Dezy Arts
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-blue-500/20 hidden sm:inline">Visuals</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="studios" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white rounded-xl py-2"
                >
                  <FilmIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Dezy Studios
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-purple-500/20 hidden sm:inline">Production</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Holographic Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {homeServices
              .filter(s => s.division === (activeTab === 'arts' ? 'Dezy Arts' : 'Dezy Studios'))
              .map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="relative group"
                  >
                    {/* Card with holographic effect */}
                    <div className="relative p-6 md:p-10 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:border-white/30 group-hover:shadow-2xl group-hover:shadow-blue-500/20 h-full flex flex-col">
                      {/* Animated gradient background */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: service.gradient }}
                      />
                      
                      {/* Floating particles on hover */}
                      <AnimatePresence>
                        {hoveredService === index && (
                          <div className="hidden md:block">
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full bg-white/50"
                                initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                                animate={{ 
                                  scale: [0, 1, 0],
                                  opacity: [0, 1, 0],
                                  x: Math.random() * 200 - 100,
                                  y: Math.random() * 200 - 100,
                                }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                exit={{ scale: 0, opacity: 0 }}
                              />
                            ))}
                          </div>
                        )}
                      </AnimatePresence>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col flex-grow">
                        <div className="flex items-start justify-between mb-6 md:mb-8">
                          <div className="flex items-center gap-4 md:gap-6">
                            <motion.div
                              className="relative"
                              whileHover={{ rotate: 15 }}
                              transition={{ type: "spring", stiffness: 200 }}
                            >
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center backdrop-blur-sm">
                                <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                              </div>
                              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                            
                            <div>
                              <Badge className="mb-2 md:mb-3 bg-white/20 backdrop-blur-sm border-white/30">
                                {service.division}
                              </Badge>
                              <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                            </div>
                          </div>
                          
                          <motion.div
                            animate={{ rotate: hoveredService === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white/50 group-hover:text-white transition-colors" />
                          </motion.div>
                        </div>

                        <p className="text-white/80 mb-6 md:mb-8 text-base md:text-lg leading-relaxed flex-grow">
                          {service.description}
                        </p>

                        {/* Features with checkmarks */}
                        <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                          {service.features?.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                            >
                              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
                              <span className="text-xs md:text-sm text-white/90">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Interactive button */}
                        <Button
                          variant="ghost"
                          className="w-full mt-auto py-4 md:py-6 text-white hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300 group/btn"
                        >
                          <Link href="/services" className="flex items-center justify-center gap-2 md:gap-3">
                            <span>Explore Service</span>
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </motion.div>
                          </Link>
                        </Button>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </motion.div>
                );
              })}
          </div>

          {/* Process Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-32 max-w-6xl mx-auto"
          >
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl font-bold mb-4 md:mb-6">Our Creative Journey</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                From concept to delivery, follow our proven process for exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: Lightbulb, title: 'Discover', desc: 'Research & Strategy', color: 'from-blue-500 to-cyan-500' },
                { icon: Palette, title: 'Design', desc: 'Concept & Creation', color: 'from-purple-500 to-pink-500' },
                { icon: Rocket, title: 'Develop', desc: 'Production & Execution', color: 'from-amber-500 to-orange-500' },
                { icon: Shield, title: 'Deliver', desc: 'Launch & Support', color: 'from-emerald-500 to-green-500' },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="text-center p-4">
                    {/* Animated step number */}
                    <div className="relative inline-block mb-4 md:mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl" />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/20 flex items-center justify-center">
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full opacity-20`} />
                        <div className="relative z-10 flex flex-col items-center">
                          <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white mb-1" />
                          <div className="text-xl md:text-2xl font-bold text-white">{index + 1}</div>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-lg md:text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm md:text-base">{step.desc}</p>
                  </div>

                  {/* Connecting line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-px">
                      <div className="h-0.5 bg-gradient-to-r from-white/10 to-white/10" style={{ marginLeft: '50%' }} />
                      <motion.div
                        className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                        viewport={{ once: true }}
                        style={{ marginLeft: '50%' }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Showcase - 3D Gallery */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 md:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-4 md:mb-6"
            >
              <Gem className="w-12 h-12 md:w-16 md:h-16 text-blue-500" />
            </motion.div>
            
            <Badge className="mb-4 md:mb-6 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              PORTFOLIO HIGHLIGHTS
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">
              <span className="text-foreground">Visual</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Masterpieces
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A curated showcase of our most innovative and impactful creative projects
            </p>
          </motion.div>

          {/* 3D Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolio.slice(0, 6).map((project, index) => {
              const projectImage = getPlaceholderImage(project.imageId);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50, rotateY: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group relative"
                  style={{ perspective: 1000 }}
                >
                  <Link href={`/portfolio/${project.id}/details`}>
                    <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden">
                      {/* Image with parallax effect */}
                      <motion.div
                        className="relative h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {projectImage && (
                          <Image
                            src={projectImage.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover"
                            data-ai-hint={projectImage.imageHint}
                          />
                        )}
                      </motion.div>

                      {/* Gradient overlay with animation */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 rounded-2xl md:rounded-3xl transition-all duration-500" />

                      {/* Content with slide-up animation */}
                      <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2, once: true }}
                          className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
                        >
                          <Badge className="mb-2 md:mb-4 bg-white/20 backdrop-blur-sm border-white/30">
                            {project.category}
                          </Badge>
                          
                          <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
                          
                          <p className="text-white/80 mb-4 md:mb-6 text-sm md:text-base line-clamp-2">{project.description}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-white text-sm md:text-base">
                              <span>Explore Project</span>
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                              </motion.div>
                            </div>
                            
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current"
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Floating tags */}
                      <div className="absolute top-4 left-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white/90 border border-white/20">
                            Featured
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.div>
              );
            })}
          </div>

          {/* View All Button with Particle Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16 md:mt-20"
          >
            <Button
              asChild
              size="lg"
              className="group relative px-10 py-7 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 overflow-hidden"
            >
              <Link href="/portfolio">
                <span className="relative flex items-center gap-3 md:gap-4">
                  <span className="text-xl md:text-2xl">View Complete Portfolio</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <InfinityIcon className="w-6 h-6 md:w-8 md:h-8" />
                  </motion.div>
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials - Interactive Carousel */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 md:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4 md:mb-6"
            >
              <Heart className="w-12 h-12 md:w-16 md:h-16 text-rose-500" fill="currentColor" />
            </motion.div>
            
            <Badge className="mb-4 md:mb-6 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-gradient-to-r from-rose-500/20 to-pink-500/20 border-rose-500/30">
              <Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              CLIENT TESTIMONIALS
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">
              Trusted by{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">
                Industry Leaders
              </span>
            </h2>
          </motion.div>

          {/* Interactive Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-2 md:p-4 h-full"
                  >
                    <div className="relative h-full group">
                      {/* Glow background */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Card */}
                      <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                        {/* Quote icon */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 text-white/10 group-hover:text-white/20 transition-colors duration-300">
                          <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        
                        {/* Stars */}
                        <div className="flex items-center gap-1 mb-4 md:mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 md:w-6 md:h-6 ${
                                i < testimonial.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-white/20'
                              } group-hover:scale-110 transition-transform`}
                              style={{ transitionDelay: `${i * 50}ms` }}
                            />
                          ))}
                        </div>
                        
                        {/* Testimonial text */}
                        <p className="text-white/80 leading-relaxed mb-6 md:mb-8 italic flex-grow text-base md:text-lg">
                          "{testimonial.feedback}"
                        </p>

                        {/* Client info */}
                        <div className="flex items-center gap-4 mt-auto pt-4 md:pt-6 border-t border-white/10">
                          <Avatar className="w-12 h-12 md:w-16 md:h-16 border-2 border-white/20">
                            <AvatarImage src={getPlaceholderImage(testimonial.avatarId)?.imageUrl} alt={testimonial.name} />
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-bold text-white text-base md:text-lg">{testimonial.name}</div>
                            <div className="text-white/60 text-sm">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <div className="flex justify-center gap-6 mt-8 md:mt-12">
              <CarouselPrevious className="relative bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:border-white/40" />
              <CarouselNext className="relative bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:border-white/40" />
            </div>
          </Carousel>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: '24/7 Support', icon: Shield, color: 'text-blue-500' },
              { label: 'Quality Guarantee', icon: Award, color: 'text-emerald-500' },
              { label: 'On-time Delivery', icon: Clock, color: 'text-amber-500' },
              { label: 'Satisfaction', icon: Heart, color: 'text-rose-500' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color}`} />
                  <span className="text-xs md:text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Ultimate CTA Section */}
      <motion.section
        ref={ctaSectionRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 md:py-32 relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-flow" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 hidden md:block" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Animated badge */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6 md:mb-8"
            >
              <Badge className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-white/20 backdrop-blur-sm border-white/30">
                <Rocket className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                READY FOR LIFTOFF
              </Badge>
            </motion.div>
            
            {/* Main heading with split animation */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-10">
              <span className="block text-white">
                Let's Create
              </span>
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Something Legendary
                </span>
                <motion.span
                  className="absolute -bottom-2 md:-bottom-4 left-1/4 right-1/4 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
            
            {/* Animated description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-white/90 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Your vision deserves an exceptional creative partner. Let's collaborate to transform
              ideas into unforgettable experiences that captivate and inspire.
            </motion.p>

            {/* Interactive CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8"
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full sm:w-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="group px-8 py-6 md:px-12 md:py-8 text-lg md:text-xl bg-white text-blue-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 overflow-hidden w-full"
                >
                  <Link href="/contact">
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <span className="relative flex items-center gap-3 md:gap-4">
                      <span className="text-xl md:text-2xl font-bold">Start Your Project</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                      </motion.div>
                    </span>
                  </Link>
                </Button>
                
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-white to-white/50 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group px-8 py-6 md:px-12 md:py-8 text-lg md:text-xl border-2 md:border-3 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 w-full"
                >
                  <Link href="/contact" className="flex items-center gap-3 md:gap-4">
                    <MessageCircle className="w-6 h-6 md:w-8 mdh-8 group-hover:scale-110 transition-transform" />
                    <span className="text-xl md:text-2xl font-bold">Discovery Call</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 md:mt-16"
            >
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white/80">
                {[
                  { icon: CheckCircle, text: 'Free Strategy Session' },
                  { icon: CheckCircle, text: 'Transparent Pricing' },
                  { icon: CheckCircle, text: 'Dedicated Support' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-emerald-300" />
                      <span className="text-sm md:text-base">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Add these styles to your global CSS */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
