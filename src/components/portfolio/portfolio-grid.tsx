'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, X, Play, Eye, Grid, List, Calendar, Users, Film, Image as ImageIcon, ExternalLink, ShoppingBag, Sparkles, Zap, Target, Award, Video, Edit3, Palette, Layers, Briefcase, Heart, Camera, Lock, Star, Menu, BookOpen, Brush, Wand2, Monitor, Clapperboard, Music, Printer, Shirt, Thermometer, Coffee, Box, RefreshCw, Baby, GraduationCap, ArrowRight, ArrowUpRight } from 'lucide-react';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { PortfolioItem, PortfolioCategory } from '@/lib/types';
import { motion, AnimatePresence } from "framer-motion";

// Define comprehensive categories with sub-categories
const portfolioCategories = [
  {
    id: "all",
    title: "All Work",
    description: "Complete portfolio showcasing all creative work",
    icon: Grid,
  },
  {
    id: "photography",
    title: "Photography",
    description: "Captured moments, emotions, and stories",
    icon: ImageIcon,
    subCategories: [
      { id: "portrait", label: "Portrait Photography", icon: Users },
      { id: "event", label: "Event Photography", icon: Calendar },
      { id: "fashion", label: "Fashion Photography", icon: Sparkles },
      { id: "product", label: "Product Photography", icon: ShoppingBag },
      { id: "commercial", label: "Commercial Photography", icon: Briefcase },
      { id: "creative", label: "Creative / Conceptual", icon: Heart },
      { id: "children", label: "Children Shots", icon: Baby },
      { id: "graduation", label: "Graduation Shots", icon: GraduationCap },
    ]
  },
  {
    id: "videography",
    title: "Videography",
    description: "Cinematic storytelling and immersive visuals",
    icon: Film,
    subCategories: [
      { id: "event-video", label: "Event Videography", icon: Calendar },
      { id: "promotional", label: "Promotional Videos", icon: Target },
      { id: "music", label: "Music & Performance", icon: Music },
      { id: "documentary", label: "Documentary / Storytelling", icon: Users },
      { id: "cinematic", label: "Cinematic Reels", icon: Video },
    ]
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Post-production magic and visual storytelling",
    icon: Edit3,
    subCategories: [
      { id: "social", label: "Social Media Edits", icon: Zap },
      { id: "commercial-edit", label: "Commercial Edits", icon: Briefcase },
      { id: "event-edit", label: "Event Edits", icon: Calendar },
      { id: "color", label: "Color Grading", icon: Palette },
      { id: "motion", label: "Motion Graphics", icon: Sparkles },
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Visual identity and branding solutions",
    icon: Palette,
    subCategories: [
      { id: "branding", label: "Brand Identity", icon: Layers },
      { id: "marketing", label: "Marketing Design", icon: Target },
      { id: "digital", label: "Digital Design", icon: Zap },
      { id: "print", label: "Print Design", icon: Printer },
      { id: "artwork", label: "Creative Artwork", icon: Sparkles },
    ]
  },
  {
    id: "product-design",
    title: "Products & Merch",
    description: "Designed merchandise and physical creations",
    icon: ShoppingBag,
    subCategories: [
      { id: "tshirts", label: "T-Shirts", icon: Shirt },
      { id: "sweaters", label: "Sweaters / Hoodies", icon: Thermometer },
      { id: "mugs", label: "Custom Mugs", icon: Coffee },
      { id: "mockups", label: "Mockups & Concepts", icon: Box },
    ]
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "In-depth project breakdowns and success stories",
    icon: Award,
    subCategories: [
      { id: "brand-cases", label: "Brand Case Studies", icon: Briefcase },
      { id: "signature", label: "Signature Projects", icon: Star },
      { id: "before-after", label: "Before & After", icon: RefreshCw },
    ]
  },
  {
    id: "experimental",
    title: "Experimental",
    description: "Personal projects and creative explorations",
    icon: Sparkles,
    subCategories: [
      { id: "personal", label: "Personal Projects", icon: Heart },
      { id: "behind", label: "Behind the Scenes", icon: Camera },
      { id: "experimental-visuals", label: "Experimental Visuals", icon: Zap },
      { id: "unreleased", label: "Unreleased Concepts", icon: Lock },
    ]
  },
  {
      id: "creative-direction",
      title: "Creative Direction",
      description: "Leading the vision from concept to completion",
      icon: Wand2,
      subCategories: [
        { id: "concept", label: "Concept Development", icon: Brush },
        { id: "campaign", label: "Campaign Direction", icon: Clapperboard },
        { id: "art-direction", label: "Art Direction", icon: Monitor },
      ],
    }
];

type PortfolioGridProps = {
  projects: PortfolioItem[];
};

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeSubCategory, setActiveSubCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedClientType, setSelectedClientType] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"masonry" | "grid">("masonry");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  // Get current category
  const currentCategory = useMemo(() => 
    portfolioCategories.find(cat => cat.id === activeTab) || portfolioCategories[0],
    [activeTab]
  );
  const currentCategoryTitle = currentCategory ? (currentCategory.id === "all" ? "all" : currentCategory.title as PortfolioCategory) : "all";


  // Filter projects based on selections
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (currentCategoryTitle !== "all") {
        filtered = filtered.filter(project => project.category === currentCategoryTitle);
    }
  
    if (activeSubCategory !== "all") {
       const subCategoryLabel = currentCategory.subCategories?.find(sc => sc.id === activeSubCategory)?.label;
       if (subCategoryLabel) {
         filtered = filtered.filter(project => project.subCategory === subCategoryLabel);
       }
    }
  
    if (selectedYear !== "all") {
      filtered = filtered.filter(project => project.year?.toString() === selectedYear);
    }
  
    if (selectedClientType !== "all") {
      filtered = filtered.filter(project => project.clientType === selectedClientType);
    }
    
    return filtered;
  }, [projects, currentCategoryTitle, activeSubCategory, selectedYear, selectedClientType, currentCategory]);

  // Get unique years from projects
  const availableYears = useMemo(() => {
    const years = new Set(projects.map(p => p.year).filter(Boolean) as number[]);
    return Array.from(years).sort((a, b) => b - a).map(String);
  }, [projects]);

  // Get unique client types
  const availableClientTypes = useMemo(() => {
    const types = new Set(projects.map(p => p.clientType).filter(Boolean) as string[]);
    return Array.from(types);
  }, [projects]);

  // Reset filters
  const resetFilters = () => {
    setActiveSubCategory("all");
    setSelectedYear("all");
    setSelectedClientType("all");
  };

  const hasActiveFilters = activeSubCategory !== "all" || selectedYear !== "all" || selectedClientType !== "all";

  return (
    <div className="space-y-8">
      {/* Enhanced Category Tabs */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b py-4">
        <div className="container mx-auto px-4">
          <Tabs 
            value={activeTab} 
            onValueChange={(value) => {
              setActiveTab(value);
              resetFilters();
            }}
            className="w-full"
          >
            <TabsList className="flex flex-wrap h-auto bg-secondary/50 p-1 gap-1">
              {portfolioCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="relative px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
                >
                  <category.icon className="h-4 w-4" />
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Category Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-6 px-1"
              >
                <h2 className="text-2xl md:text-3xl font-headline font-bold flex items-center gap-3">
                  <currentCategory.icon className="h-8 w-8 text-primary" />
                  {currentCategory.title}
                </h2>
                <p className="text-muted-foreground mt-2">{currentCategory.description}</p>
                
                {/* Sub-category Filters */}
                {currentCategory.subCategories && currentCategory.subCategories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant={activeSubCategory === "all" ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => setActiveSubCategory("all")}
                    >
                      All {currentCategory.title}
                    </Badge>
                    {currentCategory.subCategories.map((subCat) => (
                      <Badge
                        key={subCat.id}
                        variant={activeSubCategory === subCat.id ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary/10 transition-colors flex items-center gap-1.5"
                        onClick={() => setActiveSubCategory(subCat.id)}
                      >
                        <subCat.icon className="h-3 w-3" />
                        {subCat.label}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </div>

      {/* Advanced Filters Bar */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-4 bg-card rounded-lg border">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by:</span>
            
            {/* Sub-category Selector */}
            {currentCategory.subCategories && currentCategory.subCategories.length > 0 && (
              <Select value={activeSubCategory} onValueChange={setActiveSubCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sub-category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sub-categories</SelectItem>
                  {currentCategory.subCategories.map((subCat) => (
                    <SelectItem key={subCat.id} value={subCat.id}>
                      {subCat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {/* Year Filter */}
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {availableYears.map((year) => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Client Type Filter */}
            {availableClientTypes.length > 0 && (
              <Select value={selectedClientType} onValueChange={setSelectedClientType}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Client Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {availableClientTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={resetFilters} className="h-9">
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Badge variant="outline" className="text-xs">
                {filteredProjects.length} projects
              </Badge>
            </div>
            <div className="flex items-center gap-1 border rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-8 w-8 p-0"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "masonry" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("masonry")}
                className="h-8 w-8 p-0"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${activeSubCategory}-${selectedYear}-${selectedClientType}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.length > 0 ? (
              viewMode === 'masonry' ? (
                // Masonry Grid for Photography-heavy sections
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                  {filteredProjects.map((item, index) => (
                    <PortfolioCard 
                      key={`${item.id}-${index}`} 
                      item={item} 
                      index={index}
                      viewMode="masonry"
                    />
                  ))}
                </div>
              ) : (
                // Regular Grid
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((item, index) => (
                    <PortfolioCard 
                      key={`${item.id}-${index}`} 
                      item={item}
                      index={index}
                      viewMode="grid"
                    />
                  ))}
                </div>
              )
            ) : (
              // Empty State
              <div className="text-center py-20">
                <div className="mx-auto max-w-md">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Filter className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold mb-2">No projects found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters to see more projects
                  </p>
                  <Button onClick={resetFilters} variant="outline">
                    Clear All Filters
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Portfolio Card Component - Styled exactly like Homepage "Visual Masterpieces"
function PortfolioCard({ 
  item, 
  index,
  viewMode,
}: { 
  item: PortfolioItem; 
  index: number;
  viewMode: "masonry" | "grid";
}) {
  const projectImage = getPlaceholderImage(item.imageId);
  const isVideo = item.mediaType === "video";

  return (
    <motion.div
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
      <Link href={`/portfolio/${item.id}/details`}>
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
                alt={item.title}
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
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, once: true }}
              className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
            >
              {/* Category Badge */}
              <Badge className="mb-2 md:mb-3 bg-white/20 backdrop-blur-sm border-white/30">
                {item.category}
              </Badge>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
              
              {/* Description */}
              <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base line-clamp-2">{item.description}</p>
              
              {/* Footer with Explore and Rating */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white text-sm">
                  <span>Explore Project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
                
                {/* Star Rating */}
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

          {/* Floating tags - Video indicator */}
          <div className="absolute top-4 left-4">
            <div className="flex flex-wrap gap-2">
              {isVideo && (
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white/90 border border-white/20">
                  Video
                </span>
              )}
              {item.division && (
                <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-primary/50">
                  {item.division}
                </span>
              )}
            </div>
          </div>

          {/* Year badge */}
          {item.year && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white/90 border border-white/20">
                {item.year}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
}
