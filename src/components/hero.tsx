"use client";

import * as React from "react";
import { ArrowRight, TerminalSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  // Keep the initial render identical on server and client so reduced-motion
  // media-query resolution cannot create a hydration mismatch.
  const animateY = 20;
  
  const transitionDelay = (delay: number) => ({
    duration: 0.6,
    ease: "easeOut" as const,
    delay,
  });

  return (
    <section 
      id="home" 
      className="relative min-h-[680px] md:min-h-[760px] flex items-center justify-center pt-24 pb-12 px-6 sm:px-8 overflow-hidden"
    >
      {/* Decorative Motif: Prominent curved trajectory and sparse nodes */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30 flex items-center justify-center" aria-hidden="true">
        <svg viewBox="0 0 1000 1000" className="w-full h-full max-w-[1200px]" preserveAspectRatio="xMidYMid slice">
          <path
            d="M120,190 H360 M120,190 V430 M120,810 H360 M120,810 V570 M880,190 H640 M880,190 V430"
            fill="none" 
            stroke="var(--primary)" 
            strokeWidth="1.5" 
            strokeDasharray="8 12"
          />
          <path d="M120,500 H430 L520,410 H880" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 9" />
          <circle cx="430" cy="500" r="4" fill="var(--accent)" />
          <circle cx="520" cy="410" r="4" fill="var(--primary)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="grid grid-cols-1 gap-8 items-center">
          
          <div className="flex flex-col items-center text-center space-y-6">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={transitionDelay(0.1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              <TerminalSquare className="w-4 h-4" />
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase">
                BACKEND ENGINEER &middot; APPLIED AI
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: animateY }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionDelay(0.2)}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-foreground leading-[1.02]">
                Rafa’Na’ilah Septia
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: animateY }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionDelay(0.3)}
              className="max-w-[60ch] text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-medium"
            >
              Backend engineer focused on reliable systems, practical AI integration, and thoughtful product implementation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: animateY }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionDelay(0.35)}
              className="max-w-[56ch] text-sm sm:text-base text-muted-foreground leading-relaxed font-medium"
            >
              I’m an Informatics student at Telkom University working across API engineering, relational databases, real-time systems, and mobile applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: animateY }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionDelay(0.4)}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4"
            >
              <a
                href="#projects"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "rounded-xl font-bold text-xs tracking-wider uppercase bg-primary hover:bg-primary/90 text-primary-foreground transition-all h-12 px-8 cursor-pointer w-full sm:w-auto shadow-premium-md hover:shadow-premium-lg"
                })}
              >
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#experience"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "rounded-xl font-bold text-xs tracking-wider uppercase border-border bg-background text-foreground hover:bg-muted/50 transition-all h-12 px-8 cursor-pointer w-full sm:w-auto shadow-premium-sm"
                })}
              >
                View Experience
              </a>
            </motion.div>

            {/* Secondary Links */}
            <motion.div
              initial={{ opacity: 0, y: animateY }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionDelay(0.5)}
              className="flex items-center justify-center gap-6 pt-4 text-muted-foreground"
            >
              <a href="https://github.com/ranaise/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1.5 text-xs font-semibold" aria-label="GitHub">
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/ranaise/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1.5 text-xs font-semibold" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
