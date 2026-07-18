"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { navigationItems } from "@/data";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [activeSection, setActiveSection] = React.useState("home");
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target.id) {
        setActiveSection(visible[0].target.id);
      }
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });

    navigationItems.forEach((item) => {
      const section = document.getElementById(item.href.substring(1));
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      const nextScrolled = window.scrollY > 20;
      setIsScrolled((current) => current === nextScrolled ? current : nextScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeIndex = Math.max(0, navigationItems.findIndex((item) => item.href === `/#${activeSection}`));
  const activeLabel = navigationItems[activeIndex]?.label ?? "Home";
  const progressLabel = `${String(activeIndex + 1).padStart(2, "0")}/${String(navigationItems.length).padStart(2, "0")}`;

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <header className={`w-full transition-all duration-300 ${isScrolled ? "bg-card/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
        <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link 
              href="#home" 
              className="rn-wordmark flex items-center hover:opacity-85 transition-opacity focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 outline-none text-base sm:text-lg text-foreground"
              aria-label="Rafa’Na’ilah Septia — Home"
            >
              RN
            </Link>
          </div>

          {/* Mobile Current Section Indicator (Center) */}
          <div className="flex-1 flex justify-center md:hidden overflow-hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                className="max-w-[132px] truncate text-[10px] font-mono font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-2"
                aria-label={`Open section navigation. Current section ${activeLabel}, ${progressLabel}`}
              >
                {activeLabel} · {progressLabel}
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] border-l border-border bg-background/95 backdrop-blur-md">
                <SheetTitle className="sr-only">Section Navigation</SheetTitle>
                <div className="flex flex-col gap-6 py-8 h-full">
                  <div className="px-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Sections · {progressLabel}
                  </div>
                  <div className="flex flex-col gap-1">
                    {navigationItems.map((item) => {
                      const id = item.href.substring(1);
                      const isActive = activeSection === id;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center px-4 h-11 text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors ${
                            isActive
                              ? "bg-primary/10 text-foreground font-bold"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
            {navigationItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs font-semibold tracking-wider transition-colors duration-200 hover:text-foreground py-1 outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-sm ${
                    isActive ? "text-foreground font-bold" : "text-muted-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex-1 flex justify-end items-center gap-1.5 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-8 h-8 sm:w-9 sm:h-9 border border-border/10 focus-visible:ring-2 focus-visible:ring-primary cursor-pointer hover:bg-muted/40"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400" />
              ) : (
                <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-700" />
              )}
            </Button>

          </div>
        </div>
      </header>
    </div>
  );
}
