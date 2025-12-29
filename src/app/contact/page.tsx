'use client';

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Phone, MessageSquare, MapPin, Clock, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapEmbed } from "@/components/shared/map-embed";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const socialLinks = [
    { icon: Instagram, href: SOCIAL_LINKS.instagram },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
]

export default function ContactPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-background overflow-hidden"
    >
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
            {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl"
                animate={{
                x: [0, 120 * Math.sin(i), 0],
                y: [0, 60 * Math.cos(i), 0],
                scale: [1, 1.2, 1],
                }}
                transition={{
                duration: 22 + i * 5,
                repeat: Infinity,
                ease: "linear",
                }}
                style={{
                left: `${15 + i * 14}%`,
                top: `${20 + i * 10}%`,
                }}
            />
            ))}
        </div>

      <PageHeader
        title={
          <motion.span variants={itemVariants}>
            Let's Connect
          </motion.span>
        }
        subtitle={
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Get In Touch
          </motion.h1>
        }
        description={
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm excited to hear about your project. Let's create something amazing together.
          </motion.p>
        }
        className="relative z-10 bg-gradient-to-b from-secondary/20 via-background to-background"
      />
      <motion.section variants={containerVariants} className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Form Section */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <Card className="p-4 sm:p-8 md:p-10 border-2 border-primary/10 bg-white/5 backdrop-blur-sm">
                <CardHeader className="p-0 mb-8">
                  <Badge className="mb-4">
                    Send a Message
                  </Badge>
                  <CardTitle className="text-2xl md:text-4xl font-bold">
                    Project Inquiry Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Details Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-0">
                Other Ways to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Connect</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, title: 'Phone', value: CONTACT_DETAILS.phone, href: `tel:${CONTACT_DETAILS.phone}` },
                  { icon: Mail, title: 'Email', value: CONTACT_DETAILS.email, href: `mailto:${CONTACT_DETAILS.email}` },
                  { icon: MapPin, title: 'Address', value: CONTACT_DETAILS.address },
                  { icon: Clock, title: 'Assistance Hours', value: 'Mon – Sat: 9am - 8pm' },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative group"
                    >
                    <div className="relative p-4 md:p-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
                        <div className="flex items-center gap-4 md:gap-5">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-base md:text-lg">{item.title}</h4>
                                {item.href ? (
                                    <a href={item.href} className="text-sm md:text-base text-muted-foreground group-hover:text-primary transition-colors">
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="text-sm md:text-base text-muted-foreground">{item.value}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity -z-10"/>
                  </motion.div>
                ))}
              </div>

               <div className="mt-4">
                    <h4 className="font-semibold text-base md:text-lg mb-4">Follow Me</h4>
                    <div className="flex gap-4">
                        {socialLinks.map(({icon: Icon, href}, index) => (
                            <Button key={index} asChild variant="outline" size="icon" className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/5 hover:bg-white/10 border-white/10 hover:border-primary/30">
                                <Link href={href} target="_blank">
                                    <Icon className="w-5 h-5"/>
                                </Link>
                            </Button>
                        ))}
                    </div>
               </div>

            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section variants={itemVariants} className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold">Our Location</h2>
            <p className="text-muted-foreground mt-2">Find us in the heart of Derby, UK.</p>
          </div>
          <MapEmbed />
        </div>
      </motion.section>
    </motion.div>
  );
}
