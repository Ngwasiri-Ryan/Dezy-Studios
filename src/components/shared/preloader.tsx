'use client';

import { motion } from 'framer-motion';
import { Logo } from './logo';
import { Progress } from '../ui/progress';
import { useEffect, useState } from 'react';

export function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // Corresponds to a ~2.5 second load time

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        <Logo />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: '12rem', transition: { duration: 0.5, delay: 0.5 } }}
        className="mt-4"
      >
        <Progress value={progress} className="h-1 bg-primary/20" />
      </motion.div>
    </motion.div>
  );
}
