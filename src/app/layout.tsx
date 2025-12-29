
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import ClientLayout from "@/components/layout/client-layout";
import "./globals.css";


// Metadata is now handled at the page level or in this root layout for defaults.
export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["Photography", "Graphic Design", "Video Editing", "Videography", "Product Design", "Binda Desmond", "Dezy Enterprise"],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: 'https://dezy-enterprise.com', // Replace with your actual domain
    siteName: SITE_NAME,
    images: [
      {
        url: 'https://dezy-enterprise.com/og-image.png', // Replace with an actual OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    // Add your Twitter handle
    // creator: '@yourtwitterhandle', 
    images: ['https://dezy-enterprise.com/og-image.png'], // Replace with an actual OG image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dezy Enterprise",
            "url": "https://dezy-enterprise.com", // Replace with your actual domain
            "logo": "https://dezy-enterprise.com/logo.png" // Replace with actual logo URL
          })}}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased dark",
        )}
      >
        <ClientLayout>{children}</ClientLayout>
        <Toaster />
      </body>
    </html>
  );
}
