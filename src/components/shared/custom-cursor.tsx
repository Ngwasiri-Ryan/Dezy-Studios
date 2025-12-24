'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"]')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };
    
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);


    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'hsl(var(--primary))',
      mixBlendMode: 'difference',
    },
    pointer: {
      x: position.x - 16,
      y: position.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'hsl(var(--primary))',
      mixBlendMode: 'difference',
    },
    clicking: {
      x: position.x - 12,
      y: position.y - 12,
      height: 24,
      width: 24,
      backgroundColor: 'hsl(var(--primary))',
      mixBlendMode: 'difference',
    },
  };
  
  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full z-[9999] pointer-events-none hidden md:block"
      variants={variants}
      animate={isClicking ? "clicking" : isPointer ? "pointer" : "default"}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
}
