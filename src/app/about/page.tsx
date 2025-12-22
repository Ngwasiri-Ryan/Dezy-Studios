import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ArrowRight, Download } from "lucide-react";

export default function AboutPage() {
  const aboutImage = getPlaceholderImage("about-me");
  
  return (
    <div>
      <PageHeader
        title="About Dezy Arts"
        subtitle="The creative force behind the visuals."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline font-bold mb-4">
                Hi, I'm Binda Desmond
              </h2>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  I'm a multi-disciplinary creative with a passion for visual storytelling. My journey began with a camera in hand, trying to capture the beauty I saw in the world. This passion evolved into a full-fledged creative studio, Dezy Arts, where I explore various mediums including photography, videography, and graphic design.
                </p>
                <p>
                  My philosophy is simple: create work that is not only visually stunning but also emotionally resonant. I believe that every person, brand, and moment has a unique story to tell, and my role is to bring that story to life in the most authentic and compelling way possible.
                </p>
                <p>
                  Whether I'm behind the lens, at the editing desk, or sketching out a new brand identity, I pour my heart and soul into every project. I'm constantly learning, evolving, and pushing the boundaries of my creativity.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" disabled>
                  {/* The PDF download would be implemented here */}
                  <Link href="#">Download PDF Portfolio <Download className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              {aboutImage && (
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
