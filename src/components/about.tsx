"use client";

import * as React from "react";
import { motion } from "framer-motion";

// Light-mode-aware sprocket holes
function SprocketHoles({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-between px-3 w-full select-none py-1.5 ${className}`}
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="w-2.5 h-3.5 rounded-[2px] shrink-0 bg-rose-200/60 dark:bg-black/50 border border-rose-300/40 dark:border-white/8"
        />
      ))}
    </div>
  );
}

// Profile photo with graceful fallback
function ProfilePhoto() {
  const [error, setError] = React.useState(false);

  return (
    <div className="w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden border border-primary/25 bg-rose-50/70 dark:bg-[#1A1114] shadow-premium-lg flex flex-col select-none">
      <SprocketHoles className="bg-rose-100/60 dark:bg-black/70" />
      <div className="relative w-full flex items-center justify-center overflow-hidden min-h-[220px]">
        {!error ? (
          <img
            src="/projects/about-profile.png"
            alt="Rafa'Na'ilah Septia"
            className="w-full h-auto max-h-[360px] object-contain opacity-95"
            onError={() => setError(true)}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex flex-col items-center gap-4 p-8 py-10">
            <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-3xl font-heading font-bold text-white shadow-lg ring-4 ring-primary/20">
              R
            </div>
            <div className="text-center space-y-1">
              <p className="text-xs font-heading font-bold text-foreground italic">
                Rafa&apos;Na&apos;ilah Septia
              </p>
              <p className="text-[9px] font-mono text-muted-foreground/50 tracking-widest uppercase">
                Informatics &bull; 2026
              </p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none dark:from-black/40" />
      </div>
      <SprocketHoles className="bg-rose-100/60 dark:bg-black/70" />
      <div className="py-2 px-3 bg-rose-100/50 dark:bg-black/60 flex items-center justify-between">
        <span className="text-[7.5px] font-mono text-muted-foreground/50 dark:text-white/35 tracking-[0.18em] uppercase">
          Frame 01
        </span>
        <span className="text-[7.5px] font-mono text-muted-foreground/50 dark:text-white/35 tracking-[0.18em] uppercase">
          Biography
        </span>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-8 bg-transparent transition-colors duration-300">
      
      {/* Decorative Motif: Open bracket and partial grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30 overflow-hidden flex justify-center" aria-hidden="true">
        <svg viewBox="0 0 1000 600" className="w-full h-full max-w-[1200px]" preserveAspectRatio="xMidYMid slice">
          <path d="M250,100 L150,100 L150,500 L250,500" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="3 6" />
          <path d="M150,300 L850,300" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
          <circle cx="150" cy="100" r="3" fill="var(--primary)" />
          <circle cx="150" cy="500" r="3" fill="var(--primary)" />
          <circle cx="850" cy="300" r="2" fill="var(--accent)" />
          <circle cx="150" cy="300" r="2" fill="var(--accent)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl space-y-12 sm:space-y-16 relative z-10">

        {/* Section Heading */}
        <div className="max-w-2xl text-left space-y-2 border-b border-border/40 pb-4">
          <h2 className="text-xs font-heading font-bold uppercase tracking-wider text-primary italic">
            ✨ Profile
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-foreground leading-[1.05] font-normal italic">
            About Me
          </h3>
          <p className="text-xs text-muted-foreground pt-1">
            A summary of my academic background, key qualifications, and core technical focus.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2 flex flex-col items-center lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="w-full flex justify-center"
            >
              <ProfilePhoto />
            </motion.div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-3xl solid-surface bg-card/60 border border-primary/15 p-6 sm:p-8 shadow-premium-md space-y-5 hover:border-primary/35 transition-colors duration-300"
            >
              <div className="flex items-center justify-between pb-3 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                    <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[9px] font-mono text-muted-foreground/50 tracking-widest uppercase">
                    biography.frame
                  </span>
                </div>
                <span className="text-[9px] font-mono text-muted-foreground/35">01</span>
              </div>

              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground font-medium">
                <p>
                  My name is{" "}
                  <strong className="text-foreground font-semibold">Rafa&apos;Na&apos;ilah Septia</strong>, a
                  sixth-semester Informatics student at{" "}
                  <strong className="text-foreground font-semibold">Telkom University</strong>.
                </p>
                <p>
                  My core interests lie in building robust backend services, designing efficient API systems,
                  and exploring applied AI. Currently interning at{" "}
                  <strong className="text-foreground font-semibold">Medusa Technology</strong>, where I build
                  real-time virtual systems and AI-powered moderation tools.
                </p>
                <p>
                  I focus on relational data schema design, query optimization, and building clean system
                  architectures. The goal is always maintainable, scalable code built for the real world.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="rounded-3xl solid-surface bg-card/60 border border-primary/15 p-6 shadow-premium-md space-y-4 hover:border-primary/35 transition-colors duration-300"
            >
              <h4 className="text-sm font-heading font-bold italic text-foreground border-b border-border/30 pb-2 flex items-center gap-2">
                <span className="h-4 w-0.5 rounded-full bg-primary" />
                Core Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Backend API Engineering",
                  "AI & LLM Integration",
                  "Relational Database Design",
                  "Real-time System Architecture",
                  "Computer Vision & ML Pipelines",
                  "Full-stack Mobile Development",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-muted-foreground font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
