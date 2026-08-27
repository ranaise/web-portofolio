import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TechnicalTags } from "@/components/technical-tags";
import { cn } from "@/lib/utils";

export function Projects() {
  const featured = projectsData.filter((project) => project.featured);
  const archive = projectsData.filter((project) => !project.featured);
  return <section id="projects" className="section-shell border-t border-border">
    <SectionHeading index="01" label="Selected work" title="Case files, not thumbnails." description="A closer look at the systems, decisions, and interaction flows behind the interface." />
    <div className="work-grid">
      {featured.map((project, index) => <Reveal key={project.id} className={cn("work-item", index === 0 && "work-item-lead")} delay={index * .06}>
        <Link href={`/projects/${project.id}`} className="case-card group">
          <div className="case-image"><Image src={project.screenshot} alt={`${project.title} interface`} fill sizes={index === 0 ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"} className="object-cover transition duration-700 group-hover:scale-[1.025]" /></div>
          <div className="case-meta"><span className="font-mono text-[10px] uppercase tracking-[.18em]">Case 0{index + 1} / {project.year}</span><ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
          <h3>{project.title}</h3><p>{project.subtitle}</p><TechnicalTags items={project.technologies.slice(0, 5)} className="mt-5" />
        </Link>
      </Reveal>)}
    </div>
    <div className="mt-24 border-t border-border"><div className="eyebrow py-5"><span>Project index</span><span>{archive.length} additional studies</span></div>{archive.map((project, index) => <Link key={project.id} href={`/projects/${project.id}`} className="archive-row group"><span className="font-mono text-xs text-muted-foreground">0{index + 5}</span><span className="archive-title">{project.title}</span><span className="hidden text-sm text-muted-foreground sm:block">{project.subtitle}</span><ArrowUpRight className="size-5" /></Link>)}</div>
  </section>;
}
