"use client";

import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { navigationItems } from "@/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8" aria-label="Primary navigation">
        <Link href="/" className="focus-ring font-serif text-2xl leading-none tracking-[-.04em]" aria-label="Rafa'Na'ilah home">RN.</Link>
        <div className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => <Link key={item.label} href={item.href} className="nav-link">{item.label}</Link>)}
          <Button variant="ghost" size="icon" className="size-11 rounded-full" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle color theme"><Sun className="hidden size-4 dark:block" /><Moon className="size-4 dark:hidden" /></Button>
        </div>
        <div className="flex items-center gap-1 md:hidden">
          <Button variant="ghost" size="icon" className="size-11 rounded-full" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle color theme"><Sun className="hidden dark:block" /><Moon className="dark:hidden" /></Button>
          <Sheet><SheetTrigger render={<Button variant="ghost" size="icon" className="size-11 rounded-full" aria-label="Open menu" />}><Menu /></SheetTrigger><SheetContent className="w-[88vw] max-w-sm border-l-border bg-background p-6"><SheetHeader className="px-0 pt-8 text-left"><SheetTitle className="font-serif text-3xl">Index</SheetTitle><SheetDescription>Navigate this portfolio.</SheetDescription></SheetHeader><div className="mt-8 flex flex-col border-t border-border">{navigationItems.map((item, index) => <SheetClose key={item.label} render={<Link href={item.href} className="flex min-h-14 items-center justify-between border-b border-border text-lg" />}><span>{item.label}</span><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></SheetClose>)}</div></SheetContent></Sheet>
        </div>
      </nav>
    </header>
  );
}
