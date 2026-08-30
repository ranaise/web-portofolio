import { cn } from "@/lib/utils";
import { TechnologyIcon } from "@/components/technology-icon";

export function TechnicalTags({ items, className }: { items: string[]; className?: string }) {
  return <ul className={cn("tech-icon-list", className)} aria-label="Technologies">{items.map((item) => <li key={item} className="tech-icon-item" title={item} aria-label={item}><TechnologyIcon name={item} /><span className="sr-only">{item}</span></li>)}</ul>;
}
