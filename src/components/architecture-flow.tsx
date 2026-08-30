"use client";

import { useEffect, useState, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Bot,
  Boxes,
  Cable,
  CodeXml,
  ListChecks,
  PanelTop,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

interface ArchitectureDetail {
  description: string;
  icon: LucideIcon;
}

const architectureDetails: Array<[string, ArchitectureDetail]> = [
  ["LSL Chat Object", { description: "Captures public chat in world", icon: CodeXml }],
  ["HTTP Request", { description: "Sends message context as JSON", icon: Cable }],
  ["FastAPI Backend", { description: "Receives and routes requests", icon: ServerCog }],
  ["Rule Normalization", { description: "Checks deterministic rules first", icon: ShieldCheck }],
  ["AI Analysis", { description: "Reviews ambiguous content", icon: BrainCircuit }],
  ["Violation State", { description: "Stores the moderation decision", icon: Activity }],
  ["Prison / AI Jailer", { description: "Applies and resolves restrictions", icon: Bot }],
  ["Dashboard Monitoring", { description: "Surfaces live operational state", icon: PanelTop }],
  ["Web Monitor", { description: "Learner chooses a run", icon: PanelTop }],
  ["Attempt + Code Runner", { description: "Runs bounded learner code", icon: CodeXml }],
  ["Evaluator", { description: "Checks output and technique", icon: ListChecks }],
  ["Score + Actual Result", { description: "Stores score and replay data", icon: Activity }],
  ["Simulator Master", { description: "Starts the world sequence", icon: ServerCog }],
  ["Scene Controller", { description: "Maps results to scene actions", icon: Boxes }],
  ["Virtual-World Actors", { description: "Animate the documented objects", icon: Sparkles }],
  ["Animated Result", { description: "Shows the final algorithm trace", icon: Workflow }],
];

const detailsByName = new Map(architectureDetails);

function getPosition(index: number) {
  const row = Math.floor(index / 4) + 1;
  const columnInRow = index % 4;
  return { row, column: row % 2 === 0 ? 4 - columnInRow : columnInRow + 1 };
}

function getConnector(index: number, length: number) {
  if (index === length - 1) return null;
  const current = getPosition(index);
  const next = getPosition(index + 1);
  if (next.row > current.row) return "down";
  return next.column > current.column ? "right" : "left";
}

export function ArchitectureFlow({ steps }: { steps: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (steps.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % steps.length), 1800);
    return () => window.clearInterval(timer);
  }, [steps.length]);

  return (
    <ol className="architecture-map" aria-label="System flow">
      {steps.map((step, index) => {
        const detail = detailsByName.get(step) ?? { description: "Connects this layer to the next step", icon: Activity };
        const Icon = detail.icon;
        const position = getPosition(index);
        const connector = getConnector(index, steps.length);
        const style = { "--architecture-column": position.column, "--architecture-row": position.row, "--architecture-index": index } as CSSProperties;

        return <li key={`${index}-${step}`} className={`architecture-node${index === activeIndex ? " is-active" : ""}`} style={style} aria-current={index === activeIndex ? "step" : undefined}>
          <div className="architecture-node-topline"><span className="architecture-node-number">{String(index + 1).padStart(2, "0")}</span><span className="architecture-node-label">System layer</span></div>
          <span className="architecture-node-icon" aria-hidden="true"><Icon /></span>
          <div className="architecture-node-content"><strong>{step}</strong><small>{detail.description}</small></div>
          {connector === "right" && <ArrowRight className="architecture-node-arrow architecture-node-arrow-right" aria-hidden="true" />}
          {connector === "left" && <ArrowLeft className="architecture-node-arrow architecture-node-arrow-left" aria-hidden="true" />}
          {connector === "down" && <ArrowDown className="architecture-node-arrow architecture-node-arrow-down" aria-hidden="true" />}
          {index < steps.length - 1 && <ArrowDown className="architecture-node-arrow architecture-node-arrow-mobile-down" aria-hidden="true" />}
        </li>;
      })}
    </ol>
  );
}
