"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { navigationItems } from "@/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (currentScrollY <= 24) {
        setIsHidden(false);
        setScrollDirection(null);
      } else if (Math.abs(delta) >= 4) {
        const direction = delta > 0 ? "down" : "up";
        setIsHidden(direction === "down");
        setScrollDirection(direction);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-nav${isHidden ? " is-hidden" : ""}${scrollDirection ? ` is-scrolling-${scrollDirection}` : ""}`}>
      <nav className="site-nav-inner" aria-label="Primary navigation">
        <Link href="/" className="brand-mark" aria-label="Rafa'Na'ilah home"><span>R</span><span>N</span></Link>
        <div className="desktop-nav">
          {navigationItems.map((item) => <Link key={item.label} href={item.href} className="nav-link">{item.label}</Link>)}
          <Button variant="ghost" size="icon" className="theme-toggle" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle color theme"><Sun className="hidden size-4 dark:block" /><Moon className="size-4 dark:hidden" /></Button>
        </div>
        <div className="mobile-nav-actions">
          <Button variant="ghost" size="icon" className="theme-toggle" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle color theme"><Sun className="hidden size-4 dark:block" /><Moon className="size-4 dark:hidden" /></Button>
          <Sheet><SheetTrigger render={<Button variant="ghost" size="icon" className="menu-toggle" aria-label="Open menu" />}><Menu /></SheetTrigger><SheetContent className="mobile-sheet"><SheetHeader className="mobile-sheet-header"><SheetTitle className="font-serif text-4xl font-normal">Menu</SheetTitle><SheetDescription>Rafa&apos;Na&apos;ilah Septia portfolio</SheetDescription></SheetHeader><div className="mobile-sheet-links">{navigationItems.map((item, index) => <SheetClose key={item.label} render={<Link href={item.href} className="mobile-sheet-link" />}><span>{item.label}</span><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></SheetClose>)}</div></SheetContent></Sheet>
        </div>
      </nav>
    </header>
  );
}
