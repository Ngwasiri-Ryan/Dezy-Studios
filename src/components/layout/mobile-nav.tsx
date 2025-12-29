"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Menu, X, ChevronDown, ChevronRight, Home, Info, LayoutGrid, 
  Sparkles, ShoppingBag, Phone, Users, Video, Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { NAV_LINKS, DIVISIONS_LINKS } from "@/lib/constants";
import { SocialIcons } from "@/components/shared/social-icons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Separator } from "../ui/separator";

const iconMap: { [key: string]: React.ElementType } = {
    '/': Home,
    '/about': Info,
    '/portfolio': LayoutGrid,
    '/testimonials': Users,
    '/shop': ShoppingBag,
    '/contact': Phone,
    '/dezy-arts': Palette,
    '/dezy-studios': Video,
    '#': Sparkles,
};

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full bg-background text-foreground p-0 flex flex-col">
        <SheetHeader className="p-6 flex-row justify-between items-center border-b">
          <SheetTitle>
              <Logo />
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex-grow p-6 overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const Icon = iconMap[link.href];
              if (link.label === "Divisions") {
                  return (
                      <Collapsible key={link.href} className="w-full">
                          <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold py-3 px-4 rounded-lg hover:bg-muted">
                            <span className="flex items-center gap-4">
                              <Icon className="h-6 w-6 text-primary" />
                              {link.label}
                            </span>
                            <ChevronDown className="h-5 w-5 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 space-y-1 pl-8">
                              {DIVISIONS_LINKS.map(divisionLink => {
                                  const DivisionIcon = iconMap[divisionLink.href];
                                  return (
                                    <Link
                                        key={divisionLink.href}
                                        href={divisionLink.href}
                                        className="flex items-center gap-3 text-lg text-muted-foreground transition-colors hover:text-primary py-2"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <DivisionIcon className="h-5 w-5" />
                                        {divisionLink.label}
                                    </Link>
                                  );
                              })}
                          </CollapsibleContent>
                      </Collapsible>
                  )
              }
              return (
                  <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-4 text-lg font-semibold py-3 px-4 rounded-lg transition-colors hover:bg-muted"
                      onClick={() => setIsOpen(false)}
                  >
                      <Icon className="h-6 w-6 text-primary" />
                      {link.label}
                  </Link>
              )
            })}
          </nav>
        </div>

        <div className="p-6 mt-auto border-t space-y-6">
            <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </Button>
            <SocialIcons className="justify-center" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
