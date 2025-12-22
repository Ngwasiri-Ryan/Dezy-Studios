import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { ArrowRight, Camera, Film, Monitor, Palette, ShoppingBag } from "lucide-react";

const serviceIcons: { [key: string]: React.ElementType } = {
  "Photography": Camera,
  "Graphic Design": Palette,
  "Video Editing": Film,
  "Videography": Monitor,
  "Product Design": ShoppingBag,
};

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Creative Services"
        subtitle="A full spectrum of creative solutions to bring your vision to life."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = serviceIcons[service.title];
              return (
                <Card key={service.id} className="flex flex-col">
                  <CardHeader>
                    {Icon && <Icon className="h-10 w-10 mb-4 text-primary" />}
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.longDescription}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href="/contact">
                        Inquire Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
