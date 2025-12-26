'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { AnimatePresence } from 'framer-motion';
import { Preloader } from '@/components/shared/preloader';

// Metadata needs to be exported from a server component or at the page level.
// We'll keep it here but acknowledge it won't work in a 'use client' file.
// export const metadata: Metadata = {
//   title: "Dezy Enterprise Portfolio",
//   description: "Creative Portfolio for Binda Desmond / Dezy Enterprise",
//   keywords: ["Photography", "Graphic Design", "Video Editing", "Videography", "Product Design"],
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Persist that initial load is done
      sessionStorage.setItem('preloaderShown', 'true');
    }, 3000); // Adjust duration as needed

    // Check if preloader has been shown before in this session
    if (sessionStorage.getItem('preloaderShown')) {
      setIsLoading(false);
      clearTimeout(timer);
    }
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Dezy Enterprise Portfolio</title>
        <meta name="description" content="Creative Portfolio for Binda Desmond / Dezy Enterprise" />
        <meta name="keywords" content="Photography, Graphic Design, Video Editing, Videography, Product Design" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
        )}
      >
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
        <Toaster />
      </body>
    </html>
  );
}
