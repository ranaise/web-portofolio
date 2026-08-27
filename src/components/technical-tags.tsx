import { cn } from "@/lib/utils";
export function TechnicalTags({ items, className }: { items: string[]; className?: string }) { return <ul className={cn("flex flex-wrap gap-2", className)} aria-label="Technologies">{items.map((item) => <li key={item} className="tech-tag">{item}</li>)}</ul>; }
