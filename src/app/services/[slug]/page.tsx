'use client';

import { useParams } from 'next/navigation';
import { services, portfolio, testimonials } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Award,
  Lightbulb,
  Palette as PaletteIcon,
  Rocket,
  Shield,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PageHeader } from '@/components/shared/page-header';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Concept & Planning',
    description: 'We start by understanding your vision and goals, crafting a detailed strategy to ensure success.',
  },
  {
    icon: PaletteIcon,
    title: 'Creation & Craft',
    description:
      'Our team brings the vision to life with creative excellence, meticulous attention to detail, and technical mastery.',
  },
  {
    icon: Rocket,
    title: 'Refinement',
    description: 'We collaborate with you to refine the work, incorporating feedback to achieve the perfect result.',
  },
  {
    icon: Shield,
    title: 'Final Delivery',
    description: 'The polished, final product is delivered, ready to make an impact and captivate your audience.',
  },
];

export default function ServiceExplorerPage() {
  const params = useParams();
  const slug = params.slug as string;

  const service = services.find((s) => s.id === slug);
  const relevantProjects = portfolio.filter((p) => p.category === service?.title).slice(0, 8);
  const relevantTestimonial = testimonials.find((t) => t.id === 't2'); // Placeholder

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Service Not Found</h1>
          <p className="text-muted-foreground mt-4">The service you're looking for doesn't exist.</p>
          <Button asChild className="mt-8">
            <Link href="/services">
              <ArrowRight className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  const heroImage = getPlaceholderImage('hero-1');
  const serviceStoryImage = getPlaceholderImage('project-design-2');

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="bg-background">
      {/* 1. Immersive Hero */}
      <motion.section variants={fadeInUp} className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={`${service.title} background`}
            fill
            className="object-cover opacity-20"
            quality={100}
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative z-10 p-4">
          <Badge className="mb-4">{service.division}</Badge>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            {service.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {service.tagline || 'Crafting visual identities that speak before words do.'}
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Visual Introduction */}
      <motion.section variants={fadeInUp} className="py-20 md:py-28 container mx-auto px-4">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {relevantProjects.slice(0, 8).map((project, index) => {
            const projectImage = getPlaceholderImage(project.imageId);
            return (
              projectImage && (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className="overflow-hidden rounded-lg group relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-auto"
                    data-ai-hint={projectImage.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-bold">{project.title}</p>
                  </div>
                </motion.div>
              )
            );
          })}
        </div>
      </motion.section>

      {/* 3. Service Story / Description */}
      <motion.section variants={fadeInUp} className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                More Than Just <br />
                <span className="text-primary">{service.title}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {`At Dezy Enterprise, ${service.title.toLowerCase()} goes beyond aesthetics. Each creation is built to communicate, connect, and represent your brand with clarity and confidence.`}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in a collaborative process, ensuring that your vision is at the heart of everything we do.
              </p>
            </motion.div>
            {serviceStoryImage && (
              <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={serviceStoryImage.imageUrl}
                  alt="Service Story"
                  width={800}
                  height={1000}
                  className="object-cover"
                  data-ai-hint={serviceStoryImage.imageHint}
                />
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* 4. Sub-Services Breakdown */}
      <motion.section variants={fadeInUp} className="py-20 md:py-28 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">What We Offer</h2>
          <p className="text-lg text-muted-foreground mt-4">
            A closer look at the specific services included in {service.title}.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.subServices?.map((sub, index) => (
            <motion.div key={index} variants={fadeInUp} className="p-8 border rounded-2xl bg-card hover:shadow-lg transition-shadow">
              <CheckCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{sub}</h3>
              <p className="text-muted-foreground text-sm">
                High-quality, professional results tailored to your needs.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 5. Process / Behind-the-Scenes */}
      <motion.section variants={fadeInUp} className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Our Creative Process</h2>
            <p className="text-lg text-muted-foreground mt-4">
              A transparent look at how we bring your ideas to life, from start to finish.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border hidden md:block" />
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} variants={fadeInUp} className="text-center relative bg-background p-6 rounded-lg">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 border-2 border-primary/20">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 6. Expanded Gallery */}
      <motion.section variants={fadeInUp} className="py-20 md:py-28 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Project Gallery</h2>
          <p className="text-lg text-muted-foreground mt-4">
            A deeper dive into our {service.title} projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relevantProjects.map((project) => {
            const projectImage = getPlaceholderImage(project.imageId);
            return (
              projectImage && (
                <motion.div key={project.id} variants={fadeInUp} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={projectImage.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white font-bold">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.subCategory}</p>
                  </div>
                </motion.div>
              )
            );
          })}
        </div>
      </motion.section>

      {/* 7. Social Proof */}
      {relevantTestimonial && (
        <motion.section variants={fadeInUp} className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-2xl italic text-foreground mb-6">"{relevantTestimonial.feedback}"</p>
            <div className="flex items-center justify-center gap-4">
              <Avatar>
                <AvatarImage src={getPlaceholderImage(relevantTestimonial.avatarId)?.imageUrl} alt={relevantTestimonial.name} />
                <AvatarFallback>{relevantTestimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">{relevantTestimonial.name}</p>
                <p className="text-sm text-muted-foreground">{relevantTestimonial.company}</p>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* 8. Strong Call to Action */}
      <motion.section variants={fadeInUp} className="py-20 md:py-28 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's create something meaningful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-200">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="https://wa.me/447857369910">WhatsApp Me</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
