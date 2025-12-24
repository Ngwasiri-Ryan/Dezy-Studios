import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";
import { CustomCursor } from "@/components/shared/custom-cursor";

export const metadata: Metadata = {
  title: "Dezy Enterprise Portfolio",
  description: "Creative Portfolio for Binda Desmond / Dezy Enterprise",
  keywords: ["Photography", "Graphic Design", "Video Editing", "Videography", "Product Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
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
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
