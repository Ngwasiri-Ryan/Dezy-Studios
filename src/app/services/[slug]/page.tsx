'use client';

import { useParams, useRouter } from 'next/navigation';
import { services, portfolio, testimonials } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  ArrowLeft,
  Eye
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
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
  const router = useRouter();
  const slug = params.slug as string;

  const service = services.find((s) => s.id === slug);
  const relevantProjects = portfolio.filter((p) => p.category === service?.title).slice(0, 6);
  const relevantTestimonial = testimonials.find((t) => t.id === 't2');

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);


  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <p className="text-muted-foreground mt-4">The service you're looking for doesn't exist.</p>
        <Button asChild className="mt-8" onClick={() => router.back()}>
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>
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
          <motion.div className="absolute inset-0 z-0" style={{ scale }}>
            <Image
              src={heroImage.imageUrl}
              alt={`${service.title} background`}
              fill
              className="object-cover"
              quality={100}
              priority
              data-ai-hint={heroImage.imageHint}
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-secondary/30" />
        <div className="relative z-10 p-4">
          <motion.div variants={fadeInUp}>
            <Badge className="mb-4 px-4 py-2 text-sm bg-white/10 backdrop-blur-sm border-white/20">{service.division}</Badge>
          </motion.div>
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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Visual Showcase</h2>
          <p className="text-muted-foreground mt-2">A gallery of our work in {service.title}.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {relevantProjects.map((project, index) => {
            const projectImage = getPlaceholderImage(project.imageId);
            const span = index === 0 || index === 3 ? "md:col-span-2" : "";
            return (
              projectImage && (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className={`overflow-hidden rounded-xl group relative aspect-video md:aspect-auto ${span}`}
                  whileHover={{ scale: 1.03 }}
                >
                  <Link href={`/portfolio/${project.id}/details`}>
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={projectImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="font-bold text-white text-lg">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.subCategory}</p>
                    </div>
                  </Link>
                </motion.div>
              )
            );
          })}
        </div>
      </motion.section>

      {/* 3. Service Story / Description */}
      <motion.section variants={fadeInUp} className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4">Our Approach</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                More Than Just <br />
                <span className="text-primary">{service.title}</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {`At Dezy Enterprise, ${service.title.toLowerCase()} goes beyond aesthetics. Each creation is built to communicate, connect, and represent your brand with clarity and confidence.`}
                </p>
                <p>
                  We believe in a deeply collaborative process, ensuring that your unique vision is at the very heart of everything we create, from the initial concept to the final polished deliverable.
                </p>
              </div>
            </motion.div>
            {serviceStoryImage && (
              <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={serviceStoryImage.imageUrl}
                  alt="Service Story"
                  width={800}
                  height={1000}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={serviceStoryImage.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* 4. Sub-Services Breakdown */}
      <motion.section variants={fadeInUp} className="py-20 md:py-28 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Core Offerings</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">What's Included</h2>
          <p className="text-lg text-muted-foreground mt-4">
            A closer look at the specific capabilities within our {service.title} service.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {service.subServices?.map((sub, index) => (
            <motion.div key={index} variants={fadeInUp} className="relative group">
               <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity -z-10"/>
              <div className="p-8 border rounded-2xl bg-card hover:border-primary/30 h-full transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{sub}</h3>
                <p className="text-muted-foreground text-sm">
                  High-quality, professional results tailored to your unique needs and brand vision.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 5. Process / Behind-the-Scenes */}
      <motion.section variants={fadeInUp} className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Workflow</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Our Creative Process</h2>
            <p className="text-lg text-muted-foreground mt-4">
              A transparent look at how we bring your ideas to life, from start to finish.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div key={index} variants={fadeInUp} className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'} ${index < processSteps.length - 1 ? 'mb-12' : ''}`}>
                    <div className="flex-1">
                      <div className="p-6 bg-card rounded-lg shadow-sm border border-transparent hover:border-primary/20 transition-colors">
                        <Badge variant="outline" className="mb-3">{`Step 0${index+1}`}</Badge>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-1 items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                          <Icon className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 7. Social Proof */}
      {relevantTestimonial && (
        <motion.section variants={fadeInUp} className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl italic text-foreground mb-8">"{relevantTestimonial.feedback}"</motion.p>
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
              <Avatar className="w-16 h-16 border-2 border-primary/50">
                <AvatarImage src={getPlaceholderImage(relevantTestimonial.avatarId)?.imageUrl} alt={relevantTestimonial.name} />
                <AvatarFallback>{relevantTestimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-lg">{relevantTestimonial.name}</p>
                <p className="text-sm text-muted-foreground">{relevantTestimonial.company}</p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* 8. Strong Call to Action */}
      <motion.section 
        variants={fadeInUp} 
        className="py-20 md:py-32 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Let's create something meaningful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-200 group">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}>Chat on WhatsApp</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
