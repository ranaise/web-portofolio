"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profileDetails } from "@/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { BotanicalDecoration } from "@/components/botanical-decoration";
import { PhotoLightbox } from "@/components/photo-lightbox";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="hero-rail" aria-hidden="true"><span>01</span></div>
      <motion.div className="home-hero-copy" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.72, ease }}>
        <p className="hero-eyebrow">Backend engineer, AI enthusiast</p>
        <h1 id="hero-title"><span>Rafa&apos;Na&apos;ilah</span><span>Septia</span></h1>
        <p className="hero-summary">I build reliable backend systems and explore artificial intelligence to create useful digital products.</p>
        <div className="hero-actions">
          <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "primary-action")}>View selected work <ArrowRight /></Link>
          <Link href="/about" className="text-action">About me <ArrowRight /></Link>
        </div>
        <div className="hero-links" aria-label="Social links">
          <Link href={profileDetails.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></Link>
          <Link href={profileDetails.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></Link>
        </div>
      </motion.div>
      <div className="home-portrait-wrap">
        <motion.div className="home-portrait-frame" initial={{ opacity: 0, y: 28, rotate: 1.5 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.82, delay: 0.12, ease }}>
          <PhotoLightbox images={["/profile/rafa-portrait.webp"]} title="Portrait of Rafa'Na'ilah Septia" description={<p>Portrait of Rafa&apos;Na&apos;ilah Septia.</p>} className="home-portrait"><Image src="/profile/rafa-portrait.webp" alt="Portrait of Rafa'Na'ilah Septia" fill preload sizes="(max-width: 767px) 76vw, 34vw" className="object-contain" /></PhotoLightbox>
          <div className="portrait-footer"><span>Portfolio</span><span>2026</span></div>
        </motion.div>
        <motion.div className="portrait-botanical-panel" initial={{ opacity: 0, scaleY: .75 }} animate={{ opacity: 1, scaleY: 1 }} transition={{ duration: .8, delay: .35, ease }}><BotanicalDecoration /></motion.div>
      </div>
      <BotanicalDecoration className="hero-botanical hero-botanical-left" />
      <BotanicalDecoration className="hero-botanical hero-botanical-right" />
    </section>
  );
}
