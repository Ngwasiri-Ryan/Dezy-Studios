'use client';

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_DETAILS } from "@/lib/constants";
import { Mail, Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapEmbed } from "@/components/shared/map-embed";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PageHeader
        title="Get in Touch"
        subtitle="I'm excited to hear about your project. Let's create something amazing together."
      />
      <motion.section variants={itemVariants} className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-headline font-bold mb-6">Contact Form</h2>
              <ContactForm />
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-headline font-bold">Other Ways to Connect</h2>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Phone className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-muted-foreground hover:text-primary">
                    {CONTACT_DETAILS.phone}
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Mail className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-muted-foreground hover:text-primary">
                    {CONTACT_DETAILS.email}
                  </a>
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Clock className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">Assistance Hours</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Mon – Sat: 9:00am - 8:00pm</p>
                  <p>Sunday: CLOSED</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <MapPin className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">Address</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>{CONTACT_DETAILS.address}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section variants={itemVariants} className="pb-16 md:pb-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-headline font-bold mb-6 text-center">Our Location</h2>
          <MapEmbed />
        </div>
      </motion.section>
    </motion.div>
  );
}
