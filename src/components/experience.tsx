"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Camera, ZoomIn } from "lucide-react";
import { experienceData, orgExperienceData, educationDetails } from "@/data";
import { LightboxDialog } from "@/components/ui/lightbox-dialog";

function renderBoldText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-foreground font-semibold">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

function GalleryImage({ src, alt, objectPosition = "center", onViewImage }: { src: string; alt: string; objectPosition?: string; onViewImage: (src: string, title: string) => void }) {
  const [error, setError] = React.useState(false);

  return (
    <figure className="group w-full select-none">
      <div
        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-primary/20 bg-card/20 cursor-zoom-in"
        onClick={() => onViewImage(src, alt)}
      >
        {!error ? (
          <>
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ objectPosition }}
              onError={() => setError(true)}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="h-6 w-6 text-white drop-shadow-md" />
            </div>
          </>
        ) : (
          <div className="h-[140px] flex flex-col items-center justify-center text-center p-4">
            <Camera className="h-6 w-6 text-primary/40 mb-2" />
              <span className="text-[9px] font-heading font-bold text-primary/60 uppercase tracking-wider">
              Photo Frame
            </span>
          </div>
        )}
      </div>
    </figure>
  );
}

function MilestoneCard({ 
  item, 
  index
}: { 
  item: typeof experienceData[0]; 
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl solid-surface bg-card/45 p-5 sm:p-6 space-y-4 border border-primary/15 relative overflow-hidden text-left shadow-premium-md"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/3 to-accent/3 pointer-events-none" />

      <div className="space-y-3 pb-4 border-b border-border/40 select-none">
        <span className="text-[10px] font-heading font-extrabold tracking-[0.25em] text-primary uppercase block">
          {item.role}
        </span>
        <h5 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight leading-none">
          {item.company}
        </h5>
        <p className="text-[11px] font-heading tracking-widest text-muted-foreground uppercase pt-1">
          {item.duration} • {item.location}
        </p>
      </div>

      <ul className="space-y-4 py-2">
        {item.achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-[7px]" />
            <span>{renderBoldText(achievement)}</span>
          </li>
        ))}
      </ul>

    </motion.div>
  );
}

export function Experience() {
  const [activeGallery, setActiveGallery] = React.useState<{
    isOpen: boolean;
    title: string;
    images: string[];
  }>({
    isOpen: false,
    title: "",
    images: [],
  });

  const openLightbox = (src: string, title: string) => {
    setActiveGallery({
      isOpen: true,
      title,
      images: [src],
    });
  };

  return (
    <section id="experience" className="relative py-16 sm:py-20 px-6 sm:px-8 bg-transparent transition-colors duration-300">
      
      {/* Quiet Bloom motif: a restrained rail, short connectors, and one offset node. */}
      <div className="quiet-bloom quiet-bloom-experience absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1000 1200" className="w-full h-full max-w-[1200px] mx-auto" preserveAspectRatio="xMidYMid slice">
          <path d="M170 150 V980" fill="none" stroke="var(--primary)" strokeWidth="1" />
          <path d="M170 270 H245 M170 500 H280 M170 760 H235" fill="none" stroke="var(--primary)" strokeWidth="1" />
          <path d="M245 270 V310 H300" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.7" />
          <circle cx="170" cy="270" r="4" fill="var(--primary)" />
          <circle cx="280" cy="500" r="3" fill="var(--accent)" />
          <circle cx="170" cy="760" r="3" fill="var(--primary)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl space-y-10 relative z-10">
        
        <div className="section-anchor max-w-2xl text-left space-y-2">
          <h2 className="text-xs font-heading font-bold uppercase tracking-wider text-primary">
            ✨ Timeline
          </h2>
          <span className="section-anchor-mark" aria-hidden="true" />
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-foreground leading-[1.05] font-normal">
            Work Experience
          </h3>
          <div className="h-0.5 w-8 bg-primary/40 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-left">
            <h4 className="text-sm font-heading uppercase tracking-wider text-foreground font-bold flex items-center gap-2 border-b border-border/60 pb-2">
              <Briefcase className="h-4 w-4 text-primary shrink-0" />
              Work Milestones
            </h4>
            <div className="space-y-4">
              {experienceData.map((item, index) => (
                <MilestoneCard 
                  key={item.id} 
                  item={item} 
                  index={index}
                />
              ))}
            </div>

            {experienceData[0]?.photos?.length ? (
              <div className="relative space-y-4 border-t border-border/40 pt-7 text-left">
                <div className="absolute -top-7 left-0 hidden h-7 w-px bg-primary/50 lg:block" aria-hidden="true" />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary">Medusa Technology · Internship</p>
                  <h4 className="mt-1 text-xl font-heading font-bold text-foreground">Internship Moments</h4>
                  <p className="mt-2 text-[9px] font-mono uppercase tracking-[0.14em] text-muted-foreground">JUN 2026 — AUG 2026 · JAKARTA, INDONESIA</p>
                </div>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  {experienceData[0].photos.map((src, idx) => (
                    <GalleryImage
                      key={src}
                      src={src}
                      alt={`Medusa Technology internship moment ${idx + 1}`}
                      objectPosition={idx === 0 ? "center 35%" : "center"}
                      onViewImage={openLightbox}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-5 space-y-6 text-left">
            <h4 className="text-sm font-heading uppercase tracking-wider text-foreground font-bold flex items-center gap-2 border-b border-border/60 pb-2">
              <GraduationCap className="h-4 w-4 text-primary shrink-0" />
              Education &amp; Organizations
            </h4>

            <div className="space-y-5">
              <div className="solid-surface bg-card/30 rounded-2xl border border-border/60 p-5 sm:p-6 space-y-3 shadow-sm overflow-hidden select-none">
                <span className="text-[9px] font-heading font-extrabold tracking-[0.2em] text-primary uppercase block">
                  🎀 EDUCATION &amp; AWARDS
                </span>
                
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center shrink-0 border border-primary/20 p-1">
                    <img
                      src="/projects/logo telkom university.png"
                      alt="Telkom University Logo"
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <h5 className="text-sm sm:text-base font-heading font-bold text-foreground leading-tight">
                      {educationDetails.degree}
                    </h5>
                    <p className="text-xs text-muted-foreground leading-normal font-medium">
                      {educationDetails.institution}
                    </p>
                    <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold bg-primary/10 text-primary uppercase mt-1">
                      GPA {educationDetails.gpa}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-[9px] font-heading tracking-wider text-muted-foreground uppercase font-bold block mb-1">
                    Scholarships &amp; Honors
                  </span>
                  <ul className="space-y-1.5">
                    {educationDetails.awards.map((award) => (
                      <li key={award} className="text-xs text-muted-foreground flex items-center gap-2 font-medium">
                        <Award className="h-3.5 w-3.5 text-primary shrink-0" />
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="solid-surface bg-card/25 rounded-2xl border border-border/60 p-5 sm:p-6 space-y-4 shadow-sm overflow-hidden select-none">
                <span className="text-[9px] font-heading font-extrabold tracking-[0.2em] text-primary uppercase block">
                  ✧ ORGANIZATIONAL EXPERIENCE
                </span>

                <div className="space-y-4">
                  {orgExperienceData.map((item) => (
                    <div key={item.id} className="space-y-2 text-left relative pl-4 border-l border-primary/20">
                      <div>
                        <h5 className="text-xs sm:text-sm font-heading font-bold text-foreground leading-snug">
                          {item.role}
                        </h5>
                        <p className="text-[10px] text-muted-foreground font-semibold">
                          {item.organization} | <span>{item.duration}</span>
                        </p>
                      </div>

                      <ul className="space-y-1">
                        {item.tasks.map((task, i) => (
                          <li key={i} className="text-[11px] text-muted-foreground leading-relaxed flex items-start gap-1.5 font-medium">
                            <span className="h-1 w-1 rounded-full mt-1.5 bg-primary shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
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
