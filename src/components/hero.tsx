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
      <motion.div className="home-hero-copy" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease }}>
        <p className="kicker">Backend Engineer / AI Enthusiast</p>
        <h1 id="hero-title">I build the systems behind <em>interactive worlds.</em></h1>
        <p className="hero-summary">Backend engineering, AI-assisted tools, and real-time experiences.</p>
        <div className="hero-actions">
          <Link href="/projects" className={cn(buttonVariants({ size: "lg" }), "primary-action")}>View selected work <ArrowRight /></Link>
          <Link href="/about" className="text-action">More about me <span aria-hidden="true">↗</span></Link>
        </div>
      </motion.div>

      <div className="home-portrait-wrap">
        <motion.div className="home-portrait" initial={{ opacity: 0, clipPath: "inset(0 0 12% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 0.65, delay: 0.08, ease }}>
          <Image src="/profile/rafa-portrait.webp" alt="Portrait of Rafa'Na'ilah Septia" fill priority sizes="(max-width: 767px) calc(100vw - 40px), 42vw" className="object-cover object-[50%_30%]" />
        </motion.div>
        <div className="portrait-caption"><span>Programming Intern — Medusa Technology</span><span>June — August 2026 / Completed</span></div>
      </div>
    </section>
  );
}
