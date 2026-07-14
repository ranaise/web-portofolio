"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, ZoomIn, CheckCircle2, Layers } from "lucide-react";
import { projectsData, projectDetails } from "@/data";
import { TechIcon } from "@/components/projects";
import { GithubIcon } from "@/components/icons";
import { LightboxDialog } from "@/components/ui/lightbox-dialog";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = React.use(params);
  
  // Basic project info from the main listing
  const project = projectsData.find((p) => p.id === id);
  // Detailed info including workflows and gallery
  const details = projectDetails[id];
  
  const [activeGallery, setActiveGallery] = React.useState<{
    isOpen: boolean;
    title: string;
    images: string[];
    description: React.ReactNode;
  }>({
    isOpen: false,
    title: "",
    images: [],
    description: null,
  });

  if (!project || !details) {
    notFound();
  }

  const openLightbox = (title: string, images: string[], desc: string) => {
    setActiveGallery({
      isOpen: true,
      title,
      images,
      description: <p className="text-sm leading-relaxed">{desc}</p>,
    });
  };

  return (
    <div className="min-h-screen py-16 px-6 sm:px-8 flex flex-col items-center justify-center relative overflow-hidden bg-background">
      
      {/* Restrained Route Background (Instead of the global topography) */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[20%] h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-3xl space-y-8 z-10 text-left">
        {/* Back navigation action */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors group h-11 px-3.5 rounded-xl border border-border bg-card/45 backdrop-blur-sm shadow-premium-sm"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Projects
        </Link>

        {/* Thick Card Container */}
        <div className="rounded-2xl overflow-hidden solid-surface p-8 sm:p-12 space-y-10 shadow-premium-lg">
          
          {/* Header Title Information */}
          <div className="space-y-3 pb-8 border-b border-border/40">
            <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold">
              Project Details
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground leading-[1.05]">
              {project.title}
            </h1>
            <p className="text-sm font-medium text-muted-foreground">
              {project.subtitle} • {project.year}
            </p>
          </div>

          {/* Details breakdown */}
          <div className="space-y-8 leading-[1.7]">
            {/* 1. Project Summary */}
            <div className="space-y-3">
              <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
                Overview
              </strong>
              <p className="text-sm sm:text-base text-muted-foreground">
                {project.overview}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                {details.description}
              </p>
            </div>

            {/* 2. Role and Scope */}
            <div className="space-y-3">
              <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
                Role &amp; Contribution
              </strong>
              <p className="text-sm sm:text-base text-muted-foreground">
                {project.contribution}
              </p>
            </div>

            {/* 3. Key Capabilities */}
            <div className="space-y-3">
              <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
                Key Capabilities
              </strong>
              <ul className="space-y-2">
                {details.coreLogic.map((logic, idx) => {
                  const [title, desc] = logic.split(": ");
                  return (
                    <li key={idx} className="flex gap-3 text-sm sm:text-base text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-foreground font-medium">{title}</strong>
                        {desc ? `: ${desc}` : ""}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* 4. Interface Gallery */}
          {details.gallery && (details.gallery.mobile?.length || details.gallery.web?.length) ? (
            <div className="space-y-6 pt-8 border-t border-border/40">
              <div className="space-y-1">
                <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
                  Interface Gallery
                </strong>
                <p className="text-xs text-muted-foreground">
                  Select a viewport to view details and workflows.
                </p>
              </div>

              {/* Mobile Viewports */}
              {details.gallery.mobile && details.gallery.mobile.length > 0 && (
                <div className="space-y-3">
                  <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-primary block">
                    Mobile Interfaces
                  </span>
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin snap-x">
                    {details.gallery.mobile.map((item, idx) => (
                      <button 
                        key={idx} 
                        className="w-36 aspect-[9/19.5] relative rounded-xl overflow-hidden border border-border shadow-xs shrink-0 cursor-zoom-in group/img snap-start focus:outline-none focus:ring-2 focus:ring-primary text-left"
                        onClick={() => openLightbox(item.label, item.images, details.workflow)}
                        aria-label={`View ${item.label} gallery`}
                      >
                        <Image src={item.images[0]} alt={item.label} fill sizes="144px" className="object-cover transition-transform duration-500 group-hover/img:scale-105" />
                        
                        {item.images.length > 1 && (
                          <div className="absolute top-2 right-2 bg-black/75 border border-white/10 rounded-full px-2 py-0.5 text-[8.5px] font-mono text-white flex items-center gap-1 z-10">
                            <Layers className="h-2.5 w-2.5" />
                            <span>{item.images.length}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                          <ZoomIn className="h-6 w-6 text-white drop-shadow-md mb-2" />
                          <span className="text-[10px] text-white font-bold leading-tight">{item.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Web Viewports */}
              {details.gallery.web && details.gallery.web.length > 0 && (
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-primary block">
                    Web Interfaces
                  </span>
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin snap-x">
                    {details.gallery.web.map((item, idx) => (
                      <button 
                        key={idx} 
                        className="w-64 aspect-[16/10] relative rounded-xl overflow-hidden border border-border shadow-xs shrink-0 cursor-zoom-in group/img snap-start focus:outline-none focus:ring-2 focus:ring-primary text-left"
                        onClick={() => openLightbox(item.label, item.images, details.workflow)}
                        aria-label={`View ${item.label} gallery`}
                      >
                        <Image src={item.images[0]} alt={item.label} fill sizes="256px" className="object-cover transition-transform duration-500 group-hover/img:scale-105" />
                        
                        {item.images.length > 1 && (
                          <div className="absolute top-2 right-2 bg-black/75 border border-white/10 rounded-full px-2 py-0.5 text-[8.5px] font-mono text-white flex items-center gap-1 z-10">
                            <Layers className="h-2.5 w-2.5" />
                            <span>{item.images.length}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                          <ZoomIn className="h-6 w-6 text-white drop-shadow-md mb-2" />
                          <span className="text-xs text-white font-bold leading-tight">{item.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : null}

          {/* 5. Technology Stack */}
          <div className="space-y-3 pt-8 border-t border-border/40">
            <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
              Technology Stack
            </strong>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tag) => (
                <TechIcon key={tag} name={tag} />
              ))}
            </div>
          </div>

          {/* 6. Repository & Live Links */}
          <div className="pt-8 border-t border-border/40 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-foreground text-background hover:scale-105 transition-transform"
              >
                <GithubIcon className="w-4 h-4" />
                View Source
              </a>
            )}
            
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold border border-border bg-card/50 hover:bg-muted hover:text-foreground transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <LightboxDialog
        isOpen={activeGallery.isOpen}
        onClose={() => setActiveGallery((prev) => ({ ...prev, isOpen: false }))}
        title={activeGallery.title}
        images={activeGallery.images}
        description={activeGallery.description}
      />
    </div>
  );
}
