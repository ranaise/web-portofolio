"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hardSkillsCategories, softSkillsList } from "@/data";

// Helper component for Custom SVGs that Devicon doesn't cover
function CustomSkillIcon({ name }: { name: string }) {
  switch (name) {
    case "Linden Scripting Language (LSL)":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#2E7D32">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <text x="6" y="15" fill="white" fontSize="11" fontFamily="monospace" fontWeight="bold">LS</text>
        </svg>
      );
    case "XML":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#E65100">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <text x="5" y="15" fill="white" fontSize="10" fontFamily="monospace" fontWeight="bold">XML</text>
        </svg>
      );
    case "Streamlit":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#FF4B4B">
          <path d="M12 3L2 20h20L12 3zm0 4.5L18.5 18H5.5L12 7.5z" />
        </svg>
      );
    case "Groq API":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <circle cx="12" cy="12" r="5" fill="#F3F4F6" />
          <text x="10" y="15.5" fill="currentColor" fontSize="9" fontWeight="extrabold" fontFamily="sans-serif">G</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      );
  }
}

export function Skills() {
  const [activeTab, setActiveTab] = React.useState(hardSkillsCategories[0].title);
  const activeCategory = hardSkillsCategories.find(c => c.title === activeTab) || hardSkillsCategories[0];
  
  // Core Emphasis list from plan
  const coreEmphasis = ["Python", "FastAPI", "Laravel", "MySQL", "Java", "Flutter", "Groq API", "Llama 3"];

  return (
    <section id="skills" className="relative py-24 px-6 sm:px-8 bg-transparent transition-colors duration-300 z-10">
      
      {/* Decorative Motif: Orbit fragments, modular grid marks, small matrix points */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1000 800" className="w-full h-full max-w-[1200px] mx-auto" preserveAspectRatio="xMidYMid slice">
          <path d="M800,200 A300,300 0 0,0 200,800" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.6" />
          <rect x="100" y="100" width="20" height="20" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 4" />
          <rect x="900" y="700" width="20" height="20" fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="500" cy="400" r="2" fill="var(--primary)" />
          <circle cx="550" cy="400" r="2" fill="var(--primary)" />
          <circle cx="600" cy="400" r="2" fill="var(--primary)" />
          <circle cx="500" cy="450" r="2" fill="var(--primary)" />
          <circle cx="550" cy="450" r="2" fill="var(--accent)" />
          <circle cx="600" cy="450" r="2" fill="var(--primary)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl space-y-12 relative z-10">
        
        <div className="max-w-2xl text-left space-y-2 pb-4 border-b border-border/40">
          <h2 className="text-xs font-heading font-bold uppercase tracking-wider text-primary italic">
            ✨ Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-foreground leading-[1.05] font-normal italic">
            Technical Matrix
          </h3>
          <p className="text-xs text-muted-foreground pt-1">
            The tools, languages, and frameworks I use to build robust and scalable systems.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 pb-2">
          {hardSkillsCategories.map((category) => {
            const active = activeTab === category.title;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(category.title)}
                className={`px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                  active 
                    ? "bg-card text-foreground shadow-xs border border-border/40" 
                    : "bg-transparent text-muted-foreground hover:text-foreground border border-transparent hover:border-border/20"
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Skills Grid - auto-fill CSS grid, compact chips */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {activeCategory.skills.map((skill, index) => {
                const isCore = coreEmphasis.includes(skill.name);
                
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className={`group rounded-2xl p-4 solid-surface flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 border ${
                      isCore ? "bg-card/70 border-primary/30 shadow-premium-md" : "bg-card/40 border-primary/10 shadow-sm hover:border-primary/30"
                    }`}
                  >
                    <div className={`h-8 w-8 flex items-center justify-center transition-all duration-300 ${
                      isCore ? "grayscale-0 opacity-100 scale-110" : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    }`}>
                      {skill.custom ? (
                        <CustomSkillIcon name={skill.name} />
                      ) : (
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.devicon}`}
                          alt={skill.name}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => { e.currentTarget.style.display = "none"; }}
                        />
                      )}
                    </div>
                    <span className={`text-[10px] ${isCore ? "font-bold text-foreground" : "font-semibold text-muted-foreground"}`}>
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Soft Skills */}
        <div className="pt-8 border-t border-border/40">
          <h4 className="text-[10px] font-heading font-bold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary" />
            Soft Skills &amp; Competencies
          </h4>
          <div className="flex flex-wrap gap-2">
            {softSkillsList.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-[10px] font-bold rounded-lg solid-surface bg-card/40 border border-border/50 text-foreground shadow-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
