"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ProjectPreview({ title, slides }: { title: string; slides: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="project-preview-viewport" aria-label={`${title} visual preview`}>
      <div className="project-preview-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {slides.map((src, index) => (
          <div className="project-preview-slide" key={src}>
            <Image src={src} alt={`${title} preview ${index + 1}`} fill sizes="(max-width: 767px) calc(100vw - 40px), 64vw" className="object-contain" priority={index === 0} />
          </div>
        ))}
      </div>
      {slides.length > 1 && <div className="project-preview-dots" aria-hidden="true">
        {slides.map((src, index) => <span key={src} className={index === activeIndex ? "is-active" : ""} />)}
      </div>}
    </div>
  );
}
