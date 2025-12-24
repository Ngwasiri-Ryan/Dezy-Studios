'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, X, Play, Eye, Grid, List, Calendar, User, Film, Image as ImageIcon, ExternalLink, ShoppingBag, Sparkles, Zap, Target, Users, Award, Video, Edit3, Palette, Layers, Briefcase, Heart, Music, Printer, Shirt, Thermometer, Coffee, Box, RefreshCw, Star, Camera, Lock } from 'lucide-react';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { PortfolioItem } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

// Define comprehensive categories with sub-categories
const portfolioCategories = [
  {
    id: "all",
    title: "All Work",
    description: "Complete portfolio showcasing all creative work",
    icon: Grid,
    count: 0,
    featured: false,
  },
  {
    id: "photography",
    title: "Photography",
    description: "Captured moments, emotions, and stories",
    icon: ImageIcon,
    count: 156,
    featured: true,
    subCategories: [
      { id: "portrait", label: "Portrait Photography", icon: Users },
      { id: "event", label: "Event Photography", icon: Calendar },
      { id: "fashion", label: "Fashion Photography", icon: Sparkles },
      { id: "product", label: "Product Photography", icon: ShoppingBag },
      { id: "commercial", label: "Commercial Photography", icon: Briefcase },
      { id: "creative", label: "Creative / Conceptual", icon: Heart },
    ]
  },
  {
    id: "videography",
    title: "Videography",
    description: "Cinematic storytelling and immersive visuals",
    icon: Film,
    count: 89,
    featured: true,
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
    count: 72,
    featured: true,
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
    count: 113,
    featured: true,
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
    count: 45,
    featured: true,
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
    count: 23,
    featured: true,
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
    count: 38,
    featured: false,
    subCategories: [
      { id: "personal", label: "Personal Projects", icon: Heart },
      { id: "behind", label: "Behind the Scenes", icon: Camera },
      { id: "experimental-visuals", label: "Experimental Visuals", icon: Zap },
      { id: "unreleased", label: "Unreleased Concepts", icon: Lock },
    ]
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

  // Filter projects based on selections
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    if (activeTab !== "all") {
      filtered = filtered.filter(project => project.category === currentCategory.title);
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
  }, [projects, activeTab, activeSubCategory, selectedYear, selectedClientType, currentCategory]);

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
                  {filteredProjects.map((item) => (
                    <PortfolioCard 
                      key={item.id} 
                      item={item} 
                      viewMode="masonry"
                      onSelect={setSelectedProject}
                    />
                  ))}
                </div>
              ) : (
                // Regular Grid
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProjects.map((item) => (
                    <PortfolioCard 
                      key={item.id} 
                      item={item} 
                      viewMode="grid"
                      onSelect={setSelectedProject}
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

      {/* Video Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <VideoPreviewModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Enhanced Portfolio Card Component
function PortfolioCard({ 
  item, 
  viewMode,
  onSelect 
}: { 
  item: PortfolioItem; 
  viewMode: "masonry" | "grid";
  onSelect: (item: PortfolioItem) => void;
}) {
  const projectImage = getPlaceholderImage(item.imageId);
  const isVideo = item.mediaType === "video";
  const isCaseStudy = item.category === "Case Studies";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      layout
      className={`group relative ${viewMode === "masonry" ? "break-inside-avoid" : ""}`}
    >
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-primary/10 hover:border-primary/30">
        {/* Media Container */}
        <div className={`relative overflow-hidden ${viewMode === "grid" ? 'aspect-square' : ''}`}>
          {projectImage && (
            <Image
              src={projectImage.imageUrl}
              alt={item.title}
              width={600}
              height={viewMode === "masonry" ? 800 : 600}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={projectImage.imageHint}
              loading="lazy"
            />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                 
                </div>
                {item.year && <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
                  {item.year}
                </Badge>}
              </div>
            </div>

          {/* Media Type Indicator */}
          {isVideo && (
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                <Video className="h-3 w-3 mr-1" />
                Video
              </Badge>
            </div>
          )}

          {/* Client Type Badge */}
          {item.clientType && (
            <div className="absolute top-4 right-4">
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
                {item.clientType}
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <CardTitle className="font-headline text-xl line-clamp-1">{item.title}</CardTitle>
              <CardDescription className="mt-1 text-xs">
                {item.subCategory || item.category}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pb-6 flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        </CardContent>

        <CardFooter className="pt-4 border-t">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full group/button"
            onClick={() => onSelect(item)}
          >
            {isVideo ? "Watch Video" : isCaseStudy ? "Read Case Study" : "View Project"}
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

// Video Preview Modal Component
function VideoPreviewModal({ project, onClose }: { project: PortfolioItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-4xl w-full bg-card rounded-xl overflow-hidden shadow-2xl border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="secondary"
            size="icon"
            onClick={onClose}
            className="rounded-full bg-background/80 backdrop-blur-sm"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Video Player Placeholder */}
        <div className="aspect-video bg-secondary flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            { project.mediaType === 'video' ? 
              <>
                <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold">{project.title}</p>
                <p>Video Preview</p>
              </>
            : 
              <>
                <Eye className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold">{project.title}</p>
                <p>Project Preview</p>
              </>
            }
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-headline font-bold mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>{project.category}</Badge>
            <Badge variant="outline">{project.subCategory}</Badge>
            {project.year && <Badge variant="secondary">{project.year}</Badge>}
          </div>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

    