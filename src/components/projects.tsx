"use client";

import type { PointerEvent, KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data";
import { BotanicalDecoration } from "@/components/botanical-decoration";
import { TechnicalTags } from "@/components/technical-tags";

const autoplayDelay = 4800;
const internshipProjectIds = ["ai-moderator-2026", "medusa-simulator-2026"];

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const activeProject = projectsData[activeIndex];
  const isInternship = internshipProjectIds.includes(activeProject.id);

  useEffect(() => {
    if (isDragging || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % projectsData.length), autoplayDelay);
    return () => window.clearInterval(timer);
  }, [isDragging]);

  const move = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + projectsData.length) % projectsData.length);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStart.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current === null) return;
    setDragOffset(Math.max(-170, Math.min(170, event.clientX - pointerStart.current)));
  };

  const resetPointer = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    setIsDragging(false);
    setDragOffset(0);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (Math.abs(distance) >= 42) move(distance < 0 ? 1 : -1);
  };

  const handlePointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current === null) return;
    pointerStart.current = null;
    setIsDragging(false);
    setDragOffset(0);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") move(1);
    if (event.key === "ArrowLeft") move(-1);
  };

  return (
    <section className="projects-carousel-page" aria-label="All projects">
      <BotanicalDecoration className="projects-carousel-botanical projects-carousel-botanical-right" />
      <BotanicalDecoration className="projects-carousel-botanical projects-carousel-botanical-left" />

      <header className="projects-carousel-header">
        <div>
          <p className="section-kicker"><span>01</span><span>All projects</span></p>
          <h2>Built across screens and systems</h2>
        </div>
        <p><strong>08</strong> projects, moving from backend systems and AI tools to mobile applications and interactive software.</p>
      </header>

      <div
        className="project-carousel-shell"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-roledescription="carousel"
        aria-label="All projects"
      >
        <div
          className={`project-carousel-viewport${isDragging ? " is-dragging" : ""}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={resetPointer}
          onPointerCancel={handlePointerCancel}
        >
          <div className="project-carousel-track" style={{ transform: `translate3d(calc(-${activeIndex * 100}% + ${dragOffset}px), 0, 0)` }}>
            {projectsData.map((project, index) => (
              <div className="project-carousel-slide" key={project.id} aria-hidden={index !== activeIndex}>
                <Image src={project.screenshot} alt={`${project.title} interface preview`} fill sizes="(max-width: 767px) calc(100vw - 40px), 62vw" className="object-contain" draggable={false} preload={index === 0} />
                <span className="project-carousel-slide-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="project-carousel-copy" key={activeProject.id} aria-live="polite">
          <div className="project-carousel-copy-topline"><span>{String(activeIndex + 1).padStart(2, "0")} / {String(projectsData.length).padStart(2, "0")}</span><span>{isInternship ? "Internship work" : "Project"}</span><span>{activeProject.year}</span></div>
          <div>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.subtitle}</p>
            <TechnicalTags items={activeProject.technologies} className="project-carousel-tags" />
          </div>
          <Link href={`/projects/${activeProject.id}`} className="project-carousel-action">Open project <ArrowUpRight /></Link>
        </div>
      </div>

      <div className="project-carousel-controls">
        <div className="project-carousel-progress" aria-hidden="true"><span style={{ width: `${((activeIndex + 1) / projectsData.length) * 100}%` }} /></div>
        <div className="project-carousel-buttons">
          <button type="button" onClick={() => move(-1)} aria-label="Previous project"><ArrowLeft /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next project"><ArrowRight /></button>
        </div>
      </div>

      <nav className="project-carousel-index" aria-label="Choose project">
        {projectsData.map((project, index) => (
          <button key={project.id} type="button" className={index === activeIndex ? "is-active" : ""} onClick={() => setActiveIndex(index)} aria-current={index === activeIndex ? "true" : undefined}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{project.title}</strong>
          </button>
        ))}
      </nav>

    </section>
  );
}
