"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { projectsData } from "@/data";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const animateY = shouldReduceMotion ? 0 : 15;
  const transitionDelay = (delay: number) => ({
    duration: 0.5,
    ease: "easeOut" as const,
    delay,
  });

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Dynamic Theater Spotlight Cursor Effect */}
      {isHovered && !shouldReduceMotion && (
        <div 
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 mix-blend-screen"
          style={{
            background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 174, 193, 0.18) 0%, transparent 80%)`
          }}
        />
      )}

      {/* 2. Horizontal Infinite Scrolling Film Strip (Background) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-60 dark:opacity-[0.15] pointer-events-none select-none z-0">
        <div className="w-full h-44 bg-rose-50 dark:bg-black border-y border-rose-200 dark:border-white/10 flex items-center gap-6 overflow-hidden relative">
          
          {/* Top sprocket holes row */}
          <div className="absolute top-1 left-0 right-0 flex justify-between px-2 w-full">
            {Array.from({ length: 45 }).map((_, i) => (
              <div key={i} className="w-2 h-3 bg-rose-100 dark:bg-background rounded-[1px] border border-rose-200 dark:border-white/5" />
            ))}
          </div>
          
          {/* Scrolling films marquee wrapper */}
          <div className="animate-marquee whitespace-nowrap flex gap-6 items-center">
            {/* Loop through projectsData twice for seamless loop */}
            {Array.from({ length: 2 }).map((_, loopIdx) => (
              <div key={loopIdx} className="flex gap-6">
                {projectsData.map((project) => (
                  <div 
                    key={`${project.id}-${loopIdx}`} 
                    className="w-60 h-28 bg-white dark:bg-[#1C0F13] border border-rose-200 dark:border-white/15 rounded-md overflow-hidden relative shrink-0 shadow-sm"
                  >
                    <img 
                      src={project.screenshot} 
                      alt="" 
                      className="w-full h-full object-cover opacity-80 filter saturate-[0.8] contrast-[1.1] dark:mix-blend-lighten"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom sprocket holes row */}
          <div className="absolute bottom-1 left-0 right-0 flex justify-between px-2 w-full">
            {Array.from({ length: 45 }).map((_, i) => (
              <div key={i} className="w-2 h-3 bg-rose-100 dark:bg-background rounded-[1px] border border-rose-200 dark:border-white/5" />
            ))}
          </div>

        </div>
      </div>

      {/* Ambient theatrical background glows — stronger & larger */}
      <div className="absolute top-[10%] left-[15%] w-[450px] h-[450px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-rose-400/5 blur-[80px] pointer-events-none" />

      {/* Gradient mask overlay for filmstrip blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative z-10 text-center">
        
        {/* Centered Luxury Premiere Ticket/Invitation Frame */}
        <motion.div
          initial={{ opacity: 0, y: animateY, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={transitionDelay(0.05)}
          className="relative w-full border border-primary/30 bg-card/70 backdrop-blur-md rounded-3xl p-7 sm:p-10 md:p-12 shadow-premium-2xl select-none ring-1 ring-primary/10 ring-offset-2 ring-offset-transparent"
        >
          {/* Top-Center Elegant Coquette Bow */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl drop-shadow-lg z-20">
            🎀
          </div>

          {/* Glowing Marquee Bulbs along Card Border */}
          {/* Top bulbs */}
          <div className="absolute top-2 left-[12%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "0s" }} />
          <div className="absolute top-2 left-[37%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "0.4s" }} />
          <div className="absolute top-2 left-[62%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "0.8s" }} />
          <div className="absolute top-2 left-[87%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "1.2s" }} />
          {/* Bottom bulbs */}
          <div className="absolute bottom-2 left-[12%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "0.2s" }} />
          <div className="absolute bottom-2 left-[37%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "0.6s" }} />
          <div className="absolute bottom-2 left-[62%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "1.0s" }} />
          <div className="absolute bottom-2 left-[87%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "1.4s" }} />
          {/* Left bulbs */}
          <div className="absolute left-2 top-[25%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "0.3s" }} />
          <div className="absolute left-2 top-[50%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "0.7s" }} />
          <div className="absolute left-2 top-[75%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "1.1s" }} />
          {/* Right bulbs */}
          <div className="absolute right-2 top-[25%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "0.5s" }} />
          <div className="absolute right-2 top-[50%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "0.9s" }} />
          <div className="absolute right-2 top-[75%] w-1.5 h-1.5 rounded-full bg-amber-400 bulb-glow" style={{ animationDelay: "1.3s" }} />

          <div className="space-y-4">
            {/* Label */}
            <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold block">
              Informatics Student &middot; Telkom University
            </span>

            {/* Main Name display */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-tight leading-none text-foreground italic font-normal">
              Rafa&apos;Na&apos;ilah{" "}
              <span className="text-primary bg-gradient-to-r from-primary via-rose-400 to-amber-500 bg-clip-text text-transparent font-extrabold block not-italic mt-1">
                Septia
              </span>
            </h1>

            {/* Sub-divider line */}
            <div className="h-[1px] w-16 bg-primary/20 mx-auto my-1" />

            {/* Tagline */}
            <p className="text-[11px] sm:text-xs font-medium text-muted-foreground/70 tracking-widest italic">
              Theory refined. Solutions deployed.
            </p>
          </div>
        </motion.div>

        {/* Clean, Non-Repeated Professional Intro Description */}
        <motion.p
          initial={{ opacity: 0, y: animateY }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionDelay(0.35)}
          className="mt-10 max-w-[55ch] mx-auto text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-sans"
        >
          Turning ideas into production-ready systems through backend engineering, AI integration, and clean architectural design.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: animateY }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionDelay(0.5)}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "rounded-xl font-semibold text-xs tracking-wider uppercase bg-primary hover:bg-primary/95 text-primary-foreground border border-primary/20 group inline-flex items-center justify-center transition-all h-11 sm:h-12 px-6 cursor-pointer w-full sm:w-auto shadow-md"
            })}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "rounded-xl font-semibold text-xs tracking-wider uppercase border-border bg-background text-foreground hover:bg-muted/50 inline-flex items-center justify-center transition-all h-11 sm:h-12 px-6 cursor-pointer w-full sm:w-auto"
            })}
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
