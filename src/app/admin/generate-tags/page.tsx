'use client';

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { TagGenerator } from "@/components/ai/tag-generator";

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

export default function GenerateTagsPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PageHeader
        title="AI Portfolio Tag Generator"
        subtitle="Upload an image or video to automatically generate tags and a description."
      />
      <motion.section variants={itemVariants} className="py-16 md:py-24">
        <div className="container mx-auto max-w-2xl">
          <TagGenerator />
        </div>
      </motion.section>
    </motion.div>
  );
}
