"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

function GalleryImage({ src, alt, onViewImage }: { src: string; alt: string; onViewImage: (src: string, title: string) => void }) {
  const [error, setError] = React.useState(false);

  return (
    <div className="w-full bg-rose-50/60 dark:bg-[#1A1114] border border-primary/25 rounded-2xl p-2.5 shadow-premium-md flex flex-col gap-2 transition-all duration-300 hover:border-primary/55 select-none">
      <div className="flex items-center justify-between px-2 py-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-2.5 h-3 rounded-[2px] bg-rose-200/50 dark:bg-black/50 border border-rose-300/30 dark:border-white/8" />
        ))}
      </div>

      <div
        className="relative w-full overflow-hidden rounded bg-rose-100/40 dark:bg-black/80 cursor-zoom-in group"
        onClick={() => onViewImage(src, alt)}
      >
        {!error ? (
          <>
            <img
              src={src}
              alt={alt}
              className="w-full h-auto max-h-[280px] object-contain transition-transform duration-500 group-hover:scale-105"
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
            <span className="text-[9px] font-heading font-bold text-primary/60 italic uppercase tracking-wider">
              Photo Frame
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-2 py-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-2.5 h-3 rounded-[2px] bg-rose-200/50 dark:bg-black/50 border border-rose-300/30 dark:border-white/8" />
        ))}
      </div>
    </div>
  );
}

function MilestoneCard({ 
  item, 
  index,
  onViewImage
}: { 
  item: typeof experienceData[0]; 
  index: number; 
  onViewImage: (src: string, title: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-3xl solid-surface bg-card/60 p-6 sm:p-10 space-y-6 border border-primary/20 relative overflow-hidden text-left shadow-premium-md"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/3 to-accent/3 pointer-events-none" />

      <div className="space-y-3 pb-4 border-b border-border/40 select-none">
        <span className="text-[10px] font-heading font-extrabold tracking-[0.25em] text-primary uppercase block">
          {item.role}
        </span>
        <h5 className="text-2xl sm:text-3xl font-heading font-bold italic text-foreground tracking-tight leading-none">
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

      {item.photos && item.photos.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-border/40 text-left">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-heading tracking-widest text-foreground font-bold uppercase flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Activity Gallery
            </span>
            <span className="text-[8px] font-mono text-muted-foreground/60 uppercase">
              medusa_dev_log.jpg
            </span>
          </div>
          <div className="flex flex-col gap-6 w-full">
            {item.photos.map((src, idx) => (
              <GalleryImage 
                key={idx} 
                src={src} 
                alt={`${item.company} Activity - Photo ${idx + 1}`} 
                onViewImage={onViewImage}
              />
            ))}
          </div>
        </div>
      )}
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
    <section id="experience" className="relative py-24 px-6 sm:px-8 bg-transparent transition-colors duration-300">
      
      {/* Decorative Motif: Subtle diagonal or vertical route marks */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1000 1200" className="w-full h-full max-w-[1200px] mx-auto" preserveAspectRatio="xMidYMid slice">
          <path d="M150,100 L150,1100" fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 8" />
          <path d="M850,200 L850,1000" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 8" opacity="0.6" />
          <circle cx="150" cy="300" r="3" fill="var(--primary)" />
          <circle cx="150" cy="700" r="3" fill="var(--primary)" />
          <circle cx="850" cy="400" r="2" fill="var(--accent)" />
          <circle cx="850" cy="800" r="2" fill="var(--accent)" />
          <path d="M150,300 L250,400" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.5" />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl space-y-16 relative z-10">
        
        <div className="max-w-2xl text-left space-y-2">
          <h2 className="text-xs font-heading font-bold uppercase tracking-wider text-primary italic">
            ✨ Timeline
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-foreground leading-[1.05] font-normal italic">
            Work Experience
          </h3>
          <div className="h-0.5 w-8 bg-primary/40 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8 text-left">
            <h4 className="text-sm font-heading uppercase tracking-wider text-foreground font-bold flex items-center gap-2 border-b border-border/60 pb-2 italic">
              <Briefcase className="h-4 w-4 text-primary shrink-0" />
              Work Milestones
            </h4>
            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <MilestoneCard 
                  key={item.id} 
                  item={item} 
                  index={index} 
                  onViewImage={openLightbox} 
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 text-left">
            <h4 className="text-sm font-heading uppercase tracking-wider text-foreground font-bold flex items-center gap-2 border-b border-border/60 pb-2 italic">
              <GraduationCap className="h-4 w-4 text-primary shrink-0" />
              Education &amp; Organizations
            </h4>

            <div className="relative border border-primary/20 solid-surface bg-card/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-premium-md overflow-hidden select-none">
              <div className="ticket-notch-left" />
              <div className="ticket-notch-right" />

              <div className="space-y-4">
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

                <div className="space-y-2 pt-2">
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

              <div className="border-t border-dashed border-primary/20 my-6" />

              <div className="space-y-6">
                <span className="text-[9px] font-heading font-extrabold tracking-[0.2em] text-primary uppercase block">
                  ✧ ORGANIZATIONAL EXPERIENCE
                </span>

                <div className="space-y-6">
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

              <div className="border-t border-dashed border-primary/20 my-6" />

              <div className="flex justify-center items-center gap-2 text-primary/40 text-xs">
                <span>✦</span><span>✧</span><span>✦</span>
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
