"use client";

import { navigationItems } from "@/data";

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto max-w-5xl px-6 sm:px-8">

        {/* Cinematic "fin." watermark block */}
        <div className="relative py-14 text-center space-y-3 select-none pointer-events-none">
          <p className="text-[9px] font-mono tracking-[0.35em] text-muted-foreground/35 uppercase">
            &mdash;&nbsp;credits end&nbsp;&mdash;
          </p>
          <div
            aria-hidden
            className="text-[96px] sm:text-[128px] font-heading font-bold italic leading-none tracking-tight text-foreground/[0.05] dark:text-foreground/[0.07]"
          >
            fin.
          </div>
        </div>

        {/* Bow divider */}
        <div className="flex items-center justify-center gap-4 opacity-35 select-none pb-8">
          <div className="h-[0.5px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <span className="text-sm">🎀</span>
          <div className="h-[0.5px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Quick nav links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pb-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground/50 hover:text-primary transition-colors outline-none focus-visible:underline"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-border/20 py-6">
          <p className="text-[10px] font-mono tracking-wider uppercase text-center sm:text-left text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Ranaise&apos;s Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-mono tracking-widest uppercase">
            <a
              href="https://github.com/ranaise/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-primary transition-colors outline-none focus-visible:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ranaise/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-primary transition-colors outline-none focus-visible:underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:rafasepti06@gmail.com"
              className="text-muted-foreground/50 hover:text-primary transition-colors outline-none focus-visible:underline"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
