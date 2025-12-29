import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { SocialIcons } from "@/components/shared/social-icons";
import { NAV_LINKS, CONTACT_DETAILS } from "@/lib/constants";
import { Separator } from "../ui/separator";

export default function Footer() {
  const dezyArtsLinks = NAV_LINKS.filter(link => ['/portfolio', '/services'].includes(link.href));
  const dezyStudiosLinks = NAV_LINKS.filter(link => ['/portfolio', '/services'].includes(link.href));


  return (
    <footer className="bg-card border-t border-border/20 text-card-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-sm text-muted-foreground">
              A creative ecosystem for visual storytelling, art, and production.
            </p>
            <SocialIcons />
          </div>

          {/* Dezy Arts */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-headline text-primary">Dezy Arts</h3>
            <ul className="space-y-2">
                <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Photography</Link></li>
                <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Graphic Design</Link></li>
                <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Custom Merchandise</Link></li>
            </ul>
          </div>
          
          {/* Dezy Studios */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-headline text-primary">Dezy Studios</h3>
             <ul className="space-y-2">
                <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Videography</Link></li>
                <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Video Editing</Link></li>
                <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Brand Campaigns</Link></li>
            </ul>
          </div>

          {/* Contact */}
           <div>
            <h3 className="font-bold text-lg mb-4 font-headline">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-primary">{CONTACT_DETAILS.email}</a></li>
              <li><a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-primary">{CONTACT_DETAILS.phone}</a></li>
              <li><p>{CONTACT_DETAILS.address}</p></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dezy Enterprise. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="font-bold">Dezy Arts</span>
            <Separator orientation="vertical" className="h-5"/>
            <span className="font-bold">Dezy Studios</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
