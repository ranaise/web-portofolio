import { cn } from "@/lib/utils";
export function SectionHeading({ label, title, description, className }: { label: string; title: string; description?: string; className?: string }) { return <header className={cn("section-heading", className)}><div className="eyebrow"><span>{label}</span></div><div><h2>{title}</h2>{description && <p>{description}</p>}</div></header>; }
