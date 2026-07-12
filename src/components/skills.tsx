"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hardSkillsCategories, softSkillsList } from "@/data";

// Helper component for Custom SVGs that Devicon doesn't cover
function CustomSkillIcon({ name }: { name: string }) {
  switch (name) {
    case "Linden Scripting Language (LSL)":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#2E7D32">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <text x="6" y="15" fill="white" fontSize="11" fontFamily="monospace" fontWeight="bold">LS</text>
        </svg>
      );
    case "XML":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#E65100">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <text x="5" y="15" fill="white" fontSize="10" fontFamily="monospace" fontWeight="bold">XML</text>
        </svg>
      );
    case "Streamlit":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#FF4B4B">
          <path d="M12 3L2 20h20L12 3zm0 4.5L18.5 18H5.5L12 7.5z" />
        </svg>
      );
    case "Groq API":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#000000">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <circle cx="12" cy="12" r="5" fill="#F3F4F6" />
          <text x="10" y="15.5" fill="#000000" fontSize="9" fontWeight="extrabold" fontFamily="sans-serif">G</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      );
  }
}

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 px-6 sm:px-8 bg-muted/10 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl text-left space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-2xl">
          <h2 className="text-xs font-heading font-bold uppercase tracking-wider text-primary italic">
            ✨ Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-foreground leading-[1.05] mt-2 font-normal italic">
            Technical Skills &amp; Stack
          </h3>
          <div className="h-0.5 w-8 bg-primary/40 mt-3 rounded-full" />
        </div>

        {/* Hard Skills Categories Stack */}
        <div className="space-y-12">
          {hardSkillsCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <h4 className="text-sm font-heading uppercase tracking-wider text-foreground font-bold border-b border-border/60 pb-2 flex items-center gap-3 italic">
                <span className="h-4 w-0.5 rounded-full bg-primary" />
                {category.title}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => {
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      whileHover={shouldReduceMotion ? {} : {
                        scale: 1.08,
                        y: -4,
                      }}
                      className="relative group rounded-2xl p-4 sm:p-5 glass-surface flex flex-col items-center justify-center text-center gap-3 select-none transition-all duration-300 hover:border-primary/40 hover:shadow-premium-md cursor-default"
                    >
                      {/* Hover visual glow card background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className="p-3.5 rounded-2xl bg-card border border-border/85 flex items-center justify-center transition-all group-hover:scale-110 shadow-xs">
                        {skill.custom ? (
                          <CustomSkillIcon name={skill.name} />
                        ) : (
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.devicon}`}
                            alt={`${skill.name} brand logo`}
                            className="h-7 w-7 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        )}
                      </div>
                      <span className="text-[11px] font-bold text-foreground tracking-tight leading-snug">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills List */}
        <div className="space-y-6 pt-8">
          <h4 className="text-sm font-mono uppercase tracking-wider text-foreground font-bold border-b border-border/60 pb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Soft Skills
          </h4>
          <div className="flex flex-wrap gap-3">
            {softSkillsList.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/45 transition-colors cursor-default select-none shadow-xs"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
