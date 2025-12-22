import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Get in Touch"
        subtitle="I'm excited to hear about your project. Let's create something amazing together."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-headline font-bold mb-6">Contact Form</h2>
              <ContactForm />
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-headline font-bold">Other Ways to Connect</h2>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Phone className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-muted-foreground hover:text-primary">
                    {CONTACT_DETAILS.phone}
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Mail className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-muted-foreground hover:text-primary">
                    {CONTACT_DETAILS.email}
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                   <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={SOCIAL_LINKS.whatsapp} target="_blank">
                        Chat with me on WhatsApp
                      </Link>
                    </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
