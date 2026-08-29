"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function BotanicalDecoration({ className }: { className?: string }) {
  const decorationRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = decorationRef.current;
    if (!node || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setIsVisible(true);
      observer.disconnect();
    }, { threshold: 0.05, rootMargin: "80px 0px" });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={decorationRef} className={cn("botanical-decoration", isVisible && "is-visible", className)} aria-hidden="true">
      <svg viewBox="0 0 180 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="botanical-stem" d="M92 324C87 261 94 202 117 145C131 110 145 75 146 20" />
        <path d="M112 164C76 147 56 124 45 91C82 99 105 120 112 164Z" />
        <path d="M125 132C156 111 169 86 170 54C141 68 126 94 125 132Z" />
        <path d="M98 211C67 200 42 177 27 143C65 150 88 170 98 211Z" />
        <path d="M94 248C122 233 141 211 149 181C118 191 100 213 94 248Z" />
        <path d="M90 285C60 274 36 253 20 221C55 225 79 246 90 285Z" />
        <path d="M140 84C121 68 111 47 112 20C135 34 145 54 140 84Z" />
        <path className="botanical-vein" d="M48 94C71 115 92 137 112 164M168 58C148 79 135 104 125 132M29 146C57 165 80 185 98 211M146 185C124 204 106 225 94 248M22 224C49 243 72 263 90 285M114 22C128 43 137 64 140 84" />
      </svg>
    </div>
  );
}
