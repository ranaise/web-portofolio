"use client";

import * as React from "react";
import { motion } from "framer-motion";

// Profile photo with graceful fallback
function ProfilePhoto() {
  const [error, setError] = React.useState(false);

  return (
    <div className="quiet-bloom-profile relative w-full max-w-[280px] mx-auto overflow-hidden rounded-2xl bg-background/25 p-3 select-none">
      <div className="relative w-full flex items-center justify-center overflow-hidden min-h-[220px] rounded-xl border border-primary/20 border-l-primary/50 border-t-primary/50">
        {!error ? (
          <img
            src="/projects/about-profile.png"
            alt="Rafa’Na’ilah Septia"
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
              <p className="text-xs font-heading font-bold text-foreground">
                Rafa’Na’ilah Septia
              </p>
              <p className="text-[9px] font-mono text-muted-foreground/50 tracking-widest uppercase">
                Informatics &bull; 2026
              </p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none dark:from-black/40" />
      </div>
      <div className="flex items-center justify-between px-1 pt-3">
        <span className="text-[8px] font-mono text-muted-foreground/70 tracking-[0.16em] uppercase">Profile / 01</span>
        <span className="h-px w-10 bg-accent/50" />
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-14 sm:py-16 px-4 sm:px-8 bg-transparent transition-colors duration-300">
      
      {/* Quiet Bloom motif: open corner, partial grid, and a soft handoff from Hero. */}
      <div className="quiet-bloom quiet-bloom-about absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30 overflow-hidden flex justify-center" aria-hidden="true">
        <svg viewBox="0 0 1000 600" className="w-full h-full max-w-[1200px]" preserveAspectRatio="xMidYMid slice">
          <path d="M250 110 H150 V420 H250" fill="none" stroke="var(--primary)" strokeWidth="1.25" />
          <path d="M170 150 H270 M170 190 H270 M170 230 H270 M170 150 V230 M220 150 V230 M270 150 V230" fill="none" stroke="var(--primary)" strokeWidth="0.7" opacity="0.55" />
          <path d="M150 420 H310" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.7" />
          <circle cx="150" cy="420" r="3" fill="var(--accent)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl space-y-8 relative z-10">

        {/* Section Heading */}
        <div className="section-anchor max-w-2xl text-left space-y-2 border-b border-border/40 pb-4">
          <h2 className="text-xs font-heading font-bold uppercase tracking-wider text-primary">
            ✨ Profile
          </h2>
          <span className="section-anchor-mark" aria-hidden="true" />
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-foreground leading-[1.05] font-normal">
            About Me
          </h3>
          <p className="text-xs text-muted-foreground pt-1">
            A summary of my academic background, key qualifications, and core technical focus.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">
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
              className="rounded-2xl solid-surface bg-card/50 border border-primary/15 p-5 sm:p-6 shadow-premium-md space-y-4 hover:border-primary/35 transition-colors duration-300"
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
              I’m an Informatics student at Telkom University focused on backend engineering, API design, relational databases, and applied AI. I enjoy turning complex workflows into maintainable products that work reliably in real use.
                </p>
                <p className="text-xs text-muted-foreground/80">
                  Currently interning at <strong className="text-foreground font-semibold">Medusa Technology</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="rounded-2xl solid-surface bg-card/40 border border-primary/15 p-5 shadow-premium-md space-y-3 hover:border-primary/35 transition-colors duration-300"
            >
              <h4 className="text-sm font-heading font-bold text-foreground border-b border-border/30 pb-2 flex items-center gap-2">
                <span className="h-4 w-0.5 rounded-full bg-primary" />
                Core Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Backend & API Engineering",
                  "Database Design",
                  "Applied AI Integration",
                  "Real-time & Mobile Systems",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-muted-foreground font-medium py-1">
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
