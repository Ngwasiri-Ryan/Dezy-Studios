import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { SocialIcons } from "@/components/shared/social-icons";
import { NAV_LINKS, CONTACT_DETAILS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Logo isFooter={false} />
            <p className="text-sm text-muted-foreground">
              Crafting visual stories through photography, design, and motion.
            </p>
            <SocialIcons />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 font-headline">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-primary">{CONTACT_DETAILS.email}</a></li>
              <li><a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-primary">{CONTACT_DETAILS.phone}</a></li>
              <li><p>{CONTACT_DETAILS.address}</p></li>
            </ul>
          </div>
           <div>
            <h3 className="font-bold text-lg mb-4 font-headline">Let's Work Together</h3>
            <p className="text-sm text-muted-foreground mb-4">Have a project in mind? I'd love to hear from you.</p>
             <Link href="/contact" className="text-primary font-bold hover:underline">
               Start a Project
             </Link>
          </div>
        </div>
        <div className="border-t border-border/50 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dezy Enterprise. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
