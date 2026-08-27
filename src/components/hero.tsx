"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <motion.div className="home-hero-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease }}>
        <p className="hero-eyebrow"><span className="status-dot" /> Backend engineer &amp; AI builder</p>
        <h1 id="hero-title">Building thoughtful systems for <em>curious people.</em></h1>
        <p className="hero-summary">I turn complicated backend logic into useful, human-scale experiences—from AI-assisted tools to interactive virtual worlds.</p>
        <div className="hero-actions">
          <Link href="/projects" className={cn(buttonVariants({ size: "lg" }), "primary-action")}>See my work <ArrowRight /></Link>
          <Link href="/about" className="text-action">A little about me <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-proof" aria-label="Portfolio highlights"><div><strong>08</strong><span>selected projects</span></div><div><strong>01</strong><span>completed internship</span></div><div><strong>3.73</strong><span>university GPA</span></div></div>
      </motion.div>

      <div className="home-portrait-wrap">
        <motion.div className="home-portrait-frame" initial={{ opacity: 0, y: 18, rotate: 1.5 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.65, delay: 0.08, ease }}>
          <div className="portrait-note">currently<br /><strong>building</strong></div>
          <div className="home-portrait">
          <Image src="/profile/rafa-portrait.webp" alt="Portrait of Rafa'Na'ilah Septia" fill priority sizes="(max-width: 767px) calc(100vw - 40px), 42vw" className="object-cover object-[50%_30%]" />
          </div>
        </motion.div>
        <div className="portrait-caption"><span>Rafa&apos;Na&apos;ilah Septia / Bandung, ID</span><span>Programming intern — Medusa Technology / 2026</span></div>
      </div>
    </section>
  );
}
