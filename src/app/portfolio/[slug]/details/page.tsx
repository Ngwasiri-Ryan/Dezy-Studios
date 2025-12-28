'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { portfolio } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, DollarSign, Award, Star, Palette, Camera, Video, Briefcase, Sparkles } from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      // Find project from enhancedPortfolio simulation
      const enhancedProject = portfolio.map((p, index) => ({
        ...p,
        year: 2020 + (index % 4),
        duration: ['1 week', '2 weeks', '1 month', '3 months'][index % 4],
        budget: ['$5K', '$10K', '$25K', '$50K+'][index % 4],
        teamSize: [2, 3, 5, 8][index % 4],
        rating: 4 + (index % 2),
        tools: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Cinema 4D'].slice(0, 2 + (index % 3)),
        awards: index % 3 === 0 ? ['Award Winner', 'Featured'] : [],
      })).find(p => p.id === slug);
      
      setProject(enhancedProject);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Project not found</h2>
          <p className="text-muted-foreground">This project does not exist or has been moved.</p>
          <Button asChild className="mt-4">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const projectImage = getPlaceholderImage(project.imageId);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Photography': return Camera;
      case 'Graphic Design': return Palette;
      case 'Videography': return Video;
      case 'Video Editing': return Video;
      case 'Brand Campaigns': return Briefcase;
      default: return Sparkles;
    }
  };
  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background"
    >
      {/* Back Button */}
      <motion.div variants={itemVariants} className="container mx-auto px-4 pt-8">
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>
      </motion.div>
      
      {/* Project Header */}
      <motion.header variants={itemVariants} className="container mx-auto px-4 py-12 text-center">
        <Badge variant="secondary" className="mb-4">
          <CategoryIcon className="mr-2 h-4 w-4" />
          {project.category}
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {project.description}
        </p>
      </motion.header>

      {/* Main Image */}
      {projectImage && (
        <motion.div variants={itemVariants} className="container mx-auto px-4 mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={projectImage.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint={projectImage.imageHint}
              priority
            />
          </div>
        </motion.div>
      )}

      {/* Project Details */}
      <motion.div variants={itemVariants} className="container mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About the Project</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-4">
              <p>
                This project, "{project.title}," was a {project.category.toLowerCase()} initiative for our client, showcasing our capabilities in creating compelling visual narratives. The primary objective was to deliver a high-quality product that not only met but exceeded the client's expectations, reinforcing their brand identity and engaging their target audience.
              </p>
              <p>
                Throughout the project lifecycle, from initial concept to final delivery, our team focused on a collaborative approach. We worked closely with the client to ensure every detail was perfect. The project was completed within the specified {project.duration} timeframe and budget of {project.budget}.
              </p>
              {project.awards.length > 0 && (
                <blockquote>
                  We are proud that this project was recognized with the following awards: {project.awards.join(', ')}.
                </blockquote>
              )}
               <p>
                The final result is a testament to our commitment to excellence and our passion for creative storytelling. We believe this project serves as a strong example of our ability to blend artistic vision with technical expertise to produce outstanding results.
              </p>
            </div>
          </div>
          
          {/* Sidebar with stats */}
          <div>
            <Card className="sticky top-24 bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Project Snapshot</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <span className="text-sm text-muted-foreground">Year</span>
                      <p className="font-semibold">{project.year}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <span className="text-sm text-muted-foreground">Duration</span>
                      <p className="font-semibold">{project.duration}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <span className="text-sm text-muted-foreground">Team Size</span>
                      <p className="font-semibold">{project.teamSize} members</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <span className="text-sm text-muted-foreground">Budget</span>
                      <p className="font-semibold">{project.budget}</p>
                    </div>
                  </li>
                   <li className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary" />
                    <div>
                      <span className="text-sm text-muted-foreground">Rating</span>
                      <p className="font-semibold">{project.rating} / 5</p>
                    </div>
                  </li>
                  {project.awards.length > 0 && (
                    <li className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <span className="text-sm text-muted-foreground">Awards</span>
                        <p className="font-semibold">{project.awards.join(', ')}</p>
                      </div>
                    </li>
                  )}
                </ul>
                
                <h4 className="font-bold mt-8 mb-4">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool: string) => (
                    <Badge key={tool} variant="secondary">{tool}</Badge>
                  ))}
                </div>

                {project.client && (
                    <Button asChild className="w-full mt-8">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Visit Client Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
