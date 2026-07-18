"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { navigationItems } from "@/data";

function getSectionId(href: string): string {
  return href.split("#")[1] ?? "";
}

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = React.useState("home");
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const observedEntries = new Map<string, IntersectionObserverEntry>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => observedEntries.set(entry.target.id, entry));

      const visible = Array.from(observedEntries.values())
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          const ratioDifference = b.intersectionRatio - a.intersectionRatio;
          return ratioDifference || a.boundingClientRect.top - b.boundingClientRect.top;
        });

      if (window.scrollY < 24) {
        setActiveSection("home");
      } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24) {
        setActiveSection("contact");
      } else if (visible[0]?.target.id) {
        setActiveSection(visible[0].target.id);
      }
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });

    const sectionIds = new Set(navigationItems.map((item) => getSectionId(item.href)));
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    let scrollEndTimer: number | undefined;
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 20;
      setIsScrolled((current) => current === nextScrolled ? current : nextScrolled);

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 24
      ) {
        setActiveSection((current) => current === "contact" ? current : "contact");
      }

      window.clearTimeout(scrollEndTimer);
      scrollEndTimer = window.setTimeout(() => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24) {
          setActiveSection((current) => current === "contact" ? current : "contact");
        }
      }, 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollend", handleScroll, { passive: true });
    handleScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScroll);
      window.clearTimeout(scrollEndTimer);
    };
  }, []);

  const activeIndex = Math.max(0, navigationItems.findIndex((item) => getSectionId(item.href) === activeSection));
  const activeLabel = navigationItems[activeIndex]?.label ?? "Home";
  const progressLabel = `${String(activeIndex + 1).padStart(2, "0")}/${String(navigationItems.length).padStart(2, "0")}`;

  const navigateToSection = (href: string) => {
    const id = getSectionId(href);
    setActiveSection(id);
    setIsOpen(false);

    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <header className={`w-full transition-all duration-300 ${isScrolled ? "bg-card/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
        <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex-1 flex justify-start">
            <Link
              href="#home"
              className="rn-wordmark flex items-center hover:opacity-85 transition-opacity focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 outline-none text-base sm:text-lg text-foreground"
              aria-label="Rafa’Na’ilah Septia — Home"
            >
              RN
            </Link>
          </div>

          <div className="flex-1 flex justify-center md:hidden overflow-hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                className="flex w-[140px] items-center justify-center gap-1 truncate rounded-md px-2 py-2 text-[10px] font-mono font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Navigate sections. Current section: ${activeLabel}, ${activeIndex + 1} of ${navigationItems.length}.`}
              >
                <span className="truncate">{activeLabel} · {progressLabel}</span>
                <ChevronDown className="h-3 w-3 shrink-0" aria-hidden="true" />
              </SheetTrigger>
              <SheetContent side="bottom" className="max-h-[72dvh] rounded-t-3xl border-t border-border bg-background shadow-2xl pb-[calc(1rem+env(safe-area-inset-bottom))]">
                <div className="flex flex-col gap-4 px-4 pt-5 sm:px-6">
                  <div className="pr-10">
                    <SheetTitle className="text-lg font-heading font-bold text-foreground">Navigate</SheetTitle>
                    <p className="mt-1 text-xs text-muted-foreground">Jump to a section</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {navigationItems.map((item, index) => {
                      const id = getSectionId(item.href);
                      const isActive = activeSection === id;
                      return (
                        <button
                          key={item.href}
                          type="button"
                          onClick={() => navigateToSection(item.href)}
                          className={`flex min-h-11 items-center gap-2 rounded-xl border px-3 text-left text-xs font-semibold transition-colors ${isActive ? "border-primary/40 bg-primary/10 text-foreground" : "border-border/60 text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <span className="font-mono text-[10px] text-primary">{String(index + 1).padStart(2, "0")}</span>
                          <span className="truncate">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
            {navigationItems.map((item) => {
              const id = getSectionId(item.href);
              const isActive = activeSection === id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs font-semibold tracking-wider transition-colors duration-200 hover:text-foreground py-1 outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-sm ${isActive ? "text-foreground font-bold" : "text-muted-foreground"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary rounded-full" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex-1 flex justify-end items-center gap-1.5 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-8 h-8 sm:w-9 sm:h-9 border border-border/10 focus-visible:ring-2 focus-visible:ring-primary cursor-pointer hover:bg-muted/40"
              aria-label="Toggle theme"
            >
              <Sun className="hidden h-3.5 w-3.5 text-amber-400 dark:block sm:h-4 sm:w-4" aria-hidden="true" />
              <Moon className="block h-3.5 w-3.5 text-slate-700 dark:hidden sm:h-4 sm:w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
