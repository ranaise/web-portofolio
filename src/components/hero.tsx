"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="section-shell hero-grid min-h-[92svh] pt-28 sm:pt-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="flex flex-col justify-between gap-12">
        <div>
          <p className="eyebrow mb-7"><span>Portfolio / 2026</span><span>Bandung, Indonesia</span></p>
          <h1 className="display-title max-w-[10ch]">Systems behind <em>interactive worlds.</em></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">I&apos;m Rafa&apos;Na&apos;ilah Septia—an Informatics student documenting how backend services, AI-assisted workflows, and real-time interfaces become dependable experiences.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-6")}>Explore selected work <ArrowDownRight /></Link>
            <Link href="#experience" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 rounded-full px-6")}>Read the internship story</Link>
          </div>
        </div>
        <div className="hero-notes"><span>Backend engineering</span><span>AI-assisted systems</span><span>Virtual-world interaction</span></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 0.9, delay: 0.15, ease }} className="relative min-h-[480px] overflow-hidden rounded-[2px] bg-secondary sm:min-h-[620px]">
        <Image src="/profile/rafa-portrait.webp" alt="Portrait of Rafa'Na'ilah Septia" fill priority sizes="(max-width: 768px) 100vw, 44vw" className="object-cover object-[50%_32%] grayscale-[.08]" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#251b16]/90 to-transparent p-5 pt-28 text-[#fffaf0] sm:p-7">
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#d8c7aa]">Current field notes</p>
          <div className="mt-3 flex items-end justify-between gap-4"><p className="max-w-xs font-serif text-2xl leading-tight">Building useful software where code meets people and place.</p><ArrowUpRight className="size-6 shrink-0" aria-hidden="true" /></div>
        </div>
      </motion.div>
    </section>
  );
}
