'use client';

import { motion } from "framer-motion";
import { PageHeader } from "@/components/shared/page-header";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { portfolio } from "@/lib/data";

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

export default function PortfolioPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PageHeader
        title="My Portfolio"
        subtitle="A curated collection of my work across different creative fields."
      />
      <motion.section variants={itemVariants} className="py-16 md:py-24">
        <div className="container mx-auto">
          <PortfolioGrid projects={portfolio} />
        </div>
      </motion.section>
    </motion.div>
  );
}
