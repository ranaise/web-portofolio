"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

export function ArchitectureFlow({ steps }: { steps: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (steps.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % steps.length), 1800);
    return () => window.clearInterval(timer);
  }, [steps.length]);

  return (
    <ol className="architecture-map" aria-label="System flow">
      {steps.map((step, index) => (
        <li key={`${index}-${step}`} className={`architecture-node${index === activeIndex ? " is-active" : ""}`}>
          <span className="architecture-node-number">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <span className="architecture-node-label">System layer</span>
            <strong>{step}</strong>
          </div>
          {index < steps.length - 1 && <ArrowRight className="architecture-node-arrow-right" aria-hidden="true" />}
          {index < steps.length - 1 && <ArrowDown className="architecture-node-arrow-down" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}
