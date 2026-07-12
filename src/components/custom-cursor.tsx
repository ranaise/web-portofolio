"use client";

import * as React from "react";

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  color: string;
}

const PASTEL_COLORS = ["#FFA07A", "#87CEEB", "#98FFD9", "#FFF3A3"];

export function CustomCursor() {
  const [trail, setTrail] = React.useState<TrailPoint[]>([]);
  const trailId = React.useRef(0);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const color = PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)];
      const newPoint: TrailPoint = {
        id: trailId.current++,
        x: e.clientX,
        y: e.clientY,
        color,
      };

      // Keep only the last 15 coordinates to prevent memory leaks and maintain performance
      setTrail((prev) => [...prev.slice(-15), newPoint]);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {trail.map((point, index) => {
        const size = Math.max(4, 16 - (trail.length - index) * 0.8);
        const opacity = (index + 1) / (trail.length || 1);

        return (
          <div
            key={point.id}
            className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              left: point.x,
              top: point.y,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: point.color,
              opacity: opacity * 0.6,
              boxShadow: `0 0 10px ${point.color}`,
              transition: "opacity 300ms ease, transform 300ms ease",
            }}
          />
        );
      })}
    </div>
  );
}
