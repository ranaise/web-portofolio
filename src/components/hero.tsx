"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TerminalSquare } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profileDetails } from "@/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <motion.div className="home-hero-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease }}>
        <p className="hero-eyebrow"><TerminalSquare className="size-4" /><span>Informatics student, Telkom University.</span></p>
        <h1 id="hero-title">Rafa&apos;Na&apos;ilah <em>Septia</em></h1>
        <p className="hero-tagline">I build backend systems, AI tools, and interactive applications.</p>
        <p className="hero-summary">I enjoy turning ideas into useful software, from APIs and databases to virtual world systems.</p>
        <div className="hero-actions">
          <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "primary-action")}>View projects <ArrowRight /></Link>
          <Link href="#contact" className="text-action">Get in touch <ArrowRight /></Link>
        </div>
        <div className="hero-links" aria-label="Social links">
          <Link href={profileDetails.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</Link>
          <Link href={profileDetails.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</Link>
        </div>
      </motion.div>

      <div className="home-portrait-wrap">
        <motion.div className="home-portrait-frame" initial={{ opacity: 0, y: 18, rotate: 1.5 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.65, delay: 0.08, ease }}>
          <div className="portrait-note"><span className="status-dot" />Available for work</div>
          <div className="home-portrait">
            <Image src="/profile/rafa-portrait.webp" alt="Portrait of Rafa'Na'ilah Septia" fill priority sizes="(max-width: 767px) calc(100vw - 40px), 42vw" className="object-contain" />
          </div>
        </motion.div>
        <div className="portrait-caption"><span>Profile 01</span><span>Backend, AI, realtime.</span></div>
      </div>
    </section>
  );
}
