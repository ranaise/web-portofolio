"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ImageIcon, ZoomIn, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data";
import { LightboxDialog } from "@/components/ui/lightbox-dialog";

interface MockupProps {
  id: string;
  src: string;
  alt: string;
}

const appDetailsShort: Record<string, string> = {
  "nexevent-2026": "Coordinates campus event approvals across Student Affairs (Superadmin), Organization Presidents (Admin), and Students.",
  "posyandu-pintar": "Provides a health data logging dashboard for infant records, offering automated BMI/growth chart rendering and Groq AI diet suggestions.",
  "microplast-2026": "Automates microplastic fragment analysis under microscopic views using OpenCV binarization, Otsu filters, and circularity calculations.",
  "gpt-ner-2026": "Converts plain English documents into structured JSON entity labels, querying Groq Llama-3 models with evaluation metrics.",
  "my-dormitory-2025": "Manages resident check-in/check-out confirmations using localized GPS fence validation and camera-verified QR code scans.",
  "telyutalks-2025": "Serves as a campus question-and-answer discussion forum, integrating Telkom SSO login and admin content moderation queues."
};

function getAppDetailsShort(id: string, fallback: string): string {
  return appDetailsShort[id] || fallback;
}

export function TechIcon({ name }: { name: string }) {
  const deviconMap: Record<string, string> = {
    Python: "python/python-original.svg",
    FastAPI: "fastapi/fastapi-original.svg",
    Laravel: "laravel/laravel-original.svg",
    "C++": "cplusplus/cplusplus-original.svg",
    MySQL: "mysql/mysql-original.svg",
    PostgreSQL: "postgresql/postgresql-original.svg",
    Flutter: "flutter/flutter-original.svg",
    "Next.js": "nextjs/nextjs-original.svg",
    TypeScript: "typescript/typescript-original.svg",
    "Spring Boot": "spring/spring-original.svg",
  };

  const path = deviconMap[name];

  if (name === "Llama 3" || name === "Groq API") {
    return (
      <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 border-border/80 text-primary font-bold">
        {name}
      </Badge>
    );
  }

  if (name === "OpenCV") {
    return (
      <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 border-border/80 text-accent font-bold">
        {name}
      </Badge>
    );
  }

  if (name === "Streamlit") {
    return (
      <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 border-border/80 text-amber-500 font-bold">
        {name}
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 border-border/80 flex items-center gap-1.5 font-bold">
      {path ? (
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`}
          alt={`${name} logo`}
          className="h-3 w-3 object-contain shrink-0"
        />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
      )}
      {name}
    </Badge>
  );
}

// Project Card with explicit flip trigger for accessibility
function ProjectCard({
  project,
  onViewImage,
}: {
  project: typeof projectsData[0];
  onViewImage: (src: string, title: string) => void;
}) {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div className="w-full relative group min-h-[440px]">
      <div className="w-full h-full relative solid-surface bg-card/60 rounded-3xl border border-primary/20 shadow-premium-lg overflow-hidden flex flex-col justify-between p-5">
        
        {/* Toggle between image view and details view */}
        <AnimatePresence mode="wait">
          {!showDetails ? (
            <motion.div 
              key="front"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-heading font-bold italic uppercase tracking-wider">
                <span>✦ PROJECT</span>
                <span>{project.year}</span>
              </div>

              {/* Screenshot viewport */}
              <div 
                className="relative aspect-video w-full rounded-xl border border-border/30 overflow-hidden bg-muted/30 my-3 shadow-inner group/screen cursor-zoom-in"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewImage(project.screenshot, `${project.title} - Main Interface`);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onViewImage(project.screenshot, `${project.title} - Main Interface`);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Zoom image for ${project.title}`}
              >
                <img
                  src={project.screenshot}
                  alt={`Screen capture of ${project.title}`}
                  className="w-full h-full object-contain opacity-90 transition-transform duration-500 group-hover/screen:scale-105"
                />
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="h-6 w-6 text-white drop-shadow-md" />
                </div>
              </div>

              <div className="text-center space-y-1">
                <span className="text-[7.5px] font-heading font-bold text-primary/70 tracking-[0.25em] uppercase block">
                  ✦ {project.year}
                </span>
                <h4 className="text-2xl sm:text-3xl font-heading font-bold italic text-foreground leading-none tracking-tight">
                  {project.title}
                </h4>
                <span className="text-[10px] font-heading font-bold text-primary tracking-wider uppercase block">
                  {project.subtitle}
                </span>
              </div>

              <div className="mt-4 border-t border-border/30 pt-3 flex flex-col gap-2">
                <button
                  onClick={() => setShowDetails(true)}
                  aria-expanded={showDetails}
                  className="w-full py-2.5 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 text-[10px] font-heading font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  <Info className="w-3.5 h-3.5" />
                  View Details &amp; Links
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="back"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between text-left"
            >
              <div className="border-b border-border/30 pb-3">
                <h4 className="text-xl font-heading font-bold italic text-foreground leading-tight">
                  {project.title}
                </h4>
                <span className="text-[9px] font-heading font-bold text-primary uppercase tracking-wider block mt-0.5">
                  Overview &amp; Details
                </span>
              </div>

              <div className="flex-1 py-4 space-y-4 overflow-y-auto scrollbar-thin">
                <div className="space-y-1">
                  <strong className="text-[9px] font-heading font-bold text-primary tracking-widest uppercase block">
                    Overview
                  </strong>
                  <p className="text-[11px] leading-relaxed text-muted-foreground font-medium">
                    {project.overview}
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="text-[9px] font-heading font-bold text-primary tracking-widest uppercase block">
                    Core Functionality
                  </strong>
                  <p className="text-[11px] leading-relaxed text-muted-foreground font-medium">
                    {getAppDetailsShort(project.id, project.overview)}
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="text-[9px] font-heading font-bold text-primary tracking-widest uppercase block">
                    Technologies
                  </strong>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[8px] font-bold bg-muted/50 border border-border/50 text-muted-foreground uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-t border-border/30 pt-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center text-[10px] font-heading font-bold text-foreground hover:text-primary tracking-widest uppercase inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-border/40 bg-muted/20 hover:bg-primary/10 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    GitHub Source
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={() => setShowDetails(false)}
                    aria-expanded={showDetails}
                    className="flex-1 text-center text-[10px] font-heading font-bold text-muted-foreground hover:text-foreground tracking-widest uppercase inline-flex items-center justify-center py-2.5 rounded-xl border border-border hover:bg-muted/50 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    Back to Cover
                  </button>
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 text-center text-[10px] font-heading font-bold text-primary-foreground tracking-widest uppercase inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-primary bg-primary hover:bg-primary/90 transition-colors shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    Case Details
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [activeGallery, setActiveGallery] = React.useState<{
    isOpen: boolean;
    title: string;
    images: string[];
  }>({
    isOpen: false,
    title: "",
    images: [],
  });

  const categories = ["All", "AI / ML", "Fullstack", "Mobile", "Web"];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AI / ML") {
      return project.technologies.some((t) =>
        ["Llama 3", "Groq API", "LLM"].includes(t)
      );
    }
    if (activeCategory === "Fullstack") {
      return (
        (project.technologies.includes("Laravel") || project.technologies.includes("Spring Boot")) &&
        (project.technologies.includes("Flutter") || project.technologies.includes("Next.js") || project.technologies.includes("TypeScript"))
      );
    }
    if (activeCategory === "Mobile") {
      return project.technologies.includes("Flutter");
    }
    if (activeCategory === "Web") {
      return (
        project.technologies.includes("Spring Boot") ||
        project.technologies.includes("Next.js") ||
        project.technologies.includes("TypeScript") ||
        project.technologies.includes("Laravel") ||
        project.technologies.includes("Streamlit")
      );
    }
    return true;
  });

  const openLightbox = (src: string, title: string) => {
    setActiveGallery({
      isOpen: true,
      title,
      images: [src],
    });
  };

  return (
    <section id="projects" className="relative py-24 px-6 sm:px-8 bg-transparent transition-colors duration-300">
      
      {/* Decorative Motif: Restrained routing paths, connector fragments */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1000 1200" className="w-full h-full max-w-[1200px] mx-auto" preserveAspectRatio="xMidYMid slice">
          <path d="M100,200 L300,200 L300,400" fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 8" />
          <path d="M900,400 L700,400 L700,600" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 8" opacity="0.6" />
          <path d="M100,800 L300,800 L300,1000" fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 8" opacity="0.5" />
          <circle cx="100" cy="200" r="3" fill="var(--primary)" />
          <circle cx="300" cy="400" r="3" fill="var(--primary)" />
          <circle cx="900" cy="400" r="2" fill="var(--accent)" />
          <circle cx="700" cy="600" r="2" fill="var(--accent)" />
          <circle cx="100" cy="800" r="3" fill="var(--primary)" />
          <circle cx="300" cy="1000" r="3" fill="var(--primary)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl space-y-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/40">
          <div className="text-left space-y-2">
            <h2 className="text-xs font-heading font-bold uppercase tracking-wider text-primary italic">
              ✨ Portfolio
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-foreground leading-[1.05] font-normal italic">
              Featured Projects
            </h3>
            <p className="text-xs text-muted-foreground pt-1">
              Detailed breakdowns of product implementations, backend systems, and automated pipelines.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-muted/40 p-1.5 rounded-2xl border border-border/60 w-fit h-fit self-start md:self-end shadow-xs">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                    active 
                      ? "bg-card text-foreground shadow-xs font-extrabold border border-border/30" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column strict vertical grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                project={project}
                onViewImage={openLightbox}
              />
            );
          })}
        </div>
      </div>

      <LightboxDialog
        isOpen={activeGallery.isOpen}
        onClose={() => setActiveGallery((prev) => ({ ...prev, isOpen: false }))}
        title={activeGallery.title}
        images={activeGallery.images}
        description={null}
      />
    </section>
  );
}
