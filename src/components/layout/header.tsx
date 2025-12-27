"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS, DIVISIONS_LINKS } from "@/lib/constants";
import { Logo } from "@/components/shared/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useActivePath } from "@/hooks/use-active-path";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const checkActivePath = useActivePath();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            if (link.label === "Divisions") {
              return (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger asChild>
                    <button className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                      checkActivePath('/dezy-arts') || checkActivePath('/dezy-studios') ? "text-primary font-bold" : "text-foreground/80"
                    )}>
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {DIVISIONS_LINKS.map((divisionLink) => (
                      <DropdownMenuItem key={divisionLink.href} asChild>
                        <Link href={divisionLink.href}>{divisionLink.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  checkActivePath(link.href) ? "text-primary font-bold" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="hidden md:flex items-center gap-4">
            <Button asChild>
                <Link href="/contact">Start a Project</Link>
            </Button>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
