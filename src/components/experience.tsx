"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Camera, ZoomIn } from "lucide-react";
import { experienceData, orgExperienceData, educationDetails } from "@/data";

// Parse **text** markdown bold syntax into <strong> JSX
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

// Resilient gallery image loader with click-to-zoom support
function GalleryImage({ src, alt, onViewImage }: { src: string; alt: string; onViewImage: (src: string, title: string) => void }) {

  const [error, setError] = React.useState(false);

  return (
    <div className="w-full bg-rose-50/60 dark:bg-[#1A1114] border border-primary/25 rounded-2xl p-2.5 shadow-premium-md flex flex-col gap-2 transition-all duration-300 hover:border-primary/55 select-none">
      {/* Top film roll sprocket holes */}
      <div className="flex items-center justify-between px-2 py-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-2.5 h-3 rounded-[2px] bg-rose-200/50 dark:bg-black/50 border border-rose-300/30 dark:border-white/8" />
        ))}
      </div>

      {/* Film image frame — height adapts to image */}
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

      {/* Bottom film roll sprocket holes */}
      <div className="flex items-center justify-between px-2 py-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-2.5 h-3 rounded-[2px] bg-rose-200/50 dark:bg-black/50 border border-rose-300/30 dark:border-white/8" />
        ))}
      </div>
    </div>
  );
}

// Helper component for work experience milestone cards
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
      className="rounded-3xl bg-card p-6 sm:p-10 space-y-6 border border-primary/20 relative overflow-hidden text-left shadow-premium-md"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/3 to-accent/3 pointer-events-none" />

      {/* Card Header */}
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

      {/* Achievements list with bold parsing */}
      <ul className="space-y-4 py-2">
        {item.achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-[7px]" />
            <span>{renderBoldText(achievement)}</span>
          </li>
        ))}
      </ul>

      {/* Interactive Activity Photos Gallery - Rearranged vertically below text for maximum visibility */}
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
  const [lightbox, setLightbox] = React.useState<{ src: string; title: string } | null>(null);

  return (
    <section id="experience" className="py-24 px-6 sm:px-8 bg-muted/10 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl space-y-16">
        
        {/* Section Heading */}
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
          {/* Left Column: Work Milestones */}
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
                  onViewImage={(src, title) => setLightbox({ src, title })} 
                />
              ))}
            </div>
          </div>

          {/* Right Column: Education & Organizations */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h4 className="text-sm font-heading uppercase tracking-wider text-foreground font-bold flex items-center gap-2 border-b border-border/60 pb-2 italic">
              <GraduationCap className="h-4 w-4 text-primary shrink-0" />
              Education &amp; Organizations
            </h4>

            {/* Vintage Ticket Stub Container */}
            <div className="relative border border-primary/25 bg-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-premium-md overflow-hidden select-none">
              {/* Ticket Notches */}
              <div className="ticket-notch-left" />
              <div className="ticket-notch-right" />

              {/* Ticket Header: Education */}
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
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <h5 className="text-sm sm:text-base font-heading font-bold text-foreground leading-tight">
                      {educationDetails.degree}
                    </h5>
                    <p className="text-xs text-muted-foreground leading-normal">
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
                      <li key={award} className="text-xs text-muted-foreground flex items-center gap-2">
                        <Award className="h-3.5 w-3.5 text-primary shrink-0" />
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Perforated dashed divider inside the ticket stub */}
              <div className="border-t border-dashed border-primary/20 my-6" />

              {/* Ticket Body: Organizations */}
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
                          <li key={i} className="text-[11px] text-muted-foreground leading-relaxed flex items-start gap-1.5">
                            <span className="h-1 w-1 rounded-full mt-1.5 bg-primary shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perforated dashed divider for barcode */}
              <div className="border-t border-dashed border-primary/20 my-6" />

              {/* Decorative Starburst icon separator */}
              <div className="flex justify-center items-center gap-2 text-primary/40 text-xs">
                <span>✦</span><span>✧</span><span>✦</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-default"
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center gap-4"
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-premium-2xl border border-white/10"
              />
              <div className="text-white/80 text-[10px] font-mono tracking-widest uppercase bg-black/60 border border-white/10 px-4 py-2 rounded-full select-none shadow-md">
                {lightbox.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
