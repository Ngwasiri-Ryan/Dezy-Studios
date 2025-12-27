"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { NAV_LINKS, DIVISIONS_LINKS } from "@/lib/constants";
import { SocialIcons } from "@/components/shared/social-icons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

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
      <SheetContent side="right" className="w-full bg-background text-foreground p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-6 flex-row justify-between items-center border-b">
            <SheetTitle>
                <Logo />
            </SheetTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close Menu</span>
            </Button>
          </SheetHeader>
          <div className="flex-grow flex flex-col items-center justify-center p-6">
            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link) => {
                if (link.label === "Divisions") {
                    return (
                        <Collapsible key={link.href} className="w-full text-center">
                            <CollapsibleTrigger className="flex items-center justify-center gap-1 text-3xl font-headline font-semibold">
                                {link.label} <ChevronDown className="h-6 w-6" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-4 space-y-4">
                                {DIVISIONS_LINKS.map(divisionLink => (
                                    <Link
                                        key={divisionLink.href}
                                        href={divisionLink.href}
                                        className="block text-2xl font-headline text-muted-foreground transition-colors hover:text-primary"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {divisionLink.label}
                                    </Link>
                                ))}
                            </CollapsibleContent>
                        </Collapsible>
                    )
                }
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-3xl font-headline font-semibold transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.label}
                    </Link>
                )
              })}
            </nav>
          </div>
          <div className="p-6 border-t">
            <SocialIcons className="justify-center" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
