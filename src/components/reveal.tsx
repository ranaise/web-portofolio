"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const revealRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = revealRef.current;
    if (!node || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setIsVisible(true);
      observer.disconnect();
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={revealRef} className={cn("reveal-block", isVisible && "is-visible", className)} style={{ "--reveal-delay": `${delay}s` } as CSSProperties}>{children}</div>;
}
