'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { portfolio } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { 
  Filter, Grid, List, Search, Sparkles, Zap, Heart, Eye, 
  Maximize2, ChevronRight, ChevronLeft, Play, Pause,
  Camera, Video, Palette, Briefcase, Users, Award, Star,
  TrendingUp, Clock, Target, Globe, Layers, Filter as FilterIcon,
  Grid3x3, List as ListIcon, X, Loader2, ArrowUpRight,
  Download, Share2, Bookmark, MoreVertical, Calendar,
  Tag, Hash, FolderOpen, FolderClosed, FolderTree, Trophy,
  Image as ImageIcon, Film as FilmIcon, Palette as PaletteIcon,
  Briefcase as BriefcaseIcon, Sparkle, Crown, Diamond, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";

// Enhanced portfolio data with more details
const enhancedPortfolio = portfolio.map((project, index) => ({
  ...project,
  year: 2020 + (index % 4),
  duration: ['1 week', '2 weeks', '1 month', '3 months'][index % 4],
  budget: ['$5K', '$10K', '$25K', '$50K+'][index % 4],
  teamSize: [2, 3, 5, 8][index % 4],
  rating: 4 + (index % 2),
  tools: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Cinema 4D'].slice(0, 2 + (index % 3)),
  color: ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-amber-500 to-orange-500', 'from-emerald-500 to-green-500'][index % 4],
  awards: index % 3 === 0 ? ['Award Winner', 'Featured'] : [],
}));

const categories = ['All', 'Photography', 'Graphic Design', 'Videography', 'Video Editing', 'Brand Campaigns', 'Featured', 'Award Winning'];
const years = ['All', '2020', '2021', '2022', '2023', '2024'];
const durations = ['All', 'Quick (1-2 weeks)', 'Standard (1 month)', 'Extended (2+ months)'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.6,
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

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Photography': return Camera;
      case 'Graphic Design': return Palette;
      case 'Videography': return Video;
      case 'Video Editing': return FilmIcon;
      case 'Brand Campaigns': return Briefcase;
      default: return FolderOpen;
    }
  };

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeYear, setActiveYear] = useState('All');
  const [activeDuration, setActiveDuration] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'rating' | 'name'>('date');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  const projectsPerPage = 12;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  // Filter projects
  const filteredProjects = enhancedPortfolio.filter(project => {
    if (activeCategory !== 'All' && project.category !== activeCategory) return false;
    if (activeYear !== 'All' && project.year.toString() !== activeYear) return false;
    if (activeDuration !== 'All') {
      const durationMap: Record<string, (duration: string) => boolean> = {
        'Quick (1-2 weeks)': (d) => d === '1 week' || d === '2 weeks',
        'Standard (1 month)': (d) => d === '1 month',
        'Extended (2+ months)': (d) => d === '3 months',
      };
      if (activeDuration in durationMap && !durationMap[activeDuration](project.duration)) return false;
    }
    if (searchQuery && !project.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !project.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (activeCategory === 'Award Winning' && !project.awards.length) return false;
    if (activeCategory === 'Featured' && project.awards.length === 0) return false;
    return true;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'date') return b.year - a.year;
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.title.localeCompare(b.title);
  });

  // Pagination
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);
  const currentProjects = sortedProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  // Auto-rotate categories
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentPage(prev => {
        if (prev >= totalPages) return 1;
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, totalPages]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl"
            animate={{
              x: [0, 100 * Math.sin(i), 0],
              y: [0, 50 * Math.cos(i), 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + i * 7}%`,
            }}
          />
        ))}
      </div>

      {/* Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Header */}
        <PageHeader
          title={
            <motion.span variants={fadeInUp} className="block">
              Creative Showcase
            </motion.span>
          }
          subtitle={
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                PORTFOLIO
              </span>
            </motion.h1>
          }
          description={
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A curated collection of exceptional creative work across photography, design, and video production
            </motion.p>
          }
          className="relative z-10 bg-gradient-to-b from-secondary/20 via-background to-background min-h-[70vh] flex items-center"
        >
          {/* Animated stats */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { value: enhancedPortfolio.length, label: 'Projects', icon: FolderTree },
              { value: categories.length - 1, label: 'Categories', icon: Tag },
              { value: Math.max(...enhancedPortfolio.map(p => p.year)) - Math.min(...enhancedPortfolio.map(p => p.year)) + 1, label: 'Years', icon: Calendar },
              { value: Math.round(enhancedPortfolio.reduce((acc, p) => acc + p.rating, 0) / enhancedPortfolio.length * 10) / 10, label: 'Avg Rating', icon: Star },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-4 group hover:border-white/30 transition-all duration-300">
                    <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </PageHeader>

        {/* Interactive Filter Bar */}
        <motion.section 
          variants={itemVariants}
          className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-white/10 py-4"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Search and Filters */}
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search Bar */}
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Search projects, categories, or keywords..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-4 py-6 bg-white/5 backdrop-blur-sm border-white/10 focus:border-primary/50"
                    />
                  </div>

                  {/* Filter Toggle */}
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="px-6 py-6 border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm"
                  >
                    <FilterIcon className="w-5 h-5 mr-2" />
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                    <Badge className="ml-2 bg-primary/20 text-primary">
                      {filteredProjects.length}
                    </Badge>
                  </Button>
                </div>
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                    className="w-10 h-10 rounded-lg"
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                    className="w-10 h-10 rounded-lg"
                  >
                    <ListIcon className="w-5 h-5" />
                  </Button>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="date">Newest First</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Alphabetical</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Expanded Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 border-t border-white/10 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Categories */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          Categories
                        </h4>
                        <ScrollArea className="h-32">
                          <div className="space-y-2">
                            {categories.map((category) => {
                              const Icon = getCategoryIcon(category);
                              return (
                                <Button
                                  key={category}
                                  variant={activeCategory === category ? 'secondary' : 'ghost'}
                                  onClick={() => setActiveCategory(category)}
                                  className="w-full justify-start"
                                >
                                  <Icon className="w-4 h-4 mr-2" />
                                  {category}
                                  {category === 'All' && (
                                    <Badge className="ml-auto bg-primary/20 text-primary text-xs">
                                      {enhancedPortfolio.length}
                                    </Badge>
                                  )}
                                </Button>
                              );
                            })}
                          </div>
                        </ScrollArea>
                      </div>

                      {/* Years */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Year
                        </h4>
                        <div className="space-y-2">
                          {years.map((year) => (
                            <Button
                              key={year}
                              variant={activeYear === year ? 'secondary' : 'ghost'}
                              onClick={() => setActiveYear(year)}
                              className="w-full justify-start"
                            >
                              {year}
                              {year === 'All' && (
                                <Badge className="ml-auto bg-primary/20 text-primary text-xs">
                                  {enhancedPortfolio.length}
                                </Badge>
                              )}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Duration */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Duration
                        </h4>
                        <div className="space-y-2">
                          {durations.map((duration) => (
                            <Button
                              key={duration}
                              variant={activeDuration === duration ? 'secondary' : 'ghost'}
                              onClick={() => setActiveDuration(duration)}
                              className="w-full justify-start"
                            >
                              {duration}
                              {duration === 'All' && (
                                <Badge className="ml-auto bg-primary/20 text-primary text-xs">
                                  {enhancedPortfolio.length}
                                </Badge>
                              )}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Reset Filters */}
                    <div className="flex justify-end mt-6">
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setActiveCategory('All');
                          setActiveYear('All');
                          setActiveDuration('All');
                          setSearchQuery('');
                        }}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Reset All Filters
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Main Portfolio Content */}
        <motion.section variants={itemVariants} className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4">
            {/* Results Header */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col md:flex-row items-center justify-between mb-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  {filteredProjects.length} Creative Projects
                </h2>
                <p className="text-muted-foreground">
                  Showing {currentProjects.length} of {filteredProjects.length} results
                  {activeCategory !== 'All' && ` in ${activeCategory}`}
                  {activeYear !== 'All' && ` from ${activeYear}`}
                </p>
              </div>
              
              {/* Auto-play toggle */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={autoPlay}
                    onCheckedChange={setAutoPlay}
                    className="data-[state=checked]:bg-primary"
                  />
                  <span className="text-sm">Auto-rotate</span>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setAutoPlay(!autoPlay)}
                  className="w-10 h-10 rounded-lg"
                >
                  {autoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
              </div>
            </motion.div>

            {/* Project Grid/Masonry/List View */}
            <AnimatePresence mode="wait">
              {viewMode === 'grid' ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {currentProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ y: -10 }}
                      className="relative group"
                    >
                      <ProjectCard 
                        project={project} 
                        viewMode={viewMode}
                        isSelected={selectedProject === project.id}
                        onSelect={() => setSelectedProject(project.id === selectedProject ? null : project.id)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : viewMode === 'list' ? (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {currentProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                    >
                      <ProjectListCard 
                        project={project}
                        isSelected={selectedProject === project.id}
                        onSelect={() => setSelectedProject(project.id === selectedProject ? null : project.id)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="masonry"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="columns-1 md:columns-2 lg:columns-3 gap-8"
                >
                  {currentProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      className="mb-8 break-inside-avoid"
                    >
                      <ProjectCard 
                        project={project} 
                        viewMode="masonry"
                        isSelected={selectedProject === project.id}
                        onSelect={() => setSelectedProject(project.id === selectedProject ? null : project.id)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <motion.div
                variants={fadeInUp}
                className="text-center py-20"
              >
                <div className="w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">No Projects Found</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveCategory('All');
                    setActiveYear('All');
                    setActiveDuration('All');
                    setSearchQuery('');
                  }}
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear All Filters
                </Button>
              </motion.div>
            )}

            {/* Pagination */}
            {filteredProjects.length > 0 && (
              <motion.div
                variants={fadeInUp}
                className="flex flex-col md:flex-row items-center justify-between gap-6 mt-16 pt-8 border-t border-white/10"
              >
                <div className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages} • {filteredProjects.length} total projects
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? 'default' : 'outline'}
                          size="icon"
                          onClick={() => setCurrentPage(pageNum)}
                          className="w-10 h-10 rounded-lg"
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Portfolio Stats & Highlights */}
        <motion.section 
          variants={itemVariants}
          className="py-20 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <Badge className="mb-6 px-6 py-3 text-base bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
                <Award className="w-5 h-5 mr-2" />
                PORTFOLIO HIGHLIGHTS
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                By The{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Numbers
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { 
                  value: '98%', 
                  label: 'Client Satisfaction', 
                  icon: Heart,
                  color: 'from-rose-500 to-pink-500'
                },
                { 
                  value: '250+', 
                  label: 'Projects Delivered', 
                  icon: FolderTree,
                  color: 'from-blue-500 to-cyan-500'
                },
                { 
                  value: '50+', 
                  label: 'Happy Clients', 
                  icon: Users,
                  color: 'from-emerald-500 to-green-500'
                },
                { 
                  value: '15+', 
                  label: 'Awards Won', 
                  icon: Trophy,
                  color: 'from-amber-500 to-orange-500'
                },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    custom={index}
                    className="text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${stat.color} mx-auto mb-6 flex items-center justify-center`}>
                      <Icon className="w-12 h-12 text-white" />
                      <div className="absolute -inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          variants={itemVariants}
          className="py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-flow" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto"
            >
              <Badge className="mb-6 px-8 py-4 text-base bg-white/20 backdrop-blur-sm border-white/30">
                <Sparkle className="w-6 h-6 mr-2" />
                READY TO CREATE?
              </Badge>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Let's Build Something{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Amazing
                </span>
              </h2>
              
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Inspired by what you've seen? Let's discuss how we can bring your creative vision to life.
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
                  <Link href="/contact">
                    <span className="flex items-center gap-4">
                      <Download className="w-6 h-6" />
                      Download Portfolio PDF
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

// Enhanced Project Card Component
interface ProjectCardProps {
  project: any;
  viewMode: 'grid' | 'masonry' | 'list';
  isSelected: boolean;
  onSelect: () => void;
}

function ProjectCard({ project, viewMode, isSelected, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = getCategoryIcon(project.category);
  const projectImage = getPlaceholderImage(project.imageId);

  return (
    <Link href={`/portfolio/${project.id}/details`} passHref>
      <motion.div
        className="relative group h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Card Container */}
        <div className={`
          relative rounded-3xl overflow-hidden border-2 transition-all duration-500 h-full flex flex-col
          ${isSelected ? 'border-primary/50' : 'border-white/10'}
          bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm
          hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20
        `}>
          {/* Image/Video Container */}
          <div className="relative h-72 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.7 }}
            >
              {projectImage ? (
                 <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={projectImage.imageHint}
                  />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Icon className="w-16 h-16 text-white/30" />
                </div>
              )}
            </motion.div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-20">
              <Badge className="bg-black/50 backdrop-blur-sm border-white/20">
                {project.category}
              </Badge>
            </div>
            
            {/* Awards Badge */}
            {project.awards.length > 0 && (
              <div className="absolute top-4 right-4 z-20">
                <Badge className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500/30">
                  <Award className="w-3 h-3 mr-1" />
                  {project.awards[0]}
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {project.description}
                </p>
              </div>
              <motion.div
                animate={{ rotate: isHovered ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </motion.div>
            </div>

            {/* Project Metadata */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="text-xs">
                {project.year}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {project.duration}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {project.budget}
              </Badge>
            </div>

            {/* Tools & Rating */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
              <div className="flex items-center gap-1">
                {project.tools.slice(0, 2).map((tool: string, i: number) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-white/5">
                    {tool}
                  </span>
                ))}
                {project.tools.length > 2 && (
                  <span className="text-xs text-muted-foreground">
                    +{project.tools.length - 2}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{project.rating}</span>
              </div>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className={`
            absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
            flex items-end p-6 transition-all duration-500
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}>
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="text-white"
            >
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-sm text-white/80 mb-4 line-clamp-2">
                {project.description}
              </p>
              <Button
                size="sm"
                className="bg-white text-black hover:bg-white/90"
              >
                View Details
              </Button>
            </motion.div>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        {/* Glow Effect */}
        <div className={`absolute -inset-4 bg-gradient-to-br ${project.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
      </motion.div>
    </Link>
  );
}

// Project List Card Component
function ProjectListCard({ project, isSelected, onSelect }: { project: any, isSelected: boolean, onSelect: () => void }) {
  const Icon = getCategoryIcon(project.category);
  const projectImage = getPlaceholderImage(project.imageId);

  return (
    <Link href={`/portfolio/${project.id}/details`} passHref>
      <motion.div
        className="relative group"
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className={`
          relative rounded-2xl overflow-hidden border transition-all duration-500
          ${isSelected ? 'border-primary/50' : 'border-white/10'}
          bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm
          hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10
        `}>
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/4 h-48 md:h-auto relative overflow-hidden">
               {projectImage ? (
                 <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={projectImage.imageHint}
                  />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Icon className="w-16 h-16 text-white/30" />
                </div>
              )}
              <Badge className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm border-white/20">
                {project.category}
              </Badge>
            </div>

            {/* Content */}
            <div className="md:w-3/4 p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.awards.length > 0 && (
                      <Badge className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500/30">
                        <Award className="w-3 h-3 mr-1" />
                        Award Winner
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-2 md:mt-0"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Year</div>
                  <div className="font-medium">{project.year}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Duration</div>
                  <div className="font-medium">{project.duration}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Budget</div>
                  <div className="font-medium">{project.budget}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Team Size</div>
                  <div className="font-medium">{project.teamSize} people</div>
                </div>
              </div>

              {/* Tools and Rating */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool: string, i: number) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < project.rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <Button size="sm">View Case Study</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// Add missing CSS animation
const GlobalStyles = () => (
  <style jsx global>{`
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient-flow {
      background-size: 200% 200%;
      animation: gradient 15s ease infinite;
    }
  `}</style>
);
