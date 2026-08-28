import { ArrowDown, ArrowRight } from "lucide-react";

export function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <ol className="architecture-map">
      {steps.map((step, index) => (
        <li key={`${index}-${step}`} className="architecture-node">
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
