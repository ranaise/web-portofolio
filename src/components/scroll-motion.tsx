"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const scrollMotionSelectors = [
  "main > section",
  "main > .route-page > *",
  ".project-dossier-hero",
  ".project-dossier-signalbar",
  ".project-dossier-section",
  ".project-dossier-footer",
].join(",");

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(scrollMotionSelectors));
    if (!elements.length) return;

    elements.forEach((element) => element.classList.add("scroll-motion-target"));

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-scroll-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-scroll-visible", entry.isIntersecting));
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
