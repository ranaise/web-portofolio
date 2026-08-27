"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TerminalSquare } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <motion.div className="home-hero-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease }}>
        <p className="hero-eyebrow"><TerminalSquare className="size-4" /><span>Informatics Student · Telkom University</span></p>
        <h1 id="hero-title">Rafa&apos;Na&apos;ilah <em>Septia</em></h1>
        <p className="hero-tagline">Theory refined. Solutions deployed.</p>
        <p className="hero-summary">Turning ideas into production-ready systems through backend engineering, AI integration, and clean architectural design.</p>
        <div className="hero-actions">
          <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "primary-action")}>View projects <ArrowRight /></Link>
          <Link href="#contact" className="text-action">Get in touch <span aria-hidden="true">↗</span></Link>
        </div>
      </motion.div>

      <div className="home-portrait-wrap">
        <motion.div className="home-portrait-frame" initial={{ opacity: 0, y: 18, rotate: 1.5 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.65, delay: 0.08, ease }}>
          <div className="portrait-note">currently<br /><strong>building</strong></div>
          <div className="home-portrait">
          <Image src="/profile/rafa-portrait.webp" alt="Portrait of Rafa'Na'ilah Septia" fill priority sizes="(max-width: 767px) calc(100vw - 40px), 42vw" className="object-cover object-[50%_30%]" />
          </div>
        </motion.div>
        <div className="portrait-caption"><span>Profile / 01</span><span>Informatics · Telkom University</span></div>
      </div>
    </section>
  );
}
