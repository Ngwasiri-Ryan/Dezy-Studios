'use client';

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

export default function TestimonialsPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PageHeader
        title="What Our Clients Say"
        subtitle="Real feedback from people we've had the pleasure to work with."
      />
      <motion.section variants={itemVariants} className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="h-full"
              >
                <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`
                            ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground/50'}
                          `}
                        />
                      ))}
                    </div>

                    <blockquote className="text-muted-foreground italic text-lg border-l-4 border-primary/20 pl-6 mb-8 flex-grow">
                      "{testimonial.feedback}"
                    </blockquote>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <Avatar>
                        <AvatarImage src={getPlaceholderImage(testimonial.avatarId)?.imageUrl} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
