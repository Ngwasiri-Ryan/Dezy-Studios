'use client';

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Star, Users, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    } 
  },
};

export default function TestimonialsPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-background overflow-hidden"
    >
      <PageHeader
        title={
          <motion.span variants={itemVariants} className="block">
            Trusted by the Best
          </motion.span>
        }
        subtitle={
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            Client Testimonials
          </motion.h1>
        }
        description={
          <motion.p 
            variants={itemVariants} 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Real feedback from amazing people we've had the pleasure to work with.
          </motion.p>
        }
        className="relative z-10 bg-gradient-to-b from-secondary/20 via-background to-background"
      />
      
      <motion.section 
        variants={containerVariants}
        className="py-16 md:py-24 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 -z-10" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const avatar = getPlaceholderImage(testimonial.avatarId);
              return (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  className="h-full"
                >
                  <div className="relative h-full group">
                    {/* Glow background */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    
                    {/* Card */}
                    <Card className="relative p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                      {/* Quote icon */}
                      <div className="absolute top-6 right-6 text-white/10 group-hover:text-white/20 transition-colors duration-300">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <div className="relative z-10 flex flex-col flex-grow">
                        {/* Stars */}
                        <div className="flex items-center gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-white/20'
                              } group-hover:scale-110 transition-transform`}
                              style={{ transitionDelay: `${i * 50}ms` }}
                            />
                          ))}
                        </div>
                        
                        {/* Testimonial text */}
                        <p className="text-white/80 leading-relaxed mb-8 italic flex-grow text-lg">
                          "{testimonial.feedback}"
                        </p>

                        {/* Client info */}
                        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                          <Avatar className="w-16 h-16 border-2 border-white/20">
                            {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.name} />}
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-bold text-white text-lg">{testimonial.name}</div>
                            <div className="text-white/60">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
