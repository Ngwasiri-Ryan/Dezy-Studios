"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { PortfolioItem } from "@/lib/types";

const categories = ["All", "Photography", "Videography", "Video Editing", "Graphic Design", "Product Design"];

type PortfolioGridProps = {
  projects: PortfolioItem[];
};

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <Tabs defaultValue="All" onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-8">
        {categories.map((category) => (
          <TabsTrigger key={category} value={category}>
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
      
      <AnimatePresenceWrapper>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((item) => {
                 const projectImage = getPlaceholderImage(item.imageId);
                 return (
                  <div key={item.id} className="group block">
                    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      {projectImage && (
                        <div className="overflow-hidden">
                          <Image
                            src={projectImage.imageUrl}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={projectImage.imageHint}
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="font-headline">{item.title}</CardTitle>
                        <CardDescription>{item.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                 )
              })}
            </div>
          </TabsContent>
        ))}
      </AnimatePresenceWrapper>
    </Tabs>
  );
}

// A simple wrapper to prevent layout shift during tab changes
function AnimatePresenceWrapper({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
}
