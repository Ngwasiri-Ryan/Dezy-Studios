'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from '@/components/shared/preloader';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { CustomCursor } from '@/components/shared/custom-cursor';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (typeof window !== 'undefined') {
        if (sessionStorage.getItem('preloaderShown')) {
          setIsLoading(false);
        } else {
            timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem('preloaderShown', 'true');
            }, 3000); 
        }
    }
    
    return () => {
        if(timer) clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
