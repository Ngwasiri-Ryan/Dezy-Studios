'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { SOCIAL_LINKS } from "@/lib/constants";
import { ArrowRight, MessageCircle, ShoppingBag, Sparkles } from "lucide-react";
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

export default function ShopPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-background overflow-hidden"
    >
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl"
            animate={{
              x: [0, 80 * Math.sin(i), 0],
              y: [0, 40 * Math.cos(i), 0],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 25 + i * 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <PageHeader
        title={
          <motion.span variants={itemVariants}>
            Dezy Enterprise Shop
          </motion.span>
        }
        subtitle={
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Exclusive Merchandise
          </motion.h1>
        }
        description={
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Curated and custom-designed products. Contact us via WhatsApp or phone to purchase.
            </motion.p>
        }
        className="relative z-10 bg-gradient-to-b from-secondary/20 via-background to-background"
      />

      <motion.section 
        variants={containerVariants}
        className="py-16 md:py-24 relative"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => {
              const productImage = getPlaceholderImage(product.imageId);
              return (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="h-full"
                >
                  <Card className="relative h-full flex flex-col overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 group bg-white/5 backdrop-blur-sm">
                     {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                    
                    {productImage && (
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={productImage.imageUrl}
                          alt={product.title}
                          width={600}
                          height={600}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          data-ai-hint={productImage.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="font-headline text-xl md:text-2xl group-hover:text-primary transition-colors">{product.title}</CardTitle>
                      <p className="text-lg md:text-xl font-bold text-primary">{product.price}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm md:text-base">{product.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group/btn">
                        <Link href={SOCIAL_LINKS.whatsapp} target="_blank">
                          <MessageCircle className="mr-2 h-4 w-4" /> 
                          Contact to Buy
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                     {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        variants={itemVariants}
        className="py-16 md:py-20 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"
      >
        <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
                <Sparkles className="w-5 h-5 mr-2" />
                Got an Idea?
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Looking for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Custom Merchandise</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                We can create custom designs and products for your brand, event, or personal use. Let's talk about your project.
            </p>
            <Button asChild size="lg" className="group">
                <Link href="/contact">
                    Start a Custom Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
        </div>
      </motion.section>
    </motion.div>
  );
}
