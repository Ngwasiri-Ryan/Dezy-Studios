import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function ShopPage() {
  return (
    <div>
      <PageHeader
        title="Dezy Enterprise Shop"
        subtitle="Custom-designed merchandise. Contact via WhatsApp or phone to purchase."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const productImage = getPlaceholderImage(product.imageId);
              return (
                <Card key={product.id} className="flex flex-col overflow-hidden">
                  {productImage && (
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={productImage.imageUrl}
                        alt={product.title}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        data-ai-hint={productImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-lg font-bold text-primary">{product.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={SOCIAL_LINKS.whatsapp} target="_blank">
                        <MessageCircle className="mr-2 h-4 w-4" /> Contact to Buy
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
